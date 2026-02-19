import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin } from 'lucide-react';

const up = (delay = 0) => ({
  initial:    { opacity: 0, y: 20 },
  animate:    { opacity: 1, y: 0 },
  transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
});

const states = ['Bihar', 'Jharkhand', 'Odisha', 'West Bengal'];

export default function HeroSection() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ paddingTop: 62, minHeight: '92vh', background: '#FAFAF7' }}
    >
      {/* ── Subtle background geometry ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(ellipse 60% 50% at 80% 20%, rgba(27,77,62,0.06) 0%, transparent 60%),' +
            'radial-gradient(ellipse 40% 35% at 15% 80%, rgba(217,119,6,0.05) 0%, transparent 55%)',
        }}
      />

      {/* ── Grid line accent (structural, subtle) ── */}
      <div
        className="absolute top-0 right-[38%] bottom-0 w-px pointer-events-none hidden lg:block"
        style={{ background: 'linear-gradient(to bottom, transparent, rgba(27,77,62,0.08) 20%, rgba(27,77,62,0.08) 80%, transparent)' }}
      />

      <div className="container-custom">
        <div className="grid lg:grid-cols-[58fr_42fr] gap-6 lg:gap-0 min-h-[88vh] items-center">

          {/* ── LEFT: Text ── */}
          <div className="py-14 lg:py-20 lg:pr-14">

            {/* Eyebrow */}
            <motion.div {...up(0.05)} className="flex items-center gap-2.5 mb-7">
              <span className="accent-dot" />
              <span className="label">Community Organisation · Est. 2012</span>
            </motion.div>

            {/* Main headline — Plus Jakarta Sans, bold, tight */}
            <motion.h1 {...up(0.12)} style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              <span
                style={{
                  display: 'block',
                  fontSize: 'clamp(2.8rem, 5.8vw, 5rem)',
                  fontWeight: 800,
                  letterSpacing: '-0.03em',
                  lineHeight: 1.05,
                  color: '#1A1A2E',
                }}
              >
                Uniting the
              </span>
              <span
                style={{
                  display: 'block',
                  fontSize: 'clamp(2.8rem, 5.8vw, 5rem)',
                  fontWeight: 800,
                  letterSpacing: '-0.03em',
                  lineHeight: 1.05,
                  color: '#1B4D3E',
                }}
              >
                Suri Vaishya
              </span>
              <span
                style={{
                  display: 'block',
                  fontSize: 'clamp(2.8rem, 5.8vw, 5rem)',
                  fontWeight: 800,
                  letterSpacing: '-0.03em',
                  lineHeight: 1.05,
                  color: '#1A1A2E',
                }}
              >
                Community
              </span>
            </motion.h1>

            {/* Sub */}
            <motion.p
              {...up(0.2)}
              style={{
                fontFamily: "'Satoshi', sans-serif",
                fontSize: '1.05rem',
                lineHeight: 1.75,
                color: '#6B7280',
                maxWidth: 460,
                marginTop: '1.5rem',
              }}
            >
              A registered organisation advancing education, health,
              marriage support and women empowerment for Suri Vaishya
              families across East India.
            </motion.p>

            {/* State pills */}
            <motion.div {...up(0.26)} className="flex flex-wrap gap-2 mt-5">
              {states.map((s) => (
                <span key={s} className="inline-flex items-center gap-1.5 badge-teal">
                  <MapPin style={{ width: 9, height: 9 }} />
                  {s}
                </span>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div {...up(0.32)} className="flex flex-wrap gap-3 mt-8">
              <Link
                to="/about"
                className="group inline-flex items-center gap-2 px-6 py-3 text-[14px] font-semibold text-white rounded-xl transition-all duration-200 hover:opacity-90 hover:shadow-lg"
                style={{
                  background: 'linear-gradient(135deg, #1B4D3E 0%, #2E7D5E 100%)',
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  boxShadow: '0 4px 14px rgba(27,77,62,0.25)',
                }}
              >
                About VBSS
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link
                to="/events"
                className="inline-flex items-center gap-2 px-6 py-3 text-[14px] font-semibold rounded-xl border transition-all duration-200 hover:border-teal-300 hover:bg-teal-50"
                style={{
                  borderColor: '#D8E8E2',
                  color: '#1A1A2E',
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                }}
              >
                Upcoming Events
              </Link>
            </motion.div>

            {/* Registration chips */}
            <motion.div {...up(0.38)} className="flex flex-wrap gap-2 mt-10">
              {[
                { k: 'Reg', v: 'GBBSD 2448/2012' },
                { k: 'Trust', v: 'F-49747 Mumbai' },
              ].map(({ k, v }) => (
                <span
                  key={k}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[11px]"
                  style={{
                    backgroundColor: '#FFFFFF',
                    border: '1px solid #E8E8E2',
                    fontFamily: "'Satoshi', sans-serif",
                    color: '#9CA3AF',
                  }}
                >
                  <span style={{ fontWeight: 700, color: '#B3D9C7', letterSpacing: '0.06em', textTransform: 'uppercase' }}>{k}</span>
                  {v}
                </span>
              ))}
            </motion.div>
          </div>

          {/* ── RIGHT: Asymmetric image stack ── */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:flex flex-col gap-4 py-14 relative"
          >
            {/* Primary image — slightly left offset */}
            <div
              className="relative rounded-2xl overflow-hidden shadow-xl"
              style={{ height: 300, marginLeft: '-3rem' }}
            >
              <img
                src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=720&h=480&fit=crop"
                alt="Community gathering"
                className="w-full h-full object-cover"
              />
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(to top, rgba(26,26,46,0.45) 0%, transparent 55%)' }}
              />
              <div className="absolute bottom-4 left-5 right-5">
                <p
                  className="text-white text-sm font-semibold"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  Annual Samaj Mahotsav
                </p>
                <p
                  className="text-white/55 text-xs mt-0.5"
                  style={{ fontFamily: "'Satoshi', sans-serif" }}
                >
                  Mumbai · 2025
                </p>
              </div>
            </div>

            {/* Two smaller cards side by side */}
            <div className="grid grid-cols-2 gap-3" style={{ marginRight: '-1.5rem' }}>
              {/* Stat card */}
              <div
                className="bg-white rounded-2xl p-5 border flex flex-col gap-1"
                style={{ borderColor: '#E8E8E2', boxShadow: '0 4px 20px rgba(27,77,62,0.07)' }}
              >
                <p
                  className="font-bold leading-none"
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: '2.5rem',
                    color: '#1B4D3E',
                    letterSpacing: '-0.04em',
                  }}
                >
                  700+
                </p>
                <p
                  className="text-xs font-medium"
                  style={{ fontFamily: "'Satoshi', sans-serif", color: '#9CA3AF' }}
                >
                  Active Members
                </p>
                <div
                  className="mt-2 h-1 rounded-full"
                  style={{ background: 'linear-gradient(90deg, #1B4D3E, #80BDA4)', width: '60%' }}
                />
              </div>

              {/* Second small image */}
              <div className="relative rounded-2xl overflow-hidden" style={{ minHeight: 130 }}>
                <img
                  src="https://images.unsplash.com/photo-1607748862156-7c548e7e98f4?w=400&h=280&fit=crop"
                  alt="Women empowerment"
                  className="w-full h-full object-cover"
                />
                <div
                  className="absolute inset-0 flex items-end p-3"
                  style={{ background: 'linear-gradient(to top, rgba(26,26,46,0.55) 0%, transparent 55%)' }}
                >
                  <p
                    className="text-white text-[11px] font-semibold leading-tight"
                    style={{ fontFamily: "'Satoshi', sans-serif" }}
                  >
                    Women Empowerment
                  </p>
                </div>
              </div>
            </div>

            {/* Amber accent chip — floating */}
            <div
              className="absolute -bottom-2 left-0 bg-white rounded-xl border px-4 py-2.5 flex items-center gap-2"
              style={{ borderColor: '#FDE68A', boxShadow: '0 4px 16px rgba(217,119,6,0.1)' }}
            >
              <span
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: '#D97706', flexShrink: 0 }}
              />
              <span
                className="text-xs font-semibold"
                style={{ fontFamily: "'Satoshi', sans-serif", color: '#92400E' }}
              >
                50+ Events organised
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="divider" />
    </section>
  );
}
