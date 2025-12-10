'use client';

import Link from 'next/link';
import PageHeader from '@/components/PageHeader';
import { Shield, TrendingUp, Users, Lock, CheckCircle2, ArrowRight, Phone, HelpCircle, FileText } from 'lucide-react';

export default function Insight() {
  return (
    <div className="bg-white min-h-screen">
      <PageHeader 
        title="인사이트" 
        subTitle="국세청 25년 경험이 제시하는 구체적인 세무 전략" 
      />
      
      <div className="container mx-auto px-6 py-16 space-y-24">
        
        {/* ----------------------------------------------------------------------
            1. 주요 인사이트 4블록 (기존 구조 유지 + 텍스트 정돈)
        ----------------------------------------------------------------------- */}

        {/* 1-1. 세무조사 섹션 */}
        <section id="tax-investigation" className="scroll-mt-24">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-[#D4A857] rounded-lg text-white">
                  <Shield size={28} />
                </div>
                <span className="text-[#D4A857] font-bold text-sm tracking-widest uppercase">TAX INVESTIGATION</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 leading-tight">
                세무조사 통지서,<br />
                <span className="text-[#D4A857]">72시간이 골든타임입니다</span>
              </h2>
              
              <div className="space-y-4 text-slate-600 leading-relaxed text-lg">
                <p>
                  "갑자기 세무조사 통지서를 받으셨나요?"<br />
                  막막하고 두려운 마음, 충분히 이해합니다.
                </p>
                <p>
                  하지만 <strong className="text-slate-900 border-b-2 border-[#D4A857]/30">첫 대응이 결과의 90%를 좌우합니다.</strong><br/>
                  조사관이 어떤 의도로 자료를 요구하는지, 무엇을 쟁점으로 삼고 있는지 파악하지 못하면 불필요한 추징을 피할 수 없습니다.
                </p>
                <p>
                  저는 <strong className="text-slate-900">국세청 조사과에서 25년간 직접 조사를 수행</strong>했습니다. 
                  조사관의 시선으로 방어 논리를 구축하여 리스크를 최소화합니다.
                </p>
              </div>
            </div>
            
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 shadow-sm">
              <h3 className="font-bold text-slate-900 text-lg mb-6 flex items-center gap-2">
                <span className="w-1.5 h-6 bg-[#D4A857] rounded-full"></span>
                국세청 출신이 제공하는 3가지 핵심 솔루션
              </h3>
              <div className="space-y-6">
                {[
                  { title: "조사 의도 사전 파악", desc: "국세청 출신만이 읽을 수 있는 조사 방향과 쟁점을 미리 진단합니다." },
                  { title: "실시간 방어 전략 수립", desc: "조사 착수부터 종결까지 대표 세무사가 직접 방어하고 대응합니다." },
                  { title: "가산세·추징세 최소화", desc: "법리적 근거를 바탕으로 불필요한 세금 부담을 원천 차단합니다." }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <CheckCircle2 className="text-[#D4A857] flex-shrink-0 mt-1" size={24} />
                    <div>
                      <p className="font-bold text-slate-900 mb-1 text-lg">{item.title}</p>
                      <p className="text-slate-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <div className="border-t border-slate-200"></div>

        {/* 1-2. 양도소득세 섹션 */}
        <section id="capital-gains" className="scroll-mt-24">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-[#D4A857] rounded-lg text-white">
                  <TrendingUp size={28} />
                </div>
                <span className="text-[#D4A857] font-bold text-sm tracking-widest uppercase">CAPITAL GAINS TAX</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 leading-tight">
                부동산 양도,<br />
                <span className="text-[#D4A857]">계약서 쓰기 전이 마지막 기회입니다</span>
              </h2>
              
              <div className="space-y-4 text-slate-600 leading-relaxed text-lg">
                <p>
                  "팔고 나서 세금 폭탄 맞으셨나요?"<br />
                  이미 계약이 끝난 후에는 할 수 있는 게 없습니다.
                </p>
                <p>
                  양도소득세는 보유 기간, 거주 여부, 주택 수에 따라 <strong className="text-slate-900 border-b-2 border-[#D4A857]/30">수천만 원에서 수억 원까지 차이</strong>가 납니다. 
                  비과세 요건을 하루 차이로 놓치거나 감면 조항을 몰라서 손해 보는 분들이 많습니다.
                </p>
                <p>
                  <strong className="text-slate-900">매매 계약서를 작성하기 '전'에 반드시 상담하세요.</strong><br/>
                  단순 세금 계산이 아니라, 숨겨진 절세 포인트를 찾아내어 '세후 실수령액'을 극대화합니다.
                </p>
              </div>
            </div>
            
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 shadow-sm">
              <h3 className="font-bold text-slate-900 text-lg mb-6 flex items-center gap-2">
                <span className="w-1.5 h-6 bg-[#D4A857] rounded-full"></span>
                양도 전 반드시 확인해야 할 3가지
              </h3>
              <div className="space-y-6">
                {[
                  { title: "비과세·감면 요건 정밀 검토", desc: "1세대 1주택 비과세, 장기보유특별공제 등 요건을 꼼꼼히 확인합니다." },
                  { title: "최적 양도 시점 설계", desc: "보유 기간, 취득 시기 등을 고려해 세금을 최소화하는 타이밍을 찾습니다." },
                  { title: "세후 실수령액 시뮬레이션", desc: "다양한 시나리오별 예상 세액을 비교하여 최선의 선택을 돕습니다." }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <CheckCircle2 className="text-[#D4A857] flex-shrink-0 mt-1" size={24} />
                    <div>
                      <p className="font-bold text-slate-900 mb-1 text-lg">{item.title}</p>
                      <p className="text-slate-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <div className="border-t border-slate-200"></div>

        {/* 1-3. 상속·증여 섹션 */}
        <section id="inheritance" className="scroll-mt-24">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-[#D4A857] rounded-lg text-white">
                  <Users size={28} />
                </div>
                <span className="text-[#D4A857] font-bold text-sm tracking-widest uppercase">INHERITANCE & GIFT</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 leading-tight">
                가족에게 물려주는 것,<br />
                <span className="text-[#D4A857]">세금보다 관계가 더 중요합니다</span>
              </h2>
              
              <div className="space-y-4 text-slate-600 leading-relaxed text-lg">
                <p>
                  돈 문제로 가족 관계가 틀어지는 건 정말 안타까운 일입니다.<br/>
                  상속·증여는 단순히 세금을 줄이는 문제가 아닙니다.
                </p>
                <p>
                  <strong className="text-slate-900 border-b-2 border-[#D4A857]/30">'가족 간 분쟁 예방'과 '장기 절세 플랜'</strong>,<br/>
                  이 두 가지를 동시에 설계해야 합니다.
                </p>
                <p>
                  저는 <strong className="text-slate-900">10년 단위 장기 증여 플랜</strong>을 수립하고, 
                  추후 문제가 될 수 있는 '자금 출처 소명' 자료까지 미리 준비해 드립니다.
                </p>
              </div>
            </div>
            
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 shadow-sm">
              <h3 className="font-bold text-slate-900 text-lg mb-6 flex items-center gap-2">
                <span className="w-1.5 h-6 bg-[#D4A857] rounded-full"></span>
                분쟁 없는 자산 이전을 위한 3가지 원칙
              </h3>
              <div className="space-y-6">
                {[
                  { title: "가족 구성원별 맞춤 설계", desc: "각 상속인의 상황과 관계를 고려한 공정한 분배 플랜을 수립합니다." },
                  { title: "10년 단위 장기 절세 플랜", desc: "증여세 면제 한도를 활용한 단계별 사전 증여로 세 부담을 분산합니다." },
                  { title: "자금 출처 소명 자료 사전 준비", desc: "미래의 세무조사에 대비한 증빙 자료를 미리 정리합니다." }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <CheckCircle2 className="text-[#D4A857] flex-shrink-0 mt-1" size={24} />
                    <div>
                      <p className="font-bold text-slate-900 mb-1 text-lg">{item.title}</p>
                      <p className="text-slate-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <div className="border-t border-slate-200"></div>

        {/* 1-4. 조세불복 섹션 */}
        <section id="tax-appeal" className="scroll-mt-24">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-[#D4A857] rounded-lg text-white">
                  <Lock size={28} />
                </div>
                <span className="text-[#D4A857] font-bold text-sm tracking-widest uppercase">TAX APPEAL</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 leading-tight">
                억울한 세금,<br />
                <span className="text-[#D4A857]">끝까지 싸워서 되찾아 드립니다</span>
              </h2>
              
              <div className="space-y-4 text-slate-600 leading-relaxed text-lg">
                <p>
                  "이 세금, 진짜 내야 하는 건가요?"<br />
                  과세 관청의 처분이 항상 옳은 것은 아닙니다.
                </p>
                <p>
                  사실 관계 오인이나 법령 해석의 차이로 <strong className="text-slate-900 border-b-2 border-[#D4A857]/30">억울하게 부과되는 세금</strong>이 생각보다 많습니다. 
                  대부분 "국가가 하는 일이니까..."라며 포기하지만, 싸우면 되찾을 수 있습니다.
                </p>
                <p>
                  저는 <strong className="text-slate-900">국세청 내부 과세 논리의 허점</strong>을 누구보다 잘 압니다. 
                  치밀한 법리로 이의신청부터 심판청구까지, 납세자의 권리(돈)를 되찾아 드립니다.
                </p>
              </div>
            </div>
            
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 shadow-sm">
              <h3 className="font-bold text-slate-900 text-lg mb-6 flex items-center gap-2">
                <span className="w-1.5 h-6 bg-[#D4A857] rounded-full"></span>
                조세불복 승소를 위한 3가지 전략
              </h3>
              <div className="space-y-6">
                {[
                  { title: "과세 논리의 허점 분석", desc: "국세청 출신의 시각으로 처분의 위법·부당성을 정밀 분석합니다." },
                  { title: "법리적 반박 논거 구축", desc: "판례와 유권해석을 활용한 치밀한 논리로 납세자를 대변합니다." },
                  { title: "불복 전 과정 원스톱 대행", desc: "복잡한 불복 절차를 처음부터 끝까지 책임지고 진행합니다." }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <CheckCircle2 className="text-[#D4A857] flex-shrink-0 mt-1" size={24} />
                    <div>
                      <p className="font-bold text-slate-900 mb-1 text-lg">{item.title}</p>
                      <p className="text-slate-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* ----------------------------------------------------------------------
          [NEW] 2. 대표 해결 사례 (Success Cases) - 4단 구조 카드
      ----------------------------------------------------------------------- */}
      <section className="bg-slate-50 py-20 border-t border-slate-200">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#D4A857] font-bold tracking-widest text-xs uppercase mb-3 block">SUCCESS CASES</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900">
              불가능해 보였던 문제,<br className="md:hidden"/> <span className="text-[#D4A857]">전략이 결과를 바꿨습니다</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Case 01: 상속세 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="text-xs font-bold text-white bg-[#D4A857] inline-block px-3 py-1 rounded-full mb-4">CASE 01</div>
              <h3 className="text-xl font-bold text-slate-900 mb-6 leading-tight">
                상속세 150억 예상<br/>→ <span className="text-[#D4A857]">30억으로 절세</span>
              </h3>
              <div className="space-y-5 text-sm md:text-[0.95rem] text-slate-700">
                <div>
                  <h4 className="font-bold text-slate-900 flex items-center gap-2 mb-2"><FileText size={16}/> 문제점</h4>
                  <ul className="list-disc list-inside space-y-1 pl-1 text-slate-600">
                    <li>비상장주식/부동산이 섞인 복잡한 구조</li>
                    <li>가족 간 지분 분산 없이 단일 명의 보유</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 flex items-center gap-2 mb-2"><CheckCircle2 size={16}/> 해결책</h4>
                  <ul className="list-disc list-inside space-y-1 pl-1 text-slate-600">
                    <li>사전 증여 플랜 및 지분 구조 재설계</li>
                    <li>비상장주식 평가 방법 전면 재검토</li>
                  </ul>
                </div>
                <div className="pt-4 border-t border-slate-100">
                  <div className="p-4 rounded-xl bg-[#FFF9EA] border border-[#F2E0A4] text-sm leading-relaxed">
                    <span className="font-bold text-[#C28A1A] block mb-1">📌 핵심 교훈</span>
                    상속 개시 1~2년 전, 전문가의 사전 컨설팅 여부가 수백억의 차이를 만듭니다.
                  </div>
                </div>
              </div>
            </div>

            {/* Case 02: 세무조사 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="text-xs font-bold text-white bg-[#D4A857] inline-block px-3 py-1 rounded-full mb-4">CASE 02</div>
              <h3 className="text-xl font-bold text-slate-900 mb-6 leading-tight">
                중견 법인 50억 과세 예고<br/>→ <span className="text-[#D4A857]">45억(90%) 감면</span>
              </h3>
              <div className="space-y-5 text-sm md:text-[0.95rem] text-slate-700">
                <div>
                  <h4 className="font-bold text-slate-900 flex items-center gap-2 mb-2"><FileText size={16}/> 문제점</h4>
                  <ul className="list-disc list-inside space-y-1 pl-1 text-slate-600">
                    <li>과거 5년치 거래 전체에 대한 정밀 조사</li>
                    <li>매출 누락 및 가공 경비 혐의 포착</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 flex items-center gap-2 mb-2"><CheckCircle2 size={16}/> 해결책</h4>
                  <ul className="list-disc list-inside space-y-1 pl-1 text-slate-600">
                    <li>조사 착수 즉시 현장 파견 및 쟁점 파악</li>
                    <li>적극적 소명으로 고의성 없음 입증</li>
                  </ul>
                </div>
                <div className="pt-4 border-t border-slate-100">
                  <div className="p-4 rounded-xl bg-[#FFF9EA] border border-[#F2E0A4] text-sm leading-relaxed">
                    <span className="font-bold text-[#C28A1A] block mb-1">📌 핵심 교훈</span>
                    세무조사는 초기 3일의 대응이 최종 추징세액의 90%를 결정합니다.
                  </div>
                </div>
              </div>
            </div>

            {/* Case 03: 조세불복 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="text-xs font-bold text-white bg-[#D4A857] inline-block px-3 py-1 rounded-full mb-4">CASE 03</div>
              <h3 className="text-xl font-bold text-slate-900 mb-6 leading-tight">
                부당 과세 1.5억 처분<br/>→ <span className="text-[#D4A857]">전액 취소(0원)</span>
              </h3>
              <div className="space-y-5 text-sm md:text-[0.95rem] text-slate-700">
                <div>
                  <h4 className="font-bold text-slate-900 flex items-center gap-2 mb-2"><FileText size={16}/> 문제점</h4>
                  <ul className="list-disc list-inside space-y-1 pl-1 text-slate-600">
                    <li>개인 사업자에 대한 무리한 경비 부인</li>
                    <li>사실 관계 오인으로 인한 과다 고지</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 flex items-center gap-2 mb-2"><CheckCircle2 size={16}/> 해결책</h4>
                  <ul className="list-disc list-inside space-y-1 pl-1 text-slate-600">
                    <li>유사 판례 및 예규 분석으로 법리적 모순 지적</li>
                    <li>이의신청을 통해 과세 전 적부심사 승소</li>
                  </ul>
                </div>
                <div className="pt-4 border-t border-slate-100">
                  <div className="p-4 rounded-xl bg-[#FFF9EA] border border-[#F2E0A4] text-sm leading-relaxed">
                    <span className="font-bold text-[#C28A1A] block mb-1">📌 핵심 교훈</span>
                    억울한 세금은 포기하지 않고 법리적으로 다투면 반드시 되찾을 수 있습니다.
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------------------
          [NEW] 3. 자주 묻는 질문 (FAQ)
      ----------------------------------------------------------------------- */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 text-center mb-12">
            자주 묻는 질문
          </h2>
          <div className="space-y-4">
            {[
              { q: "세무조사 통지서를 받으면 가장 먼저 무엇을 해야 하나요?", a: "절대 당황하지 마시고, 세무서에 자료를 제출하거나 답변하기 전에 즉시 세무 전문가와 상의하셔야 합니다. 초기 진술이나 제출된 자료는 번복하기 어려우므로 첫 단추가 가장 중요합니다." },
              { q: "세무조사와 단순 세무 확인(사후검증)은 무엇이 다른가요?", a: "세무조사는 장부와 증빙을 포괄적으로 검증하는 강도 높은 절차인 반면, 사후검증은 특정 항목에 대한 소명을 요구하는 절차입니다. 하지만 사후검증 대응이 미흡하면 정기 세무조사로 전환될 수 있어 주의가 필요합니다." },
              { q: "상속세와 증여세 중 무엇이 더 유리한가요?", a: "자산 규모, 종류, 가족 구성원, 향후 가치 상승 여부에 따라 다릅니다. 통상적으로 자산 가치가 상승할 것으로 예상되면 사전 증여가 유리하지만, 구체적인 시뮬레이션 없이는 판단하기 어렵습니다. 10년 단위 플랜이 필수적입니다." },
              { q: "이미 세금이 고지된 상태에서도 불복 청구가 가능한가요?", a: "네, 가능합니다. 납세 고지서를 받은 날로부터 90일 이내에 이의신청이나 심판청구를 제기할 수 있습니다. 기한을 놓치면 다툴 기회조차 사라지므로 서둘러야 합니다." },
            ].map((item, idx) => (
              <div key={idx} className="bg-slate-50 rounded-xl p-6 border border-slate-100 hover:border-[#D4A857]/50 transition-colors">
                <h3 className="font-bold text-lg text-slate-900 mb-3 flex items-start gap-3">
                  <HelpCircle className="text-[#D4A857] shrink-0 mt-1" size={20} />
                  {item.q}
                </h3>
                <p className="text-slate-600 pl-8 leading-relaxed">
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------------------
          4. 하단 CTA 섹션 (기존 유지)
      ----------------------------------------------------------------------- */}
      <section className="py-20 bg-[#050B16] text-center">
        <div className="container mx-auto px-6 space-y-8">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white leading-tight">
            지금 상황이 어떠신가요?<br />
            <span className="text-[#D4A857]">국세청 출신 전문가가 직접 답해드립니다.</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            "아직 확실하지 않은데 상담해도 되나요?"<br />
            물론입니다. 정확한 상황 파악이 먼저입니다. 부담 없이 연락 주세요.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-6 pt-4">
            <Link 
              href="/consult" 
              className="px-10 py-5 bg-[#D4A857] text-white font-bold rounded-sm hover:bg-[#C19545] transition-all text-lg shadow-2xl shadow-[#D4A857]/30 flex items-center justify-center gap-3"
            >
              내 상황 진단받기 <ArrowRight size={20} />
            </Link>
            <div className="flex items-center justify-center gap-4 text-white border border-slate-700 px-8 py-5 rounded-sm hover:bg-white/5 transition-colors cursor-pointer">
              <Phone className="text-[#D4A857]" size={24} />
              <span className="text-2xl font-serif font-bold">02-518-0130</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}