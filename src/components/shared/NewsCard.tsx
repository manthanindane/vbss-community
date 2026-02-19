import { motion } from 'framer-motion';
import { BookOpen, ArrowRight } from 'lucide-react';
import type { SandeshEntry } from '@/data/sandesh';

interface Props { entry: SandeshEntry; index: number; }

export default function NewsCard({ entry, index }: Props) {
  const catColor: Record<string, string> = {
    'Annual Report': 'bg-blue-50 text-blue-700',
    'Special Edition': 'bg-gold-50 text-gold-700',
    'Health': 'bg-green-50 text-green-700',
    'Community Update': 'bg-maroon-50 text-maroon-700',
    'Welfare': 'bg-purple-50 text-purple-700',
  };
  const colorCls = catColor[entry.category] ?? 'bg-gray-50 text-gray-700';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      className="p-6 rounded-2xl border border-gray-100 bg-white hover:border-maroon-100 hover:shadow-[0_8px_30px_rgba(0,0,0,0.05)] transition-all duration-300 flex flex-col"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="w-9 h-9 rounded-lg bg-maroon-50 flex items-center justify-center">
          <BookOpen className="w-4 h-4 text-maroon-700" />
        </div>
        <span className={`text-[11px] font-semibold px-2.5 py-1 rounded-full ${colorCls}`}>
          {entry.category}
        </span>
      </div>
      <h3 className="font-bold text-ink text-sm leading-snug mb-2">{entry.title}</h3>
      <p className="text-xs text-gray-500 leading-relaxed flex-1 line-clamp-3">{entry.excerpt}</p>
      <div className="mt-4 pt-3 border-t border-gray-50 flex items-center justify-between">
        <div>
          <p className="text-[11px] text-gray-400">{entry.date}</p>
          <p className="text-[11px] text-gray-400 mt-0.5">By {entry.author}</p>
        </div>
        <button className="inline-flex items-center gap-1 text-xs font-semibold text-maroon-700 hover:text-maroon-800 group">
          Read <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
        </button>
      </div>
    </motion.div>
  );
}
