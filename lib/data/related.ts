import type { Project, ProjectCategory, IdeaArticle } from "@/types/content";
import { detailProjects } from "./projects";
import { ideas } from "./ideas";

export type RelatedItem =
  | { kind: "project"; project: Project }
  | { kind: "idea"; idea: IdeaArticle };

const CATEGORY_KEYWORDS: Record<ProjectCategory, string[]> = {
  "project-controls": ["project controls"],
  planning: ["planning", "planning & scheduling", "wbs"],
  "ai-automation": ["ai", "automation"],
  construction: ["construction", "infrastructure"],
  data: ["data", "power bi"],
  ventures: [],
};

function keywordsFor(project: Project): string[] {
  const fromTags = project.tags.map((t) => t.toLowerCase());
  const fromCategories = project.categories.flatMap((c) => CATEGORY_KEYWORDS[c]);
  return [...fromTags, ...fromCategories];
}

/**
 * Surfaces up to `limit` related pieces of content for a project — other
 * project detail pages first, then Ideas — matched by shared category
 * keywords / tags. This is the seam the future Digital Garden / Work Log
 * cross-links (section 20 of the brief) will plug into: swap this for a
 * CMS-authored `relatedSlugs` list without touching any component.
 */
export function getRelatedContent(project: Project, limit = 3): RelatedItem[] {
  const keywords = keywordsFor(project);
  const matches = (candidateKeywords: string[]) =>
    candidateKeywords.some((k) => keywords.includes(k.toLowerCase()));

  const relatedProjects = detailProjects()
    .filter((p) => p.slug !== project.slug)
    .filter((p) => matches(keywordsFor(p)))
    .map((p): RelatedItem => ({ kind: "project", project: p }));

  const relatedIdeas = ideas
    .filter((idea) => idea.published)
    .filter((idea) => matches(idea.tags))
    .map((idea): RelatedItem => ({ kind: "idea", idea }));

  return [...relatedProjects, ...relatedIdeas].slice(0, limit);
}
