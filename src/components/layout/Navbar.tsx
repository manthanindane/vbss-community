import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
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
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [location]);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 ${
          scrolled ? 'bg-white border-b-2 border-black' : 'bg-white border-b-2 border-black'
        }`}
        style={{ height: 56 }}
      >
        <div className="container-custom h-full flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-8 h-8 bg-black flex items-center justify-center">
              <span className="text-white font-display font-black text-sm tracking-tight">VB</span>
            </div>
            <div className="hidden sm:block">
              <p className="font-mono-label text-black leading-none" style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.62rem', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                Vaishya Bhartiya Suri Samaj
              </p>
              <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.55rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#888', marginTop: 2 }}>
                Est. 2012 · Mumbai
              </p>
            </div>
          </Link>

          {/* Center — section metadata (desktop) */}
          <div className="hidden lg:flex items-center gap-1" style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.6rem', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
            {['Education', 'Health', 'Community', 'Welfare'].map((tag) => (
              <span key={tag} className="px-2 py-1 border border-black text-black">{tag}</span>
            ))}
          </div>

          {/* Right nav */}
          <nav className="hidden lg:flex items-center gap-0">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3 h-14 flex items-center border-l border-black text-xs font-bold tracking-widest uppercase transition-colors duration-100 ${
                    isActive
                      ? 'bg-black text-white'
                      : 'bg-white text-black hover:bg-black hover:text-white'
                  }`}
                  style={{ height: 56, fontFamily: 'Barlow Condensed, sans-serif', fontSize: '0.75rem', letterSpacing: '0.1em' }}
                >
                  {link.name}
                </Link>
              );
            })}
            <Link
              to="/contact"
              className="px-5 h-14 flex items-center bg-red-brand text-white border-l-2 border-black text-xs font-black tracking-widest uppercase transition-colors duration-100 hover:bg-black"
              style={{ height: 56, fontFamily: 'Barlow Condensed, sans-serif', fontSize: '0.75rem', letterSpacing: '0.12em', backgroundColor: '#E60023' }}
            >
              JOIN
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden flex flex-col justify-center items-center gap-1.5 w-10 h-10 border-2 border-black"
            aria-label="Toggle menu"
          >
            <span className={`block w-5 h-0.5 bg-black transition-all duration-150 ${ menuOpen ? 'rotate-45 translate-y-2' : '' }`} />
            <span className={`block w-5 h-0.5 bg-black transition-all duration-150 ${ menuOpen ? 'opacity-0' : '' }`} />
            <span className={`block w-5 h-0.5 bg-black transition-all duration-150 ${ menuOpen ? '-rotate-45 -translate-y-2' : '' }`} />
          </button>
        </div>
      </header>

      {/* Mobile full-screen menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 z-40 bg-black flex flex-col pt-14"
          >
            <nav className="flex flex-col">
              {navLinks.map((link, i) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="px-8 py-6 text-white border-b border-white/10 hover:bg-white hover:text-black transition-colors duration-100"
                  style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: 'clamp(2rem,8vw,3.5rem)', textTransform: 'uppercase', letterSpacing: '-0.02em', lineHeight: 1 }}
                >
                  <span className="font-mono-label text-white/30 mr-4" style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.65rem', letterSpacing: '0.1em' }}>0{i + 1}</span>
                  {link.name}
                </Link>
              ))}
              <Link
                to="/contact"
                className="px-8 py-6 text-black hover:text-white transition-colors duration-100"
                style={{ backgroundColor: '#E60023', fontFamily: 'Barlow Condensed, sans-serif', fontSize: 'clamp(2rem,8vw,3.5rem)', textTransform: 'uppercase', letterSpacing: '-0.02em', lineHeight: 1 }}
              >
                JOIN THE SAMAJ
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
