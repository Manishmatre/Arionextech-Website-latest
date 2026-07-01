import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRightIcon,
  BoltIcon,
  BuildingOffice2Icon,
  CheckCircleIcon,
  CodeBracketIcon,
  CpuChipIcon,
  DevicePhoneMobileIcon,
  GlobeAltIcon,
  HeartIcon,
  RocketLaunchIcon,
  ShieldCheckIcon,
  SparklesIcon,
  StarIcon,
  WrenchScrewdriverIcon,
} from '@heroicons/react/24/outline';
import SEO from '../components/SEO';
import SectionHeader from '../components/premium/SectionHeader';
import {
  fetchSiteData,
  fetchProducts,
  fetchTestimonials,
  mapProductToCard,
  type ApiTestimonial,
} from '../lib/publicApi';

import candelaImage from '../assets/projects_Images/candelapublicshool-website.png';
import geotechImage from '../assets/projects_Images/geotech-website.png';
import arionextechImage from '../assets/projects_Images/arionextech_website.png';

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
  { title: 'Candela Public School', image: candelaImage, tag: 'EdTech', url: 'https://candelapublicschool.com/' },
  { title: 'Geotech Construction', image: geotechImage, tag: 'Construction', url: 'https://geotechsurvey.netlify.app/' },
  { title: 'ArionexTech Platform', image: arionextechImage, tag: 'SaaS', url: '/' },
];

const CATEGORY_ICON: Record<string, React.ReactNode> = {
  Construction: <WrenchScrewdriverIcon className="w-5 h-5" />,
  Dental: <HeartIcon className="w-5 h-5" />,
  ERP: <BuildingOffice2Icon className="w-5 h-5" />,
};

function statusColor(status: string) {
  if (status === 'Active') return 'text-emerald-400 bg-emerald-500/15 border-emerald-500/30';
  if (status === 'Beta') return 'text-sky-400 bg-sky-500/15 border-sky-500/30';
  return 'text-amber-400 bg-amber-500/15 border-amber-500/30';
}

export default function Home() {
  const [products, setProducts] = useState<ReturnType<typeof mapProductToCard>[]>([]);
  const [testimonials, setTestimonials] = useState<ApiTestimonial[]>([]);
  const [stats, setStats] = useState({ products: 5, projects: 50, clients: 40, industries: 6 });

  useEffect(() => {
    fetchSiteData()
      .then((data) => {
        if (data.products?.length) setProducts(data.products.slice(0, 6).map(mapProductToCard));
        if (data.testimonials?.length) setTestimonials(data.testimonials.slice(0, 3));
        if (data.stats) setStats(data.stats);
      })
      .catch(() => {
        fetchProducts().then((d) => d?.length && setProducts(d.slice(0, 6).map(mapProductToCard))).catch(() => {});
        fetchTestimonials().then((d) => d?.length && setTestimonials(d.slice(0, 3))).catch(() => {});
      });
  }, []);

  return (
    <>
      <SEO
        title="ArionexTech — Enterprise Software Studio"
        description="We build industry-leading ERP platforms, custom software, and digital products for Construction, Healthcare, EdTech, and enterprise."
      />

      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex items-center mesh-bg overflow-hidden">
        <div className="absolute inset-0 grid-pattern" />
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[140px] animate-pulse-glow" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[100px]" />

        <div className="container-premium relative z-10 pt-32 pb-24 md:pt-40">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl"
          >
            <span className="badge mb-8">
              <SparklesIcon className="w-3.5 h-3.5" />
              Enterprise Software Studio
            </span>

            <h1 className="font-display text-[2.75rem] sm:text-6xl md:text-7xl lg:text-[5.25rem] font-bold tracking-tight leading-[1.02] text-white">
              Software that moves
              <br />
              <span className="text-gradient">industries forward</span>
            </h1>

            <p className="mt-8 text-lg md:text-xl text-slate-400 max-w-2xl leading-relaxed">
              ArionexTech builds production-grade ERP platforms, custom enterprise systems, and
              digital products — from Construction &amp; Dental to full-stack SaaS.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="btn-primary">
                <RocketLaunchIcon className="w-5 h-5" />
                Start your project
              </Link>
              <Link to="/products" className="btn-ghost">
                Explore products
                <ArrowRightIcon className="w-4 h-4" />
              </Link>
            </div>

            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
              {[
                { n: `${stats.projects}+`, l: 'Projects shipped' },
                { n: `${stats.clients}+`, l: 'Enterprise clients' },
                { n: `${stats.products}+`, l: 'Live products' },
                { n: '24/7', l: 'Support & SLA' },
              ].map((s) => (
                <div key={s.l}>
                  <div className="font-display text-2xl md:text-3xl font-bold text-white">{s.n}</div>
                  <div className="text-sm text-slate-500 mt-1">{s.l}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Floating product pills */}
          {products.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="hidden xl:flex absolute right-8 top-1/2 -translate-y-1/2 flex-col gap-3 w-72"
            >
              {products.slice(0, 3).map((p, i) => (
                <div
                  key={p.id}
                  className="glass rounded-xl p-4 animate-float"
                  style={{ animationDelay: `${i * 1.2}s` }}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-indigo-400">{CATEGORY_ICON[p.category] || <BoltIcon className="w-5 h-5" />}</span>
                    <span className="text-xs text-slate-500 uppercase tracking-wider">{p.category}</span>
                  </div>
                  <p className="font-semibold text-white text-sm">{p.name}</p>
                  <p className="text-xs text-slate-500 mt-1 line-clamp-1">{p.description}</p>
                </div>
              ))}
            </motion.div>
          )}
        </div>
      </section>

      {/* ─── TECH MARQUEE ─── */}
      <section className="border-y border-white/8 bg-[#08080e] py-5 overflow-hidden">
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
      <section className="section-pad bg-[#08080e] relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-50" />
        <div className="container-premium relative z-10">
          <SectionHeader
            badge="Live from ERP"
            title="Products we ship"
            highlight="& manage"
            description="Every product below is managed in our internal ERP — add, update, and publish from one dashboard."
          />

          {products.length === 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="card-premium h-64 animate-pulse bg-white/5" />
              ))}
            </div>
          ) : (
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
          )}

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
      <section className="section-pad bg-[#08080e]">
        <div className="container-premium">
          <SectionHeader
            badge="Selected work"
            title="Projects that"
            highlight="define us"
            description="Real clients. Real results. From schools to construction giants."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {SHOWCASE.map((project, i) => (
              <motion.a
                key={project.title}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group card-premium overflow-hidden"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-5 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-indigo-400 font-medium uppercase tracking-wider">{project.tag}</span>
                    <h3 className="font-display font-bold text-white mt-1">{project.title}</h3>
                  </div>
                  <GlobeAltIcon className="w-5 h-5 text-slate-500 group-hover:text-indigo-400 transition-colors" />
                </div>
              </motion.a>
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
