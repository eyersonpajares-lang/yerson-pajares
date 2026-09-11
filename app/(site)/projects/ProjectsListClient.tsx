"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import type { Project } from "@/types/content";
import { Container } from "@/components/ui/Container";
import { Kicker } from "@/components/ui/Kicker";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowGlyph } from "@/components/ui/ArrowGlyph";
import { MediaFrame } from "@/components/ui/MediaFrame";

export function ProjectsListClient({ projects }: { projects: Project[] }) {
  const { t } = useLanguage();

  return (
    <div className="py-16 md:py-24">
      <Container>
        <Reveal>
          <Kicker>{t.personalProjects.kicker}</Kicker>
          <h1 className="mt-4 max-w-2xl font-display text-5xl tracking-tight md:text-6xl">
            {t.personalProjects.title}
          </h1>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-muted md:text-lg">
            {t.personalProjects.description}
          </p>
        </Reveal>

        <div className="mt-16 flex flex-col gap-16 md:gap-20">
          {projects.map((project, i) => (
            <Reveal key={project.slug} delay={i * 70}>
              <ProjectRow project={project} reversed={i % 2 === 1} index={String(i + 1).padStart(2, "0")} />
            </Reveal>
          ))}
        </div>
      </Container>
    </div>
  );
}

function ProjectRow({
  project,
  reversed,
  index,
}: {
  project: Project;
  reversed: boolean;
  index: string;
}) {
  const { t, pick } = useLanguage();

  const media = (
    <MediaFrame
      src={project.cover}
      index={index}
      alt={project.title}
      fit="contain"
      className={project.cover ? "md:col-span-6" : "aspect-[16/10] md:col-span-6"}
    />
  );

  const text = (
    <div className="md:col-span-6">
      <p className="font-mono text-xs uppercase tracking-wide text-accent">{project.category}</p>
      <h2 className="mt-3 font-display text-3xl tracking-tight md:text-4xl">{project.title}</h2>
      <p className="mt-4 max-w-md text-base leading-relaxed text-ink-soft">
        {pick(project.shortDescription)}
      </p>
      <div className="mt-6 flex flex-wrap items-center gap-4">
        <Link
          href={`/projects/${project.slug}`}
          className="group inline-flex items-center gap-1.5 text-sm font-medium underline decoration-line underline-offset-4 hover:decoration-accent"
        >
          {t.personalProjects.explore} <ArrowGlyph>→</ArrowGlyph>
        </Link>
        {project.websiteUrl && (
          <a
            href={project.websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-soft underline decoration-line underline-offset-4 hover:text-ink hover:decoration-accent"
          >
            {t.personalProjects.visitWebsite} ↗
          </a>
        )}
      </div>
    </div>
  );

  return (
    <div className="grid gap-8 md:grid-cols-12 md:items-center md:gap-12">
      {reversed ? (
        <>
          {text}
          {media}
        </>
      ) : (
        <>
          {media}
          {text}
        </>
      )}
    </div>
  );
}
