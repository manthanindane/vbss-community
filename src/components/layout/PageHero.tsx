import { motion } from 'framer-motion';

interface PageHeroProps {
  title: string;
  subtitle?: string;
  hindiTitle?: string;
}

export default function PageHero({ title, subtitle }: PageHeroProps) {
  return (
    <section className="relative pt-32 pb-16 overflow-hidden">
      {/* BG */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white" />
      <div className="absolute inset-0 dot-grid opacity-40" />

      {/* Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-48 rounded-full bg-maroon-800/5 blur-3xl" />

      <div className="container-custom relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-maroon-50 border border-maroon-100 mb-5">
            <div className="w-1.5 h-1.5 rounded-full bg-maroon-600" />
            <span className="text-maroon-700 text-xs font-semibold">Vaishya Bhartiya Suri Samaj</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-ink tracking-tight leading-tight">{title}</h1>
          {subtitle && (
            <p className="mt-4 text-gray-500 text-lg leading-relaxed max-w-xl">{subtitle}</p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
