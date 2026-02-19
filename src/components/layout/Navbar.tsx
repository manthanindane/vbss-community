import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const links = [
  { name: 'Home',      path: '/' },
  { name: 'About',     path: '/about' },
  { name: 'Events',    path: '/events' },
  { name: 'Gallery',   path: '/gallery' },
  { name: 'Committee', path: '/committee' },
  { name: 'Sandesh',   path: '/sandesh' },
  { name: 'Contact',   path: '/contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);
  useEffect(() => setOpen(false), [pathname]);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-[#FAF7F2]/90 backdrop-blur-md border-b border-stone-200' : 'bg-transparent'
        }`}
        style={{ height: 60 }}
      >
        <div className="container-custom h-full flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div
              className="w-8 h-8 flex items-center justify-center rounded-sm"
              style={{ backgroundColor: '#9B2335' }}
            >
              <span className="text-white text-[11px] font-bold tracking-wide" style={{ fontFamily: 'DM Sans, sans-serif' }}>VB</span>
            </div>
            <div className="hidden sm:block leading-tight">
              <p className="text-[12px] font-semibold text-ink" style={{ letterSpacing: '0.01em' }}>Vaishya Bhartiya Suri Samaj</p>
              <p className="text-[10px] text-stone-400 mt-0.5" style={{ letterSpacing: '0.06em', textTransform: 'uppercase' }}>Est. 2012</p>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {links.map((l) => {
              const active = pathname === l.path;
              return (
                <Link
                  key={l.path}
                  to={l.path}
                  className={`text-[13px] font-medium transition-colors duration-200 relative pb-0.5 ${
                    active ? 'text-ink' : 'text-stone-500 hover:text-ink'
                  }`}
                  style={{ fontFamily: 'DM Sans, sans-serif' }}
                >
                  {l.name}
                  {active && (
                    <span
                      className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full"
                      style={{ backgroundColor: '#9B2335' }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Join CTA */}
          <div className="flex items-center gap-3">
            <Link
              to="/contact"
              className="hidden md:inline-flex items-center px-4 py-2 text-[13px] font-semibold text-white rounded-md transition-all duration-200 hover:opacity-90"
              style={{ backgroundColor: '#9B2335', fontFamily: 'DM Sans, sans-serif' }}
            >
              Join Samaj
            </Link>
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden p-2 rounded-md hover:bg-stone-100 transition-colors"
              aria-label="Toggle menu"
            >
              {open ? <X className="w-5 h-5 text-ink" /> : <Menu className="w-5 h-5 text-ink" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[60px] z-40 bg-[#FAF7F2] border-b border-stone-200 shadow-sm"
          >
            <nav className="container-custom py-4 flex flex-col gap-0">
              {links.map((l) => (
                <Link
                  key={l.path}
                  to={l.path}
                  className="py-3 border-b border-stone-100 text-sm font-medium text-ink last:border-0"
                  style={{ fontFamily: 'DM Sans, sans-serif' }}
                >
                  {l.name}
                </Link>
              ))}
              <Link
                to="/contact"
                className="mt-4 py-3 text-center text-sm font-semibold text-white rounded-md"
                style={{ backgroundColor: '#9B2335' }}
              >
                Join Samaj
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
