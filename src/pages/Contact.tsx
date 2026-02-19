import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, Facebook, Instagram, Youtube } from 'lucide-react';
import PageHero from '@/components/layout/PageHero';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

const contactInfo = [
  { icon: MapPin, label: 'Address', value: 'Samaj Bhavan, 3rd Floor, Dadar West, Mumbai \u2014 400028, Maharashtra, India' },
  { icon: Phone, label: 'Phone', value: '+91 22 2430 XXXX' },
  { icon: Mail, label: 'Email', value: 'info@vbss-samaj.org' },
  { icon: Clock, label: 'Office Hours', value: 'Mon\u2013Fri: 10 AM \u2013 6 PM, Sat: 10 AM \u2013 2 PM' },
];

export default function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <PageHero
        title="Get In Touch"
        subtitle="We'd love to hear from you. Reach out for membership inquiries, event details, or general information."
      />

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-3"
            >
              <Card className="border-0 shadow-[0_4px_30px_rgba(0,0,0,0.05)] rounded-2xl">
                <CardContent className="p-8">
                  <h2 className="font-display text-2xl font-bold text-charcoal mb-6">Send Us a Message</h2>
                  <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-sm font-medium text-charcoal">Full Name</Label>
                        <Input
                          id="name"
                          placeholder="Your full name"
                          className="rounded-xl border-primary-100 focus:border-primary-300 h-11 bg-cream-50/50"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-sm font-medium text-charcoal">Email Address</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="your@email.com"
                          className="rounded-xl border-primary-100 focus:border-primary-300 h-11 bg-cream-50/50"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-sm font-medium text-charcoal">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+91 XXXXX XXXXX"
                        className="rounded-xl border-primary-100 focus:border-primary-300 h-11 bg-cream-50/50"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-sm font-medium text-charcoal">Message</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us how we can help..."
                        rows={5}
                        className="rounded-xl border-primary-100 focus:border-primary-300 bg-cream-50/50 resize-none"
                      />
                    </div>
                    <Button
                      type="submit"
                      className="bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white rounded-full px-8 h-11 text-sm font-semibold shadow-lg shadow-primary-600/20 gap-2"
                    >
                      <Send className="w-4 h-4" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Details */}
            <motion.div
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-2 space-y-5"
            >
              <Card className="border-0 shadow-[0_4px_30px_rgba(0,0,0,0.05)] rounded-2xl overflow-hidden">
                <div className="h-1.5 bg-gradient-to-r from-primary-600 to-accent-500" />
                <CardContent className="p-6 space-y-5">
                  <h3 className="font-display text-lg font-bold text-charcoal">Contact Information</h3>
                  {contactInfo.map((item) => (
                    <div key={item.label} className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-lg bg-primary-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <item.icon className="w-4 h-4 text-primary-600" />
                      </div>
                      <div>
                        <p className="text-xs font-medium text-slate uppercase tracking-wider">{item.label}</p>
                        <p className="text-charcoal text-sm mt-0.5">{item.value}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Social */}
              <Card className="border-0 shadow-[0_4px_30px_rgba(0,0,0,0.05)] rounded-2xl">
                <CardContent className="p-6">
                  <h3 className="font-display text-lg font-bold text-charcoal mb-4">Follow Us</h3>
                  <div className="flex items-center gap-3">
                    {[Facebook, Instagram, Youtube, Phone].map((Icon, i) => (
                      <a
                        key={i}
                        href="#"
                        className="w-10 h-10 rounded-xl bg-primary-50 hover:bg-primary-100 flex items-center justify-center text-primary-600 transition-all hover:scale-110"
                      >
                        <Icon className="w-4 h-4" />
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Map Placeholder */}
              <Card className="border-0 shadow-[0_4px_30px_rgba(0,0,0,0.05)] rounded-2xl overflow-hidden">
                <div className="aspect-[4/3] bg-cream-100 flex items-center justify-center">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.7545305871997!2d72.84387731541584!3d19.018126787109945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce9d00000001%3A0x12f044c3b10bda7e!2sDadar%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1709000000000!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Samaj Location"
                    className="grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
