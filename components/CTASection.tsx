'use client';

import Link from 'next/link';
import { Phone } from 'lucide-react';
import { ScrollIndicator } from './ScrollIndicator';

export default function CTASection() {
  
  // 로고 클릭 시 최상단(Hero)으로 스크롤 이동
  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const snapContainer = document.querySelector('.snap-container');
    if (snapContainer) {
      snapContainer.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <section id="cta" className="snap-section h-screen flex flex-col bg-[#050B16] relative overflow-hidden">
      
      {/* 배경 패턴 */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] pointer-events-none"></div>

      {/* [상단] 상담 유도 영역 */}
      <div className="flex-1 flex flex-col justify-center items-center text-center px-6 relative z-10 pt-20">
        
        {/* 텍스트 그룹 */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white leading-tight">
            <span className="block mb-8">복잡한 세금 문제,</span>
            <span className="text-[#D4A857] drop-shadow-md">지금 바로 상담받으세요.</span>
          </h2>
          
          <p className="text-slate-400 text-lg md:text-xl font-light leading-relaxed mt-10 opacity-90">
            국세청 25년 경력의 전문가가 첫 상담부터 끝까지 직접 책임지고 함께합니다.
          </p>
        </div>

        {/* 버튼 그룹 */}
        <div className="flex flex-col md:flex-row justify-center gap-6 w-full md:w-auto">
          <Link 
            href="/consult" 
            className="px-12 py-5 bg-gradient-to-br from-[#E0AA3E] via-[#C5A028] to-[#B48F1F] text-white font-bold rounded-sm 
            hover:scale-[1.03] transition-all duration-300 text-lg shadow-[0_0_25px_rgba(212,168,87,0.4)]"
          >
            1:1 상담 예약하기
          </Link>
          
          <a 
            href="tel:025180130" 
            className="flex items-center justify-center gap-3 text-white border border-white/20 px-12 py-5 rounded-sm 
            hover:bg-white/10 transition-all cursor-pointer group"
          >
            <Phone className="text-[#D4A857] group-hover:text-white transition-colors" size={24} />
            <span className="text-2xl font-serif font-bold tracking-wide">02-518-0130</span>
          </a>
        </div>
      </div>

      {/* Scroll Indicator - 맨 위로 */}
      {/* 위치: 모바일에서는 bottom-10, PC에서는 bottom-32 (정보 텍스트와 안 겹치게) */}
      <div className="absolute left-1/2 bottom-10 md:bottom-32 -translate-x-1/2 z-30 pointer-events-auto">
        <ScrollIndicator
          targetId="hero"
          direction="up"
          className="text-white/70"
        />
      </div>

      {/* [하단] Footer 영역 */}
      <div className="relative z-10 w-full py-10 border-t border-white/5 bg-[#050B16] text-center">
        <div className="container mx-auto px-6">
          
          {/* 로고 영역 */}
          <div className="mb-6">
            <Link 
              href="/" 
              onClick={handleLogoClick}
              className="text-white font-serif text-lg tracking-[0.2em] font-bold hover:text-[#D4A857] transition-colors cursor-pointer"
            >
              유동수 세무회계
            </Link>
          </div>

          {/* [수정됨] 정보 텍스트: 모바일 줄바꿈 적용 */}
          <div className="space-y-4 md:space-y-3 text-sm md:text-base font-light tracking-wide leading-relaxed text-slate-400/80">
            {/* 주소 */}
            <p className="block">서울 강남구 언주로130길 23 평해빌딩 201호</p>
            
            {/* 대표자 & 사업자번호 */}
            <div className="flex flex-col md:block gap-1 md:gap-0">
              <span>대표세무사: 유동수</span>
              <span className="hidden md:inline mx-2 opacity-30">|</span>
              <span className="block md:inline">사업자등록번호: 714-17-00577</span>
            </div>

            {/* 연락처 정보 (전화, 팩스, 이메일) - 모바일에서 줄바꿈 */}
            <div className="flex flex-col md:block gap-2 md:gap-0 mt-4 md:mt-2">
              <span className="block md:inline">
                Tel: <a href="tel:025180130" className="text-slate-300 hover:text-[#D4A857] transition-colors font-medium">02-518-0130</a>
              </span>
              <span className="hidden md:inline mx-3 opacity-30">|</span>
              
              <span className="block md:inline">
                Fax: 02-518-0137
              </span>
              <span className="hidden md:inline mx-3 opacity-30">|</span>
              
              <span className="block md:inline">
                Email: <a href="mailto:rdscta@daum.net" className="text-slate-300 hover:text-[#D4A857] transition-colors font-medium">rdscta@daum.net</a>
              </span>
            </div>
          </div>

          {/* 카피라이트 & 제작자 크레딧 */}
          <div className="mt-10">
            <p className="text-slate-500 text-[11px] tracking-wider mb-3">
              Copyright © 2025 YOO DONG SU TAX & ACCOUNTING. All rights reserved.
            </p>
            <a 
              href="https://letyou.kr" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block text-xs text-slate-500 hover:text-[#D4A857] transition-colors"
            >
              Website Design & Development by <span className="text-white font-medium">LetYou</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}