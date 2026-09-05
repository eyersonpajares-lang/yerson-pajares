"use client";

import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { capabilityGroups } from "@/lib/data/capabilities";
import { Container } from "@/components/ui/Container";
import { Kicker } from "@/components/ui/Kicker";
import { Reveal } from "@/components/ui/Reveal";

export function Capabilities() {
  const { t, pick } = useLanguage();

  return (
    <section id="capabilities" className="border-t border-line py-20 md:py-28">
      <Container>
        <Reveal>
          <Kicker>{t.capabilities.kicker}</Kicker>
          <h2 className="mt-4 font-display text-4xl tracking-tight md:text-5xl">
            {t.capabilities.title}
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-5">
          {capabilityGroups.map((group, i) => (
            <Reveal key={group.category.es} delay={i * 60}>
              <h3 className="border-b border-line pb-3 font-display text-lg tracking-tight">
                {pick(group.category)}
              </h3>
              <ul className="mt-4 flex flex-col gap-2.5">
                {group.items.map((item) => (
                  <li key={item} className="text-sm text-ink-soft">
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
