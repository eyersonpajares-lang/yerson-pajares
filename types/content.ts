export type Lang = "es" | "en";

export type Localized = {
  es: string;
  en: string;
};

export type LocalizedList = {
  es: string[];
  en: string[];
};

export type Experience = {
  slug: string;
  company: string;
  role: Localized;
  period: Localized;
  project?: Localized;
  client?: string;
  context?: Localized;
  focus?: LocalizedList;
  work: LocalizedList;
  tags: string[];
  highlight?: Localized;
  featured?: boolean;
};

/**
 * Which section of /projects a project belongs to: the editorial
 * "Selected Work" composition, a small "Engineering Lab" experiment,
 * or a "Ventures" business (Solarcytec, San Roque). This is presentation
 * placement, independent of the topical `categories` used for filtering.
 */
export type ProjectType = "selected-work" | "lab" | "venture";

export type ProjectCategory =
  | "project-controls"
  | "planning"
  | "ai-automation"
  | "construction"
  | "data"
  | "ventures";

export type ProjectSectionKey =
  | "overview"
  | "problem"
  | "role"
  | "process"
  | "tools"
  | "results"
  | "lessons"
  | "nextSteps";

/**
 * One optional block of a case study. `body` is free paragraph text
 * (split on "\n\n"); `list` is a flat tag/point list; `steps` is an
 * ordered flow (rendered with arrows, like the PCIA data pipeline).
 * A project only renders the sections it defines — this is the shape
 * the future CMS block editor will read/write.
 */
export type ProjectSection = {
  key: ProjectSectionKey;
  title: Localized;
  body?: Localized;
  list?: string[];
  steps?: LocalizedList;
};

export type Project = {
  id: string;
  slug: string;
  type: ProjectType;
  categories: ProjectCategory[];
  title: string;
  subtitle?: Localized;
  category: string;
  year: string;
  status?: Localized;
  role?: Localized;
  client?: string;
  cover?: string;
  shortDescription: Localized;
  sections: ProjectSection[];
  tools?: string[];
  tags: string[];
  featured?: boolean;
  order: number;
  hasDetail?: boolean;
  relatedSlugs?: string[];
  published: boolean;
};

export type NowItem = {
  text: Localized;
};

export type IdeaArticle = {
  slug: string;
  title: Localized;
  excerpt: Localized;
  date: string;
  category: string;
  readingTime: number;
  content: Localized;
  tags: string[];
  published: boolean;
};

export type WorkLogEntry = {
  date: string;
  text: Localized;
  tags?: string[];
  link?: string;
};

export type LinkedInPost = {
  postUrl: string;
  date: string;
  title?: Localized;
  featured: boolean;
};

export type EducationItem = {
  institution: string;
  degree: Localized;
  status?: Localized;
};

export type CapabilityGroup = {
  category: Localized;
  items: string[];
};
