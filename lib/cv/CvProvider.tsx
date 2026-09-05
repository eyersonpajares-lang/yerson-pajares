"use client";

import { createContext, useContext, type ReactNode } from "react";
import type { CvUrls } from "@/lib/supabase/queries/cv";

const CvContext = createContext<CvUrls | null>(null);

/** Fetched server-side once per request in the (site) layout, then handed down here. */
export function CvProvider({ urls, children }: { urls: CvUrls; children: ReactNode }) {
  return <CvContext.Provider value={urls}>{children}</CvContext.Provider>;
}

export function useCv(): CvUrls {
  const ctx = useContext(CvContext);
  if (!ctx) throw new Error("useCv must be used within a CvProvider");
  return ctx;
}
