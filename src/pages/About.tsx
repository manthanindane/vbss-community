import React from 'react';
import { motion } from 'framer-motion';
import { Shield, AlertTriangle, Target, Eye, Heart, Scale, BookOpen, Users } from 'lucide-react';
import PageTransition from '@/components/shared/PageTransition';
import PageHero from '@/components/layout/PageHero';
import SectionHeading from '@/components/shared/SectionHeading';

export default function About() {
  const timelineEvents = [
    { year: '2012', title: 'Foundation', desc: 'VBSS formally registered in Mumbai' },
    { year: '2013', title: 'First Annual Gathering', desc: 'Over 200 families united for the first event' },
    { year: '2015', title: 'Women Wing Launched', desc: 'Focusing on empowerment and skill development' },
    { year: '2017', title: 'Youth Wing Established', desc: 'Connecting the next generation with our roots' },
    { year: '2019', title: 'Health Initiative', desc: 'First free mega medical camp organized' },
    { year: '2021', title: 'Community Growth', desc: 'Crossed the 500 active member milestone' },
    { year: '2024', title: 'Expansion', desc: 'Membership crossed 700 families across 4 states' },
    { year: '2025', title: 'Education Focus', desc: 'Record 42 scholarships awarded in a single year' },
  ];

  return (
    <PageTransition>
      <PageHero 
        title="About Our Samaj" 
        hindiTitle="हमारे बारे में"
        subtitle="Learn about our history, mission, and the values that unite us"
      />

      <div id="main-content">
        {/* History Section */}
        <section className="section-padding">
          <div className="container-main">
            <SectionHeading title="Our Story" hindiTitle="हमारी कहानी" />
            
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative rounded-2xl overflow-hidden shadow-soft-xl"
              >
                <img 
                  src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=600&fit=crop" 
                  alt="Community Gathering" 
                  className="w-full h-full object-cover"
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="prose prose-lg prose-charcoal max-w-none">
                  <p className="mb-4">
                    The Vaishya Bhartiya Suri Samaj (VBSS) represents the vibrant and enterprising Suri Vaishya merchant community, with roots primarily in Bihar, Jharkhand, Odisha, and West Bengal.
                  </p>
                  <p className="mb-4">
                    Founded in 2012 by a group of visionary community leaders, VBSS was established with a singular goal: to unite our scattered families under one umbrella, providing a platform for mutual support, cultural preservation, and collective progress.
                  </p>
                  <p className="mb-8">
                    Historically known for our strong business acumen and ethical trading practices, our community now spans diverse professions. VBSS ensures that while we march forward, we remain deeply connected to the values of our ancestors.
                  </p>
                </div>
                
                <div className="card-surface p-6 flex flex-col sm:flex-row items-center sm:items-start gap-4 bg-cream-50/50">
                  <div className="w-12 h-12 rounded-full bg-gold-100 flex items-center justify-center shrink-0">
                    <Shield className="w-6 h-6 text-gold-600" />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-charcoal-900 mb-2 text-center sm:text-left">Registered Organization</h4>
                    <p className="text-sm text-charcoal-600 text-center sm:text-left">
                      Officially registered under the Society Registration Act 1860 (GBBSD 2448/2012) and the Mumbai Public Trust Act 1950 (F-49747).
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* EBC Advocacy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-gold-50 border-l-4 border-l-gold-500 p-6 rounded-r-2xl flex flex-col sm:flex-row gap-4 items-start"
            >
              <AlertTriangle className="w-6 h-6 text-gold-600 shrink-0 mt-1" />
              <div>
                <h4 className="font-heading font-semibold text-charcoal-900 mb-2">Community Advocacy</h4>
                <p className="text-sm text-charcoal-700">
                  VBSS actively champions the inclusion of the Suri and Kalwar Vaishya communities in Bihar's Extremely Backward Classes (EBC) list, advocating for parity with the recognition already granted in neighboring states like Jharkhand and West Bengal.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="section-padding bg-cream-100/50">
          <div className="container-main">
            <div className="grid lg:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="card-surface p-8 lg:p-12"
              >
                <div className="w-16 h-16 rounded-2xl bg-maroon-50 flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-maroon-700" />
                </div>
                <h3 className="font-display text-3xl font-bold text-charcoal-900 mb-4">Our Mission</h3>
                <p className="text-lg text-charcoal-600 leading-relaxed">
                  To unite, empower, and uplift the Suri Vaishya community by providing educational support, facilitating healthcare access, promoting women's empowerment, and preserving our rich cultural heritage for future generations.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="card-surface p-8 lg:p-12"
              >
                <div className="w-16 h-16 rounded-2xl bg-gold-50 flex items-center justify-center mb-6">
                  <Eye className="w-8 h-8 text-gold-600" />
                </div>
                <h3 className="font-display text-3xl font-bold text-charcoal-900 mb-4">Our Vision</h3>
                <p className="text-lg text-charcoal-600 leading-relaxed">
                  To be recognized as a model community organization that successfully bridges traditional values with modern aspirations, ensuring every member of the samaj has the opportunity to thrive and succeed.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="section-padding">
          <div className="container-main">
            <SectionHeading title="Core Values" hindiTitle="मूल्य" />
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: 'Compassion', icon: Heart, bg: 'bg-maroon-50', text: 'text-maroon-700', desc: 'Caring for the vulnerable members of our community through dedicated welfare programs.' },
                { title: 'Integrity', icon: Scale, bg: 'bg-gold-50', text: 'text-gold-700', desc: 'Upholding the honest business practices and ethical standards of our ancestors.' },
                { title: 'Education', icon: BookOpen, bg: 'bg-terracotta-50', text: 'text-terracotta-700', desc: 'Believing that knowledge is the foundation of progress and empowerment.' },
                { title: 'Unity', icon: Users, bg: 'bg-sage-50', text: 'text-sage-700', desc: 'Standing together in times of need and celebrating our successes collectively.' },
              ].map((value, i) => {
                const Icon = value.icon;
                return (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="card-surface p-6"
                  >
                    <div className={`w-14 h-14 rounded-2xl ${value.bg} flex items-center justify-center mb-6`}>
                      <Icon className={`w-7 h-7 ${value.text}`} />
                    </div>
                    <h4 className="font-heading text-xl font-bold text-charcoal-900 mb-3">{value.title}</h4>
                    <p className="text-sm text-charcoal-600 leading-relaxed">{value.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="section-padding bg-cream-100/50">
          <div className="container-main">
            <SectionHeading title="Our Journey" hindiTitle="हमारी यात्रा" />
            
            <div className="relative max-w-4xl mx-auto mt-12">
              {/* Central Line */}
              <div className="absolute left-[15px] lg:left-1/2 top-0 bottom-0 w-0.5 bg-gold-200 lg:-translate-x-1/2"></div>
              
              <div className="space-y-12">
                {timelineEvents.map((item, i) => (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.5 }}
                    className={`relative flex flex-col lg:flex-row items-start lg:items-center ${
                      i % 2 === 0 ? 'lg:flex-row-reverse' : ''
                    }`}
                  >
                    {/* Dot */}
                    <div className="absolute left-0 lg:left-1/2 w-8 h-8 rounded-full bg-gold-500 border-4 border-white shadow-soft lg:-translate-x-1/2 z-10"></div>
                    
                    {/* Content Box */}
                    <div className={`ml-12 lg:ml-0 lg:w-1/2 ${i % 2 === 0 ? 'lg:pl-16' : 'lg:pr-16 lg:text-right'}`}>
                      <div className="card-surface p-6 inline-block w-full">
                        <span className="font-display text-3xl font-bold gradient-text block mb-2">{item.year}</span>
                        <h4 className="font-heading text-lg font-bold text-charcoal-900 mb-2">{item.title}</h4>
                        <p className="text-sm text-charcoal-600">{item.desc}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
