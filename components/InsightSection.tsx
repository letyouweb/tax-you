'use client';

import Link from 'next/link';
import { AlertCircle, TrendingUp, Users, Lock } from 'lucide-react';
import { ScrollIndicator } from './ScrollIndicator';

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

  return (
    <section id="insight" className="snap-section relative py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <span className="text-[#D4A857] font-bold tracking-widest text-sm uppercase">INSIGHT</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900">
            혼자 고민하지 마세요
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto font-light">
            세무조사, 상속, 증여... 처음 겪는 일이라 막막하시죠.<br className="hidden md:block" />
            국세청 25년 경력의 전문가가 대표님 편에서 끝까지 함께합니다.
          </p>
        </div>
        <div className="grid md:grid-cols-4 gap-6">
          {insights.map((card, idx) => (
            <Link 
              href="/insight" 
              key={idx} 
              className="bg-slate-50 p-8 rounded-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-slate-100 hover:border-[#D4A857] group cursor-pointer"
            >
              <div className="text-slate-400 group-hover:text-[#D4A857] transition-colors mb-6">{card.icon}</div>
              <div className="text-xs text-[#D4A857] font-bold mb-2 tracking-wide uppercase">{card.title}</div>
              <h3 className="font-serif text-xl font-bold text-slate-900 mb-4">{card.sub}</h3>
              <p className="text-sm text-slate-600 leading-relaxed font-light line-clamp-3">{card.desc}</p>
            </Link>
          ))}
        </div>
      </div>
      
      {/* Scroll Indicator - 밝은 배경용 */}
      <div className="absolute left-1/2 bottom-6 -translate-x-1/2 z-30">
        <ScrollIndicator
          targetId="success-cases"
          direction="down"
          className="text-slate-400"
        />
      </div>
    </section>
  );
}
