import { Users, CalendarDays, MapPin, Award } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface Stat {
  icon: LucideIcon;
  value: number;
  suffix: string;
  label: string;
  description: string;
}

export const stats: Stat[] = [
  { icon: Users, value: 700, suffix: '+', label: 'Active Members', description: 'Across 4 states' },
  { icon: CalendarDays, value: 50, suffix: '+', label: 'Events Organised', description: 'Cultural & welfare' },
  { icon: MapPin, value: 4, suffix: '', label: 'States Covered', description: 'Bihar, JH, OD, WB' },
  { icon: Award, value: 2012, suffix: '', label: 'Year Founded', description: 'Officially registered' },
];

export const impactStats = [
  { value: 42, suffix: '+', label: 'Scholarships Awarded', description: 'In 2025 alone' },
  { value: 8, suffix: 'L+', label: 'Rupees Disbursed', description: 'Education fund' },
  { value: 600, suffix: '+', label: 'Health Screenings', description: 'Free medical camps' },
  { value: 3, suffix: '', label: 'SHGs Formed', description: 'Women empowerment' },
];
