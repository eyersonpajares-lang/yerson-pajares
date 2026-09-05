import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { detailProjects, getProject } from "@/lib/data/projects";
import { ProjectDetailClient } from "./ProjectDetailClient";

export function generateStaticParams() {
  return detailProjects().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(
  props: PageProps<"/projects/[slug]">
): Promise<Metadata> {
  const { slug } = await props.params;
  const project = getProject(slug);
  if (!project) return {};

  return {
    title: project.title,
    description: project.shortDescription.en,
  };
}

export default async function ProjectDetailPage(
  props: PageProps<"/projects/[slug]">
) {
  const { slug } = await props.params;
  const project = getProject(slug);

  if (!project) notFound();

  return <ProjectDetailClient project={project} />;
}
