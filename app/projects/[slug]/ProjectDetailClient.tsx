"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import type { ProjectCaseStudy } from "@/types/content";
import { Container } from "@/components/ui/Container";
import { Kicker } from "@/components/ui/Kicker";
import { Reveal } from "@/components/ui/Reveal";

export function ProjectDetailClient({ project }: { project: ProjectCaseStudy }) {
  const { t, lang, pick, pickList } = useLanguage();

  return (
    <div className="py-16 md:py-24">
      <Container>
        <Reveal>
          <Link
            href="/projects"
            className="font-mono text-xs uppercase tracking-wide text-muted hover:text-ink"
          >
            ← {t.nav.projects}
          </Link>
        </Reveal>

        <Reveal delay={40} className="mt-8">
          <Kicker>{project.category}</Kicker>
          <h1 className="mt-4 font-display text-5xl tracking-tight md:text-7xl">
            {project.title}
          </h1>
          <p className="mt-4 max-w-xl text-lg text-ink-soft">{pick(project.subtitle)}</p>

          <dl className="mt-10 grid max-w-lg grid-cols-3 gap-6 border-y border-line py-6">
            <div>
              <dt className="font-mono text-xs uppercase tracking-wide text-muted">
                {lang === "es" ? "Estado" : "Status"}
              </dt>
              <dd className="mt-1 text-sm">{pick(project.status)}</dd>
            </div>
            <div>
              <dt className="font-mono text-xs uppercase tracking-wide text-muted">
                {lang === "es" ? "Año" : "Year"}
              </dt>
              <dd className="mt-1 text-sm">{project.year}</dd>
            </div>
            <div>
              <dt className="font-mono text-xs uppercase tracking-wide text-muted">
                {lang === "es" ? "Rol" : "Role"}
              </dt>
              <dd className="mt-1 text-sm">{pick(project.role)}</dd>
            </div>
          </dl>
        </Reveal>

        <div className="mt-16 grid gap-16 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-8 md:col-start-1">
            <Reveal>
              <p className="text-xl leading-relaxed text-ink-soft">{pick(project.intro)}</p>
            </Reveal>

            <Reveal delay={60} className="mt-14">
              <h2 className="font-display text-2xl tracking-tight">
                {lang === "es" ? "El problema" : "The problem"}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-ink-soft">
                {pick(project.problem)}
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                {project.problemPoints.map((point) => (
                  <span
                    key={point}
                    className="border border-line px-3 py-1 font-mono text-xs uppercase tracking-wide text-muted"
                  >
                    {point}
                  </span>
                ))}
              </div>
            </Reveal>

            <Reveal delay={90} className="mt-14">
              <h2 className="font-display text-2xl tracking-tight">
                {lang === "es" ? "La idea" : "The idea"}
              </h2>
              <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
                {pickList(project.idea).map((step, i, arr) => (
                  <div key={step} className="flex items-center gap-3 sm:gap-4">
                    <span className="border border-ink px-4 py-2 text-sm font-medium">
                      {step}
                    </span>
                    {i < arr.length - 1 && (
                      <span className="text-muted" aria-hidden="true">
                        ↓
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={120} className="md:col-span-4">
            <div className="flex flex-col gap-10 md:sticky md:top-28">
              <div>
                <p className="font-mono text-xs uppercase tracking-wide text-muted">
                  {lang === "es" ? "Tecnología" : "Tech"}
                </p>
                <ul className="mt-3 flex flex-col gap-2">
                  {project.tech.map((item) => (
                    <li key={item} className="text-sm text-ink-soft">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="font-mono text-xs uppercase tracking-wide text-muted">
                  {lang === "es" ? "Explorando" : "Exploring"}
                </p>
                <ul className="mt-3 flex flex-col gap-2">
                  {project.exploring.map((item) => (
                    <li key={item} className="text-sm text-ink-soft">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </div>
  );
}
