import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { sandeshEntries } from '@/data/sandesh';

export default function SandeshPreview() {
  const latest = [...sandeshEntries]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  return (
    <section className="border-b-4 border-black">
      {/* Header */}
      <div className="border-b-2 border-black px-8 lg:px-14 py-5 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <span
            className="font-display text-white px-3 py-1 text-sm font-black uppercase tracking-widest"
            style={{ backgroundColor: '#E60023', fontFamily: 'Barlow Condensed, sans-serif', letterSpacing: '0.1em' }}
          >
            04
          </span>
          <span className="font-display text-black uppercase font-black text-xl" style={{ fontFamily: 'Barlow Condensed, sans-serif', letterSpacing: '0.05em' }}>
            Vaishya Suri Sandesh
          </span>
        </div>
        <Link
          to="/sandesh"
          className="border-2 border-black px-4 py-1.5 font-black uppercase text-xs tracking-widest hover:bg-black hover:text-white transition-colors duration-100"
          style={{ fontFamily: 'Barlow Condensed, sans-serif', letterSpacing: '0.1em' }}
        >
          All Issues &rarr;
        </Link>
      </div>

      <div className="grid lg:grid-cols-3">
        {latest.map((entry, i) => (
          <motion.div
            key={entry.id}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.07, duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className={`p-8 lg:p-10 flex flex-col gap-4 ${
              i < 2 ? 'border-r-2 border-black' : ''
            } border-b-2 lg:border-b-0 border-black group hover:bg-black transition-colors duration-100`}
          >
            <div className="flex items-center justify-between">
              <span
                className="px-2.5 py-1 text-white font-black text-xs uppercase group-hover:border-white"
                style={{ backgroundColor: '#E60023', fontFamily: 'Barlow Condensed, sans-serif', letterSpacing: '0.1em' }}
              >
                {entry.category}
              </span>
              <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.58rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#999' }} className="group-hover:text-white/40">
                {entry.date}
              </span>
            </div>

            <h3
              className="font-display text-black uppercase font-black group-hover:text-white transition-colors duration-100"
              style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '1.5rem', letterSpacing: '-0.01em', lineHeight: 1.05 }}
            >
              {entry.title}
            </h3>

            <p
              style={{ fontFamily: 'Barlow, sans-serif', fontSize: '0.82rem', lineHeight: 1.65, color: '#555' }}
              className="line-clamp-3 group-hover:text-white/60 transition-colors duration-100"
            >
              {entry.excerpt}
            </p>

            <div className="mt-auto pt-4 border-t-2 border-black group-hover:border-white/20 transition-colors duration-100 flex items-center justify-between">
              <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.58rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#888' }} className="group-hover:text-white/40">
                By {entry.author}
              </span>
              <Link
                to="/sandesh"
                className="font-black uppercase text-xs tracking-widest group-hover:text-white transition-colors duration-100"
                style={{ fontFamily: 'Barlow Condensed, sans-serif', letterSpacing: '0.1em', color: '#E60023' }}
              >
                Read &rarr;
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
