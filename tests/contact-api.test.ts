import { beforeEach, describe, expect, it, vi } from "vitest";
import { WorkerMailer } from "worker-mailer";
import { onRequestPost } from "../functions/api/contact";
import { PROJECT_TYPES } from "../src/data/project-types";

// Never talk to Zoho: every test sees a fake send.
vi.mock("worker-mailer", () => ({ WorkerMailer: { send: vi.fn() } }));
const send = vi.mocked(WorkerMailer.send);

const valid = {
  name: "Ada Lovelace",
  email: "ada@example.com",
  message: "We need a shop.",
  projectType: "Online shop",
};

/** POST these fields to the handler, as the form would. */
function post(fields: Record<string, string>) {
  const body = new FormData();
  for (const [key, value] of Object.entries(fields)) body.set(key, value);
  return onRequestPost({
    request: new Request("https://realhumandevs.com/api/contact", {
      method: "POST",
      body,
    }),
    env: { ZOHO_SMTP_PASSWORD: "test-password" },
  });
}

/** The [server, email] arguments of the one send call. */
function sent() {
  expect(send).toHaveBeenCalledOnce();
  return send.mock.calls[0];
}

beforeEach(() => {
  send.mockReset();
});

describe("a valid enquiry", () => {
  it("is sent to hello@ through Zoho and returns 200", async () => {
    const res = await post(valid);

    expect(res.status).toBe(200);
    expect(await res.json()).toEqual({ ok: true });

    const [server, email] = sent();
    expect(server).toMatchObject({
      host: "smtppro.zoho.com",
      port: 465,
      secure: true,
      credentials: {
        username: "hello@realhumandevs.com",
        password: "test-password",
      },
    });
    expect(email).toMatchObject({
      to: "hello@realhumandevs.com",
      reply: { name: "Ada Lovelace", email: "ada@example.com" },
      subject: "New enquiry from Ada Lovelace (Online shop)",
    });
    expect(email.text).toBe(
      [
        "Name: Ada Lovelace",
        "Email: ada@example.com",
        "Project type: Online shop",
        "",
        "We need a shop.",
      ].join("\n"),
    );
  });

  it.each(PROJECT_TYPES)("keeps the project type %s", async (projectType) => {
    await post({ ...valid, projectType });
    expect(sent()[1].subject).toBe(
      `New enquiry from Ada Lovelace (${projectType})`,
    );
  });

  it('labels an unknown project type "Not given"', async () => {
    await post({ ...valid, projectType: "Spaceship" });
    expect(sent()[1].subject).toBe("New enquiry from Ada Lovelace (Not given)");
  });
});

describe("validation", () => {
  it.each([
    ["no name", { name: "" }],
    ["a blank name", { name: "   " }],
    ["no message", { message: "" }],
    ["no email", { email: "" }],
    ["an email without @", { email: "ada.example.com" }],
    ["an email without a domain", { email: "ada@example" }],
  ])("rejects %s with 400 and sends nothing", async (_, change) => {
    const res = await post({ ...valid, ...change });

    expect(res.status).toBe(400);
    expect(await res.json()).toHaveProperty("error");
    expect(send).not.toHaveBeenCalled();
  });

  it("rejects a body that isn't form data", async () => {
    const res = await onRequestPost({
      request: new Request("https://realhumandevs.com/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(valid),
      }),
      env: { ZOHO_SMTP_PASSWORD: "test-password" },
    });

    expect(res.status).toBe(400);
    expect(send).not.toHaveBeenCalled();
  });
});

describe("guards", () => {
  it("pretends a bot that fills the honeypot succeeded, and sends nothing", async () => {
    const res = await post({ ...valid, website: "https://spam.example" });

    expect(res.status).toBe(200);
    expect(await res.json()).toEqual({ ok: true });
    expect(send).not.toHaveBeenCalled();
  });

  it("can't add headers through line breaks in the name", async () => {
    await post({ ...valid, name: "Ada\r\nBcc: victim@example.com" });

    const [, email] = sent();
    expect(email.subject).not.toMatch(/[\r\n]/);
    expect(email.reply).toEqual({
      name: "Ada Bcc: victim@example.com",
      email: "ada@example.com",
    });
  });

  it("rejects line breaks in the email", async () => {
    const res = await post({
      ...valid,
      email: "ada@example.com\r\nBcc: victim@example.com",
    });

    expect(res.status).toBe(400);
    expect(send).not.toHaveBeenCalled();
  });

  it("keeps line breaks in the message body", async () => {
    await post({ ...valid, message: "Line one\nLine two" });
    // multipart form data sends line breaks as \r\n, browsers included
    expect(sent()[1].text).toMatch(/\n\nLine one\r?\nLine two$/);
  });

  it("trims fields and caps the name at 200 characters", async () => {
    await post({ ...valid, name: `  ${"A".repeat(300)}  ` });
    expect(sent()[1].reply).toMatchObject({ name: "A".repeat(200) });
  });
});
