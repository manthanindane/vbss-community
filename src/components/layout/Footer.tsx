import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Instagram, Youtube, MessageCircle } from 'lucide-react';

const quickLinks = [
  { name: 'About Us',   path: '/about' },
  { name: 'Events',     path: '/events' },
  { name: 'Gallery',    path: '/gallery' },
  { name: 'Committee',  path: '/committee' },
  { name: 'Sandesh',    path: '/sandesh' },
  { name: 'Contact',    path: '/contact' },
];

const socials = [
  { Icon: Facebook,      href: '#', label: 'Facebook' },
  { Icon: Instagram,     href: '#', label: 'Instagram' },
  { Icon: Youtube,       href: '#', label: 'YouTube' },
  { Icon: MessageCircle, href: '#', label: 'WhatsApp' },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-white">
      {/* CTA Band */}
      <div className="border-b border-white/10">
        <div className="container-custom py-12">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-gold-400 mb-2">Be Part of Something Bigger</p>
              <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                Join the Vaishya Suri Community — Together We Rise
              </h2>
            </div>
            <Link
              to="/contact"
              className="shrink-0 inline-flex items-center gap-2 px-6 h-11 rounded-lg bg-maroon-700 hover:bg-maroon-600 text-white font-semibold text-sm transition-all"
            >
              Become a Member
            </Link>
          </div>
        </div>
      </div>

      {/* Main */}
      <div className="container-custom py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-lg bg-maroon-800 flex items-center justify-center">
                <span className="text-white font-bold text-sm">VB</span>
              </div>
              <div>
                <p className="font-bold text-sm text-white">Vaishya Bhartiya Suri Samaj</p>
                <p className="text-[10px] uppercase tracking-widest text-white/40 mt-0.5">VBSS — Est. 2012</p>
              </div>
            </div>
            <p className="text-sm text-white/50 leading-relaxed max-w-xs">
              A registered organisation working for education, health, marriage support and women
              empowerment of the Suri Vaishya community across Bihar, Jharkhand, Odisha and West Bengal.
            </p>
            <div className="mt-5 flex gap-2">
              {socials.map(({ Icon, href, label }) => (
                <a key={label} href={href} aria-label={label}
                  className="w-8 h-8 rounded-lg bg-white/8 hover:bg-white/15 flex items-center justify-center transition-colors">
                  <Icon className="w-3.5 h-3.5 text-white/50" />
                </a>
              ))}
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="text-[10px] font-medium bg-white/[0.07] text-white/40 px-2.5 py-1 rounded">GBBSD 2448/2012</span>
              <span className="text-[10px] font-medium bg-white/[0.07] text-white/40 px-2.5 py-1 rounded">F-49747 MUMBAI</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-widest text-white/30 mb-4">Quick Links</p>
            <ul className="space-y-2">
              {quickLinks.map((l) => (
                <li key={l.path}>
                  <Link to={l.path} className="text-sm text-white/50 hover:text-white transition-colors">{l.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-widest text-white/30 mb-4">Contact</p>
            <ul className="space-y-3">
              {[
                { Icon: MapPin, text: 'Samaj Bhavan, Dadar West, Mumbai — 400028' },
                { Icon: Phone,  text: '+91 22 2430 XXXX' },
                { Icon: Mail,   text: 'info@vbss-samaj.org' },
              ].map(({ Icon, text }) => (
                <li key={text} className="flex items-start gap-2.5">
                  <Icon className="w-3.5 h-3.5 text-white/30 mt-0.5 shrink-0" />
                  <span className="text-sm text-white/50 leading-snug">{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/[0.07]">
        <div className="container-custom py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/30">© 2026 Vaishya Bhartiya Suri Samaj. All rights reserved.</p>
          <p className="text-xs text-white/20">Society Reg. Act 1860 · Mumbai Public Trust Act 1950</p>
        </div>
      </div>
    </footer>
  );
}
