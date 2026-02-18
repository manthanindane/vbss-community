export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: 'Events' | 'Festivals' | 'Gatherings';
}

export const galleryImages: GalleryImage[] = [
  { id: '1', src: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&h=400&fit=crop', alt: 'Annual Gathering 2025', category: 'Gatherings' },
  { id: '2', src: 'https://images.unsplash.com/photo-1609766857041-ed402ea8069a?w=600&h=400&fit=crop', alt: 'Mahavir Jayanti Prayers', category: 'Festivals' },
  { id: '3', src: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&h=400&fit=crop', alt: 'Youth Cultural Meet', category: 'Events' },
  { id: '4', src: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=600&h=400&fit=crop', alt: 'Diwali Celebration', category: 'Festivals' },
  { id: '5', src: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop', alt: 'Community Conference', category: 'Events' },
  { id: '6', src: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=600&h=400&fit=crop', alt: 'Cultural Program', category: 'Events' },
  { id: '7', src: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=600&h=400&fit=crop', alt: 'Community Dinner', category: 'Gatherings' },
  { id: '8', src: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600&h=400&fit=crop', alt: 'Festival Decorations', category: 'Festivals' },
  { id: '9', src: 'https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=600&h=400&fit=crop', alt: 'Community Award Ceremony', category: 'Events' },
  { id: '10', src: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=600&h=400&fit=crop', alt: 'Group Photo 2025', category: 'Gatherings' },
  { id: '11', src: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&h=400&fit=crop', alt: 'Workshop Session', category: 'Events' },
  { id: '12', src: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=600&h=400&fit=crop', alt: 'Navratri Celebration', category: 'Festivals' },
  { id: '13', src: 'https://images.unsplash.com/photo-1559223607-a43c990c692c?w=600&h=400&fit=crop', alt: 'Heritage Walk', category: 'Events' },
  { id: '14', src: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?w=600&h=400&fit=crop', alt: 'Musical Evening', category: 'Events' },
  { id: '15', src: 'https://images.unsplash.com/photo-1529543544282-ea99407407db?w=600&h=400&fit=crop', alt: 'Family Day Out', category: 'Gatherings' },
  { id: '16', src: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=600&h=400&fit=crop', alt: 'Dance Performance', category: 'Festivals' },
];
