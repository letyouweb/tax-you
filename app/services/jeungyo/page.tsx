'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import PageHeader from '@/components/PageHeader';
import { 
  Gift, 
  Calendar, // [수정] 누락된 Calendar 추가됨
  FileText, 
  Phone, 
  ChevronDown, 
  ArrowRight, 
  TrendingUp, 
  CheckCircle2, 
  AlertCircle, 
  Calculator,
  PiggyBank,
  TrendingDown
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

export default function JeunyoPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* 헤더 카피 업그레이드: 전략과 타이밍 강조 */}
      <PageHeader 
        title="증여세" 
        subTitle='증여세는 "언제, 얼마나, 누구에게"가 핵심입니다. 10년 단위 공제를 활용해 자산을 가장 유리한 타이밍에 이전하세요.' 
      />
      
      {/* 1. 증여세 과세 자산 (Alta Style) */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-slate-50"></div>
        <div className="absolute inset-0 bg-[url('/images/pattern-grid.png')] opacity-5"></div>
        <div className="container mx-auto px-6 relative z-10">
          <p className="text-center text-[#D4A857] font-bold tracking-widest text-[11px] uppercase mb-3">Taxable Assets</p>
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 mb-4 text-center">증여세 과세 자산</h2>
          <p className="text-slate-500 text-center mb-12">경제적 가치가 있는 모든 유형·무형의 재산이 포함됩니다.</p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
            {[
              { icon: PiggyBank, title: "현금/예금", desc: "계좌 이체 및 현금 증여" },
              { icon: TrendingUp, title: "부동산", desc: "아파트, 상가, 토지 등" },
              { icon: FileText, title: "주식/채권", desc: "상장/비상장 주식, 국공채" },
              { icon: Gift, title: "기타 자산", desc: "회원권, 특허권, 보험금 등" }
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

      {/* 2. 사전 증여 체크리스트 (기준선 제시) */}
      <section className="py-16 md:py-24 bg-white border-y border-slate-100">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="flex items-center gap-3 mb-4">
            <span className="p-2 bg-[#D4A857]/10 text-[#D4A857] rounded-lg"><CheckCircle2 size={24}/></span>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-900">
              사전 증여, 지금 해야 할까요?
            </h2>
          </div>

          <p className="text-slate-600 mb-10 leading-relaxed pl-1 text-lg">
            자산 가치가 상승하기 전, 그리고 하루라도 젊을 때 증여하는 것이 절세의 핵심입니다.<br className="hidden md:block" />
            아래 항목 중 <span className="font-bold text-[#D4A857] border-b-2 border-[#D4A857]/30">하나라도 해당된다면</span> 지금 바로 증여 플랜을 세워야 합니다.
          </p>

          <div className="grid md:grid-cols-2 gap-4 mb-8">
            {[
              "보유 중인 부동산/주식의 가치가 앞으로 상승할 것으로 예상됩니까?",
              "향후 10년 이내에 자산 이전 계획(결혼, 주택 구입 등)이 있습니까?",
              "배우자 공제(6억 원)를 지난 10년 동안 활용하지 않으셨습니까?",
              "임대 소득이 발생하는 자산을 자녀에게 이전하여 소득세를 낮추고 싶습니까?",
              "다주택자로서 보유세(종부세) 부담을 줄이고 싶습니까?"
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
              증여세는 10년 주기로 공제 한도가 초기화됩니다. 
              빨리 시작할수록 더 많은 자산을 세금 없이 이전할 수 있습니다.
            </p>
          </div>

          {/* 링크 타입 변경: gift-check, gift-plan */}
          <div className="flex flex-wrap gap-4">
            <Link
              href="/consult?type=gift-check"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-[#D4A857] text-sm md:text-base font-bold text-[#D4A857] hover:bg-[#D4A857] hover:text-white transition-all"
            >
              <Calculator size={18}/>
              증여세 절세액 계산하기
            </Link>

            <Link
              href="/consult?type=gift-plan"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#D4A857] text-sm md:text-base font-bold text-white hover:bg-[#C19545] shadow-lg shadow-[#D4A857]/20 transition-all"
            >
              10년 증여 플랜 상담 <ArrowRight size={18}/>
            </Link>
          </div>
        </div>
      </section>

      {/* 3. 과세표준 및 공제한도 (Alta Style) */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <p className="text-center text-[#D4A857] font-bold tracking-widest text-[11px] uppercase mb-3">Deduction Limits</p>
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 mb-4 text-center">증여재산 공제 한도</h2>
          <p className="text-slate-500 text-center mb-12">10년 간의 누적 증여액에서 아래 금액만큼 공제됩니다.</p>
          
          <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden border border-slate-100">
            <table className="w-full text-sm md:text-base">
              <thead className="bg-slate-900 text-white">
                <tr>
                  <th className="py-4 px-6 text-left font-bold">수증자 (받는 사람)</th>
                  <th className="py-4 px-6 text-right font-bold">공제 한도 (10년 합산)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-4 px-6 font-medium text-slate-700">배우자</td>
                  <td className="py-4 px-6 text-right font-bold text-[#D4A857] text-lg">6억 원</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-4 px-6 font-medium text-slate-700">직계존속 (부모 → 자녀)</td>
                  <td className="py-4 px-6 text-right font-bold text-slate-900">5천만 원 <span className="text-xs font-normal text-slate-400">(미성년자 2천만 원)</span></td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-4 px-6 font-medium text-slate-700">직계비속 (자녀 → 부모)</td>
                  <td className="py-4 px-6 text-right font-bold text-slate-900">5천만 원</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-4 px-6 font-medium text-slate-700">기타 친족 (형제, 며느리 등)</td>
                  <td className="py-4 px-6 text-right font-bold text-slate-900">1천만 원</td>
                </tr>
              </tbody>
            </table>
            <div className="p-4 bg-slate-50 text-center text-xs text-slate-500 border-t border-slate-100">
              * 혼인·출산 시에는 1억 원의 추가 공제가 적용될 수 있습니다. (2024년 개정세법)
            </div>
          </div>
        </div>
      </section>

      {/* 4. 전문가 필요 이유 (사진 적용: hero-person.png 활용) */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[#050B16]"></div>
        <div className="absolute inset-0 bg-[url('/images/pattern-dark.png')] opacity-10"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
            {/* 세무사 이미지: hero-person.png + 배경 디자인 */}
            <div className="relative order-2 md:order-1 flex justify-center md:justify-end">
              <div className="relative w-full max-w-md">
                {/* 배경 원형 장식 */}
                <div className="absolute top-10 left-0 w-full h-[90%] bg-gradient-to-br from-[#1e293b] to-[#0f172a] rounded-t-full border border-white/5"></div>
                {/* 인물 사진 (누끼) */}
                <div className="relative z-10 pt-8">
                   <Image 
                    src="/images/hero-person.png" 
                    alt="증여세 전문 유동수 세무사"
                    width={500}
                    height={700}
                    className="object-contain drop-shadow-2xl mx-auto"
                  />
                </div>
                {/* 플로팅 배지 */}
                <div className="absolute bottom-10 -right-2 md:-right-6 bg-[#D4A857] text-white p-5 rounded-xl shadow-xl border border-white/20 backdrop-blur-sm z-20">
                  <div className="text-xl md:text-2xl font-bold font-serif mb-1">10년 플랜</div>
                  <div className="text-xs text-white/90">장기 절세 설계</div>
                </div>
              </div>
            </div>
            
            {/* 텍스트 */}
            <div className="text-white order-1 md:order-2">
              <p className="text-[#D4A857] font-bold tracking-widest text-[11px] uppercase mb-4">Why Expert?</p>
              <h2 className="text-2xl md:text-4xl font-serif font-bold mb-8 leading-tight">
                증여세, 국세청 출신 전문가에게<br/>
                <span className="text-[#D4A857]">맡겨야 하는 이유?</span>
              </h2>
              
              <CollapsibleText>
                <div className="space-y-6 text-slate-300">
                  <p>
                    증여세는 단순히 세금을 내는 문제가 아닙니다. 
                    <strong className="text-white border-b border-[#D4A857]/50 pb-0.5"> 자산 가치가 상승하기 전, 최적의 타이밍</strong>을 잡아 세금을 최소화하는 고도의 전략이 필요합니다.
                  </p>
                  <p>
                    부담부 증여, 법인 전환을 통한 증여 등 다양한 방법을 종합적으로 고려해야 합니다. 
                    세무사의 <strong className="text-white">경험에 따라 절세 금액이 수천만 원에서 수억 원까지 차이</strong>가 납니다.
                  </p>
                  <p className="text-[#D4A857] font-medium text-lg pt-2">
                    단순 신고 대행이 아닌, 고객님의 자산을 지키는 '10년 파트너'가 되어드립니다.
                  </p>
                </div>
              </CollapsibleText>
              
              <div className="mt-8 flex flex-wrap gap-3">
                {["부담부 증여 설계", "10년 장기 플랜", "가업 승계 전략", "자금 출처 조사 대비"].map((tag, i) => (
                  <span key={i} className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-slate-300">
                    # {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. 가치 상승분 절세 시뮬레이션 */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <p className="text-center text-[#D4A857] font-bold tracking-widest text-[11px] uppercase mb-3">Simulation</p>
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 mb-4 text-center">
            가치 상승 전 '사전 증여' 효과
          </h2>
          <p className="text-slate-500 mb-10 text-center max-w-2xl mx-auto">
            10억 원 아파트가 향후 20억 원으로 상승한다고 가정할 때, 증여 시점에 따른 세금 차이입니다.
          </p>

          <div className="overflow-hidden rounded-xl bg-white border border-slate-200 shadow-lg mb-6">
            <table className="min-w-full text-left text-sm md:text-base">
              <thead className="bg-slate-900 text-white">
                <tr>
                  <th className="px-6 py-4 font-bold w-1/3">구분</th>
                  <th className="px-6 py-4 font-bold text-center w-1/3">과세 기준 금액</th>
                  <th className="px-6 py-4 font-bold text-right w-1/3">예상 세금</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr className="group hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-5 font-medium text-slate-600">나중에 상속 시 (20억)</td>
                  <td className="px-6 py-5 text-center text-slate-500">20억 원</td>
                  <td className="px-6 py-5 text-right font-medium text-slate-600">약 6.4억 원</td>
                </tr>
                <tr className="bg-[#FFF9EA] group">
                  <td className="px-6 py-5 font-bold text-[#D4A857] flex items-center gap-2">
                    <CheckCircle2 size={18}/> 지금 증여 시 (10억)
                  </td>
                  <td className="px-6 py-5 text-center font-bold text-slate-900">10억 원</td>
                  <td className="px-6 py-5 text-right font-bold text-[#D4A857] text-lg">약 2.4억 원</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="text-center p-4 bg-slate-50 rounded-xl border border-slate-200">
             <div className="flex items-center justify-center gap-2 text-slate-800 text-base md:text-lg">
                <TrendingDown className="text-[#D4A857]" />
                가치 상승 전 미리 증여하면, 약 <span className="font-bold text-[#D4A857] underline decoration-2 decoration-[#D4A857]/30 underline-offset-4">4억 원</span>의 세금을 아낄 수 있습니다.
             </div>
          </div>

          <div className="mt-6 flex justify-between items-start gap-4 text-xs md:text-sm text-slate-400 px-2">
            <p>* 위 금액은 단순 공제만 반영한 예시이며, 실제 세액은 상황에 따라 다를 수 있습니다.</p>
            <Link href="/consult?type=gift-check" className="shrink-0 text-[#D4A857] font-bold hover:underline">
              내 증여세 계산해보기 →
            </Link>
          </div>
        </div>
      </section>

      {/* 6. 주요 절세 전략 Cards */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <p className="text-center text-[#D4A857] font-bold tracking-widest text-[11px] uppercase mb-3">Key Strategies</p>
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 mb-2 text-center">
            증여세 <span className="text-[#D4A857]">주요 절세 노하우</span>
          </h2>
          <p className="text-slate-500 text-center mb-12">합법적인 테두리 안에서 세금을 줄이는 방법은 다양합니다.</p>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { 
                num: "01", 
                title: "10년 주기 증여", 
                desc: "증여재산 공제는 10년마다 갱신됩니다. 자녀가 태어났을 때부터 10년 단위로 계획적으로 증여하면 성인이 되었을 때 세금 없이 1억 4천만 원 이상의 자금을 마련해줄 수 있습니다.",
                checks: ["미성년자 2천만 원 공제", "성인 5천만 원 공제", "10년 단위 플랜 수립"]
              },
              { 
                num: "02", 
                title: "부담부 증여 활용", 
                desc: "부동산을 증여할 때 전세보증금이나 대출(채무)을 함께 넘기면, 채무액을 뺀 금액에 대해서만 증여세가 부과되어 세금을 크게 낮출 수 있습니다.",
                checks: ["채무 부분은 양도세 과세", "세율 비교 분석 필수", "다주택자 절세 전략"]
              },
              { 
                num: "03", 
                title: "감정평가 활용", 
                desc: "아파트가 아닌 꼬마빌딩이나 토지 등은 시가가 불분명할 수 있습니다. 이때 감정평가를 통해 유리한 가액으로 신고하면 세금을 줄이거나 추후 세무조사 리스크를 없앨 수 있습니다.",
                checks: ["유사매매사례가액 검토", "감정가액 시뮬레이션", "상속세 절세 연계"]
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

      {/* 7. 신고 절차 */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6">
          <p className="text-center text-[#D4A857] font-bold tracking-widest text-[11px] uppercase mb-3">How to Report</p>
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 mb-2 text-center">증여세 신고 절차</h2>
          <p className="text-slate-500 text-center mb-12">기한 내 신고가 절세의 기본입니다.</p>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-slate-50 p-8 rounded-xl border border-slate-100 hover:border-[#D4A857] transition-colors group">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-white rounded-lg shadow-sm text-[#D4A857] group-hover:bg-[#D4A857] group-hover:text-white transition-colors">
                  <Calendar size={28} />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-slate-900">신고 기간</h3>
                  <p className="text-[#D4A857] text-sm font-medium">증여일이 속한 달의 말일부터 3개월</p>
                </div>
              </div>
              <p className="text-slate-600 leading-relaxed text-sm">
                예를 들어 5월 15일에 증여받았다면, <strong className="text-slate-900 bg-[#FFF9EA]">8월 31일까지</strong> 신고 및 납부를 마쳐야 합니다. 기한 경과 시 가산세가 부과됩니다.
              </p>
            </div>
            
            <div className="bg-slate-50 p-8 rounded-xl border border-slate-100 hover:border-[#D4A857] transition-colors group">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-white rounded-lg shadow-sm text-[#D4A857] group-hover:bg-[#D4A857] group-hover:text-white transition-colors">
                  <FileText size={28} />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-slate-900">신고 방법</h3>
                  <p className="text-[#D4A857] text-sm font-medium">홈택스 또는 세무서 방문</p>
                </div>
              </div>
              <p className="text-slate-600 leading-relaxed text-sm">
                증여계약서, 가족관계증명서, 이체 내역 등 증빙 서류를 갖추어 신고합니다. 
                재산 평가가 까다로운 경우 <strong className="text-slate-900">전문가 검토</strong>가 필수적입니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. FAQ */}
      <section className="py-16 md:py-24 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 mb-10 text-center">자주 묻는 질문</h2>
          
          <div className="space-y-4">
            {[
              { q: "증여세를 납부하지 않으면 어떻게 되나요?", a: "신고·납부 불이행 시 무신고가산세(20~40%)와 납부불성실가산세(1일 0.022%)가 부과됩니다. 특히 가족 간 계좌 이체 내역은 세무조사 시 주요 점검 대상이 되므로 주의해야 합니다." },
              { q: "증여세는 누가 납부해야 하나요?", a: "증여세는 재산을 받은 사람(수증자)이 납부하는 것이 원칙입니다. 만약 증여자가 세금을 대신 내주면, 그 세금만큼을 또 증여한 것으로 보아 세금이 추가될 수 있습니다." },
              { q: "현금을 인출해서 주면 증여세를 피할 수 있나요?", a: "국세청은 FIU(금융정보분석원) 시스템을 통해 고액 현금 거래를 모니터링합니다. 또한 자녀가 부동산 등을 취득할 때 자금 출처 조사를 통해 증여 사실이 드러날 가능성이 매우 높습니다." }
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

      {/* 9. 하단 CTA */}
      <section className="py-20 bg-[#050B16] text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl md:text-4xl font-serif font-bold text-white mb-6">
            국세청 출신 25년 경력의<br/>
            <span className="text-[#D4A857]">대표 세무사가 직접 상담합니다.</span>
          </h2>
          <p className="text-slate-400 mb-10 max-w-xl mx-auto">
            증여는 타이밍입니다. 가장 빠른 절세의 길,<br className="hidden md:block"/>
            유동수 세무회계와 함께 시작하세요.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/consult?type=gift-plan" className="px-8 py-4 bg-[#D4A857] text-white font-bold rounded-sm hover:bg-[#C19545] transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#D4A857]/20">
              증여세 전문 상담 예약 <ArrowRight size={18} />
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