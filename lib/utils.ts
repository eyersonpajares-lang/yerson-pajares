export function cn(...values: Array<string | false | null | undefined>) {
  return values.filter(Boolean).join(" ");
}

/** Normalizes free-typed admin input into a URL-safe slug (lowercase, hyphen-separated, no accents). */
export function slugify(value: string): string {
  const COMBINING_MARKS = new RegExp("[̀-ͯ]", "g");
  return value
    .normalize("NFD")
    .replace(COMBINING_MARKS, "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

const DOWNLOADABLE_EXTENSIONS = [".zip", ".pdf", ".dmg", ".exe", ".pkg"];

/** True for a project "website" link that's actually a file to download (a skill .zip, an installer), not a page to visit. */
export function isDownloadableUrl(url: string): boolean {
  const path = url.split(/[?#]/)[0].toLowerCase();
  return DOWNLOADABLE_EXTENSIONS.some((ext) => path.endsWith(ext));
}

export function formatDate(date: string, lang: "es" | "en") {
  const d = new Date(`${date}T00:00:00`);
  return new Intl.DateTimeFormat(lang === "es" ? "es-PE" : "en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(d);
}
