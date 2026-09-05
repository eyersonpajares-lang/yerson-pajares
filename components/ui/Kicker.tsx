import { cn } from "@/lib/utils";

export function Kicker({
  children,
  className,
}: {
  children: string;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "font-mono text-xs uppercase tracking-[0.2em] text-accent",
        className
      )}
    >
      {children}
    </p>
  );
}
