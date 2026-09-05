import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";

type ButtonProps = {
  children: ReactNode;
  href: string;
  variant?: Variant;
  className?: string;
  external?: boolean;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "className">;

const variants: Record<Variant, string> = {
  primary:
    "bg-ink text-paper hover:bg-ink-soft border border-ink",
  secondary:
    "border border-ink text-ink hover:bg-ink hover:text-paper",
  ghost: "text-ink underline decoration-line underline-offset-4 hover:decoration-accent",
};

export function Button({
  children,
  href,
  variant = "primary",
  className,
  external,
  ...props
}: ButtonProps) {
  const base =
    variant === "ghost"
      ? "inline-flex items-center gap-2 text-sm font-medium transition-colors"
      : "inline-flex items-center gap-2 px-5 py-3 text-sm font-medium tracking-wide transition-colors";

  const classes = cn(base, variants[variant], className);

  if (external || href.startsWith("http") || href.startsWith("mailto:")) {
    return (
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className={classes}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...props}>
      {children}
    </Link>
  );
}
