import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin",
  robots: { index: false, follow: false },
};

const roadmap = [
  "Experience",
  "Projects",
  "Ideas",
  "Work Log",
  "Ventures",
  "Now",
  "LinkedIn",
  "Education",
  "Media",
  "CV",
  "Settings",
];

export default function AdminDashboardPage() {
  return (
    <div className="max-w-2xl">
      <p className="font-mono text-xs uppercase tracking-wide text-accent">Dashboard</p>
      <h1 className="mt-3 font-display text-3xl tracking-tight">
        Sesión iniciada.
      </h1>
      <p className="mt-4 text-sm leading-relaxed text-ink-soft">
        La autenticación y la conexión a Supabase ya están funcionando. El resto
        del panel (editar proyectos, ideas, work log, etc. sin tocar código) se
        construye en los próximos pasos.
      </p>

      <div className="mt-10 border-t border-line pt-6">
        <p className="font-mono text-xs uppercase tracking-wide text-muted">
          Próximamente
        </p>
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
