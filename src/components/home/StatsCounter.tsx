import { motion } from 'framer-motion';

const stats = [
  { num: '700+', label: 'Active Members',       sub: 'Bihar · JH · OD · WB' },
  { num: '50+',  label: 'Events Organised',      sub: 'Cultural & Welfare' },
  { num: '4',    label: 'States Covered',        sub: 'Across East India' },
  { num: '2012', label: 'Year of Registration',  sub: 'Legally Incorporated' },
];

export default function StatsCounter() {
  return (
    <section className="border-b-4 border-black">
      <div className="grid grid-cols-2 lg:grid-cols-4">
        {stats.map(({ num, label, sub }, i) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.07, duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className={`p-8 lg:p-10 flex flex-col gap-1 ${
              i < stats.length - 1 ? 'border-r-2 border-black' : ''
            } ${
              i < 2 ? 'border-b-2 border-black lg:border-b-0' : ''
            }`}
          >
            <p
              className="font-display"
              style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: 'clamp(3rem,6vw,5rem)', fontWeight: 900, letterSpacing: '-0.04em', lineHeight: 0.9, color: i % 2 === 1 ? '#E60023' : '#000' }}
            >
              {num}
            </p>
            <p
              className="font-bold text-black uppercase mt-2"
              style={{ fontFamily: 'Barlow, sans-serif', fontSize: '0.8rem', letterSpacing: '0.04em', lineHeight: 1.2 }}
            >
              {label}
            </p>
            <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.6rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#888', marginTop: 2 }}>
              {sub}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
