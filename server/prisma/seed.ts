import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Clear existing
  await prisma.memberRole.deleteMany();
  await prisma.role.deleteMany();
  await prisma.member.deleteMany();
  await prisma.event.deleteMany();
  await prisma.galleryImage.deleteMany();

  console.log('Seeding Database with actual VBSS Data...');

  // Create Roles
  const presidentRole = await prisma.role.create({ data: { name: 'President', description: 'Head of the Samaj' } });
  const secretaryRole = await prisma.role.create({ data: { name: 'Secretary', description: 'General Secretary' } });
  const treasurerRole = await prisma.role.create({ data: { name: 'Treasurer', description: 'Financial Head' } });

  // Create Members (Realistic placeholders)
  const president = await prisma.member.create({
    data: {
      firstName: 'Ramesh',
      lastName: 'Prasad',
      phoneNumber: '+91 9967028601',
      city: 'Mumbai',
      state: 'Maharashtra',
      isFounderMember: true,
      profileImage: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop',
      roles: {
        create: { roleId: presidentRole.id }
      }
    }
  });

  const sec = await prisma.member.create({
    data: {
      firstName: 'Suresh',
      lastName: 'Bhagat',
      phoneNumber: '+91 8652414344',
      city: 'Mumbai',
      state: 'Maharashtra',
      isFounderMember: true,
      profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
      roles: {
        create: { roleId: secretaryRole.id }
      }
    }
  });

  // Events
  await prisma.event.createMany({
    data: [
      {
        title: 'Holi Milan Samaroh 2026',
        titleHindi: 'होली मिलन समारोह 2026',
        description: 'Annual Holi gathering for all VBSS families with traditional food and cultural programs.',
        descriptionHindi: 'सभी VBSS परिवारों के लिए वार्षिक होली मिलन।',
        eventDate: new Date('2026-03-08T10:00:00Z'),
        location: 'Samaj Bhavan, Mumbai',
        coverImage: 'https://images.unsplash.com/photo-1553698716-17b5e1d4400e?w=800&h=400&fit=crop'
      },
      {
        title: 'Vidyapati Parv 2025',
        titleHindi: 'विद्यापति पर्व 2025',
        description: 'Celebrating the great Maithili poet Vidyapati with literature, music and community honors.',
        descriptionHindi: 'महान कवि विद्यापति का सम्मान।',
        eventDate: new Date('2025-11-20T10:00:00Z'),
        location: 'Patna Office',
        coverImage: 'https://images.unsplash.com/photo-1604423146732-9b9d4e4f4dff?w=800&h=400&fit=crop'
      }
    ]
  });

  console.log('Seeding complete.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
