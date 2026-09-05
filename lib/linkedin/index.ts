import { manualLinkedInProvider } from "./manual-provider";

/**
 * Single swap point for Phase 2: once the LinkedIn Posts API + OAuth
 * (r_member_social) is authorized, point this at an ApiLinkedInProvider
 * that implements the same LinkedInProvider interface. No UI changes needed.
 */
export const linkedInProvider = manualLinkedInProvider;

export type { LinkedInProvider, LinkedInPostData } from "./types";
