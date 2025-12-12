'use client';

import HeroSection from '@/components/HeroSection';
import HeroButtons from '@/components/HeroButtons';
import InsightSection from '@/components/InsightSection';
import ServicesSection from '@/components/ServicesSection';
import AwardsSection from '@/components/AwardsSection';
import LocationSection from '@/components/LocationSection';
import CTASection from '@/components/CTASection';
import NextSectionButton from '@/components/NextSectionButton';
import TaxNewsSection from '@/components/TaxNewsSection';

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
            position: relative;
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
            position: relative;
          }
        }
      `}</style>

      <main className="snap-container font-sans text-slate-800 bg-white selection:bg-[#D4A857] selection:text-white">
        
        {/* 1. Hero Section (메인) */}
        <section className="snap-section relative">
          <HeroSection />
          <HeroButtons /> 
        </section>
        
        {/* 2. Insight Section (인사이트) */}
        <div id="insight-section" className="snap-section relative">
          <InsightSection />
          <NextSectionButton targetId="tax-news-section" />
        </div>
        
        {/* 3. Tax News Section (국세청 소식) - 새로 추가 */}
        <div id="tax-news-section" className="snap-section relative">
          <TaxNewsSection />
          <NextSectionButton targetId="services-section" />
        </div>

        {/* 4. Services Section (전문분야) */}
        <div id="services-section" className="snap-section relative">
          <ServicesSection />
          <NextSectionButton targetId="awards-section" isDarkBg={true} />
        </div>

        {/* 5. Awards Section (수상/이력) */}
        <div id="awards-section" className="snap-section relative">
          <AwardsSection />
          <NextSectionButton targetId="location-section" />
        </div>

        {/* 6. Location Section (오시는길) */}
        <div id="location-section" className="snap-section relative">
          <LocationSection />
          <NextSectionButton targetId="cta-section" isDarkBg={true} />
        </div>

        {/* 7. CTA Section (상담문의/마지막) */}
        <div id="cta-section" className="snap-section relative">
          <CTASection />
        </div>

      </main>
    </>
  );
}
