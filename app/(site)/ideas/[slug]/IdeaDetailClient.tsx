"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import type { IdeaArticle } from "@/types/content";
import { formatDate } from "@/lib/utils";
import { Container } from "@/components/ui/Container";
import { Kicker } from "@/components/ui/Kicker";
import { Reveal } from "@/components/ui/Reveal";

export function IdeaDetailClient({ idea }: { idea: IdeaArticle }) {
  const { t, lang, pick } = useLanguage();
  const paragraphs = pick(idea.content).split("\n\n");

  return (
    <div className="py-16 md:py-24">
      <Container>
        <Reveal>
          <Link
            href="/ideas"
            className="font-mono text-xs uppercase tracking-wide text-muted hover:text-ink"
          >
            ← {t.nav.ideas}
          </Link>
        </Reveal>

        <Reveal delay={40} className="mx-auto mt-8 max-w-2xl">
          <Kicker>{idea.category}</Kicker>
          <h1 className="mt-4 font-display text-4xl tracking-tight md:text-5xl">
            {pick(idea.title)}
          </h1>
          <p className="mt-4 font-mono text-xs uppercase tracking-wide text-muted">
            {formatDate(idea.date, lang)} · {idea.readingTime} {t.ideas.minRead}
          </p>

          <div className="mt-10 flex flex-col gap-5 border-t border-line pt-10">
            {paragraphs.map((para, i) => (
              <p key={i} className="text-lg leading-relaxed text-ink-soft">
                {para}
              </p>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-3 border-t border-line pt-6">
            {idea.tags.map((tag) => (
              <span
                key={tag}
                className="font-mono text-xs uppercase tracking-wide text-muted"
              >
                {tag}
              </span>
            ))}
          </div>
        </Reveal>
      </Container>
    </div>
  );
}
