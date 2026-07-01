import { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PageHero from '../components/premium/PageHero';
import { getAllProjects, getDemoProjects } from '../lib/projects';
import type { PortfolioProject } from '../types/portfolio';
import {
  MagnifyingGlassIcon,
  StarIcon,
  CodeBracketIcon,
  DevicePhoneMobileIcon,
  CloudIcon,
  CpuChipIcon,
  PaintBrushIcon,
  BuildingOfficeIcon,
  UserGroupIcon,
  CheckCircleIcon,
  ShieldCheckIcon,
} from '@heroicons/react/24/outline';
import PortfolioCard from '../components/motion/PortfolioCard';

const categories = [
  { id: 'all', name: 'All Projects', icon: null },
  { id: 'web', name: 'Web Development', icon: <CodeBracketIcon className="h-4 w-4" /> },
  { id: 'saas', name: 'SaaS & Business', icon: <BuildingOfficeIcon className="h-4 w-4" /> },
  { id: 'design', name: 'UI/UX Design', icon: <PaintBrushIcon className="h-4 w-4" /> },
  { id: 'mobile', name: 'Mobile Apps', icon: <DevicePhoneMobileIcon className="h-4 w-4" /> },
  { id: 'cloud', name: 'Cloud Solutions', icon: <CloudIcon className="h-4 w-4" /> },
  { id: 'ai', name: 'AI & ML', icon: <CpuChipIcon className="h-4 w-4" /> },
];

const stats = [
  { number: '50+', label: 'Projects Completed', icon: <CheckCircleIcon className="h-6 w-6" /> },
  { number: '40+', label: 'Happy Clients', icon: <UserGroupIcon className="h-6 w-6" /> },
  { number: '95%', label: 'Success Rate', icon: <StarIcon className="h-6 w-6" /> },
  { number: '24/7', label: 'Support Available', icon: <ShieldCheckIcon className="h-6 w-6" /> },
];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [projects, setProjects] = useState<PortfolioProject[]>(getDemoProjects());

  useEffect(() => {
    getAllProjects()
      .then(setProjects)
      .catch(() => {
        /* demo projects already visible */
      });
  }, []);

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesFilter = activeFilter === 'all' || project.category === activeFilter;
      const q = searchTerm.toLowerCase();
      const matchesSearch =
        !q ||
        project.title.toLowerCase().includes(q) ||
        project.client.toLowerCase().includes(q) ||
        project.technologies.some((tech) => tech.toLowerCase().includes(q));
      return matchesFilter && matchesSearch;
    });
  }, [projects, activeFilter, searchTerm]);

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { all: projects.length };
    projects.forEach((p) => {
      counts[p.category] = (counts[p.category] || 0) + 1;
    });
    return counts;
  }, [projects]);

  return (
    <div className="min-h-screen section-surface-soft">
      <PageHero
        badge="Our work"
        title="Portfolio of"
        highlight="impact"
        description="Explore successful projects — from education platforms to construction giants — built with precision and shipped to production."
      >
        <div className="mt-8 flex flex-wrap gap-4">
          <Link to="/contact" className="btn-primary">Start your project</Link>
          <Link to="/services" className="btn-ghost">Our services</Link>
        </div>
      </PageHero>

      <section className="py-16 border-b border-white/8">
        <div className="container-premium">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-14 h-14 bg-indigo-500/15 border border-indigo-500/25 rounded-2xl flex items-center justify-center mx-auto mb-4 text-indigo-400">
                  {stat.icon}
                </div>
                <div className="font-display text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-slate-500 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-premium">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="section-heading">
              Featured <span className="highlight">Projects</span>
            </h2>
            <p className="text-lg text-slate-400 max-w-3xl mx-auto">
              Browse our portfolio — click any project for the full case study
            </p>
          </motion.div>

          <div className="relative max-w-md mx-auto mb-8">
            <MagnifyingGlassIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-500" />
            <input
              type="text"
              placeholder="Search projects, clients, or technologies..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-white/10 rounded-xl bg-white/5 text-white placeholder:text-slate-500 focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                type="button"
                onClick={() => setActiveFilter(category.id)}
                className={`inline-flex items-center px-5 py-2.5 rounded-xl font-medium text-sm transition-all ${
                  activeFilter === category.id
                    ? 'bg-primary text-white shadow-lg'
                    : 'bg-white/5 text-slate-300 hover:bg-white/10 border border-white/10'
                }`}
              >
                {category.icon && <span className="mr-2">{category.icon}</span>}
                {category.name}
                <span className={`ml-2 px-2 py-0.5 rounded-full text-xs ${
                  activeFilter === category.id ? 'bg-white/20' : 'bg-white/10'
                }`}>
                  {categoryCounts[category.id] ?? 0}
                </span>
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <PortfolioCard key={project.slug} project={project} index={index} />
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <MagnifyingGlassIcon className="h-16 w-16 mx-auto text-slate-500 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">No projects found</h3>
              <p className="text-slate-400">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </section>

      <section className="py-20 cta-section text-white">
        <div className="container-premium text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl text-white/90 mb-8">
            Let&apos;s discuss how we can help bring your vision to life with our proven expertise.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="btn btn-ghost">Get Started Today</Link>
            <Link to="/services" className="btn-ghost border-white/30">View Our Services</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
