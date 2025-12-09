'use client';

import Link from 'next/link';
import { Phone } from 'lucide-react';

export default function CTASection() {
  return (
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
  );
}
