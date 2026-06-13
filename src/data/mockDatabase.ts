export interface Member {
  id: string;
  memberId?: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email?: string;
  city?: string;
  state?: string;
  profileImage?: string;
  isFounderMember: boolean;
  roles: { role: { name: string } }[];
}

// 99 Founders
export const founderNames = [
  "Manoj Purbey", "Capt. Sunil Prasad", "Surendra Purbey", "Dr. Ramchandra Purbey", 
  "Sameer Mahaseth", "Nutan M. Purbey", "Late Rudal Mehta", "Dr. Varun Kumar", 
  "Arvind Purbey", "Baidyanath Prasad", "Amarnath Gami", "Arun Shankar Prasad", 
  "Suman Mahaseth", "Ramchandra Mahto", "Pankaj Panjiyar", "Dr. Ramprakash Mahato", 
  "Kedarnath Prasad", "Adv. Sushil Kumar", "B. S. Mandal", "Kaushalya Purbi", 
  "Jitendra Gupta", "Rekha Gupta", "Arun Purbey", "Rakesh Raushan", "Shivani Kumari", 
  "Umesh Gupta", "Sanjay Panjiyar", "Bandana Panjiyar", "Chitranjan Mahto", 
  "Subodh Mahaseth", "Late Rambali Mahto", "Kapil Shah", "Navin Mahto", "Sunil Saw", 
  "Sanjay Khan", "Satyanarayan Mandal", "Pradeep Raj", "Deepak Mahata", "Manish Kumar", 
  "Sudama Mandal", "Rampratap Nayak", "Sutta Raut", "Upendra Shah", "Shyam Purbey", 
  "Santosh Samratah", "Ritesh Kumar", "Vinod Shah", "Munni Devi", "Dilip Mahto", 
  "Arun Panjiyar", "Ashish Mahto", "Madneshwar Mandal", "Gopal Mahtha", "Kedar Prasad", 
  "Vishwanath Panjiyar", "Manoj Mahto", "Urmila Devi Panjiyar", "Dilip Mandal", 
  "Sanjeev Kumar Gupta", "Bajrang Prasad", "Urmila Devi Purbey", "Vijay Mahto", 
  "Mahesh Kumar Purbey", "Late Pradeep Kumar", "Dinesh Kumar", "Upendra Purbey", 
  "Vishwanath Mahto", "Arvind Kumar (CA)", "Shyam Mahto", "Sunil Garai", "Birendra Prasad", 
  "Sudhir Gupta", "Pramod Pandey", "Rakesh Ram", "Bindeshwar Prasad Shah", "Rajmangal Choudhary", 
  "Naresh J. Purbey", "Meera B. Mandal", "Babita Choudhary", "Shivnath Panjiyar", "Ashok Mahto", 
  "Alok Kumar", "Dr. Pushpam Narain", "Ravi Mahaseth", "Rupa Mahaseth", "Jay Narayan Nayak", 
  "Ravi Shankar Gupta", "Krishnandan Mahaseth", "Manoj Kumar", "Panchlal Mahto", "Gyan Prakash Shaw", 
  "Raghunandan Shah", "Sudin Choudhary", "Sanjeev Purbey", "Shyam Sah", "Lalan Kumar Mahto", 
  "Pardeep Choudhary", "Ashish Nayak", "Pratima Mahto"
];



export const officeBearers = [
  { name: "[President Name]", role: "Founder President" },
  { name: "[General Secretary Name]", role: "General Secretary" },
  { name: "[National Treasurer Name]", role: "National Treasurer" },
  { name: "[Vice President Name]", role: "Vice President" },
  { name: "[Secretary Name]", role: "Secretary" },
  { name: "[Assistant Treasurer Name]", role: "Assistant Treasurer" },
  { name: "[Delhi President Name]", role: "Delhi President" },
  { name: "[Delhi Secretary Name]", role: "Delhi Secretary" },
  { name: "[Patna President Name]", role: "Patna President" },
  { name: "[Patna Secretary Name]", role: "Patna Secretary" },
  { name: "[Assam President Name]", role: "Assam President" },
  { name: "[Assam Secretary Name]", role: "Assam Secretary" },
  { name: "[Assam Treasurer Name]", role: "Assam Treasurer" },
  { name: "[Committee Member Name]", role: "Assam Committee Member" }
];

export const womensCell = [
  { name: "[Women's Cell President]", role: "Women's Cell President" },
  { name: "[Women's Cell Vice President]", role: "Women's Cell Vice President" },
  { name: "[Women's Cell General Secretary]", role: "Women's Cell General Secretary" },
  { name: "[Women's Cell Joint Secretary]", role: "Women's Cell Joint Secretary" },
];

// Generate Mock Database
export const mockMembers: Member[] = founderNames.map((name, i) => {
  const parts = name.split(' ');
  const lastName = parts.length > 1 ? parts.pop() || '' : '';
  const firstName = parts.join(' ');
  
  return {
    id: `mem_${i}`,
    memberId: `VBSS-FM-${String(i+1).padStart(3, '0')}`,
    firstName,
    lastName,
    phoneNumber: `+91 ${Math.floor(Math.random() * 9000000000) + 1000000000}`,
    city: ['Mumbai', 'Patna', 'Delhi', 'Kolkata'][Math.floor(Math.random() * 4)],
    state: ['Maharashtra', 'Bihar', 'Delhi', 'West Bengal'][Math.floor(Math.random() * 4)],
    isFounderMember: true,
    roles: [{ role: { name: 'Founder Member' } }]
  };
});

// Add Office Bearers Roles
officeBearers.forEach(bearer => {
  const match = mockMembers.find(m => m.firstName + ' ' + m.lastName === bearer.name || bearer.name.includes(m.firstName));
  if (match) {
    match.roles.push({ role: { name: bearer.role } });
  } else {
    mockMembers.push({
      id: `mem_ob_${bearer.name.replace(/\s/g, '')}`,
      firstName: bearer.name,
      lastName: '',
      phoneNumber: `+91 ${Math.floor(Math.random() * 9000000000) + 1000000000}`,
      isFounderMember: false,
      roles: [{ role: { name: bearer.role } }]
    });
  }
});

// Add Women's Cell Roles
womensCell.forEach(cell => {
  const match = mockMembers.find(m => m.firstName + ' ' + m.lastName === cell.name || cell.name.includes(m.firstName));
  if (match) {
    match.roles.push({ role: { name: `Women's Cell ${cell.role}` } });
  } else {
    mockMembers.push({
      id: `mem_wc_${cell.name.replace(/\s/g, '')}`,
      firstName: cell.name,
      lastName: '',
      phoneNumber: `+91 ${Math.floor(Math.random() * 9000000000) + 1000000000}`,
      isFounderMember: false,
      roles: [{ role: { name: `Women's Cell ${cell.role}` } }]
    });
  }
});
