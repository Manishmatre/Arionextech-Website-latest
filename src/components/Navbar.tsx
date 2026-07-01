import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bars3Icon, XMarkIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import { Link, useLocation } from 'react-router-dom';
import Logo from '@/assets/arionextech_Logo.png';

const navLinks = [
  { name: 'Products', path: '/products' },
  { name: 'Services', path: '/services' },
  { name: 'Work', path: '/portfolio' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[100] pointer-events-none transition-[padding] duration-500 ease-out ${
        scrolled ? 'pt-2 md:pt-3' : 'pt-4 md:pt-5'
      }`}
    >
      <motion.div
        className="container-premium pointer-events-auto"
        initial={false}
        animate={{
          maxWidth: scrolled ? '64rem' : '80rem',
        }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.nav
          initial={false}
          animate={{
            paddingTop: scrolled ? 10 : 14,
            paddingBottom: scrolled ? 10 : 14,
          }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className={`flex items-center justify-between gap-3 px-4 md:px-6 rounded-2xl border transition-colors duration-500 ${
            scrolled
              ? 'glass-strong shadow-2xl shadow-black/50 border-white/12'
              : 'glass border-white/8'
          }`}
        >
          <Link to="/" className="flex items-center shrink-0 min-w-0">
            <motion.img
              src={Logo}
              alt="ArionexTech"
              initial={false}
              animate={{ height: scrolled ? 32 : 40 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="w-auto brightness-0 invert"
              loading="eager"
            />
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-colors duration-300 ${
                  location.pathname === link.path
                    ? 'text-white bg-white/10'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <Link to="/contact" className="btn-primary text-sm !py-2.5 !px-5">
              Book a call
              <ArrowRightIcon className="w-4 h-4" />
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-slate-300 hover:text-white rounded-lg pointer-events-auto"
            aria-label="Toggle menu"
          >
            {isOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
          </button>
        </motion.nav>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: 0.22 }}
              className="lg:hidden mt-2 glass-strong rounded-2xl overflow-hidden w-full border border-white/10 pointer-events-auto"
            >
              <div className="p-3 flex flex-col gap-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`px-4 py-3 rounded-xl text-sm font-medium ${
                      location.pathname === link.path
                        ? 'bg-indigo-500/20 text-white'
                        : 'text-slate-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
                <Link to="/contact" className="btn-primary mt-2 justify-center">
                  Book a call
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </header>
  );
}
