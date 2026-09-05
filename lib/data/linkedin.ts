import type { LinkedInPost } from "@/types/content";

/**
 * Manual-embed source (Phase 1). Paste the public LinkedIn post URL here —
 * this is the same field the future /admin/linkedin panel will write to.
 * Leave postUrl empty to show the fallback "view profile" card instead of an embed.
 */
export const linkedinPosts: LinkedInPost[] = [
  {
    postUrl: "",
    date: "2026-09-01",
    featured: true,
  },
];

export const featuredLinkedInPost =
  linkedinPosts.find((post) => post.featured) ?? linkedinPosts[0];
