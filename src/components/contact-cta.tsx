"use client";

import { useState } from "react";
import { PROJECT_TYPES } from "../data/project-types";
import { UnevenButton } from "./uneven-button";

export function ContactCta() {
  const [selected, setSelected] = useState("Web app");
  const [sentTo, setSentTo] = useState<string | null>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "error">("idle");

  // Posts to the Pages Function in functions/api/contact.ts, which emails
  // hello@ through Zoho.
  async function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", { method: "POST", body: data });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const name = String(data.get("name") ?? "");
      setSentTo(name.trim().split(/\s+/)[0] || "friend");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact">
      <div className="container-page grid grid-cols-[repeat(auto-fit,minmax(min(100%,420px),1fr))] items-start gap-16 py-26">
        <div className="flex flex-col gap-6">
          <div>
            <p className="kicker">Start a project</p>
            <h2 className="h2">Tell us what you&apos;re building.</h2>
          </div>
          <p className="max-w-[40ch] text-[19px] leading-[1.6] text-muted">
            We read every message and reply within one working day.
          </p>
          <p className="font-hand text-[21px] text-muted">
            Prefer email?{" "}
            <a
              href="mailto:hello@realhumandevs.com"
              className="text-ink underline underline-offset-[5px] transition-colors hover:text-orange-text"
            >
              hello@realhumandevs.com
            </a>
          </p>
        </div>

        <div className="flex flex-col gap-6 rounded-xl border-[1.5px] border-line bg-card p-5 sm:p-10">
          {sentTo !== null ? (
            <div role="status" className="flex flex-col gap-3 py-6">
              <h3 className="font-hand text-[40px] leading-[1.05] font-bold">
                Got it, thanks, {sentTo}.
              </h3>
              <p className="text-[18px] leading-[1.55] text-muted">
                We&apos;ll reply within one working day.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <fieldset className="flex flex-col gap-3">
                <legend className="label mb-3">Project type</legend>
                <input type="hidden" name="projectType" value={selected} />
                {/* honeypot: hidden from people and screen readers, so only
                    bots fill it in — the function drops those quietly */}
                <input
                  type="text"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  className="absolute left-[-9999px] h-px w-px opacity-0"
                />
                <div className="flex flex-wrap gap-2.5">
                  {PROJECT_TYPES.map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setSelected(type)}
                      aria-pressed={selected === type}
                      className={`cursor-pointer rounded-md border-[1.5px] border-line px-4 pt-1.75 pb-1.25 font-hand text-[18px] transition-colors ${
                        selected === type
                          ? "bg-orange text-on-orange"
                          : "bg-card text-ink hover:bg-highlight"
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </fieldset>

              <div className="grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-5">
                <label className="flex flex-col gap-2.5">
                  <span className="label">Name</span>
                  <input
                    required
                    type="text"
                    name="name"
                    autoComplete="name"
                    className="field h-12.5"
                  />
                </label>
                <label className="flex flex-col gap-2.5">
                  <span className="label">Email</span>
                  <input
                    required
                    type="email"
                    name="email"
                    autoComplete="email"
                    className="field h-12.5"
                  />
                </label>
              </div>

              <label className="flex flex-col gap-2.5">
                <span className="label">What do you need?</span>
                <textarea
                  required
                  name="message"
                  rows={4}
                  className="field resize-y py-3 leading-normal"
                  placeholder="A few sentences about what you're building, or what you need help with…"
                />
              </label>

              {status === "error" && (
                <p role="alert" className="text-[17px] leading-[1.55]">
                  That didn&apos;t send. Please try again, or email us at{" "}
                  <a
                    href="mailto:hello@realhumandevs.com"
                    className="underline underline-offset-[5px]"
                  >
                    hello@realhumandevs.com
                  </a>
                  .
                </p>
              )}

              <UnevenButton
                type="submit"
                size="lg"
                rotate={-0.5}
                radius="8px 14px 6px 12px / 12px 6px 14px 8px"
                lift={false}
                disabled={status === "sending"}
                className="w-full justify-center p-3.5 text-[21px] [--btn-sx:5px] [--btn-sy:6px] hover:bg-orange-hover disabled:cursor-wait disabled:opacity-70"
              >
                {status === "sending" ? (
                  "Sending…"
                ) : (
                  <>
                    Send message <span aria-hidden="true">↗</span>
                  </>
                )}
              </UnevenButton>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
