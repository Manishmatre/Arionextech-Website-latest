import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ProductCaseStudy from '../components/premium/ProductCaseStudy';
import { getProductBySlug, getRelatedProducts } from '../lib/products';
import type { ProductDetail } from '../types/product';

export default function ProductDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const [product, setProduct] = useState<ProductDetail | null>(null);
  const [related, setRelated] = useState<ProductDetail[]>([]);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    if (!slug) return;
    setLoading(true);
    setNotFound(false);

    getProductBySlug(slug)
      .then(async (p) => {
        if (!p) {
          setNotFound(true);
          setProduct(null);
          return;
        }
        setProduct(p);
        const rel = await getRelatedProducts(p, 3);
        setRelated(rel);
      })
      .catch(() => setNotFound(true))
      .finally(() => setLoading(false));
  }, [slug]);

  if (loading) {
    return (
      <div className="bg-[#050508] min-h-screen flex items-center justify-center">
        <div className="card-premium p-10 w-full max-w-md animate-pulse">
          <div className="h-6 bg-white/10 rounded mb-4 w-2/3" />
          <div className="h-4 bg-white/5 rounded mb-2" />
          <div className="h-4 bg-white/5 rounded w-5/6" />
        </div>
      </div>
    );
  }

  if (notFound || !product) {
    return (
      <div className="bg-[#050508] min-h-screen flex items-center justify-center px-4">
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
