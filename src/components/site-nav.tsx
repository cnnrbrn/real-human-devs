"use client";

import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./logo";
import { ThemeToggle } from "./theme-toggle";
import { UnevenButton } from "./uneven-button";

// Rooted at "/" so they work from any page; on the homepage the browser
// treats them as same-page jumps and just scrolls.
const links = [
  { label: "Home", id: "top" },
  { label: "Work", id: "work" },
  { label: "Services", id: "services" },
  { label: "Contact", id: "contact" },
].map((link) => ({ ...link, href: `/#${link.id}` }));

// the section in view gets an amber pen-stroke underline
const activeLink =
  "text-ink underline decoration-orange decoration-2 underline-offset-[6px]";

/**
 * `current` pins the active link on pages without the homepage's sections
 * (e.g. "work" on a case study); without it, the link follows the scroll.
 */
export function SiteNav({ current }: { current?: string }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(current ?? links[0].id);
  const toggleRef = useRef<HTMLButtonElement>(null);

  // Esc closes the open menu and hands focus back to its toggle
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      setOpen(false);
      toggleRef.current?.focus();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  // mark whichever section is sitting just under the sticky header
  useEffect(() => {
    if (current) return;
    const sections = links
      .map((link) => document.getElementById(link.id))
      .filter((el): el is HTMLElement => el !== null);

    // Active = the last section whose top has scrolled up past the header
    // (anchor jumps land it at 90px — see scroll-padding-top in globals.css).
    // Contact is too short to ever reach the header, so the page bottom
    // counts as reaching it.
    let frame = 0;
    const update = () => {
      frame = 0;
      if (sections.length === 0) return;
      let inView = sections[0];
      for (const section of sections) {
        if (section.getBoundingClientRect().top <= 120) inView = section;
      }
      const root = document.documentElement;
      if (window.innerHeight + window.scrollY >= root.scrollHeight - 2) {
        inView = sections[sections.length - 1];
      }
      setActive(inView.id);
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, [current]);

  return (
    <header className="sticky top-0 z-50 border-b-[1.5px] border-dashed border-rule bg-paper">
      <div className="container-page flex items-center justify-between gap-4 py-3.5 lg:gap-6">
        {/* a touch smaller on phones so the logo, toggle and menu button
            share one row down to 320px */}
        <a
          href="/"
          className="flex shrink-0 [--logo-h:44px] sm:[--logo-h:58px]"
        >
          <Logo height="var(--logo-h)" />
        </a>

        <nav className="hidden gap-8 text-[17px] lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              aria-current={active === link.id ? "true" : undefined}
              className={`transition-colors hover:text-ink ${
                active === link.id ? activeLink : "text-muted"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle />
          <UnevenButton href="/#contact" size="sm" rotate={-1.2}>
            Start a project
          </UnevenButton>
        </div>

        <div className="flex items-center gap-1 lg:hidden">
          <ThemeToggle />
          <button
            ref={toggleRef}
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex items-center justify-center rounded-md p-2 text-ink"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t-[1.5px] border-dashed border-rule bg-paper lg:hidden">
          <nav className="container-page flex flex-col gap-1 py-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                aria-current={active === link.id ? "true" : undefined}
                className={`rounded-md px-2 py-2.5 text-[17px] transition-colors hover:bg-highlight hover:text-ink ${
                  active === link.id ? activeLink : "text-muted"
                }`}
              >
                {link.label}
              </a>
            ))}
            <UnevenButton
              href="/#contact"
              size="sm"
              rotate={-1.2}
              onClick={() => setOpen(false)}
              className="mt-3 mb-1 justify-center"
            >
              Start a project
            </UnevenButton>
          </nav>
        </div>
      )}
    </header>
  );
}
