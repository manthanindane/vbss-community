import { motion } from 'framer-motion';

interface PageHeroProps {
  title: string;
  subtitle?: string;
}

export default function PageHero({ title, subtitle }: PageHeroProps) {
  return (
    <section className="relative pt-32 pb-16 overflow-hidden" style={{ background: '#FAFAF7' }}>
      {/* Subtle radial tints */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(ellipse 55% 45% at 70% 30%, rgba(27,77,62,0.06) 0%, transparent 60%),' +
            'radial-gradient(ellipse 35% 30% at 15% 70%, rgba(217,119,6,0.04) 0%, transparent 55%)',
        }}
      />

      {/* Structural vertical line (visible on desktop) */}
      <div
        className="absolute top-0 left-[12%] bottom-0 w-px pointer-events-none hidden lg:block"
        style={{ background: 'linear-gradient(to bottom, transparent, rgba(27,77,62,0.08) 30%, rgba(27,77,62,0.08) 70%, transparent)' }}
      />

      <div className="container-custom relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl"
        >
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full mb-6"
            style={{ backgroundColor: '#DCF0E7', border: '1px solid #B3D9C7' }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ backgroundColor: '#1B4D3E' }}
            />
            <span
              className="text-xs font-bold"
              style={{
                fontFamily: "'Satoshi', sans-serif",
                color: '#1B4D3E',
                letterSpacing: '0.04em',
              }}
            >
              Vaishya Bhartiya Suri Samaj
            </span>
          </div>

          <h1
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: 'clamp(2.2rem, 5vw, 3.4rem)',
              fontWeight: 800,
              letterSpacing: '-0.03em',
              lineHeight: 1.1,
              color: '#1A1A2E',
            }}
          >
            {title}
          </h1>

          {subtitle && (
            <p
              className="mt-4 max-w-xl"
              style={{
                fontFamily: "'Satoshi', sans-serif",
                fontSize: '1.05rem',
                lineHeight: 1.7,
                color: '#6B7280',
              }}
            >
              {subtitle}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
