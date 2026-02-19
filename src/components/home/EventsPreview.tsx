import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SectionHeading from '@/components/shared/SectionHeading';
import EventCard from '@/components/shared/EventCard';
import { events } from '@/data/events';

export default function EventsPreview() {
  const upcoming = events.filter((e) => e.upcoming).slice(0, 3);

  return (
    <section className="section-padding relative bg-gradient-to-b from-white to-cream-50">
      <div className="container-custom">
        <SectionHeading
          title="Upcoming Events & Celebrations"
          subtitle="Join us in celebrating our traditions and strengthening community bonds through cultural events, festivals, and gatherings."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {upcoming.map((event, i) => (
            <EventCard key={event.id} event={event} index={i} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/events"
            className="inline-flex items-center gap-2 text-primary-600 font-semibold text-sm group hover:gap-3 transition-all bg-primary-50 hover:bg-primary-100 rounded-full px-6 py-2.5"
          >
            View All Events
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
