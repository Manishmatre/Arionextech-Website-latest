import { useRef, type MouseEvent } from 'react';
import { Link } from 'react-router-dom';
import { motion, useMotionTemplate, useMotionValue, useSpring } from 'framer-motion';
import {
  ArrowTopRightOnSquareIcon,
  CalendarIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline';
import type { PortfolioProject } from '../../types/portfolio';
import { CATEGORY_LABELS } from '../../types/portfolio';

interface PortfolioCardProps {
  project: PortfolioProject;
  index: number;
}

export default function PortfolioCard({ project, index }: PortfolioCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const secondaryImage =
    project.gallery && project.gallery.length > 1
      ? project.gallery.find((img) => img !== project.image) ?? project.gallery[1]
      : null;
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(0, { stiffness: 260, damping: 22 });
  const rotateY = useSpring(0, { stiffness: 260, damping: 22 });

  const spotlight = useMotionTemplate`radial-gradient(320px circle at ${x}px ${y}px, rgba(129, 140, 248, 0.14), transparent 65%)`;

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = e.clientX - rect.left;
    const py = e.clientY - rect.top;
    x.set(px);
    y.set(py);
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    rotateX.set(((py - centerY) / centerY) * -4);
    rotateY.set(((px - centerX) / centerX) * 4);
  }

  function handleMouseLeave() {
    rotateX.set(0);
    rotateY.set(0);
  }

  return (
    <motion.article
      ref={cardRef}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 1000,
      }}
      whileHover={{ y: -6 }}
      className="portfolio-card group relative"
    >
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"
        style={{ background: spotlight }}
      />
      <div className="portfolio-card-shine pointer-events-none" />

      <Link
        to={`/projects/${project.slug}`}
        className="relative block card-premium overflow-hidden border border-white/8 group-hover:border-indigo-500/35 transition-colors duration-400"
      >
        <div className="relative overflow-hidden">
          {secondaryImage ? (
            <div className="grid grid-cols-2 h-52">
              <img
                src={project.image}
                alt={`${project.title} — ${project.galleryLabels?.[0] || 'preview'}`}
                className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <img
                src={secondaryImage}
                alt={`${project.title} — ${project.galleryLabels?.[1] || 'platform'}`}
                className="w-full h-full object-cover object-top border-l border-white/10 transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </div>
          ) : (
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-[#050508]/90 via-[#050508]/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
          <div className="absolute top-4 right-4 flex items-center gap-2 z-10">
            {project.featured && (
              <span className="text-[10px] font-semibold uppercase tracking-wide bg-amber-500/90 text-white px-2 py-1 rounded-full shadow-lg">
                Featured
              </span>
            )}
            {project.isFromErp && (
              <span className="text-[10px] font-semibold uppercase tracking-wide bg-indigo-600 text-white px-2 py-1 rounded-full shadow-lg">
                ERP Live
              </span>
            )}
          </div>
          <div className="absolute bottom-4 left-4 right-4 flex justify-end opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 z-10">
            <span className="inline-flex items-center gap-1.5 text-xs font-medium text-white bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/15">
              Open case study
              <ArrowTopRightOnSquareIcon className="h-3.5 w-3.5" />
            </span>
          </div>
        </div>

        <div className="p-6 relative">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm text-indigo-400 font-medium bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20">
              {CATEGORY_LABELS[project.category] || project.category}
            </span>
            <div className="flex items-center text-sm text-slate-500">
              <CalendarIcon className="h-4 w-4 mr-1" />
              {project.duration}
            </div>
          </div>

          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors duration-300">
            {project.title}
          </h3>
          <p className="text-slate-400 text-sm mb-3">Client: {project.client}</p>
          <p className="text-slate-300 mb-4 line-clamp-2 text-sm leading-relaxed">{project.description}</p>

          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="text-xs bg-white/5 text-slate-300 px-2 py-1 rounded-full group-hover:bg-indigo-500/10 group-hover:text-indigo-200/90 transition-colors"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="text-xs bg-white/5 text-slate-300 px-2 py-1 rounded-full">
                +{project.technologies.length - 3}
              </span>
            )}
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-white/10">
            <div className="flex items-center text-sm text-slate-500">
              <UserGroupIcon className="h-4 w-4 mr-1" />
              {project.teamSize} members
            </div>
            <span className="text-indigo-400 font-medium text-sm flex items-center group-hover:text-indigo-300">
              View case study
              <ArrowTopRightOnSquareIcon className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
