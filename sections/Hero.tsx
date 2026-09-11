"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { useCv } from "@/lib/cv/CvProvider";
import { settings } from "@/lib/data/settings";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

const skills = [
  "Primavera P6",
  "Project Controls",
  "Construction",
  "NEC",
  "Power BI",
  "AI",
];

export function Hero() {
  const { t, lang } = useLanguage();
  const cvUrls = useCv();
  const cvHref = cvUrls[lang] ? `${cvUrls[lang]}?download` : settings.cv[lang];

  return (
    <section id="top" className="relative overflow-hidden pt-16 pb-20 md:pt-24 md:pb-28">
      <Container>
        <p className="animate-reveal font-mono text-xs uppercase tracking-[0.25em] text-muted">
          {settings.positioning}
        </p>

        <div className="flex items-center justify-between gap-4">
          <h1 className="animate-reveal mt-6 font-display text-[13vw] font-medium leading-[0.92] tracking-tight sm:text-7xl md:text-8xl lg:text-[7.5rem]">
            {settings.displayName}
          </h1>

          <div className="relative aspect-square w-14 shrink-0 overflow-hidden rounded-full border border-line sm:w-20 md:w-24">
            <Image
              src="/images/yerson-pajares.png"
              alt={settings.displayName}
              fill
              priority
              sizes="96px"
              className="object-cover"
            />
          </div>
        </div>

        <div className="mt-10 grid gap-10 md:mt-14 md:grid-cols-12 md:gap-8">
          <p
            className="animate-reveal font-display text-3xl leading-[1.15] tracking-tight text-ink md:col-span-7 md:text-4xl lg:text-[2.75rem]"
            style={{ animationDelay: "80ms" }}
          >
            {t.hero.headline}
          </p>

          <div
            className="animate-reveal flex flex-col gap-8 md:col-span-5"
            style={{ animationDelay: "150ms" }}
          >
            <p className="max-w-md text-base leading-relaxed text-ink-soft md:text-[1.05rem]">
              {t.hero.description}
            </p>

            <p className="font-mono text-xs uppercase tracking-wider text-muted">
              {skills.join(" · ")}
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Button href="/#experience" variant="primary">
                {t.hero.ctaWork} →
              </Button>
              <Button href={cvHref} variant="secondary" external>
                {t.hero.ctaCv} ↓
              </Button>
              <Button href="/#contact" variant="ghost">
                {t.hero.ctaContact}
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
