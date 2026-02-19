import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const heroImages = [
  { src: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=500&h=600&fit=crop', alt: 'Community Gathering', className: 'col-span-2 row-span-2' },
  { src: 'https://images.unsplash.com/photo-1609766857041-ed402ea8069a?w=400&h=300&fit=crop', alt: 'Temple Ceremony', className: 'col-span-1 row-span-1' },
  { src: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&h=300&fit=crop', alt: 'Youth Meet', className: 'col-span-1 row-span-1' },
  { src: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=400&h=300&fit=crop', alt: 'Cultural Event', className: 'col-span-1 row-span-1' },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cream-100 via-white to-primary-50/30" />
      <div className="absolute inset-0 mandala-bg" />

      {/* Floating decorative shapes */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-32 right-[15%] w-20 h-20 rounded-2xl bg-accent-400/10 rotate-12 hidden lg:block"
      />
      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-40 left-[8%] w-16 h-16 rounded-full bg-primary-200/20 hidden lg:block"
      />

      <div className="container-custom relative pt-28 pb-12 lg:pt-32 lg:pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-50 border border-primary-100 mb-6"
            >
              <Sparkles className="w-3.5 h-3.5 text-primary-500" />
              <span className="text-primary-700 text-xs font-semibold tracking-wide uppercase">Est. 1998 • Mumbai</span>
            </motion.div>

            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-charcoal leading-[1.05] tracking-tight">
              Preserving{' '}
              <span className="relative">
                <span className="relative z-10 bg-gradient-to-r from-primary-700 via-primary-600 to-accent-600 bg-clip-text text-transparent">
                  Heritage.
                </span>
              </span>
              <br />
              Building{' '}
              <span className="bg-gradient-to-r from-accent-600 to-accent-500 bg-clip-text text-transparent">
                Community.
              </span>
            </h1>

            <p className="mt-6 text-slate text-lg leading-relaxed max-w-lg">
              Uniting 700+ families across Mumbai in a shared mission to celebrate our rich traditions,
              empower the next generation, and strengthen community bonds.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white rounded-full px-7 h-12 text-sm font-semibold shadow-xl shadow-primary-600/25 hover:shadow-primary-600/40 transition-all duration-300 gap-2 group"
              >
                <Link to="/about">
                  Explore Our Community
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full px-7 h-12 text-sm font-semibold border-primary-200 text-primary-700 hover:bg-primary-50 hover:border-primary-300 transition-all duration-300"
              >
                <Link to="/events">View Events</Link>
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="mt-10 flex items-center gap-6">
              <div className="flex -space-x-3">
                {['photo-1507003211169-0a1dd7228f2d', 'photo-1472099645785-5658abf4ff4e', 'photo-1594744803329-e58b31de8bf5', 'photo-1500648767791-00dcc994a43e'].map((id, i) => (
                  <img
                    key={i}
                    src={`https://images.unsplash.com/${id}?w=48&h=48&fit=crop&crop=face`}
                    alt=""
                    className="w-10 h-10 rounded-full border-2 border-white object-cover"
                  />
                ))}
              </div>
              <div>
                <p className="text-charcoal text-sm font-semibold">700+ Active Members</p>
                <p className="text-slate text-xs">Across 15+ city chapters</p>
              </div>
            </div>
          </motion.div>

          {/* Right — Bento Grid */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative hidden lg:block"
          >
            <div className="grid grid-cols-3 grid-rows-3 gap-3 h-[520px]">
              {/* Main large image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="col-span-2 row-span-2 rounded-3xl overflow-hidden shadow-2xl shadow-primary-900/10"
              >
                <img
                  src={heroImages[0].src}
                  alt={heroImages[0].alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </motion.div>

              {/* Top right */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="rounded-2xl overflow-hidden shadow-lg"
              >
                <img
                  src={heroImages[1].src}
                  alt={heroImages[1].alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </motion.div>

              {/* Middle right */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="rounded-2xl overflow-hidden shadow-lg"
              >
                <img
                  src={heroImages[2].src}
                  alt={heroImages[2].alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </motion.div>

              {/* Bottom accent block */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="rounded-2xl bg-gradient-to-br from-primary-600 to-primary-800 flex items-center justify-center p-4 shadow-lg"
              >
                <div className="text-center">
                  <p className="text-white font-display text-2xl font-bold">25+</p>
                  <p className="text-white/70 text-xs font-medium mt-0.5">Years of Unity</p>
                </div>
              </motion.div>

              {/* Bottom image */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="rounded-2xl overflow-hidden shadow-lg"
              >
                <img
                  src={heroImages[3].src}
                  alt={heroImages[3].alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </motion.div>

              {/* Accent gold block */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9, duration: 0.5 }}
                className="rounded-2xl bg-gradient-to-br from-accent-500 to-accent-600 flex items-center justify-center p-4 shadow-lg"
              >
                <div className="text-center">
                  <p className="text-white font-display text-2xl font-bold">50+</p>
                  <p className="text-white/80 text-xs font-medium mt-0.5">Events Held</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
