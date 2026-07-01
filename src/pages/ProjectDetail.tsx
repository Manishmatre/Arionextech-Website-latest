import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ProjectCaseStudy from '../components/premium/ProjectCaseStudy';
import { getDemoProjects, getProjectBySlug, getRelatedProjects } from '../lib/projects';
import type { PortfolioProject } from '../types/portfolio';

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const demo = slug ? getDemoProjects().find((p) => p.slug === slug) : undefined;
  const [project, setProject] = useState<PortfolioProject | null>(demo ?? null);
  const [related, setRelated] = useState<PortfolioProject[]>([]);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    if (!slug) return;
    setNotFound(false);

    if (demo) {
      getRelatedProjects(demo, 3).then(setRelated);
    }

    getProjectBySlug(slug)
      .then(async (p) => {
        if (!p) {
          setNotFound(!demo);
          return;
        }
        setProject(p);
        setNotFound(false);
        const rel = await getRelatedProjects(p, 3);
        setRelated(rel);
      })
      .catch(() => {
        if (!demo) setNotFound(true);
      });
  }, [slug, demo]);

  if (notFound || !project) {
    return (
      <div className="min-h-screen section-surface-soft flex items-center justify-center px-4">
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
