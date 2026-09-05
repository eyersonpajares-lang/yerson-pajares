"use client";

import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { workLog } from "@/lib/data/work-log";
import { formatDate } from "@/lib/utils";
import { Container } from "@/components/ui/Container";
import { Kicker } from "@/components/ui/Kicker";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

export function WorkLog() {
  const { t, lang, pick } = useLanguage();
  const entries = workLog.slice(0, 4);

  return (
    <section id="work-log" className="border-t border-line py-20 md:py-28">
      <Container>
        <Reveal>
          <Kicker>{t.workLog.kicker}</Kicker>
          <h2 className="mt-4 max-w-2xl font-display text-3xl tracking-tight md:text-4xl">
            {t.workLog.title}
          </h2>
        </Reveal>

        <ul className="mt-12 divide-y divide-line border-t border-line">
          {entries.map((entry, i) => (
            <Reveal
              key={entry.date}
              as="li"
              delay={i * 60}
              className="flex flex-col gap-2 py-5 md:flex-row md:items-baseline md:gap-8"
            >
              <span className="font-mono text-xs uppercase tracking-wide text-muted md:w-32 md:shrink-0">
                {formatDate(entry.date, lang)}
              </span>
              <p className="text-base text-ink-soft">{pick(entry.text)}</p>
            </Reveal>
          ))}
        </ul>

        <Reveal className="mt-10">
          <Button href="/work-log" variant="ghost">
            {t.workLog.viewAll} →
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
