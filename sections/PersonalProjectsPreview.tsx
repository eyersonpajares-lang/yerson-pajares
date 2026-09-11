"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import type { Project } from "@/types/content";
import { Container } from "@/components/ui/Container";
import { Kicker } from "@/components/ui/Kicker";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { ArrowGlyph } from "@/components/ui/ArrowGlyph";
import { MediaFrame } from "@/components/ui/MediaFrame";

export function PersonalProjectsPreview({ projects }: { projects: Project[] }) {
  const { t, pick } = useLanguage();

  return (
    <section id="projects" className="border-t border-line py-20 md:py-28">
      <Container>
        <Reveal>
          <Kicker>{t.personalProjects.kicker}</Kicker>
          <div className="mt-4 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <h2 className="font-display text-4xl tracking-tight md:text-5xl">
              {t.personalProjects.title}
            </h2>
            <p className="max-w-sm text-sm leading-relaxed text-muted">
              {t.personalProjects.description}
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-12 md:grid-cols-3 md:gap-8">
          {projects.map((project, i) => (
            <Reveal key={project.slug} delay={i * 70}>
              <Link href={`/projects/${project.slug}`} className="group block">
                <MediaFrame
                  src={project.cover}
                  index={String(i + 1).padStart(2, "0")}
                  alt={project.title}
                  fit="contain"
                  className="aspect-[4/3] w-full"
                />
                <p className="mt-4 font-mono text-xs uppercase tracking-wide text-accent">
                  {project.category}
                </p>
                <h3 className="mt-2 font-display text-2xl tracking-tight group-hover:text-accent">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  {pick(project.shortDescription)}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium underline decoration-line underline-offset-4 group-hover:decoration-accent">
                  {t.personalProjects.explore} <ArrowGlyph>→</ArrowGlyph>
                </span>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12">
          <Button href="/projects" variant="ghost">
            {t.personalProjects.viewAll} →
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
