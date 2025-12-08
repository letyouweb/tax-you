'use client';

import Link from 'next/link';
import dynamic from 'next/dynamic';
import { useState } from 'react';
import Image from 'next/image';
import { ArrowRight, FileText, AlertCircle, TrendingUp, Users, Lock, Shield, CheckCircle2, Calculator, Phone } from 'lucide-react';
import SuccessCasesSection from '@/components/SuccessCasesSection';
import ImageLightbox from '@/components/ImageLightbox';

// KakaoMap은 클라이언트에서만 로드
const KakaoMap = dynamic(() => import('@/components/KakaoMap'), { 
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center bg-slate-100 rounded-lg">
      <p className="text-slate-400 text-sm">지도 로딩중...</p>
    </div>
  )
});

export default function Home() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState({ src: '', alt: '' });

  const openLightbox = (src: string, alt: string) => {
    setLightboxImage({ src, alt });
    setLightboxOpen(true);
  };

  const awardsData = [
    {
      src: '/images/awards/유동수세무회계_표창장.jpg',
      alt: '표창장',
      title: '국세청 표창장',
      desc: '성실한 국세 행정에 기여한 공로를 인정받아 수여된 표창장입니다.'
    },
    {
      src: '/images/awards/유동수세무회계_국세청_표창장.jpg',
      alt: '국세청 표창장',
      title: '국세청장 표창장',
      desc: '국세청장으로부터 수여받은 표창장으로 세무 행정 분야에 대한 전문성을 인정받았습니다.'
    },
    {
      src: '/images/awards/유동수세무회계_강남세무서_명예퇴임.jpg',
      alt: '강남세무서 명예퇴임 기념패',
      title: '명예퇴임 기념패',
      desc: '강남세무서 조사과 동료들이 함께 남겨준 감사의 기념패입니다.'
    },
    {
      src: '/images/awards/유동수세무회계_국세청장재직기념패.jpg',
      alt: '국세청장 재직 기념패',
      title: '국세청장 재직 기념패',
      desc: '국세행정에 기여한 공로를 인정받아 수여된 기념패입니다.'
    }
  ];

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
        <section className="snap-section relative bg-gradient-to-br from-[#050B16] via-[#0A1525] to-[#111C30] text-white overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]"></div>
          
          <div className="container mx-auto px-6 py-24 grid md:grid-cols-2 gap-8 md:gap-12 items-center relative z-10 min-h-screen">
            <div className="pt-16 md:pt-0 flex flex-col">
              <div className="flex items-center gap-3 mb-8 md:mb-10">
                <div className="w-8 md:w-10 h-[1px] bg-[#D4A857]"></div>
                <span className="text-[#D4A857] font-medium tracking-wide text-xs md:text-sm">
                  국세청 25년 · 세무조사 · 양도 · 상속 · 증여 · 조세불복 전문
                </span>
              </div>
              
              <h1 className="font-serif font-bold text-white drop-shadow-lg text-[1.75rem] md:text-[2.5rem] lg:text-[3.5rem] leading-snug tracking-tight">
                복잡한 세무는<br />
                유동수 세무회계에 맡기시고,<br />
                <span className="text-[#D4A857]">대표님은</span><br />
                <span className="text-[#D4A857]">사업에만 집중하세요.</span>
              </h1>
              
              <div className="h-16 md:h-20"></div>
              
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
            
            <div className="relative h-full flex items-end justify-center md:justify-end">
              <div className="absolute inset-0 bg-gradient-to-r from-[#050B16] via-transparent to-transparent z-10"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#050B16] via-transparent to-transparent z-10"></div>
              <img 
                src="/images/Main.jpg" 
                alt="유동수 대표 세무사" 
                className="relative z-0 w-full max-w-lg md:max-w-xl object-cover grayscale brightness-110 contrast-110 opacity-95" 
                style={{ maskImage: 'linear-gradient(to right, transparent 5%, black 40%)' }} 
              />
            </div>
          </div>
        </section>

        {/* Insight Section */}
        <section className="snap-section py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16 space-y-4">
              <span className="text-[#D4A857] font-bold tracking-widest text-sm uppercase">INSIGHT</span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900">
                혼자 고민하지 마세요, <span className="text-[#D4A857]">답은 여기 있습니다</span>
              </h2>
              <p className="text-slate-500 max-w-2xl mx-auto font-light">
                "처음 겪어보는 상황이라 뭐부터 해야 할지 모르겠어요"라는 분들이 가장 많이 묻는 4가지입니다.
              </p>
            </div>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { icon: <AlertCircle size={32} />, title: "세무조사", sub: "통지서를 받고 막막하신가요?", desc: "국세청 조사과 25년, 그들의 방식을 아는 전문가가 첫 대응부터 종결까지 직접 방어합니다." },
                { icon: <TrendingUp size={32} />, title: "양도소득세", sub: "팔고 나서 후회하고 계신가요?", desc: "매도 '전' 상담 한 번이 실수령액 수천만 원을 바꿉니다. 최적의 매도 시점을 설계해 드립니다." },
                { icon: <Users size={32} />, title: "상속·증여", sub: "가족끼리 불편해질까 걱정되시나요?", desc: "분쟁 없는 자산 이전과 10년 단위 장기 절세 플랜, 두 가지를 동시에 설계해 드립니다." },
                { icon: <Lock size={32} />, title: "조세불복", sub: "이 세금, 진짜 내야 하는 건가요?", desc: "억울하게 낸 세금, 국세청 출신이 법대로 끝까지 싸워 되찾아 드립니다." }
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

        {/* Success Cases Section */}
        <SuccessCasesSection />

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
              <p className="text-slate-500 max-w-2xl mx-auto font-light">
                세무조사 첫 대응부터 조세불복까지
              </p>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900">
                국세청 25년 <span className="text-[#5B9BD5]">경험으로 함께합니다</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
              {awardsData.map((award, idx) => (
                <div 
                  key={idx}
                  className="bg-white p-4 pb-8 rounded shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer"
                  onClick={() => openLightbox(award.src, award.alt)}
                >
                  <div className="aspect-[3/4] bg-slate-100 overflow-hidden rounded mb-6 border border-slate-100 relative">
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors z-10 flex items-center justify-center">
                      <span className="opacity-0 group-hover:opacity-100 text-white font-bold text-sm bg-black/50 px-4 py-2 rounded transition-opacity">
                        클릭하여 확대
                      </span>
                    </div>
                    <Image 
                      src={award.src}
                      alt={award.alt}
                      fill
                      className="object-contain p-2 transform group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  </div>
                  <div className="px-2 text-center">
                    <h3 className="font-serif text-lg font-bold text-slate-900 mb-2">{award.title}</h3>
                    <p className="text-sm text-slate-500 font-light line-clamp-2">{award.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Location Section - 건물 배경 이미지 */}
        <section className="snap-section py-20 relative overflow-hidden">
          {/* 배경 이미지 */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/images/유동수세무회계_오시는길.jpg')" }}
          />
          {/* 어두운 오버레이 (75% opacity) */}
          <div className="absolute inset-0 bg-black/[0.75]" />
          
          <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center max-w-6xl relative z-10">
            <div className="space-y-8">
              <div>
                <span className="text-[#D4A857] font-bold text-sm tracking-widest uppercase">LOCATION</span>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mt-2">
                  오시는 길
                </h2>
              </div>
              <div className="space-y-6 text-sm md:text-base text-white/90 leading-relaxed font-light">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded flex items-center justify-center text-[#D4A857] flex-shrink-0 border border-white/20">
                     <TrendingUp size={20}/>
                  </div>
                  <div>
                    <p className="font-bold text-white block mb-1">지하철 이용 시</p>
                    <p>강남구청역 2번 출구에서 도보 6분 거리</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <a href="tel:025180130" className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded flex items-center justify-center text-[#D4A857] flex-shrink-0 border border-white/20 hover:bg-[#D4A857] hover:text-white transition-all cursor-pointer">
                     <Phone size={20}/>
                  </a>
                  <div>
                    <p className="font-bold text-white block mb-1">상담 문의</p>
                    <p>전화: <a href="tel:025180130" className="hover:text-[#D4A857] transition-colors">02-518-0130</a> <span className="text-white/50 mx-2">|</span> 팩스: 02-518-0137</p>
                    <p>이메일: <a href="mailto:rdscta@daum.net" className="hover:text-[#D4A857] transition-colors">rdscta@daum.net</a></p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded flex items-center justify-center text-[#D4A857] flex-shrink-0 border border-white/20">
                     <FileText size={20}/>
                  </div>
                  <div>
                    <p className="font-bold text-white block mb-1">주소</p>
                    <p>서울 강남구 언주로130길 23, 평해빌딩 201호</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 지도 영역 - 흰색 테두리 및 그림자 추가 */}
            <div className="w-full rounded-lg shadow-2xl overflow-hidden border-2 border-white/30 ring-4 ring-white/10">
              <KakaoMap 
                address="서울 강남구 언주로130길 23"
                markerTitle="유동수 세무회계"
                height="360px"
              />
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
                <a href="tel:025180130" className="flex items-center justify-center gap-4 text-white border border-slate-700 px-10 py-5 rounded-sm hover:bg-white/5 transition-colors cursor-pointer group">
                  <Phone className="text-[#D4A857] group-hover:text-white transition-colors" size={24} />
                  <span className="text-2xl font-serif font-bold">02-518-0130</span>
                </a>
              </div>
           </div>
        </section>

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
