import { ArrowUpRight } from "lucide-react";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* dotted grid backdrop, like graph paper */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.5]"
        style={{
          backgroundImage:
            "radial-gradient(circle, var(--color-primary) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-5 pb-20 pt-16 md:px-8 md:pb-28 md:pt-24">
        <div className="doodle-box-sm inline-flex -rotate-slight items-center gap-2 bg-card px-4 py-1.5">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-70" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-primary" />
          </span>
          <span className="text-base text-foreground">
            Available for new builds — Q3 2026
          </span>
        </div>

        <h1 className="mt-8 max-w-4xl text-pretty font-display text-6xl font-bold leading-[0.95] tracking-tight md:text-8xl">
          Tired of talking to AI?
          <br />
          <span className="marker">Talk to us.</span>
        </h1>

        <p className="mt-8 max-w-xl text-pretty text-xl leading-relaxed text-foreground/80">
          We design and build web apps, mobile apps, and custom WordPress themes
          &amp; plugins — secure, tested, and ready to scale.
        </p>

        <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
          <a
            href="#contact"
            className="group doodle-box doodle-ink doodle-shadow inline-flex items-center justify-center gap-2 bg-primary px-6 py-3 font-hand text-lg font-bold text-primary-foreground doodle-lift"
          >
            Start a project
            <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* <dl className="mt-16 grid grid-cols-2 gap-6 border-t-2 border-dashed border-foreground/40 pt-8 md:grid-cols-4">
          {[
            { value: "120+", label: "Products shipped" },
            { value: "9 yrs", label: "Average team experience" },
            { value: "100%", label: "Human-written, reviewed code" },
          ].map((stat) => (
            <div key={stat.label}>
              <dt className="font-display text-5xl font-bold text-primary">
                {stat.value}
              </dt>
              <dd className="mt-1 text-base leading-relaxed text-foreground/70">
                {stat.label}
              </dd>
            </div>
          ))}
        </dl> */}
      </div>
    </section>
  );
}
