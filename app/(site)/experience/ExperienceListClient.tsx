"use client";

import { useState } from "react";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { experiences } from "@/lib/data/experiences";
import { Container } from "@/components/ui/Container";
import { Kicker } from "@/components/ui/Kicker";
import { Reveal } from "@/components/ui/Reveal";
import { ExperienceCard } from "@/components/experience/ExperienceCard";
import { ExperienceDetailPanel } from "@/components/experience/ExperienceDetailPanel";

export function ExperienceListClient() {
  const { t } = useLanguage();
  const [openSlug, setOpenSlug] = useState<string | null>(null);
  const active = experiences.find((e) => e.slug === openSlug) ?? null;

  return (
    <div className="py-20 md:py-28">
      <Container>
        <Reveal>
          <Kicker>{t.experiencePage.kicker}</Kicker>
          <h1 className="mt-4 font-display text-5xl tracking-tight md:text-6xl">
            {t.experiencePage.title}
          </h1>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-muted">
            {t.experiencePage.description}
          </p>
        </Reveal>

        <div className="mt-16 divide-y divide-line border-t border-line">
          {experiences.map((experience, i) => (
            <Reveal key={experience.slug} delay={Math.min(i, 6) * 50} className="py-10">
              <ExperienceCard
                experience={experience}
                onExplore={() => setOpenSlug(experience.slug)}
                exploreLabel={t.experiencePage.explore}
              />
            </Reveal>
          ))}
        </div>
      </Container>

      <ExperienceDetailPanel experience={active} onClose={() => setOpenSlug(null)} />
    </div>
  );
}
