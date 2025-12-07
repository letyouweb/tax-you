import Link from 'next/link';
import Image from 'next/image';
import PageHeader from '@/components/PageHeader';
import {
  CheckCircle2,
  Shield,
  FileText,
  Lock,
  Calculator,
  TrendingUp,
  Users,
  Gift,
  ArrowRight,
} from 'lucide-react';

export default function Services() {
  return (
    <div className="bg-white min-h-screen">
      <PageHeader
        title="전문 분야"
        subTitle="국세청 출신 전문가가 제공하는 프리미엄 세무 서비스입니다."
      />

      {/* 서비스 카드 네비게이션 */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          <Link
            href="/services/yangdo"
            className="bg-slate-50 p-6 rounded-lg text-center hover:bg-[#D4A857] hover:text-white transition-all group"
          >
            <TrendingUp
              size={32}
              className="mx-auto mb-3 text-[#D4A857] group-hover:text-white"
            />
            <span className="font-bold">양도소득세</span>
          </Link>
          <Link
            href="/services/sangsok"
            className="bg-slate-50 p-6 rounded-lg text-center hover:bg-[#D4A857] hover:text-white transition-all group"
          >
            <Users
              size={32}
              className="mx-auto mb-3 text-[#D4A857] group-hover:text-white"
            />
            <span className="font-bold">상속세</span>
          </Link>
          <Link
            href="/services/jeungyo"
            className="bg-slate-50 p-6 rounded-lg text-center hover:bg-[#D4A857] hover:text-white transition-all group"
          >
            <Gift
              size={32}
              className="mx-auto mb-3 text-[#D4A857] group-hover:text-white"
            />
            <span className="font-bold">증여세</span>
          </Link>
          <Link
            href="/services/bulbok"
            className="bg-slate-50 p-6 rounded-lg text-center hover:bg-[#D4A857] hover:text-white transition-all group"
          >
            <Lock
              size={32}
              className="mx-auto mb-3 text-[#D4A857] group-hover:text-white"
            />
            <span className="font-bold">조세불복</span>
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12 space-y-32">
        {/* Service 1 - 세무조사 전담 대응 */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h3 className="text-3xl font-serif font-bold text-slate-900 mb-4">
              세무조사 전담 대응
            </h3>
            <p className="text-[#D4A857] font-medium mb-6">
              &quot;첫 대응이 세금을 결정합니다. 국세청 출신이 직접 방어합니다.&quot;
            </p>
            <div className="text-slate-600 leading-relaxed space-y-4 mb-8">
              <p>
                세무조사는 기업과 개인에게 큰 위기일 수 있습니다. 조사 통지를 받은 직후부터 종결 시점까지,
                국세청 조사과 출신 세무사가 전 과정을 밀착 대응합니다.
              </p>
              <p>
                조사관의 관점에서 예상되는 쟁점을 미리 파악하고, 소명 자료를 체계적으로 준비하여 불필요한
                마찰과 추징세액을 최소화합니다.
              </p>
            </div>
            <ul className="space-y-2 mb-8">
              <li className="flex items-center gap-2 text-slate-700">
                <CheckCircle2 size={18} className="text-[#D4A857]" /> 국세청 조사과 25년
                경력 노하우
              </li>
              <li className="flex items-center gap-2 text-slate-700">
                <CheckCircle2 size={18} className="text-[#D4A857]" /> 조사 단계별 시나리오 및 대응 전략 수립
              </li>
              <li className="flex items-center gap-2 text-slate-700">
                <CheckCircle2 size={18} className="text-[#D4A857]" /> 모의 세무조사를 통한 리스크 사전 진단
              </li>
            </ul>
            <Link
              href="/consult"
              className="px-8 py-3 bg-[#D4A857] text-white font-bold rounded-sm hover:bg-[#C19545] inline-block"
            >
              세무조사 긴급 상담
            </Link>
          </div>
          <div className="order-1 md:order-2 bg-slate-100 h-80 rounded overflow-hidden">
            <Image
              src="/images/유동수세무사_세무조사_전담_대응.jpg"
              alt="세무조사 전담 대응 - 유동수 세무사"
              width={1200}
              height={700}
              className="w-full h-full object-cover"
              priority
            />
          </div>
        </div>

        {/* Service 2 - 양도·상속·증여 맞춤 설계 */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-slate-100 h-80 rounded overflow-hidden">
            <Image
              src="/images/유동수세무사_양도_상속_증여_맞춤설계.jpg"
              alt="양도·상속·증여 맞춤 설계 - 유동수 세무사"
              width={1200}
              height={700}
              className="w-full h-full object-cover"
              priority
            />
          </div>
          <div>
            <h3 className="text-3xl font-serif font-bold text-slate-900 mb-4">
              양도·상속·증여 맞춤 설계
            </h3>
            <p className="text-[#D4A857] font-medium mb-6">
              &quot;세금은 줄이고, 가족 간의 분쟁은 예방합니다.&quot;
            </p>
            <div className="text-slate-600 leading-relaxed space-y-4 mb-8">
              <p>
                부동산 양도와 자산 이전은 단순한 세율 계산이 아닙니다. 가족 관계, 자산의 종류, 미래 가치까지
                고려한 종합적인 설계가 필요합니다.
              </p>
              <p>
                다각도의 시뮬레이션을 통해 최적의 절세 플랜을 제시하고, 신고부터 사후 관리까지 원스톱으로
                지원합니다.
              </p>
            </div>
            <ul className="space-y-2 mb-8">
              <li className="flex items-center gap-2 text-slate-700">
                <CheckCircle2 size={18} className="text-[#D4A857]" /> 상황별(보유기간, 주택수 등) 세액 비교 분석
              </li>
              <li className="flex items-center gap-2 text-slate-700">
                <CheckCircle2 size={18} className="text-[#D4A857]" /> 상속세 재원 마련 및 사전 증여 컨설팅
              </li>
              <li className="flex items-center gap-2 text-slate-700">
                <CheckCircle2 size={18} className="text-[#D4A857]" /> 세무 리스크 없는 안전한 자산 이전
              </li>
            </ul>
            <div className="flex flex-wrap gap-3 mb-6">
              <Link
                href="/services/yangdo"
                className="text-sm text-[#D4A857] border border-[#D4A857] px-4 py-2 rounded hover:bg-[#D4A857] hover:text-white transition-colors flex items-center gap-1"
              >
                양도소득세 상세 <ArrowRight size={14} />
              </Link>
              <Link
                href="/services/sangsok"
                className="text-sm text-[#D4A857] border border-[#D4A857] px-4 py-2 rounded hover:bg-[#D4A857] hover:text-white transition-colors flex items-center gap-1"
              >
                상속세 상세 <ArrowRight size={14} />
              </Link>
              <Link
                href="/services/jeungyo"
                className="text-sm text-[#D4A857] border border-[#D4A857] px-4 py-2 rounded hover:bg-[#D4A857] hover:text-white transition-colors flex items-center gap-1"
              >
                증여세 상세 <ArrowRight size={14} />
              </Link>
            </div>
            <Link
              href="/consult"
              className="px-8 py-3 bg-[#D4A857] text-white font-bold rounded-sm hover:bg-[#C19545] inline-block"
            >
              상속·증여 설계 상담
            </Link>
          </div>
        </div>

        {/* Service 3 - 조세불복 */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h3 className="text-3xl font-serif font-bold text-slate-900 mb-4">
              조세불복 · 경정청구
            </h3>
            <p className="text-[#D4A857] font-medium mb-6">
              &quot;억울한 세금, 정당한 권리를 되찾아 드립니다.&quot;
            </p>
            <div className="text-slate-600 leading-relaxed space-y-4 mb-8">
              <p>
                위법하거나 부당한 처분으로 권리를 침해받았다면 포기하지 마십시오. 이의신청, 심판청구 등 불복
                절차를 통해 구제받을 수 있습니다.
              </p>
              <p>
                과거에 더 낸 세금이 있다면 경정청구를 통해 환급받을 수 있도록 도와드립니다.
              </p>
            </div>
            <ul className="space-y-2 mb-8">
              <li className="flex items-center gap-2 text-slate-700">
                <CheckCircle2 size={18} className="text-[#D4A857]" /> 과세 전 적부심사 청구 대행
              </li>
              <li className="flex items-center gap-2 text-slate-700">
                <CheckCircle2 size={18} className="text-[#D4A857]" /> 이의신청 및 조세심판청구 수행
              </li>
              <li className="flex items-center gap-2 text-slate-700">
                <CheckCircle2 size={18} className="text-[#D4A857]" /> 숨은 환급금을 찾는 경정청구 서비스
              </li>
            </ul>
            <div className="flex flex-wrap gap-3 mb-6">
              <Link
                href="/services/bulbok"
                className="text-sm text-[#D4A857] border border-[#D4A857] px-4 py-2 rounded hover:bg-[#D4A857] hover:text-white transition-colors flex items-center gap-1"
              >
                조세불복 상세 보기 <ArrowRight size={14} />
              </Link>
            </div>
            <Link
              href="/consult"
              className="px-8 py-3 bg-[#D4A857] text-white font-bold rounded-sm hover:bg-[#C19545] inline-block"
            >
              조세불복 상담 요청
            </Link>
          </div>
          <div className="order-1 md:order-2 bg-slate-100 h-80 rounded overflow-hidden">
            <Image
              src="/images/유동수세무사_조세불복_경정청구.jpg"
              alt="조세불복·경정청구 - 유동수 세무사"
              width={1200}
              height={700}
              className="w-full h-full object-cover"
              priority
            />
          </div>
        </div>

        {/* Service 4 - 상시 세무 자문 */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-slate-100 h-80 rounded overflow-hidden">
            <Image
              src="/images/유동수세무사_상시_세무_자문.jpg"
              alt="상시 세무 자문 - 유동수 세무사"
              width={1200}
              height={700}
              className="w-full h-full object-cover"
              priority
            />
          </div>
          <div>
            <h3 className="text-3xl font-serif font-bold text-slate-900 mb-4">
              상시 세무 자문
            </h3>
            <p className="text-[#D4A857] font-medium mb-6">
              &quot;사업의 든든한 파트너가 되어드립니다.&quot;
            </p>
            <div className="text-slate-600 leading-relaxed space-y-4 mb-8">
              <p>
                법인 및 개인 사업자를 위한 기장 대행 및 세무 신고를 대행합니다. 단순한 신고 대행을 넘어, 정기적인
                결산과 리스크 점검을 통해 사업의 안정성을 높입니다.
              </p>
            </div>
            <ul className="space-y-2 mb-8">
              <li className="flex items-center gap-2 text-slate-700">
                <CheckCircle2 size={18} className="text-[#D4A857]" /> 업종별 특성에 맞춘 꼼꼼한 기장 관리
              </li>
              <li className="flex items-center gap-2 text-slate-700">
                <CheckCircle2 size={18} className="text-[#D4A857]" /> 부가세, 소득세, 법인세 신고 대행
              </li>
              <li className="flex items-center gap-2 text-slate-700">
                <CheckCircle2 size={18} className="text-[#D4A857]" /> 대표 세무사와의 직접 소통 채널
              </li>
            </ul>
            <Link
              href="/consult"
              className="px-8 py-3 bg-[#D4A857] text-white font-bold rounded-sm hover:bg-[#C19545] inline-block"
            >
              상시 자문 문의
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
