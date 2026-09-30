const projects = [
  {
    client: "Northwind Health",
    type: "Web app",
    result: "Patient portal rebuilt — 2.1s → 0.4s load, HIPAA-ready.",
  },
  {
    client: "Tallgrass Coffee",
    type: "WordPress",
    result: "Custom headless theme + subscription plugin. +38% online orders.",
  },
  {
    client: "Fieldbook",
    type: "Mobile app",
    result: "Offline-first field app for 4,000+ daily technicians.",
  },
]

const quote = {
  text: "We came to Real Human Devs with a half-working app. They didn't judge it — they hardened it, tested it, and got us to launch. It's now handling thousands of paying users.",
  name: "Priya Nadella",
  role: "Founder, Ledgerlite",
}

export function Work() {
  return (
    <section id="work" className="border-t border-border bg-card/30">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <p className="font-mono text-sm text-primary">// Selected work</p>
        <h2 className="mt-3 max-w-2xl text-balance font-hand text-3xl font-semibold tracking-tight md:text-5xl">
          Products people actually rely on.
        </h2>

        <div className="mt-14 grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <ul className="divide-y divide-border border-y border-border">
            {projects.map((project) => (
              <li
                key={project.client}
                className="group flex flex-col gap-1 py-5 transition-colors hover:bg-secondary/40 md:flex-row md:items-center md:justify-between md:gap-6"
              >
                <div className="flex items-baseline gap-4">
                  <span className="text-lg font-semibold tracking-tight text-foreground">
                    {project.client}
                  </span>
                  <span className="rounded-full border border-border px-2.5 py-0.5 font-mono text-xs text-muted-foreground">
                    {project.type}
                  </span>
                </div>
                <p className="text-pretty text-sm leading-relaxed text-muted-foreground md:max-w-sm md:text-right">
                  {project.result}
                </p>
              </li>
            ))}
          </ul>

          <figure className="flex flex-col justify-center rounded-xl border border-border bg-background p-8">
            <blockquote className="text-pretty text-lg leading-relaxed text-foreground">
              &ldquo;{quote.text}&rdquo;
            </blockquote>
            <figcaption className="mt-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/15 font-mono text-sm font-medium text-primary">
                {quote.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">
                  {quote.name}
                </p>
                <p className="font-mono text-xs text-muted-foreground">
                  {quote.role}
                </p>
              </div>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  )
}
