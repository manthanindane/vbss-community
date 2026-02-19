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
    <footer style={{ background: '#1C1917', color: '#FAF7F2' }}>
      {/* CTA band */}
      <div
        className="px-8 lg:px-14 py-12"
        style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: '#9B2335', fontFamily: 'DM Sans, sans-serif', letterSpacing: '0.12em' }}
            >
              Be Part of Something Bigger
            </p>
            <h2
              className="font-display text-white"
              style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.5rem)', fontWeight: 800, lineHeight: 1.1, letterSpacing: '-0.01em' }}
            >
              Join the Vaishya Suri<br />Community — Together We Rise
            </h2>
          </div>
          <Link
            to="/contact"
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white rounded-md transition-all duration-200 hover:opacity-80"
            style={{ backgroundColor: '#9B2335', fontFamily: 'DM Sans, sans-serif' }}
          >
            Become a Member
          </Link>
        </div>
      </div>

      {/* Main columns */}
      <div className="max-w-6xl mx-auto px-8 lg:px-14 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-sm flex items-center justify-center" style={{ backgroundColor: '#9B2335' }}>
                <span className="text-white text-[11px] font-bold">VB</span>
              </div>
              <div>
                <p className="text-sm font-semibold text-white" style={{ fontFamily: 'DM Sans, sans-serif' }}>Vaishya Bhartiya Suri Samaj</p>
                <p className="text-[10px] mt-0.5" style={{ color: 'rgba(255,255,255,0.3)', letterSpacing: '0.08em', textTransform: 'uppercase', fontFamily: 'DM Sans, sans-serif' }}>VBSS — Est. 2012</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.45)', fontFamily: 'DM Sans, sans-serif', maxWidth: 320 }}>
              A registered organisation advancing education, health, marriage support
              and women empowerment for the Suri Vaishya community across Bihar,
              Jharkhand, Odisha and West Bengal.
            </p>
            <div className="mt-5 flex gap-2">
              {socials.map(({ Icon, href, label }) => (
                <a
                  key={label} href={href} aria-label={label}
                  className="w-8 h-8 rounded-sm flex items-center justify-center transition-colors duration-200 hover:bg-white/10"
                  style={{ border: '1px solid rgba(255,255,255,0.12)' }}
                >
                  <Icon className="w-3.5 h-3.5" style={{ color: 'rgba(255,255,255,0.4)' }} />
                </a>
              ))}
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {['GBBSD 2448/2012', 'F-49747 MUMBAI'].map((r) => (
                <span
                  key={r}
                  className="text-[10px] px-2 py-1 rounded"
                  style={{ color: 'rgba(255,255,255,0.3)', border: '1px solid rgba(255,255,255,0.1)', fontFamily: 'DM Sans, sans-serif', letterSpacing: '0.06em', textTransform: 'uppercase' }}
                >
                  {r}
                </span>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-widest mb-4" style={{ color: 'rgba(255,255,255,0.25)', fontFamily: 'DM Sans, sans-serif', letterSpacing: '0.12em' }}>Quick Links</p>
            <ul className="space-y-2">
              {quickLinks.map((l) => (
                <li key={l.path}>
                  <Link
                    to={l.path}
                    className="text-sm transition-colors duration-150 hover:text-white"
                    style={{ color: 'rgba(255,255,255,0.45)', fontFamily: 'DM Sans, sans-serif' }}
                  >
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-widest mb-4" style={{ color: 'rgba(255,255,255,0.25)', fontFamily: 'DM Sans, sans-serif', letterSpacing: '0.12em' }}>Contact</p>
            <ul className="space-y-3">
              {[
                { label: 'Address', val: 'Samaj Bhavan, Dadar West, Mumbai — 400028' },
                { label: 'Phone',   val: '+91 22 2430 XXXX' },
                { label: 'Email',   val: 'info@vbss-samaj.org' },
              ].map(({ label, val }) => (
                <li key={label}>
                  <p className="text-[10px] uppercase tracking-wide mb-0.5" style={{ color: 'rgba(255,255,255,0.25)', fontFamily: 'DM Sans, sans-serif', letterSpacing: '0.1em' }}>{label}</p>
                  <p className="text-sm" style={{ color: 'rgba(255,255,255,0.45)', fontFamily: 'DM Sans, sans-serif', lineHeight: 1.5 }}>{val}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div
        className="px-8 lg:px-14 py-5 max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3"
        style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
      >
        <p className="text-xs" style={{ color: 'rgba(255,255,255,0.2)', fontFamily: 'DM Sans, sans-serif' }}>© 2026 Vaishya Bhartiya Suri Samaj. All rights reserved.</p>
        <p className="text-xs" style={{ color: 'rgba(255,255,255,0.15)', fontFamily: 'DM Sans, sans-serif' }}>Society Reg. Act 1860 · Mumbai Public Trust Act 1950</p>
      </div>
    </footer>
  );
}
