import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, ChevronLeft, ChevronRight } from 'lucide-react';
import PageTransition from '@/components/shared/PageTransition';
import PageHero from '@/components/layout/PageHero';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { galleryImages } from '@/data/gallery';
import { useLanguage } from '@/context/LanguageContext';

export default function Gallery() {
  const { t } = useLanguage();
  const [filter, setFilter] = useState('All');
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const tabs = [
    { value: 'All', label: t('All', 'सभी') },
    { value: 'Events', label: t('Events', 'कार्यक्रम') },
    { value: 'Festivals', label: t('Festivals', 'त्यौहार') },
    { value: 'Gatherings', label: t('Gatherings', 'समारोह') }
  ];

  const filteredImages = galleryImages.filter((img) => {
    if (filter === 'All') return true;
    return img.category === filter;
  });

  const handlePrevious = useCallback(() => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex(selectedImageIndex === 0 ? filteredImages.length - 1 : selectedImageIndex - 1);
    }
  }, [selectedImageIndex, filteredImages.length]);

  const handleNext = useCallback(() => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex(selectedImageIndex === filteredImages.length - 1 ? 0 : selectedImageIndex + 1);
    }
  }, [selectedImageIndex, filteredImages.length]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImageIndex === null) return;
      if (e.key === 'ArrowLeft') handlePrevious();
      if (e.key === 'ArrowRight') handleNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImageIndex, handlePrevious, handleNext]);

  return (
    <PageTransition>
      <PageHero 
        title={t("Community Gallery", "सामुदायिक गैलरी")} 
        hindiTitle="गैलरी"
        subtitle={t("Moments from our community gatherings and celebrations", "हमारे सामुदायिक समारोहों और उत्सवों की झलकियाँ")}
      />

      <div id="main-content" className="section-padding min-h-[60vh]">
        <div className="container-main">
          
          <div className="flex justify-center mb-12 overflow-x-auto pb-4 custom-scrollbar">
            <Tabs defaultValue="All" onValueChange={setFilter} className="w-full sm:w-auto flex justify-center">
              <TabsList>
                {tabs.map((tab) => (
                  <TabsTrigger key={tab.value} value={tab.value}>
                    {tab.label}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>

          <motion.div layout className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
            <AnimatePresence>
              {filteredImages.map((img, index) => (
                <motion.div
                  key={img.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="break-inside-avoid relative rounded-2xl overflow-hidden group cursor-pointer shadow-soft"
                  onClick={() => setSelectedImageIndex(index)}
                >
                  <img 
                    src={img.src} 
                    alt={img.alt} 
                    loading="lazy"
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <div className="flex items-center justify-between mb-2 translate-y-2 group-hover:translate-y-0 transition-transform">
                      <span className="text-xs font-heading font-medium px-2.5 py-1 rounded-full bg-white/20 text-white backdrop-blur-md">
                        {img.category}
                      </span>
                      <Eye className="w-5 h-5 text-white opacity-0 group-hover:opacity-100 transition-opacity delay-100" />
                    </div>
                    <h3 className="font-heading font-semibold text-white text-sm translate-y-2 group-hover:translate-y-0 transition-transform delay-75">
                      {img.alt}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

        </div>
      </div>

      {/* Lightbox Dialog */}
      <Dialog open={selectedImageIndex !== null} onOpenChange={(open) => !open && setSelectedImageIndex(null)}>
        <DialogContent className="max-w-5xl bg-charcoal-950 border-charcoal-800 p-0 overflow-hidden rounded-2xl">
          <DialogTitle className="sr-only">Image Lightbox</DialogTitle>
          
          {selectedImageIndex !== null && (
            <div className="relative w-full h-[80vh] flex flex-col">
              {/* Image Container */}
              <div className="relative flex-1 flex items-center justify-center p-4 bg-charcoal-950">
                <img 
                  src={filteredImages[selectedImageIndex].src} 
                  alt={filteredImages[selectedImageIndex].alt}
                  className="max-w-full max-h-full object-contain"
                />
                
                {/* Navigation Buttons */}
                <button 
                  onClick={(e) => { e.stopPropagation(); handlePrevious(); }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center backdrop-blur-md transition-colors focus:outline-none focus:ring-2 focus:ring-gold-500"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button 
                  onClick={(e) => { e.stopPropagation(); handleNext(); }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center backdrop-blur-md transition-colors focus:outline-none focus:ring-2 focus:ring-gold-500"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
              
              {/* Image Info Footer */}
              <div className="bg-charcoal-900 p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h3 className="text-white font-heading text-lg font-semibold mb-1">
                    {filteredImages[selectedImageIndex].alt}
                  </h3>
                  <p className="text-charcoal-400 text-sm">
                    {t('Image', 'छवि')} {selectedImageIndex + 1} {t('of', 'में से')} {filteredImages.length}
                  </p>
                </div>
                <Badge variant="secondary" className="bg-gold-500/20 text-gold-400 border-gold-500/30">
                  {tabs.find(tObj => tObj.value === filteredImages[selectedImageIndex].category)?.label || filteredImages[selectedImageIndex].category}
                </Badge>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </PageTransition>
  );
}
