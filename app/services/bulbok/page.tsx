'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import PageHeader from '@/components/PageHeader';
import { 
  Lock, 
  Scale, 
  Gavel, 
  FileCheck, 
  Phone, 
  ChevronDown, 
  ArrowRight, 
  CheckCircle2, 
  AlertCircle, 
  ShieldCheck,
  Search
} from 'lucide-react';

// [기능] 모바일용 더보기 아코디언
function CollapsibleText({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-6">
      <div className={`text-slate-600 leading-relaxed space-y-4 text-sm md:text-base ${isOpen ? '' : 'line-clamp-3 md:line-clamp-none'}`}>
        {children}
      </div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="mt-2 flex items-center gap-1 text-sm font-semibold text-[#D4A857] md:hidden hover:text-[#b88d3f] transition-colors"
      >
        {isOpen ? '내용 접기' : '더 보기'}
        <ChevronDown size={16} className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
    </div>
  );
}

export default function BulbokPage() {
  return (
    <div className="bg-white min-h-screen">
      <PageHeader 
        title="조세불복 · 경정청구" 
        subTitle="억울한 세금, 국세청 출신 전문가가 끝까지 싸워 되찾아 드립니다." 
      />
      
      {/* 1. 주요 서비스 (Alta Style) */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-slate-50"></div>
        <div className="absolute inset-0 bg-[url('/images/pattern-grid.png')] opacity-5"></div>
        <div className="container mx-auto px-6 relative z-10">
          <p className="text-center text-[#D4A857] font-bold tracking-widest text-[11px] uppercase mb-3">Key Services</p>
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 mb-4 text-center">조세불복 주요 서비스</h2>
          <p className="text-slate-500 text-center mb-12">납세자의 정당한 권리를 보호하기 위한 법적 절차입니다.</p>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { icon: FileCheck, title: "과세전적부심사", desc: "세무조사 결과 통지 후, 세금이 고지되기 전에 과세의 적법성을 미리 심사받는 제도입니다." },
              { icon: Gavel, title: "이의신청 · 심판청구", desc: "위법하거나 부당한 처분을 받은 경우, 처분청이나 조세심판원에 불복을 제기하여 권리를 구제받습니다." },
              { icon: Search, title: "경정청구 (환급)", desc: "과거 5년 내에 실수로 더 낸 세금이 있다면, 이를 바로잡아 환급받을 수 있도록 도와드립니다." }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 text-center hover:shadow-md hover:-translate-y-1 transition-all duration-300 group">
                <div className="inline-flex p-4 bg-slate-50 rounded-full text-[#D4A857] mb-6 group-hover:bg-[#D4A857] group-hover:text-white transition-colors">
                  <item.icon size={32} />
                </div>
                <h4 className="font-bold text-xl text-slate-900 mb-3">{item.title}</h4>
                <p className="text-slate-600 leading-relaxed text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* [NEW] 2. 불복 가능성 자가진단 (체크리스트) */}
      <section className="py-16 md:py-24 bg-white border-y border-slate-100">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="flex items-center gap-3 mb-4">
            <span className="p-2 bg-[#D4A857]/10 text-[#D4A857] rounded-lg"><CheckCircle2 size={24}/></span>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-900">
              이런 경우, 불복이 가능합니다
            </h2>
          </div>

          <p className="text-slate-600 mb-10 leading-relaxed pl-1 text-lg">
            세금 고지서를 받았다고 해서 무조건 내야 하는 것은 아닙니다.<br className="hidden md:block" />
            아래 항목 중 <span className="font-bold text-[#D4A857] border-b-2 border-[#D4A857]/30">하나라도 해당된다면</span> 전문가의 검토가 필요합니다.
          </p>

          <div className="grid md:grid-cols-2 gap-4 mb-8">
            {[
              "세무조사 과정에서 사실관계가 잘못 파악되었다고 생각되십니까?",
              "세법 해석의 차이로 인해 과도한 세금이 부과되었습니까?",
              "납세 고지서를 받은 지 90일이 지나지 않았습니까?",
              "과거 5년 이내에 신고한 세금 중 감면 혜택을 놓친 부분이 있습니까?",
              "제2차 납세의무자 지정 등 부당한 처분을 받으셨습니까?"
            ].map((text, idx) => (
              <label key={idx} className={`flex items-start gap-3 p-5 rounded-xl bg-slate-50 border border-slate-200 hover:border-[#D4A857] transition-colors cursor-pointer ${idx === 4 ? 'md:col-span-2' : ''}`}>
                <input
                  type="checkbox"
                  className="mt-1 h-5 w-5 rounded border-slate-300 text-[#D4A857] focus:ring-[#D4A857] shrink-0"
                />
                <span className="text-sm md:text-base text-slate-700 font-medium">
                  {text}
                </span>
              </label>
            ))}
          </div>

          <div className="bg-[#FFF9EA] p-5 rounded-xl border border-[#F2E0A4] flex items-start gap-3 mb-10">
            <AlertCircle className="text-[#D4A857] shrink-0 mt-0.5" size={20}/>
            <p className="text-sm text-[#8A6A1C] font-semibold leading-relaxed">
              조세불복은 <span className="underline">청구 기한(90일)</span>을 놓치면 억울해도 다툴 수 없습니다. 고지서를 받자마자 검토를 시작해야 합니다.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/consult?type=appeal-check"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-[#D4A857] text-sm md:text-base font-bold text-[#D4A857] hover:bg-[#D4A857] hover:text-white transition-all"
            >
              <Scale size={18}/>
              승소 가능성 무료 진단
            </Link>

            <Link
              href="/consult?type=refund"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#D4A857] text-sm md:text-base font-bold text-white hover:bg-[#C19545] shadow-lg shadow-[#D4A857]/20 transition-all"
            >
              숨은 세금 환급(경정청구) 문의 <ArrowRight size={18}/>
            </Link>
          </div>
        </div>
      </section>

      {/* 3. 불복 절차 프로세스 (Alta Style) */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <p className="text-center text-[#D4A857] font-bold tracking-widest text-[11px] uppercase mb-3">Process</p>
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 mb-4 text-center">조세불복 절차</h2>
          <p className="text-slate-500 text-center mb-12">단계별로 체계적인 대응이 필요합니다.</p>
          
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-4 gap-4 items-center mb-8 relative">
              {/* 연결선 (PC only) */}
              <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-200 -z-10 -translate-y-1/2"></div>
              
              {[
                { step: "01", title: "과세 전", sub: "과세전적부심사", desc: "고지서 발송 전 대응" },
                { step: "02", title: "처분 후", sub: "이의신청", desc: "세무서/지방청에 제기" },
                { step: "03", title: "심판", sub: "심판/심사청구", desc: "조세심판원/국세청" },
                { step: "04", title: "소송", sub: "행정소송", desc: "법원을 통한 구제" }
              ].map((item, idx) => (
                <div key={idx} className="bg-white border border-slate-200 p-6 rounded-xl text-center shadow-sm relative group hover:border-[#D4A857] transition-all hover:-translate-y-1">
                  <div className="w-10 h-10 bg-slate-100 text-slate-500 rounded-full flex items-center justify-center font-bold mx-auto mb-4 group-hover:bg-[#D4A857] group-hover:text-white transition-colors border-4 border-white">
                    {idx + 1}
                  </div>
                  <h3 className="font-bold text-slate-900 mb-1">{item.sub}</h3>
                  <p className="text-xs text-[#D4A857] font-medium mb-2">{item.title}</p>
                  <p className="text-xs text-slate-500 break-keep">{item.desc}</p>
                </div>
              ))}
            </div>
            
            <div className="text-center">
               <p className="text-sm text-slate-500 bg-white inline-block px-4 py-2 rounded-full border border-slate-200 shadow-sm">
                 <span className="text-[#D4A857] font-bold">* Tip:</span> 1단계(이의신청)를 거치지 않고 바로 2단계(심판청구)로 갈 수도 있습니다. (선택적 절차)
               </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. 전문가 필요 이유 (사진 적용: tax-accountant.jpg) */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[#050B16]"></div>
        <div className="absolute inset-0 bg-[url('/images/pattern-dark.png')] opacity-10"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
            {/* 세무사 이미지 */}
            <div className="relative order-2 md:order-1 flex justify-center md:justify-end">
              <div className="aspect-[4/5] md:aspect-[3/4] rounded-lg overflow-hidden shadow-2xl border border-white/10 w-full max-w-md">
                <Image 
                  src="/images/tax-accountant.jpg" 
                  alt="조세불복 전문 유동수 세무사"
                  width={600}
                  height={800}
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
              <div className="absolute -bottom-6 -right-4 md:bottom-8 md:-right-8 bg-[#D4A857] text-white p-5 md:p-6 rounded-xl shadow-xl border border-white/20 backdrop-blur-sm">
                <div className="text-2xl md:text-3xl font-bold font-serif mb-1">승소 전략</div>
                <div className="text-xs md:text-sm text-white/90">국세청 내부 절차 완벽 이해</div>
              </div>
            </div>
            
            {/* 텍스트 */}
            <div className="text-white order-1 md:order-2">
              <p className="text-[#D4A857] font-bold tracking-widest text-[11px] uppercase mb-4">Why Expert?</p>
              <h2 className="text-2xl md:text-4xl font-serif font-bold mb-8 leading-tight">
                질 싸움도 이기는 조세불복,<br/>
                <span className="text-[#D4A857]">국세청 출신이어야 가능합니다.</span>
              </h2>
              
              <CollapsibleText>
                <div className="space-y-6 text-slate-300">
                  <p>
                    유동수 대표세무사는 25년 경력 국세청 출신으로 
                    <strong className="text-white border-b border-[#D4A857]/50 pb-0.5"> 과세 관청의 논리와 내부 절차를 누구보다 잘 이해</strong>하고 있습니다.
                  </p>
                  <p>
                    세무 공무원이 어떤 근거로 과세했는지 정확히 파악해야만 그 논리를 깰 수 있습니다. 
                    <strong className="text-white">국세청의 결정 과정과 내부 정책</strong>을 꿰뚫고 있는 전문가만이 승소를 이끌어낼 수 있습니다.
                  </p>
                  <p className="text-[#D4A857] font-medium text-lg pt-2">
                    억울한 세금, 포기하지 마십시오. 치밀한 법리 분석으로 끝까지 싸워드리겠습니다.
                  </p>
                </div>
              </CollapsibleText>
              
              <div className="mt-8 flex flex-wrap gap-3">
                {["과세 전 적부심사", "이의신청 승소 노하우", "조세심판원 청구", "경정청구 환급"].map((tag, i) => (
                  <span key={i} className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-slate-300">
                    # {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* [NEW] 5. 승소 사례 요약 (신뢰도 강화) */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <p className="text-center text-[#D4A857] font-bold tracking-widest text-[11px] uppercase mb-3">Success Cases</p>
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 mb-10 text-center">
            불가능해 보였던 사건, <span className="text-[#D4A857]">결과로 증명했습니다</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-50 rounded-xl p-8 border border-slate-100">
               <div className="flex justify-between items-start mb-4">
                  <span className="bg-white text-slate-900 text-xs font-bold px-3 py-1 rounded border border-slate-200">CASE 01</span>
                  <span className="text-[#D4A857] font-bold">전액 취소</span>
               </div>
               <h3 className="text-xl font-bold text-slate-900 mb-2">부당 과세 1.5억 처분 취소</h3>
               <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  개인 사업자에 대한 무리한 경비 부인을 법리적으로 반박하여, 과세 전 적부심사 단계에서 전액 취소를 이끌어냈습니다.
               </p>
               <div className="border-t border-slate-200 pt-4 mt-4">
                  <p className="text-xs text-slate-500">핵심 쟁점: 사실 관계 오인 및 증빙 불비 주장 반박</p>
               </div>
            </div>

            <div className="bg-slate-50 rounded-xl p-8 border border-slate-100">
               <div className="flex justify-between items-start mb-4">
                  <span className="bg-white text-slate-900 text-xs font-bold px-3 py-1 rounded border border-slate-200">CASE 02</span>
                  <span className="text-[#D4A857] font-bold">45억 감면</span>
               </div>
               <h3 className="text-xl font-bold text-slate-900 mb-2">법인세 및 부가세 50억 과세 방어</h3>
               <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  과거 5년치 거래 전체에 대한 조사에서 매출 누락 혐의를 적극 소명하여 고의성 없음을 입증, 90%를 감면받았습니다.
               </p>
               <div className="border-t border-slate-200 pt-4 mt-4">
                  <p className="text-xs text-slate-500">핵심 쟁점: 가공 경비 혐의 소명 및 가산세 감면</p>
               </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link href="/consult?type=appeal-check" className="text-slate-500 text-sm hover:text-[#D4A857] underline decoration-slate-300 hover:decoration-[#D4A857] underline-offset-4 transition-colors">
              내 사건도 승소 가능할까? 무료 진단 신청하기 →
            </Link>
          </div>
        </div>
      </section>

      {/* 6. 핵심 강점 */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 mb-12 text-center">유동수 세무회계의 조세불복 강점</h2>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              "국세청 조사과 25년 근무로 조사·심사 프로세스 완벽 이해",
              "과세 처분의 위법·부당성을 정확히 파악하는 전문성",
              "조세심판원·국세청 심사청구 다수 경험 보유",
              "치밀한 법리 분석과 논리적 주장 구성 능력"
            ].map((text, idx) => (
              <div key={idx} className="flex items-start gap-4 bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                <ShieldCheck className="text-[#D4A857] shrink-0 mt-1" size={24} />
                <p className="text-slate-700 font-medium">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FAQ */}
      <section className="py-16 md:py-24 bg-white border-t border-slate-100">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 mb-10 text-center">자주 묻는 질문</h2>
          
          <div className="space-y-4">
            {[
              { q: "조세불복 기간 동안 다른 세무조사가 진행될 수 있나요?", a: "원칙적으로 불복 절차가 진행 중인 과세 처분과 관련된 사항에 대해서는 재조사가 제한됩니다. 다만, 별도의 세목이나 다른 과세 기간에 대해서는 조사가 진행될 수 있습니다." },
              { q: "조세불복 절차에서 법률 대리인을 꼭 선임해야 하나요?", a: "법적으로 필수는 아니지만, 조세불복은 고도의 세법 지식과 논리 싸움이 필요합니다. 국세청의 과세 논리를 깰 수 있는 전문가(세무사, 변호사)의 조력을 받는 것이 승소 확률을 높이는 길입니다." },
              { q: "조세불복을 신청하면 세금 납부를 유예할 수 있나요?", a: "불복 청구 자체만으로 납부가 자동으로 유예되지는 않습니다. 별도로 '징수유예' 또는 '납부기한 연장'을 신청해야 하며, 담보 제공 등 일정 요건을 충족해야 승인될 수 있습니다." }
            ].map((item, idx) => (
              <details key={idx} className="group bg-slate-50 rounded-xl border border-slate-100 overflow-hidden">
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none hover:bg-slate-100 transition-colors">
                  <span className="font-bold text-slate-900 flex gap-3">
                    <span className="text-[#D4A857]">Q.</span> {item.q}
                  </span>
                  <ChevronDown size={20} className="text-slate-400 group-open:rotate-180 transition-transform" />
                </summary>
                <div className="px-6 pb-6 pl-12 text-slate-600 text-sm leading-relaxed border-t border-slate-200 pt-4 bg-white">
                  {item.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 8. 하단 CTA */}
      <section className="py-20 bg-[#050B16] text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl md:text-4xl font-serif font-bold text-white mb-6">
            국세청 출신 25년 경력의<br/>
            <span className="text-[#D4A857]">대표 세무사가 직접 상담합니다.</span>
          </h2>
          <p className="text-slate-400 mb-10 max-w-xl mx-auto">
            억울한 세금, 혼자 고민하지 마세요.<br className="hidden md:block"/>
            정당한 권리를 되찾아 드립니다.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/consult?type=appeal" className="px-8 py-4 bg-[#D4A857] text-white font-bold rounded-sm hover:bg-[#C19545] transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#D4A857]/20">
              조세불복 전문 상담 예약 <ArrowRight size={18} />
            </Link>
            <a href="tel:02-518-0130" className="px-8 py-4 border border-slate-600 text-white font-bold rounded-sm hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
              <Phone size={20} /> 02-518-0130
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}