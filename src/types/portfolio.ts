export type ProjectCategory = 'web' | 'saas' | 'design' | 'mobile' | 'cloud' | 'ai';

export interface PortfolioProject {
  id: string | number;
  slug: string;
  title: string;
  category: ProjectCategory | string;
  client: string;
  description: string;
  overview?: string;
  challenge?: string;
  solution?: string;
  technologies: string[];
  image: string;
  gallery?: string[];
  duration: string;
  teamSize: number;
  status: string;
  rating: number;
  features: string[];
  results: Record<string, string>;
  liveUrl?: string;
  githubUrl?: string;
  caseStudy?: string;
  isFromErp?: boolean;
}

export const CATEGORY_LABELS: Record<string, string> = {
  web: 'Web Development',
  saas: 'SaaS & Business',
  design: 'UI/UX Design',
  mobile: 'Mobile Apps',
  cloud: 'Cloud Solutions',
  ai: 'AI & Machine Learning',
};

export function formatResultLabel(key: string): string {
  return key
    .replace(/([A-Z])/g, ' $1')
    .replace(/^./, (s) => s.toUpperCase())
    .trim();
}
