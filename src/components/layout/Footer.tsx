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
    <footer style={{ background: '#111827', color: '#FAFAF7' }}>

      {/* ── CTA band ── */}
      <div
        className="px-5 sm:px-8 lg:px-14 py-12 lg:py-16"
        style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <p
              className="text-xs font-bold uppercase tracking-widest mb-3"
              style={{ color: '#4A9A7C', fontFamily: "'Satoshi', sans-serif", letterSpacing: '0.14em' }}
            >
              Be Part of Something Bigger
            </p>
            <h2
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: 'clamp(1.7rem, 3.8vw, 2.6rem)',
                fontWeight: 800,
                letterSpacing: '-0.03em',
                lineHeight: 1.1,
                color: '#FFFFFF',
              }}
            >
              Join the Vaishya Suri<br />Community — Together We Rise
            </h2>
          </div>
          <Link
            to="/contact"
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white rounded-xl transition-all duration-200 hover:opacity-85"
            style={{
              background: 'linear-gradient(135deg, #1B4D3E 0%, #2E7D5E 100%)',
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              boxShadow: '0 4px 16px rgba(27,77,62,0.4)',
            }}
          >
            Become a Member
          </Link>
        </div>
      </div>

      {/* ── Main columns ── */}
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-14 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                style={{ background: 'linear-gradient(135deg, #1B4D3E 0%, #2E7D5E 100%)' }}
              >
                <span
                  className="text-white font-bold"
                  style={{ fontSize: '11px', letterSpacing: '0.04em', fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  VS
                </span>
              </div>
              <div>
                <p
                  className="text-sm font-semibold text-white"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  Vaishya Bhartiya Suri Samaj
                </p>
                <p
                  className="text-[10px] mt-0.5"
                  style={{
                    color: 'rgba(255,255,255,0.25)',
                    letterSpacing: '0.09em',
                    textTransform: 'uppercase',
                    fontFamily: "'Satoshi', sans-serif",
                  }}
                >
                  VBSS · Est. 2012
                </p>
              </div>
            </div>
            <p
              className="text-sm leading-relaxed mb-5"
              style={{
                color: 'rgba(255,255,255,0.4)',
                fontFamily: "'Satoshi', sans-serif",
                maxWidth: 320,
                lineHeight: 1.75,
              }}
            >
              Advancing education, health, marriage support and women empowerment
              for the Suri Vaishya community across Bihar, Jharkhand, Odisha and West Bengal.
            </p>
            <div className="flex gap-2">
              {socials.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-8 h-8 rounded-lg flex items-center justify-center transition-colors duration-200 hover:bg-white/10"
                  style={{ border: '1px solid rgba(255,255,255,0.1)' }}
                >
                  <Icon className="w-3.5 h-3.5" style={{ color: 'rgba(255,255,255,0.35)' }} />
                </a>
              ))}
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {['GBBSD 2448/2012', 'F-49747 MUMBAI'].map((r) => (
                <span
                  key={r}
                  className="text-[10px] px-2.5 py-1 rounded-lg"
                  style={{
                    color: 'rgba(255,255,255,0.25)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    fontFamily: "'Satoshi', sans-serif",
                    letterSpacing: '0.07em',
                    textTransform: 'uppercase',
                  }}
                >
                  {r}
                </span>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <p
              className="text-[11px] font-bold uppercase tracking-widest mb-4"
              style={{ color: 'rgba(255,255,255,0.2)', fontFamily: "'Satoshi', sans-serif", letterSpacing: '0.13em' }}
            >
              Quick Links
            </p>
            <ul className="space-y-2.5">
              {quickLinks.map((l) => (
                <li key={l.path}>
                  <Link
                    to={l.path}
                    className="text-sm transition-colors duration-150 hover:text-white"
                    style={{ color: 'rgba(255,255,255,0.4)', fontFamily: "'Satoshi', sans-serif" }}
                  >
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p
              className="text-[11px] font-bold uppercase tracking-widest mb-4"
              style={{ color: 'rgba(255,255,255,0.2)', fontFamily: "'Satoshi', sans-serif", letterSpacing: '0.13em' }}
            >
              Contact
            </p>
            <ul className="space-y-4">
              {[
                { label: 'Address', val: 'Samaj Bhavan, Dadar West, Mumbai — 400028' },
                { label: 'Phone',   val: '+91 22 2430 XXXX' },
                { label: 'Email',   val: 'info@vbss-samaj.org' },
              ].map(({ label, val }) => (
                <li key={label}>
                  <p
                    className="text-[10px] uppercase tracking-wide mb-1"
                    style={{ color: 'rgba(255,255,255,0.2)', fontFamily: "'Satoshi', sans-serif", letterSpacing: '0.1em' }}
                  >
                    {label}
                  </p>
                  <p
                    className="text-sm"
                    style={{ color: 'rgba(255,255,255,0.4)', fontFamily: "'Satoshi', sans-serif", lineHeight: 1.55 }}
                  >
                    {val}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div
        className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-14 py-5 flex flex-col sm:flex-row items-center justify-between gap-3"
        style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}
      >
        <p
          className="text-xs"
          style={{ color: 'rgba(255,255,255,0.18)', fontFamily: "'Satoshi', sans-serif" }}
        >
          © 2026 Vaishya Bhartiya Suri Samaj. All rights reserved.
        </p>
        <p
          className="text-xs"
          style={{ color: 'rgba(255,255,255,0.12)', fontFamily: "'Satoshi', sans-serif" }}
        >
          Society Reg. Act 1860 · Mumbai Public Trust Act 1950
        </p>
      </div>
    </footer>
  );
}
