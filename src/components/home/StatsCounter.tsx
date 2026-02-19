import { motion } from 'framer-motion';

const stats = [
  { num: '700+', label: 'Active Members',        sub: 'Across 4 states' },
  { num: '50+',  label: 'Events Organised',       sub: 'Cultural & welfare' },
  { num: '4',    label: 'States of Operation',    sub: 'Bihar, JH, OD, WB' },
  { num: '2012', label: 'Registered Since',       sub: 'Legally incorporated' },
];

export default function StatsCounter() {
  return (
    <section
      className="py-0"
      style={{ background: '#FFFFFF', borderTop: '1px solid #EDE6DA', borderBottom: '1px solid #EDE6DA' }}
    >
      <div className="container-custom">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {stats.map(({ num, label, sub }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.45 }}
              className={`py-8 px-6 flex flex-col gap-1 ${
                i < 3 ? 'border-r border-stone-100 lg:border-r' : ''
              } ${
                i < 2 ? 'border-b border-stone-100 lg:border-b-0' : ''
              }`}
            >
              <p
                className="font-display leading-none"
                style={{ fontSize: 'clamp(2rem,4vw,2.75rem)', fontWeight: 800, color: i % 2 === 1 ? '#9B2335' : '#1C1917', lineHeight: 1 }}
              >
                {num}
              </p>
              <p className="text-sm font-semibold text-ink mt-1.5" style={{ fontFamily: 'DM Sans, sans-serif' }}>{label}</p>
              <p className="text-xs text-stone-400" style={{ fontFamily: 'DM Sans, sans-serif' }}>{sub}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
