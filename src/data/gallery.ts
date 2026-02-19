export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: 'Events' | 'Festivals' | 'Gatherings';
}

export const galleryImages: GalleryImage[] = [
  { id: '1',  src: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=600&fit=crop', alt: 'Annual Samaj Gathering 2025',    category: 'Gatherings' },
  { id: '2',  src: 'https://images.unsplash.com/photo-1609766857041-ed402ea8069a?w=600&h=800&fit=crop', alt: 'Mahavir Jayanti Ceremony',       category: 'Festivals' },
  { id: '3',  src: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&h=500&fit=crop', alt: 'Youth Cultural Meet',            category: 'Events' },
  { id: '4',  src: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=600&h=400&fit=crop', alt: 'Community Cultural Program',     category: 'Events' },
  { id: '5',  src: 'https://images.unsplash.com/photo-1604423146732-9b9d4e4f4dff?w=600&h=600&fit=crop', alt: 'Diwali Milan 2024',              category: 'Festivals' },
  { id: '6',  src: 'https://images.unsplash.com/photo-1607748862156-7c548e7e98f4?w=600&h=500&fit=crop', alt: 'Women Empowerment Workshop',     category: 'Events' },
  { id: '7',  src: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=600&h=400&fit=crop', alt: 'Scholarship Distribution 2024',  category: 'Events' },
  { id: '8',  src: 'https://images.unsplash.com/photo-1666214280557-f1b5022eb634?w=600&h=500&fit=crop', alt: 'Free Health Camp',               category: 'Events' },
  { id: '9',  src: 'https://images.unsplash.com/photo-1584468612840-af41c3f50cb0?w=600&h=600&fit=crop', alt: 'Paryushan Parva Celebrations',   category: 'Festivals' },
  { id: '10', src: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&h=400&fit=crop', alt: 'Women Leadership Meet',          category: 'Gatherings' },
  { id: '11', src: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=600&h=500&fit=crop', alt: 'Youth Mentorship Session',       category: 'Events' },
  { id: '12', src: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=600&h=400&fit=crop', alt: 'Community Dinner & Fellowship',  category: 'Gatherings' },
  { id: '13', src: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600&h=600&fit=crop', alt: 'Cultural Dance Performance',     category: 'Festivals' },
  { id: '14', src: 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=600&h=400&fit=crop', alt: 'Annual Felicitation Ceremony',   category: 'Gatherings' },
  { id: '15', src: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=600&h=500&fit=crop', alt: 'Community Festival Celebration', category: 'Festivals' },
];
