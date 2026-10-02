import { Logo } from "./logo";

const columns = [
  {
    heading: "Services",
    links: [
      { label: "Web development", href: "/#services" },
      { label: "App development", href: "/#services" },
      { label: "Custom WordPress", href: "/#services" },
    ],
  },
  {
    heading: "Studio",
    links: [
      { label: "Work", href: "/#work" },
      { label: "Contact", href: "/#contact" },
      {
        label: "hello@realhumandevs.com",
        href: "mailto:hello@realhumandevs.com",
      },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="border-t-[1.5px] border-line">
      <div className="container-page grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-10 pt-14 pb-10">
        <div>
          <a href="/" className="inline-flex">
            <Logo height="52px" />
          </a>
        </div>

        {columns.map((col) => (
          <div key={col.heading} className="flex flex-col gap-3">
            <h3 className="label">{col.heading}</h3>
            <ul className="flex flex-col gap-3 text-[17px]">
              {col.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="transition-colors hover:text-orange-text"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <p className="container-page border-t-[1.5px] border-dashed border-rule pt-5 pb-8 text-center font-hand text-[16px] text-muted">
        © {new Date().getFullYear()} Real Human Devs
      </p>
    </footer>
  );
}
