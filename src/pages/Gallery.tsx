import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import PageHero from '@/components/layout/PageHero';
import { galleryImages } from '@/data/gallery';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';

type GalleryFilter = 'All' | 'Events' | 'Festivals' | 'Gatherings';
const filters: GalleryFilter[] = ['All', 'Events', 'Festivals', 'Gatherings'];

export default function Gallery() {
  const [active, setActive] = useState<GalleryFilter>('All');
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  const filtered = galleryImages.filter((img) => active === 'All' || img.category === active);

  const goNext = () => {
    if (selectedIdx !== null) setSelectedIdx((selectedIdx + 1) % filtered.length);
  };
  const goPrev = () => {
    if (selectedIdx !== null) setSelectedIdx((selectedIdx - 1 + filtered.length) % filtered.length);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <PageHero
        title="Community Gallery"
        subtitle="A visual journey through our events, festivals, and cherished community moments."
      />

      <section className="section-padding">
        <div className="container-custom">
          {/* Filter Tabs */}
          <div className="flex justify-center mb-10">
            <Tabs value={active} onValueChange={(v) => setActive(v as GalleryFilter)}>
              <TabsList className="bg-cream-100 h-auto p-1.5 rounded-xl gap-1">
                {filters.map((f) => (
                  <TabsTrigger
                    key={f}
                    value={f}
                    className="rounded-lg px-4 py-2 text-sm font-medium data-[state=active]:bg-white data-[state=active]:text-primary-700 data-[state=active]:shadow-sm"
                  >
                    {f}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>

          {/* Masonry Grid */}
          <motion.div
            key={active}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="columns-2 md:columns-3 lg:columns-4 gap-3 lg:gap-4"
          >
            {filtered.map((img, i) => (
              <motion.div
                key={img.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04, duration: 0.4 }}
                className="relative group cursor-pointer mb-3 lg:mb-4 break-inside-avoid"
                onClick={() => setSelectedIdx(i)}
              >
                <div className="overflow-hidden rounded-2xl">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    loading="lazy"
                    style={{ aspectRatio: i % 3 === 0 ? '3/4' : i % 3 === 1 ? '4/3' : '1/1' }}
                  />
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-white text-sm font-medium">{img.alt}</p>
                    <p className="text-white/60 text-xs mt-0.5">{img.category}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <Dialog open={selectedIdx !== null} onOpenChange={() => setSelectedIdx(null)}>
        <DialogContent className="max-w-4xl bg-black/95 border-0 p-0 overflow-hidden rounded-2xl">
          <DialogTitle className="sr-only">Gallery Image</DialogTitle>
          {selectedIdx !== null && (
            <div className="relative">
              <img
                src={filtered[selectedIdx].src.replace('w=600&h=400', 'w=1200&h=800')}
                alt={filtered[selectedIdx].alt}
                className="w-full h-auto max-h-[80vh] object-contain"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                <p className="text-white font-display text-lg font-bold">{filtered[selectedIdx].alt}</p>
                <p className="text-white/60 text-sm">{filtered[selectedIdx].category}</p>
              </div>
              <button
                onClick={(e) => { e.stopPropagation(); goPrev(); }}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); goNext(); }}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </motion.div>
  );
}
