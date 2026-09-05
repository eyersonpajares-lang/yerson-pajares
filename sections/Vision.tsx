"use client";

import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { Container } from "@/components/ui/Container";
import { Kicker } from "@/components/ui/Kicker";
import { Reveal } from "@/components/ui/Reveal";

export function Vision() {
  const { t } = useLanguage();

  const stages = [
    { label: t.vision.now, value: t.vision.nowLabel },
    { label: t.vision.next, value: t.vision.nextLabel },
    { label: t.vision.future, value: t.vision.futureLabel },
  ];

  return (
    <section id="vision" className="border-t border-line py-20 md:py-28">
      <Container>
        <Reveal>
          <Kicker>{t.vision.kicker}</Kicker>
          <h2 className="mt-4 font-display text-4xl tracking-tight md:text-5xl">
            {t.vision.title}
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-10 md:grid-cols-12 md:gap-8">
          <Reveal delay={60} className="flex flex-col gap-5 md:col-span-6">
            <p className="text-lg leading-relaxed text-ink-soft">{t.vision.text1}</p>
            <p className="text-lg leading-relaxed text-ink-soft">{t.vision.text2}</p>
          </Reveal>

          <Reveal
            delay={120}
            className="flex flex-col justify-center gap-6 md:col-span-6 md:flex-row md:items-center"
          >
            {stages.map((stage, i) => (
              <div key={stage.label} className="flex items-center gap-6 md:contents">
                <div>
                  <p className="font-mono text-xs tracking-widest text-muted">
                    {stage.label}
                  </p>
                  <p
                    className={
                      i === stages.length - 1
                        ? "mt-1 font-display text-xl tracking-tight text-accent md:text-2xl"
                        : "mt-1 font-display text-xl tracking-tight md:text-2xl"
                    }
                  >
                    {stage.value}
                  </p>
                </div>
                {i < stages.length - 1 && (
                  <span className="hidden text-muted md:block" aria-hidden="true">
                    →
                  </span>
                )}
              </div>
            ))}
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
