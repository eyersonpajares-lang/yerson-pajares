"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import type { Experience } from "@/types/content";
import { ideas } from "@/lib/data/ideas";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { cn } from "@/lib/utils";

export function ExperienceDetailPanel({
  experience,
  onClose,
}: {
  experience: Experience | null;
  onClose: () => void;
}) {
  const { t, pick, pickList } = useLanguage();
  const open = experience !== null;

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  const relatedIdea = experience?.relatedIdeaSlug
    ? ideas.find((idea) => idea.slug === experience.relatedIdeaSlug)
    : undefined;

  return (
    <div
      className={cn(
        "fixed inset-0 z-[60] transition-opacity duration-200",
        open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
      )}
      aria-hidden={!open}
    >
      <button
        type="button"
        aria-label={t.experiencePage.close}
        onClick={onClose}
        className="absolute inset-0 bg-ink/30"
      />

      <div
        className={cn(
          "absolute inset-y-0 right-0 flex w-full max-w-xl flex-col bg-paper shadow-xl transition-transform duration-300 ease-out",
          open ? "translate-x-0" : "translate-x-full"
        )}
        role="dialog"
        aria-modal="true"
      >
        <div className="flex items-center justify-between border-b border-line px-6 py-5 md:px-10">
          <span className="font-mono text-xs uppercase tracking-wide text-muted">
            {experience?.company}
          </span>
          <button
            type="button"
            onClick={onClose}
            className="font-mono text-xs uppercase tracking-wide text-muted hover:text-ink"
          >
            {t.experiencePage.close} ✕
          </button>
        </div>

        {experience && (
          <div className="flex-1 overflow-y-auto px-6 py-8 md:px-10">
            <p className="font-mono text-xs uppercase tracking-wide text-accent">
              {pick(experience.period)}
            </p>
            <h2 className="mt-3 font-display text-3xl tracking-tight md:text-4xl">
              {experience.project ? pick(experience.project) : experience.company}
            </h2>
            {experience.project && (
              <p className="mt-1 text-sm text-muted">{experience.company}</p>
            )}
            <p className="mt-2 text-lg text-ink-soft">{pick(experience.role)}</p>
            {experience.client && (
              <p className="mt-1 text-sm text-muted">{experience.client}</p>
            )}

            <MediaFrame
              index="—"
              alt={experience.company}
              className="mt-8 aspect-[16/9] w-full"
            />

            {experience.project && (
              <section className="mt-10">
                <h3 className="font-mono text-xs uppercase tracking-wide text-muted">
                  {t.experiencePage.project}
                </h3>
                <p className="mt-2 text-base leading-relaxed text-ink-soft">
                  {pick(experience.project)}
                </p>
                {experience.context && (
                  <p className="mt-2 text-base leading-relaxed text-ink-soft">
                    {pick(experience.context)}
                  </p>
                )}
              </section>
            )}

            <section className="mt-8">
              <h3 className="font-mono text-xs uppercase tracking-wide text-muted">
                {t.experiencePage.myRole}
              </h3>
              <p className="mt-2 text-base leading-relaxed text-ink-soft">
                {pick(experience.role)}
                {experience.highlight ? ` — ${pick(experience.highlight)}` : ""}
              </p>
            </section>

            <section className="mt-8">
              <h3 className="font-mono text-xs uppercase tracking-wide text-muted">
                {t.experiencePage.whatIWorkedWith}
              </h3>
              <div className="mt-3 flex flex-wrap gap-3">
                {pickList(experience.work).map((item) => (
                  <span
                    key={item}
                    className="border border-line px-3 py-1 font-mono text-xs uppercase tracking-wide text-muted"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </section>

            {experience.usefulFor && (
              <section className="mt-8 border-t border-line pt-8">
                <h3 className="font-mono text-xs uppercase tracking-wide text-accent">
                  {t.experiencePage.usefulFor}
                </h3>
                <ul className="mt-3 flex flex-col gap-2">
                  {pickList(experience.usefulFor).map((item) => (
                    <li key={item} className="text-sm leading-relaxed text-ink-soft">
                      — {item}
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {experience.keyTakeaway && (
              <section className="mt-6">
                <h3 className="font-mono text-xs uppercase tracking-wide text-muted">
                  {t.experiencePage.keyTakeaway}
                </h3>
                <p className="mt-2 font-display text-xl leading-snug tracking-tight">
                  {pick(experience.keyTakeaway)}
                </p>
              </section>
            )}

            {relatedIdea && (
              <section className="mt-10 border-t border-line pt-6">
                <p className="font-mono text-xs uppercase tracking-wide text-accent">
                  {t.experiencePage.relatedIdea}
                </p>
                <Link
                  href={`/ideas/${relatedIdea.slug}`}
                  className="group mt-2 inline-block"
                  onClick={onClose}
                >
                  <span className="font-display text-lg tracking-tight group-hover:text-accent">
                    {pick(relatedIdea.title)} →
                  </span>
                </Link>
              </section>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
