import { motion } from 'framer-motion';
import { Calendar, MapPin, Clock } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import type { Event } from '@/data/events';

interface Props { event: Event; index: number; }

export default function EventCard({ event, index }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:border-maroon-100 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all duration-300"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        <div className="absolute top-3 left-3 flex gap-2">
          <Badge variant={
            event.category === 'Religious' ? 'religious' :
            event.category === 'Social' ? 'social' : 'cultural'
          }>
            {event.category}
          </Badge>
          {event.upcoming && (
            <Badge variant="default" className="bg-green-600 text-white border-0">
              Upcoming
            </Badge>
          )}
        </div>
      </div>
      <div className="p-5">
        <h3 className="font-bold text-ink text-base leading-snug mb-3">{event.title}</h3>
        <div className="space-y-1.5 mb-3">
          <div className="flex items-center gap-2 text-xs text-gray-400">
            <Calendar className="w-3.5 h-3.5" /><span>{event.date}</span>
          </div>
          {event.time && (
            <div className="flex items-center gap-2 text-xs text-gray-400">
              <Clock className="w-3.5 h-3.5" /><span>{event.time}</span>
            </div>
          )}
          <div className="flex items-center gap-2 text-xs text-gray-400">
            <MapPin className="w-3.5 h-3.5" /><span>{event.venue}</span>
          </div>
        </div>
        <p className="text-xs text-gray-500 leading-relaxed line-clamp-2">{event.description}</p>
      </div>
    </motion.div>
  );
}
