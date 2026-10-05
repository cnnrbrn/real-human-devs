// @vitest-environment jsdom
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it, vi } from "vitest";
import { ContactCta } from "../src/components/contact-cta";

afterEach(() => {
  vi.unstubAllGlobals();
});

/** Pick a project type and fill in the fields, then press Send. */
async function fillAndSend() {
  const user = userEvent.setup();
  render(<ContactCta />);
  await user.click(screen.getByRole("button", { name: "Online shop" }));
  await user.type(screen.getByLabelText("Name"), "Ada Lovelace");
  await user.type(screen.getByLabelText("Email"), "ada@example.com");
  await user.type(screen.getByLabelText("What do you need?"), "A shop.");
  await user.click(screen.getByRole("button", { name: /send message/i }));
}

describe("sending the form", () => {
  it("posts the fields and the chosen project type, then thanks the sender", async () => {
    let respond!: (res: Response) => void;
    const fetch = vi.fn(
      () => new Promise<Response>((resolve) => (respond = resolve)),
    );
    vi.stubGlobal("fetch", fetch);

    await fillAndSend();

    // while the request is in flight
    expect(screen.getByRole("button", { name: "Sending…" })).toBeDisabled();
    expect(fetch).toHaveBeenCalledOnce();
    const [url, init] = fetch.mock.calls[0] as unknown as [string, RequestInit];
    expect(url).toBe("/api/contact");
    expect(init.method).toBe("POST");
    const body = init.body as FormData;
    expect(body.get("name")).toBe("Ada Lovelace");
    expect(body.get("email")).toBe("ada@example.com");
    expect(body.get("message")).toBe("A shop.");
    expect(body.get("projectType")).toBe("Online shop");

    respond(Response.json({ ok: true }));

    expect(await screen.findByRole("status")).toHaveTextContent(
      "Got it, thanks, Ada.",
    );
  });
});
