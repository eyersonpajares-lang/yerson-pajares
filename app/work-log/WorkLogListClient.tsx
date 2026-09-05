"use client";

import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { workLog } from "@/lib/data/work-log";
import { formatDate } from "@/lib/utils";
import { Container } from "@/components/ui/Container";
import { Kicker } from "@/components/ui/Kicker";
import { Reveal } from "@/components/ui/Reveal";

export function WorkLogListClient() {
  const { t, lang, pick } = useLanguage();

  return (
    <div className="py-20 md:py-28">
      <Container>
        <Reveal>
          <Kicker>{t.workLog.kicker}</Kicker>
          <h1 className="mt-4 max-w-2xl font-display text-4xl tracking-tight md:text-5xl">
            {t.workLog.title}
          </h1>
        </Reveal>

        <ul className="mt-14 divide-y divide-line border-t border-line">
          {workLog.map((entry, i) => (
            <Reveal
              key={entry.date}
              as="li"
              delay={Math.min(i, 6) * 40}
              className="flex flex-col gap-2 py-6 md:flex-row md:items-baseline md:gap-8"
            >
              <span className="font-mono text-xs uppercase tracking-wide text-muted md:w-32 md:shrink-0">
                {formatDate(entry.date, lang)}
              </span>
              <div>
                <p className="text-base text-ink-soft">{pick(entry.text)}</p>
                {entry.tags && (
                  <div className="mt-2 flex flex-wrap gap-3">
                    {entry.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-xs uppercase tracking-wide text-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </ul>
      </Container>
    </div>
  );
}
