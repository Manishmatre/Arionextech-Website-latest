import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import type { ReactNode } from 'react';
import {
  AcademicCapIcon,
  ArrowLeftIcon,
  ArrowTopRightOnSquareIcon,
  BookOpenIcon,
  BuildingOfficeIcon,
  CheckCircleIcon,
  HeartIcon,
  SparklesIcon,
  WrenchScrewdriverIcon,
} from '@heroicons/react/24/outline';
import type { ProductDetail } from '../../types/product';
import { PRODUCT_CATEGORY_LABELS, CATEGORY_BENEFITS } from '../../types/product';

const CATEGORY_ICONS: Record<string, ReactNode> = {
  Construction: <WrenchScrewdriverIcon className="h-8 w-8" />,
  Dental: <HeartIcon className="h-8 w-8" />,
  Hospital: <HeartIcon className="h-8 w-8" />,
  School: <AcademicCapIcon className="h-8 w-8" />,
  ERP: <BuildingOfficeIcon className="h-8 w-8" />,
};

function statusClass(status: string) {
  if (status === 'Active' || status === 'Live') return 'text-emerald-400 bg-emerald-500/15 border-emerald-500/30';
  if (status === 'Beta') return 'text-sky-400 bg-sky-500/15 border-sky-500/30';
  if (status === 'Coming Soon') return 'text-amber-400 bg-amber-500/15 border-amber-500/30';
  return 'text-slate-400 bg-white/5 border-white/10';
}

interface ProductCaseStudyProps {
  product: ProductDetail;
  related?: ProductDetail[];
}

export default function ProductCaseStudy({ product, related = [] }: ProductCaseStudyProps) {
  const categoryLabel = PRODUCT_CATEGORY_LABELS[product.category] || product.category;
  const benefits = product.highlights || CATEGORY_BENEFITS[product.category] || [];
  const hero = product.heroImage || product.gallery[0];
  const screenshots = product.gallery.length > 1 ? product.gallery : [];

  return (
    <div className="bg-[#050508] min-h-screen">
      <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 mesh-bg border-b border-white/8 overflow-hidden">
        <div className="absolute inset-0 grid-pattern pointer-events-none opacity-40" />
        <div className="container-premium relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Link
              to="/products"
              className="inline-flex items-center text-slate-400 hover:text-white mb-8 text-sm font-medium transition-colors"
            >
              <ArrowLeftIcon className="h-4 w-4 mr-2" />
              All products
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex flex-wrap items-center gap-3 mb-5">
                  <div className="w-14 h-14 rounded-xl bg-indigo-500/15 border border-indigo-500/25 flex items-center justify-center text-indigo-400">
                    {CATEGORY_ICONS[product.category] || <BuildingOfficeIcon className="h-8 w-8" />}
                  </div>
                  <span className={`text-[10px] px-2.5 py-1 rounded-full border font-semibold uppercase tracking-wider ${statusClass(product.status)}`}>
                    {product.status}
                  </span>
                  {product.isFromErp && (
                    <span className="text-[10px] font-semibold uppercase tracking-wider bg-indigo-600/80 text-white px-2.5 py-1 rounded-full">
                      ERP Live
                    </span>
                  )}
                </div>

                <p className="text-indigo-400 text-sm font-semibold uppercase tracking-wider mb-2">
                  {categoryLabel}
                  {product.productType && <span className="text-slate-600 ml-2">· {product.productType}</span>}
                </p>

                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
                  {product.title}
                </h1>
                <p className="text-lg text-slate-400 leading-relaxed mb-8 max-w-xl">
                  {product.shortDescription}
                </p>

                <div className="flex flex-wrap gap-4 text-sm text-slate-400 mb-8">
                  {product.version && <span>Version {product.version}</span>}
                  {product.isFeatured && (
                    <span className="flex items-center gap-1 text-amber-400">
                      <SparklesIcon className="h-4 w-4" /> Featured
                    </span>
                  )}
                </div>

                <div className="flex flex-wrap gap-4">
                  <Link to="/contact" className="btn-primary">
                    Request demo
                  </Link>
                  {product.demoUrl && (
                    <a
                      href={product.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-ghost inline-flex items-center"
                    >
                      Live demo
                      <ArrowTopRightOnSquareIcon className="h-4 w-4 ml-2" />
                    </a>
                  )}
                  {product.documentationUrl && (
                    <a
                      href={product.documentationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-ghost inline-flex items-center"
                    >
                      <BookOpenIcon className="h-4 w-4 mr-2" />
                      Docs
                    </a>
                  )}
                </div>
              </div>

              {hero && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.7, delay: 0.15 }}
                  className="relative"
                >
                  <div className="absolute -inset-4 bg-indigo-500/20 rounded-3xl blur-3xl pointer-events-none" />
                  <img
                    src={hero}
                    alt={product.title}
                    className="relative rounded-2xl border border-white/10 shadow-2xl w-full aspect-[4/3] object-cover"
                  />
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {benefits.length > 0 && (
        <section className="py-14 border-b border-white/8 bg-[#08080e]">
          <div className="container-premium">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {benefits.map((benefit, i) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="card-premium p-6"
                >
                  <CheckCircleIcon className="h-6 w-6 text-emerald-400 mb-3" />
                  <p className="text-slate-300 text-sm leading-relaxed">{benefit}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="section-pad">
        <div className="container-premium">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="section-heading">
                Product <span className="highlight">overview</span>
              </h2>
              <p className="text-slate-400 leading-relaxed whitespace-pre-line">{product.description}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h2 className="section-heading">
                Key <span className="highlight">features</span>
              </h2>
              <ul className="space-y-3">
                {product.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/5">
                    <CheckCircleIcon className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="text-slate-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {screenshots.length > 0 && (
        <section className="py-16 bg-[#08080e] border-y border-white/8">
          <div className="container-premium">
            <h2 className="section-heading text-center mb-10">
              Product <span className="highlight">screenshots</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {screenshots.map((src, i) => (
                <motion.img
                  key={src + i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  src={src}
                  alt={`${product.title} screenshot ${i + 1}`}
                  className="rounded-xl border border-white/10 w-full object-cover aspect-video"
                />
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="section-pad pt-0">
        <div className="container-premium">
          <div className="card-premium p-8 md:p-10 text-center max-w-3xl mx-auto">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to see it in action?
            </h2>
            <p className="text-slate-400 mb-8">
              Schedule a personalized demo — we&apos;ll walk you through features relevant to your business and answer technical questions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="btn-primary">
                Book a demo
              </Link>
              <Link to="/products" className="btn-ghost">
                Browse all products
              </Link>
            </div>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="section-pad bg-[#08080e]">
          <div className="container-premium">
            <h2 className="section-heading text-center mb-12">
              Related <span className="highlight">solutions</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {related.map((item, i) => (
                <motion.div
                  key={item.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link to={`/products/${item.slug}`} className="card-premium p-6 block h-full group hover:border-indigo-500/30 transition-colors">
                    <span className="text-xs text-indigo-400 font-medium uppercase tracking-wider">
                      {PRODUCT_CATEGORY_LABELS[item.category] || item.category}
                    </span>
                    <h3 className="font-display text-lg font-bold text-white mt-2 mb-2 group-hover:text-indigo-300 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-slate-400 text-sm line-clamp-2">{item.shortDescription}</p>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
