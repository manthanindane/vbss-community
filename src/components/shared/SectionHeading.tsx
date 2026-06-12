import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  sectionNumber?: string;
  hindiTitle?: string;
  title: string;
  subtitle?: string;
  align?: 'center' | 'left';
  light?: boolean;
}

export default function SectionHeading({
  sectionNumber,
  hindiTitle,
  title,
  subtitle,
  align = 'center',
  light = false,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6 }}
      className={cn(
        'mb-12 flex flex-col',
        align === 'center' ? 'items-center text-center' : 'items-start text-left'
      )}
    >
      <div className="flex items-center gap-4 mb-4">
        {sectionNumber && (
          <span className="section-num">{sectionNumber}</span>
        )}
        {hindiTitle && (
          <>
            {sectionNumber && <span className="w-8 h-[1px] bg-gold-500/30"></span>}
            <span className={light ? 'label-tag-light' : 'label-tag'}>{hindiTitle}</span>
          </>
        )}
      </div>
      
      <h2 className={cn(
        'font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-6',
        light ? 'text-white' : 'text-charcoal-900'
      )}>
        {title}
      </h2>
      
      <div className={cn('divider-gradient-sm mb-6', align === 'center' && 'mx-auto')}></div>
      
      {subtitle && (
        <p className={cn(
          'text-lg max-w-2xl',
          light ? 'text-cream-300' : 'text-charcoal-600'
        )}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
