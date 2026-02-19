import { Link } from 'react-router-dom';
import { Facebook, Instagram, Youtube, MessageCircle } from 'lucide-react';

const quickLinks = [
  { name: 'About Us',  path: '/about' },
  { name: 'Events',    path: '/events' },
  { name: 'Gallery',   path: '/gallery' },
  { name: 'Committee', path: '/committee' },
  { name: 'Sandesh',   path: '/sandesh' },
  { name: 'Contact',   path: '/contact' },
];

const socials = [
  { Icon: Facebook,      href: '#', label: 'Facebook' },
  { Icon: Instagram,     href: '#', label: 'Instagram' },
  { Icon: Youtube,       href: '#', label: 'YouTube' },
  { Icon: MessageCircle, href: '#', label: 'WhatsApp' },
];

export default function Footer() {
  return (
    <footer className="bg-black border-t-4 border-black text-white">
      {/* CTA band */}
      <div style={{ backgroundColor: '#E60023' }} className="border-b-2 border-black px-8 lg:px-14 py-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <h2
            className="font-display text-white uppercase font-black"
            style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: 'clamp(2rem,5vw,4rem)', letterSpacing: '-0.03em', lineHeight: 0.95 }}
          >
            JOIN THE VAISHYA<br />SURI COMMUNITY
          </h2>
          <Link
            to="/contact"
            className="shrink-0 border-2 border-white px-8 py-4 text-white font-black uppercase tracking-widest hover:bg-white hover:text-black transition-colors duration-100"
            style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '1rem', letterSpacing: '0.1em' }}
          >
            Become a Member &rarr;
          </Link>
        </div>
      </div>

      {/* Footer grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-b-2 border-white/10">
        {/* Brand */}
        <div className="lg:col-span-2 p-8 lg:p-12 border-r-2 border-white/10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-white flex items-center justify-center">
              <span className="text-black font-display font-black text-sm" style={{ fontFamily: 'Barlow Condensed, sans-serif', letterSpacing: '0.05em' }}>VB</span>
            </div>
            <div>
              <p style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800, fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#fff', lineHeight: 1 }}>Vaishya Bhartiya Suri Samaj</p>
              <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.55rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginTop: 3 }}>VBSS — Est. 2012</p>
            </div>
          </div>
          <p style={{ fontFamily: 'Barlow, sans-serif', fontSize: '0.85rem', lineHeight: 1.65, color: 'rgba(255,255,255,0.5)', maxWidth: 340 }}>
            A registered organisation advancing education, health, marriage support
            and women empowerment for the Suri Vaishya community across Bihar,
            Jharkhand, Odisha and West Bengal.
          </p>
          <div className="mt-6 flex gap-2">
            {socials.map(({ Icon, href, label }) => (
              <a key={label} href={href} aria-label={label}
                className="w-9 h-9 border-2 border-white/20 flex items-center justify-center hover:border-white hover:bg-white hover:text-black transition-all duration-100">
                <Icon className="w-3.5 h-3.5 text-white/50 group-hover:text-black" />
              </a>
            ))}
          </div>
          <div className="mt-5 flex flex-wrap gap-2">
            <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.58rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', border: '1px solid rgba(255,255,255,0.15)', padding: '3px 8px' }}>GBBSD 2448/2012</span>
            <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.58rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', border: '1px solid rgba(255,255,255,0.15)', padding: '3px 8px' }}>F-49747 MUMBAI</span>
          </div>
        </div>

        {/* Quick links */}
        <div className="p-8 border-r-2 border-white/10">
          <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.6rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: 16 }}>Quick Links</p>
          <ul className="space-y-2">
            {quickLinks.map((l) => (
              <li key={l.path}>
                <Link
                  to={l.path}
                  className="text-white/60 hover:text-white transition-colors duration-100 underline-offset-2 hover:underline"
                  style={{ fontFamily: 'Barlow, sans-serif', fontSize: '0.9rem' }}
                >
                  {l.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="p-8">
          <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.6rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: 16 }}>Contact</p>
          <ul className="space-y-3">
            {[
              { label: 'Address', val: 'Samaj Bhavan, Dadar West, Mumbai — 400028' },
              { label: 'Phone',   val: '+91 22 2430 XXXX' },
              { label: 'Email',   val: 'info@vbss-samaj.org' },
            ].map(({ label, val }) => (
              <li key={label}>
                <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.55rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: 2 }}>{label}</p>
                <p style={{ fontFamily: 'Barlow, sans-serif', fontSize: '0.82rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.5 }}>{val}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="px-8 lg:px-14 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.6rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)' }}>
          © 2026 Vaishya Bhartiya Suri Samaj. All rights reserved.
        </p>
        <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.6rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.2)' }}>
          Society Reg. Act 1860 · Mumbai Public Trust Act 1950
        </p>
      </div>
    </footer>
  );
}
