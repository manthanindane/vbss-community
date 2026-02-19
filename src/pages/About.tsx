import { motion } from 'framer-motion';
import { Eye, Target, Heart, Shield, BookOpen, Handshake } from 'lucide-react';
import PageHero from '@/components/layout/PageHero';
import { Card, CardContent } from '@/components/ui/card';

const values = [
  { icon: Heart, title: 'Compassion', desc: 'Extending care and support to every member of our community in times of need and celebration alike.' },
  { icon: Shield, title: 'Integrity', desc: 'Upholding honesty, transparency, and ethical conduct in all our organizational activities and dealings.' },
  { icon: BookOpen, title: 'Education', desc: 'Investing in the intellectual growth of our youth through scholarships, mentorship, and learning programs.' },
  { icon: Handshake, title: 'Unity', desc: 'Fostering bonds of brotherhood and sisterhood that transcend generations and geographic boundaries.' },
];

const timeline = [
  { year: '1998', title: 'Foundation', desc: 'Vaishya Bhartiya Suri Samaj established by a group of 50 visionary community members in Dadar, Mumbai.' },
  { year: '2001', title: 'First Annual Meet', desc: 'The inaugural annual gathering attracted 200+ members, setting the tradition that continues today.' },
  { year: '2005', title: 'Registered Trust', desc: 'Officially registered as a charitable trust under the Bombay Public Trusts Act, strengthening our legal foundation.' },
  { year: '2010', title: 'Youth Wing Launch', desc: 'Established the Youth Wing to engage the next generation in community activities and leadership development.' },
  { year: '2015', title: 'Vaishya Suri Sandesh', desc: 'Launched our community newsletter to keep members informed about events, achievements, and opportunities.' },
  { year: '2020', title: 'Digital Transformation', desc: 'Embraced technology with online events, a digital membership directory, and WhatsApp communication groups.' },
  { year: '2023', title: '25th Anniversary', desc: 'Celebrated our silver jubilee with a grand ceremony attended by 600+ members from across Maharashtra.' },
  { year: '2026', title: 'Growing Strong', desc: 'With 700+ members and 15+ city chapters, we continue our mission of cultural preservation and community empowerment.' },
];

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <PageHero
        title="About Our Samaj"
        subtitle="Discover the story, mission, and values that drive the Vaishya Bhartiya Suri Samaj forward."
        hindiTitle="\u0939\u092e\u093e\u0930\u0947 \u092c\u093e\u0930\u0947 \u092e\u0947\u0902"
      />

      {/* History */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-primary-500/60 font-display text-sm uppercase tracking-widest mb-2">Our Story</p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-charcoal leading-tight mb-6">A Legacy of Community & Culture</h2>
              <div className="space-y-4 text-slate text-base leading-relaxed">
                <p>
                  The Vaishya Bhartiya Suri Samaj traces its roots to the rich merchant traditions of the Vaishya community.
                  Established in 1998, our organization was founded with a singular vision: to create a platform where the Vaishya
                  Suri families of Mumbai could come together to preserve their cultural heritage while adapting to the rapidly
                  changing modern world.
                </p>
                <p>
                  What began as a small gathering of 50 families in a rented hall in Dadar has blossomed into a thriving community
                  of over 700 members spread across 15 city chapters in Maharashtra. Our founders — led by the late Shri Hukumchand
                  Suri and Shri Nemichand Jain — envisioned a samaj that would be rooted in tradition yet progressive in outlook,
                  serving as a bridge between generations.
                </p>
                <p>
                  Over the past 25+ years, we have organized countless cultural programs, religious celebrations, health camps,
                  educational scholarships, and social welfare initiatives. Our annual gathering remains the highlight of the year,
                  drawing families from across the state for an evening of celebration, felicitation, and fellowship.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-gradient-to-b from-cream-50 to-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="border-0 shadow-[0_4px_30px_rgba(0,0,0,0.05)] rounded-2xl h-full bg-white overflow-hidden">
                <div className="h-1.5 bg-gradient-to-r from-primary-600 to-primary-400" />
                <CardContent className="p-8">
                  <div className="w-14 h-14 rounded-xl bg-primary-50 flex items-center justify-center mb-5">
                    <Target className="w-6 h-6 text-primary-600" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-charcoal mb-3">Our Mission</h3>
                  <p className="text-slate leading-relaxed">
                    To foster unity among the Vaishya Bhartiya Suri community, preserve our cultural and spiritual traditions,
                    provide welfare support to members in need, and empower the youth through education, mentorship, and
                    leadership opportunities.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Card className="border-0 shadow-[0_4px_30px_rgba(0,0,0,0.05)] rounded-2xl h-full bg-white overflow-hidden">
                <div className="h-1.5 bg-gradient-to-r from-accent-500 to-accent-400" />
                <CardContent className="p-8">
                  <div className="w-14 h-14 rounded-xl bg-accent-50 flex items-center justify-center mb-5">
                    <Eye className="w-6 h-6 text-accent-600" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-charcoal mb-3">Our Vision</h3>
                  <p className="text-slate leading-relaxed">
                    To be the most vibrant and inclusive community organization that serves as a model for cultural preservation,
                    social progress, and intergenerational harmony — a samaj where every member feels valued, supported,
                    and inspired.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-charcoal">Our Core Values</h2>
            <div className="mt-4 flex items-center justify-center gap-2">
              <div className="h-0.5 w-10 rounded-full bg-primary-600" />
              <div className="h-0.5 w-3 rounded-full bg-accent-500" />
            </div>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <Card className="border-0 shadow-[0_2px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_40px_rgba(155,35,53,0.06)] transition-all duration-500 rounded-2xl h-full group text-center">
                  <CardContent className="p-6">
                    <div className="w-14 h-14 rounded-xl bg-primary-50 group-hover:bg-primary-100 flex items-center justify-center mx-auto mb-4 transition-colors">
                      <v.icon className="w-6 h-6 text-primary-600" />
                    </div>
                    <h3 className="font-display text-lg font-bold text-charcoal mb-2">{v.title}</h3>
                    <p className="text-slate text-sm leading-relaxed">{v.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-gradient-to-b from-white to-cream-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-charcoal">Our Journey</h2>
            <p className="text-slate mt-3 max-w-lg mx-auto">Key milestones that shaped the Vaishya Bhartiya Suri Samaj.</p>
            <div className="mt-4 flex items-center justify-center gap-2">
              <div className="h-0.5 w-10 rounded-full bg-primary-600" />
              <div className="h-0.5 w-3 rounded-full bg-accent-500" />
            </div>
          </motion.div>

          <div className="max-w-3xl mx-auto relative">
            {/* Vertical line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary-200 via-primary-300 to-primary-200 -translate-x-1/2" />

            <div className="space-y-8">
              {timeline.map((item, i) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-30px' }}
                  transition={{ delay: i * 0.05, duration: 0.5 }}
                  className={`relative flex items-start gap-6 md:gap-8 ${
                    i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-6 md:left-1/2 w-4 h-4 rounded-full bg-white border-[3px] border-primary-500 -translate-x-1/2 mt-1.5 z-10 shadow-sm" />

                  {/* Content */}
                  <div className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${
                    i % 2 === 0 ? 'md:text-right md:pr-8' : 'md:text-left md:pl-8'
                  }`}>
                    <span className="inline-block text-primary-600 font-display text-sm font-bold mb-1 bg-primary-50 px-3 py-0.5 rounded-full">
                      {item.year}
                    </span>
                    <h3 className="font-display text-lg font-bold text-charcoal">{item.title}</h3>
                    <p className="text-slate text-sm leading-relaxed mt-1">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
