import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SectionHeading from '@/components/shared/SectionHeading';
import NewsCard from '@/components/shared/NewsCard';
import { sandeshEntries } from '@/data/sandesh';

export default function SandeshPreview() {
  // Get first 3 entries (assuming they are pre-sorted in data)
  const previewEntries = sandeshEntries.slice(0, 3);

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
    <section className="section-padding bg-white relative">
      <div className="container-main relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <SectionHeading 
            sectionNumber="06" 
            hindiTitle="वैश्य सूरी संदेश" 
            title="News & Updates"
            align="left"
          />
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="hidden md:block pb-6"
          >
            <Button variant="outline" asChild>
              <Link to="/sandesh">
                View All Updates
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </motion.div>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {previewEntries.map((entry) => (
            <motion.div key={entry.id} variants={itemVariants} className="h-full">
              <NewsCard entry={entry} />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center md:hidden"
        >
          <Button variant="outline" size="lg" className="w-full sm:w-auto" asChild>
            <Link to="/sandesh">
              View All Updates
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
