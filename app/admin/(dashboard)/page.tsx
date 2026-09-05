import type { Metadata } from "next";
import Link from "next/link";
import { getAdminProjects } from "@/lib/supabase/queries/projects";

export const metadata: Metadata = {
  title: "Admin",
  robots: { index: false, follow: false },
};

const roadmap = [
  "Experience",
  "Ideas",
  "Work Log",
  "Now",
  "LinkedIn",
  "Education",
  "Media",
  "Settings",
];

export default async function AdminDashboardPage() {
  const projects = await getAdminProjects();
  const published = projects.filter((p) => p.published).length;

  return (
    <div className="max-w-2xl">
      <p className="font-mono text-xs uppercase tracking-wide text-accent">Dashboard</p>
      <h1 className="mt-3 font-display text-3xl tracking-tight">Sesión iniciada.</h1>
      <p className="mt-4 text-sm leading-relaxed text-ink-soft">
        Projects ya se administra completamente desde aquí — crear, editar, publicar y
        despublicar sin tocar código. El resto del panel se construye en los próximos pasos.
      </p>

      <div className="mt-10 border-t border-line pt-6">
        <p className="font-mono text-xs uppercase tracking-wide text-muted">Projects</p>
        <p className="mt-2 text-sm text-ink-soft">
          {published} publicados de {projects.length} totales.
        </p>
        <Link
          href="/admin/projects"
          className="mt-3 inline-block text-sm font-medium underline decoration-line underline-offset-4 hover:decoration-accent"
        >
          Administrar projects →
        </Link>
      </div>

      <div className="mt-10 border-t border-line pt-6">
        <p className="font-mono text-xs uppercase tracking-wide text-muted">CV</p>
        <Link
          href="/admin/cv"
          className="mt-3 inline-block text-sm font-medium underline decoration-line underline-offset-4 hover:decoration-accent"
        >
          Subir / reemplazar CV →
        </Link>
      </div>

      <div className="mt-10 border-t border-line pt-6">
        <p className="font-mono text-xs uppercase tracking-wide text-muted">Próximamente</p>
        <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2">
          {roadmap.map((item) => (
            <span key={item} className="text-sm text-muted">
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
