import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface PageHeroProps {
  badge?: string;
  title: string;
  highlight?: string;
  description?: string;
  children?: ReactNode;
}

export default function PageHero({ badge, title, highlight, description, children }: PageHeroProps) {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 mesh-bg overflow-hidden">
      <div className="absolute inset-0 grid-pattern pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-indigo-500/20 rounded-full blur-[120px] animate-pulse-glow pointer-events-none" />

      <div className="container-premium relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl"
        >
          {badge && <span className="badge mb-6">{badge}</span>}
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.05]">
            {title}
            {highlight && (
              <>
                <br />
                <span className="text-gradient">{highlight}</span>
              </>
            )}
          </h1>
          {description && (
            <p className="mt-6 text-lg md:text-xl text-slate-400 leading-relaxed max-w-2xl">
              {description}
            </p>
          )}
          {children}
        </motion.div>
      </div>
    </section>
  );
}
