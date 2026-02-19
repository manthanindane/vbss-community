import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen } from 'lucide-react';
import { sandeshEntries } from '@/data/sandesh';

export default function SandeshPreview() {
  const latest = [...sandeshEntries]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="flex items-end justify-between mb-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-maroon-600 mb-2">Newsletter</p>
            <h2 className="text-section font-bold text-ink tracking-tight">Vaishya Suri Sandesh</h2>
          </motion.div>
          <Link
            to="/sandesh"
            className="hidden sm:inline-flex items-center gap-1.5 text-sm font-semibold text-maroon-700 hover:gap-3 transition-all group"
          >
            All Issues <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        <div className="grid sm:grid-cols-3 gap-5">
          {latest.map((entry, i) => (
            <motion.div
              key={entry.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group p-6 rounded-2xl border border-gray-100 bg-white hover:border-maroon-100 hover:shadow-[0_8px_30px_rgba(0,0,0,0.05)] transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-9 h-9 rounded-lg bg-maroon-50 flex items-center justify-center">
                  <BookOpen className="w-4 h-4 text-maroon-700" />
                </div>
                <span className="text-[11px] font-medium text-gray-400 bg-gray-50 px-2 py-0.5 rounded">
                  {entry.category}
                </span>
              </div>
              <h3 className="font-bold text-ink text-sm leading-snug mb-2">{entry.title}</h3>
              <p className="text-xs text-gray-500 leading-relaxed line-clamp-3">{entry.excerpt}</p>
              <div className="mt-4 pt-3 border-t border-gray-50 flex items-center justify-between">
                <span className="text-xs text-gray-400">{entry.date}</span>
                <Link to="/sandesh" className="text-xs font-semibold text-maroon-700 hover:text-maroon-800">Read →</Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
