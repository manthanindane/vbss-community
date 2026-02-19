import { motion } from 'framer-motion';
import { Eye, Target, Heart, Shield, BookOpen, Handshake } from 'lucide-react';
import PageHero from '@/components/layout/PageHero';

const values = [
  { icon: Heart,     title: 'Compassion',  desc: 'Extending welfare support to every member of our community — from scholarships and health camps to marriage assistance and crisis relief.' },
  { icon: Shield,    title: 'Integrity',   desc: 'Upholding transparency and ethical governance in all our organisational activities, finances and public advocacy.' },
  { icon: BookOpen,  title: 'Education',   desc: 'Investing in the intellectual growth of Suri Vaishya youth through scholarships, mentorship and career development programs.' },
  { icon: Handshake, title: 'Unity',       desc: 'Fostering bonds across Bihar, Jharkhand, Odisha and West Bengal — connecting the Suri Vaishya community regardless of geography.' },
];

const timeline = [
  { year: '2012', title: 'Foundation & Registration',    desc: 'VBSS formally registered under Society Registration Act 1860 (GBBSD 2448/2012) and Mumbai Public Trust Act 1950 (F-49747 Mumbai).' },
  { year: '2013', title: 'First Annual Gathering',        desc: 'Inaugural annual gathering held in Mumbai, attended by 200+ members from across Maharashtra, marking the start of our annual samaj milan tradition.' },
  { year: '2015', title: 'Scholarship Fund Launched',     desc: 'Education welfare fund established; first batch of 12 students from Bihar, Jharkhand and West Bengal received merit scholarships.' },
  { year: '2017', title: 'Women Empowerment Wing',        desc: 'Launched a dedicated women empowerment wing focusing on self-help groups, skill development and legal awareness for women in the community.' },
  { year: '2019', title: 'EBC Advocacy Campaign',         desc: 'VBSS formally began advocacy for inclusion of Suri and Kalwar Vaishya communities in Bihar\'s Extremely Backward Classes (EBC) classification.' },
  { year: '2020', title: 'Digital Community Network',     desc: 'Launched digital member directory, WhatsApp broadcast network and Facebook community page to connect 700+ members across four states.' },
  { year: '2023', title: 'Health Camp Initiative',        desc: 'Free health camp initiative launched, starting with Mumbai and expanding to Patna — over 600 members screened in the first two editions.' },
  { year: '2026', title: 'Growing & Advocating',          desc: 'With 700+ registered members, 50+ events organised and active programs across 4 states, VBSS continues to serve and advocate for the community.' },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay },
});

export default function About() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.35 }}>
      <PageHero
        title="About VBSS"
        subtitle="Learn about the Vaishya Bhartiya Suri Samaj — our founding, our mission, and the community we serve."
      />

      {/* History */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-14 items-start">
            <motion.div {...fadeUp(0)}>
              <p className="text-xs font-semibold uppercase tracking-widest text-maroon-600 mb-3">Our Story</p>
              <h2 className="text-section font-bold text-ink tracking-tight leading-tight mb-5">
                Serving the Suri Vaishya Community Since 2012
              </h2>
              <div className="space-y-4 text-gray-500 text-base leading-relaxed">
                <p>
                  Vaishya Bhartiya Suri Samaj (VBSS) is a registered non-profit organisation established
                  to advance the social, educational and economic welfare of the Suri Vaishya community —
                  a trading community with deep roots across Bihar, Jharkhand, Odisha and West Bengal.
                </p>
                <p>
                  Incorporated under the Society Registration Act 1860 (GBBSD 2448/2012) and the Mumbai
                  Public Trust Act 1950 (F-49747 Mumbai), VBSS operates with full legal standing and
                  financial transparency. Our headquarters is in Mumbai, with active chapters across
                  four states.
                </p>
                <p>
                  Our primary mandate covers education (scholarships and mentorship), health
                  (free medical camps), marriage support, and women empowerment — addressing the most
                  critical needs of community members across all economic strata.
                </p>
              </div>
            </motion.div>

            <motion.div {...fadeUp(0.1)} className="space-y-4">
              {/* Registration details box */}
              <div className="p-5 rounded-2xl border border-gray-100 bg-gray-50">
                <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">Legal Registration</p>
                <div className="space-y-2">
                  {[
                    { label: 'Society Registration Act 1860', value: 'GBBSD 2448/2012' },
                    { label: 'Mumbai Public Trust Act 1950',  value: 'F-49747 MUMBAI' },
                    { label: 'Headquarters',                  value: 'Mumbai, Maharashtra' },
                    { label: 'Area of Operation',             value: 'Bihar, Jharkhand, Odisha, West Bengal' },
                  ].map(({ label, value }) => (
                    <div key={label} className="flex items-start justify-between py-2 border-b border-gray-100 last:border-0">
                      <span className="text-sm text-gray-500">{label}</span>
                      <span className="text-sm font-semibold text-ink text-right ml-4">{value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* EBC Demand note */}
              <div className="p-5 rounded-2xl border border-maroon-100 bg-maroon-50">
                <p className="text-xs font-semibold uppercase tracking-widest text-maroon-500 mb-2">Ongoing Advocacy</p>
                <p className="text-sm text-maroon-800 leading-relaxed font-medium">
                  VBSS is actively advocating for the inclusion of Suri and Kalwar Vaishya communities
                  in Bihar\'s Extremely Backward Classes (EBC) list — a status already granted in
                  Jharkhand, Odisha and West Bengal.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-gray-50/50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {[{
              icon: Target, label: 'Our Mission', color: 'border-maroon-100 bg-maroon-50',
              iconColor: 'text-maroon-700 bg-white',
              text: 'To unite and uplift the Suri Vaishya community through education, health, marriage support and women empowerment — bridging inequality and preserving cultural identity across Bihar, Jharkhand, Odisha and West Bengal.',
            }, {
              icon: Eye, label: 'Our Vision', color: 'border-gold-200 bg-gold-50',
              iconColor: 'text-gold-700 bg-white',
              text: 'An empowered, educated and unified Suri Vaishya community where every member — regardless of economic standing — has access to opportunities, welfare support and the strength of collective belonging.',
            }].map(({ icon: Icon, label, color, iconColor, text }) => (
              <motion.div key={label} {...fadeUp(0)} className={`p-7 rounded-2xl border ${color}`}>
                <div className={`w-10 h-10 rounded-xl shadow-sm border border-gray-100 flex items-center justify-center mb-5 ${iconColor}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-ink mb-3">{label}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div {...fadeUp(0)} className="mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-maroon-600 mb-2">What We Stand For</p>
            <h2 className="text-section font-bold text-ink tracking-tight">Core Values</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {values.map((v, i) => (
              <motion.div key={v.title} {...fadeUp(i * 0.08)}
                className="p-6 rounded-2xl border border-gray-100 bg-white hover:border-maroon-100 hover:shadow-[0_6px_24px_rgba(0,0,0,0.05)] transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-maroon-50 border border-maroon-100 flex items-center justify-center mb-4">
                  <v.icon className="w-5 h-5 text-maroon-700" />
                </div>
                <h3 className="font-bold text-ink mb-1.5">{v.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-gray-50/50">
        <div className="container-custom">
          <motion.div {...fadeUp(0)} className="mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-maroon-600 mb-2">Our Journey</p>
            <h2 className="text-section font-bold text-ink tracking-tight">Key Milestones</h2>
          </motion.div>

          <div className="relative max-w-2xl">
            <div className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-maroon-200 to-transparent" />
            <div className="space-y-7">
              {timeline.map((item, i) => (
                <motion.div key={item.year} {...fadeUp(i * 0.05)}
                  className="relative flex gap-6 pl-10"
                >
                  <div className="absolute left-[13px] top-1.5 w-2.5 h-2.5 rounded-full bg-white border-2 border-maroon-400 z-10" />
                  <div>
                    <span className="inline-block text-xs font-bold text-maroon-600 bg-maroon-50 border border-maroon-100 px-2.5 py-0.5 rounded-full mb-1">{item.year}</span>
                    <h3 className="font-bold text-ink text-sm">{item.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed mt-0.5">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
