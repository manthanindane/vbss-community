import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, AlertCircle, CreditCard, User, Mail, Phone, MapPin, Building } from 'lucide-react';
import PageTransition from '@/components/shared/PageTransition';
import PageHero from '@/components/layout/PageHero';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/context/LanguageContext';

export default function BecomeMember() {
  const { t } = useLanguage();
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    // Simulate API call for application submission
    setTimeout(() => {
      setStatus('success');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 1500);
  };

  return (
    <PageTransition>
      <PageHero 
        title={t("Become a Member", "सदस्य बनें")}
        hindiTitle="सदस्यता आवेदन"
        subtitle={t("Join the Vaishya Bhartiya Suri Samaj and be a part of our growing family.", "वैश्य भारतीय सूड़ी समाज से जुड़ें और हमारे बढ़ते परिवार का हिस्सा बनें।")}
      />

      <div className="section-padding bg-cream-50 min-h-screen">
        <div className="container-main max-w-4xl">
          
          {status === 'success' ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="card-surface p-10 text-center flex flex-col items-center"
            >
              <div className="w-20 h-20 bg-sage-100 text-sage-600 rounded-full flex items-center justify-center mb-6">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h2 className="font-display text-3xl font-bold text-charcoal-900 mb-4">
                {t("Application Submitted Successfully", "आवेदन सफलतापूर्वक जमा किया गया")}
              </h2>
              <p className="text-charcoal-600 text-lg max-w-lg mb-8">
                {t(
                  "Thank you for your interest in joining VBSS. Your application is under review. You will receive an email shortly with the payment link (Razorpay) to complete your registration.", 
                  "VBSS में शामिल होने के लिए धन्यवाद। आपके आवेदन की समीक्षा की जा रही है। आपको जल्द ही पंजीकरण पूरा करने के लिए भुगतान लिंक (Razorpay) के साथ एक ईमेल प्राप्त होगा।"
                )}
              </p>
              <Button size="lg" onClick={() => setStatus('idle')}>
                {t("Submit Another Application", "एक और आवेदन जमा करें")}
              </Button>
            </motion.div>
          ) : (
            <>
              <div className="bg-white p-6 md:p-8 rounded-2xl shadow-soft border border-gold-200 mb-10 flex gap-4 items-start">
                <AlertCircle className="w-6 h-6 text-gold-600 shrink-0 mt-1" />
                <div>
                  <h3 className="font-heading font-bold text-lg text-charcoal-900 mb-2">
                    {t("Online Registration Process", "ऑनलाइन पंजीकरण प्रक्रिया")}
                  </h3>
                  <p className="text-charcoal-600 text-sm leading-relaxed mb-4">
                    {t(
                      "Fill out the application form below. Once approved by the committee, you will receive a Razorpay payment link. After successful payment, your digital membership card and certificate will be generated automatically.",
                      "नीचे दिया गया आवेदन पत्र भरें। समिति द्वारा स्वीकृत होने के बाद, आपको एक Razorpay भुगतान लिंक प्राप्त होगा। सफल भुगतान के बाद, आपका डिजिटल सदस्यता कार्ड और प्रमाणपत्र स्वचालित रूप से उत्पन्न हो जाएगा।"
                    )}
                  </p>
                  <div className="flex gap-4">
                    <div className="bg-cream-100 text-charcoal-700 px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 border border-cream-200">
                      <CreditCard className="w-4 h-4" /> Razorpay Integration (Upcoming)
                    </div>
                  </div>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="card-surface p-8 md:p-10"
              >
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Personal Information */}
                  <div>
                    <h3 className="font-heading font-bold text-xl text-charcoal-900 mb-6 pb-2 border-b border-cream-200">
                      {t("Personal Information", "व्यक्तिगत जानकारी")}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label>{t("First Name", "पहला नाम")} <span className="text-red-500">*</span></Label>
                        <div className="relative">
                          <User className="absolute left-3 top-3.5 w-5 h-5 text-charcoal-400" />
                          <Input required className="pl-10" placeholder="John" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label>{t("Last Name", "उपनाम")} <span className="text-red-500">*</span></Label>
                        <Input required placeholder="Doe" />
                      </div>
                      <div className="space-y-2">
                        <Label>{t("Email Address", "ईमेल")} <span className="text-red-500">*</span></Label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-3.5 w-5 h-5 text-charcoal-400" />
                          <Input type="email" required className="pl-10" placeholder="john@example.com" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label>{t("Phone Number", "फोन नंबर")} <span className="text-red-500">*</span></Label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-3.5 w-5 h-5 text-charcoal-400" />
                          <Input type="tel" required className="pl-10" placeholder="+91 98765 43210" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Professional & Location */}
                  <div>
                    <h3 className="font-heading font-bold text-xl text-charcoal-900 mb-6 pb-2 border-b border-cream-200">
                      {t("Professional & Location", "व्यावसायिक और स्थान")}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label>{t("Occupation", "व्यवसाय")}</Label>
                        <div className="relative">
                          <Building className="absolute left-3 top-3.5 w-5 h-5 text-charcoal-400" />
                          <Input className="pl-10" placeholder="Business, Service, etc." />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label>{t("City", "शहर")} <span className="text-red-500">*</span></Label>
                        <div className="relative">
                          <MapPin className="absolute left-3 top-3.5 w-5 h-5 text-charcoal-400" />
                          <Input required className="pl-10" placeholder="Mumbai, Patna, etc." />
                        </div>
                      </div>
                      <div className="space-y-2 md:col-span-2">
                        <Label>{t("Complete Address", "पूरा पता")}</Label>
                        <Textarea placeholder={t("Enter your full residential address...", "अपना पूरा आवासीय पता दर्ज करें...")} className="min-h-[100px]" />
                      </div>
                    </div>
                  </div>

                  {/* Membership Details */}
                  <div>
                    <h3 className="font-heading font-bold text-xl text-charcoal-900 mb-6 pb-2 border-b border-cream-200">
                      {t("Membership Type", "सदस्यता प्रकार")}
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <label className="border-2 border-cream-200 rounded-xl p-4 cursor-pointer hover:border-gold-400 transition-colors flex items-start gap-3 has-[:checked]:border-gold-500 has-[:checked]:bg-gold-50">
                        <input type="radio" name="membership_type" className="mt-1 w-4 h-4 text-gold-600 focus:ring-gold-500 border-gray-300" defaultChecked />
                        <div>
                          <p className="font-bold text-charcoal-900">{t("Lifetime Member", "आजीवन सदस्य")}</p>
                          <p className="text-sm text-charcoal-500 mt-1">One-time payment for lifetime access and voting rights.</p>
                        </div>
                      </label>
                      <label className="border-2 border-cream-200 rounded-xl p-4 cursor-pointer hover:border-gold-400 transition-colors flex items-start gap-3 has-[:checked]:border-gold-500 has-[:checked]:bg-gold-50">
                        <input type="radio" name="membership_type" className="mt-1 w-4 h-4 text-gold-600 focus:ring-gold-500 border-gray-300" />
                        <div>
                          <p className="font-bold text-charcoal-900">{t("Annual Member", "वार्षिक सदस्य")}</p>
                          <p className="text-sm text-charcoal-500 mt-1">Yearly subscription to community updates and basic access.</p>
                        </div>
                      </label>
                    </div>
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full h-14 text-lg"
                    disabled={status === 'submitting'}
                  >
                    {status === 'submitting' ? t('Submitting...', 'जमा हो रहा है...') : t('Submit Application', 'आवेदन जमा करें')}
                  </Button>
                </form>
              </motion.div>
            </>
          )}

        </div>
      </div>
    </PageTransition>
  );
}
