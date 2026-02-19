import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Landmark, HeartHandshake, GraduationCap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const features = [
  {
    icon: Landmark,
    title: 'Cultural Preservation',
    desc: 'Safeguarding our centuries-old traditions, rituals, and values through active community programs.',
    color: 'from-primary-500 to-primary-600',
    bg: 'bg-primary-50',
  },
  {
    icon: HeartHandshake,
    title: 'Community Welfare',
    desc: 'Supporting members through health camps, financial aid programs, and social welfare initiatives.',
    color: 'from-accent-500 to-accent-600',
    bg: 'bg-accent-50',
  },
  {
    icon: GraduationCap,
    title: 'Youth Empowerment',
    desc: 'Scholarships, mentorship, career guidance, and leadership programs for the next generation.',
    color: 'from-emerald-500 to-emerald-600',
    bg: 'bg-emerald-50',
  },
];

export default function AboutPreview() {
  return (
    <section className="section-padding relative">
      <div className="container-custom">
        {/* Top content */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-start mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-primary-500/60 font-display text-sm mb-2 uppercase tracking-widest">Who We Are</p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-charcoal leading-[1.15] tracking-tight">
              Dedicated to preserving our{' '}
              <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
                rich cultural heritage
              </span>
            </h2>
            <div className="mt-4 flex items-center gap-2">
              <div className="h-0.5 w-10 rounded-full bg-primary-600" />
              <div className="h-0.5 w-3 rounded-full bg-accent-500" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-slate text-base lg:text-lg leading-relaxed">
              The Vaishya Bhartiya Suri Samaj was established in 1998 with a vision to unite the Vaishya
              Suri community of Mumbai. Over two decades, we have grown into a 700+ member strong
              organization that celebrates traditions, supports welfare, and empowers youth through
              education and cultural programs.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-primary-600 font-semibold text-sm mt-5 group hover:gap-3 transition-all"
            >
              Learn More About Us
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* Feature Cards */}
        <div className="grid sm:grid-cols-3 gap-5">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ delay: i * 0.12, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <Card className="border-0 shadow-[0_2px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_40px_rgba(155,35,53,0.06)] transition-all duration-500 bg-white rounded-2xl h-full group">
                <CardContent className="p-6">
                  <div className={`w-12 h-12 rounded-xl ${feature.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-5 h-5 text-current" style={{ color: feature.title === 'Cultural Preservation' ? '#9B2335' : feature.title === 'Community Welfare' ? '#D97706' : '#059669' }} />
                  </div>
                  <h3 className="font-display text-lg font-bold text-charcoal mb-2">{feature.title}</h3>
                  <p className="text-slate text-sm leading-relaxed">{feature.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
