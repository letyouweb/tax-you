'use client';

import HeroSection from '@/components/HeroSection';
import HeroButtons from '@/components/HeroButtons'; // 새로 만든 버튼 컴포넌트
import InsightSection from '@/components/InsightSection';
import ServicesSection from '@/components/ServicesSection';
import AwardsSection from '@/components/AwardsSection';
import LocationSection from '@/components/LocationSection';
import CTASection from '@/components/CTASection';
import NextSectionButton from '@/components/NextSectionButton'; // 새로 만든 스크롤 버튼 컴포넌트

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
            position: relative; /* 버튼 배치를 위해 필수 */
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
          {/* HeroButtons 내부에서 #insight-section으로 이동하도록 설정됨 */}
        </section>
        
        {/* 2. Insight Section (인사이트) */}
        <div id="insight-section" className="snap-section relative">
          <InsightSection />
          {/* 클릭 시 #services-section (전문분야)으로 이동 */}
          <NextSectionButton targetId="services-section" />
        </div>
        
        {/* (성공사례 섹션 삭제됨) */}

        {/* 3. Services Section (전문분야) */}
        <div id="services-section" className="snap-section relative">
          <ServicesSection />
          {/* 배경이 어두운 섹션이므로 isDarkBg={true} 추가 */}
          <NextSectionButton targetId="awards-section" isDarkBg={true} />
        </div>

        {/* 4. Awards Section (수상/이력) */}
        <div id="awards-section" className="snap-section relative">
          <AwardsSection />
          {/* 클릭 시 #location-section (오시는길)으로 이동 */}
          <NextSectionButton targetId="location-section" />
        </div>

        {/* 5. Location Section (오시는길) */}
        <div id="location-section" className="snap-section relative">
          <LocationSection />
          {/* 배경이 어두운 섹션(지도/벽돌 등)일 경우 isDarkBg={true} 사용 */}
          <NextSectionButton targetId="cta-section" isDarkBg={true} />
        </div>

        {/* 6. CTA Section (상담문의/마지막) */}
        <div id="cta-section" className="snap-section relative">
          <CTASection />
          {/* 마지막 섹션이므로 스크롤 버튼 없음 */}
        </div>

      </main>
    </>
  );
}