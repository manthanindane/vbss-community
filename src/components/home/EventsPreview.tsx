import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SectionHeading from '@/components/shared/SectionHeading';
import EventCard from '@/components/shared/EventCard';
import { events } from '@/data/events';

export default function EventsPreview() {
  // Get up to 3 upcoming events
  const upcomingEvents = events.filter(e => e.upcoming).slice(0, 3);

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
      {/* Decorative background element */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-[0.02]">
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full">
          <path d="M0,0 L100,0 L100,100 L0,100 Z" fill="url(#grid)" />
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
        </svg>
      </div>

      <div className="container-main relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <SectionHeading 
            sectionNumber="02" 
            hindiTitle="आगामी कार्यक्रम" 
            title="Events & Celebrations"
            align="left"
          />
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="hidden md:block pb-6"
          >
            <Button variant="outline" asChild>
              <Link to="/events">
                View All Events
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
          {upcomingEvents.map((event) => (
            <motion.div key={event.id} variants={itemVariants} className="h-full">
              <EventCard event={event} />
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
            <Link to="/events">
              View All Events
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
