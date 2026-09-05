import type { Metadata } from "next";
import Link from "next/link";
import { getAdminProjects } from "@/lib/supabase/queries/projects";
import { togglePublishedAction } from "./actions";

export const metadata: Metadata = {
  title: "Projects — Admin",
  robots: { index: false, follow: false },
};

const TYPE_LABEL: Record<string, string> = {
  "selected-work": "Selected Work",
  lab: "Engineering Lab",
  venture: "Venture",
};

export default async function AdminProjectsPage() {
  const projects = await getAdminProjects();

  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <p className="font-mono text-xs uppercase tracking-wide text-accent">Projects</p>
          <h1 className="mt-2 font-display text-3xl tracking-tight">
            {projects.length} project{projects.length === 1 ? "" : "s"}
          </h1>
        </div>
        <Link
          href="/admin/projects/new"
          className="border border-ink bg-ink px-4 py-2 text-sm font-medium text-paper transition-colors hover:bg-ink-soft"
        >
          + New project
        </Link>
      </div>

      <div className="mt-10 divide-y divide-line border-t border-line">
        {projects.map((p) => (
          <div key={p.id} className="flex items-center justify-between gap-4 py-4">
            <div className="min-w-0">
              <div className="flex items-center gap-3">
                <p className="truncate font-display text-lg tracking-tight">{p.title}</p>
                {p.featured && (
                  <span className="font-mono text-xs uppercase tracking-wide text-accent">
                    Featured
                  </span>
                )}
              </div>
              <p className="mt-1 font-mono text-xs uppercase tracking-wide text-muted">
                {TYPE_LABEL[p.type]} · order {p.order} · /{p.slug}
              </p>
            </div>

            <div className="flex shrink-0 items-center gap-4">
              <form action={togglePublishedAction.bind(null, p.id, !p.published)}>
                <button
                  type="submit"
                  className={
                    p.published
                      ? "font-mono text-xs uppercase tracking-wide text-ink"
                      : "font-mono text-xs uppercase tracking-wide text-muted"
                  }
                >
                  {p.published ? "Published" : "Draft"}
                </button>
              </form>
              <Link
                href={`/admin/projects/${p.id}`}
                className="text-sm font-medium underline decoration-line underline-offset-4 hover:decoration-accent"
              >
                Edit
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
