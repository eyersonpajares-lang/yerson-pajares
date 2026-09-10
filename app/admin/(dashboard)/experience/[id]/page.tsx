import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAdminExperienceById } from "@/lib/supabase/queries/experiences";
import { ExperienceForm } from "../ExperienceForm";
import { updateExperienceAction } from "../actions";

export const metadata: Metadata = {
  title: "Edit experience — Admin",
  robots: { index: false, follow: false },
};

export default async function EditExperiencePage(
  props: PageProps<"/admin/experience/[id]">
) {
  const { id } = await props.params;
  const experience = await getAdminExperienceById(id);

  if (!experience) notFound();

  return (
    <div>
      <Link
        href="/admin/experience"
        className="font-mono text-xs uppercase tracking-wide text-muted hover:text-ink"
      >
        ← Experience
      </Link>
      <h1 className="mt-4 font-display text-3xl tracking-tight">{experience.company}</h1>

      <div className="mt-10">
        <ExperienceForm
          experience={experience}
          action={updateExperienceAction.bind(null, experience.slug)}
        />
      </div>
    </div>
  );
}
