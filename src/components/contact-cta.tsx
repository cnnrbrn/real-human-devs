"use client";

import { useState } from "react";
import { ArrowUpRight, Check } from "lucide-react";

const projectTypes = ["Web app", "Mobile app", "WordPress"];

export function ContactCta() {
  const [selected, setSelected] = useState("Web app");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact" className="border-t border-border">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="font-mono text-sm text-primary">// Start a project</p>
            <h2 className="mt-3 text-balance font-hand text-4xl font-semibold tracking-tight md:text-5xl">
              Tell us what you&apos;re building.
            </h2>
            <p className="mt-5 max-w-md text-pretty leading-relaxed text-muted-foreground">
              Real humans read every message. We&apos;ll reply within one
              business day with honest thoughts and next steps — no sales
              scripts.
            </p>
            <p className="mt-8 font-mono text-lg text-muted-foreground">
              Prefer email?{" "}
              <a
                href="mailto:hello@realhumandevs.com"
                className="text-foreground underline underline-offset-4 hover:text-primary"
              >
                hello@realhumandevs.com
              </a>
            </p>
          </div>

          {submitted ? (
            <div className="flex flex-col items-start justify-center rounded-xl border border-border bg-card p-8">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/15 text-primary">
                <Check className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-hand text-xl font-semibold tracking-tight">
                Message sent
              </h3>
              <p className="mt-2 text-pretty leading-relaxed text-muted-foreground">
                Thanks for reaching out. A real human will get back to you
                within one business day.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="rounded-xl border border-border bg-card p-6 md:p-8"
            >
              <fieldset className="mb-6">
                <legend className="mb-3 font-mono text-xs uppercase tracking-wider text-muted-foreground">
                  Project type
                </legend>
                <div className="flex flex-wrap gap-2">
                  {projectTypes.map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setSelected(type)}
                      aria-pressed={selected === type}
                      className={`rounded-md border px-3 py-1.5 font-mono text-sm transition-colors ${
                        selected === type
                          ? "border-primary bg-primary text-primary-foreground"
                          : "border-border bg-background text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </fieldset>

              <div className="grid gap-4 sm:grid-cols-2">
                <label className="flex flex-col gap-1.5">
                  <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                    Name
                  </span>
                  <input
                    required
                    type="text"
                    name="name"
                    autoComplete="name"
                    className="rounded-md border border-border bg-background px-3 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-primary"
                  />
                </label>
                <label className="flex flex-col gap-1.5">
                  <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                    Email
                  </span>
                  <input
                    required
                    type="email"
                    name="email"
                    autoComplete="email"
                    className="rounded-md border border-border bg-background px-3 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-primary"
                  />
                </label>
              </div>

              <label className="mt-4 flex flex-col gap-1.5">
                <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                  What do you need?
                </span>
                <textarea
                  required
                  name="message"
                  rows={4}
                  className="resize-none rounded-md border border-border bg-background px-3 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-primary"
                  placeholder="A few sentences about your project or the app you need help with…"
                />
              </label>

              <button
                type="submit"
                className="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 font-mono text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
              >
                Send message
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
