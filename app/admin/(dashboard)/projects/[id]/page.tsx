import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAdminProjectById } from "@/lib/supabase/queries/projects";
import { ProjectForm } from "../ProjectForm";
import { updateProjectAction } from "../actions";

export const metadata: Metadata = {
  title: "Edit project — Admin",
  robots: { index: false, follow: false },
};

export default async function EditProjectPage(
  props: PageProps<"/admin/projects/[id]">
) {
  const { id } = await props.params;
  const project = await getAdminProjectById(id);

  if (!project) notFound();

  return (
    <div>
      <Link
        href="/admin/projects"
        className="font-mono text-xs uppercase tracking-wide text-muted hover:text-ink"
      >
        ← Projects
      </Link>
      <h1 className="mt-4 font-display text-3xl tracking-tight">{project.title}</h1>

      <div className="mt-10">
        <ProjectForm project={project} action={updateProjectAction.bind(null, project.id)} />
      </div>
    </div>
  );
}
