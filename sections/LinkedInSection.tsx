"use client";

import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { linkedInProvider } from "@/lib/linkedin";
import { settings } from "@/lib/data/settings";
import { formatDate } from "@/lib/utils";
import { Container } from "@/components/ui/Container";
import { Kicker } from "@/components/ui/Kicker";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

export function LinkedInSection() {
  const { t, lang } = useLanguage();
  const post = linkedInProvider.getFeaturedPost();

  return (
    <section id="linkedin" className="border-t border-line py-20 md:py-28">
      <Container>
        <div className="grid gap-10 md:grid-cols-12 md:gap-8">
          <Reveal className="md:col-span-4">
            <Kicker>{t.linkedin.kicker}</Kicker>
            <h2 className="mt-4 font-display text-3xl tracking-tight md:text-4xl">
              {t.linkedin.title}
            </h2>
            <div className="mt-6">
              <Button href={settings.linkedinUrl} variant="ghost" external>
                {t.linkedin.viewMore} →
              </Button>
            </div>
          </Reveal>

          <Reveal delay={80} className="md:col-span-8">
            {post?.embedUrl ? (
              <div className="border border-line bg-paper-dim/40 p-2">
                <iframe
                  src={post.embedUrl}
                  title={post.title ?? "LinkedIn post"}
                  height={520}
                  width="100%"
                  loading="lazy"
                  className="w-full"
                  style={{ border: "none" }}
                />
                <div className="flex items-center justify-between px-3 py-3">
                  <span className="font-mono text-xs text-muted">
                    {formatDate(post.date, lang)}
                  </span>
                  <a
                    href={post.postUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium underline decoration-line underline-offset-4 hover:decoration-accent"
                  >
                    {t.linkedin.viewOnLinkedIn} ↗
                  </a>
                </div>
              </div>
            ) : (
              <a
                href={settings.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full min-h-[220px] flex-col justify-between border border-line p-8 transition-colors hover:border-ink"
              >
                <p className="max-w-sm text-lg leading-relaxed text-ink-soft">
                  {lang === "es"
                    ? "Pronto: mi última publicación de LinkedIn aparecerá aquí."
                    : "Coming soon: my latest LinkedIn post will appear here."}
                </p>
                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium underline decoration-line underline-offset-4 group-hover:decoration-accent">
                  {t.linkedin.viewOnLinkedIn} ↗
                </span>
              </a>
            )}
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
