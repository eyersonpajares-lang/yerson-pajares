"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { slugify } from "@/lib/utils";
import type { ProjectCategory, ProjectSection, ProjectType } from "@/types/content";
import {
  createProject,
  deleteProject,
  getAdminProjectById,
  setProjectPublished,
  updateProject,
  type ProjectInput,
} from "@/lib/supabase/queries/projects";

function readInput(formData: FormData): ProjectInput {
  const categories = JSON.parse(
    String(formData.get("categoriesJson") ?? "[]")
  ) as ProjectCategory[];
  const sections = JSON.parse(
    String(formData.get("sectionsJson") ?? "[]")
  ) as ProjectSection[];

  return {
    slug: slugify(String(formData.get("slug") ?? "")),
    type: String(formData.get("type") ?? "selected-work") as ProjectType,
    categories,
    title: String(formData.get("title") ?? "").trim(),
    subtitleEs: String(formData.get("subtitleEs") ?? ""),
    subtitleEn: String(formData.get("subtitleEn") ?? ""),
    categoryLabel: String(formData.get("categoryLabel") ?? ""),
    year: String(formData.get("year") ?? ""),
    statusEs: String(formData.get("statusEs") ?? ""),
    statusEn: String(formData.get("statusEn") ?? ""),
    roleEs: String(formData.get("roleEs") ?? ""),
    roleEn: String(formData.get("roleEn") ?? ""),
    client: String(formData.get("client") ?? ""),
    shortDescriptionEs: String(formData.get("shortDescriptionEs") ?? ""),
    shortDescriptionEn: String(formData.get("shortDescriptionEn") ?? ""),
    sections,
    tools: splitList(formData.get("tools")),
    tags: splitList(formData.get("tags")),
    featured: formData.get("featured") === "on",
    sortOrder: Number(formData.get("sortOrder") ?? 0),
    hasDetail: formData.get("hasDetail") === "on",
    published: formData.get("published") === "on",
  };
}

function splitList(value: FormDataEntryValue | null): string[] {
  return String(value ?? "")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
}

function revalidatePublicRoutes(slug?: string) {
  revalidatePath("/");
  revalidatePath("/projects");
  if (slug) revalidatePath(`/projects/${slug}`);
}

export async function createProjectAction(formData: FormData) {
  const input = readInput(formData);
  await createProject(input);
  revalidatePublicRoutes(input.slug);
  redirect("/admin/projects");
}

export async function updateProjectAction(id: string, formData: FormData) {
  const input = readInput(formData);
  const previous = await getAdminProjectById(id);
  await updateProject(id, input);
  revalidatePublicRoutes(input.slug);
  if (previous && previous.slug !== input.slug) revalidatePublicRoutes(previous.slug);
  redirect("/admin/projects");
}

export async function deleteProjectAction(id: string) {
  const project = await getAdminProjectById(id);
  await deleteProject(id);
  revalidatePublicRoutes(project?.slug);
  redirect("/admin/projects");
}

export async function togglePublishedAction(id: string, nextPublished: boolean) {
  const project = await getAdminProjectById(id);
  await setProjectPublished(id, nextPublished);
  revalidatePublicRoutes(project?.slug);
}
