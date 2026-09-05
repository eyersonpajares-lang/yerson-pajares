"use client";

import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { cn } from "@/lib/utils";

export function LanguageSwitch({ className }: { className?: string }) {
  const { lang, setLang } = useLanguage();

  return (
    <div
      className={cn(
        "inline-flex items-center gap-1 font-mono text-xs tracking-wide",
        className
      )}
      role="group"
      aria-label="Language"
    >
      <button
        type="button"
        onClick={() => setLang("es")}
        aria-pressed={lang === "es"}
        className={cn(
          "inline-flex items-center gap-1 px-1.5 py-0.5 transition-colors",
          lang === "es" ? "text-ink" : "text-muted hover:text-ink"
        )}
      >
        <span aria-hidden="true">🇪🇸</span> ES
      </button>
      <span className="text-line" aria-hidden="true">
        |
      </span>
      <button
        type="button"
        onClick={() => setLang("en")}
        aria-pressed={lang === "en"}
        className={cn(
          "inline-flex items-center gap-1 px-1.5 py-0.5 transition-colors",
          lang === "en" ? "text-ink" : "text-muted hover:text-ink"
        )}
      >
        <span aria-hidden="true">🇺🇸</span> EN
      </button>
    </div>
  );
}
