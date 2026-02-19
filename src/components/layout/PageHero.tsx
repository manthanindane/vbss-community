import { motion } from 'framer-motion';

interface PageHeroProps {
  title: string;
  subtitle?: string;
  hindiTitle?: string;
}

export default function PageHero({ title, subtitle, hindiTitle }: PageHeroProps) {
  return (
    <section className="relative pt-32 pb-16 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cream-100 via-white to-cream-50" />
      <div className="absolute inset-0 dot-grid opacity-60" />
      {/* Glow */}
      <div className="absolute top-0 right-1/4 w-80 h-80 rounded-full bg-maroon-600/5 blur-3xl" />

      <div className="container-custom relative">
        {hindiTitle && (
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-sm font-semibold text-maroon-600/60 mb-2 tracking-wide"
          >
            {hindiTitle}
          </motion.p>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.05 }}
          className="text-display-lg md:text-display-xl font-bold text-ink leading-[1.1] max-w-3xl"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.12 }}
            className="mt-4 text-base md:text-lg text-body max-w-xl leading-relaxed"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}
