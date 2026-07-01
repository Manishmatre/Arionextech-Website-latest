import { Link } from 'react-router-dom';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { FaLinkedin, FaGithub, FaYoutube } from 'react-icons/fa';
import Logo from '@/assets/arionextech_Logo.png';

const columns = [
  {
    title: 'Company',
    links: [
      { name: 'About', path: '/about' },
      { name: 'Careers', path: '/careers' },
      { name: 'Blog', path: '/blog' },
      { name: 'Contact', path: '/contact' },
    ],
  },
  {
    title: 'Solutions',
    links: [
      { name: 'Products', path: '/products' },
      { name: 'Construction ERP', path: '/products' },
      { name: 'Dental Software', path: '/products' },
      { name: 'Custom Software', path: '/services/custom-software' },
    ],
  },
  {
    title: 'Services',
    links: [
      { name: 'Web Development', path: '/services/web-development' },
      { name: 'Mobile Apps', path: '/services/mobile-app-development' },
      { name: 'UI/UX Design', path: '/services/ui-ux-design' },
      { name: 'All Services', path: '/services' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { name: 'Portfolio', path: '/portfolio' },
      { name: 'Testimonials', path: '/testimonials' },
      { name: 'FAQs', path: '/faqs' },
      { name: 'Privacy', path: '/privacy-policy' },
    ],
  },
];

const socials = [
  { icon: FaLinkedin, href: 'https://www.linkedin.com/company/arionextech-software', label: 'LinkedIn' },
  { icon: FaGithub, href: 'https://github.com/arionextech', label: 'GitHub' },
  { icon: FaYoutube, href: 'https://www.youtube.com/@arionextech', label: 'YouTube' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-[1] border-t border-white/8 section-surface">
      <div className="absolute inset-0 mesh-bg opacity-50 pointer-events-none" />

      <div className="container-premium relative z-10 pt-20 pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          <div className="lg:col-span-4">
            <img src={Logo} alt="ArionexTech" className="h-10 brightness-0 invert mb-6" />
            <p className="text-slate-400 leading-relaxed mb-6 max-w-sm">
              Enterprise software studio building industry platforms — Construction ERP, Healthcare,
              EdTech, and custom systems that scale.
            </p>
            <div className="flex gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-full glass flex items-center justify-center text-slate-400 hover:text-white hover:border-indigo-500/40 transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            {columns.map((col) => (
              <div key={col.title}>
                <h4 className="font-display text-sm font-semibold text-white uppercase tracking-wider mb-4">
                  {col.title}
                </h4>
                <ul className="space-y-3">
                  {col.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        to={link.path}
                        className="text-sm text-slate-500 hover:text-indigo-300 transition-colors"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="card-premium p-8 md:p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-12">
          <div>
            <h3 className="font-display text-xl md:text-2xl font-bold text-white mb-2">
              Ready to build something exceptional?
            </h3>
            <p className="text-slate-400 text-sm md:text-base">
              From MVP to enterprise platform — we ship production-grade software.
            </p>
          </div>
          <Link to="/contact" className="btn-primary shrink-0">
            Start your project
            <ArrowRightIcon className="w-4 h-4" />
          </Link>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-white/8 text-sm text-slate-500">
          <p>© {year} ArionexTech Software. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/terms-of-service" className="hover:text-slate-300 transition-colors">
              Terms
            </Link>
            <Link to="/privacy-policy" className="hover:text-slate-300 transition-colors">
              Privacy
            </Link>
            <a href="mailto:info@arionextech.com" className="hover:text-slate-300 transition-colors">
              info@arionextech.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
