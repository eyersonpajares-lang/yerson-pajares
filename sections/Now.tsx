"use client";

import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { nowItems, nowUpdatedAt } from "@/lib/data/now";
import { formatDate } from "@/lib/utils";
import { Container } from "@/components/ui/Container";
import { Kicker } from "@/components/ui/Kicker";
import { Reveal } from "@/components/ui/Reveal";

export function Now() {
  const { t, lang, pick } = useLanguage();

  return (
    <section id="now" className="border-t border-line py-20 md:py-28">
      <Container>
        <div className="grid gap-10 md:grid-cols-12 md:gap-8">
          <Reveal className="md:col-span-4">
            <Kicker>{t.now.kicker}</Kicker>
            <h2 className="mt-4 font-display text-3xl tracking-tight md:text-4xl">
              {t.now.title}
            </h2>
            <p className="mt-6 font-mono text-xs uppercase tracking-wide text-muted">
              {t.now.updated} {formatDate(nowUpdatedAt, lang)}
            </p>
          </Reveal>

          <div className="md:col-span-8">
            <ul className="divide-y divide-line border-t border-line md:border-t-0">
              {nowItems.map((item, i) => (
                <Reveal
                  key={item.text.es}
                  as="li"
                  delay={i * 60}
                  className="flex items-start gap-4 border-b border-line py-5 first:pt-0 md:first:border-t md:first:pt-5"
                >
                  <span className="mt-1 font-mono text-xs text-muted">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-lg leading-snug text-ink-soft md:text-xl">
                    {pick(item.text)}
                  </p>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
