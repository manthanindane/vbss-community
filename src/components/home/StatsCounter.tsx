import { motion } from 'framer-motion';
import { Users, CalendarDays, MapPin, Award } from 'lucide-react';

const stats = [
  { icon: Users,        num: '700+', label: 'Active Members',    sub: 'Across 4 states' },
  { icon: CalendarDays, num: '50+',  label: 'Events Organised',  sub: 'Cultural & welfare' },
  { icon: MapPin,       num: '4',    label: 'States Covered',    sub: 'Bihar, JH, OD, WB' },
  { icon: Award,        num: '2012', label: 'Year of Registration', sub: 'Officially registered' },
];

export default function StatsCounter() {
  return (
    <section className="border-y border-gray-100 bg-gray-50/60">
      <div className="container-custom">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {stats.map(({ icon: Icon, num, label, sub }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className={`py-8 px-6 flex flex-col items-start gap-3 ${
                i < 3 ? 'border-b lg:border-b-0 lg:border-r border-gray-200' : 'border-b lg:border-b-0'
              }`}
            >
              <div className="w-9 h-9 rounded-lg bg-maroon-50 border border-maroon-100 flex items-center justify-center">
                <Icon className="w-4 h-4 text-maroon-700" />
              </div>
              <div>
                <p className="text-3xl font-bold text-ink tracking-tight">{num}</p>
                <p className="text-sm font-semibold text-gray-700 mt-0.5">{label}</p>
                <p className="text-xs text-gray-400 mt-0.5">{sub}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
