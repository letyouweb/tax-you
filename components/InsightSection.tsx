'use client';

import Image from 'next/image';
import Link from 'next/link';
import { AlertCircle, TrendingUp, Users, Lock, ChevronRight, ChevronDown } from 'lucide-react';

// [복구] Insight 섹션용 플랫(Flat) 배지
// 3D 이미지 대신 CSS로 깔끔하게 처리하여 '공감' 톤앤매너 유지
function InsightBadge() {
  return (
    <div className="inline-flex items-center gap-2 bg-[#D4A857]/10 border border-[#D4A857]/40 px-4 py-1.5 rounded-full mb-6 shadow-sm">
      <Image
        src="/images/medal-badge-icon.png" // 기존 작은 아이콘 사용
        alt="국세청 출신 전문가"
        width={24}
        height={24}
        className="w-5 h-5 object-contain"
      />
      <span className="text-xs md:text-sm font-bold text-[#b38836] tracking-tight pt-[1px]">
        국세청 25년 경력 · 실무 해결 전문가
      </span>
    </div>
  );
}

export default function InsightSection() {
  const insights = [
    { 
      icon: <AlertCircle size={32} />, 
      title: "세무조사", 
      sub: "통지서를 받고 막막하신가요?", 
      desc: "국세청 조사과 25년, 그들의 방식을 아는 전문가가 첫 대응부터 종결까지 직접 방어합니다." 
    },
    { 
      icon: <TrendingUp size={32} />, 
      title: "양도소득세", 
      sub: "팔고 나서 후회하고 계신가요?", 
      desc: "매도 '전' 상담 한 번이 실수령액 수천만 원을 바꿉니다. 최적의 매도 시점을 설계해 드립니다." 
    },
    { 
      icon: <Users size={32} />, 
      title: "상속·증여", 
      sub: "가족끼리 불편해질까 걱정되시나요?", 
      desc: "분쟁 없는 자산 이전과 10년 단위 장기 절세 플랜, 두 가지를 동시에 설계해 드립니다." 
    },
    { 
      icon: <Lock size={32} />, 
      title: "조세불복", 
      sub: "이 세금, 진짜 내야 하는 건가요?", 
      desc: "억울하게 낸 세금, 국세청 출신이 법대로 끝까지 싸워 되찾아 드립니다." 
    }
  ];

  // 스크롤 이동 함수
  const handleScrollDown = () => {
    const nextSection = document.getElementById('services-section');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="insight" className="snap-section relative py-20 md:py-24 bg-white">
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header Area */}
        <div className="text-center mb-16 space-y-2">
          
          {/* [수정] 3D 이미지 제거 -> 플랫 배지로 교체 */}
          <div className="flex justify-center">
            <InsightBadge />
          </div>

          <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 leading-tight pb-2">
            혼자 고민하지 마세요
          </h2>
          <p className="text-slate-700 max-w-2xl mx-auto font-light leading-relaxed text-lg">
            세무조사, 상속, 증여... 처음 겪는 일이라 막막하시죠.<br className="hidden md:block" />
            <strong className="font-medium text-slate-800">25년 경력의 전문가</strong>가 대표님 편에서 끝까지 함께합니다.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {insights.map((card, idx) => (
            <Link 
              href="/insight" 
              key={idx} 
              className="group bg-slate-50 p-8 rounded-xl hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-100 hover:border-[#D4A857] cursor-pointer text-left flex flex-col"
            >
              <div className="mb-6 p-3 bg-white w-fit rounded-lg shadow-sm group-hover:bg-[#D4A857]/10 transition-colors">
                <div className="text-slate-400 group-hover:text-[#D4A857] transition-colors">
                  {card.icon}
                </div>
              </div>
              
              <div className="text-xs text-[#D4A857] font-bold mb-3 tracking-wide uppercase">
                {card.title}
              </div>
              
              <h3 className="font-serif text-xl font-bold text-slate-900 mb-4 group-hover:text-[#D4A857] transition-colors">
                {card.sub}
              </h3>
              
              <p className="text-sm text-slate-700 leading-relaxed font-medium line-clamp-3">
                {card.desc}
              </p>
            </Link>
          ))}
        </div>

        {/* 하단 CTA 버튼 */}
        <div className="mt-16 text-center pb-8">
          <Link 
            href="/consult"
            className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 text-white rounded-full font-bold hover:bg-[#D4A857] transition-all duration-300 group shadow-lg shadow-slate-200"
          >
            내 상황에 맞는 해결책 상담하기
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <p className="mt-4 text-sm text-slate-500">
            초기 상담은 100% 비밀이 보장됩니다.
          </p>
        </div>

      </div>
      
      {/* Scroll Indicator: 글자 없이 화살표만 깔끔하게 */}
      <div className="absolute left-1/2 bottom-6 -translate-x-1/2 z-30">
        <button 
          onClick={handleScrollDown}
          className="p-2 opacity-40 hover:opacity-100 transition-opacity duration-300 cursor-pointer"
          aria-label="Next Section"
        >
          <ChevronDown className="w-8 h-8 text-slate-400 animate-bounce" />
        </button>
      </div>
    </section>
  );
}