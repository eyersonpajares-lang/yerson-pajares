"use client";

import { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { ideas } from "@/lib/data/ideas";
import { formatDate, cn } from "@/lib/utils";
import { Container } from "@/components/ui/Container";
import { Kicker } from "@/components/ui/Kicker";
import { Reveal } from "@/components/ui/Reveal";

type FilterKey = "all" | "project-controls" | "planning" | "construction" | "contracts" | "ai-data" | "technology";

const FILTER_ORDER: FilterKey[] = [
  "all",
  "project-controls",
  "planning",
  "construction",
  "contracts",
  "ai-data",
  "technology",
];

const CATEGORY_LABELS: Record<Exclude<FilterKey, "all">, string> = {
  "project-controls": "Project Controls",
  planning: "Planning",
  construction: "Construction",
  contracts: "Contracts",
  "ai-data": "AI & Data",
  technology: "Technology",
};

export function IdeasListClient() {
  const { t, lang, pick } = useLanguage();
  const [filter, setFilter] = useState<FilterKey>("all");

  const published = ideas
    .filter((idea) => idea.published)
    .filter((idea) => filter === "all" || idea.category === CATEGORY_LABELS[filter]);

  return (
    <div className="py-20 md:py-28">
      <Container>
        <Reveal>
          <Kicker>{t.ideas.kicker}</Kicker>
          <h1 className="mt-4 font-display text-5xl tracking-tight md:text-6xl">
            {t.nav.ideas}
          </h1>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-muted">
            {t.ideas.description}
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
                onClick={() => setFilter(key)}
                aria-pressed={filter === key}
                className={cn(
                  "font-mono text-xs uppercase tracking-wide transition-colors",
                  filter === key ? "text-ink" : "text-muted hover:text-ink"
                )}
              >
                {t.ideas.filters[key]}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-10 divide-y divide-line border-t border-line">
          {published.map((idea, i) => (
            <Reveal key={idea.slug} delay={i * 60}>
              <Link
                href={`/ideas/${idea.slug}`}
                className="group grid gap-2 py-9 md:grid-cols-12 md:gap-8"
              >
                <div className="md:col-span-3">
                  <p className="font-mono text-xs uppercase tracking-wide text-muted">
                    {formatDate(idea.date, lang)}
                  </p>
                  <p className="mt-1 font-mono text-xs uppercase tracking-wide text-accent">
                    {idea.category}
                  </p>
                </div>
                <div className="md:col-span-9">
                  <h2 className="font-display text-2xl tracking-tight group-hover:text-accent md:text-3xl">
                    {pick(idea.title)}
                  </h2>
                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-soft md:text-base">
                    {pick(idea.excerpt)}
                  </p>
                  <span className="mt-4 inline-block font-mono text-xs uppercase tracking-wide text-muted">
                    {idea.readingTime} {t.ideas.minRead}
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </div>
  );
}
