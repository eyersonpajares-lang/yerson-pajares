import { createClient } from "@/lib/supabase/server";
import { createPublicClient } from "@/lib/supabase/public";

export type CvUrls = { es: string | null; en: string | null };

/** Public read (RLS: select true) — safe at build time too. */
export async function getCvUrls(): Promise<CvUrls> {
  const supabase = createPublicClient();
  const { data, error } = await supabase.from("cv_files").select("lang, url");
  if (error) throw error;

  const result: CvUrls = { es: null, en: null };
  for (const row of data ?? []) {
    if (row.lang === "es") result.es = row.url;
    if (row.lang === "en") result.en = row.url;
  }
  return result;
}

/** Admin write — requires an authenticated session (RLS). */
export async function setCvUrl(lang: "es" | "en", url: string) {
  const supabase = await createClient();
  const { error: deleteError } = await supabase.from("cv_files").delete().eq("lang", lang);
  if (deleteError) throw deleteError;

  const { error: insertError } = await supabase.from("cv_files").insert({ lang, url });
  if (insertError) throw insertError;
}
