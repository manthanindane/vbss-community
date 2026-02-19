import { motion } from 'framer-motion';

interface PageHeroProps {
  title: string;
  subtitle?: string;
  hindiTitle?: string;
}

export default function PageHero({ title, subtitle, hindiTitle }: PageHeroProps) {
  return (
    <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-cream-100 to-accent-50" />
      <div className="absolute inset-0 mandala-bg" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-primary-200/20 blur-3xl" />
      <div className="absolute bottom-0 left-10 w-48 h-48 rounded-full bg-accent-200/20 blur-3xl" />
      
      {/* Accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-200 to-transparent" />

      <div className="container-custom relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          {hindiTitle && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="text-primary-600/60 font-display text-lg mb-2"
            >
              {hindiTitle}
            </motion.p>
          )}
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-charcoal leading-[1.1] tracking-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-4 text-lg text-slate leading-relaxed max-w-2xl">
              {subtitle}
            </p>
          )}
          {/* Decorative accent bar */}
          <div className="mt-6 flex items-center gap-2">
            <div className="h-1 w-12 rounded-full bg-gradient-to-r from-primary-600 to-primary-400" />
            <div className="h-1 w-4 rounded-full bg-accent-500" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
