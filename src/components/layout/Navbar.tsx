import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Events', path: '/events' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Committee', path: '/committee' },
  { name: 'Vaishya Suri Sandesh', path: '/sandesh' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-xl shadow-[0_1px_20px_rgba(155,35,53,0.08)] border-b border-primary-100/50'
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary-600 to-primary-800 flex items-center justify-center shadow-lg shadow-primary-600/20 group-hover:shadow-primary-600/40 transition-shadow duration-300">
                <span className="text-white font-display text-lg font-bold leading-none">वै</span>
              </div>
              <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-accent-500 border-2 border-white" />
            </div>
            <div className="hidden sm:block">
              <p className="font-display text-[15px] font-bold text-charcoal leading-tight tracking-tight">
                वैश्य भारतीय सूरी समाज
              </p>
              <p className="text-[10px] font-medium text-slate uppercase tracking-[0.2em] mt-0.5">
                Vaishya Bhartiya Suri Samaj
              </p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative px-3.5 py-2 text-[13px] font-medium rounded-lg transition-all duration-300 ${
                    isActive
                      ? 'text-primary-700'
                      : 'text-charcoal/70 hover:text-charcoal hover:bg-primary-50/50'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute bottom-0.5 left-3.5 right-3.5 h-[2px] bg-gradient-to-r from-primary-600 to-accent-500 rounded-full"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* CTA + Mobile */}
          <div className="flex items-center gap-3">
            <Button
              asChild
              className="hidden md:inline-flex bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white rounded-full px-5 h-10 text-[13px] font-semibold shadow-lg shadow-primary-600/25 hover:shadow-primary-600/40 transition-all duration-300 gap-2 group"
            >
              <Link to="/contact">
                Join Community
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </Button>

            {/* Mobile Menu */}
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon" className="rounded-xl h-10 w-10">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] bg-white p-0 border-l-primary-100">
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                <div className="flex flex-col h-full">
                  <div className="p-6 border-b border-primary-50">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-600 to-primary-800 flex items-center justify-center">
                        <span className="text-white font-display text-base font-bold">वै</span>
                      </div>
                      <div>
                        <p className="font-display text-sm font-bold text-charcoal">वैश्य भारतीय सूरी समाज</p>
                        <p className="text-[9px] font-medium text-slate uppercase tracking-[0.15em]">Vaishya Bhartiya Suri Samaj</p>
                      </div>
                    </div>
                  </div>
                  <nav className="flex-1 p-4 space-y-1">
                    {navLinks.map((link) => {
                      const isActive = location.pathname === link.path;
                      return (
                        <Link
                          key={link.path}
                          to={link.path}
                          onClick={() => setOpen(false)}
                          className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                            isActive
                              ? 'bg-primary-50 text-primary-700 shadow-sm'
                              : 'text-charcoal/70 hover:bg-cream-100 hover:text-charcoal'
                          }`}
                        >
                          {link.name}
                        </Link>
                      );
                    })}
                  </nav>
                  <div className="p-4 border-t border-primary-50">
                    <Button
                      asChild
                      className="w-full bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-xl h-11 font-semibold"
                    >
                      <Link to="/contact" onClick={() => setOpen(false)}>
                        Join Community
                      </Link>
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
