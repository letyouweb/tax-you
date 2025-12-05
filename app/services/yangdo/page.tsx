import Link from 'next/link';
import PageHeader from '@/components/PageHeader';
import { CheckCircle2, TrendingUp, Calendar, FileText, Phone, ChevronDown } from 'lucide-react';

export default function YangdoPage() {
  return (
    <div className="bg-white min-h-screen">
      <PageHeader 
        title="양도소득세" 
        subTitle="부동산, 주식 등 자산을 양도함으로써 발생하는 소득에 부과되는 세금입니다." 
      />
      
      <div className="container mx-auto px-6 py-20 space-y-24">
        
        {/* 대상 자산 */}
        <section className="text-center">
          <h2 className="text-2xl font-serif font-bold text-slate-900 mb-4">양도세 대상 자산</h2>
          <p className="text-slate-600 text-lg">주택, 건물, 토지, 주식 등 다양한 자산</p>
        </section>

        {/* 계산 방법 */}
        <section className="bg-slate-50 rounded-lg p-8 md:p-12">
          <h2 className="text-2xl font-serif font-bold text-slate-900 mb-8 text-center">양도세 계산 방법</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-lg border border-slate-200">
              <div className="text-[#D4A857] font-bold mb-2">양도가액</div>
              <p className="text-slate-600 text-sm">주택, 건물, 토지, 주식 등 다양한 자산의 양도 시 받은 금액</p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-slate-200">
              <div className="text-[#D4A857] font-bold mb-2">취득가액</div>
              <p className="text-slate-600 text-sm">자산을 취득할 때 지출한 금액</p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-slate-200">
              <div className="text-[#D4A857] font-bold mb-2">필요경비</div>
              <p className="text-slate-600 text-sm">양도 과정에서 발생한 경비(중개수수료 등)</p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-slate-200">
              <div className="text-[#D4A857] font-bold mb-2">양도차익</div>
              <p className="text-slate-600 text-sm">양도가액에서 취득가액과 필요경비를 뺀 금액</p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-slate-200 md:col-span-2 lg:col-span-2">
              <div className="text-[#D4A857] font-bold mb-2">과세표준</div>
              <p className="text-slate-600 text-sm">양도차익에서 기본공제를 제외한 금액</p>
            </div>
          </div>
        </section>

        {/* 전문가 필요 이유 */}
        <section className="grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-slate-100 h-80 rounded-lg flex items-center justify-center">
            <TrendingUp size={100} className="text-slate-300" />
          </div>
          <div>
            <h2 className="text-2xl font-serif font-bold text-slate-900 mb-4">
              양도세, 국세청 출신 전문가에게<br/>맡겨야 하는 이유?
            </h2>
            <div className="text-slate-600 leading-relaxed space-y-4">
              <p>
                세무사라면 누구나 활용하는 홈택스 정보 외에도, 개인별 상황에 맞게 
                <strong className="text-slate-900"> 긴밀하게 들여다 봐야만 보이는 절세 방안</strong>이 있는데요. 
                이러한 요소들은 다양한 경험이 없다면 놓칠 수 있습니다.
              </p>
              <p>
                세무사의 <strong className="text-slate-900">실력에 따라 절세할 수 있는 금액이 차이</strong>나는 이유입니다.
              </p>
              <p>
                세무사들 사이에서도 &quot;양포자&quot;라는 말이 있을 정도로 양도세는 복잡하고 어려운 분야이기 때문에 
                반드시 <strong className="text-slate-900">전문가에게 맡겨야 최대의 절세 전략</strong>을 수립할 수 있습니다.
              </p>
            </div>
          </div>
        </section>

        {/* 절세 노하우 */}
        <section>
          <h2 className="text-2xl font-serif font-bold text-slate-900 mb-8 text-center">
            양도세 <span className="text-[#D4A857]">주요 절세 노하우</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white border border-slate-200 rounded-lg p-8 hover:shadow-lg transition-shadow">
              <div className="text-[#D4A857] font-bold text-3xl mb-4">&quot;01&quot;</div>
              <h3 className="font-bold text-slate-900 mb-3">1세대 1주택 비과세</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                1세대 1주택자가 2년 이상 거주한 경우 양도세 비과세 혜택을 받을 수 있습니다.
              </p>
            </div>
            <div className="bg-white border border-slate-200 rounded-lg p-8 hover:shadow-lg transition-shadow">
              <div className="text-[#D4A857] font-bold text-3xl mb-4">&quot;02&quot;</div>
              <h3 className="font-bold text-slate-900 mb-3">장기보유특별공제</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                보유 기간이 길수록 양도세 부담이 줄어듭니다.
              </p>
            </div>
            <div className="bg-white border border-slate-200 rounded-lg p-8 hover:shadow-lg transition-shadow">
              <div className="text-[#D4A857] font-bold text-3xl mb-4">&quot;03&quot;</div>
              <h3 className="font-bold text-slate-900 mb-3">증여 및 상속 전략</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                자산을 증여하거나 상속하는 방법도 절세 전략이 될 수 있습니다.
              </p>
            </div>
          </div>
        </section>

        {/* 신고 절차 */}
        <section className="bg-[#050B16] text-white rounded-lg p-8 md:p-12">
          <h2 className="text-2xl font-serif font-bold mb-8 text-center">양도세 신고 절차</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-[#D4A857] rounded-lg">
                <Calendar size={24} />
              </div>
              <div>
                <h3 className="font-bold mb-2">신고 기간</h3>
                <p className="text-slate-300 text-sm">양도일이 속하는 달의 말일부터 2개월 이내</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="p-3 bg-[#D4A857] rounded-lg">
                <FileText size={24} />
              </div>
              <div>
                <h3 className="font-bold mb-2">신고 방법</h3>
                <p className="text-slate-300 text-sm">국세청 홈택스를 통해 온라인 신고 가능</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section>
          <h2 className="text-2xl font-serif font-bold text-slate-900 mb-8 text-center">양도세 관련 자주 묻는 질문</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            <details className="group bg-slate-50 rounded-lg">
              <summary className="flex items-center justify-between p-6 cursor-pointer">
                <span className="font-medium text-slate-900">1세대 1주택 비과세 요건은 무엇인가요?</span>
                <ChevronDown size={20} className="text-slate-400 group-open:rotate-180 transition-transform" />
              </summary>
              <div className="px-6 pb-6 text-slate-600 text-sm leading-relaxed">
                1세대가 1주택만 보유하면서 2년 이상 보유(조정대상지역은 2년 거주 필요)한 경우 양도소득세가 비과세됩니다. 단, 양도가액이 12억원을 초과하는 경우 초과분에 대해서는 과세됩니다.
              </div>
            </details>
            <details className="group bg-slate-50 rounded-lg">
              <summary className="flex items-center justify-between p-6 cursor-pointer">
                <span className="font-medium text-slate-900">장기보유특별공제는 어떻게 적용되나요?</span>
                <ChevronDown size={20} className="text-slate-400 group-open:rotate-180 transition-transform" />
              </summary>
              <div className="px-6 pb-6 text-slate-600 text-sm leading-relaxed">
                3년 이상 보유 시 연 2%씩 최대 30%까지, 거주기간에 따라 연 4%씩 최대 40%까지 추가 공제됩니다. 1세대 1주택의 경우 최대 80%까지 공제 가능합니다.
              </div>
            </details>
            <details className="group bg-slate-50 rounded-lg">
              <summary className="flex items-center justify-between p-6 cursor-pointer">
                <span className="font-medium text-slate-900">양도세 신고를 하지 않으면 어떻게 되나요?</span>
                <ChevronDown size={20} className="text-slate-400 group-open:rotate-180 transition-transform" />
              </summary>
              <div className="px-6 pb-6 text-slate-600 text-sm leading-relaxed">
                무신고 시 납부불성실가산세(20%)와 무신고가산세가 부과됩니다. 부정행위로 인정되면 40%의 가산세가 적용될 수 있으며, 형사처벌 대상이 될 수도 있습니다.
              </div>
            </details>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#050B16] text-white rounded-lg p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-serif font-bold mb-4">
            국세청 출신 25년 경력의<br/>대표 세무사가 직접 상담합니다.
          </h2>
          <p className="text-slate-400 mb-8">자세한 서비스 절차는 전화로 문의해주세요.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/consult" className="px-8 py-4 bg-[#D4A857] text-white font-bold rounded-sm hover:bg-[#C19545] transition-colors">
              1:1 상담 예약
            </Link>
            <a href="tel:02-518-0130" className="px-8 py-4 border border-slate-600 text-white font-bold rounded-sm hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
              <Phone size={20} /> 02-518-0130
            </a>
          </div>
        </section>

      </div>
    </div>
  );
}
