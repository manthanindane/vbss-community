import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SectionHeading from '@/components/shared/SectionHeading';
import NewsCard from '@/components/shared/NewsCard';
import { sandeshEntries } from '@/data/sandesh';

export default function SandeshPreview() {
  const latest = sandeshEntries.slice(0, 3);

  return (
    <section className="section-padding relative">
      <div className="container-custom">
        <SectionHeading
          hindiTitle="वैश्य सूरी संदेश"
          title="Latest Updates"
          subtitle="Stay informed with the latest news, announcements, and publications from our community newsletter."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {latest.map((entry, i) => (
            <NewsCard key={entry.id} entry={entry} index={i} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/sandesh"
            className="inline-flex items-center gap-2 text-primary-600 font-semibold text-sm group hover:gap-3 transition-all bg-primary-50 hover:bg-primary-100 rounded-full px-6 py-2.5"
          >
            View All Editions
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
