import React from 'react';
import { motion } from 'framer-motion';
import { User, ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import type { SandeshEntry } from '@/data/sandesh';

interface NewsCardProps {
  entry: SandeshEntry;
}

export default function NewsCard({ entry }: NewsCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5 }}
      className="card-surface p-6 flex flex-col h-full border-l-4 border-l-gold-400 group"
    >
      <div className="flex justify-between items-start mb-4">
        <Badge variant="secondary">{entry.category}</Badge>
        <span className="text-xs text-charcoal-400 font-medium">{entry.date}</span>
      </div>
      
      <h3 className="font-heading text-xl font-semibold text-charcoal-900 mb-3 line-clamp-2">
        {entry.title}
      </h3>
      
      <div className="flex items-center gap-2 text-xs text-charcoal-400 mb-4 pb-4 border-b border-cream-200">
        <User className="w-3.5 h-3.5" />
        <span>{entry.author}</span>
      </div>
      
      <p className="text-sm text-charcoal-500 line-clamp-3 mb-6 flex-grow">
        {entry.excerpt}
      </p>
      
      <div className="mt-auto">
        <button className="inline-flex items-center text-sm font-heading font-bold text-gold-600 hover:text-gold-700 transition-colors">
          Read More
          <ArrowRight className="w-4 h-4 ml-1.5 transition-transform duration-300 group-hover:translate-x-1" />
        </button>
      </div>
    </motion.div>
  );
}
