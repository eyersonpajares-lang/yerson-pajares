"use client";

import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { experiences } from "@/lib/data/experiences";
import { Container } from "@/components/ui/Container";
import { Kicker } from "@/components/ui/Kicker";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

export function Experience() {
  const { t, pick } = useLanguage();

  return (
    <section id="experience" className="border-t border-line py-20 md:py-28">
      <Container>
        <Reveal>
          <Kicker>{t.experience.kicker}</Kicker>
          <div className="mt-4 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <h2 className="font-display text-4xl tracking-tight md:text-5xl">
              {t.experience.title}
            </h2>
            <p className="max-w-sm text-sm leading-relaxed text-muted">
              {t.experience.description}
            </p>
          </div>
        </Reveal>

        <div className="mt-14 divide-y divide-line border-t border-line">
          {experiences.map((exp, i) => (
            <Reveal
              key={exp.slug}
              delay={Math.min(i, 5) * 50}
              className={cn(
                "grid gap-3 py-9 md:grid-cols-12 md:gap-8 md:py-10",
                exp.featured && "border-l-2 border-accent pl-5 md:pl-8"
              )}
            >
              <div className="md:col-span-4">
                <p className="font-mono text-xs uppercase tracking-wide text-muted">
                  {pick(exp.period)}
                </p>
                <p
                  className={cn(
                    "mt-2 font-display tracking-tight",
                    exp.featured ? "text-2xl md:text-3xl" : "text-xl md:text-2xl"
                  )}
                >
                  {exp.company}
                </p>
                <p className="mt-1 text-sm text-ink-soft">{pick(exp.role)}</p>
              </div>

              <div className="md:col-span-8">
                {exp.project && (
                  <p className="text-base font-medium text-ink md:text-lg">
                    {pick(exp.project)}
                  </p>
                )}
                {exp.client && (
                  <p className="mt-1 text-sm text-muted">{exp.client}</p>
                )}
                {exp.context && (
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                    {pick(exp.context)}
                  </p>
                )}
                {exp.highlight && (
                  <p className="mt-3 text-sm font-medium text-accent">
                    {pick(exp.highlight)}
                  </p>
                )}
                <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-xs uppercase tracking-wide text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
