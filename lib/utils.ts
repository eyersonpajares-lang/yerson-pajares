export function cn(...values: Array<string | false | null | undefined>) {
  return values.filter(Boolean).join(" ");
}

export function formatDate(date: string, lang: "es" | "en") {
  const d = new Date(`${date}T00:00:00`);
  return new Intl.DateTimeFormat(lang === "es" ? "es-PE" : "en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(d);
}
