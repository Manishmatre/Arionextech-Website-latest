import type { ProductDetail } from '../types/product';
import { CATEGORY_BENEFITS } from '../types/product';
import { STATIC_PRODUCTS, getDefaultProductImage } from '../data/staticProducts';
import {
  fetchProducts,
  fetchProductBySlug,
  type ApiProduct,
} from './publicApi';

function mapApiToDetail(p: ApiProduct): ProductDetail {
  const gallery = [
    p.heroImage?.url,
    ...(p.screenshots?.map((s) => s.url) || []),
    ...(p.gallery?.map((g) => g.url) || []),
  ].filter(Boolean) as string[];

  const hero = gallery[0] || getDefaultProductImage(p.category);

  return {
    id: p._id,
    slug: p.slug,
    title: p.title,
    shortDescription: p.shortDescription || p.description || '',
    description: p.description || p.shortDescription || '',
    category: p.category,
    productType: p.productType,
    status: p.status,
    version: p.version,
    features: p.features || [],
    heroImage: hero,
    gallery: gallery.length > 1 ? gallery : [hero],
    demoUrl: p.demoUrl,
    documentationUrl: p.documentationUrl,
    downloadUrl: p.downloadUrl,
    isFeatured: p.isFeatured,
    isFromErp: true,
    highlights: CATEGORY_BENEFITS[p.category] || CATEGORY_BENEFITS.ERP,
  };
}

let productsCache: ProductDetail[] | null = null;

export async function loadAllProducts(): Promise<ProductDetail[]> {
  if (productsCache) return productsCache;
  try {
    const items = await fetchProducts();
    const fromApi = items.map(mapApiToDetail);
    const apiSlugs = new Set(fromApi.map((p) => p.slug));
    const uniqueStatic = STATIC_PRODUCTS.filter((p) => !apiSlugs.has(p.slug));
    productsCache = [...fromApi, ...uniqueStatic];
  } catch {
    productsCache = [...STATIC_PRODUCTS];
  }
  if (!productsCache.length) productsCache = [...STATIC_PRODUCTS];
  return productsCache;
}

export async function getProductBySlug(slug: string): Promise<ProductDetail | null> {
  try {
    const item = await fetchProductBySlug(slug);
    return mapApiToDetail(item);
  } catch {
    const staticProduct = STATIC_PRODUCTS.find((p) => p.slug === slug);
    if (staticProduct) return staticProduct;
    const all = await loadAllProducts();
    return all.find((p) => p.slug === slug) ?? null;
  }
}

export async function getRelatedProducts(
  current: ProductDetail,
  limit = 3,
): Promise<ProductDetail[]> {
  const all = await loadAllProducts();
  return all
    .filter((p) => p.slug !== current.slug)
    .sort((a, b) => {
      const aMatch = a.category === current.category ? 1 : 0;
      const bMatch = b.category === current.category ? 1 : 0;
      return bMatch - aMatch;
    })
    .slice(0, limit);
}

export { mapApiToDetail };
