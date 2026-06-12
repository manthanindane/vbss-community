import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, User, MessageCircle, Facebook, Instagram, Youtube, AlertCircle, CheckCircle2 } from 'lucide-react';
import PageTransition from '@/components/shared/PageTransition';
import PageHero from '@/components/layout/PageHero';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setStatus('submitting');
      // Simulate API call
      setTimeout(() => {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      }, 1500);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  return (
    <PageTransition>
      <PageHero 
        title="Get In Touch" 
        hindiTitle="संपर्क करें"
        subtitle="We would love to hear from you. Reach out for membership, queries, or support."
      />

      <div id="main-content" className="section-padding bg-cream-50">
        <div className="container-main">
          
          <div className="grid lg:grid-cols-[1fr_400px] gap-12 items-start">
            
            {/* Left: Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="card-surface p-8 lg:p-10"
            >
              <h2 className="font-display text-3xl font-bold text-charcoal-900 mb-2">Send Us a Message</h2>
              <p className="text-charcoal-500 mb-8">Fill out the form below and our team will get back to you shortly.</p>

              {status === 'success' && (
                <div className="mb-6 bg-sage-50 border border-sage-200 text-sage-800 px-4 py-3 rounded-xl flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-sage-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-heading font-semibold">Message Sent Successfully!</h4>
                    <p className="text-sm">Thank you for reaching out. We will contact you soon.</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name <span className="text-red-500">*</span></Label>
                  <div className="relative">
                    <User className="absolute left-4 top-3.5 w-5 h-5 text-charcoal-400" />
                    <Input 
                      id="name" 
                      name="name" 
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name" 
                      className="pl-12"
                    />
                  </div>
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address <span className="text-red-500">*</span></Label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-3.5 w-5 h-5 text-charcoal-400" />
                      <Input 
                        id="email" 
                        name="email" 
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@example.com" 
                        className="pl-12"
                      />
                    </div>
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-3.5 w-5 h-5 text-charcoal-400" />
                      <Input 
                        id="phone" 
                        name="phone" 
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 XXXXX XXXXX" 
                        className="pl-12"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Your Message <span className="text-red-500">*</span></Label>
                  <Textarea 
                    id="message" 
                    name="message" 
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="How can we help you?" 
                    className="min-h-[150px] resize-y"
                  />
                  {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full h-14 text-base" 
                  disabled={status === 'submitting'}
                >
                  {status === 'submitting' ? 'Sending...' : 'Send Message'}
                  <Send className="w-5 h-5 ml-2" />
                </Button>
              </form>
            </motion.div>

            {/* Right: Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="card-surface p-8 lg:p-10 bg-gradient-to-br from-maroon-50 to-cream-50"
            >
              <h3 className="font-display text-2xl font-bold text-charcoal-900 mb-8">Contact Information</h3>
              
              <ul className="space-y-8 mb-10">
                <li className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-xl bg-gold-100 flex items-center justify-center shrink-0 text-gold-600">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-charcoal-900 mb-1">Our Address</h4>
                    <p className="text-charcoal-600 text-sm leading-relaxed">
                      Samaj Bhavan, 3rd Floor,<br />
                      Dadar West, Mumbai – 400028<br />
                      Maharashtra, India
                    </p>
                  </div>
                </li>
                
                <li className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-xl bg-gold-100 flex items-center justify-center shrink-0 text-gold-600">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-charcoal-900 mb-1">Phone Number</h4>
                    <p className="text-charcoal-600 text-sm">
                      +91 22 2430 XXXX<br />
                      +91 98XXX XXXXX (Secretary)
                    </p>
                  </div>
                </li>

                <li className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-xl bg-gold-100 flex items-center justify-center shrink-0 text-gold-600">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-charcoal-900 mb-1">Email Address</h4>
                    <p className="text-charcoal-600 text-sm">
                      info@vbss.org<br />
                      support@vbss.org
                    </p>
                  </div>
                </li>

                <li className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-xl bg-gold-100 flex items-center justify-center shrink-0 text-gold-600">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-charcoal-900 mb-1">Office Hours</h4>
                    <p className="text-charcoal-600 text-sm">
                      Mon – Sat: 10:00 AM – 6:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </li>
              </ul>

              <div className="pt-8 border-t border-cream-200">
                <h4 className="font-heading font-semibold text-charcoal-900 mb-4">Follow Us</h4>
                <div className="flex gap-3">
                  <a href="#" className="w-10 h-10 rounded-full bg-maroon-100 text-maroon-700 flex items-center justify-center hover:bg-maroon-700 hover:text-white transition-colors" aria-label="Facebook">
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-maroon-100 text-maroon-700 flex items-center justify-center hover:bg-maroon-700 hover:text-white transition-colors" aria-label="Instagram">
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-maroon-100 text-maroon-700 flex items-center justify-center hover:bg-maroon-700 hover:text-white transition-colors" aria-label="YouTube">
                    <Youtube className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-maroon-100 text-maroon-700 flex items-center justify-center hover:bg-maroon-700 hover:text-white transition-colors" aria-label="WhatsApp">
                    <MessageCircle className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Google Maps Embed */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-16 rounded-2xl overflow-hidden shadow-soft h-[400px] border border-cream-300 relative group"
          >
            <div className="absolute inset-0 bg-charcoal-900/10 pointer-events-none z-10 group-hover:bg-transparent transition-colors duration-500"></div>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m2!1s0x3be7c907a41eb6c3%3A0xc3ce311546736293!2sDadar%20West%2C%20Dadar%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="filter grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
              title="VBSS Office Location Map"
            ></iframe>
          </motion.div>

        </div>
      </div>
    </PageTransition>
  );
}
