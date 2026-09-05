"use client";

import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { settings } from "@/lib/data/settings";
import { Container } from "@/components/ui/Container";

export function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line">
      <Container className="flex flex-col gap-6 py-12 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-display text-xl">{settings.displayName}</p>
          <p className="mt-1 text-sm text-muted">{settings.positioning}</p>
        </div>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
          <a
            href={settings.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-ink-soft hover:text-ink"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${settings.email}`}
            className="text-ink-soft hover:text-ink"
          >
            Email
          </a>
        </div>

        <div className="text-xs text-muted md:text-right">
          <p>{t.footer.tagline}</p>
          <p className="mt-1">© {year} {settings.displayName}</p>
        </div>
      </Container>
    </footer>
  );
}
