import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowRightIcon,
  BuildingOffice2Icon,
  CloudIcon,
  CodeBracketIcon,
  CpuChipIcon,
  RocketLaunchIcon,
  ShieldCheckIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';
import AnimatedCounter from '../motion/AnimatedCounter';

interface HomeHeroProps {
  stats: {
    projects: number;
    clients: number;
    products: number;
  };
}

const CODE_LINES = [
  { text: '// Enterprise delivery pipeline', indent: 0, delay: 0.85, muted: true },
  { text: 'await studio.ship({', indent: 0, delay: 1 },
  { text: '  architecture: "cloud-native",', indent: 1, delay: 1.15 },
  { text: '  security: "enterprise-grade",', indent: 1, delay: 1.3 },
  { text: '  outcome: "production-ready",', indent: 1, delay: 1.45 },
  { text: '});', indent: 0, delay: 1.6 },
];

const PILLARS = [
  { icon: BuildingOffice2Icon, label: 'Industry ERP', desc: 'Vertical platforms' },
  { icon: CodeBracketIcon, label: 'Custom Systems', desc: 'Tailored software' },
  { icon: CloudIcon, label: 'Cloud & DevOps', desc: 'Scale & reliability' },
  { icon: CpuChipIcon, label: 'AI & Automation', desc: 'Smart workflows' },
];

const INDUSTRIES = ['Construction', 'Healthcare', 'EdTech', 'SaaS', 'Enterprise'];

const PIPELINE = [
  { step: 'Discover', status: 'done' },
  { step: 'Design', status: 'done' },
  { step: 'Build', status: 'active' },
  { step: 'Deploy', status: 'pending' },
];

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
};

export default function HomeHero({ stats }: HomeHeroProps) {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 mesh-bg" />
      <div className="absolute inset-0 grid-pattern pointer-events-none" />
      <div className="hero-beam pointer-events-none" />
      <div className="absolute top-16 -right-20 w-[min(560px,80vw)] h-[560px] bg-indigo-600/25 rounded-full blur-[140px] animate-pulse-glow pointer-events-none" />
      <div className="absolute bottom-0 -left-24 w-[420px] h-[420px] bg-cyan-500/12 rounded-full blur-[110px] pointer-events-none" />
      <div className="hero-radial-spot pointer-events-none" />

      <div className="container-premium relative z-10 w-full pt-28 pb-20 md:pt-36 md:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 xl:gap-14 items-center">
          <div className="lg:col-span-6 xl:col-span-7">
            <motion.span
              {...fadeUp}
              transition={{ duration: 0.55 }}
              className="badge mb-6 md:mb-8"
            >
              <SparklesIcon className="w-3.5 h-3.5" />
              Enterprise Software Studio
            </motion.span>

            <motion.h1
              {...fadeUp}
              transition={{ duration: 0.65, delay: 0.08 }}
              className="font-display text-[2.5rem] sm:text-5xl md:text-6xl xl:text-[4.5rem] font-bold tracking-tight leading-[1.04] text-white"
            >
              Software that moves
              <br />
              <span className="text-gradient">industries forward</span>
            </motion.h1>

            <motion.p
              {...fadeUp}
              transition={{ duration: 0.6, delay: 0.18 }}
              className="mt-6 md:mt-8 text-base sm:text-lg md:text-xl text-slate-400 max-w-xl leading-relaxed"
            >
              We partner with ambitious teams to design, build, and scale enterprise platforms —
              from ERP and industry systems to cloud-native products shipped to production.
            </motion.p>

            <motion.div
              {...fadeUp}
              transition={{ duration: 0.55, delay: 0.28 }}
              className="mt-8 md:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4"
            >
              <Link to="/contact" className="btn-primary">
                <RocketLaunchIcon className="w-5 h-5" />
                Start your project
              </Link>
              <Link to="/portfolio" className="btn-ghost">
                View our work
                <ArrowRightIcon className="w-4 h-4" />
              </Link>
            </motion.div>

            <motion.div
              {...fadeUp}
              transition={{ duration: 0.55, delay: 0.36 }}
              className="mt-6 flex flex-wrap gap-2"
            >
              {INDUSTRIES.map((tag, i) => (
                <motion.span
                  key={tag}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.45 + i * 0.06 }}
                  className="text-[11px] sm:text-xs text-slate-400 border border-white/10 bg-white/[0.03] px-3 py-1 rounded-full"
                >
                  {tag}
                </motion.span>
              ))}
            </motion.div>

            <motion.div
              {...fadeUp}
              transition={{ duration: 0.55, delay: 0.38 }}
              className="mt-10 md:mt-12 grid grid-cols-2 sm:grid-cols-4 gap-5 sm:gap-6 md:gap-8"
            >
              {[
                { value: stats.projects, suffix: '+', label: 'Projects shipped' },
                { value: stats.clients, suffix: '+', label: 'Enterprise clients' },
                { value: stats.products, suffix: '+', label: 'Live products' },
                { value: null, static: '24/7', label: 'Support & SLA' },
              ].map((item) => (
                <div key={item.label}>
                  <div className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-white tabular-nums">
                    {item.value !== null ? (
                      <AnimatedCounter value={item.value} suffix={item.suffix} duration={2} immediate />
                    ) : (
                      item.static
                    )}
                  </div>
                  <div className="text-xs sm:text-sm text-slate-500 mt-1">{item.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 32, scale: 0.96 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.75, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 xl:col-span-5 relative"
          >
            <div className="hero-visual-stage mx-auto w-full max-w-md lg:max-w-none">
              <div className="hero-orbit-ring" aria-hidden>
                <span className="hero-orbit-dot hero-orbit-dot-1" />
                <span className="hero-orbit-dot hero-orbit-dot-2" />
                <span className="hero-orbit-dot hero-orbit-dot-3" />
              </div>

              <div className="hero-terminal card-premium overflow-hidden">
                <div className="flex items-center justify-between gap-2 px-4 py-3 border-b border-white/8 bg-white/[0.02]">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
                    <span className="ml-2 text-[10px] uppercase tracking-widest text-slate-500 font-mono">
                      delivery.ts
                    </span>
                  </div>
                  <span className="hero-live-pill">
                    <span className="hero-live-dot" />
                    Pipeline active
                  </span>
                </div>
                <div className="p-4 font-mono text-[11px] sm:text-xs leading-relaxed border-b border-white/8">
                  {CODE_LINES.map((line) => (
                    <motion.div
                      key={line.text}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: line.delay, duration: 0.4 }}
                      className={line.muted ? 'text-slate-500' : 'text-indigo-200/90'}
                      style={{ paddingLeft: `${line.indent * 1.25}rem` }}
                    >
                      {line.text}
                    </motion.div>
                  ))}
                  <motion.span
                    className="inline-block w-2 h-4 bg-indigo-400/80 ml-0.5 align-middle hero-cursor-blink"
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 1.1, repeat: Infinity }}
                  />
                </div>

                <div className="p-4 space-y-4">
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-slate-500 mb-2">Delivery pipeline</p>
                    <div className="flex items-center gap-1.5">
                      {PIPELINE.map((item, i) => (
                        <div key={item.step} className="flex items-center gap-1.5 flex-1 min-w-0">
                          <motion.div
                            initial={{ opacity: 0, y: 6 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7 + i * 0.1 }}
                            className={`hero-pipeline-step flex-1 min-w-0 text-center ${
                              item.status === 'active'
                                ? 'hero-pipeline-active'
                                : item.status === 'done'
                                  ? 'hero-pipeline-done'
                                  : ''
                            }`}
                          >
                            <span className="block text-[10px] font-medium text-white truncate">{item.step}</span>
                          </motion.div>
                          {i < PIPELINE.length - 1 && (
                            <span className="text-slate-600 text-[10px] shrink-0">→</span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { label: 'Uptime SLA', value: '99.9%' },
                      { label: 'Security', value: 'Enterprise' },
                    ].map((m, i) => (
                      <motion.div
                        key={m.label}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1.1 + i * 0.1 }}
                        className="rounded-lg border border-white/8 bg-white/[0.03] px-3 py-2.5"
                      >
                        <p className="text-[10px] text-slate-500">{m.label}</p>
                        <p className="text-sm font-semibold text-indigo-200 mt-0.5">{m.value}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3">
                {PILLARS.map((pillar, i) => {
                  const Icon = pillar.icon;
                  return (
                    <motion.div
                      key={pillar.label}
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.65 + i * 0.1 }}
                      whileHover={{ y: -3, borderColor: 'rgba(129, 140, 248, 0.35)' }}
                      className="hero-pillar-card glass rounded-xl p-3.5 border border-white/10"
                    >
                      <div className="w-8 h-8 rounded-lg bg-indigo-500/15 border border-indigo-500/25 flex items-center justify-center text-indigo-400 mb-2">
                        <Icon className="w-4 h-4" />
                      </div>
                      <p className="text-sm font-semibold text-white">{pillar.label}</p>
                      <p className="text-[11px] text-slate-500 mt-0.5">{pillar.desc}</p>
                    </motion.div>
                  );
                })}
              </div>

              <motion.div
                className="hero-float-badge hero-float-badge-a"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              >
                <ShieldCheckIcon className="w-3 h-3 inline mr-1 -mt-0.5" />
                SOC-ready
              </motion.div>
              <motion.div
                className="hero-float-badge hero-float-badge-b"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              >
                Agile delivery
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-slate-600"
        >
          <span className="text-[10px] uppercase tracking-[0.2em]">Scroll</span>
          <motion.span
            className="w-px h-8 bg-gradient-to-b from-indigo-400/60 to-transparent"
            animate={{ scaleY: [0.6, 1, 0.6], opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </div>
    </section>
  );
}
