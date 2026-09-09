import type { Project, ProjectSection, ProjectCategory } from "@/types/content";
import { createClient } from "@/lib/supabase/server";
import { createPublicClient } from "@/lib/supabase/public";

type ProjectRow = {
  id: string;
  slug: string;
  type: Project["type"];
  categories: ProjectCategory[] | null;
  title: string;
  subtitle_es: string | null;
  subtitle_en: string | null;
  category_label: string | null;
  year: string | null;
  status_es: string | null;
  status_en: string | null;
  role_es: string | null;
  role_en: string | null;
  client: string | null;
  cover: string | null;
  gallery: string[] | null;
  website_url: string | null;
  short_description_es: string | null;
  short_description_en: string | null;
  sections: ProjectSection[] | null;
  tools: string[] | null;
  tags: string[] | null;
  featured: boolean;
  sort_order: number;
  has_detail: boolean;
  related_slugs: string[] | null;
  published: boolean;
};

function rowToProject(row: ProjectRow): Project {
  return {
    id: row.id,
    slug: row.slug,
    type: row.type,
    categories: row.categories ?? [],
    title: row.title,
    subtitle:
      row.subtitle_es || row.subtitle_en
        ? { es: row.subtitle_es ?? "", en: row.subtitle_en ?? "" }
        : undefined,
    category: row.category_label ?? "",
    year: row.year ?? "",
    status:
      row.status_es || row.status_en
        ? { es: row.status_es ?? "", en: row.status_en ?? "" }
        : undefined,
    role:
      row.role_es || row.role_en ? { es: row.role_es ?? "", en: row.role_en ?? "" } : undefined,
    client: row.client ?? undefined,
    cover: row.cover ?? undefined,
    websiteUrl: row.website_url ?? undefined,
    shortDescription: {
      es: row.short_description_es ?? "",
      en: row.short_description_en ?? "",
    },
    sections: row.sections ?? [],
    tools: row.tools ?? [],
    tags: row.tags ?? [],
    featured: row.featured,
    order: row.sort_order,
    hasDetail: row.has_detail,
    relatedSlugs: row.related_slugs ?? [],
    published: row.published,
  };
}

const SELECT_COLUMNS =
  "id, slug, type, categories, title, subtitle_es, subtitle_en, category_label, year, status_es, status_en, role_es, role_en, client, cover, gallery, website_url, short_description_es, short_description_en, sections, tools, tags, featured, sort_order, has_detail, related_slugs, published";

/**
 * Public-facing: only rows visitors are allowed to see (RLS-backed).
 * Uses the stateless public client (no cookies) so these are safe to
 * call from generateStaticParams/generateMetadata at build time too.
 */
export async function getPublicProjects(): Promise<Project[]> {
  const supabase = createPublicClient();
  const { data, error } = await supabase
    .from("projects")
    .select(SELECT_COLUMNS)
    .eq("published", true)
    .order("sort_order", { ascending: true });

  if (error) throw error;
  return (data as ProjectRow[]).map(rowToProject);
}

export async function getPublicProjectBySlug(slug: string): Promise<Project | null> {
  const supabase = createPublicClient();
  const { data, error } = await supabase
    .from("projects")
    .select(SELECT_COLUMNS)
    .eq("slug", slug)
    .eq("published", true)
    .eq("has_detail", true)
    .maybeSingle();

  if (error) throw error;
  return data ? rowToProject(data as ProjectRow) : null;
}

export function getAdjacentProjects(all: Project[], slug: string) {
  const list = all.filter((p) => p.hasDetail).sort((a, b) => a.order - b.order);
  const index = list.findIndex((p) => p.slug === slug);
  if (index === -1) return { prev: null, next: null };
  return {
    prev: index > 0 ? list[index - 1] : null,
    next: index < list.length - 1 ? list[index + 1] : null,
  };
}

/** Admin-facing: every row regardless of published state. Requires an authenticated session (RLS). */
export async function getAdminProjects(): Promise<Project[]> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("projects")
    .select(SELECT_COLUMNS)
    .order("type", { ascending: true })
    .order("sort_order", { ascending: true });

  if (error) throw error;
  return (data as ProjectRow[]).map(rowToProject);
}

export async function getAdminProjectById(id: string): Promise<Project | null> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("projects")
    .select(SELECT_COLUMNS)
    .eq("id", id)
    .maybeSingle();

  if (error) throw error;
  return data ? rowToProject(data as ProjectRow) : null;
}

export type ProjectInput = {
  slug: string;
  type: Project["type"];
  categories: ProjectCategory[];
  title: string;
  subtitleEs: string;
  subtitleEn: string;
  categoryLabel: string;
  year: string;
  statusEs: string;
  statusEn: string;
  roleEs: string;
  roleEn: string;
  client: string;
  websiteUrl: string;
  shortDescriptionEs: string;
  shortDescriptionEn: string;
  sections: ProjectSection[];
  tools: string[];
  tags: string[];
  featured: boolean;
  sortOrder: number;
  hasDetail: boolean;
  published: boolean;
};

function inputToRow(input: ProjectInput) {
  return {
    slug: input.slug,
    type: input.type,
    categories: input.categories,
    title: input.title,
    subtitle_es: input.subtitleEs || null,
    subtitle_en: input.subtitleEn || null,
    category_label: input.categoryLabel || null,
    year: input.year || null,
    status_es: input.statusEs || null,
    status_en: input.statusEn || null,
    role_es: input.roleEs || null,
    role_en: input.roleEn || null,
    client: input.client || null,
    website_url: input.websiteUrl || null,
    short_description_es: input.shortDescriptionEs || null,
    short_description_en: input.shortDescriptionEn || null,
    sections: input.sections,
    tools: input.tools,
    tags: input.tags,
    featured: input.featured,
    sort_order: input.sortOrder,
    has_detail: input.hasDetail,
    published: input.published,
  };
}

export async function createProject(input: ProjectInput) {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("projects")
    .insert(inputToRow(input))
    .select("id")
    .single();

  if (error) throw error;
  return data.id as string;
}

export async function updateProject(id: string, input: ProjectInput) {
  const supabase = await createClient();
  const { error } = await supabase
    .from("projects")
    .update({ ...inputToRow(input), updated_at: new Date().toISOString() })
    .eq("id", id);

  if (error) throw error;
}

export async function deleteProject(id: string) {
  const supabase = await createClient();
  const { error } = await supabase.from("projects").delete().eq("id", id);
  if (error) throw error;
}

export async function setProjectPublished(id: string, published: boolean) {
  const supabase = await createClient();
  const { error } = await supabase.from("projects").update({ published }).eq("id", id);
  if (error) throw error;
}
