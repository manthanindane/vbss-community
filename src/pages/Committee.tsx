import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import PageHero from '@/components/layout/PageHero';
import MemberCard from '@/components/shared/MemberCard';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { members } from '@/data/members';

export default function Committee() {
  const president = members.find((m) => m.designation === 'President');
  const otherMembers = members.filter((m) => m.designation !== 'President');

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <PageHero
        title="Our Leadership"
        subtitle="Meet the dedicated individuals who lead and serve the Vaishya Bhartiya Suri Samaj."
      />

      {/* President's Message */}
      {president && (
        <section className="section-padding">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="border-0 shadow-[0_8px_60px_rgba(0,0,0,0.06)] rounded-3xl overflow-hidden max-w-4xl mx-auto">
                <div className="h-2 bg-gradient-to-r from-primary-600 via-accent-500 to-primary-600" />
                <CardContent className="p-8 lg:p-12">
                  <div className="flex flex-col md:flex-row items-start gap-8">
                    <div className="flex-shrink-0">
                      <Avatar className="w-28 h-28 ring-4 ring-primary-100">
                        <AvatarImage src={president.image} alt={president.name} />
                        <AvatarFallback className="bg-primary-100 text-primary-700 font-display text-2xl font-bold">RK</AvatarFallback>
                      </Avatar>
                    </div>
                    <div className="flex-1">
                      <Quote className="w-8 h-8 text-primary-200 mb-3" />
                      <p className="text-slate text-base leading-relaxed italic">
                        {president.message}
                      </p>
                      <div className="mt-6 pt-4 border-t border-primary-50">
                        <p className="font-display text-lg font-bold text-charcoal">{president.name}</p>
                        <p className="text-primary-600 text-sm font-medium">{president.designation}, Vaishya Bhartiya Suri Samaj</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>
      )}

      {/* Committee Members */}
      <section className="section-padding bg-gradient-to-b from-cream-50 to-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-charcoal">Committee Members</h2>
            <p className="text-slate mt-3 max-w-lg mx-auto">The dedicated team working behind the scenes to make our community thrive.</p>
            <div className="mt-4 flex items-center justify-center gap-2">
              <div className="h-0.5 w-10 rounded-full bg-primary-600" />
              <div className="h-0.5 w-3 rounded-full bg-accent-500" />
            </div>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {otherMembers.map((member, i) => (
              <MemberCard key={member.id} member={member} index={i} />
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
}
