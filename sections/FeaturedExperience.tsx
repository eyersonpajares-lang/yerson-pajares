"use client";

import { useState } from "react";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { experiences } from "@/lib/data/experiences";
import { Container } from "@/components/ui/Container";
import { Kicker } from "@/components/ui/Kicker";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { ExperienceCard } from "@/components/experience/ExperienceCard";
import { ExperienceDetailPanel } from "@/components/experience/ExperienceDetailPanel";

export function FeaturedExperience() {
  const { t } = useLanguage();
  const featured = experiences.filter((e) => e.featured).slice(0, 2);
  const [openSlug, setOpenSlug] = useState<string | null>(null);
  const active = experiences.find((e) => e.slug === openSlug) ?? null;

  return (
    <section id="experience" className="border-t border-line py-20 md:py-28">
      <Container>
        <Reveal>
          <Kicker>{t.featuredExperience.kicker}</Kicker>
          <h2 className="mt-4 font-display text-4xl tracking-tight md:text-5xl">
            {t.featuredExperience.title}
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-12 md:grid-cols-2 md:gap-10">
          {featured.map((experience, i) => (
            <Reveal key={experience.slug} delay={i * 80}>
              <ExperienceCard
                experience={experience}
                onExplore={() => setOpenSlug(experience.slug)}
                exploreLabel={t.featuredExperience.viewExperience}
              />
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12">
          <Button href="/experience" variant="ghost">
            {t.featuredExperience.viewAll} →
          </Button>
        </Reveal>
      </Container>

      <ExperienceDetailPanel experience={active} onClose={() => setOpenSlug(null)} />
    </section>
  );
}
