const steps = [
  {
    id: "01",
    title: "Discovery",
    description:
      "We dig into your goals, users, and constraints. You get a clear scope, timeline, and fixed quote — no surprises.",
  },
  {
    id: "02",
    title: "Design",
    description:
      "Wireframes to polished UI. We prototype the real thing early so you can click through it before we write production code.",
  },
  {
    id: "03",
    title: "Build",
    description:
      "Senior engineers write tested, reviewed code in weekly sprints. You see progress in a live staging environment throughout.",
  },
  {
    id: "04",
    title: "Launch & support",
    description:
      "We ship with monitoring in place, hand over clean docs, and stick around for the bugs, tweaks, and scaling that come after.",
  },
]

export function Process() {
  return (
    <section id="process" className="border-t border-border">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <p className="font-mono text-sm text-primary">// How we work</p>
        <h2 className="mt-3 max-w-2xl text-balance font-hand text-3xl font-semibold tracking-tight md:text-5xl">
          A calm, transparent process.
        </h2>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div key={step.id} className="border-t border-border pt-5">
              <span className="font-mono text-sm text-primary">{step.id}</span>
              <h3 className="mt-3 font-hand text-lg font-semibold tracking-tight text-foreground">
                {step.title}
              </h3>
              <p className="mt-2 text-pretty text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
