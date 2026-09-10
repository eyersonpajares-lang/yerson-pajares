import type { Metadata } from "next";
import Link from "next/link";
import { ExperienceForm } from "../ExperienceForm";
import { createExperienceAction } from "../actions";

export const metadata: Metadata = {
  title: "New experience — Admin",
  robots: { index: false, follow: false },
};

export default function NewExperiencePage() {
  return (
    <div>
      <Link
        href="/admin/experience"
        className="font-mono text-xs uppercase tracking-wide text-muted hover:text-ink"
      >
        ← Experience
      </Link>
      <h1 className="mt-4 font-display text-3xl tracking-tight">New experience</h1>

      <div className="mt-10">
        <ExperienceForm action={createExperienceAction} />
      </div>
    </div>
  );
}
