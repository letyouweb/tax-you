'use client';

import dynamic from 'next/dynamic';
import { TrendingUp, Phone, FileText } from 'lucide-react';
import { ScrollIndicator } from './ScrollIndicator';

// KakaoMap은 클라이언트에서만 로드
const KakaoMap = dynamic(() => import('@/components/KakaoMap'), { 
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center bg-slate-100 rounded-lg">
      <p className="text-slate-400 text-sm">지도 로딩중...</p>
    </div>
  )
});

export default function LocationSection() {
  return (
    <section id="contact" className="snap-section relative py-20 overflow-hidden">
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
      
      {/* Scroll Indicator - 어두운 배경용 */}
      <div className="absolute left-1/2 bottom-6 -translate-x-1/2 z-30">
        <ScrollIndicator
          targetId="cta"
          direction="down"
          className="text-white/70"
        />
      </div>
    </section>
  );
}
