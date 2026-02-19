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
            transition={{ duration: 0.44 }}
          >
            <span className="section-num block mb-2">05 — Gallery</span>
            <h2
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: 'clamp(1.75rem, 3.5vw, 2.4rem)',
                fontWeight: 800,
                letterSpacing: '-0.03em',
                lineHeight: 1.1,
                color: '#1A1A2E',
              }}
            >
              Community Moments
            </h2>
          </motion.div>
          <Link
            to="/gallery"
            className="hidden sm:inline-flex items-center gap-1.5 text-[13px] font-semibold transition-all group"
            style={{ color: '#1B4D3E', fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Full Gallery
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        {/* Asymmetric mosaic */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
          {/* Big left spans 2 rows */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.42 }}
            className="relative overflow-hidden rounded-2xl group"
            style={{ gridRow: 'span 2', minHeight: 320 }}
          >
            <img
              src={preview[0].src}
              alt={preview[0].alt}
              className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-500"
            />
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5"
              style={{ background: 'linear-gradient(to top, rgba(26,26,46,0.5) 0%, transparent 55%)' }}
            >
              <p
                className="text-white text-sm font-semibold"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                {preview[0].alt}
              </p>
            </div>
          </motion.div>

          {preview.slice(1).map((img, i) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: (i + 1) * 0.07, duration: 0.42 }}
              className="relative overflow-hidden rounded-xl group"
              style={{ height: 154 }}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3"
                style={{ background: 'linear-gradient(to top, rgba(26,26,46,0.5) 0%, transparent 55%)' }}
              >
                <p
                  className="text-white text-xs font-semibold"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  {img.alt}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
