import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ProjectCaseStudy from '../components/premium/ProjectCaseStudy';
import { getProjectBySlug, getRelatedProjects } from '../lib/projects';
import type { PortfolioProject } from '../types/portfolio';

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const [project, setProject] = useState<PortfolioProject | null>(null);
  const [related, setRelated] = useState<PortfolioProject[]>([]);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    if (!slug) return;
    setLoading(true);
    setNotFound(false);

    getProjectBySlug(slug)
      .then(async (p) => {
        if (!p) {
          setNotFound(true);
          setProject(null);
          return;
        }
        setProject(p);
        const rel = await getRelatedProjects(p, 3);
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

  if (notFound || !project) {
    return (
      <div className="bg-[#050508] min-h-screen flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-md"
        >
          <h1 className="font-display text-3xl font-bold text-white mb-4">Project not found</h1>
          <p className="text-slate-400 mb-8">
            This case study may have moved or is not published yet.
          </p>
          <Link to="/portfolio" className="btn-primary">
            Browse portfolio
          </Link>
        </motion.div>
      </div>
    );
  }

  return <ProjectCaseStudy project={project} related={related} />;
}
