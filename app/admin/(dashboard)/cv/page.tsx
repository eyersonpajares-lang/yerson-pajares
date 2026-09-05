import type { Metadata } from "next";
import { getCvUrls } from "@/lib/supabase/queries/cv";
import { CvUploadForm } from "./CvUploadForm";

export const metadata: Metadata = {
  title: "CV — Admin",
  robots: { index: false, follow: false },
};

export default async function AdminCvPage(props: PageProps<"/admin/cv">) {
  const { error } = await props.searchParams;
  const errorMessage = typeof error === "string" ? error : undefined;
  const cvUrls = await getCvUrls();

  return (
    <div className="max-w-2xl">
      <p className="font-mono text-xs uppercase tracking-wide text-accent">CV</p>
      <h1 className="mt-2 font-display text-3xl tracking-tight">Download CV files</h1>
      <p className="mt-3 text-sm text-ink-soft">
        Sube un PDF para cada idioma. En cuanto lo subas, todos los botones
        &quot;Descargar CV&quot; del sitio público apuntan al archivo nuevo — sin tocar código.
      </p>

      {errorMessage && (
        <p className="mt-4 text-sm text-accent" role="alert">
          {errorMessage}
        </p>
      )}

      <div className="mt-8 flex flex-col gap-6">
        <CvUploadForm lang="es" label="CV Español" currentUrl={cvUrls.es} />
        <CvUploadForm lang="en" label="CV English" currentUrl={cvUrls.en} />
      </div>
    </div>
  );
}
