"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { settings } from "@/lib/data/settings";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

export function Contact() {
  const { t, lang } = useLanguage();

  return (
    <section id="contact" className="border-t border-line py-24 md:py-32">
      <Container>
        <Reveal className="max-w-3xl">
          <div className="flex items-center gap-3">
            <Image
              src="/images/yerson-pajares.png"
              alt={settings.displayName}
              width={40}
              height={40}
              className="h-10 w-10 rounded-full border border-line object-cover"
            />
            <p className="font-mono text-xs uppercase tracking-wide text-muted">
              {settings.displayName}
            </p>
          </div>

          <h2 className="mt-6 font-display text-5xl tracking-tight sm:text-6xl md:text-7xl">
            {t.contact.title}
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-ink-soft">
            {t.contact.text}
            <br />
            {t.contact.text2}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button href={`mailto:${settings.email}`} variant="primary">
              {t.contact.email} →
            </Button>
            <Button href={settings.linkedinUrl} variant="secondary" external>
              {t.contact.linkedin}
            </Button>
            <Button href={settings.cv[lang]} variant="ghost">
              {t.contact.cv} ↓
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
