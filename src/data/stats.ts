import { Users, CalendarDays, MapPin, Award } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface Stat {
  icon: LucideIcon;
  num: string;
  label: string;
  sub: string;
}

export const stats: Stat[] = [
  { icon: Users,        num: '700+', label: 'Active Members',       sub: 'Across 4 states' },
  { icon: CalendarDays, num: '50+',  label: 'Events Organised',     sub: 'Cultural & welfare' },
  { icon: MapPin,       num: '4',    label: 'States Covered',       sub: 'Bihar, JH, OD, WB' },
  { icon: Award,        num: '2012', label: 'Year of Registration',  sub: 'Officially registered' },
];
