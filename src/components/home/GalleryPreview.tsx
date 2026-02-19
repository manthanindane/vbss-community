import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { galleryImages } from '@/data/gallery';

export default function GalleryPreview() {
  const preview = galleryImages.slice(0, 6);

  return (
    <section className="section-padding bg-gray-50/50">
      <div className="container-custom">
        <div className="flex items-end justify-between mb-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-maroon-600 mb-2">Photo Gallery</p>
            <h2 className="text-section font-bold text-ink tracking-tight">Community Moments</h2>
          </motion.div>
          <Link
            to="/gallery"
            className="hidden sm:inline-flex items-center gap-1.5 text-sm font-semibold text-maroon-700 hover:gap-3 transition-all group"
          >
            Full Gallery <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {preview.map((img, i) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.4 }}
              className={`relative group rounded-2xl overflow-hidden ${
                i === 0 ? 'sm:col-span-2 row-span-2' : ''
              }`}
              style={{ aspectRatio: i === 0 ? '16/10' : '4/3' }}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <p className="text-white text-sm font-semibold">{img.alt}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
