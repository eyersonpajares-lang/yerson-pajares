"use client";

import { useState } from "react";
import type { Project, ProjectCategory, ProjectSection, ProjectSectionKey, ProjectType } from "@/types/content";

const TYPE_OPTIONS: { value: ProjectType; label: string }[] = [
  { value: "selected-work", label: "Selected Work" },
  { value: "lab", label: "Engineering Lab" },
  { value: "venture", label: "Venture" },
];

const CATEGORY_OPTIONS: { value: ProjectCategory; label: string }[] = [
  { value: "project-controls", label: "Project Controls" },
  { value: "planning", label: "Planning" },
  { value: "ai-automation", label: "AI & Automation" },
  { value: "construction", label: "Construction" },
  { value: "data", label: "Data" },
  { value: "ventures", label: "Ventures" },
];

const SECTION_KEY_OPTIONS: { value: ProjectSectionKey; label: string }[] = [
  { value: "overview", label: "Overview" },
  { value: "problem", label: "Problem" },
  { value: "role", label: "Role / What I did" },
  { value: "process", label: "Process (steps)" },
  { value: "tools", label: "Tools" },
  { value: "results", label: "Results" },
  { value: "lessons", label: "Lessons learned" },
  { value: "nextSteps", label: "Next steps" },
];

function emptySection(): ProjectSection {
  return { key: "overview", title: { es: "", en: "" } };
}

export function ProjectForm({
  project,
  action,
}: {
  project?: Project;
  action: (formData: FormData) => void;
}) {
  const [categories, setCategories] = useState<ProjectCategory[]>(project?.categories ?? []);
  const [sections, setSections] = useState<ProjectSection[]>(project?.sections ?? []);

  function toggleCategory(cat: ProjectCategory) {
    setCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );
  }

  function updateSection(index: number, patch: Partial<ProjectSection>) {
    setSections((prev) => prev.map((s, i) => (i === index ? { ...s, ...patch } : s)));
  }

  function updateSectionField(
    index: number,
    field: "titleEs" | "titleEn" | "bodyEs" | "bodyEn" | "stepsEs" | "stepsEn" | "list",
    value: string
  ) {
    setSections((prev) =>
      prev.map((s, i) => {
        if (i !== index) return s;
        switch (field) {
          case "titleEs":
            return { ...s, title: { es: value, en: s.title.en } };
          case "titleEn":
            return { ...s, title: { es: s.title.es, en: value } };
          case "bodyEs":
            return { ...s, body: { es: value, en: s.body?.en ?? "" } };
          case "bodyEn":
            return { ...s, body: { es: s.body?.es ?? "", en: value } };
          case "stepsEs":
            return {
              ...s,
              steps: {
                es: value.split(",").map((v) => v.trim()).filter(Boolean),
                en: s.steps?.en ?? [],
              },
            };
          case "stepsEn":
            return {
              ...s,
              steps: {
                es: s.steps?.es ?? [],
                en: value.split(",").map((v) => v.trim()).filter(Boolean),
              },
            };
          case "list":
            return { ...s, list: value.split(",").map((v) => v.trim()).filter(Boolean) };
          default:
            return s;
        }
      })
    );
  }

  return (
    <form action={action} className="flex max-w-3xl flex-col gap-10">
      <input type="hidden" name="categoriesJson" value={JSON.stringify(categories)} readOnly />
      <input type="hidden" name="sectionsJson" value={JSON.stringify(sections)} readOnly />

      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Title" name="title" defaultValue={project?.title} required />
        <Field label="Slug" name="slug" defaultValue={project?.slug} required />
      </div>

      <div className="grid gap-6 sm:grid-cols-3">
        <div className="flex flex-col gap-1.5">
          <Label>Type</Label>
          <select
            name="type"
            defaultValue={project?.type ?? "selected-work"}
            className="border-b border-line bg-transparent py-2 text-base outline-none focus:border-ink"
          >
            {TYPE_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>
        <Field label="Category label" name="categoryLabel" defaultValue={project?.category} />
        <Field label="Year" name="year" defaultValue={project?.year} />
      </div>

      <div>
        <Label>Categories (filters)</Label>
        <div className="mt-2 flex flex-wrap gap-x-6 gap-y-2">
          {CATEGORY_OPTIONS.map((opt) => (
            <label key={opt.value} className="flex items-center gap-2 text-sm text-ink-soft">
              <input
                type="checkbox"
                checked={categories.includes(opt.value)}
                onChange={() => toggleCategory(opt.value)}
              />
              {opt.label}
            </label>
          ))}
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Subtitle (ES)" name="subtitleEs" defaultValue={project?.subtitle?.es} />
        <Field label="Subtitle (EN)" name="subtitleEn" defaultValue={project?.subtitle?.en} />
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Status (ES)" name="statusEs" defaultValue={project?.status?.es} />
        <Field label="Status (EN)" name="statusEn" defaultValue={project?.status?.en} />
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Role (ES)" name="roleEs" defaultValue={project?.role?.es} />
        <Field label="Role (EN)" name="roleEn" defaultValue={project?.role?.en} />
      </div>

      <Field label="Client" name="client" defaultValue={project?.client} />

      <div className="grid gap-6 sm:grid-cols-2">
        <TextArea
          label="Short description (ES)"
          name="shortDescriptionEs"
          defaultValue={project?.shortDescription.es}
        />
        <TextArea
          label="Short description (EN)"
          name="shortDescriptionEn"
          defaultValue={project?.shortDescription.en}
        />
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <Field
          label="Tags (comma-separated)"
          name="tags"
          defaultValue={project?.tags.join(", ")}
        />
        <Field
          label="Tools (comma-separated)"
          name="tools"
          defaultValue={project?.tools?.join(", ")}
        />
      </div>

      <div className="grid gap-6 sm:grid-cols-3">
        <Field
          label="Sort order"
          name="sortOrder"
          type="number"
          defaultValue={String(project?.order ?? 0)}
        />
        <label className="flex items-center gap-2 text-sm text-ink-soft">
          <input type="checkbox" name="featured" defaultChecked={project?.featured} />
          Featured
        </label>
        <label className="flex items-center gap-2 text-sm text-ink-soft">
          <input type="checkbox" name="hasDetail" defaultChecked={project?.hasDetail} />
          Has its own detail page
        </label>
      </div>

      <label className="flex items-center gap-2 text-sm font-medium">
        <input type="checkbox" name="published" defaultChecked={project?.published} />
        Published (visible on the public site)
      </label>

      <div className="border-t border-line pt-8">
        <div className="flex items-center justify-between">
          <Label>Case study sections</Label>
          <button
            type="button"
            onClick={() => setSections((prev) => [...prev, emptySection()])}
            className="text-sm font-medium underline decoration-line underline-offset-4 hover:decoration-accent"
          >
            + Add section
          </button>
        </div>

        <div className="mt-4 flex flex-col gap-6">
          {sections.map((section, i) => (
            <div key={i} className="border border-line p-4">
              <div className="flex items-center justify-between gap-4">
                <select
                  value={section.key}
                  onChange={(e) =>
                    updateSection(i, { key: e.target.value as ProjectSectionKey })
                  }
                  className="border-b border-line bg-transparent py-1 text-sm outline-none focus:border-ink"
                >
                  {SECTION_KEY_OPTIONS.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
                <button
                  type="button"
                  onClick={() => setSections((prev) => prev.filter((_, idx) => idx !== i))}
                  className="text-xs uppercase tracking-wide text-muted hover:text-accent"
                >
                  Remove
                </button>
              </div>

              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <LocalInput
                  label="Section title (ES)"
                  value={section.title.es}
                  onChange={(v) => updateSectionField(i, "titleEs", v)}
                />
                <LocalInput
                  label="Section title (EN)"
                  value={section.title.en}
                  onChange={(v) => updateSectionField(i, "titleEn", v)}
                />
              </div>

              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <LocalTextArea
                  label="Body (ES)"
                  value={section.body?.es ?? ""}
                  onChange={(v) => updateSectionField(i, "bodyEs", v)}
                />
                <LocalTextArea
                  label="Body (EN)"
                  value={section.body?.en ?? ""}
                  onChange={(v) => updateSectionField(i, "bodyEn", v)}
                />
              </div>

              <div className="mt-4">
                <LocalInput
                  label="List (comma-separated — problem points, tools, etc.)"
                  value={section.list?.join(", ") ?? ""}
                  onChange={(v) => updateSectionField(i, "list", v)}
                />
              </div>

              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <LocalInput
                  label="Steps (ES, comma-separated)"
                  value={section.steps?.es.join(", ") ?? ""}
                  onChange={(v) => updateSectionField(i, "stepsEs", v)}
                />
                <LocalInput
                  label="Steps (EN, comma-separated)"
                  value={section.steps?.en.join(", ") ?? ""}
                  onChange={(v) => updateSectionField(i, "stepsEn", v)}
                />
              </div>
            </div>
          ))}
          {sections.length === 0 && (
            <p className="text-sm text-muted">
              No sections yet — this project will show as text-only in Selected Work, with no
              detail page content.
            </p>
          )}
        </div>
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

function Label({ children }: { children: string }) {
  return <p className="font-mono text-xs uppercase tracking-wide text-muted">{children}</p>;
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

function LocalInput({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <span className="font-mono text-xs uppercase tracking-wide text-muted">{label}</span>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="border-b border-line bg-transparent py-1.5 text-sm text-ink outline-none focus:border-ink"
      />
    </div>
  );
}

function LocalTextArea({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <span className="font-mono text-xs uppercase tracking-wide text-muted">{label}</span>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        rows={2}
        className="border-b border-line bg-transparent py-1.5 text-sm text-ink outline-none focus:border-ink"
      />
    </div>
  );
}
