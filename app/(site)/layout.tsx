import type { ReactNode } from "react";
import { LanguageProvider } from "@/lib/i18n/LanguageProvider";
import { CvProvider } from "@/lib/cv/CvProvider";
import { getCvUrls } from "@/lib/supabase/queries/cv";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default async function SiteLayout({ children }: { children: ReactNode }) {
  const cvUrls = await getCvUrls();

  return (
    <LanguageProvider>
      <CvProvider urls={cvUrls}>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </CvProvider>
    </LanguageProvider>
  );
}
