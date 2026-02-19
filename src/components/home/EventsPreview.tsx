import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, MapPin } from 'lucide-react';
import { events } from '@/data/events';

export default function EventsPreview() {
  const upcoming = events.filter((e) => e.upcoming).slice(0, 3);

  return (
    <section className="section-padding bg-gray-50/50">
      <div className="container-custom">
        <div className="flex items-end justify-between mb-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-maroon-600 mb-2">What's Coming</p>
            <h2 className="text-section font-bold text-ink tracking-tight">Upcoming Events</h2>
          </motion.div>
          <Link
            to="/events"
            className="hidden sm:inline-flex items-center gap-1.5 text-sm font-semibold text-maroon-700 hover:gap-3 transition-all group"
          >
            View All <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {upcoming.map((event, i) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:border-maroon-100 hover:shadow-[0_8px_30px_rgba(0,0,0,0.05)] transition-all duration-300"
            >
              <div className="relative h-44 overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                  <span className="inline-block px-2.5 py-1 rounded-md bg-black/50 backdrop-blur-sm text-white text-xs font-semibold">
                    {event.category}
                  </span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-ink text-base leading-snug mb-3">{event.title}</h3>
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2 text-xs text-gray-400">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-400">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{event.venue}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
