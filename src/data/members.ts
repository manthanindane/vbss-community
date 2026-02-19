export interface Member {
  id: string;
  name: string;
  designation: string;
  image: string;
  phone?: string;
  message?: string;
}

export const members: Member[] = [
  {
    id: '1',
    name: 'Shri Rajendra Kumar Suri',
    designation: 'President',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face',
    phone: '+91 98XXX XXXXX',
    message: 'Our samaj has always stood as a pillar of strength for the Suri Vaishya community. My commitment, and that of every committee member, is to advance education, uplift the underprivileged, and keep our cultural identity alive for generations to come. Together we shall continue to rise — Jai Vaishya Samaj.',
  },
  {
    id: '2',
    name: 'Shri Pradeep Suri',
    designation: 'Vice President',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face',
    phone: '+91 98XXX XXXXX',
  },
  {
    id: '3',
    name: 'Smt. Anita Agarwal',
    designation: 'Secretary',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face',
    phone: '+91 97XXX XXXXX',
  },
  {
    id: '4',
    name: 'Shri Suresh Soni',
    designation: 'Joint Secretary',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face',
    phone: '+91 96XXX XXXXX',
  },
  {
    id: '5',
    name: 'Shri Naresh Gupta',
    designation: 'Treasurer',
    image: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=200&h=200&fit=crop&crop=face',
    phone: '+91 95XXX XXXXX',
  },
  {
    id: '6',
    name: 'Smt. Meena Shah',
    designation: 'Women Wing Chairperson',
    image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=200&h=200&fit=crop&crop=face',
    phone: '+91 94XXX XXXXX',
  },
  {
    id: '7',
    name: 'Shri Dinesh Suri',
    designation: 'Committee Member',
    image: 'https://images.unsplash.com/photo-1528763380143-65b3ac89a3ff?w=200&h=200&fit=crop&crop=face',
    phone: '+91 93XXX XXXXX',
  },
  {
    id: '8',
    name: 'Shri Ramesh Khandelwal',
    designation: 'Committee Member',
    image: 'https://images.unsplash.com/photo-1558222218-b7b54eede3f3?w=200&h=200&fit=crop&crop=face',
    phone: '+91 92XXX XXXXX',
  },
  {
    id: '9',
    name: 'Smt. Kavita Jalan',
    designation: 'Committee Member',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop&crop=face',
    phone: '+91 91XXX XXXXX',
  },
  {
    id: '10',
    name: 'Shri Vijay Suri',
    designation: 'Youth Wing Head',
    image: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=200&h=200&fit=crop&crop=face',
    phone: '+91 90XXX XXXXX',
  },
];
