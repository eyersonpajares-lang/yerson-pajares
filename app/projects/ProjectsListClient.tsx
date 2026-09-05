"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { selectedWork } from "@/lib/data/projects";
import { Container } from "@/components/ui/Container";
import { Kicker } from "@/components/ui/Kicker";
import { Reveal } from "@/components/ui/Reveal";

export function ProjectsListClient() {
  const { t, pick } = useLanguage();

  return (
    <div className="py-20 md:py-28">
      <Container>
        <Reveal>
          <Kicker>{t.selectedWork.kicker}</Kicker>
          <h1 className="mt-4 font-display text-5xl tracking-tight md:text-6xl">
            {t.nav.projects}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
            {t.selectedWork.description}
          </p>
        </Reveal>

        <div className="mt-16 divide-y divide-line border-t border-line">
          {selectedWork.map((item, i) => {
            const content = (
              <>
                <div className="flex items-baseline gap-6 md:col-span-3">
                  <span className="font-mono text-xs text-muted">{item.index}</span>
                  <span className="font-mono text-xs uppercase tracking-wider text-accent">
                    {item.kicker}
                  </span>
                </div>
                <div className="mt-4 md:col-span-9 md:mt-0">
                  <h2 className="font-display text-2xl tracking-tight transition-colors group-hover:text-accent md:text-3xl">
                    {pick(item.title)}
                  </h2>
                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-soft md:text-base">
                    {pick(item.description)}
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
                  {item.href && (
                    <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-ink underline decoration-line underline-offset-4 group-hover:decoration-accent">
                      {t.selectedWork.viewProject} →
                    </span>
                  )}
                </div>
              </>
            );

            return (
              <Reveal key={item.slug} delay={i * 60}>
                {item.href ? (
                  <Link
                    href={item.href}
                    className="group grid gap-2 py-10 md:grid-cols-12 md:gap-8"
                  >
                    {content}
                  </Link>
                ) : (
                  <div className="group grid gap-2 py-10 md:grid-cols-12 md:gap-8">
                    {content}
                  </div>
                )}
              </Reveal>
            );
          })}
        </div>
      </Container>
    </div>
  );
}
