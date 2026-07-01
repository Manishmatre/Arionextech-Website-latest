import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface ServiceHeroProps {
  icon: ReactNode;
  title: string;
  subtitle: string;
  description: string;
  children?: ReactNode;
}

/** Hero for service detail pages — clears fixed navbar (pt-32+) */
export default function ServiceHero({ icon, title, subtitle, description, children }: ServiceHeroProps) {
  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden mesh-bg border-b border-white/8">
      <div className="absolute inset-0 grid-pattern pointer-events-none opacity-40" />
      <div className="container-premium relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6"
          >
            <div className="w-16 h-16 bg-indigo-500/15 border border-indigo-500/25 rounded-2xl flex items-center justify-center shrink-0">
              {icon}
            </div>
            <div className="text-center sm:text-left">
              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
                {title}
              </h1>
              <p className="text-base md:text-lg text-slate-400 mt-1">{subtitle}</p>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto mb-8 leading-relaxed"
          >
            {description}
          </motion.p>

          {children && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              {children}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
