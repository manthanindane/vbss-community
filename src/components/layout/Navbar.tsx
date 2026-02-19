import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet';
import { motion } from 'framer-motion';

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
  const location = useLocation();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 backdrop-blur-xl border-b border-black/[0.06] shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-lg bg-maroon-800 flex items-center justify-center shrink-0">
              <span className="text-white text-xs font-bold tracking-tight">VB</span>
            </div>
            <div className="hidden sm:block">
              <p className="text-[13px] font-bold text-ink leading-none tracking-tight">Vaishya Bhartiya Suri Samaj</p>
              <p className="text-[10px] text-gray-400 mt-0.5 font-medium">GBBSD 2448/2012 • F-49747 MUM</p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative px-3.5 py-2 text-[13px] font-medium rounded-lg transition-all duration-200 ${
                    isActive
                      ? 'text-maroon-700 bg-maroon-50'
                      : 'text-gray-500 hover:text-ink hover:bg-gray-50'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-maroon-600"
                      transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* CTA + Mobile */}
          <div className="flex items-center gap-2">
            <Button
              asChild
              className="hidden md:inline-flex bg-maroon-800 hover:bg-maroon-900 text-white rounded-lg px-4 h-9 text-[13px] font-semibold gap-1.5 transition-all group"
            >
              <Link to="/contact">
                Join Community
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </Button>

            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon" className="rounded-lg h-9 w-9">
                  <Menu className="h-4 w-4" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-72 bg-white p-0">
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                <div className="flex flex-col h-full">
                  <div className="p-5 border-b border-gray-100">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-maroon-800 flex items-center justify-center">
                        <span className="text-white text-xs font-bold">VB</span>
                      </div>
                      <p className="text-sm font-bold text-ink">Vaishya Bhartiya Suri Samaj</p>
                    </div>
                  </div>
                  <nav className="flex-1 p-4 space-y-0.5">
                    {navLinks.map((link) => {
                      const isActive = location.pathname === link.path;
                      return (
                        <Link
                          key={link.path}
                          to={link.path}
                          onClick={() => setOpen(false)}
                          className={`flex items-center px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                            isActive ? 'bg-maroon-50 text-maroon-700' : 'text-gray-600 hover:bg-gray-50 hover:text-ink'
                          }`}
                        >
                          {link.name}
                        </Link>
                      );
                    })}
                  </nav>
                  <div className="p-4 border-t border-gray-100">
                    <Button asChild className="w-full bg-maroon-800 hover:bg-maroon-900 text-white rounded-lg h-10 font-semibold">
                      <Link to="/contact" onClick={() => setOpen(false)}>Join Community</Link>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
