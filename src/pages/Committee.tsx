import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Phone } from 'lucide-react';
import PageTransition from '@/components/shared/PageTransition';
import PageHero from '@/components/layout/PageHero';
import SectionHeading from '@/components/shared/SectionHeading';
import MemberCard from '@/components/shared/MemberCard';
import { members } from '@/data/members';

export default function Committee() {
  const president = members.find(m => m.designation === 'President') || members[0];
  const committeeMembers = members.filter(m => m.designation !== 'President');

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
    <PageTransition>
      <PageHero 
        title="Our Leadership" 
        hindiTitle="हमारा नेतृत्व"
        subtitle="Meet the dedicated leaders serving our community with vision and integrity"
      />

      <div id="main-content">
        {/* President's Message Section */}
        <section className="section-padding bg-cream-50 relative overflow-hidden">
          {/* Decorative mandala bg element */}
          <div className="absolute -right-64 -top-64 w-[600px] h-[600px] opacity-[0.03] pointer-events-none">
            <svg viewBox="0 0 400 400" className="w-full h-full text-charcoal-900 fill-current">
              <circle cx="200" cy="200" r="180" fill="none" stroke="currentColor" strokeWidth="2" />
              <path d="M200 20 L200 380 M20 200 L380 200" stroke="currentColor" strokeWidth="2" />
            </svg>
          </div>

          <div className="container-main relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="card-surface p-8 lg:p-14"
            >
              <div className="grid lg:grid-cols-[240px_1fr] gap-10 lg:gap-16 items-start">
                <div className="flex justify-center lg:justify-start">
                  <div className="w-48 h-48 lg:w-56 lg:h-56 rounded-2xl overflow-hidden ring-4 ring-gold-300/40 shadow-soft-xl rotate-[-2deg] transition-transform hover:rotate-0 duration-500">
                    <img 
                      src={president.image} 
                      alt={president.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                <div className="text-center lg:text-left flex flex-col items-center lg:items-start">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="w-10 h-[1px] bg-gold-400"></span>
                    <span className="font-heading font-bold text-gold-600 tracking-widest uppercase text-sm">
                      President's Message
                    </span>
                  </div>
                  
                  <h2 className="font-display text-4xl lg:text-5xl font-bold text-charcoal-900 mb-2">
                    {president.name}
                  </h2>
                  <p className="font-heading text-lg text-charcoal-500 mb-8">
                    President, Vaishya Bhartiya Suri Samaj
                  </p>
                  
                  <div className="relative mb-8">
                    <Quote className="absolute -top-4 -left-6 w-10 h-10 text-cream-200 -z-10 rotate-180" />
                    <blockquote className="text-xl lg:text-2xl text-charcoal-700 italic leading-relaxed font-medium">
                      "{president.message}"
                    </blockquote>
                  </div>

                  {president.phone && (
                    <div className="inline-flex items-center gap-2 text-sm text-charcoal-600 bg-cream-100/50 py-2 px-4 rounded-full border border-cream-200">
                      <Phone className="w-4 h-4 text-gold-600" />
                      <span>{president.phone}</span>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Executive Committee Grid */}
        <section className="section-padding bg-cream-100/50">
          <div className="container-main">
            <SectionHeading 
              title="Executive Committee" 
              hindiTitle="कार्यकारिणी समिति" 
            />
            
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
            >
              {committeeMembers.map((member) => (
                <motion.div key={member.id} variants={itemVariants} className="h-full">
                  <MemberCard member={member} />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
