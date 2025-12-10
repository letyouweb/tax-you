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
  // 타입에 따른 버튼 문구
  const buttonText = type === 'investigation' 
    ? '국세청 출신에게 직접 묻기' 
    : '숨은 절세 포인트 확인하기';

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

      {/* CTA 버튼 - 1개만 */}
      <div className="flex justify-center">
        <Link 
          href="/consult"
          className="px-10 py-4 bg-[#D4A857] text-white font-bold rounded-sm hover:bg-[#C19545] transition-all text-center flex items-center justify-center gap-3 shadow-lg shadow-[#D4A857]/20"
        >
          {buttonText} <ArrowRight size={18} />
        </Link>
      </div>
    </div>
  );
}
