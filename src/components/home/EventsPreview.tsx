import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { events } from '@/data/events';

export default function EventsPreview() {
  const upcoming = events.filter((e) => e.upcoming).slice(0, 3);

  return (
    <section className="bg-black border-b-4 border-black">
      {/* Header */}
      <div className="border-b-2 border-white/20 px-8 lg:px-14 py-5 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <span
            className="font-display text-black px-3 py-1 text-sm font-black uppercase tracking-widest"
            style={{ backgroundColor: '#E60023', fontFamily: 'Barlow Condensed, sans-serif', letterSpacing: '0.1em' }}
          >
            03
          </span>
          <span className="font-display text-white uppercase font-black text-xl" style={{ fontFamily: 'Barlow Condensed, sans-serif', letterSpacing: '0.05em' }}>
            Upcoming Events
          </span>
        </div>
        <Link
          to="/events"
          className="border-2 border-white px-4 py-1.5 font-black uppercase text-xs tracking-widest text-white hover:bg-white hover:text-black transition-colors duration-100"
          style={{ fontFamily: 'Barlow Condensed, sans-serif', letterSpacing: '0.1em' }}
        >
          All Events &rarr;
        </Link>
      </div>

      {/* Event grid */}
      <div className="grid lg:grid-cols-3">
        {upcoming.map((event, i) => (
          <motion.div
            key={event.id}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.07, duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className={`flex flex-col border-white/20 ${
              i < 2 ? 'border-r-2' : ''
            } border-b-2 lg:border-b-0`}
          >
            {/* Image */}
            <div className="relative" style={{ height: 220 }}>
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-full object-cover"
                style={{ filter: 'grayscale(30%) contrast(1.1)' }}
              />
              <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.25)' }} />
              {/* Category badge */}
              <span
                className="absolute top-3 left-3 px-2 py-1 font-black uppercase text-white text-xs"
                style={{ backgroundColor: '#E60023', fontFamily: 'Barlow Condensed, sans-serif', letterSpacing: '0.1em' }}
              >
                {event.category}
              </span>
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col gap-3 flex-1">
              <h3
                className="font-display text-white uppercase font-black leading-tight"
                style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '1.4rem', letterSpacing: '-0.01em', lineHeight: 1.05 }}
              >
                {event.title}
              </h3>
              <div className="flex flex-col gap-1 mt-1">
                <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.6rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)' }}>
                  {event.date}
                </span>
                <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.6rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)' }}>
                  {event.venue}
                </span>
              </div>
              <p style={{ fontFamily: 'Barlow, sans-serif', fontSize: '0.82rem', lineHeight: 1.6, color: 'rgba(255,255,255,0.6)', marginTop: 4 }} className="line-clamp-2">
                {event.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
