import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, GraduationCap, HeartPulse, Users, ShieldCheck } from 'lucide-react';

const pillars = [
  { icon: GraduationCap, label: 'Education' },
  { icon: HeartPulse,    label: 'Health' },
  { icon: Users,         label: 'Community' },
  { icon: ShieldCheck,   label: 'Empowerment' },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] },
});

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden mesh-gradient">
      {/* Dot grid decoration */}
      <div className="absolute inset-0 dot-grid opacity-[0.35] pointer-events-none" />

      {/* Top radial glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-gold-300/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-maroon-800/8 blur-[100px] pointer-events-none" />

      <div className="container-custom relative pt-28 pb-16">
        <div className="grid lg:grid-cols-[1fr_420px] gap-14 lg:gap-20 items-center">

          {/* ---- LEFT ---- */}
          <div>
            {/* Badge */}
            <motion.div {...fadeUp(0.1)} className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-maroon-50 border border-maroon-100 mb-7">
              <span className="w-1.5 h-1.5 rounded-full bg-maroon-600 animate-pulse" />
              <span className="text-maroon-700 text-xs font-semibold tracking-wide">Reg. GBBSD 2448/2012 · F-49747 Mumbai</span>
            </motion.div>

            {/* Headline */}
            <motion.h1 {...fadeUp(0.2)} className="text-[clamp(2.4rem,5vw,3.75rem)] font-bold text-ink leading-[1.1] tracking-tight max-w-xl text-balance">
              Uniting the
              <span className="relative mx-2">
                <span className="relative z-10 text-maroon-800">Suri Vaishya</span>
                <span className="absolute -bottom-1 left-0 right-0 h-[6px] bg-gold-300/60 rounded-full" />
              </span>
              Community Across India
            </motion.h1>

            {/* Sub */}
            <motion.p {...fadeUp(0.3)} className="mt-5 text-gray-500 text-lg leading-relaxed max-w-lg">
              VBSS is a registered organisation advancing education, health, marriage support
              and women empowerment for Suri Vaishya families across Bihar, Jharkhand,
              Odisha and West Bengal.
            </motion.p>

            {/* CTAs */}
            <motion.div {...fadeUp(0.4)} className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-maroon-800 hover:bg-maroon-900 text-white text-sm font-semibold transition-all hover:shadow-lg hover:shadow-maroon-900/20 group"
              >
                Explore VBSS
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link
                to="/events"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-gray-200 bg-white hover:border-maroon-200 hover:bg-maroon-50 text-ink text-sm font-semibold transition-all"
              >
                View Events
              </Link>
            </motion.div>

            {/* Pillars */}
            <motion.div {...fadeUp(0.5)} className="mt-10 flex flex-wrap gap-2">
              {pillars.map(({ icon: Icon, label }) => (
                <div key={label} className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-white border border-gray-100 shadow-sm text-xs font-medium text-gray-600">
                  <Icon className="w-3.5 h-3.5 text-maroon-600" />
                  {label}
                </div>
              ))}
            </motion.div>
          </div>

          {/* ---- RIGHT — Stats card stack ---- */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:flex flex-col gap-3"
          >
            {/* Big image */}
            <div className="relative rounded-2xl overflow-hidden h-52 shadow-[0_8px_40px_rgba(0,0,0,0.08)]">
              <img
                src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=700&h=420&fit=crop"
                alt="Community gathering"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <p className="text-white text-xs font-medium opacity-80">Annual Community Gathering</p>
              </div>
            </div>

            {/* Stat cards row */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { num: '700+',  label: 'Members' },
                { num: '50+',   label: 'Events' },
                { num: '4',     label: 'States' },
              ].map(({ num, label }) => (
                <div key={label} className="bg-white rounded-xl border border-gray-100 shadow-sm p-4 text-center">
                  <p className="text-2xl font-bold text-maroon-800">{num}</p>
                  <p className="text-xs text-gray-400 mt-0.5 font-medium">{label}</p>
                </div>
              ))}
            </div>

            {/* Registration card */}
            <div className="bg-maroon-800 rounded-xl p-5 text-white">
              <p className="text-xs text-white/50 uppercase tracking-widest font-semibold mb-2">Registration</p>
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-white/60">Society Act 1860</span>
                  <span className="text-xs font-semibold text-gold-300">GBBSD 2448/2012</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-white/60">Mum. Public Trust Act 1950</span>
                  <span className="text-xs font-semibold text-gold-300">F-49747</span>
                </div>
              </div>
            </div>

            {/* Second image */}
            <div className="relative rounded-2xl overflow-hidden h-36 shadow-[0_4px_20px_rgba(0,0,0,0.06)]">
              <img
                src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=700&h=280&fit=crop"
                alt="Youth meet"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              <div className="absolute bottom-3 left-3">
                <p className="text-white text-xs font-medium opacity-80">Youth Cultural Meet</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
