import React from 'react';
import { motion } from 'framer-motion';
import PageTransition from '@/components/shared/PageTransition';
import PageHero from '@/components/layout/PageHero';
import NewsCard from '@/components/shared/NewsCard';
import { sandeshEntries } from '@/data/sandesh';

export default function Sandesh() {
  // Sort entries by date (assuming they might not be sorted)
  // In a real app, you'd parse dates properly. Here we just reverse for demo if needed,
  // but assuming data is already in order.
  const sortedEntries = [...sandeshEntries];

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
        title="Vaishya Suri Sandesh" 
        hindiTitle="समुदाय समाचार"
        subtitle="Community Newsletter, announcements, and important updates"
      />

      <div id="main-content" className="section-padding bg-cream-50 min-h-[60vh]">
        <div className="container-main">
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {sortedEntries.map((entry) => (
              <motion.div key={entry.id} variants={itemVariants} className="h-full">
                <NewsCard entry={entry} />
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </PageTransition>
  );
}
