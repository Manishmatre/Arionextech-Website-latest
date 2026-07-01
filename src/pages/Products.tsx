import { motion } from 'framer-motion';
import { useEffect, useState, type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import {
  AcademicCapIcon,
  ArrowRightIcon,
  ArrowTopRightOnSquareIcon,
  BuildingOfficeIcon,
  CheckCircleIcon,
  HeartIcon,
  WrenchScrewdriverIcon,
} from '@heroicons/react/24/outline';
import PageHero from '../components/premium/PageHero';
import SectionHeader from '../components/premium/SectionHeader';
import { loadAllProducts } from '../lib/products';
import type { ProductDetail } from '../types/product';

const CATEGORY_ICONS: Record<string, ReactNode> = {
  Construction: <WrenchScrewdriverIcon className="h-6 w-6" />,
  Dental: <HeartIcon className="h-6 w-6" />,
  Hospital: <HeartIcon className="h-6 w-6" />,
  School: <AcademicCapIcon className="h-6 w-6" />,
  ERP: <BuildingOfficeIcon className="h-6 w-6" />,
};

function statusClass(status: string) {
  if (status === 'Active' || status === 'Live') return 'text-emerald-400 bg-emerald-500/15 border-emerald-500/30';
  if (status === 'Beta') return 'text-sky-400 bg-sky-500/15 border-sky-500/30';
  if (status === 'Coming Soon') return 'text-amber-400 bg-amber-500/15 border-amber-500/30';
  return 'text-slate-400 bg-white/5 border-white/10';
}

export default function Products() {
  const [products, setProducts] = useState<ProductDetail[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadAllProducts()
      .then(setProducts)
      .catch(() => setProducts([]))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="bg-[#050508] min-h-screen">
      <PageHero
        badge="Solutions"
        title="Industry platforms"
        highlight="built to scale"
        description="Construction ERP, Dental systems, School ERP, and enterprise software — managed live from our ERP and shipped to production."
      >
        {!loading && (
          <p className="mt-4 text-sm text-indigo-400 font-medium">{products.length} solutions available</p>
        )}
      </PageHero>

      <section className="section-pad pt-0">
        <div className="container-premium">
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {[1, 2, 3].map((i) => (
                <div key={i} className="card-premium h-80 animate-pulse bg-white/5" />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {products.map((product, index) => (
                <motion.article
                  key={product.slug}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.06 }}
                  className="card-premium overflow-hidden flex flex-col group"
                >
                  <Link to={`/products/${product.slug}`} className="block flex-grow flex flex-col">
                    {product.heroImage && (
                      <div className="h-40 overflow-hidden">
                        <img
                          src={product.heroImage}
                          alt={product.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    )}
                    <div className="p-6 md:p-8 flex flex-col flex-grow">
                      <div className="flex items-start justify-between mb-5">
                        <div className="w-12 h-12 rounded-xl bg-indigo-500/15 border border-indigo-500/25 flex items-center justify-center text-indigo-400">
                          {CATEGORY_ICONS[product.category] || <BuildingOfficeIcon className="h-6 w-6" />}
                        </div>
                        <span className={`text-[10px] px-2.5 py-1 rounded-full border font-semibold uppercase tracking-wider ${statusClass(product.status)}`}>
                          {product.status}
                        </span>
                      </div>

                      <span className="text-xs font-semibold text-indigo-400 uppercase tracking-wider">
                        {product.category}
                        {product.productType && <span className="text-slate-600 ml-2">· {product.productType}</span>}
                      </span>

                      <h3 className="font-display text-xl font-bold text-white mt-2 mb-3 group-hover:text-indigo-300 transition-colors">
                        {product.title}
                      </h3>
                      <p className="text-slate-400 text-sm leading-relaxed flex-grow line-clamp-3">
                        {product.shortDescription}
                      </p>

                      <ul className="space-y-2 mb-6 mt-5">
                        {product.features.slice(0, 4).map((feature) => (
                          <li key={feature} className="flex items-center gap-2 text-sm text-slate-300">
                            <CheckCircleIcon className="w-4 h-4 text-emerald-400 shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>

                      <span className="text-sm font-medium text-indigo-400 flex items-center gap-1 pt-4 border-t border-white/8">
                        View full details
                        <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </Link>

                  <div className="px-6 md:px-8 pb-6 flex gap-3 -mt-2">
                    <Link to="/contact" className="btn-primary flex-1 !py-2.5 text-sm justify-center">
                      Request demo
                    </Link>
                    {product.demoUrl && (
                      <a
                        href={product.demoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="btn-ghost !p-2.5"
                        aria-label="Live demo"
                      >
                        <ArrowTopRightOnSquareIcon className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </motion.article>
              ))}
            </div>
          )}

          <div className="mt-20">
            <SectionHeader
              badge="Custom builds"
              title="Need something"
              highlight="unique?"
              description="We architect and build bespoke platforms for construction, healthcare, education, and enterprise."
            />
            <div className="text-center">
              <Link to="/contact" className="btn-primary">
                Request a consultation
                <ArrowRightIcon className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
