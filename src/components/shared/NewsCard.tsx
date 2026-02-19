import { motion } from 'framer-motion';
import { ArrowRight, Calendar, User } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import type { SandeshEntry } from '@/data/sandesh';

const categoryColors: Record<string, string> = {
  Newsletter: 'bg-blue-50 text-blue-700 border-blue-200',
  Announcement: 'bg-accent-50 text-accent-800 border-accent-200',
  Report: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  'Special Edition': 'bg-primary-50 text-primary-700 border-primary-200',
};

export default function NewsCard({ entry, index = 0 }: { entry: SandeshEntry; index?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
    >
      <Card className="group border-0 shadow-[0_2px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_40px_rgba(155,35,53,0.08)] transition-all duration-500 bg-white rounded-2xl overflow-hidden h-full">
        <CardContent className="p-6 flex flex-col h-full">
          <div className="flex items-center justify-between mb-4">
            <Badge className={`${categoryColors[entry.category] || ''} border text-[11px] font-semibold px-2.5 py-0.5`}>
              {entry.category}
            </Badge>
            <div className="flex items-center gap-1.5 text-slate/60 text-xs">
              <Calendar className="w-3 h-3" />
              <span>{entry.date}</span>
            </div>
          </div>
          <h3 className="font-display text-lg font-bold text-charcoal leading-snug mb-2 group-hover:text-primary-700 transition-colors">
            {entry.title}
          </h3>
          <div className="flex items-center gap-1.5 text-slate/60 text-xs mb-3">
            <User className="w-3 h-3" />
            <span>{entry.author}</span>
          </div>
          <p className="text-slate/80 text-sm leading-relaxed flex-1 line-clamp-3">{entry.excerpt}</p>
          <div className="mt-4 pt-4 border-t border-primary-50">
            <button className="text-primary-600 text-sm font-semibold flex items-center gap-1.5 group/btn hover:gap-2.5 transition-all">
              Read More
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
