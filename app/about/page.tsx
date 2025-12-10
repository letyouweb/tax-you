'use client';

import React from 'react';
import Image from 'next/image';
import { Award, Calendar } from 'lucide-react';
import AwardsCarousel from '@/components/AwardsCarousel';

export default function RepresentativePage() {
  // [핵심] 가독성 최적화 텍스트 스타일 정의
  const bodyTextStyle = "text-[0.95rem] md:text-[1.05rem] leading-[1.8] text-slate-700 break-keep";

  // 기존 상패 데이터 (슬라이더용)
  const awardsForCarousel = [
    {
      src: '/images/awards/유동수세무회계_대통령임명장.jpg',
      alt: '대통령으로부터 강남세무서 조사과 세무주사로 임명받은 임명장입니다.',
      title: '대통령 임명장'
    },
    {
      src: '/images/awards/유동수세무회계_국세청_표창장.jpg',
      alt: '국세청장으로부터 수여받은 표창장으로 세무 행정 분야에 대한 전문성을 인정받았습니다.',
      title: '국세청장 표창장'
    },
    {
      src: '/images/awards/유동수세무회계_강남세무서_명예퇴임.jpg',
      alt: '강남세무서 조사과 동료들이 함께 남겨준 감사의 기념패입니다.',
      title: '강남세무서 명예퇴임 기념패'
    },
    {
      src: '/images/awards/유동수세무회계_국세청장재직기념패.jpg',
      alt: '국세행정에 기여한 공로를 인정받아 수여된 기념패입니다.',
      title: '국세청장 재직 기념패'
    },
    {
      src: '/images/awards/유동수세무회계_표창장.jpg',
      alt: '성실한 국세 행정에 기여한 공로를 인정받아 수여된 표창장입니다.',
      title: '국세청 표창장'
    },
    {
      src: '/images/awards/유동수세무회계_강남세무서_재직.jpg',
      alt: '강남세무서 재직 당시의 기록입니다.',
      title: '강남세무서 재직'
    }
  ];

  return (
    <div className="w-full bg-white min-h-screen">
      
      {/* ----------------------------------------------------------------------
          1. Hero Section: 텍스트 위치 하향 조정
          [수정됨] py-20 -> pt-36 pb-20 (위쪽 여백을 늘려서 텍스트를 아래로 내림)
      ----------------------------------------------------------------------- */}
      
<section
  className="relative w-full bg-[#0F141F] py-24 md:py-28 text-center px-4 overflow-hidden"
>
  {/* 배경 장식 */}
  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-[#1B2230] rounded-full blur-3xl -z-10 opacity-50" />

  {/* 여기 mt-6 / md:mt-10 추가 */}
  <div className="max-w-4xl mx-auto flex flex-col items-center relative z-10 
                  mt-6 md:mt-10 space-y-4 md:space-y-5">
    <h1 className="text-3xl md:text-5xl font-serif font-bold text-white">
      대표 세무사
    </h1>

    <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full
                    bg-[#1B2230] border border-[#D4A857]/60
                    shadow-[0_0_15px_rgba(212,168,87,0.1)]
                    text-[#F5E3B5] text-xs md:text-sm font-medium tracking-wide">
      <span>🏅 국세청 25년 근무 · 국세청장 공로패 수상</span>
    </div>

    <p className="text-gray-400 text-sm md:text-base font-light tracking-wide">
      국세청 25년, 세무조사·양도·상속·증여 전문
    </p>
  </div>
</section>


      {/* ----------------------------------------------------------------------
          2. 소개 및 약속 섹션
      ----------------------------------------------------------------------- */}
      <section className="snap-section relative py-20 md:py-24 bg-white">
        <div className="container mx-auto px-6">
          
          {/* 2-1. 상단 헤더 & 인사말 */}
          <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-start mb-20">
            
            {/* 왼쪽: 인물 사진 */}
            <div className="w-full md:w-5/12 lg:w-4/12 relative">
              <div className="aspect-[3/4] relative rounded-lg overflow-hidden shadow-xl grayscale hover:grayscale-0 transition-all duration-700 bg-gray-100">
                 <Image
                  src="/images/tax-accountant.jpg" 
                  alt="유동수 대표 세무사"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
              {/* 사진 하단 이름표 */}
              <div className="mt-4 text-center">
                <p className="text-sm text-slate-500 tracking-widest mb-1">REPRESENTATIVE</p>
                <h3 className="text-2xl font-serif font-bold text-slate-900">유동수 세무사</h3>
              </div>
            </div>

            {/* 오른쪽: 인사말 & 경력 */}
            <div className="w-full md:w-7/12 lg:w-8/12 pt-2">
              
              <div className="mb-8">
                <span className="text-[#D4A857] font-bold tracking-wider text-sm mb-2 block">
                  GREETING
                </span>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-6 leading-tight">
                  국세청 25년,<br/>
                  <span className="text-slate-800">오직 실력으로 증명합니다.</span>
                </h2>
                
                {/* 인사말 본문 */}
                <div className={bodyTextStyle}>
                  <p className="mb-4">
                    안녕하십니까, 유동수 세무회계 대표 세무사 유동수입니다.
                  </p>
                  <p className="mb-4">
                    세무조사 통지서를 받았을 때의 당혹감, 복잡한 상속 문제로 인한 가족 간의 고민... 
                    세금 문제는 단순한 숫자가 아니라 의뢰인의 삶과 직결되어 있다는 것을 누구보다 잘 알고 있습니다.
                  </p>
                  <p>
                    국세청 조사과에서 25년간 근무하며 수천 건의 실무를 경험했습니다. 
                    과세 관청이 무엇을 보는지, 어떻게 대응해야 하는지 정확히 알고 있습니다. 
                    그 경험과 노하우를 오직 의뢰인을 지키는 데에만 쓰겠습니다.
                  </p>
                </div>
              </div>

              {/* Career History List */}
              <div className="border-t border-slate-200 pt-8 mt-10">
                <h4 className="font-bold text-slate-900 mb-6 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4A857]"></span>
                  주요 경력
                </h4>
                <ul className="space-y-3">
                  {[
                    { year: '前', desc: '국세청 조사국 25년 근무' },
                    { year: '前', desc: '서울지방국세청 조사1국 팀장' },
                    { year: '前', desc: '중부지방국세청 조사국 팀장' },
                    { year: '前', desc: '강남세무서 조사과 팀장' },
                    { year: '現', desc: '유동수 세무회계 대표 세무사' },
                  ].map((item, idx) => (
                    <li key={idx} className={`flex items-start ${bodyTextStyle}`}>
                      <span className="w-12 font-bold text-[#D4A857] shrink-0 mt-[0.1em]">{item.year}</span>
                      <span className="font-medium">{item.desc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* 2-2. 유동수 세무회계의 약속 (카드 섹션) */}
          <div className="bg-slate-50 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl font-serif font-bold text-center text-slate-900 mb-10">
              유동수 세무회계의 <span className="text-[#D4A857]">3가지 약속</span>
            </h3>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "직접 상담, 직접 처리",
                  desc: "사무장이 아닌 세무사가 처음부터 끝까지 모든 과정을 직접 책임지고 처리합니다."
                },
                {
                  title: "비밀 보장 원칙",
                  desc: "의뢰인의 모든 정보는 철저하게 비밀이 보장되며, 상담 내용은 외부로 유출되지 않습니다."
                },
                {
                  title: "납세자 권익 최우선",
                  desc: "부당한 과세로부터 의뢰인을 보호하고, 법이 허용하는 범위 내에서 최대의 절세를 실현합니다."
                }
              ].map((card, idx) => (
                <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:-translate-y-1 transition-transform duration-300">
                  <div className="text-[#D4A857] font-bold mb-3 text-lg">
                    0{idx + 1}. {card.title}
                  </div>
                  <p className={bodyTextStyle}>
                    {card.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ----------------------------------------------------------------------
          3. 타임라인 섹션
      ----------------------------------------------------------------------- */}
      <section className="bg-[#050B16] py-24 text-white">
         <div className="container mx-auto px-6 max-w-4xl">
            <h3 className="text-2xl font-serif font-bold mb-16 text-center tracking-wide">Career History</h3>
            <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-[#D4A857] before:to-transparent">
               {/* Item 1 */}
               <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/20 bg-[#050B16] shadow-[0_0_10px_rgba(212,168,87,0.3)] shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 text-[#D4A857] z-10">
                     <Calendar size={18}/>
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-lg border border-white/10 bg-[#0A1120] hover:border-[#D4A857]/50 transition-colors">
                     <div className="flex items-center justify-between space-x-2 mb-2">
                        <div className="font-bold text-lg text-white">강남세무서 명예퇴임</div>
                        <time className="font-mono italic text-[#D4A857] font-bold">2017</time>
                     </div>
                     <div className="text-slate-400 text-sm">강남세무서 조사과 사무관으로 공직 생활 마무리</div>
                  </div>
               </div>
               {/* Item 2 */}
               <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/20 bg-[#050B16] shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 text-[#D4A857] z-10">
                     <Calendar size={18}/>
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-lg border border-white/10 bg-[#0A1120] hover:border-[#D4A857]/50 transition-colors">
                     <div className="flex items-center justify-between space-x-2 mb-2">
                        <div className="font-bold text-lg text-white">제53회 세무사시험 합격</div>
                        <time className="font-mono italic text-[#D4A857] font-bold">2016</time>
                     </div>
                     <div className="text-slate-400 text-sm">전문 자격 취득 및 심화 전문성 확보</div>
                  </div>
               </div>
               {/* Item 3 */}
               <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/20 bg-[#050B16] shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 text-[#D4A857] z-10">
                     <Calendar size={18}/>
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-lg border border-white/10 bg-[#0A1120] hover:border-[#D4A857]/50 transition-colors">
                     <div className="flex items-center justify-between space-x-2 mb-2">
                        <div className="font-bold text-lg text-white">서울지방국세청 근무</div>
                        <time className="font-mono italic text-[#D4A857] font-bold">1993~</time>
                     </div>
                     <div className="text-slate-400 text-sm">반포, 마포, 영등포, 부천세무서 등 주요 요직 거침</div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* ----------------------------------------------------------------------
          4. Awards Section
      ----------------------------------------------------------------------- */}
      <section className="bg-[#F9FAFB] py-24">
        <div className="container mx-auto px-6 max-w-6xl">
          
          <div className="text-center mb-16">
            <span className="text-[#D4A857] font-bold tracking-widest text-xs uppercase mb-3 block">
              HONOR & AWARDS
            </span>
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-[#111827]">
              국세청 25년, 신뢰의 기록
            </h3>
            <p className="text-slate-500 mt-4 max-w-2xl mx-auto">
              대통령 임명장부터 국세청장 표창까지, 납세자를 위해 헌신해 온 시간의 증명입니다.
            </p>
          </div>

          {/* 공로패 단독 강조 카드 */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden mb-20">
            <div className="flex flex-col md:flex-row items-center">
              
              {/* Left: 공로패 이미지 */}
              <div className="w-full md:w-5/12 h-[400px] relative bg-[#1B2230] flex items-center justify-center p-8">
                 <div className="relative w-full h-full max-w-xs mx-auto">
                    <Image 
                      src="/images/awards/유동수세무회계_강남세무서_명예퇴임.jpg" 
                      alt="국세청장 공로패"
                      fill
                      className="object-contain drop-shadow-2xl"
                    />
                 </div>
              </div>

              {/* Right: 설명 텍스트 */}
              <div className="w-full md:w-7/12 p-10 md:p-14 text-left">
                <div className="inline-block px-3 py-1 bg-[#F5E3B5]/30 text-[#D4A857] text-xs font-bold rounded-full mb-6">
                  SPECIAL HONOR
                </div>
                <h3 className="text-2xl font-serif font-bold text-[#111827] mb-4">
                  강남세무서 공로패 & 표창
                </h3>
                <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                  25년의 공직 생활 동안 투철한 사명감으로 국세행정 발전에 기여한 공로를 인정받았습니다. 
                  단순한 수상을 넘어, 납세자의 권익 보호와 공정한 과세를 위해 현장에서 발로 뛴 
                  땀방울의 증명입니다.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                   <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                     <div className="mt-1 text-[#D4A857]"><Award size={20}/></div>
                     <div>
                       <div className="font-bold text-slate-900 text-sm">서울지방국세청장 공로패</div>
                       <div className="text-xs text-slate-500">2017. 10. 31</div>
                     </div>
                   </div>
                   <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                     <div className="mt-1 text-[#D4A857]"><Award size={20}/></div>
                     <div>
                       <div className="font-bold text-slate-900 text-sm">국세청장 표창 (모범공무원)</div>
                       <div className="text-xs text-slate-500">성실 납세 지원 공로</div>
                     </div>
                   </div>
                </div>
              </div>

            </div>
          </div>
          
          {/* 하단: 나머지 상패 슬라이더 */}
          <div className="pt-10 border-t border-slate-100">
             <h4 className="text-center text-slate-400 text-sm font-medium mb-8">MORE AWARDS</h4>
             <AwardsCarousel 
               awards={awardsForCarousel}
               autoPlay={true}
               autoPlayInterval={3000}
             />
          </div>
        </div>
      </section>
    </div>
  );
}