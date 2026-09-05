import { linkedinPosts } from "@/lib/data/linkedin";
import type { LinkedInProvider, LinkedInPostData } from "./types";

/**
 * Public LinkedIn post URLs look like:
 * https://www.linkedin.com/posts/username_some-slug-activity-7123456789012345678-abcd
 * The numeric id after "activity-" is the same id LinkedIn's own
 * "Embed this post" feature uses to build its iframe src.
 */
function extractEmbedUrl(postUrl: string): string | null {
  if (!postUrl) return null;
  const match = postUrl.match(/activity[-:](\d{6,})/);
  if (!match) return null;
  return `https://www.linkedin.com/embed/feed/update/urn:li:activity:${match[1]}`;
}

/**
 * Phase 1 source: manually pasted post URLs (see /admin/linkedin in the future CMS).
 * Implements the LinkedInProvider interface so a Phase 2 official-API provider
 * can be swapped in later without touching any UI component.
 */
export const manualLinkedInProvider: LinkedInProvider = {
  getFeaturedPost(): LinkedInPostData | null {
    const post = linkedinPosts.find((p) => p.featured) ?? linkedinPosts[0];
    if (!post || !post.postUrl) return null;

    return {
      postUrl: post.postUrl,
      embedUrl: extractEmbedUrl(post.postUrl),
      date: post.date,
      title: post.title?.es,
    };
  },
};
