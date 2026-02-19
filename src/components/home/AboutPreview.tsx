import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, GraduationCap, HeartHandshake, VenetianMask } from 'lucide-react';

const pillars = [
  {
    icon: GraduationCap,
    title: 'Education & Scholarships',
    desc: 'Supporting meritorious students from the Suri Vaishya community with scholarships, career guidance and mentorship programs.',
  },
  {
    icon: HeartHandshake,
    title: 'Health & Welfare',
    desc: 'Organising medical camps, health check-ups, and social welfare initiatives to improve quality of life for community members.',
  },
  {
    icon: VenetianMask,
    title: 'Women Empowerment',
    desc: 'Running programs focused on women leadership, skill development and creating economic opportunities for women in the community.',
  },
];

export default function AboutPreview() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        {/* Top */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-end mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-maroon-600 mb-3">Who We Are</p>
            <h2 className="text-section font-bold text-ink leading-tight tracking-tight text-balance">
              Advancing the Suri Vaishya Community Through Collective Action
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
          >
            <p className="text-gray-500 text-base leading-relaxed">
              Vaishya Bhartiya Suri Samaj (VBSS) is a registered non-profit body incorporated under
              the Society Registration Act 1860 and the Mumbai Public Trust Act 1950. Our mandate
              covers Bihar, Jharkhand, Odisha and West Bengal — states where the Suri and Kalwar
              Vaishya communities have historically resided and contributed to trade and commerce.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-1.5 text-maroon-700 font-semibold text-sm mt-5 hover:gap-3 transition-all group"
            >
              Learn More
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* Pillars */}
        <div className="grid sm:grid-cols-3 gap-5">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group p-6 rounded-2xl border border-gray-100 bg-white hover:border-maroon-100 hover:shadow-[0_8px_30px_rgba(0,0,0,0.05)] transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-maroon-50 border border-maroon-100 flex items-center justify-center mb-4 group-hover:bg-maroon-100 transition-colors">
                <p.icon className="w-5 h-5 text-maroon-700" />
              </div>
              <h3 className="text-base font-bold text-ink mb-2">{p.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
