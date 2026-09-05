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

export type SelectedWorkCard = {
  slug: string;
  index: string;
  title: Localized;
  kicker: string;
  description: Localized;
  tags: string[];
  href?: string;
};

export type ProjectCaseStudy = {
  slug: string;
  title: string;
  subtitle: Localized;
  category: string;
  year: string;
  status: Localized;
  role: Localized;
  intro: Localized;
  problem: Localized;
  problemPoints: string[];
  idea: LocalizedList;
  tech: string[];
  exploring: string[];
  tags: string[];
  featured?: boolean;
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
