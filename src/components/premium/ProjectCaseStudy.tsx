import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowLeftIcon,
  ArrowTopRightOnSquareIcon,
  CalendarIcon,
  CheckCircleIcon,
  CodeBracketIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline';
import type { PortfolioProject } from '../../types/portfolio';
import { CATEGORY_LABELS, formatResultLabel } from '../../types/portfolio';

interface ProjectCaseStudyProps {
  project: PortfolioProject;
  related?: PortfolioProject[];
}

export default function ProjectCaseStudy({ project, related = [] }: ProjectCaseStudyProps) {
  const categoryLabel =
    CATEGORY_LABELS[project.category] ||
    (project.isFromErp ? 'Software Project' : String(project.category));

  const gallery = project.gallery?.length
    ? project.gallery
    : project.image
      ? [project.image]
      : [];

  const resultEntries = Object.entries(project.results || {});

  return (
    <div className="bg-[#050508] min-h-screen">
      {/* Hero */}
      <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 mesh-bg border-b border-white/8 overflow-hidden">
        <div className="absolute inset-0 grid-pattern pointer-events-none opacity-40" />
        <div className="container-premium relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Link
              to="/portfolio"
              className="inline-flex items-center text-slate-400 hover:text-white mb-8 text-sm font-medium transition-colors"
            >
              <ArrowLeftIcon className="h-4 w-4 mr-2" />
              Back to portfolio
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex flex-wrap items-center gap-3 mb-5">
                  <span className="badge">{categoryLabel}</span>
                  {project.isFromErp && (
                    <span className="text-[10px] font-semibold uppercase tracking-wider bg-indigo-600/80 text-white px-2.5 py-1 rounded-full">
                      ERP Live
                    </span>
                  )}
                  <span className="text-xs text-slate-500 capitalize">{project.status}</span>
                </div>

                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
                  {project.title}
                </h1>
                <p className="text-indigo-400 font-medium mb-4">Client — {project.client}</p>
                <p className="text-lg text-slate-400 leading-relaxed mb-8 max-w-xl">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-6 mb-8 text-sm">
                  <div className="flex items-center gap-2 text-slate-300">
                    <CalendarIcon className="h-5 w-5 text-indigo-400" />
                    <span>{project.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-300">
                    <UserGroupIcon className="h-5 w-5 text-indigo-400" />
                    <span>{project.teamSize} team members</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary inline-flex items-center"
                    >
                      View live project
                      <ArrowTopRightOnSquareIcon className="h-4 w-4 ml-2" />
                    </a>
                  )}
                  <Link to="/contact" className="btn-ghost">
                    Start a similar project
                  </Link>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.15 }}
                className="relative"
              >
                <div className="absolute -inset-4 bg-indigo-500/20 rounded-3xl blur-3xl pointer-events-none" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="relative rounded-2xl border border-white/10 shadow-2xl w-full aspect-[4/3] object-cover"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Results */}
      {resultEntries.length > 0 && (
        <section className="py-14 border-b border-white/8 bg-[#08080e]">
          <div className="container-premium">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
              {resultEntries.map(([key, value], i) => (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="card-premium p-6 text-center"
                >
                  <div className="font-display text-2xl md:text-3xl font-bold text-gradient-accent mb-2">
                    {value}
                  </div>
                  <p className="text-sm text-slate-400">{formatResultLabel(key)}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Overview + features */}
      <section className="section-pad">
        <div className="container-premium">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="section-heading">
                Project <span className="highlight">overview</span>
              </h2>
              <p className="text-slate-400 leading-relaxed mb-6">
                {project.overview || project.description}
              </p>
              {project.caseStudy && project.caseStudy !== project.overview && (
                <p className="text-slate-400 leading-relaxed whitespace-pre-line">{project.caseStudy}</p>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h2 className="section-heading">
                Key <span className="highlight">deliverables</span>
              </h2>
              <ul className="space-y-3">
                {project.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-slate-300">
                    <CheckCircleIcon className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      {gallery.length > 1 && (
        <section className="py-16 bg-[#08080e] border-y border-white/8">
          <div className="container-premium">
            <h2 className="section-heading text-center mb-10">
              Project <span className="highlight">screenshots</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {gallery.map((src, i) => (
                <motion.img
                  key={src + i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  src={src}
                  alt={`${project.title} screenshot ${i + 1}`}
                  className="rounded-xl border border-white/10 w-full object-cover aspect-video"
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Tech stack */}
      <section className="section-pad pt-0">
        <div className="container-premium">
          <div className="card-premium p-8 md:p-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-indigo-500/15 border border-indigo-500/25 flex items-center justify-center text-indigo-400">
                <CodeBracketIcon className="h-6 w-6" />
              </div>
              <h2 className="font-display text-2xl font-bold text-white">Technology stack</h2>
            </div>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 rounded-full text-sm bg-white/5 border border-white/10 text-slate-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="section-pad bg-[#08080e]">
          <div className="container-premium">
            <h2 className="section-heading text-center mb-12">
              More <span className="highlight">case studies</span>
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
                  <Link to={`/projects/${item.slug}`} className="card-premium overflow-hidden group block h-full">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="p-5">
                      <span className="text-xs text-indigo-400 font-medium uppercase tracking-wider">
                        {CATEGORY_LABELS[item.category] || item.category}
                      </span>
                      <h3 className="font-display text-lg font-bold text-white mt-2 group-hover:text-indigo-300 transition-colors">
                        {item.title}
                      </h3>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-20 cta-section">
        <div className="container-premium text-center max-w-2xl mx-auto">
          <h2 className="section-heading text-white">
            Ready to build something <span className="highlight">remarkable</span>?
          </h2>
          <p className="text-lg text-blue-100/90 mb-8">
            Tell us about your project — we&apos;ll scope it, ship it, and support you after launch.
          </p>
          <Link to="/contact" className="btn btn-ghost inline-flex items-center">
            Get in touch
            <ArrowTopRightOnSquareIcon className="h-4 w-4 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
}
