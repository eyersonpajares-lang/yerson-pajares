"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { ideas } from "@/lib/data/ideas";
import { formatDate } from "@/lib/utils";
import { Container } from "@/components/ui/Container";
import { Kicker } from "@/components/ui/Kicker";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

export function LatestIdeas() {
  const { t, lang, pick } = useLanguage();
  const published = ideas.filter((idea) => idea.published).slice(0, 3);

  return (
    <section id="ideas" className="border-t border-line py-20 md:py-28">
      <Container>
        <Reveal>
          <Kicker>{t.ideas.kicker}</Kicker>
          <h2 className="mt-4 font-display text-4xl tracking-tight md:text-5xl">
            {t.ideas.title}
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
          {published.map((idea, i) => (
            <Reveal key={idea.slug} delay={i * 80}>
              <Link href={`/ideas/${idea.slug}`} className="group flex h-full flex-col">
                <p className="font-mono text-xs uppercase tracking-wide text-muted">
                  {formatDate(idea.date, lang)} · {idea.readingTime} {t.ideas.minRead}
                </p>
                <h3 className="mt-3 font-display text-xl leading-snug tracking-tight group-hover:text-accent md:text-2xl">
                  {pick(idea.title)}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-soft">
                  {pick(idea.excerpt)}
                </p>
                <span className="mt-5 text-sm font-medium underline decoration-line underline-offset-4 group-hover:decoration-accent">
                  {t.ideas.readMore} →
                </span>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-14">
          <Button href="/ideas" variant="ghost">
            {t.ideas.viewAll} →
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
