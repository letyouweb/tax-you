'use client';

import Link from 'next/link';
import PageHeader from '@/components/PageHeader';
import ServiceBottomSnippet from '@/components/ServiceBottomSnippet';
import { Shield, TrendingUp, Users, Lock, CheckCircle2, ArrowRight, Phone } from 'lucide-react';

export default function Insight() {
  return (
    <div className="bg-white min-h-screen">
      <PageHeader 
        title="인사이트" 
        subTitle="국세청 25년 경력이 제시하는 구체적인 해결책" 
      />
      
      <div className="container mx-auto px-6 py-16 space-y-24">
        
        {/* 세무조사 섹션 */}
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
              
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p className="text-lg">
                  "갑자기 세무조사 통지서를 받으셨나요?"<br />
                  막막하고 두려운 마음, 충분히 이해합니다.
                </p>
                <p>
                  하지만 <strong className="text-slate-900">첫 대응이 결과의 90%를 좌우합니다.</strong> 
                  조사관이 어떤 의도로 어떤 자료를 요구하는지, 무엇을 쟁점으로 삼고 있는지 
                  파악하지 못하면 불필요한 가산세와 추징을 피할 수 없습니다.
                </p>
                <p>
                  저는 <strong className="text-slate-900">국세청 조사과에서 25년간 직접 조사를 수행했던 경험</strong>이 있습니다. 
                  조사관의 시선으로 상황을 분석하고, 법리적 방어 논리를 구축하여 
                  리스크를 최소화하는 것이 제 역할입니다.
                </p>
              </div>
            </div>
            
            <div className="bg-slate-50 p-8 rounded-lg border border-slate-100">
              <h3 className="font-bold text-slate-900 text-lg mb-6 flex items-center gap-2">
                <span className="w-1 h-6 bg-[#D4A857] rounded-full"></span>
                국세청 출신이 제공하는 3가지 핵심 솔루션
              </h3>
              <div className="space-y-5">
                <div className="flex gap-4">
                  <CheckCircle2 className="text-[#D4A857] flex-shrink-0 mt-1" size={22} />
                  <div>
                    <p className="font-bold text-slate-900 mb-1">조사 의도 사전 파악</p>
                    <p className="text-slate-600 text-sm">국세청 출신만이 읽을 수 있는 조사 방향과 쟁점을 미리 진단합니다.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <CheckCircle2 className="text-[#D4A857] flex-shrink-0 mt-1" size={22} />
                  <div>
                    <p className="font-bold text-slate-900 mb-1">실시간 방어 전략 수립</p>
                    <p className="text-slate-600 text-sm">조사 착수부터 종결까지 대표 세무사가 직접 방어하고 대응합니다.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <CheckCircle2 className="text-[#D4A857] flex-shrink-0 mt-1" size={22} />
                  <div>
                    <p className="font-bold text-slate-900 mb-1">가산세·추징세 최소화</p>
                    <p className="text-slate-600 text-sm">법리적 근거를 바탕으로 불필요한 세금 부담을 원천 차단합니다.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* 세무조사/조세불복 사례 스니펫 */}
          <ServiceBottomSnippet 
            type="investigation"
            caseText="중견 법인 50억 과세 위험"
            resultText="45억 감면, 90% 절감"
            roleText="실시간 방어 전략 대응"
          />
        </section>

        <div className="border-t border-slate-200"></div>

        {/* 양도소득세 섹션 */}
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
              
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p className="text-lg">
                  "팔고 나서 세금 폭탄 맞으셨나요?"<br />
                  이미 계약이 끝난 후에는 할 수 있는 게 없습니다.
                </p>
                <p>
                  양도소득세는 보유 기간, 거주 여부, 주택 수에 따라 
                  <strong className="text-slate-900">수천만 원에서 수억 원까지 차이</strong>가 납니다. 
                  비과세 요건을 하루 차이로 놓치거나, 
                  감면 조항을 몰라서 손해 보는 분들이 정말 많습니다.
                </p>
                <p>
                  <strong className="text-slate-900">매매 계약서를 작성하기 '전'에 반드시 상담하세요.</strong> 
                  단순 세금 계산이 아니라, 숨겨진 절세 포인트를 찾아내어 
                  '세후 실수령액'을 극대화하는 것이 제 역할입니다.
                </p>
              </div>
            </div>
            
            <div className="bg-slate-50 p-8 rounded-lg border border-slate-100">
              <h3 className="font-bold text-slate-900 text-lg mb-6 flex items-center gap-2">
                <span className="w-1 h-6 bg-[#D4A857] rounded-full"></span>
                양도 전 반드시 확인해야 할 3가지
              </h3>
              <div className="space-y-5">
                <div className="flex gap-4">
                  <CheckCircle2 className="text-[#D4A857] flex-shrink-0 mt-1" size={22} />
                  <div>
                    <p className="font-bold text-slate-900 mb-1">비과세·감면 요건 정밀 검토</p>
                    <p className="text-slate-600 text-sm">1세대 1주택 비과세, 장기보유특별공제 등 놓치기 쉬운 요건을 꼼꼼히 확인합니다.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <CheckCircle2 className="text-[#D4A857] flex-shrink-0 mt-1" size={22} />
                  <div>
                    <p className="font-bold text-slate-900 mb-1">최적 양도 시점 설계</p>
                    <p className="text-slate-600 text-sm">보유 기간, 취득 시기 등을 고려해 세금을 최소화하는 매도 타이밍을 찾아드립니다.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <CheckCircle2 className="text-[#D4A857] flex-shrink-0 mt-1" size={22} />
                  <div>
                    <p className="font-bold text-slate-900 mb-1">세후 실수령액 시뮬레이션</p>
                    <p className="text-slate-600 text-sm">다양한 시나리오별 예상 세액을 비교하여 최선의 선택을 도와드립니다.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* 양도/상속/증여 사례 스니펫 */}
          <ServiceBottomSnippet 
            type="asset"
            caseText="예상 상속세 150억"
            resultText="30억 절감"
            roleText="사전 증여 및 평가 설계"
          />
        </section>

        <div className="border-t border-slate-200"></div>

        {/* 상속·증여 섹션 */}
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
              
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p className="text-lg">
                  "상속 준비하다가 가족끼리 서먹해질까 걱정되시나요?"<br />
                  돈 문제로 가족 관계가 틀어지는 건 정말 안타까운 일입니다.
                </p>
                <p>
                  상속·증여는 단순히 세금을 줄이는 문제가 아닙니다. 
                  <strong className="text-slate-900">'가족 간 분쟁 예방'과 '장기 절세 플랜'</strong>, 
                  이 두 가지를 동시에 설계해야 합니다.
                </p>
                <p>
                  저는 <strong className="text-slate-900">10년 단위 장기 증여 플랜</strong>을 수립하고, 
                  나중에 문제가 될 수 있는 '자금 출처 소명' 자료까지 미리 준비해 드립니다. 
                  세무조사 경험을 바탕으로, 미래에 발생할 수 있는 리스크까지 차단합니다.
                </p>
              </div>
            </div>
            
            <div className="bg-slate-50 p-8 rounded-lg border border-slate-100">
              <h3 className="font-bold text-slate-900 text-lg mb-6 flex items-center gap-2">
                <span className="w-1 h-6 bg-[#D4A857] rounded-full"></span>
                분쟁 없는 자산 이전을 위한 3가지 원칙
              </h3>
              <div className="space-y-5">
                <div className="flex gap-4">
                  <CheckCircle2 className="text-[#D4A857] flex-shrink-0 mt-1" size={22} />
                  <div>
                    <p className="font-bold text-slate-900 mb-1">가족 구성원별 맞춤 설계</p>
                    <p className="text-slate-600 text-sm">각 상속인의 상황과 관계를 고려한 공정한 분배 플랜을 수립합니다.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <CheckCircle2 className="text-[#D4A857] flex-shrink-0 mt-1" size={22} />
                  <div>
                    <p className="font-bold text-slate-900 mb-1">10년 단위 장기 절세 플랜</p>
                    <p className="text-slate-600 text-sm">증여세 면제 한도를 활용한 단계별 사전 증여로 세 부담을 분산합니다.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <CheckCircle2 className="text-[#D4A857] flex-shrink-0 mt-1" size={22} />
                  <div>
                    <p className="font-bold text-slate-900 mb-1">자금 출처 소명 자료 사전 준비</p>
                    <p className="text-slate-600 text-sm">나중에 발생할 수 있는 세무조사에 대비한 증빙 자료를 미리 정리합니다.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* 양도/상속/증여 사례 스니펫 */}
          <ServiceBottomSnippet 
            type="asset"
            caseText="예상 상속세 150억"
            resultText="30억 절감"
            roleText="사전 증여 및 평가 설계"
          />
        </section>

        <div className="border-t border-slate-200"></div>

        {/* 조세불복 섹션 */}
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
              
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p className="text-lg">
                  "이 세금, 진짜 내야 하는 건가요?"<br />
                  과세 관청의 처분이 항상 옳은 것은 아닙니다.
                </p>
                <p>
                  사실 관계 오인, 법령 해석의 차이, 증거 누락 등으로 인해 
                  <strong className="text-slate-900">억울하게 세금이 부과되는 경우</strong>가 생각보다 많습니다. 
                  하지만 대부분의 납세자는 "국가가 하는 일이니까..."라며 포기합니다.
                </p>
                <p>
                  저는 <strong className="text-slate-900">국세청 내부에서 과세 논리가 어떻게 구성되는지</strong>를 압니다. 
                  그래서 그 논리의 허점을 찾아내고, 법리적으로 뒤집을 수 있습니다. 
                  이의신청부터 심판청구까지, 납세자의 권리(돈)를 되찾아 드립니다.
                </p>
              </div>
            </div>
            
            <div className="bg-slate-50 p-8 rounded-lg border border-slate-100">
              <h3 className="font-bold text-slate-900 text-lg mb-6 flex items-center gap-2">
                <span className="w-1 h-6 bg-[#D4A857] rounded-full"></span>
                조세불복 승소를 위한 3가지 전략
              </h3>
              <div className="space-y-5">
                <div className="flex gap-4">
                  <CheckCircle2 className="text-[#D4A857] flex-shrink-0 mt-1" size={22} />
                  <div>
                    <p className="font-bold text-slate-900 mb-1">과세 논리의 허점 분석</p>
                    <p className="text-slate-600 text-sm">국세청 출신의 시각으로 과세 처분의 위법·부당성을 정밀 분석합니다.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <CheckCircle2 className="text-[#D4A857] flex-shrink-0 mt-1" size={22} />
                  <div>
                    <p className="font-bold text-slate-900 mb-1">법리적 반박 논거 구축</p>
                    <p className="text-slate-600 text-sm">판례와 유권해석을 활용한 치밀한 논리로 납세자의 입장을 대변합니다.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <CheckCircle2 className="text-[#D4A857] flex-shrink-0 mt-1" size={22} />
                  <div>
                    <p className="font-bold text-slate-900 mb-1">이의신청·심판청구 전 과정 대행</p>
                    <p className="text-slate-600 text-sm">복잡한 불복 절차를 처음부터 끝까지 책임지고 진행합니다.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* 세무조사/조세불복 사례 스니펫 */}
          <ServiceBottomSnippet 
            type="investigation"
            caseText="개인 사업자 부당 과세 1억 5천만 원"
            resultText="전액 취소"
            roleText="이의신청을 통한 납세자 권익 보호"
          />
        </section>

      </div>

      {/* 하단 CTA 섹션 */}
      <section className="py-20 bg-[#050B16] text-center">
        <div className="container mx-auto px-6 space-y-8">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white leading-tight">
            지금 상황이 어떠신가요?<br />
            <span className="text-[#D4A857]">국세청 출신 전문가가 직접 답해드립니다.</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
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
