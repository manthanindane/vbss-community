import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { galleryImages } from '@/data/gallery';

export default function GalleryPreview() {
  const preview = galleryImages.slice(0, 7);

  // Manual layout: first is big, rest fill a 2x3 grid
  const [first, ...rest] = preview;

  return (
    <section className="border-b-4 border-black">
      {/* Header */}
      <div className="border-b-2 border-black px-8 lg:px-14 py-5 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <span
            className="font-display text-white px-3 py-1 text-sm font-black uppercase tracking-widest"
            style={{ backgroundColor: '#E60023', fontFamily: 'Barlow Condensed, sans-serif', letterSpacing: '0.1em' }}
          >
            05
          </span>
          <span className="font-display text-black uppercase font-black text-xl" style={{ fontFamily: 'Barlow Condensed, sans-serif', letterSpacing: '0.05em' }}>
            Community Gallery
          </span>
        </div>
        <Link
          to="/gallery"
          className="border-2 border-black px-4 py-1.5 font-black uppercase text-xs tracking-widest hover:bg-black hover:text-white transition-colors duration-100"
          style={{ fontFamily: 'Barlow Condensed, sans-serif', letterSpacing: '0.1em' }}
        >
          Full Gallery &rarr;
        </Link>
      </div>

      {/* Mosaic grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4">
        {/* Large first image */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.25 }}
          className="relative col-span-2 row-span-2 border-r-2 border-b-2 border-black group"
          style={{ minHeight: 320 }}
        >
          <img
            src={first.src}
            alt={first.alt}
            className="w-full h-full object-cover"
            style={{ display: 'block', minHeight: 320 }}
          />
          <div
            className="absolute inset-0 bg-black transition-opacity duration-100 opacity-0 group-hover:opacity-40"
          />
          <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-150">
            <p className="text-white font-display uppercase text-lg font-black" style={{ fontFamily: 'Barlow Condensed, sans-serif' }}>{first.alt}</p>
          </div>
        </motion.div>

        {/* Rest — 2-col, fill right side */}
        {rest.map((img, i) => (
          <motion.div
            key={img.id}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: (i + 1) * 0.05, duration: 0.2 }}
            className={`relative border-black group ${
              i % 2 === 0 ? 'border-r-2' : ''
            } border-b-2 last:border-b-0`}
            style={{ minHeight: 160 }}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover"
              style={{ display: 'block', minHeight: 160 }}
            />
            <div className="absolute inset-0 bg-black transition-opacity duration-100 opacity-0 group-hover:opacity-50" />
            <div className="absolute bottom-0 left-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition-all duration-150">
              <p className="text-white font-display uppercase text-sm font-black" style={{ fontFamily: 'Barlow Condensed, sans-serif' }}>{img.alt}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bottom CTA band */}
      <div style={{ backgroundColor: '#E60023' }} className="px-8 lg:px-14 py-6 flex items-center justify-between border-t-2 border-black">
        <p
          className="text-white font-display uppercase font-black"
          style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: 'clamp(1.2rem,3vw,2rem)', letterSpacing: '-0.01em' }}
        >
          See All Community Photos
        </p>
        <Link
          to="/gallery"
          className="border-2 border-white px-6 py-3 text-white font-black uppercase tracking-widest hover:bg-white hover:text-black transition-colors duration-100"
          style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '0.9rem', letterSpacing: '0.1em' }}
        >
          Gallery &rarr;
        </Link>
      </div>
    </section>
  );
}
