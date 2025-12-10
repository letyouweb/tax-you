'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Phone, FileText } from 'lucide-react'; 
import HeroButtons from './HeroButtons';

// [배지 컴포넌트] 날렵하고 세련된 버전
function HeroBadge() {
  return (
    <div className="inline-flex w-fit items-center gap-2 bg-[#D4A857]/10 border border-[#D4A857]/40 px-4 py-1.5 rounded-full transition-all duration-300">
      <Image
        src="/images/medal-badge-icon.png"
        alt="국세청 근무 25년 · 국세청장 표창 수상 세무사"
        width={32}
        height={32}
        className="w-5 h-5 md:w-6 md:h-6 object-contain drop-shadow-sm"
        priority
      />
      <span className="text-[11px] md:text-sm font-medium text-[#D4A857] tracking-tight pt-[1px]">
        국세청 근무 25년 · 국세청장 표창 수상 세무사
      </span>
    </div>
  );
}

export default function HeroSection() {
  const bgColor = '#050B16';
  
  return (
    <section 
      id="hero" 
      className="snap-section relative text-white overflow-hidden min-h-screen md:h-screen flex flex-col justify-center"
      style={{ backgroundColor: bgColor }}
    >
      {/* 배경 패턴 */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]"></div>
      
      <div className="container mx-auto px-6 h-full grid md:grid-cols-2 gap-8 items-center relative z-10">
        
        {/* Left Content */}
        <div className="pt-24 pb-10 md:py-0 flex flex-col justify-center h-full z-20">
          
          {/* [수정 1] 배지 위치 조정: mb-8 md:mb-12 
              - 배지 아래 여백을 넉넉히 주어 배지를 위로 분리시킴 */}
          <div className="mb-8 md:mb-12">
            <HeroBadge />
          </div>
          
          {/* 1. 질문 (Hook) */}
          <h1 className="font-serif font-bold text-white drop-shadow-lg text-[1.7rem] md:text-[2.2rem] lg:text-[2.7rem] leading-[1.35] tracking-tight">
            세무조사 통지서,
            <br className="md:hidden" /> {/* 모바일 줄바꿈 */}
            <span className="text-[#D4A857]"> 받으셨습니까?</span>
          </h1>

          {/* [수정 2] 간격 축소: h-6 -> h-4 (질문과 답을 더 가깝게 연결) */}
          <div className="h-4 md:h-6"></div> 

          {/* 2. 해결책 (Punchline) */}
          {/* [수정 3] 폰트 보완: font-bold, tracking-tight 추가하여 단단하게 만듦 */}
          <p className="font-sans font-bold text-white text-[1.25rem] md:text-[1.5rem] lg:text-[1.8rem] tracking-tight leading-tight">
            세무조사 결과는 첫 대응에서 판가름 납니다.
          </p>
          
          {/* 설명 문구 */}
          <p className="mt-6 md:mt-8 text-slate-300 text-sm md:text-base lg:text-lg leading-relaxed max-w-lg font-light">
            국세청 조사과 25년, 그들의 방식을 아는 세무사가<br className="hidden md:block" />
            처음부터 끝까지 직접 방어합니다.
          </p>
          
          {/* 버튼 위 여백 */}
          <div className="h-10 md:h-14"></div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 md:gap-5">
            <a 
              href="tel:025180130" 
              className="px-8 md:px-10 py-4 md:py-5 bg-[#D4A857] text-white rounded-sm hover:bg-[#C19545] transition-all flex items-center justify-center gap-3 shadow-xl shadow-[#D4A857]/20 group font-bold tracking-wide text-base md:text-lg"
            >
              세무조사 긴급 상담 
              <Phone size={20} className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            
            <Link 
              href="/consult" 
              className="px-8 md:px-10 py-4 md:py-5 bg-transparent border border-slate-500 text-slate-300 rounded-sm hover:border-white hover:text-white transition-all flex items-center justify-center gap-3 hover:bg-white/5 font-medium tracking-wide text-base md:text-lg"
            >
              <FileText size={20} /> 1:1 상담 예약
            </Link>
          </div>
        </div>
        
        {/* Right Image Area */}
        <div className="relative h-full w-full flex items-end justify-center md:justify-end overflow-visible">
          {/* 그라데이션 */}
          <div 
            className="absolute inset-0 z-10 pointer-events-none"
            style={{
              background: `linear-gradient(to right, ${bgColor} 0%, transparent 40%)`
            }}
          />
          <div 
            className="absolute inset-0 z-10 pointer-events-none"
            style={{
              background: `linear-gradient(to top, ${bgColor} 0%, transparent 20%)`
            }}
          />
          
          {/* 인물 이미지 */}
          <div className="relative z-0 w-full flex justify-end h-full items-end">
             <Image 
              src="/images/hero-person.png" 
              alt="유동수 대표 세무사" 
              width={600}
              height={700}
              className="object-contain w-auto max-h-[50vh] md:max-h-[85vh]"
              priority={true}
            />
          </div>
        </div>
        
      </div>
      
      {/* 하단 서비스 버튼 + 스크롤 힌트 */}
      <HeroButtons />
    </section>
  );
}