import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { sandeshEntries } from '@/data/sandesh';

export default function SandeshPreview() {
  const latest = [...sandeshEntries]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  return (
    <section className="section-padding" style={{ background: '#FAF7F2' }}>
      <div className="container-custom">
        <div className="flex items-end justify-between mb-10">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
          >
            <span className="label block mb-2">Newsletter</span>
            <h2
              className="font-display text-ink"
              style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)', fontWeight: 800, lineHeight: 1.1 }}
            >
              Vaishya Suri Sandesh
            </h2>
          </motion.div>
          <Link
            to="/sandesh"
            className="hidden sm:inline-flex items-center gap-1.5 text-[13px] font-semibold transition-all group"
            style={{ color: '#9B2335', fontFamily: 'DM Sans, sans-serif' }}
          >
            All Issues <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        <div className="grid sm:grid-cols-3 gap-5">
          {latest.map((entry, i) => (
            <motion.div
              key={entry.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.45 }}
              className="card-warm p-6 flex flex-col transition-all"
              style={{ marginTop: i === 1 ? 20 : 0 }}
            >
              <div className="flex items-center justify-between mb-4">
                <span
                  className="text-[11px] font-semibold px-2.5 py-1 rounded-md"
                  style={{
                    backgroundColor: '#FFF4F4',
                    color: '#9B2335',
                    fontFamily: 'DM Sans, sans-serif',
                    letterSpacing: '0.04em',
                  }}
                >
                  {entry.category}
                </span>
                <span
                  className="text-[11px] text-stone-400"
                  style={{ fontFamily: 'DM Sans, sans-serif' }}
                >
                  {entry.date.split(',').pop()?.trim()}
                </span>
              </div>

              <h3
                className="font-semibold text-ink leading-snug mb-2 flex-1"
                style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.95rem' }}
              >
                {entry.title}
              </h3>

              <p
                className="text-[13px] text-stone-400 leading-relaxed mb-4"
                style={{ fontFamily: 'DM Sans, sans-serif', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}
              >
                {entry.excerpt}
              </p>

              <div
                className="pt-3 flex items-center justify-between"
                style={{ borderTop: '1px solid #EDE6DA' }}
              >
                <span
                  className="text-[11px] text-stone-400"
                  style={{ fontFamily: 'DM Sans, sans-serif' }}
                >
                  {entry.author}
                </span>
                <Link
                  to="/sandesh"
                  className="group inline-flex items-center gap-1 text-[12px] font-semibold transition-all"
                  style={{ color: '#9B2335', fontFamily: 'DM Sans, sans-serif' }}
                >
                  Read <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
