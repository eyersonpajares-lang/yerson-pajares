import Link from "next/link";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <div className="flex flex-1 items-center py-32">
      <Container>
        <p className="font-mono text-xs uppercase tracking-wide text-muted">404</p>
        <h1 className="mt-4 font-display text-5xl tracking-tight md:text-6xl">
          Page not found.
        </h1>
        <Link
          href="/"
          className="mt-8 inline-block text-sm font-medium underline decoration-line underline-offset-4 hover:decoration-accent"
        >
          ← Back home
        </Link>
      </Container>
    </div>
  );
}
