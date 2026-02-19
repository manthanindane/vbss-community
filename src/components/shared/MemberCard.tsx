import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import type { Member } from '@/data/members';

export default function MemberCard({ member, index = 0 }: { member: Member; index?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
    >
      <Card className="group border-0 shadow-[0_2px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_40px_rgba(155,35,53,0.08)] transition-all duration-500 bg-white rounded-2xl text-center overflow-hidden">
        <div className="h-2 bg-gradient-to-r from-primary-600 via-primary-500 to-accent-500" />
        <CardContent className="p-6 pt-8">
          <Avatar className="w-24 h-24 mx-auto mb-4 ring-4 ring-primary-100 group-hover:ring-primary-200 transition-all duration-300">
            <AvatarImage src={member.image} alt={member.name} />
            <AvatarFallback className="bg-primary-100 text-primary-700 font-display text-xl font-bold">
              {member.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
            </AvatarFallback>
          </Avatar>
          <h3 className="font-display text-base font-bold text-charcoal leading-snug">{member.name}</h3>
          <p className="text-primary-600 text-sm font-medium mt-1">{member.designation}</p>
          <div className="flex items-center justify-center gap-1.5 mt-3 text-slate text-xs">
            <Phone className="w-3 h-3" />
            <span>{member.phone}</span>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
