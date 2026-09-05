"use client";

import { uploadCvAction } from "./actions";

export function CvUploadForm({ lang, label, currentUrl }: { lang: "es" | "en"; label: string; currentUrl: string | null }) {
  return (
    <div className="border border-line p-5">
      <p className="font-mono text-xs uppercase tracking-wide text-accent">{label}</p>
      {currentUrl ? (
        <a
          href={currentUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-block text-sm underline decoration-line underline-offset-4 hover:decoration-accent"
        >
          View current file ↗
        </a>
      ) : (
        <p className="mt-2 text-sm text-muted">No file uploaded yet.</p>
      )}

      <form
        action={uploadCvAction.bind(null, lang)}
        className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center"
      >
        <input
          type="file"
          name="file"
          accept="application/pdf"
          required
          className="text-sm"
        />
        <button
          type="submit"
          className="border border-ink bg-ink px-4 py-2 text-sm font-medium text-paper transition-colors hover:bg-ink-soft"
        >
          Upload
        </button>
      </form>
    </div>
  );
}
