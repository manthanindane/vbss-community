import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Events', path: '/events' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Committee', path: '/committee' },
    { name: 'Sandesh', path: '/sandesh' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isScrolled
            ? 'bg-white/90 backdrop-blur-xl border-b border-cream-300 shadow-soft py-3'
            : 'bg-transparent py-5'
        )}
      >
        <div className="container-main flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="bg-gradient-to-br from-maroon-700 to-maroon-800 rounded-lg p-2 shadow-warm group-hover:shadow-warm-lg transition-shadow">
              <span className="font-hindi text-xl text-gold-300 block leading-none">व</span>
            </div>
            <div className="flex flex-col">
              <span className={cn(
                "font-display font-bold text-xl leading-none tracking-tight transition-colors",
                isScrolled ? "text-charcoal-900" : "text-white"
              )}>
                VBSS
              </span>
              <span className={cn(
                "font-hindi text-xs tracking-wider transition-colors",
                isScrolled ? "text-charcoal-500" : "text-white/80"
              )}>
                सूरी समाज
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            <ul className="flex items-center gap-6">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <NavLink
                    to={link.path}
                    className={({ isActive }) => cn(
                      "font-heading text-sm font-semibold transition-colors relative py-2",
                      isActive
                        ? (isScrolled ? "text-gold-600" : "text-gold-300")
                        : (isScrolled ? "text-charcoal-600 hover:text-gold-600" : "text-white/80 hover:text-white")
                    )}
                  >
                    {({ isActive }) => (
                      <>
                        {link.name}
                        {isActive && (
                          <motion.div
                            layoutId="navbar-indicator"
                            className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold-500 rounded-full"
                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                          />
                        )}
                      </>
                    )}
                  </NavLink>
                </li>
              ))}
            </ul>

            <Button
              variant={isScrolled ? "default" : "secondary"}
              className={cn(!isScrolled && "bg-white text-maroon-900 hover:bg-white/90")}
              asChild
            >
              <Link to="/contact">
                Join Community
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-500"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu className={cn("w-6 h-6", isScrolled ? "text-charcoal-900" : "text-white")} />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-charcoal-950/60 backdrop-blur-sm z-50 lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "spring", bounce: 0, duration: 0.4 }}
              className="fixed inset-y-0 right-0 w-[80%] max-w-sm bg-white shadow-soft-xl z-50 lg:hidden flex flex-col"
            >
              <div className="flex items-center justify-between p-6 border-b border-cream-200">
                <Link to="/" className="flex items-center gap-3" onClick={() => setIsMobileMenuOpen(false)}>
                  <div className="bg-gradient-to-br from-maroon-700 to-maroon-800 rounded-lg p-2">
                    <span className="font-hindi text-lg text-gold-300 block leading-none">व</span>
                  </div>
                  <span className="font-display font-bold text-xl text-charcoal-900">VBSS</span>
                </Link>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 rounded-full bg-cream-100 text-charcoal-600 hover:bg-cream-200 transition-colors focus:outline-none focus:ring-2 focus:ring-gold-500"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto py-6 px-6">
                <ul className="flex flex-col gap-4">
                  {navLinks.map((link, i) => (
                    <motion.li
                      key={link.path}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 + 0.1 }}
                    >
                      <NavLink
                        to={link.path}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={({ isActive }) => cn(
                          "block py-2 font-heading text-lg font-semibold transition-colors border-b border-cream-100",
                          isActive ? "text-gold-600 border-gold-200" : "text-charcoal-700"
                        )}
                      >
                        {link.name}
                      </NavLink>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div className="p-6 border-t border-cream-200">
                <Button className="w-full" size="lg" asChild onClick={() => setIsMobileMenuOpen(false)}>
                  <Link to="/contact">
                    Join Community
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
