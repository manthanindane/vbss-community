import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import type { Member } from '@/data/members';

interface Props { member: Member; index: number; }

export default function MemberCard({ member, index }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.07, duration: 0.5 }}
      className="p-5 rounded-2xl border border-gray-100 bg-white hover:border-maroon-100 hover:shadow-[0_8px_30px_rgba(0,0,0,0.05)] transition-all duration-300"
    >
      <div className="flex items-center gap-4">
        <Avatar className="w-14 h-14 ring-2 ring-maroon-100">
          <AvatarImage src={member.image} alt={member.name} />
          <AvatarFallback className="bg-maroon-50 text-maroon-700 font-bold text-sm">
            {member.name.split(' ').map(n => n[0]).join('').slice(0,2)}
          </AvatarFallback>
        </Avatar>
        <div className="flex-1 min-w-0">
          <p className="font-bold text-ink text-sm truncate">{member.name}</p>
          <p className="text-maroon-600 text-xs font-semibold mt-0.5">{member.designation}</p>
          {member.phone && (
            <div className="flex items-center gap-1.5 mt-1.5">
              <Phone className="w-3 h-3 text-gray-400" />
              <span className="text-xs text-gray-400">{member.phone}</span>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
