"use client";

import type { Experience } from "@/types/content";

export function ExperienceForm({
  experience,
  action,
}: {
  experience?: Experience;
  action: (formData: FormData) => void;
}) {
  return (
    <form action={action} className="flex max-w-3xl flex-col gap-10">
      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Company" name="company" defaultValue={experience?.company} required />
        <Field
          label="Client"
          name="client"
          defaultValue={experience?.client}
        />
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Role (ES)" name="roleEs" defaultValue={experience?.role.es} />
        <Field label="Role (EN)" name="roleEn" defaultValue={experience?.role.en} />
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Period (ES)" name="periodEs" defaultValue={experience?.period.es} />
        <Field label="Period (EN)" name="periodEn" defaultValue={experience?.period.en} />
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Project (ES)" name="projectEs" defaultValue={experience?.project?.es} />
        <Field label="Project (EN)" name="projectEn" defaultValue={experience?.project?.en} />
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <TextArea label="Context (ES)" name="contextEs" defaultValue={experience?.context?.es} />
        <TextArea label="Context (EN)" name="contextEn" defaultValue={experience?.context?.en} />
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <Field
          label="Highlight (ES)"
          name="highlightEs"
          defaultValue={experience?.highlight?.es}
        />
        <Field
          label="Highlight (EN)"
          name="highlightEn"
          defaultValue={experience?.highlight?.en}
        />
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <TextArea
          label="What I worked with (ES, comma-separated)"
          name="workEs"
          defaultValue={experience?.work.es.join(", ")}
        />
        <TextArea
          label="What I worked with (EN, comma-separated)"
          name="workEn"
          defaultValue={experience?.work.en.join(", ")}
        />
      </div>

      <Field
        label="Tags (comma-separated)"
        name="tags"
        defaultValue={experience?.tags.join(", ")}
      />

      <div className="grid gap-6 sm:grid-cols-2">
        <Field
          label="Key takeaway (ES) — optional"
          name="keyTakeawayEs"
          defaultValue={experience?.keyTakeaway?.es}
        />
        <Field
          label="Key takeaway (EN) — optional"
          name="keyTakeawayEn"
          defaultValue={experience?.keyTakeaway?.en}
        />
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <TextArea
          label="Useful for similar projects (ES, comma-separated) — optional"
          name="usefulForEs"
          defaultValue={experience?.usefulFor?.es.join(", ")}
        />
        <TextArea
          label="Useful for similar projects (EN, comma-separated) — optional"
          name="usefulForEn"
          defaultValue={experience?.usefulFor?.en.join(", ")}
        />
      </div>

      <Field
        label="Related idea slug — optional (must match an /ideas slug)"
        name="relatedIdeaSlug"
        defaultValue={experience?.relatedIdeaSlug}
      />

      <div className="grid gap-6 sm:grid-cols-3">
        <Field
          label="Sort order"
          name="sortOrder"
          type="number"
          defaultValue={String(experience?.order ?? 0)}
        />
        <label className="flex items-center gap-2 text-sm text-ink-soft">
          <input type="checkbox" name="featured" defaultChecked={experience?.featured} />
          Featured on Home
        </label>
        <label className="flex items-center gap-2 text-sm font-medium">
          <input type="checkbox" name="published" defaultChecked={experience?.published} />
          Published
        </label>
      </div>

      <div className="border-t border-line pt-8">
        <button
          type="submit"
          className="border border-ink bg-ink px-5 py-3 text-sm font-medium tracking-wide text-paper transition-colors hover:bg-ink-soft"
        >
          Save
        </button>
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  defaultValue,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  defaultValue?: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={name} className="font-mono text-xs uppercase tracking-wide text-muted">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        defaultValue={defaultValue}
        required={required}
        className="border-b border-line bg-transparent py-2 text-base text-ink outline-none focus:border-ink"
      />
    </div>
  );
}

function TextArea({
  label,
  name,
  defaultValue,
}: {
  label: string;
  name: string;
  defaultValue?: string;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={name} className="font-mono text-xs uppercase tracking-wide text-muted">
        {label}
      </label>
      <textarea
        id={name}
        name={name}
        defaultValue={defaultValue}
        rows={3}
        className="border-b border-line bg-transparent py-2 text-base text-ink outline-none focus:border-ink"
      />
    </div>
  );
}
