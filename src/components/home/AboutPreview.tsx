import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import SectionHeading from '@/components/shared/SectionHeading';
import { programs } from '@/data/programs';

export default function AboutPreview() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="section-padding bg-cream-50 relative">
      <div className="container-main">
        <SectionHeading 
          sectionNumber="01" 
          hindiTitle="हमारे बारे में" 
          title="Dedicated to Our Community"
          subtitle="Preserving our rich cultural heritage while empowering the next generation"
        />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-display text-2xl lg:text-3xl text-charcoal-800 leading-relaxed mb-6 font-semibold">
              "We believe in the power of community to transform lives and preserve our shared cultural identity."
            </h3>
            <div className="w-16 h-1 bg-gold-400 rounded-full"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col items-start"
          >
            <p className="text-charcoal-600 text-lg leading-relaxed mb-8">
              Since our inception, the Vaishya Bhartiya Suri Samaj has been a unifying force for families across India. We are committed to fostering educational excellence, ensuring healthcare access, empowering women, and celebrating the traditions that define us.
            </p>
            <Link 
              to="/about" 
              className="inline-flex items-center font-heading font-bold text-gold-600 hover:text-gold-700 transition-colors group text-lg"
            >
              Learn More About Us
              <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {programs.map((program) => {
            const Icon = program.icon;
            return (
              <motion.div 
                key={program.title} 
                variants={itemVariants}
                className="card-surface p-6 group flex flex-col h-full"
              >
                <div className="w-12 h-12 rounded-xl bg-maroon-50 flex items-center justify-center mb-6 group-hover:bg-maroon-100 transition-colors">
                  <Icon className="w-6 h-6 text-maroon-700" />
                </div>
                
                <h4 className="font-heading text-lg font-bold text-charcoal-900 mb-3">
                  {program.title}
                </h4>
                
                <p className="text-sm text-charcoal-600 mb-6 flex-grow">
                  {program.description}
                </p>
                
                <div className="pt-4 border-t border-cream-200 mt-auto">
                  <span className="font-display text-2xl font-bold gradient-text block leading-none mb-1">
                    {program.stat}
                  </span>
                  <span className="text-xs font-semibold text-charcoal-400 uppercase tracking-wider">
                    {program.statLabel}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
