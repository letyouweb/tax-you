import Link from 'next/link';
import Image from 'next/image';
import PageHeader from '@/components/PageHeader';
import { CheckCircle2, Calendar, FileText, Phone, ChevronDown, ArrowRight, TrendingUp, Home, Building2, BarChart3 } from 'lucide-react';

export default function YangdoPage() {
  return (
    <div className="bg-white min-h-screen">
      <PageHeader 
        title="양도소득세" 
        subTitle="부동산, 주식 등 자산을 양도함으로써 발생하는 소득에 부과되는 세금입니다." 
      />
      
      {/* 대상 자산 - 배경 이미지 */}
      <section className="relative py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-slate-50"></div>
        <div className="absolute inset-0 bg-[url('/images/pattern-grid.png')] opacity-5"></div>
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 mb-4 text-center">양도세 대상 자산</h2>
          <p className="text-[#D4A857] text-center mb-10">주택, 건물, 토지, 주식 등 다양한 자산이 포함됩니다.</p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-100 text-center hover:shadow-md transition-shadow">
              <Home size={36} className="text-[#D4A857] mx-auto mb-3" />
              <h4 className="font-bold text-slate-900">주택</h4>
              <p className="text-xs text-slate-500 mt-1">아파트, 빌라, 단독주택</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-100 text-center hover:shadow-md transition-shadow">
              <Building2 size={36} className="text-[#D4A857] mx-auto mb-3" />
              <h4 className="font-bold text-slate-900">건물</h4>
              <p className="text-xs text-slate-500 mt-1">상가, 오피스텔, 빌딩</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-100 text-center hover:shadow-md transition-shadow">
              <TrendingUp size={36} className="text-[#D4A857] mx-auto mb-3" />
              <h4 className="font-bold text-slate-900">토지</h4>
              <p className="text-xs text-slate-500 mt-1">농지, 임야, 나대지</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-100 text-center hover:shadow-md transition-shadow">
              <BarChart3 size={36} className="text-[#D4A857] mx-auto mb-3" />
              <h4 className="font-bold text-slate-900">주식</h4>
              <p className="text-xs text-slate-500 mt-1">상장주식, 비상장주식</p>
            </div>
          </div>
        </div>
      </section>

      {/* 계산 방법 */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 mb-4 text-center">양도세 계산 방법</h2>
          <p className="text-slate-500 text-center mb-10">양도소득세는 다음과 같은 단계로 계산됩니다.</p>
          
          <div className="max-w-4xl mx-auto">
            {/* 계산 플로우 */}
            <div className="grid md:grid-cols-5 gap-4 items-center mb-8">
              <div className="bg-[#050B16] text-white p-4 rounded-lg text-center">
                <div className="text-[#D4A857] text-xs mb-1">STEP 1</div>
                <div className="font-bold">양도가액</div>
              </div>
              <div className="hidden md:flex justify-center text-slate-300">
                <ArrowRight />
              </div>
              <div className="bg-[#050B16] text-white p-4 rounded-lg text-center">
                <div className="text-[#D4A857] text-xs mb-1">STEP 2</div>
                <div className="font-bold">(-) 취득가액</div>
              </div>
              <div className="hidden md:flex justify-center text-slate-300">
                <ArrowRight />
              </div>
              <div className="bg-[#D4A857] text-white p-4 rounded-lg text-center">
                <div className="text-white/80 text-xs mb-1">RESULT</div>
                <div className="font-bold">양도차익</div>
              </div>
            </div>
            
            {/* 상세 설명 카드 */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-slate-50 p-6 rounded-lg border-l-4 border-[#D4A857]">
                <h4 className="font-bold text-slate-900 mb-2">양도가액이란?</h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  자산을 양도(매도)할 때 실제로 받은 금액을 말합니다. 실거래가를 기준으로 하며, 
                  계약서에 명시된 매매대금이 이에 해당합니다.
                </p>
              </div>
              <div className="bg-slate-50 p-6 rounded-lg border-l-4 border-[#D4A857]">
                <h4 className="font-bold text-slate-900 mb-2">취득가액이란?</h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  자산을 취득할 때 지출한 금액입니다. 매매대금뿐만 아니라 취득세, 등록세, 
                  중개수수료 등 취득에 소요된 부대비용도 포함됩니다.
                </p>
              </div>
              <div className="bg-slate-50 p-6 rounded-lg border-l-4 border-slate-300">
                <h4 className="font-bold text-slate-900 mb-2">필요경비</h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  양도 과정에서 발생한 경비로, 중개수수료, 양도소득세 신고대리 비용, 
                  자본적 지출액(리모델링 등) 등이 포함됩니다.
                </p>
              </div>
              <div className="bg-slate-50 p-6 rounded-lg border-l-4 border-slate-300">
                <h4 className="font-bold text-slate-900 mb-2">과세표준</h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  양도차익에서 장기보유특별공제와 기본공제(연 250만원)를 차감한 금액입니다.
                  이 금액에 세율을 곱해 최종 세액이 결정됩니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 전문가 필요 이유 - 세무사 사진 포함 */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[#050B16]"></div>
        <div className="absolute inset-0 bg-[url('/images/pattern-dark.png')] opacity-10"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* 세무사 이미지 */}
            <div className="relative">
              <div className="aspect-[4/5] md:aspect-[3/4] rounded-lg overflow-hidden shadow-2xl">
                <Image 
                  src="/images/유동수세무사_프로필.jpg" 
                  alt="유동수 대표 세무사"
                  fill
                  className="object-cover"
                />
              </div>
              {/* 플로팅 배지 */}
              <div className="absolute -bottom-4 -right-4 md:bottom-8 md:-right-8 bg-[#D4A857] text-white p-4 md:p-6 rounded-lg shadow-xl">
                <div className="text-2xl md:text-3xl font-bold">25년</div>
                <div className="text-xs md:text-sm">국세청 경력</div>
              </div>
            </div>
            
            {/* 텍스트 */}
            <div className="text-white">
              <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6">
                양도세, 국세청 출신 전문가에게<br/>
                <span className="text-[#D4A857]">맡겨야 하는 이유?</span>
              </h2>
              
              <div className="space-y-6 text-slate-300 leading-relaxed">
                <p>
                  세무사라면 누구나 활용하는 홈택스 정보 외에도, 개인별 상황에 맞게 
                  <strong className="text-white"> 긴밀하게 들여다 봐야만 보이는 절세 방안</strong>이 있습니다.
                </p>
                <p>
                  이러한 요소들은 다양한 경험이 없다면 놓칠 수 있습니다. 
                  세무사의 <strong className="text-white">실력에 따라 절세할 수 있는 금액이 수백만 원에서 수천만 원까지 차이</strong>가 나는 이유입니다.
                </p>
                <p>
                  세무사들 사이에서도 &quot;양포자(양도세를 포기한 사람)&quot;라는 말이 있을 정도로 
                  양도세는 복잡하고 어려운 분야입니다.
                </p>
                <p className="text-[#D4A857] font-medium">
                  반드시 전문가에게 맡겨야 최대의 절세 전략을 수립할 수 있습니다.
                </p>
              </div>
              
              <div className="mt-8 flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-white/10 rounded-full text-sm">비과세 요건 검토</span>
                <span className="px-4 py-2 bg-white/10 rounded-full text-sm">장기보유공제 최적화</span>
                <span className="px-4 py-2 bg-white/10 rounded-full text-sm">다주택자 전략</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 절세 노하우 */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 mb-2 text-center">
            양도세 <span className="text-[#D4A857]">주요 절세 노하우</span>
          </h2>
          <p className="text-slate-500 text-center mb-10">복잡한 양도세, 이런 방법으로 절세할 수 있습니다.</p>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-white border-2 border-slate-100 rounded-lg p-8 hover:border-[#D4A857] hover:shadow-lg transition-all group">
              <div className="text-[#D4A857] font-bold text-4xl mb-4 font-serif">&quot;01&quot;</div>
              <h3 className="font-bold text-xl text-slate-900 mb-4">1세대 1주택 비과세</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                1세대가 국내에 1주택만을 보유하면서 2년 이상 보유(조정대상지역은 2년 거주 필요)한 경우 
                양도소득세가 비과세됩니다.
              </p>
              <ul className="text-xs text-slate-500 space-y-1">
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={14} className="text-[#D4A857] mt-0.5 flex-shrink-0" />
                  <span>보유기간 2년 이상</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={14} className="text-[#D4A857] mt-0.5 flex-shrink-0" />
                  <span>양도가액 12억원 이하</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={14} className="text-[#D4A857] mt-0.5 flex-shrink-0" />
                  <span>조정지역 거주요건 충족</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white border-2 border-slate-100 rounded-lg p-8 hover:border-[#D4A857] hover:shadow-lg transition-all group">
              <div className="text-[#D4A857] font-bold text-4xl mb-4 font-serif">&quot;02&quot;</div>
              <h3 className="font-bold text-xl text-slate-900 mb-4">장기보유특별공제</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                보유 기간이 길수록 양도차익에서 공제받는 금액이 커집니다. 
                1세대 1주택자의 경우 최대 80%까지 공제받을 수 있습니다.
              </p>
              <ul className="text-xs text-slate-500 space-y-1">
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={14} className="text-[#D4A857] mt-0.5 flex-shrink-0" />
                  <span>일반: 연 2%, 최대 30%</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={14} className="text-[#D4A857] mt-0.5 flex-shrink-0" />
                  <span>1주택: 연 4%, 최대 40% (거주)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={14} className="text-[#D4A857] mt-0.5 flex-shrink-0" />
                  <span>보유+거주 합산 최대 80%</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white border-2 border-slate-100 rounded-lg p-8 hover:border-[#D4A857] hover:shadow-lg transition-all group">
              <div className="text-[#D4A857] font-bold text-4xl mb-4 font-serif">&quot;03&quot;</div>
              <h3 className="font-bold text-xl text-slate-900 mb-4">증여 및 상속 전략</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                자산을 매도하기 전 가족에게 증여한 후 양도하면 취득가액이 높아져 
                양도차익을 줄일 수 있습니다.
              </p>
              <ul className="text-xs text-slate-500 space-y-1">
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={14} className="text-[#D4A857] mt-0.5 flex-shrink-0" />
                  <span>배우자 증여 후 양도</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={14} className="text-[#D4A857] mt-0.5 flex-shrink-0" />
                  <span>자녀 분산 증여 활용</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={14} className="text-[#D4A857] mt-0.5 flex-shrink-0" />
                  <span>이월과세 주의 필요</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 세율 구조 - 배경 이미지 */}
      <section className="relative py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-slate-900"></div>
        <div className="absolute inset-0 bg-[url('/images/building-bg.jpg')] bg-cover bg-center opacity-20"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-white mb-2 text-center">양도세 세율 구조</h2>
          <p className="text-slate-400 text-center mb-10">보유기간과 주택 수에 따라 다른 세율이 적용됩니다.</p>
          
          <div className="max-w-3xl mx-auto bg-white/10 backdrop-blur rounded-lg overflow-hidden">
            <table className="w-full text-sm text-white">
              <thead className="bg-[#D4A857]">
                <tr>
                  <th className="py-4 px-4 text-left font-bold">과세표준</th>
                  <th className="py-4 px-4 text-right font-bold">기본세율</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                <tr><td className="py-3 px-4">1,400만원 이하</td><td className="py-3 px-4 text-right text-[#D4A857] font-bold">6%</td></tr>
                <tr><td className="py-3 px-4">1,400만원 ~ 5,000만원</td><td className="py-3 px-4 text-right text-[#D4A857] font-bold">15%</td></tr>
                <tr><td className="py-3 px-4">5,000만원 ~ 8,800만원</td><td className="py-3 px-4 text-right text-[#D4A857] font-bold">24%</td></tr>
                <tr><td className="py-3 px-4">8,800만원 ~ 1.5억원</td><td className="py-3 px-4 text-right text-[#D4A857] font-bold">35%</td></tr>
                <tr><td className="py-3 px-4">1.5억원 ~ 3억원</td><td className="py-3 px-4 text-right text-[#D4A857] font-bold">38%</td></tr>
                <tr><td className="py-3 px-4">3억원 ~ 5억원</td><td className="py-3 px-4 text-right text-[#D4A857] font-bold">40%</td></tr>
                <tr><td className="py-3 px-4">5억원 ~ 10억원</td><td className="py-3 px-4 text-right text-[#D4A857] font-bold">42%</td></tr>
                <tr><td className="py-3 px-4">10억원 초과</td><td className="py-3 px-4 text-right text-[#D4A857] font-bold">45%</td></tr>
              </tbody>
            </table>
          </div>
          
          <p className="text-center text-slate-400 text-xs mt-6">
            ※ 다주택자, 단기보유 등의 경우 중과세율이 적용될 수 있습니다.
          </p>
        </div>
      </section>

      {/* 신고 절차 */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 mb-2 text-center">양도세 신고 절차</h2>
          <p className="text-slate-500 text-center mb-10">정해진 기한 내에 정확하게 신고하셔야 합니다.</p>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-[#050B16] text-white p-8 rounded-lg">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-[#D4A857] rounded-lg">
                  <Calendar size={28} />
                </div>
                <div>
                  <h3 className="font-bold text-lg">신고 기간</h3>
                  <p className="text-[#D4A857]">반드시 기한 내 신고</p>
                </div>
              </div>
              <p className="text-slate-300 leading-relaxed">
                양도일이 속하는 달의 말일부터 <strong className="text-white">2개월 이내</strong>에 
                양도소득세 예정신고를 하셔야 합니다. 기한 내 신고하지 않으면 
                무신고가산세(20%)가 부과됩니다.
              </p>
            </div>
            
            <div className="bg-[#050B16] text-white p-8 rounded-lg">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-[#D4A857] rounded-lg">
                  <FileText size={28} />
                </div>
                <div>
                  <h3 className="font-bold text-lg">신고 방법</h3>
                  <p className="text-[#D4A857]">온라인 또는 방문 신고</p>
                </div>
              </div>
              <p className="text-slate-300 leading-relaxed">
                국세청 홈택스를 통해 <strong className="text-white">온라인 신고</strong>가 가능하며, 
                관할 세무서를 직접 방문하여 신고할 수도 있습니다. 
                복잡한 경우 세무 전문가의 도움을 받으시는 것이 좋습니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 mb-2 text-center">양도세 관련</h2>
          <p className="text-[#D4A857] text-center mb-10">자주 묻는 질문</p>
          
          <div className="max-w-3xl mx-auto space-y-4">
            <details className="group bg-white rounded-lg shadow-sm border border-slate-200">
              <summary className="flex items-center justify-between p-6 cursor-pointer">
                <span className="font-medium text-slate-900">1세대 1주택 비과세 요건은 무엇인가요?</span>
                <ChevronDown size={20} className="text-slate-400 group-open:rotate-180 transition-transform" />
              </summary>
              <div className="px-6 pb-6 text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-4">
                1세대가 1주택만 보유하면서 2년 이상 보유(조정대상지역은 2년 거주 필요)한 경우 양도소득세가 비과세됩니다. 
                단, 양도가액이 12억원을 초과하는 경우 초과분에 대해서는 과세됩니다. 
                또한 일시적 2주택, 상속주택, 혼인합가 등 예외 규정이 있으므로 전문가 상담을 권장합니다.
              </div>
            </details>
            
            <details className="group bg-white rounded-lg shadow-sm border border-slate-200">
              <summary className="flex items-center justify-between p-6 cursor-pointer">
                <span className="font-medium text-slate-900">장기보유특별공제는 어떻게 적용되나요?</span>
                <ChevronDown size={20} className="text-slate-400 group-open:rotate-180 transition-transform" />
              </summary>
              <div className="px-6 pb-6 text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-4">
                3년 이상 보유 시 연 2%씩 최대 30%까지, 거주기간에 따라 연 4%씩 최대 40%까지 추가 공제됩니다. 
                1세대 1주택의 경우 보유기간 공제와 거주기간 공제를 합산하여 최대 80%까지 공제 가능합니다. 
                정확한 공제율은 보유기간, 거주기간, 주택 수 등에 따라 달라지므로 개별 검토가 필요합니다.
              </div>
            </details>
            
            <details className="group bg-white rounded-lg shadow-sm border border-slate-200">
              <summary className="flex items-center justify-between p-6 cursor-pointer">
                <span className="font-medium text-slate-900">양도세 신고를 하지 않으면 어떻게 되나요?</span>
                <ChevronDown size={20} className="text-slate-400 group-open:rotate-180 transition-transform" />
              </summary>
              <div className="px-6 pb-6 text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-4">
                무신고 시 납부불성실가산세(1일 0.022%)와 무신고가산세(20%)가 부과됩니다. 
                부정행위로 인정되면 40%의 가산세가 적용될 수 있으며, 
                세금 탈루액이 큰 경우 형사처벌 대상이 될 수도 있습니다. 
                기한 후 신고라도 빨리 하시는 것이 가산세를 줄이는 방법입니다.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[#050B16]"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#050B16] via-[#0A1628] to-[#050B16]"></div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="text-2xl md:text-4xl font-serif font-bold text-white mb-4">
            국세청 출신 25년 경력의<br/>
            <span className="text-[#D4A857]">대표 세무사가 직접 상담합니다.</span>
          </h2>
          <p className="text-slate-400 mb-8">자세한 서비스 절차는 전화로 문의해주세요.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/consult" className="px-8 py-4 bg-[#D4A857] text-white font-bold rounded-sm hover:bg-[#C19545] transition-colors inline-flex items-center justify-center gap-2">
              1:1 상담 예약 <ArrowRight size={18} />
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
