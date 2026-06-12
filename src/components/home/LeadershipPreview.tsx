import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SectionHeading from '@/components/shared/SectionHeading';
import MemberCard from '@/components/shared/MemberCard';
import { members } from '@/data/members';

export default function LeadershipPreview() {
  const president = members.find(m => m.designation === 'President') || members[0];
  const keyMembers = members.filter(m => m.designation !== 'President').slice(0, 4);

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
    <section className="section-padding bg-cream-100/50">
      <div className="container-main">
        <SectionHeading 
          sectionNumber="03" 
          hindiTitle="हमारा नेतृत्व" 
          title="Our Leadership"
          subtitle="Guided by experience, driven by a commitment to community welfare"
        />

        {/* Featured President Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="card-surface p-8 lg:p-12 mb-12"
        >
          <div className="grid lg:grid-cols-[auto_1fr] gap-8 lg:gap-12 items-center">
            <div className="flex justify-center lg:justify-start">
              <div className="relative">
                <div className="w-32 h-32 lg:w-48 lg:h-48 rounded-full overflow-hidden ring-4 ring-gold-300/40 shadow-soft-xl">
                  <img 
                    src={president.image} 
                    alt={president.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-soft text-gold-500">
                  <Quote className="w-5 h-5 fill-current" />
                </div>
              </div>
            </div>
            
            <div className="text-center lg:text-left flex flex-col items-center lg:items-start">
              <span className="label-tag mb-4 bg-gold-50 px-3 py-1 rounded-full border border-gold-200">
                President's Message
              </span>
              
              <h3 className="font-display text-2xl lg:text-3xl font-bold text-charcoal-900 mb-6">
                {president.name}
              </h3>
              
              <blockquote className="text-lg lg:text-xl text-charcoal-600 italic leading-relaxed font-medium">
                "{president.message}"
              </blockquote>
            </div>
          </div>
        </motion.div>

        {/* Key Members Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {keyMembers.map((member) => (
            <motion.div key={member.id} variants={itemVariants}>
              <MemberCard member={member} />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button variant="outline" size="lg" asChild>
            <Link to="/committee">
              View Full Committee
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
