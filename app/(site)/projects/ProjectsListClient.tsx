"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import {
  selectedWorkProjects,
  labProjects,
  ventureProjects,
} from "@/lib/data/projects";
import { nowItems } from "@/lib/data/now";
import type { Project, ProjectCategory } from "@/types/content";
import { Container } from "@/components/ui/Container";
import { Kicker } from "@/components/ui/Kicker";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowGlyph } from "@/components/ui/ArrowGlyph";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { cn } from "@/lib/utils";

type FilterKey = "all" | ProjectCategory;

const FILTER_ORDER: FilterKey[] = [
  "all",
  "project-controls",
  "planning",
  "ai-automation",
  "construction",
  "data",
  "ventures",
];

export function ProjectsListClient() {
  const { t } = useLanguage();
  const [filter, setFilter] = useState<FilterKey>("all");
  const [fading, setFading] = useState(false);

  const allSelected = useMemo(() => selectedWorkProjects(), []);
  const allLab = useMemo(() => labProjects(), []);
  const allVentures = useMemo(() => ventureProjects(), []);

  function selectFilter(next: FilterKey) {
    if (next === filter) return;
    setFading(true);
    window.setTimeout(() => {
      setFilter(next);
      setFading(false);
    }, 120);
  }

  const matches = (p: Project) =>
    filter === "all" || p.categories.includes(filter as ProjectCategory);

  const selected = allSelected.filter(matches);
  const lab = allLab.filter(matches);
  const ventures = allVentures.filter(matches);

  const [featured, ...rest] = selected;
  const total = allSelected.length + allLab.length + allVentures.length;

  return (
    <div className="py-16 md:py-24">
      <Container>
        <Reveal>
          <Kicker>
            {t.projectsPage.kicker} · {String(1).padStart(2, "0")}—
            {String(total).padStart(2, "0")}
          </Kicker>
          <h1 className="mt-4 max-w-2xl font-display text-4xl tracking-tight md:text-6xl">
            {t.projectsPage.title}
          </h1>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-muted md:text-lg">
            {t.projectsPage.description}
          </p>
        </Reveal>

        <Reveal
          delay={60}
          className="-mx-6 mt-10 overflow-x-auto px-6 no-scrollbar md:mx-0 md:overflow-visible md:px-0"
        >
          <div className="flex items-center gap-6 whitespace-nowrap border-y border-line py-3">
            {FILTER_ORDER.map((key) => (
              <button
                key={key}
                type="button"
                onClick={() => selectFilter(key)}
                aria-pressed={filter === key}
                className={cn(
                  "font-mono text-xs uppercase tracking-wide transition-colors",
                  filter === key ? "text-ink" : "text-muted hover:text-ink"
                )}
              >
                {t.projectsPage.filters[key]}
              </button>
            ))}
          </div>
        </Reveal>

        <Reveal
          delay={100}
          className="mt-12 flex flex-col gap-6 border-b border-line pb-10 md:mt-16 md:flex-row md:items-start md:justify-between"
        >
          <div>
            <Kicker>{t.projectsPage.buildingKicker}</Kicker>
            <p className="mt-1 text-sm text-ink-soft">{t.projectsPage.buildingTitle}</p>
          </div>
          <div className="grid gap-x-10 gap-y-2 text-sm text-ink-soft md:grid-cols-3">
            {nowItems.slice(0, 3).map((item) => (
              <NowLine key={item.text.es} item={item} />
            ))}
          </div>
        </Reveal>
      </Container>

      <div className={cn("transition-opacity duration-200", fading ? "opacity-0" : "opacity-100")}>
        {selected.length > 0 && (
          <Container>
            <section className="mt-16 md:mt-24">
              <Reveal>
                <h2 className="font-display text-3xl tracking-tight md:text-4xl">
                  {t.selectedWork.title}
                </h2>
              </Reveal>

              {featured && (
                <Reveal delay={60} className="mt-10">
                  <FeaturedProject project={featured} viewLabel={t.selectedWork.viewProject} />
                </Reveal>
              )}

              {rest.length > 0 && (
                <div className="mt-16 grid gap-x-8 gap-y-12 md:grid-cols-3">
                  {rest.map((p, i) => (
                    <Reveal key={p.slug} delay={i * 60}>
                      <SecondaryProject project={p} index={String(i + 2).padStart(2, "0")} />
                    </Reveal>
                  ))}
                </div>
              )}
            </section>
          </Container>
        )}

        {lab.length > 0 && (
          <section className="mt-20 border-t border-line bg-paper-dim/40 py-14 md:mt-28 md:py-20">
            <Container>
              <Reveal>
                <Kicker>{t.projectsPage.labKicker}</Kicker>
                <h2 className="mt-3 font-display text-3xl tracking-tight md:text-4xl">
                  {t.projectsPage.labTitle}
                </h2>
                <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted">
                  {t.projectsPage.labDescription}
                </p>
              </Reveal>

              <div className="mt-10 divide-y divide-line border-t border-line">
                {lab.map((p, i) => (
                  <LabRow key={p.slug} project={p} delay={i * 50} />
                ))}
              </div>
            </Container>
          </section>
        )}

        {ventures.length > 0 && (
          <Container>
            <section className="mt-20 md:mt-28">
              <Reveal className="max-w-xl">
                <Kicker>{t.projectsPage.venturesKicker}</Kicker>
                <h2 className="mt-3 font-display text-3xl tracking-tight md:text-4xl">
                  {t.projectsPage.venturesTitle}
                </h2>
                <p className="mt-4 text-base leading-relaxed text-ink-soft">
                  {t.projectsPage.venturesDescription}
                </p>
              </Reveal>

              <div className="mt-14 flex flex-col gap-16 md:gap-20">
                {ventures.map((v, i) => (
                  <Reveal key={v.slug} delay={i * 80}>
                    <VentureRow project={v} reversed={i % 2 === 1} index={String(i + 1).padStart(2, "0")} />
                  </Reveal>
                ))}
              </div>
            </section>
          </Container>
        )}
      </div>
    </div>
  );
}

function NowLine({ item }: { item: (typeof nowItems)[number] }) {
  const { pick } = useLanguage();
  return <p>{pick(item.text)}</p>;
}

function FeaturedProject({
  project,
  viewLabel,
}: {
  project: Project;
  viewLabel: string;
}) {
  const { pick } = useLanguage();

  const inner = (
    <div className="grid gap-8 md:grid-cols-12 md:items-center md:gap-12">
      <MediaFrame index="01" alt={project.title} className="aspect-[4/3] md:col-span-7" />
      <div className="md:col-span-5">
        <p className="font-mono text-xs uppercase tracking-wide text-accent">
          {project.category}
          {project.year && ` · ${project.year}`}
        </p>
        <h3 className="mt-3 font-display text-3xl tracking-tight md:text-4xl">
          {project.title}
        </h3>
        <p className="mt-4 text-base leading-relaxed text-ink-soft">
          {pick(project.shortDescription)}
        </p>
        {project.tags.length > 0 && (
          <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2">
            {project.tags.slice(0, 4).map((tag) => (
              <span key={tag} className="font-mono text-xs uppercase tracking-wide text-muted">
                {tag}
              </span>
            ))}
          </div>
        )}
        {project.hasDetail && (
          <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium underline decoration-line underline-offset-4 group-hover:decoration-accent">
            {viewLabel} <ArrowGlyph>→</ArrowGlyph>
          </span>
        )}
      </div>
    </div>
  );

  if (!project.hasDetail) return <div className="group">{inner}</div>;

  return (
    <Link href={`/projects/${project.slug}`} className="group block">
      {inner}
    </Link>
  );
}

function SecondaryProject({ project, index }: { project: Project; index: string }) {
  const { pick } = useLanguage();
  return (
    <div>
      <p className="font-mono text-xs text-muted">{index}</p>
      <h3 className="mt-2 font-display text-xl tracking-tight md:text-2xl">{project.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-ink-soft">{pick(project.shortDescription)}</p>
      {project.tags.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-x-3 gap-y-1.5">
          {project.tags.slice(0, 3).map((tag) => (
            <span key={tag} className="font-mono text-xs uppercase tracking-wide text-muted">
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

function LabRow({ project, delay }: { project: Project; delay: number }) {
  const { pick } = useLanguage();
  return (
    <Reveal
      delay={delay}
      className="flex flex-col gap-2 py-6 md:flex-row md:items-baseline md:justify-between md:gap-8"
    >
      <div className="md:max-w-lg">
        <p className="font-display text-xl tracking-tight">{project.title}</p>
        <p className="mt-1 text-sm text-ink-soft">{pick(project.shortDescription)}</p>
      </div>
      <div className="flex shrink-0 items-center gap-4">
        {project.status && (
          <span className="font-mono text-xs uppercase tracking-wide text-accent">
            {pick(project.status)}
          </span>
        )}
        <span className="font-mono text-xs uppercase tracking-wide text-muted">
          {project.tags.slice(0, 2).join(" · ")}
        </span>
      </div>
    </Reveal>
  );
}

function VentureRow({
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
      index={index}
      alt={project.title}
      className="aspect-[16/10] md:col-span-6"
    />
  );

  const text = (
    <div className="md:col-span-6">
      <p className="font-mono text-xs uppercase tracking-wide text-accent">{project.category}</p>
      <h3 className="mt-3 font-display text-3xl tracking-tight md:text-4xl">{project.title}</h3>
      <p className="mt-4 max-w-md text-base leading-relaxed text-ink-soft">
        {pick(project.shortDescription)}
      </p>
      <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium underline decoration-line underline-offset-4 group-hover:decoration-accent">
        {t.projectsPage.exploreVenture} <ArrowGlyph>→</ArrowGlyph>
      </span>
    </div>
  );

  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group grid gap-8 md:grid-cols-12 md:items-center md:gap-12"
    >
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
    </Link>
  );
}
