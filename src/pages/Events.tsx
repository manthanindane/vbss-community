import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CalendarX2 } from 'lucide-react';
import PageTransition from '@/components/shared/PageTransition';
import PageHero from '@/components/layout/PageHero';
import EventCard from '@/components/shared/EventCard';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { events } from '@/data/events';

export default function Events() {
  const [filter, setFilter] = useState('All');

  const tabs = ['All', 'Upcoming', 'Past', 'Religious', 'Social', 'Cultural'];

  const filteredEvents = events.filter((event) => {
    if (filter === 'All') return true;
    if (filter === 'Upcoming') return event.upcoming;
    if (filter === 'Past') return !event.upcoming;
    return event.category === filter;
  });

  return (
    <PageTransition>
      <PageHero 
        title="Events & Celebrations" 
        hindiTitle="कार्यक्रम"
        subtitle="Cultural gatherings, festivals, and community welfare events"
      />

      <div id="main-content" className="section-padding bg-cream-50 min-h-[60vh]">
        <div className="container-main">
          
          <div className="flex justify-center mb-12 overflow-x-auto pb-4 custom-scrollbar">
            <Tabs defaultValue="All" onValueChange={setFilter} className="w-full sm:w-auto flex justify-center">
              <TabsList>
                {tabs.map((tab) => (
                  <TabsTrigger key={tab} value={tab}>
                    {tab}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>

          <motion.div layout className="min-h-[400px]">
            <AnimatePresence mode="popLayout">
              {filteredEvents.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredEvents.map((event) => (
                    <motion.div
                      key={event.id}
                      layout
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.3 }}
                      className="h-full"
                    >
                      <EventCard event={event} />
                    </motion.div>
                  ))}
                </div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center justify-center py-20 text-center"
                >
                  <div className="w-20 h-20 bg-cream-200 rounded-full flex items-center justify-center mb-6">
                    <CalendarX2 className="w-10 h-10 text-charcoal-400" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-charcoal-900 mb-2">No events found</h3>
                  <p className="text-charcoal-500">There are no {filter.toLowerCase()} events at the moment.</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

        </div>
      </div>
    </PageTransition>
  );
}
