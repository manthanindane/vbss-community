export interface Event {
  id: string;
  title: string;
  date: string;
  time?: string;
  venue: string;
  description: string;
  image: string;
  category: 'Religious' | 'Social' | 'Cultural';
  upcoming: boolean;
}

export const events: Event[] = [
  {
    id: '1',
    title: 'Holi Milan Samaroh 2026',
    date: '2026-03-08',
    time: '10:00 AM - 04:00 PM',
    venue: 'Samaj Bhavan, Mumbai',
    description: 'Community celebration of Holi with colorful programs, traditional songs, and a community meal for all members and families.',
    image: 'https://images.unsplash.com/photo-1553698716-17b5e1d4400e?w=800&h=400&fit=crop',
    category: 'Cultural',
    upcoming: true,
  },
  {
    id: '2',
    title: 'Annual Samaj Gathering 2026',
    date: 'May 18, 2026',
    time: '5:00 PM onwards',
    venue: 'Birla Matushri Hall, Marine Lines, Mumbai',
    description: 'The flagship annual gathering of VBSS — felicitation of meritorious students, welfare announcements, cultural performances and community dinner.',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&h=400&fit=crop',
    category: 'Social',
    upcoming: true,
  },
  {
    id: '3',
    title: 'Youth Cultural Meet & Career Fair',
    date: 'June 7, 2026',
    time: '10:00 AM – 5:00 PM',
    venue: 'Patkar Hall, Girgaon, Mumbai',
    description: 'A youth-focused event combining cultural performances with a career guidance fair, featuring industry mentors and scholarship announcements.',
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&h=400&fit=crop',
    category: 'Cultural',
    upcoming: true,
  },
  {
    id: '4',
    title: 'Diwali Samaj Milan 2025',
    date: 'October 25, 2025',
    time: '7:00 PM onwards',
    venue: 'Samaj Bhavan, Dadar West, Mumbai',
    description: 'Annual Diwali celebration bringing together members for an evening of joy, lights, cultural performances and community bonding.',
    image: 'https://images.unsplash.com/photo-1604423146732-9b9d4e4f4dff?w=600&h=400&fit=crop',
    category: 'Religious',
    upcoming: false,
  },
  {
    id: '5',
    title: 'Free Health Check-up Camp',
    date: 'September 10, 2025',
    time: '9:00 AM – 2:00 PM',
    venue: 'Community Hall, Byculla, Mumbai',
    description: 'Free medical check-up camp for community members including blood tests, sugar screening, BP monitoring and doctor consultations.',
    image: 'https://images.unsplash.com/photo-1666214280557-f1b5022eb634?w=600&h=400&fit=crop',
    category: 'Social',
    upcoming: false,
  },
  {
    id: '10',
    title: 'Vidyapati Parv Celebrations',
    date: '2025-11-20',
    time: '04:00 PM - 09:00 PM',
    venue: 'Community Hall, Patna',
    description: 'Celebrating the great Maithili poet Vidyapati with literature, music and community honors.',
    image: 'https://images.unsplash.com/photo-1604423146732-9b9d4e4f4dff?w=800&h=400&fit=crop',
    category: 'Cultural',
    upcoming: false,
  },
  {
    id: '7',
    title: 'Women Empowerment Workshop',
    date: 'July 15, 2025',
    time: '11:00 AM – 3:00 PM',
    venue: 'Dadar Community Centre, Mumbai',
    description: 'Workshop covering financial literacy, self-help group formation, digital skills and legal rights awareness for women in the community.',
    image: 'https://images.unsplash.com/photo-1607748862156-7c548e7e98f4?w=600&h=400&fit=crop',
    category: 'Social',
    upcoming: false,
  },
  {
    id: '8',
    title: 'Scholarship Distribution Ceremony 2025',
    date: 'June 20, 2025',
    time: '4:00 PM onwards',
    venue: 'Birla Matushri Hall, Marine Lines, Mumbai',
    description: 'Annual scholarship distribution ceremony honouring meritorious students from the Suri Vaishya community across all states.',
    image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=600&h=400&fit=crop',
    category: 'Social',
    upcoming: false,
  },
];
