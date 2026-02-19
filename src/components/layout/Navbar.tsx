import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Home',      path: '/' },
  { name: 'About',     path: '/about' },
  { name: 'Events',    path: '/events' },
  { name: 'Gallery',   path: '/gallery' },
  { name: 'Committee', path: '/committee' },
  { name: 'Sandesh',   path: '/sandesh' },
  { name: 'Contact',   path: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/80 backdrop-blur-xl shadow-[0_1px_0_rgba(0,0,0,0.06)]'
            : 'bg-transparent'
        }`}
      >
        <div className="container-custom">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group shrink-0">
              <div className="relative w-9 h-9 rounded-xl bg-gradient-to-br from-maroon-600 to-maroon-800 flex items-center justify-center shadow-md">
                <span className="text-white font-bold text-base leading-none">वै</span>
                <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-gold-500 border-2 border-white" />
              </div>
              <div className="hidden sm:block leading-tight">
                <p className="text-[13px] font-bold text-ink tracking-tight">वैश्य भारतीय सूरी समाज</p>
                <p className="text-[10px] font-medium text-body uppercase tracking-[0.18em] mt-0">Vaishya Bhartiya Suri Samaj</p>
              </div>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-0.5">
              {navLinks.map((link) => {
                const active = pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`relative px-3 py-2 text-[13px] font-medium rounded-lg transition-colors duration-200 ${
                      active ? 'text-maroon-700' : 'text-body hover:text-ink hover:bg-black/[0.03]'
                    }`}
                  >
                    {link.name}
                    {active && (
                      <motion.span
                        layoutId="nav-indicator"
                        className="absolute bottom-0.5 left-3 right-3 h-[2px] rounded-full bg-gradient-to-r from-maroon-600 to-gold-500"
                        transition={{ type: 'spring', stiffness: 500, damping: 38 }}
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* CTA + burger */}
            <div className="flex items-center gap-2">
              <Link
                to="/contact"
                className="hidden md:inline-flex items-center gap-1.5 px-4 h-9 rounded-lg bg-maroon-600 hover:bg-maroon-700 text-white text-[13px] font-semibold transition-all duration-200 hover:shadow-md hover:shadow-maroon-600/20 group"
              >
                Join Community
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <button
                onClick={() => setOpen(!open)}
                className="lg:hidden w-9 h-9 rounded-lg flex items-center justify-center text-body hover:bg-black/[0.05] hover:text-ink transition-colors"
                aria-label="Menu"
              >
                {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm lg:hidden"
              onClick={() => setOpen(false)}
            />
            <motion.aside
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 400, damping: 40 }}
              className="fixed right-0 top-0 bottom-0 z-50 w-72 bg-white shadow-2xl lg:hidden flex flex-col"
            >
              <div className="flex items-center justify-between px-5 h-16 border-b border-gray-100">
                <p className="font-bold text-sm text-ink">वैश्य सूरी समाज</p>
                <button onClick={() => setOpen(false)} className="w-8 h-8 rounded-lg flex items-center justify-center text-body hover:bg-gray-100">
                  <X className="w-4 h-4" />
                </button>
              </div>
              <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-0.5">
                {navLinks.map((link) => {
                  const active = pathname === link.path;
                  return (
                    <Link
                      key={link.path}
                      to={link.path}
                      className={`flex items-center px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                        active ? 'bg-maroon-50 text-maroon-700' : 'text-body hover:bg-gray-50 hover:text-ink'
                      }`}
                    >
                      {link.name}
                    </Link>
                  );
                })}
              </nav>
              <div className="p-4 border-t border-gray-100">
                <Link
                  to="/contact"
                  className="flex items-center justify-center gap-2 h-11 rounded-xl bg-maroon-600 hover:bg-maroon-700 text-white text-sm font-semibold transition-colors"
                >
                  Join Community <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
