import Link from 'next/link';
import PageHeader from '@/components/PageHeader';
import { Lock, Phone, ChevronDown, ArrowRight, Scale, FileCheck, Gavel } from 'lucide-react';

export default function BulbokPage() {
  return (
    <div className="bg-white min-h-screen">
      <PageHeader 
        title="조세불복" 
        subTitle="납세자가 세무서의 과세 처분에 대해 이의가 있을 때 이를 다투기 위해 법적인 절차를 밟는 과정입니다." 
      />
      
      <div className="container mx-auto px-6 py-20 space-y-24">
        
        {/* 정의 */}
        <section className="max-w-4xl mx-auto text-center">
          <p className="text-slate-600 text-lg leading-relaxed">
            부당하거나 잘못된 과세 처분에 대해 납세자의 권리를 보호하고,<br className="hidden md:block"/>
            공정한 세금 부과를 위해 필요합니다.
          </p>
        </section>

        {/* 절차 */}
        <section>
          <h2 className="text-2xl font-serif font-bold text-slate-900 mb-8 text-center">조세불복 절차</h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
            <div className="bg-slate-50 p-6 rounded-lg text-center min-w-[160px]">
              <div className="w-12 h-12 bg-[#D4A857] rounded-full flex items-center justify-center text-white font-bold mx-auto mb-3">1</div>
              <h3 className="font-bold text-slate-900">과세 처분</h3>
              <p className="text-sm text-slate-500 mt-1">세무서 고지</p>
            </div>
            <ArrowRight className="text-slate-300 rotate-90 md:rotate-0" />
            <div className="bg-slate-50 p-6 rounded-lg text-center min-w-[160px]">
              <div className="w-12 h-12 bg-[#D4A857] rounded-full flex items-center justify-center text-white font-bold mx-auto mb-3">2</div>
              <h3 className="font-bold text-slate-900">이의신청</h3>
              <p className="text-sm text-slate-500 mt-1">90일 이내</p>
            </div>
            <ArrowRight className="text-slate-300 rotate-90 md:rotate-0" />
            <div className="bg-slate-50 p-6 rounded-lg text-center min-w-[160px]">
              <div className="w-12 h-12 bg-[#D4A857] rounded-full flex items-center justify-center text-white font-bold mx-auto mb-3">3</div>
              <h3 className="font-bold text-slate-900">심판청구</h3>
              <p className="text-sm text-slate-500 mt-1">조세심판원</p>
            </div>
            <ArrowRight className="text-slate-300 rotate-90 md:rotate-0" />
            <div className="bg-slate-50 p-6 rounded-lg text-center min-w-[160px]">
              <div className="w-12 h-12 bg-[#D4A857] rounded-full flex items-center justify-center text-white font-bold mx-auto mb-3">4</div>
              <h3 className="font-bold text-slate-900">행정소송</h3>
              <p className="text-sm text-slate-500 mt-1">법원 제소</p>
            </div>
          </div>
        </section>

        {/* 전문가 필요 이유 */}
        <section className="grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-slate-100 h-80 rounded-lg flex items-center justify-center">
            <Lock size={100} className="text-slate-300" />
          </div>
          <div>
            <h2 className="text-2xl font-serif font-bold text-slate-900 mb-4">
              질 싸움도 이기는 조세불복 사례,<br/>국세청 출신 전문가와 함께 해야하는 이유
            </h2>
            <div className="text-slate-600 leading-relaxed space-y-4">
              <p>
                유동수 대표세무사는 25년 경력 국세청 출신으로 
                <strong className="text-slate-900"> 청 내부의 절차와 시스템을 잘 이해</strong>하고 있습니다.
              </p>
              <p>
                <strong className="text-slate-900">국세청의 결정 과정과 내부 정책</strong>을 잘 알고 있기 때문에 
                조세불복 신청서 작성 시 이를 효과적으로 반영할 수 있습니다.
              </p>
              <p>
                조세불복은 세무 업무 중에서도 난이도가 높은 분야입니다. 
                따라서, <strong className="text-slate-900">깊이 있는 지식과 풍부한 경험이 있는 전문가</strong>와 함께하실 것을 권합니다.
              </p>
            </div>
          </div>
        </section>

        {/* 서비스 종류 */}
        <section>
          <h2 className="text-2xl font-serif font-bold text-slate-900 mb-8 text-center">
            조세불복 <span className="text-[#D4A857]">주요 서비스</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white border border-slate-200 rounded-lg p-8 hover:shadow-lg transition-shadow hover:border-[#D4A857]">
              <div className="w-14 h-14 bg-slate-100 rounded-lg flex items-center justify-center mb-6">
                <FileCheck size={28} className="text-[#D4A857]" />
              </div>
              <h3 className="font-bold text-slate-900 mb-3 text-lg">과세전적부심사</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                세무조사 결과 통지 후 과세 처분 전에 과세의 적법성을 심사받는 절차입니다. 조기에 분쟁을 해결할 수 있습니다.
              </p>
            </div>
            <div className="bg-white border border-slate-200 rounded-lg p-8 hover:shadow-lg transition-shadow hover:border-[#D4A857]">
              <div className="w-14 h-14 bg-slate-100 rounded-lg flex items-center justify-center mb-6">
                <Scale size={28} className="text-[#D4A857]" />
              </div>
              <h3 className="font-bold text-slate-900 mb-3 text-lg">이의신청 · 심판청구</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                위법·부당한 과세 처분에 대해 세무서 또는 조세심판원에 불복을 청구하여 납세자의 권리를 구제받습니다.
              </p>
            </div>
            <div className="bg-white border border-slate-200 rounded-lg p-8 hover:shadow-lg transition-shadow hover:border-[#D4A857]">
              <div className="w-14 h-14 bg-slate-100 rounded-lg flex items-center justify-center mb-6">
                <Gavel size={28} className="text-[#D4A857]" />
              </div>
              <h3 className="font-bold text-slate-900 mb-3 text-lg">경정청구</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                이미 납부한 세금 중 과다 납부된 부분에 대해 환급을 청구합니다. 숨은 환급금을 찾아드립니다.
              </p>
            </div>
          </div>
        </section>

        {/* 핵심 강점 */}
        <section className="bg-[#050B16] text-white rounded-lg p-8 md:p-12">
          <h2 className="text-2xl font-serif font-bold mb-8 text-center">유동수 세무회계의 조세불복 강점</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="flex items-start gap-4">
              <div className="w-2 h-2 bg-[#D4A857] rounded-full mt-2"></div>
              <p className="text-slate-300">국세청 조사과 25년 근무로 조사·심사 프로세스 완벽 이해</p>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-2 h-2 bg-[#D4A857] rounded-full mt-2"></div>
              <p className="text-slate-300">과세 처분의 위법·부당성을 정확히 파악하는 전문성</p>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-2 h-2 bg-[#D4A857] rounded-full mt-2"></div>
              <p className="text-slate-300">조세심판원·국세청 심사청구 다수 경험</p>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-2 h-2 bg-[#D4A857] rounded-full mt-2"></div>
              <p className="text-slate-300">치밀한 법리 분석과 논리적 주장 구성</p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section>
          <h2 className="text-2xl font-serif font-bold text-slate-900 mb-8 text-center">조세불복 관련 자주 묻는 질문</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            <details className="group bg-slate-50 rounded-lg">
              <summary className="flex items-center justify-between p-6 cursor-pointer">
                <span className="font-medium text-slate-900">조세불복 기간 동안 다른 세무조사가 진행될 수 있나요?</span>
                <ChevronDown size={20} className="text-slate-400 group-open:rotate-180 transition-transform" />
              </summary>
              <div className="px-6 pb-6 text-slate-600 text-sm leading-relaxed">
                원칙적으로 불복 절차가 진행 중인 과세 처분과 관련된 사항에 대해서는 재조사가 제한됩니다. 다만, 별도의 세목이나 과세 기간에 대해서는 조사가 진행될 수 있습니다.
              </div>
            </details>
            <details className="group bg-slate-50 rounded-lg">
              <summary className="flex items-center justify-between p-6 cursor-pointer">
                <span className="font-medium text-slate-900">조세불복 절차에서 법률 대리인을 꼭 선임해야 하나요?</span>
                <ChevronDown size={20} className="text-slate-400 group-open:rotate-180 transition-transform" />
              </summary>
              <div className="px-6 pb-6 text-slate-600 text-sm leading-relaxed">
                법적으로 필수는 아니지만, 조세불복은 전문적인 세법 지식과 경험이 필요합니다. 세무사나 변호사 등 전문가의 조력을 받으면 성공 가능성을 높일 수 있습니다.
              </div>
            </details>
            <details className="group bg-slate-50 rounded-lg">
              <summary className="flex items-center justify-between p-6 cursor-pointer">
                <span className="font-medium text-slate-900">조세불복을 신청하면 세금 납부를 유예할 수 있나요?</span>
                <ChevronDown size={20} className="text-slate-400 group-open:rotate-180 transition-transform" />
              </summary>
              <div className="px-6 pb-6 text-slate-600 text-sm leading-relaxed">
                불복 청구 자체만으로 납부가 유예되지는 않습니다. 별도로 징수유예 또는 납부기한 연장을 신청해야 합니다. 담보 제공 등 일정 요건 충족 시 유예가 가능합니다.
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
