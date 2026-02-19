import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';
import { events } from '@/data/events';

export default function EventsPreview() {
  const upcoming = events.filter((e) => e.upcoming).slice(0, 3);

  return (
    <section className="section-padding" style={{ background: '#FFFFFF' }}>
      <div className="container-custom">
        {/* Header */}
        <div className="flex items-end justify-between mb-10">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
          >
            <span className="label block mb-2">What’s Coming</span>
            <h2
              className="font-display text-ink"
              style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)', fontWeight: 800, lineHeight: 1.1 }}
            >
              Upcoming Events
            </h2>
          </motion.div>
          <Link
            to="/events"
            className="hidden sm:inline-flex items-center gap-1.5 text-[13px] font-semibold transition-all group"
            style={{ color: '#9B2335', fontFamily: 'DM Sans, sans-serif' }}
          >
            All Events <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        {/* Asymmetric card grid: first card larger */}
        <div className="grid lg:grid-cols-[2fr_1fr_1fr] gap-5">
          {upcoming.map((event, i) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.45 }}
              className="group card-warm overflow-hidden transition-all"
            >
              {/* Image */}
              <div
                className="relative overflow-hidden"
                style={{ height: i === 0 ? 260 : 180 }}
              >
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: 'linear-gradient(to top, rgba(28,25,23,0.3) 0%, transparent 60%)' }}
                />
                <span
                  className="absolute top-3 left-3 px-2.5 py-1 text-white text-xs font-semibold rounded-md"
                  style={{ backgroundColor: '#9B2335', fontFamily: 'DM Sans, sans-serif' }}
                >
                  {event.category}
                </span>
              </div>
              {/* Content */}
              <div className="p-5">
                <h3
                  className="font-semibold text-ink leading-snug mb-3"
                  style={{ fontFamily: 'DM Sans, sans-serif', fontSize: i === 0 ? '1.05rem' : '0.92rem' }}
                >
                  {event.title}
                </h3>
                <div className="flex flex-col gap-1.5">
                  <div className="flex items-center gap-2 text-[12px] text-stone-400">
                    <Calendar className="w-3.5 h-3.5 shrink-0" style={{ color: '#9B2335' }} />
                    <span style={{ fontFamily: 'DM Sans, sans-serif' }}>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-[12px] text-stone-400">
                    <MapPin className="w-3.5 h-3.5 shrink-0" />
                    <span style={{ fontFamily: 'DM Sans, sans-serif' }}>{event.venue}</span>
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
