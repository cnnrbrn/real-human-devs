export function Logo({ className }: { className?: string }) {
  return (
    <span
      className={className}
      style={{
        display: "inline-flex",
        alignItems: "center",
        whiteSpace: "nowrap",
      }}
    >
      {/* Sized in em so call sites keep driving the logo with their text-* class.
          Swapped on the `dark` class rather than prefers-color-scheme, so it
          follows <ThemeToggle> instead of drifting from the rest of the page. */}
      {/* No inline `display` here — it would outrank `dark:hidden` and leave
          both marks painted at once. Flex blockifies these children anyway. */}
      <img
        src="/logo-light.svg"
        alt="Real Human Devs"
        width={128}
        height={39}
        className="dark:hidden"
        style={{ height: "1.5em", width: "auto" }}
      />
      <img
        src="/logo-dark.svg"
        alt=""
        aria-hidden="true"
        width={128}
        height={39}
        className="hidden dark:block"
        style={{ height: "1.5em", width: "auto" }}
      />
    </span>
  );
}
