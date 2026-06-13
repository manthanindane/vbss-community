import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Youtube, MessageCircle, MapPin, Phone, Mail, Clock, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="w-full relative z-10">
      {/* Pre-footer CTA Band */}
      <div className="w-full bg-gradient-to-r from-maroon-800 to-maroon-950 mandala-bg py-16">
        <div className="container-main text-center flex flex-col items-center">
          <h2 className="font-display text-white text-3xl md:text-4xl font-bold mb-4">
            {t('Join Our Growing Community', 'हमारे बढ़ते समुदाय में शामिल हों')}
          </h2>
          <p className="text-maroon-200 text-lg mb-8 max-w-2xl">
            {t('Become a member of Vaishya Bhartiya Suri Samaj to connect with families, access programs, and preserve our rich heritage.', 'वैश्य भारतीय सूड़ी समाज के सदस्य बनें और अपने परिवार को जोड़ें, कार्यक्रमों का लाभ उठाएं और हमारी समृद्ध विरासत को संरक्षित करें।')}
          </p>
          <Button variant="secondary" size="lg" asChild className="h-12 px-8">
            <Link to="/join">
              {t('Become a Member', 'सदस्य बनें')}
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </div>

      {/* Main Footer */}
      <div className="bg-charcoal-950 text-charcoal-300 pt-20 pb-8">
        <div className="container-main">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
            
            {/* 1. Brand */}
            <div className="flex flex-col gap-6">
              <Link to="/" className="flex items-center gap-3">
                <img src="/logo.png" alt="VBSS Logo" className="h-14 w-auto object-contain bg-white/10 rounded p-1" />
                <div className="flex flex-col">
                  <span className="font-display font-bold text-xl text-white leading-none tracking-tight">VBSS</span>
                  <span className="font-hindi text-xs text-charcoal-400 tracking-wider">सूड़ी समाज</span>
                </div>
              </Link>
              <p className="text-sm leading-relaxed text-charcoal-400">
                {t('Preserving Heritage. Building Community.', 'विरासत का संरक्षण। समुदाय का निर्माण।')}
              </p>
              <p className="text-xs text-charcoal-500">
                {t('Reg No: F-49747 (Mumbai Trust)', 'पंजीकरण संख्या: F-49747 (मुंबई ट्रस्ट)')}
              </p>
              <div className="flex items-center gap-4 mt-2">
                <a href="#" className="w-10 h-10 rounded-full bg-charcoal-900 flex items-center justify-center hover:bg-gold-500 hover:text-white transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-charcoal-900 flex items-center justify-center hover:bg-gold-500 hover:text-white transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-charcoal-900 flex items-center justify-center hover:bg-gold-500 hover:text-white transition-colors">
                  <Youtube className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-charcoal-900 flex items-center justify-center hover:bg-gold-500 hover:text-white transition-colors">
                  <MessageCircle className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* 2. Quick Links */}
            <div>
              <h4 className="font-heading text-lg font-bold text-white mb-6">{t('Quick Links', 'त्वरित लिंक')}</h4>
              <ul className="flex flex-col gap-3">
                {[
                  { name: t('Home', 'होम'), path: '/' },
                  { name: t('About Us', 'हमारे बारे में'), path: '/about' },
                  { name: t('Member Directory', 'सदस्य निर्देशिका'), path: '/directory' },
                  { name: t('Founder Members', 'संस्थापक सदस्य'), path: '/people/founder-members' },
                  { name: t('Events & Gallery', 'कार्यक्रम और गैलरी'), path: '/events' },
                  { name: t('Sandesh (News)', 'संदेश'), path: '/sandesh' },
                  { name: t('Advertise With Us', 'विज्ञापन करें'), path: '/advertise' },
                ].map((link) => (
                  <li key={link.path}>
                    <Link to={link.path} className="text-sm hover:text-gold-400 transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* 3. Programs */}
            <div>
              <h4 className="font-heading text-lg font-bold text-white mb-6">{t('Our Focus', 'हमारा फोकस')}</h4>
              <ul className="flex flex-col gap-3">
                <li className="text-sm text-charcoal-400">{t('Education & Scholarships', 'शिक्षा एवं छात्रवृत्ति')}</li>
                <li className="text-sm text-charcoal-400">{t('Health & Welfare', 'स्वास्थ्य एवं कल्याण')}</li>
                <li className="text-sm text-charcoal-400">{t('Women Empowerment', 'महिला सशक्तिकरण')}</li>
                <li className="text-sm text-charcoal-400">{t('Youth Development', 'युवा विकास')}</li>
                <li className="text-sm text-charcoal-400">{t('Cultural Preservation', 'सांस्कृतिक संरक्षण')}</li>
              </ul>
            </div>

            {/* 4. Contact Info */}
            <div>
              <h4 className="font-heading text-lg font-bold text-white mb-6">{t('Contact Us', 'संपर्क करें')}</h4>
              <ul className="flex flex-col gap-4">
                <li className="flex gap-3 items-start">
                  <MapPin className="w-5 h-5 text-gold-500 shrink-0 mt-0.5" />
                  <div className="text-sm text-charcoal-400">
                    <strong className="text-white block mb-1">Head Office (Mumbai)</strong>
                    Gala No. 6, Tukaram Bhandari Compound,<br />
                    Behind New India Bank, M.G. Road,<br />
                    Charkop Village, Kandivali (W), Mumbai – 67
                  </div>
                </li>
                <li className="flex gap-3 items-center">
                  <Phone className="w-5 h-5 text-gold-500 shrink-0" />
                  <span className="text-sm text-charcoal-400">+91 9967028601 / 8652414344</span>
                </li>
                <li className="flex gap-3 items-center">
                  <Mail className="w-5 h-5 text-gold-500 shrink-0" />
                  <a href="mailto:v.b.surisamaj@gmail.com" className="text-sm text-charcoal-400 hover:text-gold-400 transition-colors">
                    v.b.surisamaj@gmail.com
                  </a>
                </li>
                <li className="flex gap-3 items-center">
                  <Clock className="w-5 h-5 text-gold-500 shrink-0" />
                  <span className="text-sm text-charcoal-400">Mon–Sat: 10:00 AM – 6:00 PM</span>
                </li>
              </ul>
            </div>

          </div>

          <div className="pt-8 border-t border-charcoal-800 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-charcoal-500 text-center md:text-left">
              &copy; {new Date().getFullYear()} Vaishya Bhartiya Suri Samaj. {t('All rights reserved.', 'सभी अधिकार सुरक्षित।')}
            </p>
            <p className="text-xs text-charcoal-500 flex items-center gap-1">
              Made with <span className="text-red-500">❤️</span> {t('for our community', 'हमारे समुदाय के लिए')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
