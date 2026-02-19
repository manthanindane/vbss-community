import { motion } from 'framer-motion';
import { BookOpen, ArrowRight } from 'lucide-react';
import type { SandeshEntry } from '@/data/sandesh';

interface Props {
  entry: SandeshEntry;
  index: number;
}

const catColors: Record<string, { bg: string; text: string; dotBg: string }> = {
  'Annual Report': { bg: '#DCF0E7', text: '#163E32', dotBg: '#1B4D3E' },
  Health:          { bg: '#D1FAE5', text: '#065F46', dotBg: '#059669' },
  Advocacy:        { bg: '#FEF3C7', text: '#92400E', dotBg: '#D97706' },
  Education:       { bg: '#DBEAFE', text: '#1E40AF', dotBg: '#3B82F6' },
  Welfare:         { bg: '#EDE9FE', text: '#5B21B6', dotBg: '#7C3AED' },
  Community:       { bg: '#FCE7F3', text: '#9D174D', dotBg: '#EC4899' },
};

export default function NewsCard({ entry, index }: Props) {
  const cat = catColors[entry.category] ?? { bg: '#F4F4F0', text: '#374151', dotBg: '#9CA3AF' };

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.44 }}
      className="card-surface p-6 flex flex-col"
    >
      {/* Top row: icon + category */}
      <div className="flex items-start justify-between mb-4">
        <div
          className="w-9 h-9 rounded-xl flex items-center justify-center"
          style={{ backgroundColor: '#F0F9F5' }}
        >
          <BookOpen className="w-4 h-4" style={{ color: '#1B4D3E' }} />
        </div>
        <span
          className="inline-flex items-center gap-1.5 text-[11px] font-bold px-2.5 py-1 rounded-full"
          style={{
            backgroundColor: cat.bg,
            color: cat.text,
            fontFamily: "'Satoshi', sans-serif",
            letterSpacing: '0.03em',
          }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full shrink-0"
            style={{ backgroundColor: cat.dotBg }}
          />
          {entry.category}
        </span>
      </div>

      {/* Title */}
      <h3
        className="font-semibold leading-snug mb-2"
        style={{
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          fontSize: '0.92rem',
          color: '#1A1A2E',
        }}
      >
        {entry.title}
      </h3>

      {/* Excerpt */}
      <p
        className="flex-1 mb-4"
        style={{
          fontFamily: "'Satoshi', sans-serif",
          fontSize: '0.82rem',
          lineHeight: 1.65,
          color: '#9CA3AF',
          display: '-webkit-box',
          WebkitLineClamp: 3,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
        }}
      >
        {entry.excerpt}
      </p>

      {/* Footer */}
      <div
        className="pt-3 flex items-center justify-between"
        style={{ borderTop: '1px solid #EBEBE6' }}
      >
        <div>
          <p
            className="text-[11px]"
            style={{ fontFamily: "'Satoshi', sans-serif", color: '#9CA3AF' }}
          >
            {entry.date}
          </p>
          <p
            className="text-[11px] mt-0.5"
            style={{ fontFamily: "'Satoshi', sans-serif", color: '#B3B3AB' }}
          >
            By {entry.author}
          </p>
        </div>
        <button
          className="group inline-flex items-center gap-1 text-xs font-semibold transition-all"
          style={{ color: '#1B4D3E', fontFamily: "'Plus Jakarta Sans', sans-serif" }}
        >
          Read
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
        </button>
      </div>
    </motion.div>
  );
}
