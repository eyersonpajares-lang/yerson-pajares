import type { Metadata } from "next";
import { getPublicProjects } from "@/lib/supabase/queries/projects";
import { ProjectsListClient } from "./ProjectsListClient";

export const metadata: Metadata = {
  title: "Personal Projects",
  description:
    "PROJEXA, Solarcytec and San Roque — things I've built and run outside my day-to-day work.",
};

export default async function ProjectsPage() {
  const projects = await getPublicProjects();
  return <ProjectsListClient projects={projects} />;
}
