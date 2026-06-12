import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SectionHeading from '@/components/shared/SectionHeading';
import { galleryImages } from '@/data/gallery';
import { cn } from '@/lib/utils';

export default function GalleryPreview() {
  // Take first 6 images
  const previewImages = galleryImages.slice(0, 6);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5 } }
  };

  // Helper to determine aspect ratio class based on index to create a varied masonry look
  const getAspectRatioClass = (index: number) => {
    switch (index) {
      case 0: return 'aspect-[4/3] md:col-span-2 lg:col-span-1 lg:row-span-2 h-full';
      case 1: return 'aspect-square';
      case 2: return 'aspect-[3/4]';
      case 3: return 'aspect-[4/3]';
      case 4: return 'aspect-square md:col-span-2 lg:col-span-1';
      case 5: return 'aspect-[3/4]';
      default: return 'aspect-square';
    }
  };

  return (
    <section className="section-padding bg-cream-50">
      <div className="container-main">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <SectionHeading 
            sectionNumber="05" 
            hindiTitle="समुदाय झलकियाँ" 
            title="Community Highlights"
            align="left"
          />
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="hidden md:block pb-6"
          >
            <Button variant="outline" asChild>
              <Link to="/gallery">
                View Full Gallery
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </motion.div>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-fr"
        >
          {previewImages.map((img, index) => (
            <motion.div 
              key={img.id} 
              variants={itemVariants}
              className={cn(
                "relative rounded-2xl overflow-hidden group cursor-pointer shadow-soft",
                getAspectRatioClass(index)
              )}
            >
              <img 
                src={img.src} 
                alt={img.alt} 
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/80 via-charcoal-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-heading font-medium px-2.5 py-1 rounded-full bg-white/20 text-white backdrop-blur-md">
                      {img.category}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-gold-500/90 text-white flex items-center justify-center ml-auto backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                      <Eye className="w-4 h-4" />
                    </div>
                  </div>
                  <h3 className="font-heading font-semibold text-white text-lg line-clamp-2">
                    {img.alt}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 text-center md:hidden"
        >
          <Button variant="outline" size="lg" className="w-full sm:w-auto" asChild>
            <Link to="/gallery">
              View Full Gallery
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
