"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import type { Project } from "@/types/content";
import type { RelatedItem } from "@/lib/data/related";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowGlyph } from "@/components/ui/ArrowGlyph";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { cn } from "@/lib/utils";

export function ProjectDetailClient({
  project,
  prev,
  next,
  related,
}: {
  project: Project;
  prev: Project | null;
  next: Project | null;
  related: RelatedItem[];
}) {
  const { t, lang, pick, pickList } = useLanguage();
  const [activeKey, setActiveKey] = useState<string>(project.sections[0]?.key ?? "");
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((e) => e.isIntersecting);
        if (visible?.target instanceof HTMLElement) {
          const key = visible.target.dataset.sectionKey;
          if (key) setActiveKey(key);
        }
      },
      { rootMargin: "-15% 0px -70% 0px" }
    );
    Object.values(sectionRefs.current).forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, [project.slug]);

  return (
    <div className="py-16 md:py-24">
      <Container>
        <Reveal>
          <Link
            href="/projects"
            className="group inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wide text-muted hover:text-ink"
          >
            <ArrowGlyph className="inline-block transition-transform duration-200 ease-out group-hover:-translate-x-0.5">
              ←
            </ArrowGlyph>{" "}
            {t.personalProjects.backToProjects}
          </Link>
        </Reveal>

        <Reveal delay={40} className="mt-8 max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-wide text-accent">
            {project.category}
            {project.year && ` · ${project.year}`}
          </p>
          <h1 className="mt-4 font-display text-4xl tracking-tight md:text-6xl">
            {project.title}
          </h1>
          {project.subtitle && (
            <p className="mt-4 text-lg text-ink-soft">{pick(project.subtitle)}</p>
          )}

          {project.websiteUrl && (
            <a
              href={project.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium underline decoration-line underline-offset-4 hover:decoration-accent"
            >
              {t.personalProjects.visitWebsite} ↗
            </a>
          )}

          <dl className="mt-8 flex flex-wrap gap-x-10 gap-y-4 border-y border-line py-5">
            {project.status && (
              <div>
                <dt className="font-mono text-xs uppercase tracking-wide text-muted">
                  {lang === "es" ? "Estado" : "Status"}
                </dt>
                <dd className="mt-1 text-sm">{pick(project.status)}</dd>
              </div>
            )}
            {project.role && (
              <div>
                <dt className="font-mono text-xs uppercase tracking-wide text-muted">
                  {lang === "es" ? "Rol" : "Role"}
                </dt>
                <dd className="mt-1 text-sm">{pick(project.role)}</dd>
              </div>
            )}
            {project.client && (
              <div>
                <dt className="font-mono text-xs uppercase tracking-wide text-muted">
                  {lang === "es" ? "Cliente" : "Client"}
                </dt>
                <dd className="mt-1 text-sm">{project.client}</dd>
              </div>
            )}
          </dl>
        </Reveal>

        <Reveal delay={80} className="mt-10">
          <MediaFrame
            src={project.cover}
            index="01"
            alt={project.title}
            fit="contain"
            className="aspect-[16/9] w-full"
          />
        </Reveal>

        <div className="mt-16 grid gap-16 md:grid-cols-12 md:gap-8">
          <div className="flex flex-col gap-16 md:col-span-8">
            {project.sections.map((section) => (
              <section
                key={section.key}
                id={section.key}
                data-section-key={section.key}
                ref={(el) => {
                  sectionRefs.current[section.key] = el;
                }}
                className="scroll-mt-28"
              >
                <Reveal>
                  <h2 className="font-display text-2xl tracking-tight">
                    {pick(section.title)}
                  </h2>

                  {section.body && (
                    <div className="mt-4 flex flex-col gap-4">
                      {pick(section.body)
                        .split("\n\n")
                        .map((para, i) => (
                          <p key={i} className="text-base leading-relaxed text-ink-soft">
                            {para}
                          </p>
                        ))}
                    </div>
                  )}

                  {section.steps && (
                    <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
                      {pickList(section.steps).map((step, i, arr) => (
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
                  )}

                  {section.list &&
                    (section.key === "role" ? (
                      <ul className="mt-4 flex flex-col gap-2">
                        {section.list.map((item) => (
                          <li key={item} className="text-sm leading-relaxed text-ink-soft">
                            {item}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <div className="mt-5 flex flex-wrap gap-3">
                        {section.list.map((item) => (
                          <span
                            key={item}
                            className="border border-line px-3 py-1 font-mono text-xs uppercase tracking-wide text-muted"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    ))}
                </Reveal>
              </section>
            ))}
          </div>

          {project.sections.length > 1 && (
            <div className="md:col-span-4">
              <details className="border border-line md:hidden">
                <summary className="cursor-pointer px-4 py-3 font-mono text-xs uppercase tracking-wide text-muted">
                  {t.personalProjects.onThisPage}
                </summary>
                <nav className="flex flex-col gap-1 px-4 pb-4">
                  {project.sections.map((s) => (
                    <a key={s.key} href={`#${s.key}`} className="py-1.5 text-sm text-ink-soft">
                      {pick(s.title)}
                    </a>
                  ))}
                </nav>
              </details>

              <nav className="sticky top-28 hidden flex-col gap-2 border-l border-line pl-5 md:flex">
                <p className="mb-2 font-mono text-xs uppercase tracking-wide text-muted">
                  {t.personalProjects.onThisPage}
                </p>
                {project.sections.map((s) => (
                  <a
                    key={s.key}
                    href={`#${s.key}`}
                    className={cn(
                      "text-sm transition-colors",
                      activeKey === s.key ? "text-ink" : "text-muted hover:text-ink"
                    )}
                  >
                    {pick(s.title)}
                  </a>
                ))}
              </nav>
            </div>
          )}
        </div>

        {(prev || next) && (
          <div className="mt-20 grid gap-6 border-t border-line pt-10 sm:grid-cols-2">
            {prev ? (
              <Link href={`/projects/${prev.slug}`} className="group">
                <p className="font-mono text-xs uppercase tracking-wide text-muted">
                  ← {t.personalProjects.prevProject}
                </p>
                <p className="mt-2 font-display text-xl tracking-tight group-hover:text-accent">
                  {prev.title}
                </p>
              </Link>
            ) : (
              <div />
            )}
            {next ? (
              <Link href={`/projects/${next.slug}`} className="group sm:text-right">
                <p className="font-mono text-xs uppercase tracking-wide text-muted">
                  {t.personalProjects.nextProject} →
                </p>
                <p className="mt-2 font-display text-xl tracking-tight group-hover:text-accent">
                  {next.title}
                </p>
              </Link>
            ) : (
              <div />
            )}
          </div>
        )}

        {related.length > 0 && (
          <div className="mt-16 border-t border-line pt-10">
            <p className="font-mono text-xs uppercase tracking-wide text-accent">
              {t.personalProjects.relatedTitle}
            </p>
            <div className="mt-6 grid gap-8 sm:grid-cols-2 md:grid-cols-3">
              {related.map((item) =>
                item.kind === "project" ? (
                  <Link
                    key={item.project.slug}
                    href={`/projects/${item.project.slug}`}
                    className="group"
                  >
                    <p className="font-mono text-xs uppercase tracking-wide text-muted">
                      {item.project.category}
                    </p>
                    <p className="mt-2 font-display text-lg tracking-tight group-hover:text-accent">
                      {item.project.title}
                    </p>
                  </Link>
                ) : (
                  <Link key={item.idea.slug} href={`/ideas/${item.idea.slug}`} className="group">
                    <p className="font-mono text-xs uppercase tracking-wide text-muted">
                      {item.idea.category}
                    </p>
                    <p className="mt-2 font-display text-lg tracking-tight group-hover:text-accent">
                      {pick(item.idea.title)}
                    </p>
                  </Link>
                )
              )}
            </div>
          </div>
        )}
      </Container>
    </div>
  );
}
