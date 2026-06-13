import React from 'react';
import { motion } from 'framer-motion';
import PageTransition from '@/components/shared/PageTransition';
import PageHero from '@/components/layout/PageHero';
import { mockMembers } from '@/data/mockDatabase';
import { useLanguage } from '@/context/LanguageContext';

export default function WomensCell() {
  const { t } = useLanguage();

  const cellMembers = mockMembers.filter(m => m.roles.some(r => r.role.name.includes("Women's Cell")));

  return (
    <PageTransition>
      <PageHero 
        title={t("Women's Cell", "महिला प्रकोष्ठ")}
        hindiTitle="महिला प्रकोष्ठ"
        subtitle={t("Empowering women leaders in our community", "हमारे समुदाय में महिला नेताओं को सशक्त बनाना")}
      />

      <div className="section-padding bg-cream-50 min-h-screen">
        <div className="container-main">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {cellMembers.map((member, i) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="card-surface p-8 flex flex-col items-center text-center group hover:-translate-y-1 transition-transform border-t-4 border-maroon-500"
              >
                <div className="w-24 h-24 rounded-full bg-maroon-50 border-2 border-maroon-200 flex items-center justify-center mb-6 text-maroon-700 font-display text-3xl font-bold group-hover:bg-maroon-700 group-hover:text-white transition-colors">
                  {member.firstName.charAt(0)}
                </div>
                <h3 className="font-heading font-bold text-xl text-charcoal-900 mb-2">
                  {member.firstName} {member.lastName}
                </h3>
                <div className="flex flex-col gap-1">
                  {member.roles.filter(r => r.role.name.includes("Women's Cell")).map(r => (
                    <span key={r.role.name} className="text-gold-600 font-semibold text-sm uppercase tracking-wider">
                      {r.role.name.replace("Women's Cell ", "")}
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
