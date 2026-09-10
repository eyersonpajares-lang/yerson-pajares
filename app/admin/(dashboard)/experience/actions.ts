"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import {
  createExperience,
  deleteExperience,
  setExperiencePublished,
  updateExperience,
  type ExperienceInput,
} from "@/lib/supabase/queries/experiences";

function splitList(value: FormDataEntryValue | null): string[] {
  return String(value ?? "")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
}

function readInput(formData: FormData): ExperienceInput {
  return {
    company: String(formData.get("company") ?? "").trim(),
    roleEs: String(formData.get("roleEs") ?? ""),
    roleEn: String(formData.get("roleEn") ?? ""),
    periodEs: String(formData.get("periodEs") ?? ""),
    periodEn: String(formData.get("periodEn") ?? ""),
    projectEs: String(formData.get("projectEs") ?? ""),
    projectEn: String(formData.get("projectEn") ?? ""),
    client: String(formData.get("client") ?? ""),
    contextEs: String(formData.get("contextEs") ?? ""),
    contextEn: String(formData.get("contextEn") ?? ""),
    highlightEs: String(formData.get("highlightEs") ?? ""),
    highlightEn: String(formData.get("highlightEn") ?? ""),
    work: {
      es: splitList(formData.get("workEs")),
      en: splitList(formData.get("workEn")),
    },
    tags: splitList(formData.get("tags")),
    featured: formData.get("featured") === "on",
    sortOrder: Number(formData.get("sortOrder") ?? 0),
    published: formData.get("published") === "on",
    keyTakeawayEs: String(formData.get("keyTakeawayEs") ?? ""),
    keyTakeawayEn: String(formData.get("keyTakeawayEn") ?? ""),
    usefulForEs: splitList(formData.get("usefulForEs")),
    usefulForEn: splitList(formData.get("usefulForEn")),
    relatedIdeaSlug: String(formData.get("relatedIdeaSlug") ?? "").trim(),
  };
}

function revalidatePublicRoutes() {
  revalidatePath("/");
  revalidatePath("/experience");
}

export async function createExperienceAction(formData: FormData) {
  await createExperience(readInput(formData));
  revalidatePublicRoutes();
  redirect("/admin/experience");
}

export async function updateExperienceAction(id: string, formData: FormData) {
  await updateExperience(id, readInput(formData));
  revalidatePublicRoutes();
  redirect("/admin/experience");
}

export async function deleteExperienceAction(id: string) {
  await deleteExperience(id);
  revalidatePublicRoutes();
  redirect("/admin/experience");
}

export async function toggleExperiencePublishedAction(id: string, nextPublished: boolean) {
  await setExperiencePublished(id, nextPublished);
  revalidatePublicRoutes();
}
