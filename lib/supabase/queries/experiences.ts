import type { Experience } from "@/types/content";
import { createClient } from "@/lib/supabase/server";
import { createPublicClient } from "@/lib/supabase/public";

type ExperienceRow = {
  id: string;
  company: string;
  role_es: string | null;
  role_en: string | null;
  period_es: string | null;
  period_en: string | null;
  project_es: string | null;
  project_en: string | null;
  client: string | null;
  context_es: string | null;
  context_en: string | null;
  highlight_es: string | null;
  highlight_en: string | null;
  work_es: string[] | null;
  work_en: string[] | null;
  tags: string[] | null;
  featured: boolean;
  sort_order: number;
  published: boolean;
  key_takeaway_es: string | null;
  key_takeaway_en: string | null;
  useful_for_es: string[] | null;
  useful_for_en: string[] | null;
  related_idea_slug: string | null;
};

function rowToExperience(row: ExperienceRow): Experience {
  return {
    slug: row.id,
    company: row.company,
    role: { es: row.role_es ?? "", en: row.role_en ?? "" },
    period: { es: row.period_es ?? "", en: row.period_en ?? "" },
    project:
      row.project_es || row.project_en
        ? { es: row.project_es ?? "", en: row.project_en ?? "" }
        : undefined,
    client: row.client ?? undefined,
    context:
      row.context_es || row.context_en
        ? { es: row.context_es ?? "", en: row.context_en ?? "" }
        : undefined,
    work: { es: row.work_es ?? [], en: row.work_en ?? [] },
    tags: row.tags ?? [],
    highlight:
      row.highlight_es || row.highlight_en
        ? { es: row.highlight_es ?? "", en: row.highlight_en ?? "" }
        : undefined,
    featured: row.featured,
    keyTakeaway:
      row.key_takeaway_es || row.key_takeaway_en
        ? { es: row.key_takeaway_es ?? "", en: row.key_takeaway_en ?? "" }
        : undefined,
    usefulFor:
      (row.useful_for_es?.length ?? 0) > 0 || (row.useful_for_en?.length ?? 0) > 0
        ? { es: row.useful_for_es ?? [], en: row.useful_for_en ?? [] }
        : undefined,
    relatedIdeaSlug: row.related_idea_slug ?? undefined,
    order: row.sort_order,
    published: row.published,
  };
}

const SELECT_COLUMNS =
  "id, company, role_es, role_en, period_es, period_en, project_es, project_en, client, context_es, context_en, highlight_es, highlight_en, work_es, work_en, tags, featured, sort_order, published, key_takeaway_es, key_takeaway_en, useful_for_es, useful_for_en, related_idea_slug";

/** Public read (RLS: published = true) — safe at build time too. */
export async function getPublicExperiences(): Promise<Experience[]> {
  const supabase = createPublicClient();
  const { data, error } = await supabase
    .from("experiences")
    .select(SELECT_COLUMNS)
    .eq("published", true)
    .order("sort_order", { ascending: true });

  if (error) throw error;
  return (data as ExperienceRow[]).map(rowToExperience);
}

/** Admin read: every row regardless of published state. Requires an authenticated session (RLS). */
export async function getAdminExperiences(): Promise<Experience[]> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("experiences")
    .select(SELECT_COLUMNS)
    .order("sort_order", { ascending: true });

  if (error) throw error;
  return (data as ExperienceRow[]).map(rowToExperience);
}

export async function getAdminExperienceById(id: string): Promise<Experience | null> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("experiences")
    .select(SELECT_COLUMNS)
    .eq("id", id)
    .maybeSingle();

  if (error) throw error;
  return data ? rowToExperience(data as ExperienceRow) : null;
}

export type ExperienceInput = {
  company: string;
  roleEs: string;
  roleEn: string;
  periodEs: string;
  periodEn: string;
  projectEs: string;
  projectEn: string;
  client: string;
  contextEs: string;
  contextEn: string;
  highlightEs: string;
  highlightEn: string;
  work: { es: string[]; en: string[] };
  tags: string[];
  featured: boolean;
  sortOrder: number;
  published: boolean;
  keyTakeawayEs: string;
  keyTakeawayEn: string;
  usefulForEs: string[];
  usefulForEn: string[];
  relatedIdeaSlug: string;
};

function inputToRow(input: ExperienceInput) {
  return {
    company: input.company,
    role_es: input.roleEs || null,
    role_en: input.roleEn || null,
    period_es: input.periodEs || null,
    period_en: input.periodEn || null,
    project_es: input.projectEs || null,
    project_en: input.projectEn || null,
    client: input.client || null,
    context_es: input.contextEs || null,
    context_en: input.contextEn || null,
    highlight_es: input.highlightEs || null,
    highlight_en: input.highlightEn || null,
    work_es: input.work.es,
    work_en: input.work.en,
    tags: input.tags,
    featured: input.featured,
    sort_order: input.sortOrder,
    published: input.published,
    key_takeaway_es: input.keyTakeawayEs || null,
    key_takeaway_en: input.keyTakeawayEn || null,
    useful_for_es: input.usefulForEs,
    useful_for_en: input.usefulForEn,
    related_idea_slug: input.relatedIdeaSlug || null,
  };
}

export async function createExperience(input: ExperienceInput) {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("experiences")
    .insert(inputToRow(input))
    .select("id")
    .single();

  if (error) throw error;
  return data.id as string;
}

export async function updateExperience(id: string, input: ExperienceInput) {
  const supabase = await createClient();
  const { error } = await supabase
    .from("experiences")
    .update({ ...inputToRow(input), updated_at: new Date().toISOString() })
    .eq("id", id);

  if (error) throw error;
}

export async function deleteExperience(id: string) {
  const supabase = await createClient();
  const { error } = await supabase.from("experiences").delete().eq("id", id);
  if (error) throw error;
}

export async function setExperiencePublished(id: string, published: boolean) {
  const supabase = await createClient();
  const { error } = await supabase.from("experiences").update({ published }).eq("id", id);
  if (error) throw error;
}
