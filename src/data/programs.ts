import { GraduationCap, HeartPulse, Users2, Sparkles } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface Program {
  icon: LucideIcon;
  title: string;
  description: string;
  stat: string;
  statLabel: string;
}

export const programs: Program[] = [
  {
    icon: GraduationCap,
    title: 'Education & Scholarships',
    description: 'Supporting meritorious students with scholarships and career guidance across Bihar, Jharkhand, Odisha and West Bengal.',
    stat: '42+',
    statLabel: 'Students supported in 2025',
  },
  {
    icon: HeartPulse,
    title: 'Health & Welfare',
    description: 'Free medical camps with comprehensive health check-ups, specialist referrals and medicine distribution for community members.',
    stat: '600+',
    statLabel: 'Members screened',
  },
  {
    icon: Users2,
    title: 'Women Empowerment',
    description: 'Skill development workshops, self-help group formation, financial literacy and legal rights awareness for women.',
    stat: '3',
    statLabel: 'SHGs established',
  },
  {
    icon: Sparkles,
    title: 'Youth Development',
    description: 'Career fairs, cultural meets, mentorship programs and leadership development for the next generation of community leaders.',
    stat: '100+',
    statLabel: 'Youth engaged annually',
  },
];
