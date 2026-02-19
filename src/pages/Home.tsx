import { motion } from 'framer-motion';
import HeroSection from '@/components/home/HeroSection';
import StatsCounter from '@/components/home/StatsCounter';
import AboutPreview from '@/components/home/AboutPreview';
import EventsPreview from '@/components/home/EventsPreview';
import SandeshPreview from '@/components/home/SandeshPreview';
import GalleryPreview from '@/components/home/GalleryPreview';

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <HeroSection />
      <StatsCounter />
      <AboutPreview />
      <EventsPreview />
      <SandeshPreview />
      <GalleryPreview />
    </motion.div>
  );
}
