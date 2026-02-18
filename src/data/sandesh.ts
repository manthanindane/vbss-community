export interface SandeshEntry {
  id: string;
  title: string;
  date: string;
  author: string;
  category: 'Newsletter' | 'Announcement' | 'Report' | 'Special Edition';
  excerpt: string;
}

export const sandeshEntries: SandeshEntry[] = [
  {
    id: '1',
    title: 'Annual Report 2025-26',
    date: 'January 15, 2026',
    author: 'Shri Prakash Chand Suri',
    category: 'Report',
    excerpt: 'A comprehensive overview of the Samaj\'s activities, financial summary, and achievements throughout the year 2025-26. This edition covers all major events, welfare initiatives, and plans for the coming year.',
  },
  {
    id: '2',
    title: 'Mahavir Jayanti Special Edition',
    date: 'April 10, 2026',
    author: 'Editorial Team',
    category: 'Special Edition',
    excerpt: 'A special edition dedicated to the teachings and legacy of Lord Mahavir. Features articles on non-violence, community service, and how our Samaj members are carrying forward these timeless values.',
  },
  {
    id: '3',
    title: 'Community Health Camp Drive Results',
    date: 'October 5, 2025',
    author: 'Dr. Meena Shah',
    category: 'Report',
    excerpt: 'Over 350 community members participated in the annual health camp. This report covers key health statistics, common findings, and recommended follow-up actions for the community\'s wellbeing.',
  },
  {
    id: '4',
    title: 'Youth Wing Newsletter — Q4 2025',
    date: 'December 20, 2025',
    author: 'Shri Anil Kumar Suri',
    category: 'Newsletter',
    excerpt: 'Updates from the Youth Wing including the success of the mentorship program, upcoming coding workshops, career guidance sessions, and the inter-community sports tournament results.',
  },
  {
    id: '5',
    title: 'Scholarship Recipients 2025',
    date: 'August 15, 2025',
    author: 'Education Committee',
    category: 'Announcement',
    excerpt: 'Congratulations to the 15 meritorious students who have been awarded the Vaishya Suri Samaj Scholarship for the academic year 2025-26. A total of ₹4,50,000 has been distributed.',
  },
  {
    id: '6',
    title: 'Diwali Edition 2025 — Festival of Lights',
    date: 'November 1, 2025',
    author: 'Editorial Team',
    category: 'Special Edition',
    excerpt: 'Celebrating the festival of lights with stories from community elders, recipes from our traditional kitchen, rangoli designs, and a photo gallery from last year\'s grand Diwali Milan celebration.',
  },
];
