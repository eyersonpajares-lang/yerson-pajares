"use client";

import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { education, training } from "@/lib/data/education";
import { settings } from "@/lib/data/settings";
import { Container } from "@/components/ui/Container";
import { Kicker } from "@/components/ui/Kicker";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

export function Education() {
  const { t, pick } = useLanguage();

  return (
    <section id="education" className="border-t border-line py-20 md:py-28">
      <Container>
        <Reveal>
          <Kicker>{t.education.kicker}</Kicker>
          <h2 className="mt-4 font-display text-4xl tracking-tight md:text-5xl">
            {t.education.title}
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-12 md:grid-cols-2 md:gap-16">
          <Reveal delay={60}>
            <ul className="flex flex-col gap-8">
              {education.map((item) => (
                <li key={item.institution} className="border-l-2 border-line pl-5">
                  <p className="font-display text-xl tracking-tight">
                    {item.institution}
                  </p>
                  <p className="mt-1 text-sm text-ink-soft">{pick(item.degree)}</p>
                  {item.status && (
                    <p className="mt-1 font-mono text-xs uppercase tracking-wide text-muted">
                      {pick(item.status)}
                    </p>
                  )}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={120}>
            <p className="font-mono text-xs uppercase tracking-wide text-muted">
              {t.education.trainingTitle}
            </p>
            <ul className="mt-4 flex flex-col gap-3">
              {training.map((item) => (
                <li key={item} className="text-sm text-ink-soft">
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Button href={settings.linkedinUrl} variant="ghost" external>
                {t.education.credentials} →
              </Button>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
