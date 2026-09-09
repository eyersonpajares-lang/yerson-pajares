import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ideas } from "@/lib/data/ideas";
import { getPublicProjectBySlug } from "@/lib/supabase/queries/projects";
import { IdeaDetailClient } from "./IdeaDetailClient";

export function generateStaticParams() {
  return ideas.filter((idea) => idea.published).map((idea) => ({ slug: idea.slug }));
}

export async function generateMetadata(
  props: PageProps<"/ideas/[slug]">
): Promise<Metadata> {
  const { slug } = await props.params;
  const idea = ideas.find((i) => i.slug === slug);
  if (!idea) return {};

  return {
    title: idea.title.en,
    description: idea.excerpt.en,
    openGraph: {
      title: idea.title.en,
      description: idea.excerpt.en,
      type: "article",
      publishedTime: idea.date,
    },
  };
}

export default async function IdeaDetailPage(props: PageProps<"/ideas/[slug]">) {
  const { slug } = await props.params;
  const idea = ideas.find((i) => i.slug === slug && i.published);

  if (!idea) notFound();

  const relatedProject = idea.relatedProjectSlug
    ? await getPublicProjectBySlug(idea.relatedProjectSlug)
    : null;

  return <IdeaDetailClient idea={idea} relatedProject={relatedProject} />;
}
