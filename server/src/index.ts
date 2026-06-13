import express from 'express';
import cors from 'cors';
import { PrismaClient } from '@prisma/client';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const prisma = new PrismaClient();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Basic health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'VBSS Backend is running' });
});

// GET /api/members
app.get('/api/members', async (req, res) => {
  try {
    const { role, isFounderMember, limit = 100 } = req.query;
    
    let whereClause: any = {};
    
    if (isFounderMember === 'true') {
      whereClause.isFounderMember = true;
    }
    
    if (role) {
      whereClause.roles = {
        some: {
          role: {
            name: role as string
          }
        }
      };
    }

    const members = await prisma.member.findMany({
      where: whereClause,
      include: {
        roles: {
          include: {
            role: true
          }
        }
      },
      take: Number(limit)
    });

    res.json(members);
  } catch (error) {
    console.error('Error fetching members:', error);
    res.status(500).json({ error: 'Failed to fetch members' });
  }
});

// GET /api/members/directory
app.get('/api/members/directory', async (req, res) => {
  try {
    const { search, city, state, page = 1, limit = 10 } = req.query;
    
    let whereClause: any = {};
    
    if (search) {
      whereClause.OR = [
        { firstName: { contains: search as string } },
        { lastName: { contains: search as string } },
        { phoneNumber: { contains: search as string } },
      ];
    }
    
    if (city) whereClause.city = { contains: city as string };
    if (state) whereClause.state = { contains: state as string };

    const skip = (Number(page) - 1) * Number(limit);

    const [members, total] = await Promise.all([
      prisma.member.findMany({
        where: whereClause,
        include: { roles: { include: { role: true } } },
        skip,
        take: Number(limit)
      }),
      prisma.member.count({ where: whereClause })
    ]);

    res.json({
      data: members,
      meta: {
        total,
        page: Number(page),
        limit: Number(limit),
        totalPages: Math.ceil(total / Number(limit))
      }
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch directory' });
  }
});

// POST /api/members/apply
app.post('/api/members/apply', async (req, res) => {
  try {
    const { fullName, email, phoneNumber } = req.body;
    
    const application = await prisma.membershipApplication.create({
      data: {
        fullName,
        email,
        phoneNumber,
        status: 'PENDING',
        paymentStatus: 'UNPAID'
      }
    });
    
    res.status(201).json(application);
  } catch (error) {
    res.status(500).json({ error: 'Failed to submit application' });
  }
});

// POST /api/advertise
app.post('/api/advertise', async (req, res) => {
  try {
    const { businessName, contactPerson, phoneNumber, email, websiteUrl } = req.body;
    
    const ad = await prisma.advertisement.create({
      data: {
        businessName,
        contactPerson,
        phoneNumber,
        email,
        websiteUrl,
        startDate: new Date(),
        endDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days default
        isApproved: false
      }
    });
    
    res.status(201).json(ad);
  } catch (error) {
    res.status(500).json({ error: 'Failed to submit advertisement' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
