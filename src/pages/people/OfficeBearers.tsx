import React from 'react';
import { motion } from 'framer-motion';
import PageTransition from '@/components/shared/PageTransition';
import PageHero from '@/components/layout/PageHero';
import { mockMembers } from '@/data/mockDatabase';
import { useLanguage } from '@/context/LanguageContext';

export default function OfficeBearers() {
  const { t } = useLanguage();

  const bearers = mockMembers.filter(m => m.roles.some(r => r.role.name !== 'Founder Member' && !r.role.name.includes("Women's")));

  // Custom sort to put President first, General Sec next, etc.
  const sortOrder = ["Founder President", "Vice President", "General Secretary", "Secretary", "National Treasurer", "Assistant Treasurer"];
  
  bearers.sort((a, b) => {
    const roleA = a.roles.find(r => r.role.name !== 'Founder Member')?.role.name || '';
    const roleB = b.roles.find(r => r.role.name !== 'Founder Member')?.role.name || '';
    
    let indexA = sortOrder.indexOf(roleA);
    let indexB = sortOrder.indexOf(roleB);
    
    if (indexA === -1) indexA = 99;
    if (indexB === -1) indexB = 99;
    
    return indexA - indexB;
  });

  return (
    <PageTransition>
      <PageHero 
        title={t("Office Bearers", "पदाधिकारी")}
        hindiTitle="पदाधिकारी"
        subtitle={t("The dedicated executive committee leading our community forward", "हमारे समुदाय का नेतृत्व करने वाली समर्पित कार्यकारी समिति")}
      />

      <div className="section-padding bg-cream-50 min-h-screen">
        <div className="container-main">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {bearers.map((member, i) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="card-surface p-8 flex flex-col items-center text-center group hover:-translate-y-1 transition-transform"
              >
                <div className="w-24 h-24 rounded-full bg-gold-50 border-2 border-gold-200 flex items-center justify-center mb-6 text-gold-700 font-display text-3xl font-bold group-hover:bg-gold-500 group-hover:text-white transition-colors">
                  {member.firstName.charAt(0)}
                </div>
                <h3 className="font-heading font-bold text-xl text-charcoal-900 mb-2">
                  {member.firstName} {member.lastName}
                </h3>
                <div className="flex flex-col gap-1">
                  {member.roles.filter(r => r.role.name !== 'Founder Member').map(r => (
                    <span key={r.role.name} className="text-maroon-700 font-semibold text-sm uppercase tracking-wider">
                      {r.role.name}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </PageTransition>
  );
}
