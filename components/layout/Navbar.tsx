"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { useCv } from "@/lib/cv/CvProvider";
import { settings } from "@/lib/data/settings";
import { Container } from "@/components/ui/Container";
import { LanguageSwitch } from "@/components/ui/LanguageSwitch";
import { cn } from "@/lib/utils";

export function Navbar() {
  const { t, lang } = useLanguage();
  const cvUrls = useCv();
  const cvHref = cvUrls[lang] ? `${cvUrls[lang]}?download` : settings.cv[lang];
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const navItems = [
    { label: t.nav.experience, href: "/experience" },
    { label: t.nav.projects, href: "/projects" },
    { label: t.nav.ideas, href: "/ideas" },
  ];

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-colors",
        scrolled
          ? "border-line bg-paper/85 backdrop-blur-md"
          : "border-transparent bg-paper/0"
      )}
    >
      <Container className="flex h-16 items-center justify-between md:h-20">
        <Link
          href="/"
          className="font-display text-lg font-medium tracking-tight"
          onClick={() => setOpen(false)}
        >
          <span className="md:hidden">{settings.shortName}</span>
          <span className="hidden md:inline">{settings.displayName}</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-ink-soft transition-colors hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-6 md:flex">
          <LanguageSwitch />
          <a
            href={cvHref}
            className="inline-flex items-center gap-1.5 border border-ink px-4 py-2 text-sm font-medium transition-colors hover:bg-ink hover:text-paper"
            download
          >
            {t.nav.downloadCv} ↓
          </a>
        </div>

        <button
          type="button"
          className="flex flex-col gap-1.5 p-2 md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span
            className={cn(
              "block h-px w-6 bg-ink transition-transform",
              open && "translate-y-[3.5px] rotate-45"
            )}
          />
          <span
            className={cn(
              "block h-px w-6 bg-ink transition-transform",
              open && "-translate-y-[3.5px] -rotate-45"
            )}
          />
        </button>
      </Container>

      {open && (
        <div className="fixed inset-x-0 top-16 bottom-0 z-40 flex flex-col bg-paper md:hidden">
          <Container className="flex flex-1 flex-col justify-between py-10">
            <nav className="flex flex-col gap-1">
              {navItems.map((item, i) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-line py-5 font-display text-3xl"
                  style={{ animationDelay: `${i * 40}ms` }}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="flex flex-col gap-6 pt-10">
              <LanguageSwitch className="text-sm" />
              <a
                href={cvHref}
                className="inline-flex w-full items-center justify-center gap-1.5 border border-ink px-5 py-4 text-sm font-medium"
                download
              >
                {t.nav.downloadCv} ↓
              </a>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
