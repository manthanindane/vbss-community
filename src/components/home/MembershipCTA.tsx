import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function MembershipCTA() {
  const benefits = [
    "🎓 Education Support",
    "💊 Health Camps",
    "🤝 Community Events",
    "📰 Sandesh Newsletter"
  ];

  return (
    <section className="py-20 lg:py-32 relative overflow-hidden bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600">
      {/* Decorative large faded mandala circle */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-[0.03] pointer-events-none">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" className="w-full h-full text-charcoal-900 fill-current">
          <circle cx="200" cy="200" r="180" fill="none" stroke="currentColor" strokeWidth="2" />
          <circle cx="200" cy="200" r="140" fill="none" stroke="currentColor" strokeWidth="2" />
          <circle cx="200" cy="200" r="100" fill="none" stroke="currentColor" strokeWidth="2" />
          <path d="M200 20 L200 380 M20 200 L380 200" stroke="currentColor" strokeWidth="2" />
          <path d="M73 73 L327 327 M327 73 L73 327" stroke="currentColor" strokeWidth="2" />
        </svg>
      </div>

      <div className="container-main relative z-10">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex"
          >
            <span className="font-hindi text-gold-900 font-bold bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/30 tracking-widest text-sm uppercase">
              जुड़ें हमारे साथ
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-sm"
          >
            Be Part of Something <br className="hidden sm:block" />
            Meaningful
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-white/90 mb-10 max-w-2xl font-medium"
          >
            Join 700+ families preserving our heritage and building a stronger future together. Your active participation strengthens our samaj.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {benefits.map((benefit, i) => (
              <span 
                key={i} 
                className="bg-white/20 text-white rounded-full px-5 py-2.5 text-sm font-heading font-medium backdrop-blur-md border border-white/20 shadow-sm"
              >
                {benefit}
              </span>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: 0.4, type: "spring", bounce: 0.5 }}
          >
            <Button size="lg" className="bg-maroon-800 text-white hover:bg-maroon-900 rounded-full h-14 px-8 text-lg shadow-soft-xl hover:shadow-warm-lg hover:-translate-y-1 transition-all btn-glow" asChild>
              <Link to="/contact">
                Join Our Community
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
