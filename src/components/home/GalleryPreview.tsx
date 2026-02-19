import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { galleryImages } from '@/data/gallery';

export default function GalleryPreview() {
  const preview = galleryImages.slice(0, 5);

  return (
    <section className="section-padding" style={{ background: '#FFFFFF' }}>
      <div className="container-custom">
        <div className="flex items-end justify-between mb-10">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
          >
            <span className="label block mb-2">Photo Gallery</span>
            <h2
              className="font-display text-ink"
              style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)', fontWeight: 800, lineHeight: 1.1 }}
            >
              Community Moments
            </h2>
          </motion.div>
          <Link
            to="/gallery"
            className="hidden sm:inline-flex items-center gap-1.5 text-[13px] font-semibold transition-all group"
            style={{ color: '#9B2335', fontFamily: 'DM Sans, sans-serif' }}
          >
            Full Gallery <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        {/* Asymmetric masonry-style grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
          {/* Big left image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="relative row-span-2 rounded-2xl overflow-hidden group"
            style={{ gridRow: 'span 2', minHeight: 320 }}
          >
            <img src={preview[0].src} alt={preview[0].alt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5"
              style={{ background: 'linear-gradient(to top, rgba(28,25,23,0.5) 0%, transparent 55%)' }}
            >
              <p className="text-white text-sm font-semibold" style={{ fontFamily: 'DM Sans, sans-serif' }}>{preview[0].alt}</p>
            </div>
          </motion.div>

          {/* Right side — stacked shorter images */}
          {preview.slice(1).map((img, i) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: (i + 1) * 0.06, duration: 0.4 }}
              className="relative rounded-xl overflow-hidden group"
              style={{ height: i < 2 ? 155 : 155 }}
            >
              <img src={img.src} alt={img.alt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3"
                style={{ background: 'linear-gradient(to top, rgba(28,25,23,0.5) 0%, transparent 55%)' }}
              >
                <p className="text-white text-xs font-semibold" style={{ fontFamily: 'DM Sans, sans-serif' }}>{img.alt}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
