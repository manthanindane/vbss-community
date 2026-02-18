export interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  venue: string;
  description: string;
  image: string;
  category: 'Religious' | 'Social' | 'Cultural';
  upcoming: boolean;
}

export const events: Event[] = [
  {
    id: '1',
    title: 'Mahavir Jayanti Celebration',
    date: 'April 10, 2026',
    time: '9:00 AM - 1:00 PM',
    venue: 'Samaj Bhavan, Dadar, Mumbai',
    description: 'Join us for the grand celebration of Mahavir Jayanti with prayers, cultural programs, and a community feast. A day to reflect on the teachings of Lord Mahavir and their relevance in modern life.',
    image: 'https://images.unsplash.com/photo-1609766857041-ed402ea8069a?w=600&h=400&fit=crop',
    category: 'Religious',
    upcoming: true,
  },
  {
    id: '2',
    title: 'Annual Samaj Gathering 2026',
    date: 'May 24, 2026',
    time: '5:00 PM - 10:00 PM',
    venue: 'Grand Ballroom, Hotel Sahara Star, Mumbai',
    description: 'The flagship annual event bringing together 700+ members for an evening of cultural performances, felicitations, community updates, and a grand dinner celebration.',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&h=400&fit=crop',
    category: 'Social',
    upcoming: true,
  },
  {
    id: '3',
    title: 'Youth Cultural Meet',
    date: 'June 15, 2026',
    time: '10:00 AM - 6:00 PM',
    venue: 'Community Hall, Ghatkopar, Mumbai',
    description: 'A vibrant day dedicated to the youth of our community featuring talent shows, debates, sports competitions, and networking sessions to strengthen bonds among the next generation.',
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&h=400&fit=crop',
    category: 'Cultural',
    upcoming: true,
  },
  {
    id: '4',
    title: 'Diwali Milan Samaroh',
    date: 'November 5, 2025',
    time: '6:00 PM - 11:00 PM',
    venue: 'Samaj Bhavan, Dadar, Mumbai',
    description: 'A grand Diwali celebration with traditional rangoli, lamp lighting ceremony, cultural performances by community members, and a festive dinner gathering.',
    image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=600&h=400&fit=crop',
    category: 'Religious',
    upcoming: false,
  },
  {
    id: '5',
    title: 'Community Health Camp',
    date: 'September 20, 2025',
    time: '8:00 AM - 2:00 PM',
    venue: 'Samaj Bhavan, Dadar, Mumbai',
    description: 'Free health check-up camp for all community members including blood tests, eye check-up, dental screening, and consultations with specialist doctors.',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop',
    category: 'Social',
    upcoming: false,
  },
  {
    id: '6',
    title: 'Paryushan Parva Celebration',
    date: 'August 18, 2025',
    time: '7:00 AM - 12:00 PM',
    venue: 'Jain Temple Complex, Walkeshwar, Mumbai',
    description: 'Eight days of spiritual reflection, prayers, and fasting during the sacred Paryushan festival. Daily pravachans and samayik sessions for community members.',
    image: 'https://images.unsplash.com/photo-1609766857041-ed402ea8069a?w=600&h=400&fit=crop',
    category: 'Religious',
    upcoming: false,
  },
  {
    id: '7',
    title: 'Women Empowerment Workshop',
    date: 'July 12, 2025',
    time: '10:00 AM - 4:00 PM',
    venue: 'Community Hall, Ghatkopar, Mumbai',
    description: 'An interactive workshop focused on financial literacy, entrepreneurship, and self-development for women members of the community.',
    image: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=600&h=400&fit=crop',
    category: 'Social',
    upcoming: false,
  },
  {
    id: '8',
    title: 'Heritage Walk & Cultural Tour',
    date: 'March 8, 2026',
    time: '7:00 AM - 12:00 PM',
    venue: 'Starting Point: Gateway of India, Mumbai',
    description: 'A guided heritage walk exploring the historic sites connected to the Vaishya community in South Mumbai, followed by a traditional lunch.',
    image: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=600&h=400&fit=crop',
    category: 'Cultural',
    upcoming: true,
  },
];
