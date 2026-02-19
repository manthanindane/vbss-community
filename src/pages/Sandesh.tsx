import { motion } from 'framer-motion';
import PageHero from '@/components/layout/PageHero';
import NewsCard from '@/components/shared/NewsCard';
import { sandeshEntries } from '@/data/sandesh';

export default function Sandesh() {
  const sorted = [...sandeshEntries].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <PageHero
        title="Vaishya Suri Sandesh"
        subtitle="Our community newsletter — keeping members informed, connected and inspired since 2015."
      />

      <section className="section-padding" style={{ background: '#FAFAF7' }}>
        <div className="container-custom">
          {/* Section intro */}
          <div className="mb-10">
            <span className="section-num block mb-2">Newsletter Archive</span>
            <div
              style={{
                width: 28,
                height: 3,
                borderRadius: 99,
                background: 'linear-gradient(90deg, #1B4D3E, #4A9A7C)',
              }}
            />
          </div>

          {/* Card grid — asymmetric: first row 2-col wide, rest 3-col */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {sorted.map((entry, i) => (
              <div
                key={entry.id}
                className={i === 0 ? 'sm:col-span-2 lg:col-span-2' : ''}
              >
                <NewsCard entry={entry} index={i} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
}
