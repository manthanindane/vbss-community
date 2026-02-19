import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const pillars = [
  { num: '01', title: 'Education & Scholarships', desc: 'Merit scholarships, career guidance and mentorship for Suri Vaishya students across four states.' },
  { num: '02', title: 'Health & Welfare',         desc: 'Free medical camps, screenings and social welfare programs for community members in need.' },
  { num: '03', title: 'Women Empowerment',        desc: 'Skill development, self-help groups, legal awareness and leadership programs for women.' },
  { num: '04', title: 'Marriage Support',         desc: 'Community marriage bureau and financial assistance for families needing support.' },
];

export default function AboutPreview() {
  return (
    <section className="section-padding" style={{ background: '#FAFAF7' }}>
      <div className="container-custom">

        {/* ── Header row — asymmetric 40/60 split ── */}
        <div className="grid lg:grid-cols-[2fr_3fr] gap-10 lg:gap-20 mb-14 items-end">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.48 }}
          >
            <span className="section-num block mb-2">02 — About</span>
            <div
              className="mb-4"
              style={{ width: 28, height: 3, borderRadius: 99, background: 'linear-gradient(90deg, #1B4D3E, #4A9A7C)' }}
            />
            <h2
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: 'clamp(1.9rem, 3.8vw, 2.9rem)',
                fontWeight: 800,
                letterSpacing: '-0.03em',
                lineHeight: 1.12,
                color: '#1A1A2E',
              }}
            >
              Built for the Suri Vaishya Community
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.48, delay: 0.1 }}
            className="flex flex-col justify-end gap-5"
          >
            <p
              style={{
                fontFamily: "'Satoshi', sans-serif",
                fontSize: '1rem',
                lineHeight: 1.8,
                color: '#6B7280',
                maxWidth: 520,
              }}
            >
              Incorporated under the Society Registration Act 1860 and Mumbai Public Trust Act 1950,
              VBSS unites Suri and Kalwar Vaishya families across Bihar, Jharkhand, Odisha and West
              Bengal through welfare, culture and advocacy.
            </p>

            {/* EBC advocacy callout */}
            <div
              className="rounded-xl p-4 flex gap-3"
              style={{ background: '#F0FAF5', border: '1px solid #B3D9C7' }}
            >
              <span
                className="mt-0.5 w-1.5 h-1.5 rounded-full shrink-0"
                style={{ backgroundColor: '#D97706', marginTop: 6 }}
              />
              <p
                style={{
                  fontFamily: "'Satoshi', sans-serif",
                  fontSize: '0.875rem',
                  lineHeight: 1.7,
                  color: '#374151',
                }}
              >
                <span style={{ fontWeight: 700, color: '#1B4D3E' }}>Active Advocacy — </span>
                Demanding EBC classification for Suri &amp; Kalwar Vaishya in Bihar, in line with
                recognition already granted in Jharkhand, Odisha and West Bengal.
              </p>
            </div>

            <Link
              to="/about"
              className="group self-start inline-flex items-center gap-1.5 text-[13px] font-semibold transition-all duration-200"
              style={{ color: '#1B4D3E', fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Full Story
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* ── Pillars — staggered grid ── */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {pillars.map(({ num, title, desc }, i) => (
            <motion.div
              key={num}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.09, duration: 0.44 }}
              className="card-surface p-6"
              style={{ marginTop: [0, 28, 0, 28][i] }}
            >
              <p
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: '2.2rem',
                  fontWeight: 800,
                  letterSpacing: '-0.04em',
                  lineHeight: 1,
                  color: i % 2 === 0 ? '#E8E8E2' : '#D97706',
                  marginBottom: '1rem',
                }}
              >
                {num}
              </p>
              <h3
                className="font-semibold text-ink mb-2"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '0.92rem' }}
              >
                {title}
              </h3>
              <p
                style={{ fontFamily: "'Satoshi', sans-serif", fontSize: '0.82rem', lineHeight: 1.65, color: '#9CA3AF' }}
              >
                {desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
