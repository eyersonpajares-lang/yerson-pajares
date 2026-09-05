import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { projectCaseStudies } from "@/lib/data/projects";
import { ProjectDetailClient } from "./ProjectDetailClient";

export function generateStaticParams() {
  return projectCaseStudies
    .filter((p) => p.published)
    .map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(
  props: PageProps<"/projects/[slug]">
): Promise<Metadata> {
  const { slug } = await props.params;
  const project = projectCaseStudies.find((p) => p.slug === slug);
  if (!project) return {};

  return {
    title: project.title,
    description: project.intro.en,
  };
}

export default async function ProjectDetailPage(
  props: PageProps<"/projects/[slug]">
) {
  const { slug } = await props.params;
  const project = projectCaseStudies.find(
    (p) => p.slug === slug && p.published
  );

  if (!project) notFound();

  return <ProjectDetailClient project={project} />;
}
