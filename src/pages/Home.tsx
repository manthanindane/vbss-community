import React from 'react';
import PageTransition from '@/components/shared/PageTransition';
import HeroSection from '@/components/home/HeroSection';
import StatsCounter from '@/components/home/StatsCounter';
import AboutPreview from '@/components/home/AboutPreview';
import EventsPreview from '@/components/home/EventsPreview';
import LeadershipPreview from '@/components/home/LeadershipPreview';
import ImpactSection from '@/components/home/ImpactSection';
import GalleryPreview from '@/components/home/GalleryPreview';
import SandeshPreview from '@/components/home/SandeshPreview';
import MembershipCTA from '@/components/home/MembershipCTA';

export default function Home() {
  return (
    <PageTransition>
      <div id="main-content">
        <HeroSection />
        <StatsCounter />
        <AboutPreview />
        <EventsPreview />
        <LeadershipPreview />
        <ImpactSection />
        <GalleryPreview />
        <SandeshPreview />
        <MembershipCTA />
      </div>
    </PageTransition>
  );
}
