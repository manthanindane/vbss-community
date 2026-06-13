import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, MapPin, Phone, User, Filter } from 'lucide-react';
import PageTransition from '@/components/shared/PageTransition';
import PageHero from '@/components/layout/PageHero';
import { mockMembers } from '@/data/mockDatabase';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/context/LanguageContext';

export default function Directory() {
  const { t } = useLanguage();
  const [search, setSearch] = useState('');
  const [cityFilter, setCityFilter] = useState('');
  const [stateFilter, setStateFilter] = useState('');

  const filteredMembers = mockMembers.filter(m => {
    const searchString = `${m.firstName} ${m.lastName} ${m.phoneNumber} ${m.memberId || ''}`.toLowerCase();
    const matchesSearch = searchString.includes(search.toLowerCase());
    const matchesCity = cityFilter ? m.city === cityFilter : true;
    const matchesState = stateFilter ? m.state === stateFilter : true;
    return matchesSearch && matchesCity && matchesState;
  });

  const uniqueCities = Array.from(new Set(mockMembers.map(m => m.city).filter(Boolean))) as string[];
  const uniqueStates = Array.from(new Set(mockMembers.map(m => m.state).filter(Boolean))) as string[];

  return (
    <PageTransition>
      <PageHero 
        title={t("Member Directory", "सदस्य निर्देशिका")}
        hindiTitle="सदस्य निर्देशिका"
        subtitle={t("Connect with community members across the nation", "देश भर में समुदाय के सदस्यों से जुड़ें")}
      />

      <div className="section-padding bg-cream-50 min-h-screen">
        <div className="container-main">
          
          <div className="card-surface p-6 mb-10 flex flex-col lg:flex-row gap-4 items-end">
            <div className="w-full lg:w-1/3">
              <label className="text-xs font-semibold text-charcoal-500 uppercase tracking-wider mb-2 block">
                {t("Search Name, Phone, or ID", "नाम, फोन या आईडी खोजें")}
              </label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-charcoal-400" />
                <Input 
                  placeholder={t("Search...", "खोजें...")}
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="pl-9 bg-white"
                />
              </div>
            </div>
            <div className="w-full lg:w-1/4">
              <label className="text-xs font-semibold text-charcoal-500 uppercase tracking-wider mb-2 block">
                {t("Filter by City", "शहर द्वारा फ़िल्टर करें")}
              </label>
              <select 
                value={cityFilter}
                onChange={(e) => setCityFilter(e.target.value)}
                className="w-full rounded-xl border-cream-300 bg-white px-4 py-3 text-sm font-sans focus:border-gold-400 focus:ring-2 focus:ring-gold-200 transition-all outline-none"
              >
                <option value="">{t("All Cities", "सभी शहर")}</option>
                {uniqueCities.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>
            <div className="w-full lg:w-1/4">
              <label className="text-xs font-semibold text-charcoal-500 uppercase tracking-wider mb-2 block">
                {t("Filter by State", "राज्य द्वारा फ़िल्टर करें")}
              </label>
              <select 
                value={stateFilter}
                onChange={(e) => setStateFilter(e.target.value)}
                className="w-full rounded-xl border-cream-300 bg-white px-4 py-3 text-sm font-sans focus:border-gold-400 focus:ring-2 focus:ring-gold-200 transition-all outline-none"
              >
                <option value="">{t("All States", "सभी राज्य")}</option>
                {uniqueStates.map(s => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>
            <div className="w-full lg:w-auto flex gap-2">
              <Button onClick={() => { setSearch(''); setCityFilter(''); setStateFilter(''); }} variant="outline" className="w-full lg:w-auto h-11">
                {t("Clear", "साफ करें")}
              </Button>
            </div>
          </div>

          <p className="text-charcoal-500 mb-6 font-medium">
            {t(`Showing ${filteredMembers.length} members`, `${filteredMembers.length} सदस्य दिखा रहे हैं`)}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredMembers.map((member, i) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: (i % 10) * 0.05 }}
                className="card-surface p-6 hover:shadow-soft-lg transition-all border-l-4 border-transparent hover:border-gold-500 flex items-start gap-4"
              >
                <div className="w-14 h-14 rounded-full bg-cream-200 flex items-center justify-center text-charcoal-700 font-display text-xl font-bold shrink-0">
                  {member.firstName.charAt(0)}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="font-heading font-bold text-lg text-charcoal-900 truncate pr-2">
                      {member.firstName} {member.lastName}
                    </h3>
                    {member.memberId && (
                      <span className="text-[10px] font-mono text-charcoal-500 bg-cream-100 px-1.5 py-0.5 rounded border border-cream-200 shrink-0">
                        {member.memberId}
                      </span>
                    )}
                  </div>
                  
                  {member.roles.length > 0 && (
                    <div className="mb-3 flex flex-wrap gap-1">
                      {member.roles.map(r => (
                        <span key={r.role.name} className="text-[10px] uppercase tracking-wider font-semibold bg-maroon-50 text-maroon-700 px-2 py-0.5 rounded-full">
                          {r.role.name}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="flex flex-col gap-1.5 text-sm text-charcoal-600">
                    <div className="flex items-center gap-2">
                      <Phone className="w-3.5 h-3.5 text-gold-600" />
                      <span>{member.phoneNumber}</span>
                    </div>
                    {member.city && member.state && (
                      <div className="flex items-center gap-2">
                        <MapPin className="w-3.5 h-3.5 text-gold-600" />
                        <span className="truncate">{member.city}, {member.state}</span>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredMembers.length === 0 && (
            <div className="text-center py-20 text-charcoal-500">
              {t("No members found matching your search.", "आपकी खोज से मेल खाने वाले कोई सदस्य नहीं मिले।")}
            </div>
          )}

        </div>
      </div>
    </PageTransition>
  );
}
