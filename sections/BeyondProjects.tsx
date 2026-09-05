"use client";

import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { Container } from "@/components/ui/Container";
import { Kicker } from "@/components/ui/Kicker";
import { Reveal } from "@/components/ui/Reveal";

export function BeyondProjects() {
  const { t } = useLanguage();

  return (
    <section id="beyond" className="border-t border-line py-20 md:py-28">
      <Container>
        <Reveal className="max-w-2xl">
          <Kicker>{t.beyond.kicker}</Kicker>
          <h2 className="mt-4 font-display text-4xl tracking-tight md:text-5xl">
            {t.beyond.title}
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-ink-soft">{t.beyond.text}</p>
        </Reveal>
      </Container>
    </section>
  );
}
