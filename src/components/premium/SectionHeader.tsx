import { motion } from 'framer-motion';

interface SectionHeaderProps {
  badge?: string;
  title: string;
  highlight?: string;
  description?: string;
  align?: 'left' | 'center';
}

export default function SectionHeader({
  badge,
  title,
  highlight,
  description,
  align = 'center',
}: SectionHeaderProps) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left';

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6 }}
      className={`max-w-3xl mb-14 md:mb-16 ${alignClass}`}
    >
      {badge && <span className="badge mb-5">{badge}</span>}
      <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight text-white leading-tight">
        {title}
        {highlight && (
          <>
            {' '}
            <span className="text-gradient-accent">{highlight}</span>
          </>
        )}
      </h2>
      {description && (
        <p className="mt-5 text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto">
          {description}
        </p>
      )}
    </motion.div>
  );
}
