export interface SandeshEntry {
  id: string;
  title: string;
  date: string;
  author: string;
  category: string;
  excerpt: string;
}

export const sandeshEntries: SandeshEntry[] = [
  {
    id: '1',
    title: 'Annual Report 2025–26',
    date: 'January 15, 2026',
    author: 'Secretary, VBSS',
    category: 'Annual Report',
    excerpt: 'A comprehensive review of VBSS activities in 2025–26 — covering scholarship disbursements, health camp outcomes, women empowerment programs and the state of our 700+ member community across Bihar, Jharkhand, Odisha and West Bengal.',
  },
  {
    id: '2',
    title: 'Mahavir Jayanti Special Edition 2025',
    date: 'April 14, 2025',
    author: 'Editorial Committee, VBSS',
    category: 'Special Edition',
    excerpt: 'Celebrating the birth anniversary of Bhagwan Mahavir with reflections on the values of non-violence, truth and compassion that form the foundation of our community life and organizational ethos.',
  },
  {
    id: '3',
    title: 'Community Health Camp Drive — Report & Outcomes',
    date: 'October 5, 2025',
    author: 'Health Committee, VBSS',
    category: 'Health',
    excerpt: 'Report on the free health check-up camp held in September 2025 — over 300 members screened, 45 referred for specialist consultation, medicines distributed free of cost. Plans for the next camp in Q1 2026.',
  },
  {
    id: '4',
    title: 'EBC Classification Demand — Update & Community Stand',
    date: 'August 20, 2025',
    author: 'President, VBSS',
    category: 'Community Update',
    excerpt: "VBSS formally reiterates its long-standing demand for inclusion of Suri and Kalwar Vaishya communities in Bihar's Extremely Backward Classes (EBC) list, in line with recognition already granted in neighbouring states of Jharkhand, Odisha and West Bengal.",
  },
  {
    id: '5',
    title: 'Scholarship Program 2025 — 42 Students Felicitated',
    date: 'July 1, 2025',
    author: 'Education Committee, VBSS',
    category: 'Community Update',
    excerpt: '42 meritorious students from the Suri Vaishya community across four states received scholarships at the Annual Scholarship Ceremony 2025. Total disbursement crossed ₹8 lakhs this year — a new milestone for our education welfare fund.',
  },
  {
    id: '6',
    title: 'Women Empowerment Wing — Quarterly Update',
    date: 'May 10, 2025',
    author: 'Women Wing Chairperson, VBSS',
    category: 'Welfare',
    excerpt: 'The Women Wing successfully conducted three skill-development workshops in Mumbai and Patna this quarter. Two self-help groups have been formally registered with a total corpus of ₹3.2 lakhs under the Pradhan Mantri Jan Dhan Yojana.',
  },
];
