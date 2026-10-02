import type { ComponentPropsWithoutRef, CSSProperties, ReactNode } from "react";

type Props = {
  size?: "sm" | "lg";
  variant?: "primary" | "secondary";
  /** Tilt in degrees — each instance leans a little differently. */
  rotate?: number;
  /** Asymmetric border-radius, so no two buttons are cut quite the same. */
  radius?: string;
  /** Peel up on hover. Defaults on for primary; secondary tints instead. */
  lift?: boolean;
  className?: string;
  children: ReactNode;
} & (
  | ({ href: string } & Omit<ComponentPropsWithoutRef<"a">, "className">)
  | ({ href?: undefined } & Omit<ComponentPropsWithoutRef<"button">, "className">)
);

/** Hand-cut button with a hard offset shadow. Styles live in globals.css. */
export function UnevenButton({
  size = "sm",
  variant = "primary",
  rotate = 0,
  radius = "6px 14px 5px 12px / 12px 5px 14px 6px",
  lift = variant === "primary",
  className = "",
  style,
  ...rest
}: Props) {
  const classes = [
    "uneven-btn",
    `uneven-btn--${size}`,
    `uneven-btn--${variant}`,
    lift && "uneven-btn--lift",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const vars = {
    "--btn-rotate": `${rotate}deg`,
    "--btn-radius": radius,
    ...style,
  } as CSSProperties;

  if (rest.href !== undefined) {
    return (
      <a
        className={classes}
        style={vars}
        {...(rest as ComponentPropsWithoutRef<"a">)}
      />
    );
  }
  return (
    <button
      className={classes}
      style={vars}
      {...(rest as ComponentPropsWithoutRef<"button">)}
    />
  );
}
