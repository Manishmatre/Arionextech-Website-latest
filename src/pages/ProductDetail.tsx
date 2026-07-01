import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ProductCaseStudy from '../components/premium/ProductCaseStudy';
import { getProductBySlug, getRelatedProducts } from '../lib/products';
import { getDemoProductBySlug } from '../data/demoSiteData';
import type { ProductDetail } from '../types/product';

export default function ProductDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const demo = slug ? getDemoProductBySlug(slug) : undefined;
  const [product, setProduct] = useState<ProductDetail | null>(demo ?? null);
  const [related, setRelated] = useState<ProductDetail[]>([]);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    if (!slug) return;
    setNotFound(false);

    if (demo) {
      getRelatedProducts(demo, 3).then(setRelated);
    }

    getProductBySlug(slug)
      .then(async (p) => {
        if (!p) {
          setNotFound(!demo);
          return;
        }
        setProduct(p);
        setNotFound(false);
        const rel = await getRelatedProducts(p, 3);
        setRelated(rel);
      })
      .catch(() => {
        if (!demo) setNotFound(true);
      });
  }, [slug, demo]);

  if (notFound || !product) {
    return (
      <div className="min-h-screen section-surface-soft flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-md"
        >
          <h1 className="font-display text-3xl font-bold text-white mb-4">Product not found</h1>
          <p className="text-slate-400 mb-8">
            This solution may not be published yet or the link has changed.
          </p>
          <Link to="/products" className="btn-primary">
            Browse products
          </Link>
        </motion.div>
      </div>
    );
  }

  return <ProductCaseStudy product={product} related={related} />;
}
