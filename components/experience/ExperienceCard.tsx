"use client";

import { useLanguage } from "@/lib/i18n/LanguageProvider";
import type { Experience } from "@/types/content";
import { ArrowGlyph } from "@/components/ui/ArrowGlyph";

export function ExperienceCard({
  experience,
  onExplore,
  exploreLabel,
}: {
  experience: Experience;
  onExplore: () => void;
  exploreLabel: string;
}) {
  const { pick } = useLanguage();
  const blurb = experience.context ?? experience.highlight;

  return (
    <button
      type="button"
      onClick={onExplore}
      className="group block w-full text-left"
    >
      <p className="font-mono text-xs uppercase tracking-wide text-muted">
        {pick(experience.period)}
      </p>
      <h3 className="mt-2 font-display text-2xl tracking-tight md:text-3xl">
        {experience.company}
      </h3>
      {experience.project && (
        <p className="mt-1 text-sm text-ink-soft">{pick(experience.project)}</p>
      )}
      <p className="mt-1 font-mono text-xs uppercase tracking-wide text-accent">
        {pick(experience.role)}
      </p>
      {blurb && (
        <p className="mt-3 max-w-md text-sm leading-relaxed text-ink-soft">{pick(blurb)}</p>
      )}
      <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1.5">
        {experience.tags.slice(0, 5).map((tag) => (
          <span key={tag} className="font-mono text-xs uppercase tracking-wide text-muted">
            {tag}
          </span>
        ))}
      </div>
      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium underline decoration-line underline-offset-4 group-hover:decoration-accent">
        {exploreLabel} <ArrowGlyph>→</ArrowGlyph>
      </span>
    </button>
  );
}
