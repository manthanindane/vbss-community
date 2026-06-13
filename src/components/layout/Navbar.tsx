import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight, ChevronDown, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/context/LanguageContext';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobilePeopleOpen, setMobilePeopleOpen] = useState(false);
  const location = useLocation();
  const { language, toggleLanguage, t } = useLanguage();

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
    setMobilePeopleOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: t('Home', 'होम'), path: '/' },
    { name: t('About', 'हमारे बारे में'), path: '/about' },
    { name: t('Events', 'कार्यक्रम'), path: '/events' },
    { name: t('Gallery', 'गैलरी'), path: '/gallery' },
    { name: t('Sandesh', 'संदेश'), path: '/sandesh' },
    { name: t('Contact', 'संपर्क'), path: '/contact' },
  ];

  const peopleLinks = [
    { name: t('Office Bearers', 'पदाधिकारी'), path: '/people/office-bearers' },
    { name: t('Founder Members', 'संस्थापक सदस्य'), path: '/people/founder-members' },
    { name: t('Women\'s Cell', 'महिला प्रकोष्ठ'), path: '/people/womens-cell' },
    { name: t('Member Directory', 'सदस्य निर्देशिका'), path: '/directory' },
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
            <img src="/logo.png" alt="VBSS Logo" className="h-12 w-auto object-contain transition-transform group-hover:scale-105" />
            <div className="flex flex-col hidden sm:flex">
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
                सूड़ी समाज
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            <ul className="flex items-center gap-4 xl:gap-6">
              {navLinks.slice(0, 4).map((link) => (
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

              {/* People Dropdown */}
              <li className="relative group">
                <button className={cn(
                  "flex items-center gap-1 font-heading text-sm font-semibold transition-colors py-2",
                  location.pathname.includes('/people') || location.pathname.includes('/directory')
                    ? (isScrolled ? "text-gold-600" : "text-gold-300")
                    : (isScrolled ? "text-charcoal-600 group-hover:text-gold-600" : "text-white/80 group-hover:text-white")
                )}>
                  {t('People', 'लोग')}
                  <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                </button>
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 z-50">
                  <div className="bg-white rounded-xl shadow-soft-xl border border-cream-200 py-2 w-48 overflow-hidden">
                    {peopleLinks.map(link => (
                      <Link 
                        key={link.path} 
                        to={link.path}
                        className="block px-4 py-2 text-sm text-charcoal-600 hover:bg-cream-50 hover:text-maroon-700 transition-colors"
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </li>

              {navLinks.slice(4).map((link) => (
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
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-3 ml-2 border-l border-white/20 pl-4">
              <button 
                onClick={toggleLanguage}
                className={cn(
                  "flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold transition-all",
                  isScrolled 
                    ? "bg-cream-100 text-maroon-800 hover:bg-cream-200" 
                    : "bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm"
                )}
              >
                <Globe className="w-3.5 h-3.5" />
                {language === 'en' ? 'हिन्दी' : 'EN'}
              </button>

              <Button
                variant={isScrolled ? "default" : "secondary"}
                className={cn(!isScrolled && "bg-white text-maroon-900 hover:bg-white/90")}
                asChild
              >
                <Link to="/join">
                  {t('Join Us', 'सदस्य बनें')}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </nav>

          {/* Mobile Menu Toggle & Lang (Mobile) */}
          <div className="flex items-center gap-3 lg:hidden">
            <button 
              onClick={toggleLanguage}
              className={cn(
                "flex items-center gap-1.5 px-2.5 py-1.5 rounded-full text-xs font-bold transition-all",
                isScrolled 
                  ? "bg-cream-100 text-maroon-800" 
                  : "bg-white/10 text-white backdrop-blur-sm"
              )}
            >
              <Globe className="w-3.5 h-3.5" />
              {language === 'en' ? 'HI' : 'EN'}
            </button>
            <button
              className="p-2 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-500"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu className={cn("w-6 h-6", isScrolled ? "text-charcoal-900" : "text-white")} />
            </button>
          </div>
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
                  <img src="/logo.png" alt="VBSS Logo" className="h-10 w-auto object-contain" />
                  <span className="font-display font-bold text-xl text-charcoal-900">VBSS</span>
                </Link>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 rounded-full bg-cream-100 text-charcoal-600 hover:bg-cream-200 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto py-6 px-6">
                <ul className="flex flex-col gap-2">
                  {navLinks.slice(0, 4).map((link, i) => (
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
                          "block py-3 font-heading text-lg font-semibold transition-colors border-b border-cream-100",
                          isActive ? "text-gold-600 border-gold-200" : "text-charcoal-700"
                        )}
                      >
                        {link.name}
                      </NavLink>
                    </motion.li>
                  ))}

                  {/* Mobile People Accordion */}
                  <motion.li
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    className="border-b border-cream-100"
                  >
                    <button 
                      onClick={() => setMobilePeopleOpen(!mobilePeopleOpen)}
                      className="flex items-center justify-between w-full py-3 font-heading text-lg font-semibold text-charcoal-700"
                    >
                      {t('People', 'लोग')}
                      <ChevronDown className={cn("w-5 h-5 transition-transform", mobilePeopleOpen && "rotate-180")} />
                    </button>
                    <AnimatePresence>
                      {mobilePeopleOpen && (
                        <motion.ul 
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden flex flex-col gap-2 pl-4 pb-3"
                        >
                          {peopleLinks.map(link => (
                            <li key={link.path}>
                              <Link 
                                to={link.path} 
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="block py-2 text-charcoal-600"
                              >
                                {link.name}
                              </Link>
                            </li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </motion.li>

                  {navLinks.slice(4).map((link, i) => (
                    <motion.li
                      key={link.path}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 + 0.4 }}
                    >
                      <NavLink
                        to={link.path}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={({ isActive }) => cn(
                          "block py-3 font-heading text-lg font-semibold transition-colors border-b border-cream-100",
                          isActive ? "text-gold-600 border-gold-200" : "text-charcoal-700"
                        )}
                      >
                        {link.name}
                      </NavLink>
                    </motion.li>
                  ))}
                  
                  <motion.li
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    <Link
                      to="/advertise"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block py-3 font-heading text-lg font-semibold text-charcoal-700 transition-colors border-b border-cream-100"
                    >
                      {t('Advertise With Us', 'हमारे साथ विज्ञापन करें')}
                    </Link>
                  </motion.li>
                </ul>
              </div>

              <div className="p-6 border-t border-cream-200 bg-cream-50">
                <Button className="w-full h-12" size="lg" asChild onClick={() => setIsMobileMenuOpen(false)}>
                  <Link to="/join">
                    {t('Join Community', 'सदस्य बनें')}
                    <ArrowRight className="w-5 h-5 ml-2" />
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
