import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const up = (delay = 0) => ({
  initial: { opacity: 0, y: 22 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] },
});

export default function HeroSection() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ paddingTop: 60, background: '#FAF7F2' }}
    >
      {/* Very subtle warm texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle at 70% 30%, rgba(155,35,53,0.04) 0%, transparent 55%), radial-gradient(circle at 20% 80%, rgba(192,147,89,0.05) 0%, transparent 50%)',
        }}
      />

      <div className="container-custom">
        {/* ─── Asymmetric top section ─── */}
        <div className="grid lg:grid-cols-[3fr_2fr] gap-0 min-h-[88vh] items-center">

          {/* LEFT — text */}
          <div className="py-16 lg:py-24 lg:pr-16">
            {/* Label */}
            <motion.div {...up(0.05)} className="flex items-center gap-3 mb-8">
              <span
                className="inline-block h-px w-8"
                style={{ backgroundColor: '#9B2335' }}
              />
              <span className="label">Community Organisation · Est. 2012</span>
            </motion.div>

            {/* Headline — mixed serif + normal weight */}
            <motion.h1
              {...up(0.12)}
              className="font-display text-ink leading-tight"
              style={{ fontSize: 'clamp(2.6rem, 5.5vw, 4.5rem)', fontWeight: 800, lineHeight: 1.1, letterSpacing: '-0.02em', maxWidth: 580 }}
            >
              Uniting the&nbsp;
              <span style={{ color: '#9B2335', fontStyle: 'italic' }}>Suri Vaishya</span>
              <br />Community<br />Across India
            </motion.h1>

            {/* Sub */}
            <motion.p
              {...up(0.2)}
              className="mt-6 text-stone-500 leading-relaxed"
              style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '1.05rem', maxWidth: 460, lineHeight: 1.7 }}
            >
              A registered organisation advancing education, health,
              marriage support and women empowerment for Suri Vaishya families
              across Bihar, Jharkhand, Odisha and West Bengal.
            </motion.p>

            {/* CTAs */}
            <motion.div {...up(0.27)} className="mt-9 flex flex-wrap gap-3">
              <Link
                to="/about"
                className="group inline-flex items-center gap-2 px-6 py-3 text-[14px] font-semibold text-white rounded-md transition-all duration-200 hover:opacity-90"
                style={{ backgroundColor: '#9B2335', fontFamily: 'DM Sans, sans-serif' }}
              >
                About VBSS
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link
                to="/events"
                className="inline-flex items-center gap-2 px-6 py-3 text-[14px] font-semibold text-ink rounded-md border transition-all duration-200 hover:border-stone-400 hover:bg-stone-50"
                style={{ borderColor: '#D8CEBF', fontFamily: 'DM Sans, sans-serif' }}
              >
                View Events
              </Link>
            </motion.div>

            {/* Registration details — inline, subtle */}
            <motion.div
              {...up(0.34)}
              className="mt-12 flex flex-wrap gap-3"
            >
              {[
                { k: 'Reg.', v: 'GBBSD 2448/2012' },
                { k: 'Trust', v: 'F-49747 Mumbai' },
                { k: 'States', v: 'Bihar · JH · OD · WB' },
              ].map(({ k, v }) => (
                <span
                  key={k}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-[11.5px] text-stone-500 border"
                  style={{ borderColor: '#EDE6DA', backgroundColor: '#FFFFFF', fontFamily: 'DM Sans, sans-serif' }}
                >
                  <span className="font-semibold text-stone-400" style={{ fontSize: '0.62rem', letterSpacing: '0.08em', textTransform: 'uppercase' }}>{k}</span>
                  {v}
                </span>
              ))}
            </motion.div>
          </div>

          {/* RIGHT — asymmetric image collage */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:block relative py-16"
          >
            {/* Main image — offset left */}
            <div
              className="relative rounded-2xl overflow-hidden shadow-lg"
              style={{ height: 340, marginLeft: '-2rem', zIndex: 2 }}
            >
              <img
                src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=700&h=500&fit=crop"
                alt="Community gathering"
                className="w-full h-full object-cover"
              />
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(to top, rgba(28,25,23,0.35) 0%, transparent 60%)' }}
              />
              <div className="absolute bottom-4 left-5">
                <p className="text-white text-sm font-semibold" style={{ fontFamily: 'DM Sans, sans-serif' }}>Annual Samaj Gathering</p>
                <p className="text-white/60 text-xs mt-0.5" style={{ fontFamily: 'DM Sans, sans-serif' }}>Mumbai, 2025</p>
              </div>
            </div>

            {/* Floating stat card — offset right */}
            <div
              className="absolute top-24 right-0 z-10 bg-white rounded-xl shadow-md border p-5"
              style={{ borderColor: '#EDE6DA', width: 140 }}
            >
              <p
                className="font-display leading-none"
                style={{ fontSize: '2.8rem', fontWeight: 800, color: '#9B2335', lineHeight: 1 }}
              >700+</p>
              <p className="text-stone-500 text-xs mt-1.5" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 500 }}>Active Members</p>
            </div>

            {/* Second image — offset right, below */}
            <div
              className="relative rounded-xl overflow-hidden shadow-md mt-4"
              style={{ height: 180, marginRight: '-1rem', marginLeft: '2.5rem', zIndex: 2 }}
            >
              <img
                src="https://images.unsplash.com/photo-1607748862156-7c548e7e98f4?w=600&h=300&fit=crop"
                alt="Women empowerment program"
                className="w-full h-full object-cover"
              />
              <div
                className="absolute inset-0 flex items-end p-4"
                style={{ background: 'linear-gradient(to top, rgba(28,25,23,0.5) 0%, transparent 60%)' }}
              >
                <p className="text-white text-xs font-semibold" style={{ fontFamily: 'DM Sans, sans-serif' }}>Women Empowerment</p>
              </div>
            </div>

            {/* Small stat — below left */}
            <div
              className="absolute bottom-20 left-2 bg-white rounded-lg shadow-sm border p-3.5 z-10"
              style={{ borderColor: '#EDE6DA' }}
            >
              <p className="font-display text-2xl font-bold" style={{ color: '#9B2335', lineHeight: 1 }}>50+</p>
              <p className="text-stone-400 text-xs mt-1" style={{ fontFamily: 'DM Sans, sans-serif' }}>Events held</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom warm divider */}
      <div className="divider" style={{ marginTop: 0 }} />
    </section>
  );
}
