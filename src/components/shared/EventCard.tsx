import React from 'react';
import { motion } from 'framer-motion';
import { CalendarDays, MapPin, Clock } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import type { Event } from '@/data/events';

interface EventCardProps {
  event: Event;
}

export default function EventCard({ event }: EventCardProps) {
  const badgeVariant = 
    event.category === 'Religious' ? 'religious' :
    event.category === 'Social' ? 'social' : 'cultural';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5 }}
      className="card-surface group flex flex-col h-full overflow-hidden"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img 
          src={event.image} 
          alt={event.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        <div className="absolute top-4 left-4 flex flex-col gap-2 items-start">
          <Badge variant={badgeVariant} className="shadow-sm">
            {event.category}
          </Badge>
          {event.upcoming && (
            <Badge variant="upcoming" className="animate-pulse-soft shadow-sm">
              Upcoming
            </Badge>
          )}
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="font-heading text-xl font-semibold text-charcoal-900 mb-4 line-clamp-2">
          {event.title}
        </h3>
        
        <div className="flex flex-col gap-2 mb-4 text-sm text-charcoal-600">
          <div className="flex items-center gap-2">
            <CalendarDays className="w-4 h-4 text-gold-500" />
            <span>{event.date}</span>
          </div>
          {event.time && (
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-gold-500" />
              <span>{event.time}</span>
            </div>
          )}
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-gold-500 shrink-0" />
            <span className="line-clamp-1">{event.venue}</span>
          </div>
        </div>
        
        <div className="mt-auto pt-4 border-t border-cream-200">
          <p className="text-sm text-charcoal-500 line-clamp-2">
            {event.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
