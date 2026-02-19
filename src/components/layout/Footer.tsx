import { Link } from 'react-router-dom';
import { Facebook, Instagram, Youtube, Phone, MapPin, Mail, Heart } from 'lucide-react';

const quickLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Events', path: '/events' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Committee', path: '/committee' },
  { name: 'Vaishya Suri Sandesh', path: '/sandesh' },
  { name: 'Contact', path: '/contact' },
];

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Youtube, href: '#', label: 'YouTube' },
  { icon: Phone, href: '#', label: 'WhatsApp' },
];

export default function Footer() {
  return (
    <footer className="relative bg-charcoal text-white overflow-hidden">
      {/* Decorative top border */}
      <div className="h-1 bg-gradient-to-r from-primary-600 via-accent-500 to-primary-600" />

      {/* Mandala pattern overlay */}
      <div className="absolute inset-0 mandala-bg opacity-[0.02]" />

      <div className="container-custom relative">
        {/* Main Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 py-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center">
                <span className="text-white font-display text-lg font-bold">वै</span>
              </div>
              <div>
                <p className="font-display text-sm font-bold leading-tight">वैश्य भारतीय सूरी समाज</p>
                <p className="text-[9px] font-medium text-white/50 uppercase tracking-[0.15em] mt-0.5">Est. 1998 · Mumbai</p>
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed">
              Preserving our rich cultural heritage and building a stronger community for future generations.
            </p>
            <div className="flex items-center gap-3 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-9 h-9 rounded-lg bg-white/5 hover:bg-primary-600 flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-sm font-bold mb-5 text-accent-400">Quick Links</h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-white/50 hover:text-white text-sm transition-colors duration-200 hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-display text-sm font-bold mb-5 text-accent-400">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary-400 mt-0.5 flex-shrink-0" />
                <span className="text-white/50 text-sm leading-relaxed">
                  Samaj Bhavan, 3rd Floor,<br />Dadar West, Mumbai — 400028
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary-400 flex-shrink-0" />
                <span className="text-white/50 text-sm">+91 22 2430 XXXX</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary-400 flex-shrink-0" />
                <span className="text-white/50 text-sm">info@vbss-samaj.org</span>
              </li>
            </ul>
          </div>

          {/* Office Hours */}
          <div>
            <h3 className="font-display text-sm font-bold mb-5 text-accent-400">Office Hours</h3>
            <ul className="space-y-2.5 text-sm text-white/50">
              <li>Monday – Friday: 10 AM – 6 PM</li>
              <li>Saturday: 10 AM – 2 PM</li>
              <li>Sunday: Closed</li>
            </ul>
            <div className="mt-6 p-4 rounded-xl bg-white/5 border border-white/5">
              <p className="text-xs text-white/40">For urgent queries, reach us on WhatsApp</p>
              <p className="text-sm font-medium text-accent-400 mt-1">+91 98XXX XXXXX</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs">
            © 2026 Vaishya Bhartiya Suri Samaj. All Rights Reserved.
          </p>
          <p className="text-white/30 text-xs flex items-center gap-1.5">
            Built with <Heart className="w-3 h-3 text-primary-400 fill-primary-400" /> for our community
          </p>
        </div>
      </div>
    </footer>
  );
}
