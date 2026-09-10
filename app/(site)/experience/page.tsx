import type { Metadata } from "next";
import { getPublicExperiences } from "@/lib/supabase/queries/experiences";
import { ExperienceListClient } from "./ExperienceListClient";

export const metadata: Metadata = {
  title: "Experience",
  description: "What I've worked on — Project Controls, Planning and Construction.",
};

export default async function ExperiencePage() {
  const experiences = await getPublicExperiences();
  return <ExperienceListClient experiences={experiences} />;
}
