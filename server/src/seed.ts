import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const founderMembers = [
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

const officeBearers = [
  { name: "Manoj Purbey", role: "Founder President" },
  { name: "B. S. Mandal", role: "General Secretary" },
  { name: "Pankaj Panjiyar", role: "National Treasurer" },
  { name: "Sanjay Panjiyar", role: "Vice President" },
  { name: "Sunil Saw", role: "Assistant Treasurer" },
  { name: "Umesh Prasad Gupta", role: "Secretary" },
  { name: "Vinod Sah", role: "Executive Member" },
  { name: "Ashish Mahto", role: "Executive Member" },
  { name: "Jitendra Purbey", role: "Executive Member" },
  { name: "Chitranjan Mahto", role: "Bihar Convenor" },
  { name: "Surendra Purbey", role: "Assam President" },
  { name: "CA Arvind Kumar", role: "Delhi Convenor" } // Note: In founders it's "Arvind Kumar (CA)"
];

const womensCell = [
  { name: "Bandana Panjiyar", role: "Women's Cell President" },
  { name: "Shivani Kumari", role: "Women's Cell Executive Member" },
  { name: "Nutan Purbey", role: "Women's Cell Executive Member" } // Note: In founders it's "Nutan M. Purbey"
];

async function main() {
  console.log("Seeding database...");

  // 1. Create Roles
  const roleNames = [
    "Founder Member", "Founder President", "General Secretary", "National Treasurer",
    "Vice President", "Assistant Treasurer", "Secretary", "Executive Member",
    "Bihar Convenor", "Assam President", "Delhi Convenor", 
    "Women's Cell President", "Women's Cell Executive Member"
  ];

  for (const name of roleNames) {
    await prisma.role.upsert({
      where: { name },
      update: {},
      create: { name }
    });
  }

  const roles = await prisma.role.findMany();
  const getRole = (name: string) => roles.find(r => r.name === name)!;

  // 2. Map aliases for Office Bearers and Women's Cell matching Founders List
  const aliases: Record<string, string> = {
    "CA Arvind Kumar": "Arvind Kumar (CA)",
    "Nutan Purbey": "Nutan M. Purbey",
    "Umesh Prasad Gupta": "Umesh Gupta",
    "Vinod Sah": "Vinod Shah",
    "Jitendra Purbey": "Jitendra Purbey" // Wait, Jitendra Purbey is not in founder list? Or maybe not all office bearers are founders. Let's check: "Jitendra Gupta" is in founders, maybe Jitendra Purbey is different. We will create if not exists.
  };

  // 3. Create all Founder Members
  const createdFounders = new Map<string, string>(); // name -> memberId

  for (let i = 0; i < founderMembers.length; i++) {
    const fullName = founderMembers[i];
    const parts = fullName.split(' ');
    const lastName = parts.length > 1 ? parts.pop() || '' : '';
    const firstName = parts.join(' ');

    const member = await prisma.member.create({
      data: {
        memberId: `VBSS-FM-${String(i+1).padStart(3, '0')}`,
        firstName,
        lastName,
        phoneNumber: `+910000000${String(i).padStart(3, '0')}`, // Mock phone
        isFounderMember: true,
        roles: {
          create: {
            roleId: getRole("Founder Member").id
          }
        }
      }
    });

    createdFounders.set(fullName, member.id);
  }

  // 4. Assign Office Bearers
  for (const bearer of officeBearers) {
    const searchName = aliases[bearer.name] || bearer.name;
    let memberId = createdFounders.get(searchName);

    if (!memberId) {
      // Create if not a founder member
      const parts = bearer.name.split(' ');
      const lastName = parts.length > 1 ? parts.pop() || '' : '';
      const firstName = parts.join(' ');

      const newMember = await prisma.member.create({
        data: {
          firstName,
          lastName,
          phoneNumber: `+911111111111`, // Mock
          isFounderMember: false,
        }
      });
      memberId = newMember.id;
    }

    await prisma.memberRole.create({
      data: {
        memberId: memberId,
        roleId: getRole(bearer.role).id
      }
    });
  }

  // 5. Assign Women's Cell
  for (const cell of womensCell) {
    const searchName = aliases[cell.name] || cell.name;
    let memberId = createdFounders.get(searchName);

    if (!memberId) {
      const parts = cell.name.split(' ');
      const lastName = parts.length > 1 ? parts.pop() || '' : '';
      const firstName = parts.join(' ');

      const newMember = await prisma.member.create({
        data: {
          firstName,
          lastName,
          phoneNumber: `+912222222222`, // Mock
          isFounderMember: false,
        }
      });
      memberId = newMember.id;
    }

    await prisma.memberRole.create({
      data: {
        memberId: memberId,
        roleId: getRole(cell.role).id
      }
    });
  }

  console.log("Database seeded successfully!");
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
