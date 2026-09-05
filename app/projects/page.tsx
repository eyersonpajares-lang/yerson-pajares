import type { Metadata } from "next";
import { ProjectsListClient } from "./ProjectsListClient";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected projects, systems and problems in Project Controls, Planning, Construction and AI.",
};

export default function ProjectsPage() {
  return <ProjectsListClient />;
}
