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
  const [open, setOpen]       = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname }           = useLocation();

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
          scrolled
            ? 'bg-[#FAFAF7]/92 backdrop-blur-md border-b border-[#E8E8E2]'
            : 'bg-transparent'
        }`}
        style={{ height: 62 }}
      >
        <div className="container-custom h-full flex items-center justify-between">

          {/* ── Logo ── */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
              style={{ background: 'linear-gradient(135deg, #1B4D3E 0%, #2E7D5E 100%)' }}
            >
              <span
                className="text-white font-bold"
                style={{ fontSize: '11px', letterSpacing: '0.04em', fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                VS
              </span>
            </div>
            <div className="hidden sm:block">
              <p
                className="text-[13px] font-semibold text-ink leading-none"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", letterSpacing: '-0.01em' }}
              >
                Vaishya Suri Samaj
              </p>
              <p
                className="text-[10px] mt-0.5"
                style={{
                  fontFamily: "'Satoshi', sans-serif",
                  letterSpacing: '0.09em',
                  textTransform: 'uppercase',
                  color: '#9CA3AF',
                }}
              >
                VBSS · Est. 2012
              </p>
            </div>
          </Link>

          {/* ── Desktop nav ── */}
          <nav className="hidden lg:flex items-center gap-1">
            {links.map((l) => {
              const active = pathname === l.path;
              return (
                <Link
                  key={l.path}
                  to={l.path}
                  className={`px-3.5 py-2 rounded-lg text-[13px] font-medium transition-all duration-200 ${
                    active
                      ? 'bg-teal-50 text-teal-700'
                      : 'text-ink/60 hover:text-ink hover:bg-black/[0.04]'
                  }`}
                  style={{ fontFamily: "'Satoshi', sans-serif" }}
                >
                  {l.name}
                </Link>
              );
            })}
          </nav>

          {/* ── CTA + hamburger ── */}
          <div className="flex items-center gap-2">
            <Link
              to="/contact"
              className="hidden md:inline-flex items-center px-4 py-2 text-[13px] font-semibold text-white rounded-lg transition-all duration-200 hover:opacity-90"
              style={{
                background: 'linear-gradient(135deg, #1B4D3E 0%, #2E7D5E 100%)',
                fontFamily: "'Plus Jakarta Sans', sans-serif",
              }}
            >
              Join Samaj
            </Link>
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden p-2 rounded-lg hover:bg-black/[0.05] transition-colors"
              aria-label="Toggle menu"
            >
              {open
                ? <X     className="w-5 h-5 text-ink" />
                : <Menu  className="w-5 h-5 text-ink" />}
            </button>
          </div>
        </div>
      </header>

      {/* ── Mobile overlay ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.18 }}
            className="fixed inset-x-0 top-[62px] z-40 bg-[#FAFAF7] border-b border-[#E8E8E2] shadow-sm"
          >
            <nav className="container-custom py-4 flex flex-col">
              {links.map((l) => (
                <Link
                  key={l.path}
                  to={l.path}
                  className="py-3 border-b border-[#F0F0EC] text-[14px] font-medium text-ink last:border-0"
                  style={{ fontFamily: "'Satoshi', sans-serif" }}
                >
                  {l.name}
                </Link>
              ))}
              <Link
                to="/contact"
                className="mt-4 py-3 text-center text-sm font-semibold text-white rounded-xl"
                style={{ background: 'linear-gradient(135deg, #1B4D3E 0%, #2E7D5E 100%)', fontFamily: "'Plus Jakarta Sans', sans-serif" }}
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
