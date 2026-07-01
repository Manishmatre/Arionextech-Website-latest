/** In dev, always use same-origin + Vite proxy. In prod, set VITE_API_URL. */
const API_URL = import.meta.env.DEV ? '' : (import.meta.env.VITE_API_URL || '');

async function get<T>(path: string): Promise<T> {
  const res = await fetch(`${API_URL}${path}`);
  if (!res.ok) throw new Error(`API ${res.status}`);
  return res.json();
}

export async function fetchSiteData() {
  return get<{
    products: ApiProduct[];
    portfolio: ApiPortfolioItem[];
    testimonials: ApiTestimonial[];
    stats: { products: number; projects: number; clients: number; industries: number };
  }>('/api/public/site');
}

export async function fetchProducts() {
  return get<ApiProduct[]>('/api/public/products');
}

export async function fetchProductBySlug(slug: string) {
  return get<ApiProduct>(`/api/public/products/${slug}`);
}

export async function fetchPortfolio() {
  return get<ApiPortfolioItem[]>('/api/public/portfolio');
}

export async function fetchPortfolioBySlug(slug: string) {
  return get<ApiPortfolioItem>(`/api/public/portfolio/${slug}`);
}

export async function fetchTestimonials() {
  return get<ApiTestimonial[]>('/api/public/testimonials');
}

export async function submitContact(payload: {
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  message: string;
}) {
  const res = await fetch(`${API_URL}/api/public/contact`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error((err as { error?: string }).error || 'Failed to send');
  }
  return res.json();
}

export interface ApiProduct {
  _id: string;
  title: string;
  slug: string;
  shortDescription?: string;
  description?: string;
  category: string;
  productType?: string;
  status: string;
  version?: string;
  features?: string[];
  heroImage?: { url?: string; caption?: string };
  screenshots?: { url: string; caption?: string }[];
  gallery?: { url: string; caption?: string }[];
  pricing?: { monthly?: number; yearly?: number; isFree?: boolean; currency?: string };
  demoUrl?: string;
  documentationUrl?: string;
  downloadUrl?: string;
  isFeatured?: boolean;
}

export interface ApiPortfolioItem {
  _id: string;
  title: string;
  slug?: string;
  client?: string;
  category?: string;
  description?: string;
  technologies?: string[];
  websiteUrl?: string;
  githubUrl?: string;
  caseStudy?: string;
  isFeatured?: boolean;
  gallery?: { url: string; caption?: string }[];
  screenshots?: { url: string; caption?: string }[];
}

export interface ApiTestimonial {
  _id: string;
  clientName: string;
  company?: string;
  designation?: string;
  review: string;
  rating?: number;
}

export function mapPortfolioToProject(item: ApiPortfolioItem, index: number) {
  const img = item.screenshots?.[0]?.url || item.gallery?.[0]?.url
    || 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80';
  const catMap: Record<string, string> = {
    Construction: 'saas',
    Healthcare: 'saas',
    EdTech: 'web',
    Fintech: 'saas',
    Education: 'web',
  };
  return {
    id: `erp-${item._id}`,
    slug: item.slug || item.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, ''),
    title: item.title,
    category: catMap[item.category || ''] || 'saas',
    client: item.client || 'Client',
    description: item.description || '',
    technologies: item.technologies || [],
    image: img,
    duration: '—',
    teamSize: 3,
    status: 'completed',
    rating: 5,
    features: item.technologies?.slice(0, 4) || [],
    results: {},
    liveUrl: item.websiteUrl,
    isFromErp: true,
    erpIndex: index,
  };
}

export function mapProductToCard(p: ApiProduct) {
  return {
    id: p._id,
    name: p.title,
    slug: p.slug || p.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, ''),
    description: p.shortDescription || p.description || '',
    status: p.status,
    features: p.features || [],
    category: p.category,
    productType: p.productType,
    demoUrl: p.demoUrl,
  };
}
