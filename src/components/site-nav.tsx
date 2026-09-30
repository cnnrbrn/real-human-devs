"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./logo";
import { ThemeToggle } from "./theme-toggle";

const links = [
  { label: "Home", href: "#top" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
];

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(links[0].href);

  // mark whichever section is sitting just under the sticky header
  useEffect(() => {
    const sections = links
      .map((link) => document.getElementById(link.href.slice(1)))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting);
        if (visible.length === 0) return;

        const topmost = visible.reduce((a, b) =>
          a.boundingClientRect.top <= b.boundingClientRect.top ? a : b,
        );
        setActive(`#${topmost.target.id}`);
      },
      { rootMargin: "-88px 0px -55% 0px" },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b-2 border-dashed border-foreground/40 bg-background/90 backdrop-blur-sm">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-5 md:px-8">
        <a href="#top" className="flex items-center gap-2.5">
          <Logo className="text-3xl leading-none" />
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              aria-current={active === link.href ? "true" : undefined}
              className={
                active === link.href
                  ? "text-lg text-foreground underline underline-offset-4"
                  : "text-lg text-foreground/80 transition-colors hover:text-primary"
              }
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <ThemeToggle />
          <a
            href="#contact"
            className="doodle-box-sm doodle-ink doodle-shadow inline-flex items-center gap-2 bg-primary px-5 py-2 font-hand text-lg font-bold text-primary-foreground doodle-lift"
          >
            Start a project
          </a>
        </div>

        <div className="flex items-center gap-1 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex items-center justify-center rounded-md p-2 text-foreground"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t-2 border-dashed border-foreground/40 bg-background md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                aria-current={active === link.href ? "true" : undefined}
                className={
                  active === link.href
                    ? "rounded-md px-2 py-2.5 text-lg text-foreground underline underline-offset-4"
                    : "rounded-md px-2 py-2.5 text-lg text-foreground/80 transition-colors hover:bg-secondary hover:text-primary"
                }
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="doodle-box-sm doodle-ink doodle-shadow doodle-lift mt-2 inline-flex items-center justify-center bg-primary px-4 py-2.5 font-hand text-lg font-bold text-primary-foreground"
            >
              Start a project
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
