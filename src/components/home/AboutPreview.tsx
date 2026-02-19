import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const pillars = [
  { num: '01', title: 'Education & Scholarships', desc: 'Merit scholarships, career guidance and mentorship for Suri Vaishya students across four states.' },
  { num: '02', title: 'Health & Welfare',          desc: 'Free medical camps, screenings and social welfare programs for community members.' },
  { num: '03', title: 'Women Empowerment',         desc: 'Skill development, self-help groups, legal awareness and leadership programs.' },
  { num: '04', title: 'Marriage Support',          desc: 'Community marriage bureau and financial assistance for families in need.' },
];

export default function AboutPreview() {
  return (
    <section className="section-padding" style={{ background: '#FAF7F2' }}>
      <div className="container-custom">
        {/* Asymmetric header row */}
        <div className="grid lg:grid-cols-[2fr_3fr] gap-10 lg:gap-20 mb-14 items-end">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="accent-bar" />
            <span className="label block mb-3">Who We Are</span>
            <h2
              className="font-display text-ink"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, lineHeight: 1.15, letterSpacing: '-0.02em' }}
            >
              Advancing the Suri Vaishya Community
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col justify-end gap-5"
          >
            <p
              className="text-stone-500 leading-relaxed"
              style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '1rem', maxWidth: 520, lineHeight: 1.75 }}
            >
              VBSS is incorporated under the Society Registration Act 1860 and the Mumbai
              Public Trust Act 1950. Our mandate covers Bihar, Jharkhand, Odisha and West Bengal —
              states where Suri and Kalwar Vaishya communities have deep roots in trade and commerce.
            </p>
            {/* EBC callout — inline, clean */}
            <div
              className="p-4 rounded-lg text-sm text-stone-600 leading-relaxed"
              style={{ background: '#FFF4F4', borderLeft: '3px solid #9B2335', fontFamily: 'DM Sans, sans-serif' }}
            >
              <span className="font-semibold text-[#9B2335]">Ongoing Advocacy — </span>
              Demanding EBC classification for Suri &amp; Kalwar Vaishya in Bihar, in line with
              recognition already granted in Jharkhand, Odisha and West Bengal.
            </div>
            <Link
              to="/about"
              className="group self-start inline-flex items-center gap-2 text-[13px] font-semibold transition-all duration-200"
              style={{ color: '#9B2335', fontFamily: 'DM Sans, sans-serif' }}
            >
              Full Story <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* Pillars — asymmetric 4-column with staggered top margins */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {pillars.map(({ num, title, desc }, i) => (
            <motion.div
              key={num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.45 }}
              className="card-warm p-6 transition-all"
              style={{ marginTop: [0, 24, 0, 24][i] }}
            >
              <p
                className="font-display font-bold mb-4"
                style={{ fontSize: '2.4rem', color: i % 2 === 0 ? '#EDE6DA' : '#9B2335', lineHeight: 1 }}
              >
                {num}
              </p>
              <h3 className="font-semibold text-ink text-[15px] mb-2" style={{ fontFamily: 'DM Sans, sans-serif' }}>{title}</h3>
              <p className="text-stone-400 text-[13px] leading-relaxed" style={{ fontFamily: 'DM Sans, sans-serif' }}>{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
