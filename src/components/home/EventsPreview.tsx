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
            transition={{ duration: 0.44 }}
          >
            <span className="section-num block mb-2">03 — Events</span>
            <h2
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: 'clamp(1.75rem, 3.5vw, 2.4rem)',
                fontWeight: 800,
                letterSpacing: '-0.03em',
                lineHeight: 1.1,
                color: '#1A1A2E',
              }}
            >
              Upcoming Events
            </h2>
          </motion.div>
          <Link
            to="/events"
            className="hidden sm:inline-flex items-center gap-1.5 text-[13px] font-semibold transition-all group"
            style={{ color: '#1B4D3E', fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            All Events
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        {/* Asymmetric grid: 2fr 1fr 1fr */}
        <div className="grid lg:grid-cols-[2fr_1fr_1fr] gap-4">
          {upcoming.map((event, i) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.44 }}
              className="group card-surface overflow-hidden"
            >
              {/* Image */}
              <div
                className="relative overflow-hidden"
                style={{ height: i === 0 ? 250 : 170 }}
              >
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: 'linear-gradient(to top, rgba(26,26,46,0.35) 0%, transparent 55%)' }}
                />
                <span className="badge-teal absolute top-3 left-3">
                  {event.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3
                  className="font-semibold text-ink leading-snug mb-3"
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: i === 0 ? '1.02rem' : '0.88rem',
                  }}
                >
                  {event.title}
                </h3>
                <div className="flex flex-col gap-1.5">
                  <div className="flex items-center gap-2 text-[12px]" style={{ color: '#9CA3AF' }}>
                    <Calendar className="w-3.5 h-3.5 shrink-0" style={{ color: '#1B4D3E' }} />
                    <span style={{ fontFamily: "'Satoshi', sans-serif" }}>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-[12px]" style={{ color: '#9CA3AF' }}>
                    <MapPin className="w-3.5 h-3.5 shrink-0" />
                    <span style={{ fontFamily: "'Satoshi', sans-serif" }}>{event.venue}</span>
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
