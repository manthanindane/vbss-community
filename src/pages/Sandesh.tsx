import { motion } from 'framer-motion';
import PageHero from '@/components/layout/PageHero';
import NewsCard from '@/components/shared/NewsCard';
import { sandeshEntries } from '@/data/sandesh';

export default function Sandesh() {
  const sorted = [...sandeshEntries].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <PageHero
        title="\u0935\u0948\u0936\u094d\u092f \u0938\u0942\u0930\u0940 \u0938\u0902\u0926\u0947\u0936"
        hindiTitle="\u0935\u0948\u0936\u094d\u092f \u0938\u0942\u0930\u0940 \u0938\u0902\u0926\u0947\u0936"
        subtitle="Our community newsletter — keeping members informed, connected, and inspired since 2015."
      />

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sorted.map((entry, i) => (
              <NewsCard key={entry.id} entry={entry} index={i} />
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
}
