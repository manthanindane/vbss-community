import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const pillars = [
  { num: '01', title: 'Education & Scholarships', desc: 'Supporting meritorious students with scholarships, career guidance and mentorship across all four states.' },
  { num: '02', title: 'Health & Welfare',          desc: 'Organising free medical camps, health screenings and social welfare programs for community members.' },
  { num: '03', title: 'Women Empowerment',         desc: 'Skill development, SHG formation, legal awareness and leadership programs for women in the community.' },
  { num: '04', title: 'Marriage Support',          desc: 'Community-managed marriage bureau and financial support for families needing assistance.' },
];

export default function AboutPreview() {
  return (
    <section className="border-b-4 border-black">
      {/* Section header */}
      <div className="border-b-2 border-black px-8 lg:px-14 py-5 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <span
            className="font-display text-white px-3 py-1 text-sm font-black uppercase tracking-widest"
            style={{ backgroundColor: '#E60023', fontFamily: 'Barlow Condensed, sans-serif', letterSpacing: '0.1em' }}
          >
            02
          </span>
          <span className="font-display text-black uppercase font-black text-xl" style={{ fontFamily: 'Barlow Condensed, sans-serif', letterSpacing: '0.05em' }}>
            Who We Are
          </span>
        </div>
        <Link
          to="/about"
          className="border-2 border-black px-4 py-1.5 font-black uppercase text-xs tracking-widest hover:bg-black hover:text-white transition-colors duration-100"
          style={{ fontFamily: 'Barlow Condensed, sans-serif', letterSpacing: '0.1em' }}
        >
          Full Story &rarr;
        </Link>
      </div>

      <div className="grid lg:grid-cols-2">
        {/* Left — Big statement */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="border-r-2 border-black p-8 lg:p-14 flex flex-col justify-between"
        >
          <h2
            className="font-display uppercase text-black"
            style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: 'clamp(2.5rem,5.5vw,5rem)', fontWeight: 900, letterSpacing: '-0.03em', lineHeight: 0.92 }}
          >
            ADVANCING THE SURI VAISHYA COMMUNITY THROUGH COLLECTIVE ACTION
          </h2>
          <div className="mt-8">
            <p style={{ fontFamily: 'Barlow, sans-serif', fontSize: '0.95rem', lineHeight: 1.65, color: '#333', maxWidth: 480 }}>
              VBSS is incorporated under the Society Registration Act 1860 and the Mumbai
              Public Trust Act 1950. Our mandate covers Bihar, Jharkhand, Odisha and
              West Bengal — states where the Suri and Kalwar Vaishya communities have
              historically contributed to trade and commerce.
            </p>
            <div
              className="mt-6 inline-block border-2 border-black p-4"
              style={{ borderLeftWidth: 6, borderColor: '#E60023' }}
            >
              <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.62rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#888', marginBottom: 4 }}>Ongoing Advocacy</p>
              <p style={{ fontFamily: 'Barlow, sans-serif', fontSize: '0.9rem', fontWeight: 600, lineHeight: 1.5, color: '#000', maxWidth: 360 }}>
                Demanding EBC (Extremely Backward Class) classification for Suri
                &amp; Kalwar Vaishya in Bihar — a status already granted in JH, OD &amp; WB.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Right — 4 pillars grid */}
        <div className="grid grid-cols-2">
          {pillars.map((p, i) => (
            <motion.div
              key={p.num}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
              className={`p-6 lg:p-8 flex flex-col gap-3 ${
                i % 2 === 0 ? 'border-r-2 border-black' : ''
              } ${
                i < 2 ? 'border-b-2 border-black' : ''
              }`}
            >
              <span
                className="font-display text-4xl font-black"
                style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '3rem', fontWeight: 900, color: i % 2 === 0 ? '#000' : '#E60023', lineHeight: 1 }}
              >
                {p.num}
              </span>
              <h3
                className="font-display font-black uppercase text-black"
                style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '1.1rem', letterSpacing: '-0.01em', lineHeight: 1.1 }}
              >
                {p.title}
              </h3>
              <p style={{ fontFamily: 'Barlow, sans-serif', fontSize: '0.8rem', lineHeight: 1.6, color: '#555' }}>{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
