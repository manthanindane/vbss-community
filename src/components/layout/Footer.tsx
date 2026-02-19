import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Instagram, Youtube, MessageCircle, Heart } from 'lucide-react';

const quickLinks = [
  { name: 'About Samaj', path: '/about' },
  { name: 'Events',      path: '/events' },
  { name: 'Gallery',     path: '/gallery' },
  { name: 'Committee',   path: '/committee' },
  { name: 'Sandesh',     path: '/sandesh' },
  { name: 'Contact',     path: '/contact' },
];

const socials = [
  { Icon: Facebook,       href: '#', label: 'Facebook' },
  { Icon: Instagram,      href: '#', label: 'Instagram' },
  { Icon: Youtube,        href: '#', label: 'YouTube' },
  { Icon: MessageCircle,  href: '#', label: 'WhatsApp' },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-white">
      {/* CTA band */}
      <div className="border-b border-white/10">
        <div className="container-custom py-12">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-gold-400 mb-2">Be Part of Something Bigger</p>
              <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                Join the Vaishya Suri Community<br className="hidden md:block" /> — Together We Rise
              </h2>
            </div>
            <Link
              to="/contact"
              className="shrink-0 inline-flex items-center gap-2 px-6 h-12 rounded-xl bg-gold-500 hover:bg-gold-400 text-ink font-semibold text-sm transition-all hover:shadow-lg hover:shadow-gold-500/25"
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
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-maroon-600 to-maroon-800 flex items-center justify-center">
                <span className="text-white font-bold text-base">वै</span>
              </div>
              <div>
                <p className="font-bold text-sm text-white">वैश्य भारतीय सूरी समाज</p>
                <p className="text-[10px] uppercase tracking-widest text-white/40">Vaishya Bhartiya Suri Samaj</p>
              </div>
            </div>
            <p className="text-sm text-white/50 leading-relaxed max-w-xs">
              A registered organisation working for education, health, marriage support and women empowerment of the Suri Vaishya community across India.
            </p>
            <div className="mt-5 flex gap-2">
              {socials.map(({ Icon, href, label }) => (
                <a key={label} href={href} aria-label={label}
                  className="w-9 h-9 rounded-lg bg-white/8 hover:bg-white/15 flex items-center justify-center transition-colors">
                  <Icon className="w-4 h-4 text-white/60 hover:text-white" />
                </a>
              ))}
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              <span className="text-[10px] font-medium bg-white/8 text-white/40 px-2.5 py-1 rounded-md">GBBSD 2448/2012</span>
              <span className="text-[10px] font-medium bg-white/8 text-white/40 px-2.5 py-1 rounded-md">F-49747 MUMBAI</span>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-white/30 mb-4">Quick Links</p>
            <ul className="space-y-2.5">
              {quickLinks.map((l) => (
                <li key={l.path}>
                  <Link to={l.path} className="text-sm text-white/55 hover:text-white transition-colors">{l.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-white/30 mb-4">Contact</p>
            <ul className="space-y-3">
              {[
                { Icon: MapPin, text: 'Samaj Bhavan, Dadar West, Mumbai — 400028' },
                { Icon: Phone,  text: '+91 22 2430 XXXX' },
                { Icon: Mail,   text: 'info@vbss-samaj.org' },
              ].map(({ Icon, text }) => (
                <li key={text} className="flex items-start gap-2.5">
                  <Icon className="w-3.5 h-3.5 text-white/30 mt-0.5 shrink-0" />
                  <span className="text-sm text-white/55 leading-snug">{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/8">
        <div className="container-custom py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/30">© 2026 Vaishya Bhartiya Suri Samaj. All rights reserved.</p>
          <p className="text-xs text-white/25 flex items-center gap-1">Made with <Heart className="w-3 h-3 text-maroon-500 fill-maroon-500" /> for the community</p>
        </div>
      </div>
    </footer>
  );
}
