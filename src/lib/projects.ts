import type { PortfolioProject } from '../types/portfolio';
import { STATIC_PORTFOLIO_PROJECTS } from '../data/portfolioProjects';
import {
  fetchPortfolio,
  fetchPortfolioBySlug,
  type ApiPortfolioItem,
} from './publicApi';

export function slugifyTitle(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

function mapApiToDetail(item: ApiPortfolioItem): PortfolioProject {
  const images = [
    ...(item.screenshots?.map((s) => s.url) || []),
    ...(item.gallery?.map((g) => g.url) || []),
  ].filter(Boolean) as string[];

  const primaryImage =
    images[0] ||
    'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80';

  const catMap: Record<string, PortfolioProject['category']> = {
    Construction: 'saas',
    Healthcare: 'saas',
    EdTech: 'web',
    Fintech: 'saas',
    Education: 'web',
    Web: 'web',
    SaaS: 'saas',
    Design: 'design',
    Mobile: 'mobile',
  };

  return {
    id: item._id,
    slug: item.slug || slugifyTitle(item.title),
    title: item.title,
    category: catMap[item.category || ''] || 'web',
    client: item.client || 'Client',
    description: item.description || '',
    overview: item.caseStudy || item.description || '',
    caseStudy: item.caseStudy,
    technologies: item.technologies || [],
    image: primaryImage,
    gallery: images.length > 1 ? images : images,
    duration: '—',
    teamSize: 3,
    status: 'completed',
    rating: 5,
    features: item.technologies?.slice(0, 6) || [],
    results: {},
    liveUrl: item.websiteUrl,
    githubUrl: item.githubUrl,
    isFromErp: true,
  };
}

let erpCache: PortfolioProject[] | null = null;

export async function loadErpProjects(): Promise<PortfolioProject[]> {
  if (erpCache) return erpCache;
  try {
    const items = await fetchPortfolio();
    erpCache = items.map(mapApiToDetail);
  } catch {
    erpCache = [];
  }
  return erpCache;
}

export function getStaticProjects(): PortfolioProject[] {
  return STATIC_PORTFOLIO_PROJECTS;
}

export async function getAllProjects(): Promise<PortfolioProject[]> {
  const erp = await loadErpProjects();
  const staticSlugs = new Set(STATIC_PORTFOLIO_PROJECTS.map((p) => p.slug));
  const uniqueErp = erp.filter((p) => !staticSlugs.has(p.slug));
  return [...uniqueErp, ...STATIC_PORTFOLIO_PROJECTS];
}

export async function getProjectBySlug(slug: string): Promise<PortfolioProject | null> {
  const staticProject = STATIC_PORTFOLIO_PROJECTS.find((p) => p.slug === slug);
  if (staticProject) return staticProject;

  try {
    const item = await fetchPortfolioBySlug(slug);
    return mapApiToDetail(item);
  } catch {
    const erp = await loadErpProjects();
    return erp.find((p) => p.slug === slug) ?? null;
  }
}

export async function getRelatedProjects(
  current: PortfolioProject,
  limit = 3,
): Promise<PortfolioProject[]> {
  const all = await getAllProjects();
  return all
    .filter((p) => p.slug !== current.slug && p.category === current.category)
    .slice(0, limit);
}
