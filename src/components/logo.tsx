export function Logo({
  className,
  height = "1.5em",
}: {
  className?: string;
  height?: string;
}) {
  return (
    <span
      className={className}
      style={{
        display: "inline-flex",
        alignItems: "center",
        whiteSpace: "nowrap",
      }}
    >
      {/* Sized in em by default so call sites can drive the logo with a text-*
          class, or pass an explicit height.
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
        style={{ height, width: "auto" }}
      />
      <img
        src="/logo-dark.svg"
        alt=""
        aria-hidden="true"
        width={128}
        height={39}
        className="hidden dark:block"
        style={{ height, width: "auto" }}
      />
    </span>
  );
}
