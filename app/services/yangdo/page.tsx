'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import PageHeader from '@/components/PageHeader';
import { 
  CheckCircle2, 
  Calendar, 
  FileText, 
  Phone, 
  ChevronDown, 
  ArrowRight, 
  TrendingUp, 
  Home, 
  Building2, 
  BarChart3,
  Calculator,
  AlertCircle
} from 'lucide-react';

// [기능] 모바일용 더보기 아코디언 컴포넌트
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

export default function YangdoPage() {
  return (
    <div className="bg-white min-h-screen">
      <PageHeader 
        title="양도소득세" 
        subTitle="부동산, 주식 등 자산을 양도함으로써 발생하는 소득에 부과되는 세금입니다." 
      />
      
      {/* 1. 대상 자산 섹션 (Alta Style) */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-slate-50"></div>
        <div className="absolute inset-0 bg-[url('/images/pattern-grid.png')] opacity-5"></div>
        <div className="container mx-auto px-6 relative z-10">
          <p className="text-center text-[#D4A857] font-bold tracking-widest text-[11px] uppercase mb-3">Target Assets</p>
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 mb-4 text-center">양도세 대상 자산</h2>
          <p className="text-slate-500 text-center mb-12">주택, 건물, 토지, 주식 등 다양한 자산이 포함됩니다.</p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
            {[
              { icon: Home, title: "주택", desc: "아파트, 빌라, 단독주택" },
              { icon: Building2, title: "건물", desc: "상가, 오피스텔, 빌딩" },
              { icon: TrendingUp, title: "토지", desc: "농지, 임야, 나대지" },
              { icon: BarChart3, title: "주식", desc: "상장주식, 비상장주식" }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 text-center hover:shadow-md hover:-translate-y-1 transition-all duration-300 group">
                <item.icon size={36} className="text-[#D4A857] mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
                <p className="text-xs text-slate-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* [NEW] 2. 양도 전 체크리스트 섹션 */}
      <section className="py-16 md:py-24 bg-white border-y border-slate-100">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="flex items-center gap-3 mb-4">
            <span className="p-2 bg-[#D4A857]/10 text-[#D4A857] rounded-lg"><CheckCircle2 size={24}/></span>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-900">
              양도 전, 꼭 확인해야 할 5가지
            </h2>
          </div>

          <p className="text-slate-600 mb-10 leading-relaxed pl-1 text-lg">
            아래 항목 중 <span className="font-bold text-[#D4A857] bg-[#FFF9EA] px-1">3개 이상</span>에 해당된다면, 
            단순 신고만으로는 세금을 줄이기 어렵거나 추후 문제가 될 수 있습니다.<br className="hidden md:block" />
            계약서 작성 전에 세후 실수령액을 반드시 확인하세요.
          </p>

          <div className="grid md:grid-cols-2 gap-4 mb-8">
            {[
              "1세대 1주택으로 2년 이상 보유(거주) 하셨나요?",
              "장기보유특별공제 적용 가능 여부를 확인하셨나요?",
              "매매계약서상의 계약일·잔금일이 정확히 정리되어 있나요?",
              "취득가액, 취득 부대비용 등 증빙서류를 갖추고 계신가요?",
              "과거 5년 내 배우자·자녀에게 증여한 이력이 있으신가요?"
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
              체크된 항목이 많을수록 전문가의 사전 전략이 필수적입니다. 양도 계약 전에 무료 상담으로 안전하게 점검해 보세요.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/consult?type=yangdo-check"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-[#D4A857] text-sm md:text-base font-bold text-[#D4A857] hover:bg-[#D4A857] hover:text-white transition-all"
            >
              <Calculator size={18}/>
              세후 실수령액 무료 계산 받기
            </Link>

            <Link
              href="/consult?type=yangdo"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#D4A857] text-sm md:text-base font-bold text-white hover:bg-[#C19545] shadow-lg shadow-[#D4A857]/20 transition-all"
            >
              양도소득세 1:1 상담 신청 <ArrowRight size={18}/>
            </Link>
          </div>
        </div>
      </section>

      {/* 3. 계산 방법 */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <p className="text-center text-[#D4A857] font-bold tracking-widest text-[11px] uppercase mb-3">Calculation Process</p>
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 mb-4 text-center">양도세 계산 방법</h2>
          <p className="text-slate-500 text-center mb-12">복잡한 양도세, 3단계로 핵심만 정리했습니다.</p>
          
          <div className="max-w-4xl mx-auto">
            {/* 계산 플로우 */}
            <div className="grid md:grid-cols-5 gap-4 items-center mb-10">
              <div className="bg-white border border-slate-200 p-5 rounded-xl text-center shadow-sm relative group hover:border-[#D4A857] transition-colors">
                <div className="text-[#D4A857] text-xs font-bold mb-1">STEP 1</div>
                <div className="font-bold text-slate-900">양도가액</div>
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-white md:hidden"></div>
              </div>
              <div className="hidden md:flex justify-center text-slate-300">
                <ArrowRight />
              </div>
              <div className="bg-white border border-slate-200 p-5 rounded-xl text-center shadow-sm relative group hover:border-[#D4A857] transition-colors">
                <div className="text-[#D4A857] text-xs font-bold mb-1">STEP 2</div>
                <div className="font-bold text-slate-900">(-) 취득가액</div>
              </div>
              <div className="hidden md:flex justify-center text-slate-300">
                <ArrowRight />
              </div>
              <div className="bg-[#D4A857] text-white p-5 rounded-xl text-center shadow-lg transform md:scale-105">
                <div className="text-white/80 text-xs font-bold mb-1">RESULT</div>
                <div className="font-bold text-xl">양도차익</div>
              </div>
            </div>
            
            {/* 상세 설명 카드 */}
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: "양도가액이란?", desc: "자산을 양도(매도)할 때 실제로 받은 금액을 말합니다. 실거래가를 기준으로 하며, 계약서에 명시된 매매대금이 이에 해당합니다.", highlight: true },
                { title: "취득가액이란?", desc: "자산을 취득할 때 지출한 금액입니다. 매매대금뿐만 아니라 취득세, 등록세, 중개수수료 등 취득에 소요된 부대비용도 인정됩니다.", highlight: true },
                { title: "필요경비", desc: "양도 과정에서 발생한 경비로, 중개수수료, 양도소득세 신고대리 비용, 자본적 지출액(샤시 설치, 난방 공사 등)이 포함됩니다.", highlight: false },
                { title: "과세표준", desc: "양도차익에서 장기보유특별공제와 기본공제(연 250만원)를 차감한 금액입니다. 이 금액에 세율을 곱해 최종 세액이 결정됩니다.", highlight: false }
              ].map((item, idx) => (
                <div key={idx} className={`bg-white p-6 rounded-xl shadow-sm border ${item.highlight ? 'border-[#D4A857]/50' : 'border-slate-100'}`}>
                  <h4 className={`font-bold text-lg mb-3 ${item.highlight ? 'text-[#D4A857]' : 'text-slate-900'}`}>{item.title}</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. 전문가 필요 이유 (사진 적용됨) */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[#050B16]"></div>
        <div className="absolute inset-0 bg-[url('/images/pattern-dark.png')] opacity-10"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
            {/* 세무사 이미지: yoodongsu-yangdo.jpg 적용 */}
            <div className="relative order-2 md:order-1">
              <div className="aspect-[4/5] md:aspect-[3/4] rounded-lg overflow-hidden shadow-2xl border border-white/10">
                <Image 
                  src="/images/yoodongsu_yangdo.jpg" 
                  alt="유동수 대표 세무사"
                  width={800}
                  height={1000}
                  className="w-full h-full object-cover"
                  quality={100}
                  priority
                />
              </div>
              {/* 플로팅 배지 */}
              <div className="absolute -bottom-6 -right-4 md:bottom-8 md:-right-8 bg-[#D4A857] text-white p-5 md:p-6 rounded-xl shadow-xl border border-white/20 backdrop-blur-sm">
                <div className="text-3xl md:text-4xl font-bold font-serif mb-1">25<span className="text-lg font-sans font-normal ml-1">년</span></div>
                <div className="text-xs md:text-sm text-white/90">국세청 조사국 경력</div>
              </div>
            </div>
            
            {/* 텍스트 */}
            <div className="text-white order-1 md:order-2">
              <p className="text-[#D4A857] font-bold tracking-widest text-[11px] uppercase mb-4">Why Expert?</p>
              <h2 className="text-2xl md:text-4xl font-serif font-bold mb-8 leading-tight">
                양도세, 국세청 출신 전문가에게<br/>
                <span className="text-[#D4A857]">맡겨야 하는 이유?</span>
              </h2>
              
              <CollapsibleText>
                <div className="space-y-6 text-slate-300">
                  <p>
                    세무사라면 누구나 활용하는 홈택스 정보 외에도, 개인별 상황에 맞게 
                    <strong className="text-white border-b border-[#D4A857]/50 pb-0.5"> 긴밀하게 들여다 봐야만 보이는 절세 방안</strong>이 있습니다.
                  </p>
                  <p>
                    이러한 요소들은 다양한 경험이 없다면 놓칠 수 있습니다. 
                    세무사의 <strong className="text-white">실력에 따라 절세할 수 있는 금액이 수백만 원에서 수천만 원까지 차이</strong>가 나는 이유입니다.
                  </p>
                  <p>
                    세무사들 사이에서도 &quot;양포자(양도세를 포기한 사람)&quot;라는 말이 있을 정도로 
                    양도세는 복잡하고 어려운 분야입니다.
                  </p>
                  <p className="text-[#D4A857] font-medium text-lg pt-2">
                    반드시 전문가에게 맡겨야 최대의 절세 전략을 수립할 수 있습니다.
                  </p>
                </div>
              </CollapsibleText>
              
              <div className="mt-8 flex flex-wrap gap-3">
                {["비과세 요건 정밀 검토", "장기보유공제 최적화", "다주택자 중과 배제 전략"].map((tag, i) => (
                  <span key={i} className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-slate-300">
                    # {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* [NEW] 5. 세후 실수령액 시뮬레이션 표 */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <p className="text-center text-[#D4A857] font-bold tracking-widest text-[11px] uppercase mb-3">Simulation</p>
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 mb-4 text-center">
            세후 실수령액 시뮬레이션 예시
          </h2>
          <p className="text-slate-500 mb-10 text-center max-w-2xl mx-auto">
            실제 상담에서는 양도가액, 보유기간, 주택 수, 가족 상황에 따라 수십 가지 시나리오를 계산합니다.
            아래 예시는 구조를 이해하기 위한 단순한 비교입니다.
          </p>

          <div className="overflow-hidden rounded-xl bg-white border border-slate-200 shadow-lg">
            <table className="min-w-full text-left text-sm md:text-base">
              <thead className="bg-slate-900 text-white">
                <tr>
                  <th className="px-6 py-4 font-bold w-1/3">시나리오</th>
                  <th className="px-6 py-4 font-bold text-center w-1/3">예상 세금</th>
                  <th className="px-6 py-4 font-bold text-right w-1/3">세후 실수령액</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr className="group hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-5 font-medium text-slate-600">단순 신고 시</td>
                  <td className="px-6 py-5 text-center text-slate-500">8,000만 원</td>
                  <td className="px-6 py-5 text-right font-medium text-slate-600">5억 2,000만 원</td>
                </tr>
                <tr className="bg-[#FFF9EA] group">
                  <td className="px-6 py-5 font-bold text-[#D4A857] flex items-center gap-2">
                    <CheckCircle2 size={18}/> 전략 적용 후
                  </td>
                  <td className="px-6 py-5 text-center font-bold text-slate-900">2,800만 원</td>
                  <td className="px-6 py-5 text-right font-bold text-[#D4A857] text-lg">5억 7,200만 원</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-6 flex justify-between items-start gap-4 text-xs md:text-sm text-slate-400 px-2">
            <p>* 위 금액은 이해를 돕기 위한 예시이며, 실제 절세액은 개인별 상황에 따라 달라집니다.</p>
            <Link href="/consult?type=yangdo-check" className="shrink-0 text-[#D4A857] font-bold hover:underline">
              내 세금 계산해보기 →
            </Link>
          </div>
        </div>
      </section>

      {/* 6. 절세 노하우 Cards */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <p className="text-center text-[#D4A857] font-bold tracking-widest text-[11px] uppercase mb-3">Key Strategies</p>
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 mb-2 text-center">
            양도세 <span className="text-[#D4A857]">주요 절세 노하우</span>
          </h2>
          <p className="text-slate-500 text-center mb-12">복잡한 양도세, 이런 방법으로 절세할 수 있습니다.</p>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { 
                num: "01", 
                title: "1세대 1주택 비과세", 
                desc: "1세대가 국내에 1주택만을 보유하면서 2년 이상 보유(조정대상지역은 2년 거주 필요)한 경우 양도소득세가 비과세됩니다.",
                checks: ["보유기간 2년 이상", "양도가액 12억원 이하", "조정지역 거주요건 충족"]
              },
              { 
                num: "02", 
                title: "장기보유특별공제", 
                desc: "보유 기간이 길수록 양도차익에서 공제받는 금액이 커집니다. 1세대 1주택자의 경우 최대 80%까지 공제받을 수 있습니다.",
                checks: ["일반: 연 2%, 최대 30%", "1주택: 연 4%, 최대 40%", "보유+거주 합산 최대 80%"]
              },
              { 
                num: "03", 
                title: "증여 및 상속 전략", 
                desc: "자산을 매도하기 전 가족에게 증여한 후 양도하면 취득가액이 높아져 양도차익을 줄일 수 있습니다.",
                checks: ["배우자 증여 후 양도", "자녀 분산 증여 활용", "이월과세 주의 필요"]
              }
            ].map((card, idx) => (
              <div key={idx} className="bg-white border border-slate-200 rounded-xl p-8 hover:border-[#D4A857] hover:shadow-xl hover:-translate-y-1 transition-all group">
                <div className="text-[#D4A857] font-bold text-4xl mb-5 font-serif opacity-50 group-hover:opacity-100 transition-opacity">"{card.num}"</div>
                <h3 className="font-bold text-xl text-slate-900 mb-4">{card.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 h-16 md:h-20 overflow-hidden">
                  {card.desc}
                </p>
                <div className="space-y-2 border-t border-slate-100 pt-4">
                  {card.checks.map((check, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-500">
                      <CheckCircle2 size={14} className="text-[#D4A857] shrink-0" />
                      <span>{check}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. 세율 구조 (테이블) */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-slate-900"></div>
        <div className="absolute inset-0 bg-[url('/images/building-bg.jpg')] bg-cover bg-center opacity-10"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <p className="text-center text-[#D4A857]/80 font-bold tracking-widest text-[11px] uppercase mb-3">Tax Rates</p>
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-white mb-2 text-center">양도세 세율 구조</h2>
          <p className="text-slate-400 text-center mb-10">과세표준 구간별 기본 세율입니다.</p>
          
          <div className="max-w-3xl mx-auto bg-white/5 backdrop-blur-md rounded-xl overflow-hidden border border-white/10">
            <table className="w-full text-sm text-white">
              <thead className="bg-[#D4A857] text-slate-900">
                <tr>
                  <th className="py-4 px-6 text-left font-bold">과세표준</th>
                  <th className="py-4 px-6 text-right font-bold">기본세율</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                {[
                  { range: "1,400만원 이하", rate: "6%" },
                  { range: "1,400만원 ~ 5,000만원", rate: "15%" },
                  { range: "5,000만원 ~ 8,800만원", rate: "24%" },
                  { range: "8,800만원 ~ 1.5억원", rate: "35%" },
                  { range: "1.5억원 ~ 3억원", rate: "38%" },
                  { range: "3억원 ~ 5억원", rate: "40%" },
                  { range: "5억원 ~ 10억원", rate: "42%" },
                  { range: "10억원 초과", rate: "45%" }
                ].map((row, idx) => (
                  <tr key={idx} className="hover:bg-white/5 transition-colors">
                    <td className="py-3 px-6 text-slate-300">{row.range}</td>
                    <td className="py-3 px-6 text-right text-[#D4A857] font-bold">{row.rate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <p className="text-center text-slate-500 text-xs mt-6">
            ※ 다주택자 중과, 단기보유 등 특수 상황에 따라 세율이 달라질 수 있습니다.
          </p>
        </div>
      </section>

      {/* 8. 신고 절차 */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6">
          <p className="text-center text-[#D4A857] font-bold tracking-widest text-[11px] uppercase mb-3">How to Report</p>
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 mb-2 text-center">양도세 신고 절차</h2>
          <p className="text-slate-500 text-center mb-12">기한 내 신고가 가산세를 피하는 첫걸음입니다.</p>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-slate-50 p-8 rounded-xl border border-slate-100 hover:border-[#D4A857] transition-colors group">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-white rounded-lg shadow-sm text-[#D4A857] group-hover:bg-[#D4A857] group-hover:text-white transition-colors">
                  <Calendar size={28} />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-slate-900">신고 기간</h3>
                  <p className="text-[#D4A857] text-sm font-medium">반드시 기한 내 신고</p>
                </div>
              </div>
              <p className="text-slate-600 leading-relaxed text-sm">
                양도일이 속하는 달의 말일부터 <strong className="text-slate-900 bg-[#FFF9EA]">2개월 이내</strong>에 
                예정신고를 해야 합니다. 미신고 시 가산세(20%)가 부과됩니다.
              </p>
            </div>
            
            <div className="bg-slate-50 p-8 rounded-xl border border-slate-100 hover:border-[#D4A857] transition-colors group">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-white rounded-lg shadow-sm text-[#D4A857] group-hover:bg-[#D4A857] group-hover:text-white transition-colors">
                  <FileText size={28} />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-slate-900">신고 방법</h3>
                  <p className="text-[#D4A857] text-sm font-medium">온라인 또는 방문</p>
                </div>
              </div>
              <p className="text-slate-600 leading-relaxed text-sm">
                홈택스를 통한 <strong className="text-slate-900">전자 신고</strong> 또는 관할 세무서 방문 신고가 가능합니다. 
                복잡한 계산은 전문가에게 의뢰하는 것이 안전합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 9. FAQ */}
      <section className="py-16 md:py-24 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 mb-10 text-center">자주 묻는 질문</h2>
          
          <div className="space-y-4">
            {[
              { q: "1세대 1주택 비과세 요건은 정확히 무엇인가요?", a: "1세대가 양도일 현재 국내에 1주택을 보유하고, 보유기간이 2년 이상이어야 합니다. 취득 당시 조정대상지역이었다면 거주기간도 2년 이상이어야 합니다. 단, 양도가액 12억 원 초과분은 과세됩니다." },
              { q: "일시적 2주택 비과세 기간은 어떻게 되나요?", a: "신규 주택 취득일로부터 3년 이내(종전 주택과 신규 주택 모두 조정대상지역인 경우도 3년으로 완화됨)에 종전 주택을 처분하면 비과세 혜택을 받을 수 있습니다." },
              { q: "분양권도 주택 수에 포함되나요?", a: "2021년 1월 1일 이후 취득한 분양권은 양도소득세 비과세 및 중과 여부 판단 시 주택 수에 포함됩니다. 따라서 분양권 보유 시 다른 주택 매도에 주의해야 합니다." }
            ].map((item, idx) => (
              <details key={idx} className="group bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none hover:bg-slate-50 transition-colors">
                  <span className="font-bold text-slate-900 flex gap-3">
                    <span className="text-[#D4A857]">Q.</span> {item.q}
                  </span>
                  <ChevronDown size={20} className="text-slate-400 group-open:rotate-180 transition-transform" />
                </summary>
                <div className="px-6 pb-6 pl-12 text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-4 bg-slate-50/50">
                  {item.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 10. 하단 CTA */}
      <section className="py-20 bg-[#050B16] text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl md:text-4xl font-serif font-bold text-white mb-6">
            국세청 출신 25년 경력의<br/>
            <span className="text-[#D4A857]">대표 세무사가 직접 상담합니다.</span>
          </h2>
          <p className="text-slate-400 mb-10 max-w-xl mx-auto">
            양도세는 계약 전에 검토해야 가장 큰 절세 효과를 볼 수 있습니다.<br className="hidden md:block"/>
            늦지 않게 전문가와 상의하세요.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/consult?type=yangdo" className="px-8 py-4 bg-[#D4A857] text-white font-bold rounded-sm hover:bg-[#C19545] transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#D4A857]/20">
              양도세 절세 상담 예약 <ArrowRight size={18} />
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