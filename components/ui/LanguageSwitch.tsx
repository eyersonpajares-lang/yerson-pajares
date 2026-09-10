"use client";

import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { FlagES, FlagUS } from "@/components/ui/Flag";
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
        onClick={() => setLang("en")}
        aria-pressed={lang === "en"}
        title="Switch to English"
        className={cn(
          "inline-flex cursor-pointer items-center gap-1 rounded px-1.5 py-1 transition-colors hover:bg-paper-dim",
          lang === "en" ? "text-ink" : "text-muted hover:text-ink"
        )}
      >
        <FlagUS /> EN
      </button>
      <span className="text-line" aria-hidden="true">
        |
      </span>
      <button
        type="button"
        onClick={() => setLang("es")}
        aria-pressed={lang === "es"}
        title="Cambiar a español"
        className={cn(
          "inline-flex cursor-pointer items-center gap-1 rounded px-1.5 py-1 transition-colors hover:bg-paper-dim",
          lang === "es" ? "text-ink" : "text-muted hover:text-ink"
        )}
      >
        <FlagES /> ES
      </button>
    </div>
  );
}
