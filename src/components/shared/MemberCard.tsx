import React from 'react';
import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';
import type { Member } from '@/data/members';

interface MemberCardProps {
  member: Member;
}

export default function MemberCard({ member }: MemberCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5 }}
      className="card-surface p-6 flex flex-col items-center text-center group"
    >
      <div className="relative mb-6">
        <div className="w-24 h-24 rounded-full overflow-hidden ring-4 ring-gold-300/30 transition-all duration-300 group-hover:ring-gold-400/60 group-hover:scale-105 shadow-soft">
          <img 
            src={member.image} 
            alt={member.name} 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      
      <h3 className="font-heading text-lg font-semibold text-charcoal-900 mb-1">
        {member.name}
      </h3>
      
      <p className="text-sm font-medium text-charcoal-500 mb-3">
        {member.designation}
      </p>
      
      {member.phone && (
        <div className="mt-auto flex items-center justify-center gap-1.5 text-xs text-charcoal-400 bg-cream-50 py-1.5 px-3 rounded-full border border-cream-200">
          <Phone className="w-3 h-3 text-gold-500" />
          <span>{member.phone}</span>
        </div>
      )}
    </motion.div>
  );
}
