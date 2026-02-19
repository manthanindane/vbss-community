export interface SandeshEntry {
  id: string;
  title: string;
  hindiTitle?: string;
  date: string;
  author: string;
  category: 'Annual Report' | 'Community' | 'Health' | 'Education' | 'Special Edition' | 'Welfare';
  excerpt: string;
  readTime: string;
}

export const sandeshEntries: SandeshEntry[] = [
  {
    id: '1',
    title: 'Annual Report 2025–26',
    hindiTitle: 'वार्षिक रिपोर्ट',
    date: 'February 1, 2026',
    author: 'Secretariat, VBSS',
    category: 'Annual Report',
    excerpt:
      'A comprehensive review of all activities, welfare programmes, events, and financial statements of the Vaishya Bhartiya Suri Samaj for the year 2025–26.',
    readTime: '8 min read',
  },
  {
    id: '2',
    title: 'Mahavir Jayanti Special Edition',
    hindiTitle: 'महावीर जयंती विशेषांक',
    date: 'April 2025',
    author: 'Editorial Committee',
    category: 'Special Edition',
    excerpt:
      'Special commemorative issue celebrating the birth anniversary of Bhagwan Mahavir with reflections on non-violence, truth, and the Vaishya community’s spiritual heritage.',
    readTime: '5 min read',
  },
  {
    id: '3',
    title: 'Community Health Camp — Impact Report',
    date: 'March 2026',
    author: 'Health & Welfare Committee',
    category: 'Health',
    excerpt:
      'Detailed report on the free health camp held in February 2026, covering 340+ beneficiaries, partnering doctors, and future healthcare initiatives planned by the samaj.',
    readTime: '4 min read',
  },
  {
    id: '4',
    title: 'Scholarship Scheme 2025–26 — Applications Open',
    hindiTitle: 'छात्रवृत्ति योजना',
    date: 'January 2026',
    author: 'Education Committee',
    category: 'Education',
    excerpt:
      'The VBSS annual scholarship scheme is now open for applications. This year we are awarding 25 scholarships to meritorious students from economically weaker sections of the community.',
    readTime: '3 min read',
  },
  {
    id: '5',
    title: 'EBC Status Demand — Our Ongoing Advocacy',
    date: 'December 2025',
    author: 'Legal & Advocacy Cell',
    category: 'Welfare',
    excerpt:
      'Update on VBSS’s continuing advocacy for inclusion of Suri and Kalwar Vaishya communities in the Extremely Backward Class (EBC) category in Bihar, following precedents set in Odisha and West Bengal.',
    readTime: '6 min read',
  },
  {
    id: '6',
    title: 'Women Empowerment Initiative — Skill Development Drive',
    hindiTitle: 'महिला सशक्तिकरण',
    date: 'November 2025',
    author: 'Women’s Wing, VBSS',
    category: 'Welfare',
    excerpt:
      'The Women’s Wing launched a 3-month skill development programme in tailoring, digital literacy, and financial planning for 60 women from the community.',
    readTime: '4 min read',
  },
];
