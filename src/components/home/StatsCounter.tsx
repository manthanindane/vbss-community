import { motion } from 'framer-motion';
import { Users, Calendar, Award, MapPin } from 'lucide-react';
import { stats } from '@/data/stats';

const iconMap: Record<string, React.ElementType> = {
  Users,
  Calendar,
  Award,
  MapPin,
};

export default function StatsCounter() {
  return (
    <section className="relative -mt-1 z-10">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="bg-white rounded-3xl shadow-[0_8px_60px_rgba(0,0,0,0.06)] border border-primary-50 p-8 lg:p-10"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => {
              const Icon = iconMap[stat.icon] || Users;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="text-center group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-50 to-primary-100 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-5 h-5 text-primary-600" />
                  </div>
                  <p className="font-display text-3xl lg:text-4xl font-bold text-charcoal">{stat.value}</p>
                  <p className="text-slate text-sm font-medium mt-1">{stat.label}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
