import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { SparklesIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import { fetchProducts, mapProductToCard } from '../lib/publicApi';

export default function LiveProductsBar() {
  const [products, setProducts] = useState<ReturnType<typeof mapProductToCard>[]>([]);

  useEffect(() => {
    fetchProducts()
      .then((data) => setProducts(data.slice(0, 6).map(mapProductToCard)))
      .catch(() => {});
  }, []);

  if (products.length === 0) return null;

  return (
    <section className="relative z-20 -mt-8 mb-4">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="rounded-2xl border border-white/10 bg-slate-900/90 backdrop-blur-xl shadow-2xl shadow-indigo-500/10 p-6 md:p-8"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/20 flex items-center justify-center">
                <SparklesIcon className="w-5 h-5 text-indigo-400" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-indigo-400 font-semibold">Live from our ERP</p>
                <h2 className="text-lg md:text-xl font-bold text-white">Products we ship &amp; manage in production</h2>
              </div>
            </div>
            <Link to="/products" className="inline-flex items-center text-sm font-semibold text-indigo-400 hover:text-indigo-300">
              All solutions <ArrowRightIcon className="w-4 h-4 ml-1" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {products.map((p) => (
              <div
                key={p.id}
                className="group p-4 rounded-xl bg-white/5 border border-white/10 hover:border-indigo-500/40 hover:bg-indigo-500/5 transition-all"
              >
                <div className="flex items-start justify-between gap-2 mb-2">
                  <span className="text-[10px] uppercase tracking-wider text-indigo-300 font-semibold">{p.category}</span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400">{p.status}</span>
                </div>
                <h3 className="font-semibold text-white group-hover:text-indigo-200 transition-colors">{p.name}</h3>
                <p className="text-sm text-slate-400 mt-1 line-clamp-2">{p.description}</p>
                <p className="text-sm text-indigo-400 mt-3 font-medium">{p.price}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
