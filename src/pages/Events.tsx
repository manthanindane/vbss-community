import { useState } from 'react';
import { motion } from 'framer-motion';
import PageHero from '@/components/layout/PageHero';
import EventCard from '@/components/shared/EventCard';
import { events } from '@/data/events';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

type Filter = 'All' | 'Upcoming' | 'Past' | 'Religious' | 'Social' | 'Cultural';

const filters: Filter[] = ['All', 'Upcoming', 'Past', 'Religious', 'Social', 'Cultural'];

export default function Events() {
  const [active, setActive] = useState<Filter>('All');

  const filtered = events.filter((e) => {
    if (active === 'All') return true;
    if (active === 'Upcoming') return e.upcoming;
    if (active === 'Past') return !e.upcoming;
    return e.category === active;
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <PageHero
        title="Events & Celebrations"
        subtitle="Explore our cultural events, religious ceremonies, and community gatherings that bring us together."
      />

      <section className="section-padding">
        <div className="container-custom">
          {/* Filter Tabs */}
          <div className="flex justify-center mb-10">
            <Tabs value={active} onValueChange={(v) => setActive(v as Filter)}>
              <TabsList className="bg-cream-100 h-auto p-1.5 rounded-xl flex-wrap gap-1">
                {filters.map((f) => (
                  <TabsTrigger
                    key={f}
                    value={f}
                    className="rounded-lg px-4 py-2 text-sm font-medium data-[state=active]:bg-white data-[state=active]:text-primary-700 data-[state=active]:shadow-sm transition-all"
                  >
                    {f}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>

          {/* Events Grid */}
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map((event, i) => (
              <EventCard key={event.id} event={event} index={i} />
            ))}
          </motion.div>

          {filtered.length === 0 && (
            <div className="text-center py-16">
              <p className="text-slate text-lg">No events found for this category.</p>
            </div>
          )}
        </div>
      </section>
    </motion.div>
  );
}
