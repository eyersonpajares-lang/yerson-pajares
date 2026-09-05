import type { MetadataRoute } from "next";
import { settings } from "@/lib/data/settings";
import { detailProjects } from "@/lib/data/projects";
import { ideas } from "@/lib/data/ideas";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = settings.site.url;

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${base}/`, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/projects`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/ideas`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/work-log`, changeFrequency: "daily", priority: 0.6 },
  ];

  const projectRoutes: MetadataRoute.Sitemap = detailProjects().map((p) => ({
    url: `${base}/projects/${p.slug}`,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const ideaRoutes: MetadataRoute.Sitemap = ideas
    .filter((i) => i.published)
    .map((i) => ({
      url: `${base}/ideas/${i.slug}`,
      changeFrequency: "monthly",
      priority: 0.6,
      lastModified: i.date,
    }));

  return [...staticRoutes, ...projectRoutes, ...ideaRoutes];
}
