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
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-4 md:pt-5">
      <div
        className={`container-premium transition-all duration-500 ${
          scrolled ? 'max-w-5xl' : 'max-w-6xl'
        }`}
      >
        <nav
          className={`flex items-center justify-between px-4 md:px-6 py-3 md:py-3.5 rounded-2xl transition-all duration-500 ${
            scrolled ? 'glass-strong shadow-2xl shadow-black/40' : 'glass'
          }`}
        >
          <Link to="/" className="flex items-center shrink-0">
            <img
              src={Logo}
              alt="ArionexTech"
              className="h-9 md:h-10 w-auto brightness-0 invert"
              loading="eager"
            />
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
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
            className="lg:hidden p-2 text-slate-300 hover:text-white rounded-lg"
            aria-label="Toggle menu"
          >
            {isOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
          </button>
        </nav>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              className="lg:hidden mt-2 glass-strong rounded-2xl overflow-hidden"
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
      </div>
    </header>
  );
}
