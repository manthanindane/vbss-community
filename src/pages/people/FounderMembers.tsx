import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import PageTransition from '@/components/shared/PageTransition';
import PageHero from '@/components/layout/PageHero';
import { mockMembers } from '@/data/mockDatabase';
import { Input } from '@/components/ui/input';
import { useLanguage } from '@/context/LanguageContext';

export default function FounderMembers() {
  const { t } = useLanguage();
  const [search, setSearch] = useState('');

  const founders = mockMembers.filter(m => m.isFounderMember);
  
  const filteredFounders = founders.filter(m => {
    const fullName = `${m.firstName} ${m.lastName}`.toLowerCase();
    return fullName.includes(search.toLowerCase());
  });

  return (
    <PageTransition>
      <PageHero 
        title={t("Founder Members", "संस्थापक सदस्य")}
        hindiTitle="संस्थापक सदस्य"
        subtitle={t("The visionaries who laid the foundation of Vaishya Bhartiya Suri Samaj", "वे दूरदर्शी जिन्होंने वैश्य भारतीय सूड़ी समाज की नींव रखी")}
      />

      <div className="section-padding bg-cream-50 min-h-screen">
        <div className="container-main">
          
          <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
            <div>
              <h2 className="font-display text-3xl font-bold text-charcoal-900">
                {t("Honoring our Founders", "हमारे संस्थापकों का सम्मान")}
              </h2>
              <p className="text-charcoal-500 mt-2">
                {t(`Showing ${filteredFounders.length} founder members`, `${filteredFounders.length} संस्थापक सदस्य दिखा रहे हैं`)}
              </p>
            </div>
            
            <div className="relative w-full md:w-72">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-charcoal-400" />
              <Input 
                placeholder={t("Search founders...", "संस्थापकों को खोजें...")}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-9"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredFounders.map((member, i) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: (i % 10) * 0.05 }}
                className="card-surface p-6 flex flex-col items-center text-center group hover:-translate-y-1 transition-transform"
              >
                <div className="w-20 h-20 rounded-full bg-maroon-50 border border-maroon-100 flex items-center justify-center mb-4 text-maroon-700 font-display text-2xl font-bold group-hover:bg-maroon-700 group-hover:text-white transition-colors">
                  {member.firstName.charAt(0)}
                </div>
                <h3 className="font-heading font-bold text-lg text-charcoal-900">
                  {member.firstName} {member.lastName}
                </h3>
                {member.memberId && (
                  <span className="text-xs font-mono text-charcoal-400 mt-1 bg-cream-100 px-2 py-0.5 rounded">
                    {member.memberId}
                  </span>
                )}
                <span className="text-sm text-gold-600 font-medium mt-3">Founder Member</span>
              </motion.div>
            ))}
          </div>

          {filteredFounders.length === 0 && (
            <div className="text-center py-20 text-charcoal-500">
              {t("No founder members found matching your search.", "आपकी खोज से मेल खाने वाले कोई संस्थापक सदस्य नहीं मिले।")}
            </div>
          )}

        </div>
      </div>
    </PageTransition>
  );
}
