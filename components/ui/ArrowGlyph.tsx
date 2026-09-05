import type { ReactNode } from "react";

const ARROW_CHARS = ["→", "↓", "↗"];

/**
 * Small shared micro-interaction: on hover of an ancestor with `.group`,
 * a trailing arrow glyph nudges 3-4px in its direction. Kept purely CSS
 * (transform + transition) so it costs nothing on mobile/tap.
 */
export function ArrowGlyph({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={
        className ??
        "inline-block transition-transform duration-200 ease-out group-hover:translate-x-0.5"
      }
    >
      {children}
    </span>
  );
}

/**
 * If `children` is a plain string ending in one of ARROW_CHARS (optionally
 * preceded by a space), split it so the glyph animates independently while
 * the label stays static. Anything else (JSX, no trailing arrow) passes
 * through unchanged.
 */
export function withArrowNudge(children: ReactNode): ReactNode {
  if (typeof children !== "string") return children;

  const trimmed = children.trimEnd();
  const lastChar = trimmed.slice(-1);
  if (!ARROW_CHARS.includes(lastChar)) return children;

  const label = trimmed.slice(0, -1).trimEnd();
  const isDown = lastChar === "↓";

  return (
    <>
      {label}{" "}
      <ArrowGlyph
        className={
          isDown
            ? "inline-block transition-transform duration-200 ease-out group-hover:translate-y-0.5"
            : "inline-block transition-transform duration-200 ease-out group-hover:translate-x-0.5"
        }
      >
        {lastChar}
      </ArrowGlyph>
    </>
  );
}
