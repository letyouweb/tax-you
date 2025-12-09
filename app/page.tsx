'use client';

import { useState } from 'react';
import HeroSection from '@/components/HeroSection';
import InsightSection from '@/components/InsightSection';
import SuccessCasesSection from '@/components/SuccessCasesSection';
import ServicesSection from '@/components/ServicesSection';
import AwardsSection from '@/components/AwardsSection';
import LocationSection from '@/components/LocationSection';
import CTASection from '@/components/CTASection';
import ImageLightbox from '@/components/ImageLightbox';

export default function Home() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState({ src: '', alt: '' });

  const openLightbox = (src: string, alt: string) => {
    setLightboxImage({ src, alt });
    setLightboxOpen(true);
  };

  return (
    <>
      {/* 스크롤 스냅 스타일 - Home 페이지에서만 적용 */}
      <style jsx global>{`
        @media (min-width: 1024px) {
          .snap-container {
            scroll-snap-type: y mandatory;
            overflow-y: scroll;
            height: 100vh;
          }
          .snap-section {
            scroll-snap-align: start;
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
          }
        }
        @media (max-width: 1023px) {
          .snap-container {
            scroll-snap-type: none;
            height: auto;
            overflow-y: auto;
          }
          .snap-section {
            min-height: auto;
            height: auto;
          }
        }
      `}</style>

      <main className="snap-container font-sans text-slate-800 bg-white selection:bg-[#D4A857] selection:text-white">
        
        {/* Hero Section */}
        <HeroSection />

        {/* Insight Section */}
        <InsightSection />

        {/* Success Cases Section */}
        <SuccessCasesSection />

        {/* Services Section */}
        <ServicesSection />

        {/* Awards Section */}
        <AwardsSection onOpenLightbox={openLightbox} />

        {/* Location Section */}
        <LocationSection />

        {/* CTA Section */}
        <CTASection />

      </main>

      {/* 라이트박스 모달 */}
      <ImageLightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        imageSrc={lightboxImage.src}
        imageAlt={lightboxImage.alt}
      />
    </>
  );
}
