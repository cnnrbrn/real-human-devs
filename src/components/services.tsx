import { Code2, Smartphone, LayoutTemplate } from "lucide-react"

const services = [
  {
    icon: Code2,
    id: "01",
    title: "Web design & development",
    description:
      "Marketing sites, dashboards, and full-stack web apps built with modern frameworks. Designed for speed, accessibility, and conversion.",
    tags: ["Next.js", "React", "Design systems"],
  },
  {
    icon: Smartphone,
    id: "02",
    title: "App design & development",
    description:
      "Native and cross-platform mobile apps from wireframe to App Store. Thoughtful UX paired with reliable, maintainable engineering.",
    tags: ["iOS", "Android", "React Native"],
  },
  {
    icon: LayoutTemplate,
    id: "03",
    title: "Custom WordPress",
    description:
      "Bespoke themes and plugins built to spec — not bloated page builders. Fast, editor-friendly, and easy for your team to maintain.",
    tags: ["Custom themes", "Plugins", "Headless WP"],
  },
]

export function Services() {
  return (
    <section id="services" className="border-t border-border">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-mono text-sm text-primary">// What we do</p>
            <h2 className="mt-3 max-w-2xl text-balance font-hand text-3xl font-semibold tracking-tight md:text-5xl">
              What we&apos;re good at.
            </h2>
          </div>
          <p className="max-w-sm text-pretty leading-relaxed text-muted-foreground">
            No offshore churn, no copy-paste templates. A small senior team that
            treats your codebase like its own.
          </p>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.id}
              className="group relative flex flex-col bg-card p-8 transition-colors hover:bg-secondary/60"
            >
              <div className="flex items-center justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-border bg-background text-primary">
                  <service.icon className="h-5 w-5" />
                </div>
                <span className="font-mono text-sm text-muted-foreground">
                  {service.id}
                </span>
              </div>

              <h3 className="mt-6 font-hand text-xl font-semibold tracking-tight text-foreground">
                {service.title}
              </h3>
              <p className="mt-3 flex-1 text-pretty leading-relaxed text-muted-foreground">
                {service.description}
              </p>

              <ul className="mt-6 flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full border border-border bg-background px-3 py-1 font-mono text-xs text-muted-foreground"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
