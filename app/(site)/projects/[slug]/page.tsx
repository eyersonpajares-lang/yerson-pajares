import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPublicProjects, getPublicProjectBySlug, getAdjacentProjects } from "@/lib/supabase/queries/projects";
import { getRelatedContent } from "@/lib/data/related";
import { ProjectDetailClient } from "./ProjectDetailClient";

export async function generateStaticParams() {
  const projects = await getPublicProjects();
  return projects.filter((p) => p.hasDetail).map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(
  props: PageProps<"/projects/[slug]">
): Promise<Metadata> {
  const { slug } = await props.params;
  const project = await getPublicProjectBySlug(slug);
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
  const project = await getPublicProjectBySlug(slug);

  if (!project) notFound();

  const allProjects = await getPublicProjects();
  const { prev, next } = getAdjacentProjects(allProjects, slug);
  const related = getRelatedContent(project, allProjects);

  return <ProjectDetailClient project={project} prev={prev} next={next} related={related} />;
}
