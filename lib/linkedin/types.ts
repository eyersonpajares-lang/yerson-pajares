export type LinkedInPostData = {
  postUrl: string;
  embedUrl: string | null;
  date: string;
  title?: string;
};

export interface LinkedInProvider {
  getFeaturedPost(): LinkedInPostData | null;
}
