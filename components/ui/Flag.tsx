/**
 * Small inline SVG flags for the language switch. Deliberately not
 * emoji: flag emoji rendering depends on OS/font support (Windows in
 * particular often falls back to plain "ES"/"US" text), so SVG is the
 * only way to guarantee an actual flag shows up everywhere.
 */

export function FlagES({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 20 14"
      className={className ?? "h-3 w-4"}
      aria-hidden="true"
    >
      <rect width="20" height="14" fill="#AA151B" />
      <rect y="3.5" width="20" height="7" fill="#F1BF00" />
    </svg>
  );
}

export function FlagUS({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 20 14"
      className={className ?? "h-3 w-4"}
      aria-hidden="true"
    >
      <rect width="20" height="14" fill="#B22234" />
      <g fill="#FFFFFF">
        <rect y="1.08" width="20" height="1.08" />
        <rect y="3.23" width="20" height="1.08" />
        <rect y="5.38" width="20" height="1.08" />
        <rect y="7.54" width="20" height="1.08" />
        <rect y="9.69" width="20" height="1.08" />
        <rect y="11.85" width="20" height="1.08" />
      </g>
      <rect width="8" height="7.54" fill="#3C3B6E" />
    </svg>
  );
}
