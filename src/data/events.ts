export interface Event {
  id: string;
  title: string;
  hindiTitle?: string;
  date: string;
  time: string;
  venue: string;
  city: string;
  description: string;
  category: 'Religious' | 'Social' | 'Cultural';
  upcoming: boolean;
  image: string;
}

export const events: Event[] = [
  {
    id: '1',
    title: 'Mahavir Jayanti Mahotsav 2026',
    hindiTitle: 'महावीर जयंती महोत्सव',
    date: 'April 14, 2026',
    time: '9:00 AM – 8:00 PM',
    venue: 'Samaj Bhavan, Dadar West',
    city: 'Mumbai',
    description: 'Annual celebration of Mahavir Jayanti with community puja, cultural programs, and a communal feast for all members and their families.',
    category: 'Religious',
    upcoming: true,
    image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=600&h=400&fit=crop',
  },
  {
    id: '2',
    title: 'Annual Samaj Gathering 2026',
    hindiTitle: 'वार्षिक समाज अधिवेशन',
    date: 'May 18, 2026',
    time: '5:00 PM onwards',
    venue: 'Ravindra Natya Mandir',
    city: 'Mumbai',
    description: 'Our flagship annual gathering bringing together 700+ members for felicitations, cultural performances, community awards, and fellowship.',
    category: 'Social',
    upcoming: true,
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&h=400&fit=crop',
  },
  {
    id: '3',
    title: 'Youth Cultural Meet & Sports Day',
    hindiTitle: 'युवा सांस्कृतिक मिलन',
    date: 'June 7, 2026',
    time: '10:00 AM – 6:00 PM',
    venue: 'Shivaji Park Grounds',
    city: 'Mumbai',
    description: 'A day dedicated to the youth of our community — featuring sports competitions, cultural performances, career guidance workshops, and networking.',
    category: 'Cultural',
    upcoming: true,
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&h=400&fit=crop',
  },
  {
    id: '4',
    title: 'Community Health Camp',
    date: 'March 2, 2026',
    time: '9:00 AM – 3:00 PM',
    venue: 'Samaj Bhavan',
    city: 'Mumbai',
    description: 'Free health check-up camp offering consultations in general medicine, eye care, dental, and gynaecology for all community members.',
    category: 'Social',
    upcoming: false,
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop',
  },
  {
    id: '5',
    title: 'Diwali Milan Samaroh',
    date: 'November 1, 2025',
    time: '6:00 PM onwards',
    venue: 'Kohinoor Hall, Kurla',
    city: 'Mumbai',
    description: 'Grand Diwali celebration with rangoli competition, traditional sweets distribution, cultural performances, and community togetherness.',
    category: 'Religious',
    upcoming: false,
    image: 'https://images.unsplash.com/photo-1634128221889-82ed6efebfc3?w=600&h=400&fit=crop',
  },
  {
    id: '6',
    title: 'Vaishya Suri Vivah Samelan',
    hindiTitle: 'विवाह समेलन',
    date: 'February 9, 2026',
    time: '10:00 AM – 5:00 PM',
    venue: 'Hotel Suba Palace, Mumbai Central',
    city: 'Mumbai',
    description: 'Annual matrimonial meet facilitating introductions between eligible members of the Suri Vaishya community from across Maharashtra.',
    category: 'Social',
    upcoming: false,
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=400&fit=crop',
  },
  {
    id: '7',
    title: 'Scholarship Distribution Ceremony',
    date: 'January 26, 2026',
    time: '11:00 AM',
    venue: 'Samaj Bhavan, Dadar',
    city: 'Mumbai',
    description: 'Annual Republic Day scholarship ceremony honouring meritorious students from the community with certificates and financial grants.',
    category: 'Social',
    upcoming: false,
    image: 'https://images.unsplash.com/photo-1627556704302-624286467c65?w=600&h=400&fit=crop',
  },
  {
    id: '8',
    title: 'Holi Milan Utsav',
    date: 'March 14, 2025',
    time: '9:00 AM – 1:00 PM',
    venue: 'Shivaji Park',
    city: 'Mumbai',
    description: 'Joyful Holi celebration uniting community members in a burst of colours, music, traditional folk songs, and gujiya-sharing.',
    category: 'Religious',
    upcoming: false,
    image: 'https://images.unsplash.com/photo-1615187029330-c6e57bc1c29f?w=600&h=400&fit=crop',
  },
];
