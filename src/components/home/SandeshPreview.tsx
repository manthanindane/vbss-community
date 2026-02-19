import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { sandeshEntries } from '@/data/sandesh';

export default function SandeshPreview() {
  const latest = [...sandeshEntries]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  return (
    <section className="section-padding" style={{ background: '#F4F4F0' }}>
      <div className="container-custom">

        <div className="flex items-end justify-between mb-10">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.44 }}
          >
            <span className="section-num block mb-2">04 — Newsletter</span>
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
              Vaishya Suri Sandesh
            </h2>
          </motion.div>
          <Link
            to="/sandesh"
            className="hidden sm:inline-flex items-center gap-1.5 text-[13px] font-semibold transition-all group"
            style={{ color: '#1B4D3E', fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            All Issues
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        {/* Cards — middle one drops down (asymmetric stagger) */}
        <div className="grid sm:grid-cols-3 gap-4">
          {latest.map((entry, i) => (
            <motion.div
              key={entry.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.44 }}
              className="card-surface p-6 flex flex-col bg-white"
              style={{ marginTop: i === 1 ? 22 : 0 }}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="badge-amber">{entry.category}</span>
                <span
                  className="text-[11px]"
                  style={{ fontFamily: "'Satoshi', sans-serif", color: '#9CA3AF' }}
                >
                  {entry.date.split(',').pop()?.trim()}
                </span>
              </div>

              <h3
                className="font-semibold text-ink leading-snug mb-2 flex-1"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '0.92rem' }}
              >
                {entry.title}
              </h3>

              <p
                style={{
                  fontFamily: "'Satoshi', sans-serif",
                  fontSize: '0.81rem',
                  lineHeight: 1.65,
                  color: '#9CA3AF',
                  display: '-webkit-box',
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                  marginBottom: '1rem',
                }}
              >
                {entry.excerpt}
              </p>

              <div
                className="pt-3 flex items-center justify-between"
                style={{ borderTop: '1px solid #EBEBE6' }}
              >
                <span
                  className="text-[11px]"
                  style={{ fontFamily: "'Satoshi', sans-serif", color: '#9CA3AF' }}
                >
                  {entry.author}
                </span>
                <Link
                  to="/sandesh"
                  className="group inline-flex items-center gap-1 text-[12px] font-semibold transition-all"
                  style={{ color: '#1B4D3E', fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  Read
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
