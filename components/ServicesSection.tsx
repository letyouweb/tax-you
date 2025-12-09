'use client';

import Link from 'next/link';
import { Shield, FileText, Lock, Calculator, CheckCircle2 } from 'lucide-react';

export default function ServicesSection() {
  return (
    <section className="snap-section py-16 bg-[#050B16] text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10">
          <span className="text-[#D4A857] font-bold tracking-widest text-sm uppercase">SERVICES</span>
          <h2 className="text-3xl font-serif font-bold text-white mb-3 mt-2">대표 세무 서비스</h2>
          <div className="w-10 h-1 bg-[#D4A857] mx-auto mb-3"></div>
          <p className="text-slate-400 text-sm font-light">가장 자신 있는 분야에 집중합니다.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-5 max-w-6xl mx-auto">
          {/* 세무조사 전담 대응 */}
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
          
          {/* 양도·상속·증여 맞춤 설계 */}
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
          
          {/* 조세불복·경정청구 */}
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
          
          {/* 상시 세무 자문 */}
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
  );
}
