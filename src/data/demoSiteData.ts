import type { ApiTestimonial } from '../lib/publicApi';
import { STATIC_PRODUCTS } from './staticProducts';
import type { ProductDetail } from '../types/product';

export const DEMO_STATS = {
  products: STATIC_PRODUCTS.length,
  projects: 50,
  clients: 40,
  industries: 6,
};

export const DEMO_TESTIMONIALS: ApiTestimonial[] = [
  {
    _id: 'demo-1',
    clientName: 'Rajesh Kumar',
    company: 'TechVision Solutions',
    designation: 'CEO',
    review:
      'ArionexTech delivered an exceptional platform that exceeded our expectations. Their attention to detail and technical expertise helped us grow revenue significantly within the first quarter.',
    rating: 5,
  },
  {
    _id: 'demo-2',
    clientName: 'Priya Sharma',
    company: 'Candela Public School',
    designation: 'Director',
    review:
      'Professional team with excellent technical skills. They understood our requirements for the school portal and delivered beyond expectations.',
    rating: 5,
  },
  {
    _id: 'demo-3',
    clientName: 'Amit Patel',
    company: 'Geotech Construction',
    designation: 'Managing Director',
    review:
      'Our new website and digital presence generated a major increase in qualified leads. Highly recommend ArionexTech for serious business projects.',
    rating: 5,
  },
];

/** Product cards for Home / listing — available synchronously */
export function getDemoProductCards() {
  return STATIC_PRODUCTS.map((p) => productDetailToCard(p));
}

export function getDemoProducts(): ProductDetail[] {
  return [...STATIC_PRODUCTS];
}

export function productDetailToCard(p: ProductDetail) {
  return {
    id: String(p.id),
    name: p.title,
    slug: p.slug,
    description: p.shortDescription,
    status: p.status,
    features: p.features,
    category: p.category,
    productType: p.productType,
    demoUrl: p.demoUrl,
  };
}

export function getDemoProductBySlug(slug: string): ProductDetail | undefined {
  return STATIC_PRODUCTS.find((p) => p.slug === slug);
}
