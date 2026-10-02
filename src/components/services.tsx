const services = [
  {
    title: "Web design & development",
    description:
      "Marketing sites, dashboards and full-stack web apps, custom CMS, marketing sites, dashboards and fundraising projects. Designed for speed, accessibility and conversion.",
    tags: ["React", "Next.js", "Node.js", "Python", "Design systems"],
  },
  {
    title: "App design & development",
    description:
      "iOS and Android mobile apps, from first wireframe to App Store. Thoughtful UX, maintainable code.",
    tags: ["iOS", "Android", "React Native", "Flutter"],
  },
  {
    title: "Custom WordPress",
    description:
      "Bespoke themes and plugins built to spec - no bloated page builders. Fast, editor-friendly, easy to maintain.",
    tags: ["Custom themes", "Plugins", "Headless WP"],
  },
];

export function Services() {
  return (
    <section id="services" className="border-b-[1.5px] border-line">
      <div className="container-page py-26">
        <div className="mb-12">
          <p className="kicker">What we do</p>
          <h2 className="h2">What we&apos;re good at.</h2>
        </div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,300px),1fr))] gap-8">
          {services.map((service) => (
            <article
              key={service.title}
              className="lift-card flex flex-col gap-4 rounded-[6px_14px_8px_12px/12px_8px_14px_6px] border-[1.5px] border-line bg-card px-5 py-6 sm:px-8.5 sm:py-9"
            >
              <h3 className="font-hand text-[30px] leading-[1.1] font-bold">
                {service.title}
              </h3>
              <p className="text-[17px] leading-[1.6] text-pretty text-muted">
                {service.description}
              </p>
              <ul className="mt-auto flex flex-wrap gap-2 pt-3">
                {service.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-[14px_10px_13px_9px] border-[1.5px] border-line px-3.25 pt-0.75 pb-px font-hand text-[15px]"
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
  );
}
