export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: 'Events' | 'Festivals' | 'Gatherings';
}

export const galleryImages: GalleryImage[] = [
  { id: '1',  src: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&h=400&fit=crop', alt: 'Annual Samaj Gathering 2025', category: 'Gatherings' },
  { id: '2',  src: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=600&h=400&fit=crop', alt: 'Mahavir Jayanti Celebration', category: 'Festivals' },
  { id: '3',  src: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&h=400&fit=crop', alt: 'Youth Cultural Meet', category: 'Events' },
  { id: '4',  src: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop', alt: 'Community Health Camp', category: 'Events' },
  { id: '5',  src: 'https://images.unsplash.com/photo-1634128221889-82ed6efebfc3?w=600&h=400&fit=crop', alt: 'Diwali Milan Samaroh', category: 'Festivals' },
  { id: '6',  src: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=400&fit=crop', alt: 'Vivah Samelan 2026', category: 'Events' },
  { id: '7',  src: 'https://images.unsplash.com/photo-1627556704302-624286467c65?w=600&h=400&fit=crop', alt: 'Scholarship Ceremony', category: 'Events' },
  { id: '8',  src: 'https://images.unsplash.com/photo-1615187029330-c6e57bc1c29f?w=600&h=400&fit=crop', alt: 'Holi Milan Utsav', category: 'Festivals' },
  { id: '9',  src: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=600&h=400&fit=crop', alt: 'Community Gathering', category: 'Gatherings' },
  { id: '10', src: 'https://images.unsplash.com/photo-1551818255-e6e10975bc17?w=600&h=400&fit=crop', alt: 'Navratri Celebrations', category: 'Festivals' },
  { id: '11', src: 'https://images.unsplash.com/photo-1567521464027-f127ff144326?w=600&h=400&fit=crop', alt: 'Cultural Programme', category: 'Events' },
  { id: '12', src: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=600&h=400&fit=crop', alt: 'Members’ Meet 2024', category: 'Gatherings' },
  { id: '13', src: 'https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?w=600&h=400&fit=crop', alt: 'Community Lunch', category: 'Gatherings' },
  { id: '14', src: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=600&h=400&fit=crop', alt: 'Prasad Distribution', category: 'Festivals' },
  { id: '15', src: 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=600&h=400&fit=crop', alt: 'Annual Sports Day', category: 'Events' },
];
