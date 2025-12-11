'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import PageHeader from '@/components/PageHeader';
import { 
  Users, 
  Calendar, 
  FileText, 
  Phone, 
  ChevronDown, 
  ArrowRight,
  Landmark,
  Wallet,
  Building2,
  PieChart,
  CheckCircle2,
  AlertCircle,
  Calculator,
  TrendingDown // 절세 아이콘 추가
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

export default function SangsokPage() {
  return (
    <div className="bg-white min-h-screen">
      <PageHeader 
        title="상속세" 
        subTitle="평생을 일궈온 자산, 세금으로 잃지 않고 온전히 가족에게 전해드립니다." 
      />
      
      {/* 1. 과세 대상 자산 */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-slate-50"></div>
        <div className="absolute inset-0 bg-[url('/images/pattern-grid.png')] opacity-5"></div>
        <div className="container mx-auto px-6 relative z-10">
          <p className="text-center text-[#D4A857] font-bold tracking-widest text-[11px] uppercase mb-3">Taxable Assets</p>
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 mb-4 text-center">상속세 과세 자산</h2>
          <p className="text-slate-500 text-center mb-12">피상속인의 모든 경제적 가치가 있는 재산이 포함됩니다.</p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
            {[
              { icon: Building2, title: "부동산", desc: "아파트, 상가, 토지 등" },
              { icon: Wallet, title: "금융자산", desc: "예금, 주식, 보험금, 신탁" },
              { icon: PieChart, title: "간주상속재산", desc: "퇴직금, 생명보험금 등" },
              { icon: Landmark, title: "추정산입", desc: "사망 전 처분재산 (용도불분명)" }
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

      {/* [UPDATED] 2. 상속세 체크리스트 섹션 (기준선 제시) */}
      <section className="py-16 md:py-24 bg-white border-y border-slate-100">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="flex items-center gap-3 mb-4">
            <span className="p-2 bg-[#D4A857]/10 text-[#D4A857] rounded-lg"><CheckCircle2 size={24}/></span>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-900">
              상속세 위험도 자가진단
            </h2>
          </div>

          <p className="text-slate-600 mb-10 leading-relaxed pl-1 text-lg">
            상속세는 미리 준비하지 않으면 <span className="font-bold text-[#D4A857] bg-[#FFF9EA] px-1">자산의 최대 50%</span>가 세금으로 사라질 수 있습니다.<br className="hidden md:block" />
            아래 항목 중 <span className="font-bold text-[#D4A857] border-b-2 border-[#D4A857]/30">2개 이상</span> 해당된다면, 지금은 전문가와 상속 설계를 시작해야 할 시점입니다.
          </p>

          <div className="grid md:grid-cols-2 gap-4 mb-8">
            {[
              "총 자산 규모가 10억 원(배우자 생존 시)을 초과합니까?",
              "총 자산 규모가 5억 원(배우자 부재 시)을 초과합니까?",
              "사망 전 10년 이내에 자녀나 배우자에게 증여한 재산이 있습니까?",
              "상속인 간에 재산 분배에 대한 의견 차이가 예상됩니까?",
              "상속세 납부를 위한 현금 유동성이 부족합니까?"
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
              상속세는 '사망 시점'이 아닌 '10년 전'부터 준비해야 합니다. 
              미리 준비된 상속 플랜만이 수억 원의 세금을 아낄 수 있습니다.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/consult?type=inherit-plan"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-[#D4A857] text-sm md:text-base font-bold text-[#D4A857] hover:bg-[#D4A857] hover:text-white transition-all"
            >
              <Calculator size={18}/>
              예상 상속세 무료 진단
            </Link>

            <Link
              href="/consult?type=inherit-gift"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#D4A857] text-sm md:text-base font-bold text-white hover:bg-[#C19545] shadow-lg shadow-[#D4A857]/20 transition-all"
            >
              상속 전문 세무사 1:1 상담 <ArrowRight size={18}/>
            </Link>
          </div>
        </div>
      </section>

      {/* [UPDATED] 3. 과세표준 산정 방법 (요약 정보 추가) */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <p className="text-center text-[#D4A857] font-bold tracking-widest text-[11px] uppercase mb-3">Calculation Process</p>
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 mb-4 text-center">과세 표준 산정 방법</h2>
          <p className="text-slate-500 text-center mb-12">상속세는 공제 항목을 얼마나 잘 활용하느냐가 핵심입니다.</p>
          
          <div className="max-w-4xl mx-auto">
            {/* 요약 정보 Bullets (Perplexity 제안 반영) */}
            <div className="flex flex-wrap justify-center gap-4 mb-10">
               <span className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full text-xs md:text-sm text-slate-600 border border-slate-200 font-medium">
                 <CheckCircle2 size={16} className="text-[#D4A857]" />
                 과세표준에 따라 10% ~ 50% 누진세율 적용
               </span>
               <span className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full text-xs md:text-sm text-slate-600 border border-slate-200 font-medium">
                 <CheckCircle2 size={16} className="text-[#D4A857]" />
                 신고기한: 상속개시일로부터 6개월 이내 (국내 거주자)
               </span>
            </div>

            {/* 계산 플로우 */}
            <div className="grid md:grid-cols-5 gap-4 items-center mb-10">
              <div className="bg-white border border-slate-200 p-5 rounded-xl text-center shadow-sm relative group hover:border-[#D4A857] transition-colors">
                <div className="text-[#D4A857] text-xs font-bold mb-1">STEP 1</div>
                <div className="font-bold text-slate-900">상속재산가액</div>
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-white md:hidden"></div>
              </div>
              <div className="hidden md:flex justify-center text-slate-300">
                <ArrowRight />
              </div>
              <div className="bg-white border border-slate-200 p-5 rounded-xl text-center shadow-sm relative group hover:border-[#D4A857] transition-colors">
                <div className="text-[#D4A857] text-xs font-bold mb-1">STEP 2</div>
                <div className="font-bold text-slate-900">(-) 각종 공제</div>
              </div>
              <div className="hidden md:flex justify-center text-slate-300">
                <ArrowRight />
              </div>
              <div className="bg-[#D4A857] text-white p-5 rounded-xl text-center shadow-lg transform md:scale-105">
                <div className="text-white/80 text-xs font-bold mb-1">RESULT</div>
                <div className="font-bold text-xl">과세표준</div>
              </div>
            </div>
            
            {/* 상세 설명 카드 */}
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: "상속재산가액", desc: "사망일(상속개시일) 현재의 시가를 기준으로 평가합니다. 부동산, 예금, 주식뿐만 아니라 사망 전 처분한 재산이나 사전 증여한 재산도 합산될 수 있습니다.", highlight: true },
                { title: "일괄공제", desc: "배우자와 자녀가 있는 경우 최소 10억 원(일괄공제 5억 + 배우자공제 최소 5억)까지 공제가 가능합니다. 자녀만 있는 경우는 5억 원이 공제됩니다.", highlight: true },
                { title: "배우자상속공제", desc: "배우자가 실제 상속받은 금액을 공제하되, 최소 5억 원에서 최대 30억 원까지 공제받을 수 있어 절세의 핵심 포인트가 됩니다.", highlight: false },
                { title: "금융재산상속공제", desc: "상속 재산 중 순금융재산(예금, 주식 등)이 포함된 경우, 그 가액의 20%(최대 2억 원)를 추가로 공제해 줍니다.", highlight: false }
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

      {/* 4. 전문가 필요 이유 */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[#050B16]"></div>
        <div className="absolute inset-0 bg-[url('/images/pattern-dark.png')] opacity-10"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
            {/* 세무사 이미지 */}
            <div className="relative order-2 md:order-1">
              <div className="aspect-[4/5] md:aspect-[3/4] rounded-lg overflow-hidden shadow-2xl border border-white/10">
                <Image 
                  src="/images/yoodongsu-sangsok.webp" 
                  alt="상속세 전문 유동수 세무사"
                  width={800}
                  height={1000}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="absolute -bottom-6 -right-4 md:bottom-8 md:-right-8 bg-[#D4A857] text-white p-5 md:p-6 rounded-xl shadow-xl border border-white/20 backdrop-blur-sm">
                <div className="text-3xl md:text-4xl font-bold font-serif mb-1">25<span className="text-lg font-sans font-normal ml-1">년</span></div>
                <div className="text-xs md:text-sm text-white/90">국세청 조사국 경력</div>
              </div>
            </div>
            
            {/* 텍스트 */}
            <div className="text-white order-1 md:order-2">
              <p className="text-[#D4A857] font-bold tracking-widest text-[11px] uppercase mb-4">Why Expert?</p>
              <h2 className="text-2xl md:text-4xl font-serif font-bold mb-8 leading-tight">
                상속세, 국세청 출신 전문가에게<br/>
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
                    세무사의 <strong className="text-white">실력에 따라 절세할 수 있는 금액이 수천만 원에서 수억 원까지 차이</strong>가 나는 이유입니다.
                  </p>
                  <p>
                    상속세는 전략에 따라 절세 금액이 크게 달라지기 때문에 반드시 
                    <strong className="text-white"> 전문가에게 맡겨야 최대의 절세</strong> 효과를 누리실 수 있습니다.
                  </p>
                  <p className="text-[#D4A857] font-medium text-lg pt-2">
                    단순한 세금 신고가 아닌, 가족의 평화를 지키는 자산 배분 솔루션을 제공합니다.
                  </p>
                </div>
              </CollapsibleText>
              
              <div className="mt-8 flex flex-wrap gap-3">
                {["10년 장기 플랜", "가업상속공제", "유류분 반환 청구 대응", "사전 증여 전략"].map((tag, i) => (
                  <span key={i} className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-slate-300">
                    # {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* [UPDATED] 5. 절세 효과 시뮬레이션 표 (절감액 명시) */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <p className="text-center text-[#D4A857] font-bold tracking-widest text-[11px] uppercase mb-3">Simulation</p>
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 mb-4 text-center">
            전략에 따른 상속세 절세 효과
          </h2>
          <p className="text-slate-500 mb-10 text-center max-w-2xl mx-auto">
            자산 30억 원 보유 가정 시, 사전 준비 여부에 따른 예상 세액 비교입니다.
            (배우자, 자녀 2명 가정)
          </p>

          <div className="overflow-hidden rounded-xl bg-white border border-slate-200 shadow-lg mb-6">
            <table className="min-w-full text-left text-sm md:text-base">
              <thead className="bg-slate-900 text-white">
                <tr>
                  <th className="px-6 py-4 font-bold w-1/3">구분</th>
                  <th className="px-6 py-4 font-bold text-center w-1/3">예상 상속세</th>
                  <th className="px-6 py-4 font-bold text-right w-1/3">최종 납부액</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr className="group hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-5 font-medium text-slate-600">준비 없이 상속 시</td>
                  <td className="px-6 py-5 text-center text-slate-500">4억 5,000만 원</td>
                  <td className="px-6 py-5 text-right font-medium text-slate-600">4억 5,000만 원</td>
                </tr>
                <tr className="bg-[#FFF9EA] group">
                  <td className="px-6 py-5 font-bold text-[#D4A857] flex items-center gap-2">
                    <CheckCircle2 size={18}/> 사전 증여 플랜 실행
                  </td>
                  <td className="px-6 py-5 text-center font-bold text-slate-900">1억 2,000만 원</td>
                  <td className="px-6 py-5 text-right font-bold text-[#D4A857] text-lg">1억 2,000만 원</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* [NEW] 절감액 강조 문구 */}
          <div className="text-center p-4 bg-slate-50 rounded-xl border border-slate-200">
             <div className="flex items-center justify-center gap-2 text-slate-800 text-base md:text-lg">
                <TrendingDown className="text-[#D4A857]" />
                사전 플랜 실행 시, 약 <span className="font-bold text-[#D4A857] underline decoration-2 decoration-[#D4A857]/30 underline-offset-4">3억 3,000만 원</span>의 절세 효과가 발생합니다.
             </div>
          </div>

          <div className="mt-6 flex justify-between items-start gap-4 text-xs md:text-sm text-slate-400 px-2">
            <p>* 위 금액은 이해를 돕기 위한 예시이며, 실제 절세액은 자산 구성과 가족 상황에 따라 달라집니다.</p>
            <Link href="/consult?type=inherit-plan" className="shrink-0 text-[#D4A857] font-bold hover:underline">
              내 상속세 계산해보기 →
            </Link>
          </div>
        </div>
      </section>

      {/* 6. 절세 노하우 Cards */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <p className="text-center text-[#D4A857] font-bold tracking-widest text-[11px] uppercase mb-3">Key Strategies</p>
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 mb-2 text-center">
            상속세 <span className="text-[#D4A857]">주요 절세 노하우</span>
          </h2>
          <p className="text-slate-500 text-center mb-12">상속세는 아는 만큼 줄일 수 있습니다.</p>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { 
                num: "01", 
                title: "사전 증여 활용", 
                desc: "재산 가치가 상승하기 전에 미리 자녀에게 증여하여 상속 재산 규모를 줄이는 것이 가장 확실한 방법입니다. 단, 상속 개시 10년 전 증여분은 합산되므로 빠른 실행이 중요합니다.",
                checks: ["10년 주기 증여 공제 활용", "자산 가치 상승 예상 시 조기 증여", "손주 증여(세대 생략) 검토"]
              },
              { 
                num: "02", 
                title: "배우자 공제 극대화", 
                desc: "배우자상속공제는 최소 5억 원에서 최대 30억 원까지 가능합니다. 배우자의 노후 자금과 2차 상속(배우자 사망 시)까지 고려한 최적의 배분 비율을 찾아야 합니다.",
                checks: ["법정 상속 지분 확보", "2차 상속세 시뮬레이션", "배우자 고유 재산 인정 여부"]
              },
              { 
                num: "03", 
                title: "가업상속공제 활용", 
                desc: "중소·중견기업을 운영 중이라면 가업상속공제 요건을 사전에 충족하여 최대 600억 원까지 공제받을 수 있습니다. 사후 관리 요건이 까다로워 전문가의 지속적인 관리가 필요합니다.",
                checks: ["피상속인 경영 기간 충족", "주식 보유 비율 유지", "사후 고용 유지 요건 검토"]
              }
            ].map((card, idx) => (
              <div key={idx} className="bg-white border border-slate-200 rounded-xl p-8 hover:border-[#D4A857] hover:shadow-xl hover:-translate-y-1 transition-all group">
                <div className="text-[#D4A857] font-bold text-4xl mb-5 font-serif opacity-50 group-hover:opacity-100 transition-opacity">"{card.num}"</div>
                <h3 className="font-bold text-xl text-slate-900 mb-4">{card.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 h-20 md:h-24 overflow-hidden">
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
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-white mb-2 text-center">상속세 세율 구조</h2>
          <p className="text-slate-400 text-center mb-10">과세표준 구간별 누진세율이 적용됩니다.</p>
          
          <div className="max-w-3xl mx-auto bg-white/5 backdrop-blur-md rounded-xl overflow-hidden border border-white/10">
            <table className="w-full text-sm text-white">
              <thead className="bg-[#D4A857] text-slate-900">
                <tr>
                  <th className="py-4 px-6 text-left font-bold">과세표준</th>
                  <th className="py-4 px-6 text-right font-bold">세율</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                {[
                  { range: "1억원 이하", rate: "10%" },
                  { range: "1억원 초과 ~ 5억원 이하", rate: "20%" },
                  { range: "5억원 초과 ~ 10억원 이하", rate: "30%" },
                  { range: "10억원 초과 ~ 30억원 이하", rate: "40%" },
                  { range: "30억원 초과", rate: "50%" }
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
            ※ 누진공제액을 차감하면 실제 납부 세액은 더 낮아질 수 있습니다.
          </p>
        </div>
      </section>

      {/* 8. 신고 절차 */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6">
          <p className="text-center text-[#D4A857] font-bold tracking-widest text-[11px] uppercase mb-3">How to Report</p>
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 mb-2 text-center">상속세 신고 절차</h2>
          <p className="text-slate-500 text-center mb-12">기한 내 신고가 가산세를 피하는 첫걸음입니다.</p>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-slate-50 p-8 rounded-xl border border-slate-100 hover:border-[#D4A857] transition-colors group">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-white rounded-lg shadow-sm text-[#D4A857] group-hover:bg-[#D4A857] group-hover:text-white transition-colors">
                  <Calendar size={28} />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-slate-900">신고 기간</h3>
                  <p className="text-[#D4A857] text-sm font-medium">상속개시일로부터 6개월</p>
                </div>
              </div>
              <p className="text-slate-600 leading-relaxed text-sm">
                상속개시일(사망일)이 속하는 달의 말일부터 <strong className="text-slate-900 bg-[#FFF9EA]">6개월 이내</strong>에 
                신고·납부해야 합니다. (피상속인이 비거주자인 경우 9개월)
              </p>
            </div>
            
            <div className="bg-slate-50 p-8 rounded-xl border border-slate-100 hover:border-[#D4A857] transition-colors group">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-white rounded-lg shadow-sm text-[#D4A857] group-hover:bg-[#D4A857] group-hover:text-white transition-colors">
                  <FileText size={28} />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-slate-900">신고 방법</h3>
                  <p className="text-[#D4A857] text-sm font-medium">세무서 방문 또는 홈택스</p>
                </div>
              </div>
              <p className="text-slate-600 leading-relaxed text-sm">
                상속세는 재산 평가가 복잡하므로, <strong className="text-slate-900">세무 대리인을 통한 신고</strong>가 
                일반적입니다. 평가액에 따라 세액 차이가 큽니다.
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
              { q: "외국에 있는 재산도 상속세 대상인가요?", a: "네, 피상속인(돌아가신 분)이 국내 거주자인 경우 국내외 모든 재산이 상속세 과세 대상입니다. 다만, 외국에서 납부한 상속세는 외국납부세액공제를 통해 이중과세를 방지할 수 있습니다." },
              { q: "상속세를 제때 납부하지 않으면 어떻게 되나요?", a: "신고·납부 기한을 넘기면 무신고가산세(20~40%)와 납부불성실가산세(1일 0.022%)가 부과됩니다. 또한 국세청은 상속재산에 대해 압류 등 강제 징수 절차를 진행할 수 있습니다." },
              { q: "상속세는 누가 납부해야 하나요?", a: "상속세는 상속인 각자가 받았거나 받을 재산의 비율에 따라 연대하여 납부할 의무가 있습니다. 즉, 한 상속인이 본인 몫을 안 내면 다른 상속인이 대신 내야 할 수도 있습니다." }
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
            상속세 고민, 혼자 앓지 마시고 전문가와 상의하세요.<br className="hidden md:block"/>
            가족의 평화와 자산을 지켜드립니다.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/consult?type=inherit-plan" className="px-8 py-4 bg-[#D4A857] text-white font-bold rounded-sm hover:bg-[#C19545] transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#D4A857]/20">
              상속세 전문 상담 예약 <ArrowRight size={18} />
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