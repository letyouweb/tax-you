import Link from 'next/link';
import Image from 'next/image';
import PageHeader from '@/components/PageHeader';
import { Users, Calendar, FileText, Phone, ChevronDown } from 'lucide-react';

export default function SangsokPage() {
  return (
    <div className="bg-white min-h-screen">
      <PageHeader 
        title="상속세" 
        subTitle="사망한 사람의 재산을 상속받은 경우 부과되는 세금입니다." 
      />
      
      <div className="container mx-auto px-6 py-20 space-y-24">
        
        {/* 과세 자산 */}
        <section className="text-center">
          <h2 className="text-2xl font-serif font-bold text-slate-900 mb-4">상속세 과세 자산</h2>
          <p className="text-slate-600 text-lg">부동산, 주식, 예금 등 피상속인의 모든 재산이 포함</p>
        </section>

        {/* 과세표준 산정 */}
        <section className="bg-slate-50 rounded-lg p-8 md:p-12">
          <h2 className="text-2xl font-serif font-bold text-slate-900 mb-4 text-center">과세 표준 산정 방법</h2>
          <p className="text-slate-600 text-center mb-8">상속 재산가액에서 공제 가능한 금액을 제외한 금액이 과세 표준이 됩니다.</p>
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <div className="bg-white p-6 rounded-lg border border-slate-200">
              <div className="text-[#D4A857] font-bold mb-2">상속재산가액</div>
              <p className="text-slate-600 text-sm">사망 당시 피상속인이 소유한 모든 재산의 시가</p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-slate-200">
              <div className="text-[#D4A857] font-bold mb-2">공제 항목</div>
              <p className="text-slate-600 text-sm">기초공제, 인적공제, 부채공제, 장례비용 공제 등</p>
            </div>
          </div>
        </section>

        {/* 전문가 필요 이유 */}
        <section className="grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-slate-100 h-80 rounded-lg flex items-center justify-center">
            <Image
              src="/images/유동수세무사_상속세.jpg"
              alt="상속세 전문 유동수 세무사"
              width={1200}
              height={700}
              className="w-full h-auto object-cover"
              priority
            />
          </div>
          <div>
            <h2 className="text-2xl font-serif font-bold text-slate-900 mb-4">
              상속세, 국세청 출신 전문가에게<br/>맡겨야 하는 이유?
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
                상속세는 전략에 따라 절세 금액이 크게 달라지기 때문에 반드시 
                <strong className="text-slate-900"> 전문가에게 맡겨야 최대의 절세</strong> 효과를 누리실 수 있습니다.
              </p>
            </div>
          </div>
        </section>

        {/* 절세 노하우 */}
        <section>
          <h2 className="text-2xl font-serif font-bold text-slate-900 mb-8 text-center">
            상속세 <span className="text-[#D4A857]">주요 절세 노하우</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white border border-slate-200 rounded-lg p-8 hover:shadow-lg transition-shadow">
              <div className="text-[#D4A857] font-bold text-3xl mb-4">&quot;01&quot;</div>
              <h3 className="font-bold text-slate-900 mb-3">사전 증여 활용</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                상속인이 살아있을 때 증여를 통해 일부 재산을 미리 이전하여 상속세 부담을 줄일 수 있습니다.
              </p>
            </div>
            <div className="bg-white border border-slate-200 rounded-lg p-8 hover:shadow-lg transition-shadow">
              <div className="text-[#D4A857] font-bold text-3xl mb-4">&quot;02&quot;</div>
              <h3 className="font-bold text-slate-900 mb-3">가업상속공제</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                가업을 승계하는 경우 일정 요건을 충족하면 상속세 공제를 받을 수 있습니다.
              </p>
            </div>
            <div className="bg-white border border-slate-200 rounded-lg p-8 hover:shadow-lg transition-shadow">
              <div className="text-[#D4A857] font-bold text-3xl mb-4">&quot;03&quot;</div>
              <h3 className="font-bold text-slate-900 mb-3">공제 항목 최대한 활용</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                각종 공제 항목을 최대한 활용하여 과세 표준을 낮추는 것이 중요합니다.
              </p>
            </div>
          </div>
        </section>

        {/* 세율 구조 */}
        <section className="bg-slate-50 rounded-lg p-8 md:p-12 text-center">
          <h2 className="text-2xl font-serif font-bold text-slate-900 mb-4">상속세 세율 구조</h2>
          <p className="text-slate-600 text-lg">
            과세 표준에 따라 <strong className="text-[#D4A857]">10%에서 최대 50%까지</strong>의 누진세율이 적용됩니다.
          </p>
          <div className="mt-8 max-w-2xl mx-auto">
            <table className="w-full text-sm">
              <thead className="bg-slate-200">
                <tr>
                  <th className="py-3 px-4 text-left">과세표준</th>
                  <th className="py-3 px-4 text-right">세율</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr className="bg-white"><td className="py-3 px-4">1억원 이하</td><td className="py-3 px-4 text-right">10%</td></tr>
                <tr className="bg-white"><td className="py-3 px-4">1억원 초과 ~ 5억원 이하</td><td className="py-3 px-4 text-right">20%</td></tr>
                <tr className="bg-white"><td className="py-3 px-4">5억원 초과 ~ 10억원 이하</td><td className="py-3 px-4 text-right">30%</td></tr>
                <tr className="bg-white"><td className="py-3 px-4">10억원 초과 ~ 30억원 이하</td><td className="py-3 px-4 text-right">40%</td></tr>
                <tr className="bg-white"><td className="py-3 px-4">30억원 초과</td><td className="py-3 px-4 text-right">50%</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 신고 절차 */}
        <section className="bg-[#050B16] text-white rounded-lg p-8 md:p-12">
          <h2 className="text-2xl font-serif font-bold mb-8 text-center">상속세 신고 절차</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-[#D4A857] rounded-lg">
                <Calendar size={24} />
              </div>
              <div>
                <h3 className="font-bold mb-2">신고 기간</h3>
                <p className="text-slate-300 text-sm">상속개시일(사망일)로부터 6개월 이내</p>
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
          <h2 className="text-2xl font-serif font-bold text-slate-900 mb-8 text-center">상속세 관련 자주 묻는 질문</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            <details className="group bg-slate-50 rounded-lg">
              <summary className="flex items-center justify-between p-6 cursor-pointer">
                <span className="font-medium text-slate-900">외국에 있는 재산도 상속세 대상인가요?</span>
                <ChevronDown size={20} className="text-slate-400 group-open:rotate-180 transition-transform" />
              </summary>
              <div className="px-6 pb-6 text-slate-600 text-sm leading-relaxed">
                네, 피상속인이 거주자인 경우 국내외 모든 재산이 상속세 과세 대상입니다. 다만, 외국에서 납부한 상속세는 외국납부세액공제를 통해 이중과세를 방지할 수 있습니다.
              </div>
            </details>
            <details className="group bg-slate-50 rounded-lg">
              <summary className="flex items-center justify-between p-6 cursor-pointer">
                <span className="font-medium text-slate-900">상속세를 납부하지 않으면 어떻게 되나요?</span>
                <ChevronDown size={20} className="text-slate-400 group-open:rotate-180 transition-transform" />
              </summary>
              <div className="px-6 pb-6 text-slate-600 text-sm leading-relaxed">
                신고·납부 불이행 시 무신고가산세(20~40%)와 납부불성실가산세(1일 0.022%)가 부과됩니다. 또한 상속재산에 대한 압류 등 강제집행이 이루어질 수 있습니다.
              </div>
            </details>
            <details className="group bg-slate-50 rounded-lg">
              <summary className="flex items-center justify-between p-6 cursor-pointer">
                <span className="font-medium text-slate-900">상속세는 누구에게 부과되나요?</span>
                <ChevronDown size={20} className="text-slate-400 group-open:rotate-180 transition-transform" />
              </summary>
              <div className="px-6 pb-6 text-slate-600 text-sm leading-relaxed">
                상속세는 상속인 각자가 받은 상속재산 비율에 따라 연대하여 납부할 의무가 있습니다. 상속인이 여러 명인 경우 각자 받은 재산 비율로 안분하여 납부합니다.
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
