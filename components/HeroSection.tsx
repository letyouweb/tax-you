'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Phone, FileText } from 'lucide-react'; // Medal 아이콘은 이미지로 대체되어 제거함
import HeroButtons from './HeroButtons';

// [수정] 배지를 더 날렵하고 세련되게 변경 (Slim Version)
function HeroBadge() {
  return (
    // py-2 -> py-1.5 : 위아래 두께를 줄여서 날렵하게
    // gap-3 -> gap-2 : 아이콘과 글자 사이를 좁혀서 밀도감 높임
    <div className="inline-flex w-fit items-center gap-2 bg-[#D4A857]/10 border border-[#D4A857]/40 px-4 py-1.5 rounded-full mb-8 md:-mt-12 transition-all duration-300">
      <Image
        src="/images/medal-badge-icon.png"
        alt="국세청 근무 25년 · 국세청장 표창 수상 세무사"
        width={32}
        height={32}
        // w-7/w-8 -> w-5/w-6 : 아이콘 크기를 줄여서 배지 높이를 낮춤
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
      // [수정 1] md:h-screen : 데스크탑에서는 무조건 화면 높이 100%로 고정 (스크롤 방지)
      // min-h-screen : 모바일에서는 내용이 길어지면 늘어나도록 유지
      className="snap-section relative text-white overflow-hidden min-h-screen md:h-screen flex flex-col justify-center"
      style={{ backgroundColor: bgColor }}
    >
      {/* 배경 패턴 */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]"></div>
      
      {/* [수정 2] py-24 제거 -> h-full로 높이 꽉 채우고 내부에서 정렬 */}
      <div className="container mx-auto px-6 h-full grid md:grid-cols-2 gap-8 items-center relative z-10">
        
        {/* Left Content */}
        {/* 모바일에서는 여백 필요하므로 py-20, 데스크탑은 자동 중앙 정렬이므로 padding 최소화 */}
<div className="pt-24 pb-10 md:py-0 flex flex-col justify-center h-full z-20"> {/* Perplexity의 여백 아이디어 반영 */}
  
  <HeroBadge />
  
{/* 1. 질문 (Hook): 한 줄로 통합 */}
<h1 className="font-serif font-bold text-white drop-shadow-lg text-[1.5rem] md:text-[2.0rem] lg:text-[2.6rem] leading-snug tracking-tight">
  세무조사 통지서, <span className="text-[#D4A857]">받으셨습니까?</span>
</h1>

{/* 2. 여백 (Breathing Room): 질문과 해결책 사이를 띄워줌 */}
<div className="h-6 md:h-8"></div> 

{/* 3. 해결책 (Punchline): 태그 분리 및 강조 */}
<p className="font-sans font-bold text-white/90 text-[1.2rem] md:text-[1.5rem] lg:text-[1.8rem] leading-tight">
  첫 대응이 결과를 결정합니다.
</p>

{/* 설명 문구 */}
<p className="mt-6 md:mt-8 text-slate-300 text-sm md:text-base lg:text-lg leading-relaxed max-w-lg font-light">
  국세청 조사과 25년, 그들의 방식을 아는 세무사가<br className="hidden md:block" />
  처음부터 끝까지 직접 방어합니다.
</p>

  {/* 버튼 간격 시원하게 */}
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
        {/* [수정 3] items-end로 바닥에 붙임 + h-full로 전체 영역 사용 */}
        <div className="relative h-full w-full flex items-end justify-center md:justify-end overflow-visible">
          {/* 그라데이션 효과 */}
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
          
          {/* 이미지 컨트롤 핵심 */}
          <div className="relative z-0 w-full flex justify-end h-full items-end">
             <Image 
              src="/images/hero-person.png" 
              alt="유동수 대표 세무사" 
              width={600}
              height={700}
              // [수정 4] 중요: max-h-[85vh] 
              // 화면 높이의 85%까지만 이미지가 커지게 제한 -> 화면이 작으면 이미지도 같이 줄어듦
              // w-auto: 비율 유지
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