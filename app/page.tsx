'use client';

import HeroSection from '@/components/HeroSection';
import InsightSection from '@/components/InsightSection';
import SuccessCasesSection from '@/components/SuccessCasesSection';
import ServicesSection from '@/components/ServicesSection';
import AwardsSection from '@/components/AwardsSection';
import LocationSection from '@/components/LocationSection';
import CTASection from '@/components/CTASection';

export default function Home() {
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
        <HeroSection />
        <InsightSection />
        <SuccessCasesSection />
        <ServicesSection />
        <AwardsSection />
        <LocationSection />
        <CTASection />
      </main>
    </>
  );
}
