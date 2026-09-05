"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { createClient } from "@/lib/supabase/server";
import { setCvUrl } from "@/lib/supabase/queries/cv";

export async function uploadCvAction(lang: "es" | "en", formData: FormData) {
  const file = formData.get("file");

  if (!(file instanceof File) || file.size === 0) {
    redirect(`/admin/cv?error=${encodeURIComponent("Selecciona un archivo PDF primero.")}`);
  }

  const supabase = await createClient();
  const path = `cv/${lang}.pdf`;

  const { error: uploadError } = await supabase.storage
    .from("media")
    .upload(path, file, { upsert: true, contentType: "application/pdf" });

  if (uploadError) {
    redirect(`/admin/cv?error=${encodeURIComponent(uploadError.message)}`);
  }

  const { data: publicUrlData } = supabase.storage.from("media").getPublicUrl(path);
  await setCvUrl(lang, publicUrlData.publicUrl);

  revalidatePath("/");
  redirect("/admin/cv");
}
