import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const cut = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.22, delay, ease: [0.16, 1, 0.3, 1] as [number,number,number,number] },
});

export default function HeroSection() {
  return (
    <section className="border-b-4 border-black" style={{ paddingTop: 56 }}>
      {/* TICKER STRIP */}
      <div className="bg-black overflow-hidden border-b-2 border-black" style={{ height: 36 }}>
        <div
          className="flex items-center gap-12 whitespace-nowrap text-white h-full"
          style={{
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: '0.62rem',
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            animation: 'marquee 28s linear infinite',
          }}
        >
          {Array(6).fill(null).map((_, i) => (
            <span key={i} className="flex items-center gap-8">
              <span>Vaishya Bhartiya Suri Samaj</span>
              <span style={{ color: '#E60023' }}>✦</span>
              <span>Est. 2012</span>
              <span style={{ color: '#E60023' }}>✦</span>
              <span>GBBSD 2448/2012</span>
              <span style={{ color: '#E60023' }}>✦</span>
              <span>F-49747 Mumbai</span>
              <span style={{ color: '#E60023' }}>✦</span>
              <span>Bihar · Jharkhand · Odisha · West Bengal</span>
              <span style={{ color: '#E60023' }}>✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* MAIN HERO GRID */}
      <div className="grid lg:grid-cols-[1fr_420px] min-h-[calc(100vh-92px)]">

        {/* LEFT — headline block */}
        <div className="border-r-2 border-black flex flex-col justify-between p-8 lg:p-14">
          {/* Top label row */}
          <motion.div {...cut(0.05)} className="flex items-center gap-4">
            <span
              className="px-3 py-1 border-2 text-white font-black text-xs tracking-widest uppercase"
              style={{ backgroundColor: '#E60023', borderColor: '#E60023', fontFamily: 'Barlow Condensed, monospace', letterSpacing: '0.12em' }}
            >
              Community Organisation
            </span>
            <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#888' }}>
              01 / 04
            </span>
          </motion.div>

          {/* Giant headline */}
          <div className="my-8 lg:my-0">
            <motion.h1
              {...cut(0.1)}
              className="font-display text-white bg-black leading-none uppercase"
              style={{
                fontFamily: 'Barlow Condensed, sans-serif',
                fontSize: 'clamp(4.5rem, 11vw, 10.5rem)',
                fontWeight: 900,
                letterSpacing: '-0.04em',
                lineHeight: 0.88,
                padding: '16px 24px',
                display: 'inline-block',
              }}
            >
              SURI<br />VAISHYA<br />SAMAJ
            </motion.h1>

            <motion.div {...cut(0.18)} className="mt-6 flex items-start gap-6">
              <div
                className="shrink-0 text-white font-black uppercase"
                style={{ backgroundColor: '#E60023', padding: '8px 14px', fontFamily: 'Barlow Condensed, sans-serif', fontSize: '1.1rem', letterSpacing: '-0.01em', lineHeight: 1 }}
              >
                INDIA
              </div>
              <p
                className="text-black leading-relaxed"
                style={{ fontFamily: 'Barlow, sans-serif', fontSize: '1rem', fontWeight: 400, maxWidth: 420, lineHeight: 1.6 }}
              >
                A registered organisation advancing education, health, marriage
                support and women empowerment for Suri Vaishya families across
                Bihar, Jharkhand, Odisha and West Bengal.
              </p>
            </motion.div>
          </div>

          {/* CTA row */}
          <motion.div {...cut(0.24)} className="flex flex-wrap items-center gap-4">
            <Link
              to="/about"
              className="group inline-flex items-center gap-3 border-2 border-black bg-black text-white font-black uppercase tracking-widest px-7 py-4 transition-all duration-100 hover:bg-white hover:text-black"
              style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '1rem', letterSpacing: '0.1em' }}
            >
              About VBSS
              <span className="group-hover:translate-x-1 transition-transform duration-100">&rarr;</span>
            </Link>
            <Link
              to="/events"
              className="group inline-flex items-center gap-3 border-2 border-black bg-white text-black font-black uppercase tracking-widest px-7 py-4 transition-all duration-100 hover:bg-black hover:text-white"
              style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '1rem', letterSpacing: '0.1em' }}
            >
              Events
              <span className="group-hover:translate-x-1 transition-transform duration-100">&rarr;</span>
            </Link>
          </motion.div>
        </div>

        {/* RIGHT — Bento stack */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.15 }}
          className="flex flex-col border-l-0"
        >
          {/* Top image */}
          <div className="relative border-b-2 border-black" style={{ flex: '0 0 42%' }}>
            <img
              src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=700&h=400&fit=crop"
              alt="Annual Samaj Gathering"
              className="w-full h-full object-cover"
              style={{ display: 'block' }}
            />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 60%)' }} />
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.6rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)', marginBottom: 4 }}>Annual Gathering</p>
              <p className="text-white font-display text-xl uppercase" style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 700 }}>Mumbai, 2025</p>
            </div>
          </div>

          {/* Middle — 2 stat boxes */}
          <div className="grid grid-cols-2 border-b-2 border-black" style={{ flex: '0 0 20%' }}>
            <div className="border-r-2 border-black p-5 flex flex-col justify-between">
              <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.6rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#888' }}>Members</span>
              <p className="font-display text-black" style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '3.5rem', fontWeight: 900, letterSpacing: '-0.04em', lineHeight: 1 }}>700+</p>
            </div>
            <div className="p-5 flex flex-col justify-between">
              <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.6rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#888' }}>Events</span>
              <p className="font-display" style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '3.5rem', fontWeight: 900, letterSpacing: '-0.04em', lineHeight: 1, color: '#E60023' }}>50+</p>
            </div>
          </div>

          {/* Second image */}
          <div className="relative border-b-2 border-black" style={{ flex: '0 0 24%' }}>
            <img
              src="https://images.unsplash.com/photo-1607748862156-7c548e7e98f4?w=700&h=300&fit=crop"
              alt="Women Empowerment Program"
              className="w-full h-full object-cover"
              style={{ display: 'block' }}
            />
            <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.35)' }} />
            <div className="absolute inset-0 flex items-center justify-center">
              <span
                className="text-white font-display uppercase text-center px-4"
                style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: 'clamp(1.4rem,3.5vw,2.5rem)', fontWeight: 800, letterSpacing: '-0.02em', lineHeight: 1.1 }}
              >
                Women Empowerment
              </span>
            </div>
          </div>

          {/* Bottom reg block */}
          <div className="bg-black p-5 flex-1 flex flex-col justify-between">
            <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.6rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)' }}>Registration</span>
            <div className="space-y-2">
              <div className="flex justify-between items-center border-b border-white/10 pb-1.5">
                <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.58rem', color: 'rgba(255,255,255,0.5)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>Society Act 1860</span>
                <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.65rem', color: '#E60023', fontWeight: 600, letterSpacing: '0.06em' }}>GBBSD 2448/2012</span>
              </div>
              <div className="flex justify-between items-center">
                <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.58rem', color: 'rgba(255,255,255,0.5)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>Mum. Public Trust 1950</span>
                <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.65rem', color: '#E60023', fontWeight: 600, letterSpacing: '0.06em' }}>F-49747</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
