import type { Metadata } from "next";
import Link from "next/link";
import { getAdminExperiences } from "@/lib/supabase/queries/experiences";
import { toggleExperiencePublishedAction } from "./actions";
import { DeleteExperienceButton } from "./DeleteExperienceButton";

export const metadata: Metadata = {
  title: "Experience — Admin",
  robots: { index: false, follow: false },
};

export default async function AdminExperiencePage() {
  const experiences = await getAdminExperiences();

  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <p className="font-mono text-xs uppercase tracking-wide text-accent">Experience</p>
          <h1 className="mt-2 font-display text-3xl tracking-tight">
            {experiences.length} entr{experiences.length === 1 ? "y" : "ies"}
          </h1>
        </div>
        <Link
          href="/admin/experience/new"
          className="border border-ink bg-ink px-4 py-2 text-sm font-medium text-paper transition-colors hover:bg-ink-soft"
        >
          + New experience
        </Link>
      </div>

      <div className="mt-10 divide-y divide-line border-t border-line">
        {experiences.map((exp) => (
          <div key={exp.slug} className="flex items-center justify-between gap-4 py-4">
            <div className="min-w-0">
              <div className="flex items-center gap-3">
                <p className="truncate font-display text-lg tracking-tight">
                  {exp.project?.es || exp.company}
                </p>
                {exp.featured && (
                  <span className="font-mono text-xs uppercase tracking-wide text-accent">
                    Featured
                  </span>
                )}
              </div>
              <p className="mt-1 font-mono text-xs uppercase tracking-wide text-muted">
                {exp.company} · order {exp.order}
              </p>
            </div>

            <div className="flex shrink-0 items-center gap-4">
              <form action={toggleExperiencePublishedAction.bind(null, exp.slug, !exp.published)}>
                <button
                  type="submit"
                  className={
                    exp.published
                      ? "font-mono text-xs uppercase tracking-wide text-ink"
                      : "font-mono text-xs uppercase tracking-wide text-muted"
                  }
                >
                  {exp.published ? "Published" : "Draft"}
                </button>
              </form>
              <Link
                href={`/admin/experience/${exp.slug}`}
                className="text-sm font-medium underline decoration-line underline-offset-4 hover:decoration-accent"
              >
                Edit
              </Link>
              <DeleteExperienceButton id={exp.slug} title={exp.project?.es || exp.company} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
