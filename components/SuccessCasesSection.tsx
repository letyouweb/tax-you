'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { ScrollIndicator } from './ScrollIndicator';

interface CaseRow {
  category: string;
  problems: { label: string; text: string }[];
  results: { label: string; text: string; highlight: string }[];
  roles: string[];
}

const caseData: CaseRow[] = [
  {
    category: "고액 자산가·해외소득",
    problems: [
      { label: "상속세", text: "복잡한 자산 구조로 예상 상속세 150억 원 초과" },
      { label: "해외소득", text: "신고 누락 위험" }
    ],
    results: [
      { label: "상속세", text: "신고 기한 내 합법적 평가로", highlight: "30억 원 절감" },
      { label: "해외소득", text: "가산세 최소화 및", highlight: "불이익 원천 차단" }
    ],
    roles: [
      "재산 가액 평가 및 절세 설계",
      "국제 조세 전문가 협업 및 사전 컨설팅"
    ]
  },
  {
    category: "스타트업·프랜차이즈",
    problems: [
      { label: "스타트업 A사", text: "급격한 성장으로 세무 리스크 관리 필요" },
      { label: "프랜차이즈 B사", text: "가맹점 매출 누락 위험" }
    ],
    results: [
      { label: "스타트업", text: "벤처 인증 및 R&D 공제로", highlight: "3년간 7천만 원 환급" },
      { label: "프랜차이즈", text: "본사의 세무 위험", highlight: "99% 해소" }
    ],
    roles: [
      "성장 단계별 맞춤 컨설팅",
      "프랜차이즈 특화 세무 프로세스 설계"
    ]
  },
  {
    category: "세무조사·조세불복",
    problems: [
      { label: "중견 법인", text: "무작위 세무조사 착수, 50억 원 과세 위험" },
      { label: "개인 사업자", text: "부당 과세 1억 5천만 원" }
    ],
    results: [
      { label: "중견 법인", text: "과세처분 금액 45억 감면,", highlight: "추징세 90% 절감" },
      { label: "개인 사업자", text: "이의신청 통해 부당 과세", highlight: "전액 취소" }
    ],
    roles: [
      "국세청 조사 경험 기반 '실시간 방어 전략'",
      "법리적 재정립을 통한 납세자 권익 보호"
    ]
  }
];

export default function SuccessCasesSection() {
  return (
    <section id="success-cases" className="relative py-20 bg-[#050B16]">
      <div className="container mx-auto px-6">
        {/* 섹션 헤더 */}
        <div className="text-center mb-16 space-y-4">
          <span className="text-[#D4A857] font-bold tracking-widest text-sm uppercase">SUCCESS CASES</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white leading-tight">
            대표 해결 사례 –<br className="md:hidden" /> 
            <span className="text-[#D4A857]">숫자로 증명하는 결과</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto font-light">
            말로만 전문가가 아닙니다. 실제 의뢰인의 세금 문제를 해결한 사례로 증명합니다.
          </p>
        </div>

        {/* 데스크톱용 테이블 형태 */}
        <div className="hidden lg:block max-w-6xl mx-auto">
          {/* 테이블 헤더 */}
          <div className="grid grid-cols-4 gap-4 mb-6 px-6">
            <div className="text-slate-500 font-medium text-sm uppercase tracking-wider">분야</div>
            <div className="text-slate-500 font-medium text-sm uppercase tracking-wider">문제 상황</div>
            <div className="text-slate-500 font-medium text-sm uppercase tracking-wider">해결 결과</div>
            <div className="text-slate-500 font-medium text-sm uppercase tracking-wider">역할</div>
          </div>

          {/* 테이블 바디 */}
          <div className="space-y-4">
            {caseData.map((row, idx) => (
              <div 
                key={idx} 
                className="grid grid-cols-4 gap-4 bg-[#0f172a] p-6 rounded-lg border border-slate-800 hover:border-[#D4A857]/50 transition-colors"
              >
                {/* 분야 */}
                <div className="flex items-center">
                  <span className="text-white font-bold text-lg">{row.category}</span>
                </div>

                {/* 문제 상황 */}
                <div className="space-y-3">
                  {row.problems.map((problem, pIdx) => (
                    <div key={pIdx}>
                      <span className="text-[#D4A857] text-xs font-medium">[{problem.label}]</span>
                      <p className="text-slate-300 text-sm mt-1">{problem.text}</p>
                    </div>
                  ))}
                </div>

                {/* 해결 결과 */}
                <div className="space-y-3">
                  {row.results.map((result, rIdx) => (
                    <div key={rIdx}>
                      <span className="text-slate-500 text-xs">{result.text}</span>
                      <p className="text-[#D4A857] font-bold text-lg">{result.highlight}</p>
                    </div>
                  ))}
                </div>

                {/* 역할 */}
                <div className="space-y-2">
                  {row.roles.map((role, roleIdx) => (
                    <p key={roleIdx} className="text-slate-400 text-sm flex items-start gap-2">
                      <span className="text-[#D4A857] mt-1">•</span>
                      {role}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 모바일용 카드 형태 */}
        <div className="lg:hidden space-y-6">
          {caseData.map((row, idx) => (
            <div 
              key={idx} 
              className="bg-[#0f172a] p-6 rounded-lg border border-slate-800"
            >
              {/* 분야 태그 */}
              <div className="inline-block px-3 py-1 bg-[#D4A857]/20 rounded-full text-[#D4A857] font-bold text-sm mb-4">
                {row.category}
              </div>

              {/* 문제 → 결과 → 역할 순서로 쌓임 */}
              <div className="space-y-6">
                {/* 문제 상황 */}
                <div>
                  <h4 className="text-slate-500 text-xs font-medium uppercase tracking-wider mb-3">문제 상황</h4>
                  <div className="space-y-2">
                    {row.problems.map((problem, pIdx) => (
                      <p key={pIdx} className="text-slate-300 text-sm">
                        <span className="text-[#D4A857]">[{problem.label}]</span> {problem.text}
                      </p>
                    ))}
                  </div>
                </div>

                {/* 해결 결과 */}
                <div>
                  <h4 className="text-slate-500 text-xs font-medium uppercase tracking-wider mb-3">해결 결과</h4>
                  <div className="grid grid-cols-2 gap-4">
                    {row.results.map((result, rIdx) => (
                      <div key={rIdx} className="bg-[#162438] p-4 rounded-lg text-center">
                        <p className="text-[#D4A857] font-bold text-xl">{result.highlight}</p>
                        <p className="text-slate-500 text-xs mt-1">{result.text}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 역할 */}
                <div>
                  <h4 className="text-slate-500 text-xs font-medium uppercase tracking-wider mb-3">역할</h4>
                  <div className="space-y-1">
                    {row.roles.map((role, roleIdx) => (
                      <p key={roleIdx} className="text-slate-400 text-sm flex items-start gap-2">
                        <span className="text-[#D4A857]">•</span>
                        {role}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 하단 CTA */}
        <div className="text-center mt-12">
          <Link 
            href="/consult"
            className="inline-flex items-center gap-3 px-10 py-5 bg-[#D4A857] text-white font-bold rounded-sm hover:bg-[#C19545] transition-all text-lg shadow-2xl shadow-[#D4A857]/30"
          >
            나도 상담받기 <ArrowRight size={20} />
          </Link>
        </div>
      </div>
      
      {/* Scroll Indicator - 어두운 배경용 */}
      <div className="absolute left-1/2 bottom-6 -translate-x-1/2 z-30">
        <ScrollIndicator
          targetId="services"
          direction="down"
          className="text-white/70"
        />
      </div>
    </section>
  );
}
