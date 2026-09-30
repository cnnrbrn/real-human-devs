import { Logo } from "./logo";

const columns = [
  {
    heading: "Services",
    links: [
      { label: "Web development", href: "#services" },
      { label: "App development", href: "#services" },
      { label: "Custom WordPress", href: "#services" },
    ],
  },
  {
    heading: "Studio",
    links: [
      { label: "Process", href: "#process" },
      { label: "Work", href: "#work" },
      { label: "Contact", href: "#contact" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-6xl px-5 py-12 md:px-8">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <a href="#top" className="flex items-center gap-2.5">
              <Logo className="text-2xl leading-none" />
            </a>
          </div>

          {columns.map((col) => (
            <div key={col.heading}>
              <h3 className="font-hand text-xs uppercase tracking-wider text-muted-foreground">
                {col.heading}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-foreground/80 transition-colors hover:text-primary"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-border pt-6 text-center">
          <p className="font-mono text-xs text-muted-foreground">
            © {new Date().getFullYear()} Real Human Devs. Written by humans.
          </p>
        </div>
      </div>
    </footer>
  );
}
