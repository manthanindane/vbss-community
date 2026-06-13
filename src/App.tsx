import { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import BackToTop from '@/components/shared/BackToTop';

// Lazy load all pages for better performance
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Events = lazy(() => import('./pages/Events'));
const Gallery = lazy(() => import('./pages/Gallery'));
const Committee = lazy(() => import('./pages/Committee'));
const Sandesh = lazy(() => import('./pages/Sandesh'));
const Contact = lazy(() => import('./pages/Contact'));
const NotFound = lazy(() => import('./pages/NotFound'));

// New Pages
const OfficeBearers = lazy(() => import('./pages/people/OfficeBearers'));
const WomensCell = lazy(() => import('./pages/people/WomensCell'));
const FounderMembers = lazy(() => import('./pages/people/FounderMembers'));
const Directory = lazy(() => import('./pages/people/Directory'));
const BecomeMember = lazy(() => import('./pages/BecomeMember'));
const Advertise = lazy(() => import('./pages/Advertise'));

import { LanguageProvider } from '@/context/LanguageContext';

// Component to scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant', // instant scroll for route changes
    });
  }, [pathname]);

  return null;
}

// Global loading fallback
function LoadingFallback() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-cream-50">
      <div className="flex flex-col items-center gap-4">
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-maroon-700 to-maroon-900 flex items-center justify-center animate-pulse">
          <span className="font-hindi text-2xl text-gold-300">व</span>
        </div>
        <div className="flex gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-maroon-300 animate-bounce" style={{ animationDelay: '0ms' }}></span>
          <span className="w-2.5 h-2.5 rounded-full bg-maroon-400 animate-bounce" style={{ animationDelay: '150ms' }}></span>
          <span className="w-2.5 h-2.5 rounded-full bg-maroon-500 animate-bounce" style={{ animationDelay: '300ms' }}></span>
        </div>
      </div>
    </div>
  );
}

// Wrapper for AnimatePresence
function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/committee" element={<Committee />} />
        <Route path="/sandesh" element={<Sandesh />} />
        <Route path="/contact" element={<Contact />} />
        
        {/* New Routes */}
        <Route path="/people/office-bearers" element={<OfficeBearers />} />
        <Route path="/people/womens-cell" element={<WomensCell />} />
        <Route path="/people/founder-members" element={<FounderMembers />} />
        <Route path="/directory" element={<Directory />} />
        <Route path="/join" element={<BecomeMember />} />
        <Route path="/advertise" element={<Advertise />} />
        
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col font-sans text-charcoal-900 bg-cream-50 selection:bg-maroon-200 selection:text-maroon-900">
        <Navbar />
        
        <main className="flex-grow flex flex-col">
          <Suspense fallback={<LoadingFallback />}>
            <AnimatedRoutes />
          </Suspense>
        </main>
        
        <Footer />
        <BackToTop />
      </div>
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;
