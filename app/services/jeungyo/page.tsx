import Link from 'next/link';
import PageHeader from '@/components/PageHeader';
import { Gift, Calendar, FileText, Phone, ChevronDown } from 'lucide-react';

export default function JeunyoPage() {
  return (
    <div className="bg-white min-h-screen">
      <PageHeader 
        title="증여세" 
        subTitle="타인으로부터 재산을 무상으로 받은 경우 부과되는 세금입니다." 
      />
      
      <div className="container mx-auto px-6 py-20 space-y-24">
        
        {/* 과세 자산 */}
        <section className="text-center">
          <h2 className="text-2xl font-serif font-bold text-slate-900 mb-4">증여세 과세 자산</h2>
          <p className="text-slate-600 text-lg">부동산, 현금, 주식 등 다양한 유형의 재산이 포함</p>
        </section>

        {/* 과세표준 산정 */}
        <section className="bg-slate-50 rounded-lg p-8 md:p-12">
          <h2 className="text-2xl font-serif font-bold text-slate-900 mb-4 text-center">과세 표준 산정 방법</h2>
          <p className="text-slate-600 text-center mb-8">증여 재산가액에서 공제 가능한 금액을 제외한 금액이 과세 표준이 됩니다.</p>
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <div className="bg-white p-6 rounded-lg border border-slate-200">
              <div className="text-[#D4A857] font-bold mb-2">증여재산가액</div>
              <p className="text-slate-600 text-sm">증여받은 재산의 시가</p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-slate-200">
              <div className="text-[#D4A857] font-bold mb-2">공제 항목</div>
              <p className="text-slate-600 text-sm">인적 공제, 채무 공제 등</p>
            </div>
          </div>
        </section>

        {/* 전문가 필요 이유 */}
        <section className="grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-slate-100 h-80 rounded-lg flex items-center justify-center">
            <Gift size={100} className="text-slate-300" />
          </div>
          <div>
            <h2 className="text-2xl font-serif font-bold text-slate-900 mb-4">
              증여세, 국세청 출신 전문가에게<br/>맡겨야 하는 이유?
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
                증여세는 세무사의 경험과 노하우에 따라 절세 금액이 크게 달라지기 때문에 반드시 
                <strong className="text-slate-900"> 전문가에게 맡겨야 최대의 절세</strong> 효과를 누리실 수 있습니다.
              </p>
            </div>
          </div>
        </section>

        {/* 절세 노하우 */}
        <section>
          <h2 className="text-2xl font-serif font-bold text-slate-900 mb-8 text-center">
            증여세 <span className="text-[#D4A857]">주요 절세 노하우</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white border border-slate-200 rounded-lg p-8 hover:shadow-lg transition-shadow">
              <div className="text-[#D4A857] font-bold text-3xl mb-4">&quot;01&quot;</div>
              <h3 className="font-bold text-slate-900 mb-3">공제 활용</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                증여재산 공제, 배우자 공제, 자녀 공제 등을 통해 과세 표준을 낮출 수 있습니다.
              </p>
            </div>
            <div className="bg-white border border-slate-200 rounded-lg p-8 hover:shadow-lg transition-shadow">
              <div className="text-[#D4A857] font-bold text-3xl mb-4">&quot;02&quot;</div>
              <h3 className="font-bold text-slate-900 mb-3">사전 증여 전략</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                사전에 계획적으로 증여하여 증여세 부담을 분산시킬 수 있습니다.
              </p>
            </div>
            <div className="bg-white border border-slate-200 rounded-lg p-8 hover:shadow-lg transition-shadow">
              <div className="text-[#D4A857] font-bold text-3xl mb-4">&quot;03&quot;</div>
              <h3 className="font-bold text-slate-900 mb-3">합법적인 절세</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                법적 테두리 내에서 다양한 절세 방법을 활용하여 세금 부담을 줄이는 것이 중요합니다.
              </p>
            </div>
          </div>
        </section>

        {/* 증여재산공제 */}
        <section className="bg-slate-50 rounded-lg p-8 md:p-12">
          <h2 className="text-2xl font-serif font-bold text-slate-900 mb-4 text-center">증여재산 공제 한도</h2>
          <p className="text-slate-600 text-center mb-8">10년간 합산하여 적용됩니다.</p>
          <div className="max-w-2xl mx-auto">
            <table className="w-full text-sm">
              <thead className="bg-slate-200">
                <tr>
                  <th className="py-3 px-4 text-left">증여자와의 관계</th>
                  <th className="py-3 px-4 text-right">공제 한도</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr className="bg-white"><td className="py-3 px-4">배우자</td><td className="py-3 px-4 text-right font-bold text-[#D4A857]">6억원</td></tr>
                <tr className="bg-white"><td className="py-3 px-4">직계존속(부모)</td><td className="py-3 px-4 text-right font-bold text-[#D4A857]">5천만원</td></tr>
                <tr className="bg-white"><td className="py-3 px-4">직계비속(자녀)</td><td className="py-3 px-4 text-right font-bold text-[#D4A857]">5천만원</td></tr>
                <tr className="bg-white"><td className="py-3 px-4">미성년자 자녀</td><td className="py-3 px-4 text-right font-bold text-[#D4A857]">2천만원</td></tr>
                <tr className="bg-white"><td className="py-3 px-4">기타 친족</td><td className="py-3 px-4 text-right font-bold text-[#D4A857]">1천만원</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 세율 구조 */}
        <section className="text-center">
          <h2 className="text-2xl font-serif font-bold text-slate-900 mb-4">증여세 세율 구조</h2>
          <p className="text-slate-600 text-lg">
            과세 표준에 따라 <strong className="text-[#D4A857]">10%에서 최대 50%까지</strong>의 누진세율이 적용됩니다.
          </p>
        </section>

        {/* 신고 절차 */}
        <section className="bg-[#050B16] text-white rounded-lg p-8 md:p-12">
          <h2 className="text-2xl font-serif font-bold mb-8 text-center">증여세 신고 절차</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-[#D4A857] rounded-lg">
                <Calendar size={24} />
              </div>
              <div>
                <h3 className="font-bold mb-2">신고 기간</h3>
                <p className="text-slate-300 text-sm">증여일이 속하는 달의 말일부터 3개월 이내</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="p-3 bg-[#D4A857] rounded-lg">
                <FileText size={24} />
              </div>
              <div>
                <h3 className="font-bold mb-2">신고 방법</h3>
                <p className="text-slate-300 text-sm">국세청 홈택스를 통해 전자 신고하거나 세무서를 방문하여 신고</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section>
          <h2 className="text-2xl font-serif font-bold text-slate-900 mb-8 text-center">증여세 관련 자주 묻는 질문</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            <details className="group bg-slate-50 rounded-lg">
              <summary className="flex items-center justify-between p-6 cursor-pointer">
                <span className="font-medium text-slate-900">증여세를 납부하지 않으면 어떻게 되나요?</span>
                <ChevronDown size={20} className="text-slate-400 group-open:rotate-180 transition-transform" />
              </summary>
              <div className="px-6 pb-6 text-slate-600 text-sm leading-relaxed">
                신고·납부 불이행 시 무신고가산세(20~40%)와 납부불성실가산세가 부과됩니다. 세무조사 대상이 될 수 있으며, 숨긴 증여가 발견되면 더 높은 가산세가 적용됩니다.
              </div>
            </details>
            <details className="group bg-slate-50 rounded-lg">
              <summary className="flex items-center justify-between p-6 cursor-pointer">
                <span className="font-medium text-slate-900">증여세 공제는 어떻게 적용되나요?</span>
                <ChevronDown size={20} className="text-slate-400 group-open:rotate-180 transition-transform" />
              </summary>
              <div className="px-6 pb-6 text-slate-600 text-sm leading-relaxed">
                증여재산 공제는 10년 단위로 적용됩니다. 예를 들어 성인 자녀에게 10년간 총 5천만원까지 증여세 없이 증여할 수 있습니다. 10년이 지나면 공제 한도가 리셋됩니다.
              </div>
            </details>
            <details className="group bg-slate-50 rounded-lg">
              <summary className="flex items-center justify-between p-6 cursor-pointer">
                <span className="font-medium text-slate-900">증여세는 누가 납부하나요?</span>
                <ChevronDown size={20} className="text-slate-400 group-open:rotate-180 transition-transform" />
              </summary>
              <div className="px-6 pb-6 text-slate-600 text-sm leading-relaxed">
                증여세는 원칙적으로 증여받는 사람(수증자)이 납부합니다. 다만, 수증자가 납부할 능력이 없는 경우 증여자가 연대하여 납부할 의무가 있습니다.
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
