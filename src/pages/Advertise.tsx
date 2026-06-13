import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Megaphone, Target, BarChart3, Building, Mail, Phone, Link as LinkIcon, User } from 'lucide-react';
import PageTransition from '@/components/shared/PageTransition';
import PageHero from '@/components/layout/PageHero';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/context/LanguageContext';

export default function Advertise() {
  const { t } = useLanguage();
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 1500);
  };

  return (
    <PageTransition>
      <PageHero 
        title={t("Advertise With Us", "हमारे साथ विज्ञापन करें")}
        hindiTitle="विज्ञापन"
        subtitle={t("Showcase your business to thousands of community members across the nation.", "देश भर में हजारों समुदाय के सदस्यों को अपना व्यवसाय दिखाएं।")}
      />

      <div className="section-padding bg-cream-50 min-h-screen">
        <div className="container-main max-w-6xl">
          
          <div className="grid lg:grid-cols-[1fr_450px] gap-12 items-start">
            
            {/* Left: Info */}
            <div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-12"
              >
                <h2 className="font-display text-3xl md:text-4xl font-bold text-charcoal-900 mb-6">
                  {t("Why Advertise on VBSS?", "VBSS पर विज्ञापन क्यों दें?")}
                </h2>
                <p className="text-charcoal-600 text-lg leading-relaxed mb-8">
                  {t(
                    "The Vaishya Bhartiya Suri Samaj platform receives thousands of hits monthly from engaged community members across India. Advertising with us is the perfect way to reach a highly targeted, supportive demographic while contributing to the Samaj's welfare programs.",
                    "वैश्य भारतीय सूड़ी समाज मंच को भारत भर के समुदाय के सदस्यों से मासिक रूप से हजारों हिट मिलते हैं। हमारे साथ विज्ञापन करना समाज के कल्याण कार्यक्रमों में योगदान करते हुए एक लक्षित जनसांख्यिकी तक पहुंचने का सही तरीका है।"
                  )}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    { icon: Target, title: t("Targeted Reach", "लक्षित पहुंच"), desc: t("Connect directly with Suri Samaj members", "सूड़ी समाज के सदस्यों से सीधे जुड़ें") },
                    { icon: Megaphone, title: t("Brand Visibility", "ब्रांड दृश्यता"), desc: t("Homepage banners and dedicated sponsor sections", "होमपेज बैनर और प्रायोजक अनुभाग") },
                    { icon: BarChart3, title: t("High Engagement", "उच्च सहभागिता"), desc: t("Active daily users across our directory and news", "निर्देशिका और समाचारों पर सक्रिय दैनिक उपयोगकर्ता") },
                    { icon: CheckCircle2, title: t("Community Support", "सामुदायिक सहयोग"), desc: t("Funds support scholarships and medical camps", "फंड से छात्रवृत्ति और चिकित्सा शिविरों को सहयोग") }
                  ].map((feature, i) => (
                    <div key={i} className="bg-white p-6 rounded-2xl shadow-soft border border-cream-200">
                      <feature.icon className="w-8 h-8 text-gold-500 mb-4" />
                      <h4 className="font-heading font-bold text-charcoal-900 mb-2">{feature.title}</h4>
                      <p className="text-sm text-charcoal-500">{feature.desc}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              <div className="bg-maroon-900 text-white p-8 rounded-2xl shadow-soft-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-maroon-800 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/3"></div>
                <h3 className="font-display text-2xl font-bold mb-4 relative z-10">{t("Upcoming Feature: Self-Serve Ads", "आगामी सुविधा: स्वयं-सेवा विज्ञापन")}</h3>
                <p className="text-maroon-200 relative z-10">
                  {t("Soon, you will be able to purchase, upload, and manage your banner advertisements directly through this portal with automated approval workflows.", "जल्द ही, आप स्वचालित अनुमोदन वर्कफ़्लो के साथ सीधे इस पोर्टल के माध्यम से अपने बैनर विज्ञापन खरीद, अपलोड और प्रबंधित कर सकेंगे।")}
                </p>
              </div>
            </div>

            {/* Right: Form */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="card-surface p-8 lg:p-10 sticky top-32"
            >
              {status === 'success' ? (
                <div className="text-center py-10">
                  <div className="w-16 h-16 bg-sage-100 text-sage-600 rounded-full flex items-center justify-center mb-6 mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-charcoal-900 mb-2">{t("Inquiry Sent!", "पूछताछ भेजी गई!")}</h3>
                  <p className="text-charcoal-500 mb-6">
                    {t("Our team will contact you shortly with advertisement plans and pricing.", "हमारी टीम विज्ञापन योजनाओं और मूल्य निर्धारण के साथ आपसे संपर्क करेगी।")}
                  </p>
                  <Button variant="outline" onClick={() => setStatus('idle')}>{t("Send Another", "एक और भेजें")}</Button>
                </div>
              ) : (
                <>
                  <h3 className="font-display text-2xl font-bold text-charcoal-900 mb-2">
                    {t("Submit Inquiry", "पूछताछ जमा करें")}
                  </h3>
                  <p className="text-charcoal-500 text-sm mb-8">
                    {t("Fill out the form below to receive our media kit and pricing.", "हमारा मीडिया किट और मूल्य निर्धारण प्राप्त करने के लिए नीचे दिया गया फॉर्म भरें।")}
                  </p>
                  
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="space-y-2">
                      <Label>{t("Business Name", "व्यवसाय का नाम")} <span className="text-red-500">*</span></Label>
                      <div className="relative">
                        <Building className="absolute left-3 top-3.5 w-4 h-4 text-charcoal-400" />
                        <Input required className="pl-9" placeholder="Your Company Ltd." />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label>{t("Contact Person", "संपर्क व्यक्ति")} <span className="text-red-500">*</span></Label>
                      <div className="relative">
                        <User className="absolute left-3 top-3.5 w-4 h-4 text-charcoal-400" />
                        <Input required className="pl-9" placeholder="John Doe" />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label>{t("Phone", "फोन")} <span className="text-red-500">*</span></Label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-3.5 w-4 h-4 text-charcoal-400" />
                          <Input required className="pl-9" placeholder="+91..." />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label>{t("Email", "ईमेल")}</Label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-3.5 w-4 h-4 text-charcoal-400" />
                          <Input type="email" className="pl-9" placeholder="@" />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label>{t("Website (Optional)", "वेबसाइट (वैकल्पिक)")}</Label>
                      <div className="relative">
                        <LinkIcon className="absolute left-3 top-3.5 w-4 h-4 text-charcoal-400" />
                        <Input type="url" className="pl-9" placeholder="https://" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label>{t("Message", "संदेश")}</Label>
                      <Textarea placeholder={t("Tell us what kind of ad you are looking for...", "हमें बताएं कि आप किस तरह का विज्ञापन चाहते हैं...")} className="min-h-[100px]" />
                    </div>

                    <Button type="submit" className="w-full h-12" disabled={status === 'submitting'}>
                      {status === 'submitting' ? t("Sending...", "भेजा जा रहा है...") : t("Request Details", "विवरण का अनुरोध करें")}
                    </Button>
                  </form>
                </>
              )}
            </motion.div>

          </div>
        </div>
      </div>
    </PageTransition>
  );
}
