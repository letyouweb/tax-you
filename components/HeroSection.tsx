'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Phone, FileText, Medal } from 'lucide-react';

export default function HeroSection() {
  // ★ 단일 배경색 - 전체 통일
  const bgColor = '#050B16';
  
  return (
    <section 
      className="snap-section relative text-white overflow-hidden"
      style={{ backgroundColor: bgColor }}
    >
      {/* 미세한 텍스처 패턴 */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]"></div>
      
      <div className="container mx-auto px-6 py-24 grid md:grid-cols-2 gap-8 md:gap-12 items-center relative z-10 min-h-screen">
        
        {/* Left Content */}
        <div className="pt-16 md:pt-0 flex flex-col">
          
          {/* 골드 뱃지 */}
          <div className="inline-flex items-center gap-2 bg-[#D4A857]/10 border border-[#D4A857]/30 px-4 py-2 rounded-full mb-6 w-fit">
            <Medal className="w-4 h-4 text-[#D4A857]" />
            <span className="text-[#D4A857] text-xs md:text-sm font-medium">
              국세청 근무 25년 · 국세청장 표창 수상 세무사
            </span>
          </div>
          
          {/* Headline */}
          <h1 className="font-serif font-bold text-white drop-shadow-lg text-[1.6rem] md:text-[2.2rem] lg:text-[3rem] leading-snug tracking-tight">
            세무조사 통지서,<br />
            <span className="text-[#D4A857]">받으셨습니까?</span><br />
            <span className="text-white/90">첫 대응이 결과를 결정합니다.</span>
          </h1>
          
          {/* Sub-headline */}
          <p className="mt-6 md:mt-8 text-slate-300 text-sm md:text-base lg:text-lg leading-relaxed max-w-lg font-light">
            국세청 조사과 25년, 그들의 방식을 아는 세무사가<br className="hidden md:block" />
            처음부터 끝까지 직접 방어합니다.
          </p>
          
          {/* 전문 분야 */}
          <p className="text-sm text-slate-400 mt-4">
            세무조사 · 양도 · 상속 · 증여 · 조세불복 전문
          </p>
          
          <div className="h-8 md:h-12"></div>
          
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
        
        {/* Right Image Area - 배경과 자연스럽게 블렌딩 */}
        <div className="relative h-full flex items-end justify-center md:justify-end">
          {/* 왼쪽 페이드 - 텍스트와 자연스럽게 연결 */}
          <div 
            className="absolute inset-0 z-10 pointer-events-none"
            style={{
              background: `linear-gradient(to right, ${bgColor} 0%, transparent 40%)`
            }}
          />
          {/* 하단 페이드 - 바닥과 자연스럽게 연결 */}
          <div 
            className="absolute inset-0 z-10 pointer-events-none"
            style={{
              background: `linear-gradient(to top, ${bgColor} 0%, transparent 30%)`
            }}
          />
          
          <Image 
            src="/images/hero-person.png" 
            alt="유동수 대표 세무사" 
            width={600}
            height={700}
            className="relative z-0 w-full max-w-lg md:max-w-xl object-contain"
            priority={true}
          />
        </div>
        
      </div>
    </section>
  );
}
