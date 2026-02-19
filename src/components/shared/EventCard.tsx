import { motion } from 'framer-motion';
import { MapPin, Clock, Calendar } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import type { Event } from '@/data/events';

const categoryColors = {
  Religious: 'bg-primary-100 text-primary-700 border-primary-200',
  Social: 'bg-accent-100 text-accent-800 border-accent-200',
  Cultural: 'bg-emerald-50 text-emerald-700 border-emerald-200',
};

export default function EventCard({ event, index = 0 }: { event: Event; index?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
    >
      <Card className="group overflow-hidden border-0 shadow-[0_2px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_40px_rgba(155,35,53,0.08)] transition-all duration-500 bg-white rounded-2xl">
        <div className="relative overflow-hidden aspect-[16/10]">
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          <Badge
            className={`absolute top-4 left-4 ${categoryColors[event.category]} border text-[11px] font-semibold px-2.5 py-0.5`}
          >
            {event.category}
          </Badge>
          {event.upcoming && (
            <Badge className="absolute top-4 right-4 bg-accent-500 text-white border-0 text-[11px] font-semibold px-2.5 py-0.5 animate-pulse">
              Upcoming
            </Badge>
          )}
        </div>
        <CardContent className="p-5">
          <h3 className="font-display text-lg font-bold text-charcoal mb-3 leading-snug group-hover:text-primary-700 transition-colors">
            {event.title}
          </h3>
          <div className="space-y-2 mb-3">
            <div className="flex items-center gap-2 text-slate text-sm">
              <Calendar className="w-3.5 h-3.5 text-primary-500" />
              <span>{event.date}</span>
            </div>
            <div className="flex items-center gap-2 text-slate text-sm">
              <Clock className="w-3.5 h-3.5 text-primary-500" />
              <span>{event.time}</span>
            </div>
            <div className="flex items-center gap-2 text-slate text-sm">
              <MapPin className="w-3.5 h-3.5 text-primary-500" />
              <span className="line-clamp-1">{event.venue}</span>
            </div>
          </div>
          <p className="text-slate/80 text-sm leading-relaxed line-clamp-2">{event.description}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
}
