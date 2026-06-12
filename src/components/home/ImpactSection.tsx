import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '@/components/shared/SectionHeading';
import AnimatedCounter from '@/components/shared/AnimatedCounter';
import { impactStats } from '@/data/stats';

export default function ImpactSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.6, type: "spring" as const, bounce: 0.4 } }
  };

  return (
    <section className="section-padding bg-gradient-to-br from-maroon-900 via-maroon-800 to-charcoal-950 mandala-bg relative overflow-hidden">
      <div className="container-main relative z-10">
        <SectionHeading 
          sectionNumber="04" 
          hindiTitle="हमारी उपलब्धियाँ" 
          title="Community Impact"
          subtitle="Making a real difference in the lives of our community members through sustained welfare initiatives"
          light={true}
        />

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mt-16"
        >
          {impactStats.map((stat, index) => (
            <motion.div 
              key={stat.label} 
              variants={itemVariants}
              className="flex flex-col items-center text-center relative"
            >
              <div className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold gradient-text-light mb-4">
                <AnimatedCounter 
                  value={stat.value} 
                  suffix={stat.suffix} 
                  duration={2500 + (index * 200)} 
                />
              </div>
              
              <h3 className="font-heading text-base lg:text-lg font-semibold text-white mb-2">
                {stat.label}
              </h3>
              
              <p className="text-sm text-maroon-200">
                {stat.description}
              </p>

              {/* Decorative line between rows on mobile */}
              {index % 2 === 0 && index < impactStats.length - 1 && (
                <div className="hidden sm:block lg:hidden absolute -right-4 top-1/2 -translate-y-1/2 w-px h-16 bg-white/10" />
              )}
              
              {/* Decorative lines between cols on desktop */}
              {index < impactStats.length - 1 && (
                <div className="hidden lg:block absolute -right-6 top-1/2 -translate-y-1/2 w-px h-24 bg-white/10" />
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
