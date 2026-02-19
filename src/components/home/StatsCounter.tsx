import { motion } from 'framer-motion';

const stats = [
  { num: '700+', label: 'Active Members',     sub: 'Across 4 states',        accent: false },
  { num: '50+',  label: 'Events Organised',   sub: 'Cultural & welfare',     accent: true  },
  { num: '4',    label: 'States Covered',     sub: 'Bihar · JH · OD · WB',  accent: false },
  { num: '2012', label: 'Year Founded',       sub: 'Legally incorporated',   accent: true  },
];

export default function StatsCounter() {
  return (
    <section
      style={{
        background: '#FFFFFF',
        borderTop: '1px solid #EBEBE6',
        borderBottom: '1px solid #EBEBE6',
      }}
    >
      <div className="container-custom">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {stats.map(({ num, label, sub, accent }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.42 }}
              className={`py-8 px-6 flex flex-col gap-1 ${
                i < 3 ? 'border-r border-[#EBEBE6]' : ''
              } ${
                i < 2 ? 'border-b border-[#EBEBE6] lg:border-b-0' : ''
              }`}
            >
              <p
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: 'clamp(1.9rem, 3.8vw, 2.7rem)',
                  fontWeight: 800,
                  letterSpacing: '-0.04em',
                  lineHeight: 1,
                  color: accent ? '#D97706' : '#1B4D3E',
                }}
              >
                {num}
              </p>
              <p
                className="text-sm font-semibold text-ink mt-1.5"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                {label}
              </p>
              <p
                className="text-xs"
                style={{ fontFamily: "'Satoshi', sans-serif", color: '#9CA3AF' }}
              >
                {sub}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
