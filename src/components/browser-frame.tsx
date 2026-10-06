import type { ReactNode } from "react";

/** An image processed by Astro's getImage(), passed down from the page. */
export type Screenshot = {
  src: string;
  srcSet?: string;
  width: number;
  height: number;
};

/**
 * A screenshot with a dark-theme twin, swapped on the `dark` class (like
 * <Logo>) so it follows <ThemeToggle>. Both are lazy because browsers skip
 * lazy images that are display:none, so each visitor downloads only the one
 * for their theme. That holds for the LCP image too: with the CSS inlined,
 * layout happens straight away, so lazy costs almost nothing, while eager
 * downloaded both themes even where the image is hidden (the hero on phones).
 */
export function ThemedScreenshot({
  light,
  dark,
  alt,
  sizes,
  className = "",
  fetchPriority,
}: {
  light: Screenshot;
  dark: Screenshot;
  alt: string;
  sizes: string;
  className?: string;
  fetchPriority?: "high" | "low" | "auto";
}) {
  return (
    <>
      {[
        { image: light, theme: "dark:hidden" },
        { image: dark, theme: "hidden dark:block" },
      ].map(({ image, theme }) => (
        <img
          key={image.src}
          src={image.src}
          srcSet={image.srcSet}
          sizes={sizes}
          width={image.width}
          height={image.height}
          alt={alt}
          loading="lazy"
          fetchPriority={fetchPriority}
          className={`${className} ${theme}`}
        />
      ))}
    </>
  );
}

/** Sketchy browser window: three outlined dots, an optional URL, then content. */
export function BrowserFrame({
  url,
  className = "",
  children,
}: {
  url?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={`overflow-hidden bg-card ${className}`}>
      <div className="flex items-center gap-1.75 border-b-[1.5px] border-line px-3.5 py-2.5">
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            aria-hidden="true"
            className="size-2.75 rounded-full border-[1.5px] border-line"
          />
        ))}
        {url && <span className="ml-3.5 text-[14px] text-muted">{url}</span>}
      </div>
      {children}
    </div>
  );
}

/** Sketchy phone: a hand-cut bezel around a rounded screen. */
/** Sketchy tablet: like PhoneFrame, with tighter corners for the bigger screen. */
export function TabletFrame({
  className = "",
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div
      className={`rounded-[22px_26px_20px_24px] border-2 border-line bg-card p-2 shadow-[6px_7px_0_var(--line)] ${className}`}
    >
      <div className="overflow-hidden rounded-[14px] border-[1.5px] border-line">
        {children}
      </div>
    </div>
  );
}

export function PhoneFrame({
  className = "",
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div
      className={`rounded-[30px_36px_28px_34px] border-2 border-line bg-card p-2 shadow-[6px_7px_0_var(--line)] ${className}`}
    >
      <div className="overflow-hidden rounded-[22px] border-[1.5px] border-line">
        {children}
      </div>
    </div>
  );
}
