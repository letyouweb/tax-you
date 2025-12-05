'use client';

import Link from 'next/link';
import { ArrowRight, FileText, AlertCircle, TrendingUp, Users, Lock, Shield, CheckCircle2, Calculator, Phone, MapPin } from 'lucide-react';

export default function Home() {
  return (
    <>
      {/* 스크롤 스냅 스타일 - Home 페이지에서만 적용 */}
      <style jsx global>{`
        /* 스크롤 스냅 (PC에서만 적용) */
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
        
        /* 모바일 예외 처리 */
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
        <section className="snap-section relative bg-gradient-to-br from-[#050B16] via-[#0A1525] to-[#111C30] text-white overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]"></div>
          <div className="container mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center relative z-10 min-h-screen">
            <div className="space-y-10 pt-10 md:pt-0">
              <div className="flex items-center gap-3">
                 <div className="w-8 h-[1px] bg-[#D4A857]"></div>
                 <span className="text-[#D4A857] font-medium tracking-wide text-sm md:text-base">
                   국세청 25년 · 세무조사·양도·상속·증여·조세불복 전문
                 </span>
              </div>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight font-bold text-white drop-shadow-lg">
                복잡한 세무는<br/>
                유동수 세무회계에 맡기시고,<br/>
                <span className="text-[#D4A857]">대표님은 사업에만 집중하세요.</span>
              </h1>
              <p className="text-lg text-slate-300 font-light leading-relaxed pl-1">
                세무조사 첫 대응부터 조세불복까지,<br/>
                국세청 25년 경험으로 함께합니다.
              </p>
              <div className="flex flex-col sm:flex-row gap-5 pt-4">
                <Link href="/consult" className="px-10 py-5 bg-[#D4A857] text-white rounded-sm hover:bg-[#C19545] transition-all flex items-center justify-center gap-3 shadow-xl shadow-[#D4A857]/20 group font-bold tracking-wide text-lg">
                  세무조사 긴급 상담 <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="/consult" className="px-10 py-5 bg-transparent border border-slate-500 text-slate-300 rounded-sm hover:border-white hover:text-white transition-all flex items-center justify-center gap-3 hover:bg-white/5 font-medium tracking-wide text-lg">
                  <FileText size={20} /> 1:1 상담 예약
                </Link>
              </div>
            </div>
            <div className="relative h-full flex items-end justify-center md:justify-end">
               <div className="absolute inset-0 bg-gradient-to-r from-[#050B16] via-transparent to-transparent z-10"></div>
               <div className="absolute inset-0 bg-gradient-to-t from-[#050B16] via-transparent to-transparent z-10"></div>
               <img src="/images/Main.jpg" alt="유동수 대표 세무사" className="relative z-0 w-full max-w-lg md:max-w-xl object-cover grayscale brightness-110 contrast-110 opacity-95" style={{ maskImage: 'linear-gradient(to right, transparent 5%, black 40%)' }} />
            </div>
          </div>
        </section>

        {/* Insight Section */}
        <section className="snap-section py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16 space-y-4">
              <span className="text-[#D4A857] font-bold tracking-widest text-sm uppercase">INSIGHT</span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900">
                이런 상황이라면, <span className="text-[#D4A857]">지금 바로 상담하세요</span>
              </h2>
              <p className="text-slate-500 max-w-2xl mx-auto font-light">
                미리 대비하면 세금 부담과 스트레스를 크게 줄일 수 있습니다.<br/>
                자주 받는 질문을 중심으로 핵심만 정리했습니다.
              </p>
            </div>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { icon: <AlertCircle size={32} />, title: "세무조사", sub: "통지서를 받았다면", desc: "무엇부터 준비해야 할지 막막한 순간, 조사 전에 자료와 대응 순서를 먼저 정리해 드립니다." },
                { icon: <TrendingUp size={32} />, title: "양도소득세", sub: "아파트·상가 양도 전", desc: "보유 기간과 거주 이력에 따라 실제 손에 남는 금액을 미리 계산해 드립니다." },
                { icon: <Users size={32} />, title: "상속·증여", sub: "부모 재산 상속 준비", desc: "가족 분쟁을 줄이고 세 부담을 나누는 상속·증여 설계를 함께 고민합니다." },
                { icon: <Lock size={32} />, title: "조세불복", sub: "억울한 세금 고지", desc: "과세가 적정한지 검토하고, 필요한 경우 이의신청·심판 청구까지 함께합니다." }
              ].map((card, idx) => (
                <Link href="/insight" key={idx} className="bg-slate-50 p-8 rounded-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-slate-100 hover:border-[#D4A857] group cursor-pointer">
                  <div className="text-slate-400 group-hover:text-[#D4A857] transition-colors mb-6">{card.icon}</div>
                  <div className="text-xs text-[#D4A857] font-bold mb-2 tracking-wide uppercase">{card.title}</div>
                  <h3 className="font-serif text-xl font-bold text-slate-900 mb-4">{card.sub}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-light line-clamp-3">{card.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="snap-section py-16 bg-[#050B16] text-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-10">
              <span className="text-[#D4A857] font-bold tracking-widest text-sm uppercase">SERVICES</span>
              <h2 className="text-3xl font-serif font-bold text-white mb-3 mt-2">대표 세무 서비스</h2>
              <div className="w-10 h-1 bg-[#D4A857] mx-auto mb-3"></div>
              <p className="text-slate-400 text-sm font-light">가장 자신 있는 분야에 집중합니다.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-5 max-w-6xl mx-auto">
              {/* Card 1 */}
              <div className="flex flex-col h-full bg-[#162438] p-6 rounded-sm border border-slate-700/50 hover:border-[#D4A857] transition-all group hover:-translate-y-1">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-[#D4A857] rounded text-white shadow-lg"><Shield size={22} /></div>
                  <h3 className="text-xl font-serif font-bold text-white tracking-tight">세무조사 전담 대응</h3>
                </div>
                <p className="text-slate-300 text-sm leading-relaxed mb-4 h-10 line-clamp-2">
                  국세청 조사과 출신 세무사가 조사 통지 직후부터 종결까지 직접 방어하여 리스크를 최소화합니다.
                </p>
                <div className="space-y-2 mb-4 flex-grow">
                   <div className="flex items-start gap-2"><CheckCircle2 size={15} className="text-[#D4A857] mt-0.5" /><span className="text-slate-400 text-xs">국세청 출신 세무사가 직접 대응</span></div>
                   <div className="flex items-start gap-2"><CheckCircle2 size={15} className="text-[#D4A857] mt-0.5" /><span className="text-slate-400 text-xs">조사 방향·쟁점을 사전 진단</span></div>
                   <div className="flex items-start gap-2"><CheckCircle2 size={15} className="text-[#D4A857] mt-0.5" /><span className="text-slate-400 text-xs">불필요한 가산세·추징 최소화</span></div>
                </div>
                <Link href="/consult" className="w-full py-3 bg-[#D4A857] text-white text-center font-bold rounded-sm hover:bg-[#C19545] transition-all text-sm shadow-md mt-auto">세무조사 긴급 상담</Link>
              </div>
              {/* Card 2 */}
              <div className="flex flex-col h-full bg-[#162438] p-6 rounded-sm border border-slate-700/50 hover:border-[#D4A857] transition-all group hover:-translate-y-1">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-[#D4A857] rounded text-white shadow-lg"><FileText size={22} /></div>
                  <h3 className="text-xl font-serif font-bold text-white tracking-tight">양도·상속·증여 맞춤 설계</h3>
                </div>
                <p className="text-slate-300 text-sm leading-relaxed mb-4 h-10 line-clamp-2">
                  가족 관계와 분쟁 가능성까지 고려한 종합 설계로, 세 부담은 줄이고 자산 이전은 확실하게 돕습니다.
                </p>
                <div className="space-y-2 mb-4 flex-grow">
                   <div className="flex items-start gap-2"><CheckCircle2 size={15} className="text-[#D4A857] mt-0.5" /><span className="text-slate-400 text-xs">다각도 모의 세무 진단</span></div>
                   <div className="flex items-start gap-2"><CheckCircle2 size={15} className="text-[#D4A857] mt-0.5" /><span className="text-slate-400 text-xs">사전 증여 시기·방법 컨설팅</span></div>
                   <div className="flex items-start gap-2"><CheckCircle2 size={15} className="text-[#D4A857] mt-0.5" /><span className="text-slate-400 text-xs">신고부터 사후관리까지 원스톱</span></div>
                </div>
                <Link href="/consult" className="w-full py-3 bg-[#D4A857] text-white text-center font-bold rounded-sm hover:bg-[#C19545] transition-all text-sm shadow-md mt-auto">상속·증여 설계 상담</Link>
              </div>
              {/* Card 3 */}
              <div className="flex flex-col h-full bg-[#0F172A] p-6 rounded-sm border border-slate-800 hover:border-[#D4A857] transition-all group hover:-translate-y-1">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-[#D4A857] rounded text-white shadow-lg"><Lock size={22} /></div>
                  <h3 className="text-xl font-serif font-bold text-white tracking-tight">조세불복·경정청구</h3>
                </div>
                <p className="text-slate-300 text-sm leading-relaxed mb-4 h-10 line-clamp-2">
                  위법하거나 부당한 과세 처분에 대해 이의신청 및 심판청구를 제기하여 납세자의 권리를 되찾습니다.
                </p>
                <div className="space-y-2 mb-4 flex-grow">
                   <div className="flex items-start gap-2"><CheckCircle2 size={15} className="text-[#D4A857] mt-0.5" /><span className="text-slate-400 text-xs">억울한 세금 구제 전문</span></div>
                   <div className="flex items-start gap-2"><CheckCircle2 size={15} className="text-[#D4A857] mt-0.5" /><span className="text-slate-400 text-xs">치밀한 법리 해석과 논리 구성</span></div>
                   <div className="flex items-start gap-2"><CheckCircle2 size={15} className="text-[#D4A857] mt-0.5" /><span className="text-slate-400 text-xs">경정청구를 통한 세금 환급</span></div>
                </div>
                <Link href="/consult" className="w-full py-3 bg-[#D4A857] text-white text-center font-bold rounded-sm hover:bg-[#C19545] transition-all text-sm shadow-md mt-auto">조세불복 상담 요청</Link>
              </div>
              {/* Card 4 */}
              <div className="flex flex-col h-full bg-[#0F172A] p-6 rounded-sm border border-slate-800 hover:border-[#D4A857] transition-all group hover:-translate-y-1">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-[#D4A857] rounded text-white shadow-lg"><Calculator size={22} /></div>
                  <h3 className="text-xl font-serif font-bold text-white tracking-tight">상시 세무 자문</h3>
                </div>
                <p className="text-slate-300 text-sm leading-relaxed mb-4 h-10 line-clamp-2">
                  법인 및 개인 사업자를 위한 기장·신고 대행 서비스이며, 정기적인 세무 리스크 점검을 제공합니다.
                </p>
                <div className="space-y-2 mb-4 flex-grow">
                   <div className="flex items-start gap-2"><CheckCircle2 size={15} className="text-[#D4A857] mt-0.5" /><span className="text-slate-400 text-xs">업종별 맞춤 세무 기장</span></div>
                   <div className="flex items-start gap-2"><CheckCircle2 size={15} className="text-[#D4A857] mt-0.5" /><span className="text-slate-400 text-xs">선제적 세무 리스크 관리</span></div>
                   <div className="flex items-start gap-2"><CheckCircle2 size={15} className="text-[#D4A857] mt-0.5" /><span className="text-slate-400 text-xs">대표 세무사 직접 소통</span></div>
                </div>
                <Link href="/consult" className="w-full py-3 bg-[#D4A857] text-white text-center font-bold rounded-sm hover:bg-[#C19545] transition-all text-sm shadow-md mt-auto">상시 자문 문의</Link>
              </div>
            </div>
          </div>
        </section>

        {/* Awards Section */}
        <section className="snap-section py-20 bg-slate-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16 space-y-4">
              <span className="text-[#D4A857] font-bold tracking-widest text-sm uppercase">CAREER</span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900">
                국세청 25년, <span className="text-[#D4A857]">그 경험을 증명합니다</span>
              </h2>
              <p className="text-slate-500 max-w-2xl mx-auto font-light">
                성실한 납세 행정과 전문성을 인정받아 온 기록입니다.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {/* Card 1 */}
              <div className="bg-white p-4 pb-8 rounded shadow-sm hover:shadow-xl transition-all duration-300 group">
                <div className="aspect-[4/3] bg-slate-100 overflow-hidden rounded mb-6 border border-slate-100 relative">
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors z-10"></div>
                  <img 
                    src="/images/awards/유동수세무회계_대통령임명장.jpg" 
                    alt="대통령 임명장" 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="px-2 text-center">
                  <h3 className="font-serif text-lg font-bold text-slate-900 mb-2">강남세무서 조사과 세무주사 임명장</h3>
                  <p className="text-sm text-slate-500 font-light">국세청에서 25년간 조사·행정 실무를<br/>수행한 경력의 기반입니다.</p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-white p-4 pb-8 rounded shadow-sm hover:shadow-xl transition-all duration-300 group">
                <div className="aspect-[4/3] bg-slate-100 overflow-hidden rounded mb-6 border border-slate-100 relative">
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors z-10"></div>
                  <img 
                    src="/images/awards/유동수세무회계_국세청장재직기념패.jpg" 
                    alt="국세청장 재직 기념패" 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="px-2 text-center">
                  <h3 className="font-serif text-lg font-bold text-slate-900 mb-2">국세청장 재직 기념패</h3>
                  <p className="text-sm text-slate-500 font-light">국세행정에 기여한 공로를 인정받아<br/>수여된 기념패입니다.</p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-white p-4 pb-8 rounded shadow-sm hover:shadow-xl transition-all duration-300 group">
                <div className="aspect-[4/3] bg-slate-100 overflow-hidden rounded mb-6 border border-slate-100 relative">
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors z-10"></div>
                  <img 
                    src="/images/awards/유동수세무회계_강남세무서명예퇴임기념폐.jpg" 
                    alt="강남세무서 조사과 명예퇴임 기념패" 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="px-2 text-center">
                  <h3 className="font-serif text-lg font-bold text-slate-900 mb-2">명예퇴임 기념패</h3>
                  <p className="text-sm text-slate-500 font-light">강남세무서 조사과 동료들이 함께 남겨준<br/>감사의 기념패입니다.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Location Section */}
        <section className="snap-section py-20 bg-white">
          <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center max-w-6xl">
            {/* 텍스트 영역 */}
            <div className="space-y-8">
              <div>
                <span className="text-[#D4A857] font-bold text-sm tracking-widest uppercase">LOCATION</span>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mt-2">
                  오시는 길
                </h2>
              </div>
              <div className="space-y-6 text-sm md:text-base text-slate-600 leading-relaxed font-light">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-slate-50 rounded flex items-center justify-center text-slate-400 flex-shrink-0">
                     <TrendingUp size={20}/>
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 block mb-1">지하철 이용 시</p>
                    <p>강남구청역 2번 출구에서 도보 6분 거리</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-slate-50 rounded flex items-center justify-center text-slate-400 flex-shrink-0">
                     <Phone size={20}/>
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 block mb-1">상담 문의</p>
                    <p>전화: 02-518-0130 <span className="text-slate-300 mx-2">|</span> 팩스: 02-518-0137</p>
                    <p>이메일: rdscta@daum.net</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-slate-50 rounded flex items-center justify-center text-slate-400 flex-shrink-0">
                     <FileText size={20}/>
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 block mb-1">주소</p>
                    <p>서울 강남구 언주로130길 23, 평해빌딩 201호</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 이미지 영역 */}
            <div className="relative group">
              <div className="absolute top-4 -left-4 w-full h-full border-2 border-[#D4A857] z-0" />
              <img
                src="/images/유동수세무회계_오시는길.jpg"
                alt="유동수 세무회계 오시는 길"
                className="relative z-10 w-full h-[300px] md:h-[400px] object-cover rounded-lg shadow-2xl grayscale group-hover:grayscale-0 transition-all duration-500"
              />
              <Link href="/location" className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                 <div className="bg-black/60 backdrop-blur-sm px-6 py-3 rounded-full text-white flex items-center gap-2 cursor-pointer hover:bg-black/80">
                    <MapPin size={18} className="text-[#D4A857]"/>
                    <span className="text-sm font-medium">지도 보기</span>
                 </div>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="snap-section py-24 bg-[#050B16] text-center relative overflow-hidden">
           <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
           <div className="container relative z-10 px-6 space-y-12">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-white leading-tight">
                  복잡한 세금 문제,<br/>
                  <span className="text-[#D4A857]">지금 바로 상담받으세요.</span>
                </h2>
                <p className="text-slate-400 text-lg font-light">
                  국세청 25년 경력의 전문가가 첫 상담부터 끝까지 직접 책임지고 함께합니다.<br/>
                  준비 없는 첫 대응은 세 부담을 키울 수 있습니다.
                </p>
              </div>
              <div className="flex flex-col md:flex-row justify-center gap-6">
                <Link href="/consult" className="px-12 py-5 bg-[#D4A857] text-white font-bold rounded-sm hover:bg-[#C19545] transition-all text-lg shadow-2xl shadow-[#D4A857]/40 transform hover:-translate-y-1">
                  1:1 상담 예약하기
                </Link>
                <div className="flex items-center justify-center gap-4 text-white border border-slate-700 px-10 py-5 rounded-sm hover:bg-white/5 transition-colors cursor-pointer group">
                  <Phone className="text-[#D4A857] group-hover:text-white transition-colors" size={24} />
                  <span className="text-2xl font-serif font-bold">02-518-0130</span>
                </div>
              </div>
           </div>
        </section>

      </main>
    </>
  );
}
