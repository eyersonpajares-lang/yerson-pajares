import type { Metadata } from "next";
import Link from "next/link";
import { ProjectForm } from "../ProjectForm";
import { createProjectAction } from "../actions";

export const metadata: Metadata = {
  title: "New project — Admin",
  robots: { index: false, follow: false },
};

export default function NewProjectPage() {
  return (
    <div>
      <Link
        href="/admin/projects"
        className="font-mono text-xs uppercase tracking-wide text-muted hover:text-ink"
      >
        ← Projects
      </Link>
      <h1 className="mt-4 font-display text-3xl tracking-tight">New project</h1>

      <div className="mt-10">
        <ProjectForm action={createProjectAction} />
      </div>
    </div>
  );
}
