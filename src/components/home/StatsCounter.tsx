import React from 'react';
import { motion } from 'framer-motion';
import AnimatedCounter from '@/components/shared/AnimatedCounter';
import { stats } from '@/data/stats';

export default function StatsCounter() {
  return (
    <div className="container-main relative z-20 -mt-14 mb-16 lg:-mt-20 lg:mb-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6 }}
        className="glass-card rounded-2xl py-8 px-6 lg:p-10 shadow-soft-xl"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 lg:gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div 
                key={stat.label} 
                className={`flex flex-col items-center text-center ${
                  index !== stats.length - 1 ? 'md:border-r md:border-gold-200/50' : ''
                }`}
              >
                <div className="w-12 h-12 rounded-full bg-gold-50 flex items-center justify-center mb-4 shadow-inner-soft">
                  <Icon className="w-6 h-6 text-gold-500" />
                </div>
                
                <div className="font-display text-3xl lg:text-4xl font-bold gradient-text mb-1">
                  <AnimatedCounter 
                    value={stat.value} 
                    suffix={stat.suffix} 
                    duration={2000} 
                  />
                </div>
                
                <h3 className="font-heading text-sm lg:text-base font-semibold text-charcoal-800 mb-1">
                  {stat.label}
                </h3>
                
                <p className="text-xs text-charcoal-500 font-medium">
                  {stat.description}
                </p>
              </div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
}
