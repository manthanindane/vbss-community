import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/context/LanguageContext';

export default function HeroSection() {
  const { t } = useLanguage();
  return (
    <section className="relative min-h-[100svh] flex items-center pt-24 pb-32 overflow-hidden bg-gradient-to-br from-maroon-900 via-maroon-800 to-charcoal-950 mandala-bg">
      <div className="container-main relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Text Content */}
          <div className="flex flex-col items-start text-left max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-6"
            >
              <span className="label-tag-light border border-white/20 rounded-full px-4 py-1.5 bg-white/5 backdrop-blur-sm">
                {t("Since 2012 • 4 States • 700+ Families", "2012 से • 4 राज्य • 700+ परिवार")}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6"
            >
              {t("Preserving Heritage,", "विरासत का संरक्षण,")}<br />
              {t("Building", "समुदाय का निर्माण")} <span className="gradient-text-light">{t("Community.", "")}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg lg:text-xl text-maroon-200 mb-10 font-medium leading-relaxed"
            >
              {t(
                "Vaishya Bhartiya Suri Samaj — uniting families across Bihar, Jharkhand, Odisha and West Bengal in celebration of our rich cultural legacy and shared values.",
                "वैश्य भारतीय सूड़ी समाज — हमारी समृद्ध सांस्कृतिक विरासत और साझा मूल्यों के उत्सव में बिहार, झारखंड, ओडिशा और पश्चिम बंगाल में परिवारों को एकजुट करता है।"
              )}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 mb-12 w-full sm:w-auto"
            >
              <Button size="lg" variant="secondary" className="w-full sm:w-auto" asChild>
                <Link to="/about">
                  {t("Explore Our Community", "हमारे समुदाय के बारे में जानें")}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto border-white/30 text-white hover:bg-white/10" asChild>
                <Link to="/events">
                  {t("View Events", "कार्यक्रम देखें")}
                </Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="hidden lg:flex gap-4"
            >
              <div className="glass-card-dark rounded-full px-5 py-2 flex items-center gap-3">
                <span className="accent-dot"></span>
                <span className="font-heading text-sm text-white font-medium">{t("700+ Members", "700+ सदस्य")}</span>
              </div>
              <div className="glass-card-dark rounded-full px-5 py-2 flex items-center gap-3">
                <span className="accent-dot"></span>
                <span className="font-heading text-sm text-white font-medium">{t("Est. 2012", "स्थापना 2012")}</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Image Bento Grid */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:grid grid-cols-2 grid-rows-[160px_160px_160px] gap-4 relative"
          >
            {/* Tall Image (Left) */}
            <div className="row-span-2 col-span-1 rounded-2xl overflow-hidden shadow-soft-xl group relative">
              <img 
                src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=1200&fit=crop" 
                alt="Community Gathering" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/60 to-transparent"></div>
            </div>

            {/* Top Right Image */}
            <motion.div 
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="row-span-1 col-span-1 rounded-2xl overflow-hidden shadow-soft-xl group relative"
            >
              <img 
                src="https://images.unsplash.com/photo-1553698716-17b5e1d4400e?w=800&h=400&fit=crop" 
                alt="Cultural Ritual" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </motion.div>

            {/* Middle Right Image */}
            <div className="row-span-1 col-span-1 rounded-2xl overflow-hidden shadow-soft-xl group relative">
              <img 
                src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&h=600&fit=crop" 
                alt="Youth Meet" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            {/* Bottom Wide Image */}
            <div className="row-span-1 col-span-2 rounded-2xl overflow-hidden shadow-soft-xl group relative">
              <img 
                src="https://images.unsplash.com/photo-1604423146732-9b9d4e4f4dff?w=1000&h=400&fit=crop" 
                alt="Diwali Celebration" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/60 to-transparent"></div>
            </div>

            {/* Decorative Element */}
            <div className="absolute top-[48%] left-[48%] -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-gold-500 rounded-2xl rotate-12 shadow-gold-glow flex items-center justify-center mix-blend-screen z-20">
              <span className="font-hindi text-white text-2xl rotate-[-12deg]">व</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50"
      >
        <span className="text-xs font-heading tracking-widest uppercase">Scroll</span>
        <ChevronDown className="w-5 h-5" />
      </motion.div>
    </section>
  );
}
