import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import SectionHeading from '@/components/shared/SectionHeading';
import { galleryImages } from '@/data/gallery';

export default function GalleryPreview() {
  const preview = galleryImages.slice(0, 6);

  return (
    <section className="section-padding relative bg-gradient-to-b from-cream-50 to-white">
      <div className="container-custom">
        <SectionHeading
          title="Community Highlights"
          subtitle="Glimpses from our events, festivals, and gatherings that bring our community together."
        />

        {/* Bento Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 lg:gap-4">
          {preview.map((img, i) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ delay: i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className={`relative group overflow-hidden rounded-2xl ${
                i === 0 ? 'md:col-span-2 md:row-span-2 aspect-[4/3]' : 'aspect-square'
              }`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-400">
                <p className="text-white text-sm font-medium">{img.alt}</p>
                <p className="text-white/60 text-xs mt-0.5">{img.category}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/gallery"
            className="inline-flex items-center gap-2 text-primary-600 font-semibold text-sm group hover:gap-3 transition-all bg-primary-50 hover:bg-primary-100 rounded-full px-6 py-2.5"
          >
            View Full Gallery
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
