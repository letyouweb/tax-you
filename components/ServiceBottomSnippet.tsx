'use client';

import Link from 'next/link';
import { ArrowRight, TrendingUp } from 'lucide-react';

interface ServiceBottomSnippetProps {
  type: 'investigation' | 'asset';
  caseText: string;
  resultText: string;
  roleText: string;
}

export default function ServiceBottomSnippet({ 
  type, 
  caseText, 
  resultText, 
  roleText 
}: ServiceBottomSnippetProps) {
  return (
    <div className="mt-12 space-y-6">
      {/* 사례 스니펫 박스 */}
      <div className="bg-gradient-to-r from-[#0f172a] to-[#162438] p-6 md:p-8 rounded-lg border border-slate-700/50">
        <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-[#D4A857]/20 rounded-lg">
              <TrendingUp className="text-[#D4A857]" size={24} />
            </div>
            <span className="text-slate-400 font-medium text-sm uppercase tracking-wider">실제 해결 사례</span>
          </div>
          
          <div className="flex-1 flex flex-col md:flex-row md:items-center gap-3 md:gap-6">
            <div className="text-white">
              <span className="text-slate-400 text-sm">문제: </span>
              <span className="font-medium">{caseText}</span>
            </div>
            <div className="hidden md:block text-[#D4A857] text-2xl">→</div>
            <div className="text-white">
              <span className="text-slate-400 text-sm">결과: </span>
              <span className="font-bold text-[#D4A857] text-lg">{resultText}</span>
            </div>
          </div>
          
          <div className="text-slate-500 text-sm border-l border-slate-700 pl-4 hidden lg:block">
            {roleText}
          </div>
        </div>
      </div>

      {/* CTA 버튼 영역 */}
      <div className="flex flex-col sm:flex-row gap-4">
        {/* 메인 CTA */}
        <Link 
          href="/consult"
          className="flex-1 px-8 py-4 bg-[#D4A857] text-white font-bold rounded-sm hover:bg-[#C19545] transition-all text-center flex items-center justify-center gap-3 shadow-lg shadow-[#D4A857]/20"
        >
          내 상황 진단받기 <ArrowRight size={18} />
        </Link>

        {/* 보조 CTA - 타입에 따라 다른 스타일 */}
        {type === 'investigation' ? (
          <Link 
            href="/consult"
            className="flex-1 px-8 py-4 border border-slate-300 text-slate-700 font-medium rounded-sm hover:border-[#D4A857] hover:text-[#D4A857] transition-all text-center flex items-center justify-center gap-2"
          >
            국세청 출신에게 직접 묻기 <ArrowRight size={16} />
          </Link>
        ) : (
          <Link 
            href="/consult"
            className="flex-1 px-8 py-4 bg-slate-100 text-slate-700 font-medium rounded-sm hover:bg-slate-200 transition-all text-center flex items-center justify-center gap-2 group"
          >
            <span className="group-hover:text-[#D4A857] transition-colors">숨은 절세 포인트 확인하기</span> 
            <ArrowRight size={16} className="group-hover:text-[#D4A857] transition-colors" />
          </Link>
        )}
      </div>
    </div>
  );
}
