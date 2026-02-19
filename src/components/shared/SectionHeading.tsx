import { motion } from 'framer-motion';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  hindiTitle?: string;
  align?: 'left' | 'center';
}

export default function SectionHeading({ title, subtitle, hindiTitle, align = 'center' }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`mb-12 lg:mb-16 ${align === 'center' ? 'text-center' : ''}`}
    >
      {hindiTitle && (
        <p className="text-primary-500/50 font-display text-base mb-1">{hindiTitle}</p>
      )}
      <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-charcoal leading-tight tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-3 text-slate text-base lg:text-lg leading-relaxed ${align === 'center' ? 'max-w-2xl mx-auto' : 'max-w-2xl'}`}>
          {subtitle}
        </p>
      )}
      <div className={`mt-4 flex items-center gap-2 ${align === 'center' ? 'justify-center' : ''}`}>
        <div className="h-0.5 w-10 rounded-full bg-primary-600" />
        <div className="h-0.5 w-3 rounded-full bg-accent-500" />
      </div>
    </motion.div>
  );
}
