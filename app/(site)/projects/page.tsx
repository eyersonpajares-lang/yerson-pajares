import type { Metadata } from "next";
import { getPublicProjects } from "@/lib/supabase/queries/projects";
import { ProjectsListClient } from "./ProjectsListClient";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected projects, systems and problems in Project Controls, Planning, Construction and AI.",
};

export default async function ProjectsPage() {
  const projects = await getPublicProjects();
  return <ProjectsListClient projects={projects} />;
}
