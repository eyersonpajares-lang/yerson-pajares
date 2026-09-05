import type { ReactNode } from "react";
import { LanguageProvider } from "@/lib/i18n/LanguageProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <LanguageProvider>
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </LanguageProvider>
  );
}
