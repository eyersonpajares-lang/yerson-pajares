"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { selectedWorkProjects } from "@/lib/data/projects";
import { Container } from "@/components/ui/Container";
import { Kicker } from "@/components/ui/Kicker";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { ArrowGlyph } from "@/components/ui/ArrowGlyph";

export function SelectedWork() {
  const { t, pick } = useLanguage();

  return (
    <section id="work" className="border-t border-line py-20 md:py-28">
      <Container>
        <Reveal>
          <Kicker>{t.selectedWork.kicker}</Kicker>
          <div className="mt-4 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <h2 className="font-display text-4xl tracking-tight md:text-5xl">
              {t.selectedWork.title}
            </h2>
            <p className="max-w-sm text-sm leading-relaxed text-muted">
              {t.selectedWork.description}
            </p>
          </div>
        </Reveal>

        <div className="mt-14 divide-y divide-line border-t border-line">
          {selectedWorkProjects().map((item, i) => {
            const href = item.hasDetail ? `/projects/${item.slug}` : undefined;
            const content = (
              <>
                <div className="flex items-baseline gap-6 md:col-span-3">
                  <span className="font-mono text-xs text-muted">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-mono text-xs uppercase tracking-wider text-accent">
                    {item.category}
                  </span>
                </div>
                <div className="mt-4 md:col-span-9 md:mt-0">
                  <h3 className="font-display text-2xl tracking-tight transition-colors group-hover:text-accent md:text-3xl">
                    {item.title}
                  </h3>
                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-soft md:text-base">
                    {pick(item.shortDescription)}
                  </p>
                  <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-xs uppercase tracking-wide text-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  {href && (
                    <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-ink underline decoration-line underline-offset-4 group-hover:decoration-accent">
                      {t.selectedWork.viewProject} <ArrowGlyph>→</ArrowGlyph>
                    </span>
                  )}
                </div>
              </>
            );

            return (
              <Reveal key={item.slug} delay={i * 60}>
                {href ? (
                  <Link href={href} className="group grid gap-2 py-10 md:grid-cols-12 md:gap-8">
                    {content}
                  </Link>
                ) : (
                  <div className="group grid gap-2 py-10 md:grid-cols-12 md:gap-8">{content}</div>
                )}
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-10">
          <Button href="/projects" variant="ghost">
            {t.selectedWork.viewAll} →
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
