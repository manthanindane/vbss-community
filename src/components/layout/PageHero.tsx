import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

interface PageHeroProps {
  title: string;
  subtitle?: string;
  hindiTitle?: string;
}

export default function PageHero({ title, subtitle, hindiTitle }: PageHeroProps) {
  return (
    <div className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-gradient-to-br from-maroon-800 via-maroon-900 to-charcoal-950 mandala-bg">
      <div className="container-main relative z-10 flex flex-col items-center text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2 text-sm font-heading font-medium text-maroon-200 mb-8"
        >
          <span>Home</span>
          <ChevronRight className="w-4 h-4 text-gold-500" />
          <span className="text-white">{title}</span>
        </motion.div>

        {hindiTitle && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-4"
          >
            <span className="font-hindi text-gold-300 text-sm tracking-widest">{hindiTitle}</span>
          </motion.div>
        )}

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
        >
          {title}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="divider-gradient-sm mb-6"
        ></motion.div>

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-lg lg:text-xl text-maroon-200 max-w-2xl font-medium"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </div>
  );
}
