import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Youtube, MessageCircle, MapPin, Phone, Mail, Clock, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Footer() {
  return (
    <footer>
      {/* Pre-footer CTA */}
      <div className="bg-gradient-to-r from-maroon-800 to-maroon-950 mandala-bg section-padding">
        <div className="container-main text-center relative z-10">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Join Our Growing Community
          </h2>
          <p className="text-maroon-200 text-lg mb-8 max-w-2xl mx-auto">
            Become a part of the Vaishya Bhartiya Suri Samaj and help us preserve our heritage while building a stronger future together.
          </p>
          <Button variant="secondary" size="lg" asChild>
            <Link to="/contact">
              Become a Member
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </div>

      {/* Main Footer */}
      <div className="bg-charcoal-950 text-charcoal-300 pt-20 pb-10">
        <div className="container-main">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            
            {/* Brand Column */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-gradient-to-br from-maroon-700 to-maroon-800 rounded-lg p-2 shadow-warm">
                  <span className="font-hindi text-xl text-gold-300 block leading-none">व</span>
                </div>
                <span className="font-display font-bold text-2xl text-white">VBSS</span>
              </div>
              <p className="text-charcoal-400 mb-8">
                Preserving Heritage. Building Community. Uniting the Suri Vaishya families across India.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-charcoal-800 flex items-center justify-center hover:bg-gold-500 hover:text-white transition-all" aria-label="Facebook">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-charcoal-800 flex items-center justify-center hover:bg-gold-500 hover:text-white transition-all" aria-label="Instagram">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-charcoal-800 flex items-center justify-center hover:bg-gold-500 hover:text-white transition-all" aria-label="YouTube">
                  <Youtube className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-charcoal-800 flex items-center justify-center hover:bg-gold-500 hover:text-white transition-all" aria-label="WhatsApp">
                  <MessageCircle className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-heading text-lg font-semibold text-white mb-6">Quick Links</h3>
              <ul className="flex flex-col gap-3">
                <li><Link to="/" className="hover:text-gold-400 transition-colors">Home</Link></li>
                <li><Link to="/about" className="hover:text-gold-400 transition-colors">About Us</Link></li>
                <li><Link to="/events" className="hover:text-gold-400 transition-colors">Events & Celebrations</Link></li>
                <li><Link to="/gallery" className="hover:text-gold-400 transition-colors">Gallery</Link></li>
                <li><Link to="/committee" className="hover:text-gold-400 transition-colors">Leadership</Link></li>
                <li><Link to="/sandesh" className="hover:text-gold-400 transition-colors">Vaishya Suri Sandesh</Link></li>
                <li><Link to="/contact" className="hover:text-gold-400 transition-colors">Contact Us</Link></li>
              </ul>
            </div>

            {/* Programs */}
            <div>
              <h3 className="font-heading text-lg font-semibold text-white mb-6">Our Programs</h3>
              <ul className="flex flex-col gap-3">
                <li>Education & Scholarships</li>
                <li>Health & Welfare Camps</li>
                <li>Women Empowerment</li>
                <li>Youth Development</li>
                <li>Community Matrimony</li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-heading text-lg font-semibold text-white mb-6">Contact Us</h3>
              <ul className="flex flex-col gap-4">
                <li className="flex gap-3 items-start">
                  <MapPin className="w-5 h-5 text-gold-500 shrink-0 mt-0.5" />
                  <span>Samaj Bhavan, 3rd Floor, Dadar West, Mumbai – 400028</span>
                </li>
                <li className="flex gap-3 items-center">
                  <Phone className="w-5 h-5 text-gold-500 shrink-0" />
                  <span>+91 22 2430 XXXX</span>
                </li>
                <li className="flex gap-3 items-center">
                  <Mail className="w-5 h-5 text-gold-500 shrink-0" />
                  <span>info@vbss.org</span>
                </li>
                <li className="flex gap-3 items-center">
                  <Clock className="w-5 h-5 text-gold-500 shrink-0" />
                  <span>Mon–Sat, 10:00 AM – 6:00 PM</span>
                </li>
              </ul>
            </div>

          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-charcoal-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-charcoal-500">
            <p>© {new Date().getFullYear()} Vaishya Bhartiya Suri Samaj. All rights reserved.</p>
            <p>Made with <span className="text-maroon-500">❤️</span> for our community</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
