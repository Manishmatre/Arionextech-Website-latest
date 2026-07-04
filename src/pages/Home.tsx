import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRightIcon,
  BuildingOffice2Icon,
  CheckCircleIcon,
  CodeBracketIcon,
  CpuChipIcon,
  DevicePhoneMobileIcon,
  GlobeAltIcon,
  ShieldCheckIcon,
  StarIcon,
} from '@heroicons/react/24/outline';
import SEO from '../components/SEO';
import HomeHero from '../components/premium/HomeHero';
import SectionHeader from '../components/premium/SectionHeader';
import {
  fetchSiteData,
  mapProductToCard,
  type ApiTestimonial,
} from '../lib/publicApi';
import {
  DEMO_STATS,
  DEMO_TESTIMONIALS,
  getDemoProductCards,
} from '../data/demoSiteData';

import candelaImage from '../assets/projects_Images/candelapublicshool-website.png';
import sesEducareImage from '../assets/projects_Images/SESEducare Website.png';
import sesEducareErpImage from '../assets/projects_Images/SESeducare ERP CRM LMS.png';
import luxuryEstatesImage from '../assets/projects_Images/LuxuryStates Website.png';

const TECH_STACK = [
  'React', 'Node.js', 'TypeScript', 'MongoDB', 'AWS', 'PostgreSQL',
  'Next.js', 'Flutter', 'Python', 'Docker', 'Kubernetes', 'Redis',
];

const CAPABILITIES = [
  {
    icon: <BuildingOffice2Icon className="w-6 h-6" />,
    title: 'Industry ERP',
    desc: 'Construction, Dental, Hospital & School platforms built for Indian businesses.',
    span: 'lg:col-span-2',
  },
  {
    icon: <CodeBracketIcon className="w-6 h-6" />,
    title: 'Custom Software',
    desc: 'Tailored systems from architecture to deployment.',
    span: '',
  },
  {
    icon: <DevicePhoneMobileIcon className="w-6 h-6" />,
    title: 'Mobile & Web',
    desc: 'Pixel-perfect apps that perform at scale.',
    span: '',
  },
  {
    icon: <CpuChipIcon className="w-6 h-6" />,
    title: 'AI Integration',
    desc: 'Intelligent automation woven into your workflows.',
    span: '',
  },
  {
    icon: <ShieldCheckIcon className="w-6 h-6" />,
    title: 'Enterprise Grade',
    desc: 'Security, compliance, and 99.9% uptime SLAs.',
    span: 'lg:col-span-2',
  },
];

const PROCESS = [
  { step: '01', title: 'Discovery', desc: 'Deep dive into your business, users, and goals.' },
  { step: '02', title: 'Design', desc: 'UX research, wireframes, and premium UI systems.' },
  { step: '03', title: 'Build', desc: 'Agile sprints with weekly demos and transparency.' },
  { step: '04', title: 'Scale', desc: 'Launch, monitor, iterate, and grow with you.' },
];

const SHOWCASE = [
  {
    title: 'SES Educare',
    image: sesEducareImage,
    secondaryImage: sesEducareErpImage,
    imageLabels: ['Website', 'LMS · ERP · CRM · CMS'],
    tag: 'EdTech Platform',
    url: 'https://seseducare.com/',
    slug: 'ses-educare',
  },
  {
    title: 'Candela Public School',
    image: candelaImage,
    tag: 'EdTech',
    url: 'https://candelapublicschool.com/',
    slug: 'candela-public-school',
  },
  {
    title: 'Luxury Estates',
    image: luxuryEstatesImage,
    tag: 'Real Estate',
    url: 'https://luxuryestates.arionextech.com/',
    slug: 'luxury-estates',
  },
];

function statusColor(status: string) {
  if (status === 'Active') return 'text-emerald-400 bg-emerald-500/15 border-emerald-500/30';
  if (status === 'Beta') return 'text-sky-400 bg-sky-500/15 border-sky-500/30';
  return 'text-amber-400 bg-amber-500/15 border-amber-500/30';
}

export default function Home() {
  const [products, setProducts] = useState(getDemoProductCards());
  const [testimonials, setTestimonials] = useState<ApiTestimonial[]>(DEMO_TESTIMONIALS.slice(0, 3));
  const [stats, setStats] = useState(DEMO_STATS);

  useEffect(() => {
    fetchSiteData()
      .then((data) => {
        if (data.products?.length) setProducts(data.products.slice(0, 6).map(mapProductToCard));
        if (data.testimonials?.length) setTestimonials(data.testimonials.slice(0, 3));
        if (data.stats) setStats(data.stats);
      })
      .catch(() => {
        /* keep demo data already shown */
      });
  }, []);

  return (
    <>
      <SEO
        title="ArionexTech — Enterprise Software Studio"
        description="We build industry-leading ERP platforms, custom software, and digital products for Construction, Healthcare, EdTech, and enterprise."
      />

      <HomeHero stats={stats} />

      {/* ─── TECH MARQUEE ─── */}
      <section className="border-y border-white/8 section-surface py-5 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...TECH_STACK, ...TECH_STACK].map((t, i) => (
            <span key={`${t}-${i}`} className="mx-8 text-sm font-medium text-slate-600 uppercase tracking-widest">
              {t}
            </span>
          ))}
        </div>
      </section>

      {/* ─── CAPABILITIES BENTO ─── */}
      <section className="section-pad relative">
        <div className="container-premium">
          <SectionHeader
            badge="What we do"
            title="Full-stack capability."
            highlight="Zero compromise."
            description="From industry ERP to consumer apps — one team, one standard of excellence."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {CAPABILITIES.map((cap, i) => (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className={`card-premium p-6 md:p-8 ${cap.span}`}
              >
                <div className="w-12 h-12 rounded-xl bg-indigo-500/15 border border-indigo-500/25 flex items-center justify-center text-indigo-400 mb-5">
                  {cap.icon}
                </div>
                <h3 className="font-display text-xl font-bold text-white mb-2">{cap.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{cap.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── LIVE PRODUCTS ─── */}
      <section className="section-pad section-surface relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-50" />
        <div className="container-premium relative z-10">
          <SectionHeader
            badge="Live from ERP"
            title="Products we ship"
            highlight="& manage"
            description="Every product below is managed in our internal ERP — add, update, and publish from one dashboard."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {products.map((p, i) => (
                <motion.div
                  key={p.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className={`card-premium p-6 md:p-8 flex flex-col group ${i === 0 ? 'md:col-span-2 lg:col-span-1 lg:row-span-1' : ''}`}
                >
                  <Link to={`/products/${p.slug}`} className="flex flex-col flex-grow">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-semibold uppercase tracking-wider text-indigo-400">
                        {p.category}
                      </span>
                      <span className={`text-[10px] px-2.5 py-1 rounded-full border font-medium ${statusColor(p.status)}`}>
                        {p.status}
                      </span>
                    </div>
                    <h3 className="font-display text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-indigo-300 transition-colors">
                      {p.name}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed flex-grow">{p.description}</p>
                    <ul className="mt-5 space-y-2 mb-6">
                      {p.features.slice(0, 3).map((f) => (
                        <li key={f} className="flex items-center gap-2 text-sm text-slate-300">
                          <CheckCircleIcon className="w-4 h-4 text-emerald-400 shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <div className="pt-4 border-t border-white/8">
                      <span className="text-sm font-medium text-indigo-400 group-hover:text-indigo-300 flex items-center gap-1">
                        View product details <ArrowRightIcon className="w-4 h-4" />
                      </span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

          <div className="text-center mt-12">
            <Link to="/products" className="btn-ghost">
              View all products
              <ArrowRightIcon className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── PROCESS ─── */}
      <section className="section-pad">
        <div className="container-premium">
          <SectionHeader
            badge="How we work"
            title="A process built for"
            highlight="outcomes"
            description="Transparent, agile, and obsessed with shipping software that actually works in production."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROCESS.map((p, i) => (
              <motion.div
                key={p.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative"
              >
                <span className="font-display text-5xl font-bold text-white/5 absolute -top-2 left-0">
                  {p.step}
                </span>
                <div className="pt-10">
                  <h3 className="font-display text-lg font-bold text-white mb-2">{p.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SHOWCASE ─── */}
      <section className="section-pad section-surface">
        <div className="container-premium">
          <SectionHeader
            badge="Selected work"
            title="Projects that"
            highlight="define us"
            description="Real clients. Real results. From schools to construction giants."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {SHOWCASE.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group card-premium overflow-hidden"
              >
                <Link to={`/projects/${project.slug}`} className="block">
                  <div className="aspect-[16/10] overflow-hidden">
                    {'secondaryImage' in project && project.secondaryImage ? (
                      <div className="grid grid-cols-2 h-full">
                        <div className="relative h-full">
                          <img
                            src={project.image}
                            alt={`${project.title} — ${project.imageLabels?.[0] || 'website'}`}
                            className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                          />
                          {project.imageLabels?.[0] && (
                            <span className="absolute bottom-2 left-2 text-[9px] font-semibold uppercase tracking-wider bg-black/55 text-white px-2 py-0.5 rounded-full">
                              {project.imageLabels[0]}
                            </span>
                          )}
                        </div>
                        <div className="relative h-full border-l border-white/10">
                          <img
                            src={project.secondaryImage}
                            alt={`${project.title} — ${project.imageLabels?.[1] || 'platform'}`}
                            className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                          />
                          {project.imageLabels?.[1] && (
                            <span className="absolute bottom-2 left-2 text-[9px] font-semibold uppercase tracking-wider bg-indigo-600/80 text-white px-2 py-0.5 rounded-full">
                              {project.imageLabels[1]}
                            </span>
                          )}
                        </div>
                      </div>
                    ) : (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      />
                    )}
                  </div>
                  <div className="p-5 flex items-center justify-between">
                    <div>
                      <span className="text-xs text-indigo-400 font-medium uppercase tracking-wider">{project.tag}</span>
                      <h3 className="font-display font-bold text-white mt-1">{project.title}</h3>
                    </div>
                    <GlobeAltIcon className="w-5 h-5 text-slate-500 group-hover:text-indigo-400 transition-colors" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/portfolio" className="btn-ghost">
              View full portfolio
              <ArrowRightIcon className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      {testimonials.length > 0 && (
        <section className="section-pad">
          <div className="container-premium">
            <SectionHeader
              badge="Client voices"
              title="Trusted by"
              highlight="leaders"
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {testimonials.map((t, i) => (
                <motion.div
                  key={t._id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="card-premium p-6 md:p-8"
                >
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: t.rating || 5 }).map((_, j) => (
                      <StarIcon key={j} className="w-4 h-4 text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-slate-300 leading-relaxed mb-6">&ldquo;{t.review}&rdquo;</p>
                  <div>
                    <p className="font-semibold text-white">{t.clientName}</p>
                    <p className="text-sm text-slate-500">
                      {[t.designation, t.company].filter(Boolean).join(' · ')}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ─── CTA ─── */}
      <section className="section-pad pb-32">
        <div className="container-premium">
          <div className="relative rounded-3xl overflow-hidden glow-ring">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/30 via-[#0c0c14] to-cyan-600/20" />
            <div className="absolute inset-0 grid-pattern" />
            <div className="relative z-10 px-8 py-16 md:px-16 md:py-24 text-center">
              <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-5">
                Let&apos;s build your next
                <span className="text-gradient"> platform</span>
              </h2>
              <p className="text-slate-400 text-lg max-w-xl mx-auto mb-10">
                Whether you need a Construction ERP, a dental practice system, or a custom SaaS —
                we&apos;re ready.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="btn-primary">
                  Book a strategy call
                  <ArrowRightIcon className="w-4 h-4" />
                </Link>
                <a href="tel:+918817088544" className="btn-ghost">
                  +91 88170 88544
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
