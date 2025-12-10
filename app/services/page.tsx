'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import PageHeader from '@/components/PageHeader';
import {
  CheckCircle2,
  Lock,
  TrendingUp,
  Users,
  Gift,
  ArrowRight,
  ChevronDown,
} from 'lucide-react';

// [기능] 모바일용 더보기 아코디언 컴포넌트
function CollapsibleText({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-8">
      <div className={`text-slate-600 leading-relaxed space-y-4 ${isOpen ? '' : 'line-clamp-3 md:line-clamp-none'}`}>
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
/* ... 상단 import 생략 ... */

export default function Services() {
  return (
    <div className="bg-white min-h-screen">
      <PageHeader
        title="전문 분야"
        subTitle="국세청 출신 전문가가 제공하는 프리미엄 세무 서비스입니다."
      />

      {/* [UI 적용 1] 서비스 카드 네비게이션 - 아이콘 삭제됨 */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {/* 1. 양도소득세 */}
          <Link
            href="/services/yangdo"
            className="bg-slate-50/80 border border-slate-200 rounded-xl p-6 text-center
                       hover:bg-[#D4A857] hover:text-white hover:-translate-y-1 hover:shadow-lg
                       transition-all group"
          >
            {/* 아이콘 삭제됨 (<TrendingUp ... />) */}
            <p className="text-[10px] md:text-[11px] tracking-[0.18em] text-slate-400 group-hover:text-white/80 mb-2">
              SERVICE · 01
            </p>
            <span className="font-bold">양도소득세</span>
          </Link>

          {/* 2. 상속세 */}
          <Link
            href="/services/sangsok"
            className="bg-slate-50/80 border border-slate-200 rounded-xl p-6 text-center
                       hover:bg-[#D4A857] hover:text-white hover:-translate-y-1 hover:shadow-lg
                       transition-all group"
          >
            {/* 아이콘 삭제됨 (<Users ... />) */}
            <p className="text-[10px] md:text-[11px] tracking-[0.18em] text-slate-400 group-hover:text-white/80 mb-2">
              SERVICE · 02
            </p>
            <span className="font-bold">상속세</span>
          </Link>

          {/* 3. 증여세 */}
          <Link
            href="/services/jeungyo"
            className="bg-slate-50/80 border border-slate-200 rounded-xl p-6 text-center
                       hover:bg-[#D4A857] hover:text-white hover:-translate-y-1 hover:shadow-lg
                       transition-all group"
          >
            {/* 아이콘 삭제됨 (<Gift ... />) */}
            <p className="text-[10px] md:text-[11px] tracking-[0.18em] text-slate-400 group-hover:text-white/80 mb-2">
              SERVICE · 03
            </p>
            <span className="font-bold">증여세</span>
          </Link>

          {/* 4. 조세불복 */}
          <Link
            href="/services/bulbok"
            className="bg-slate-50/80 border border-slate-200 rounded-xl p-6 text-center
                       hover:bg-[#D4A857] hover:text-white hover:-translate-y-1 hover:shadow-lg
                       transition-all group"
          >
            {/* 아이콘 삭제됨 (<Lock ... />) */}
            <p className="text-[10px] md:text-[11px] tracking-[0.18em] text-slate-400 group-hover:text-white/80 mb-2">
              SERVICE · 04
            </p>
            <span className="font-bold">조세불복</span>
          </Link>
        </div>
      </div>

      {/* ... 이하 코드는 기존과 동일하므로 생략 ... */}


      <div className="container mx-auto px-6 py-12 space-y-32">
        
        {/* -------------------------------------------------------------------------
            Service 1 - 세무조사 전담 대응
        ------------------------------------------------------------------------- */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            {/* [UI 적용 2] 작은 영문 헤더 추가 */}
            <p className="text-[11px] tracking-[0.22em] text-[#D4A857] font-semibold mb-3">
              SERVICE 01 · TAX INVESTIGATION
            </p>
            <h3 className="text-3xl font-serif font-bold text-slate-900 mb-2">
              세무조사 전담 대응
            </h3>
            
            <p className="text-sm md:text-base text-slate-500 mb-6 border-l-4 border-[#D4A857] pl-3">
              세무조사 통지서 받으셨다면, <span className="font-bold text-slate-700">첫 72시간 대응</span>이 세액을 좌우합니다.
            </p>

            <p className="text-[#D4A857] font-medium mb-6">
              &quot;첫 대응이 세금을 결정합니다. 국세청 출신이 직접 방어합니다.&quot;
            </p>
            
            <CollapsibleText>
              <p>
                세무조사는 기업과 개인에게 큰 위기일 수 있습니다. 조사 통지를 받은 직후부터 종결 시점까지,
                국세청 조사과 출신 세무사가 전 과정을 밀착 대응합니다.
              </p>
              <p>
                조사관의 관점에서 예상되는 쟁점을 미리 파악하고, 소명 자료를 체계적으로 준비하여 불필요한
                마찰과 추징세액을 최소화합니다.
              </p>
            </CollapsibleText>

            <ul className="space-y-2 mb-8">
              <li className="flex items-center gap-2 text-slate-700">
                <CheckCircle2 size={18} className="text-[#D4A857] flex-shrink-0" /> 국세청 조사과 25년 경력 노하우
              </li>
              <li className="flex items-center gap-2 text-slate-700">
                <CheckCircle2 size={18} className="text-[#D4A857] flex-shrink-0" /> 조사 단계별 시나리오 및 대응 전략 수립
              </li>
              <li className="flex items-center gap-2 text-slate-700">
                <CheckCircle2 size={18} className="text-[#D4A857] flex-shrink-0" /> 모의 세무조사를 통한 리스크 사전 진단
              </li>
            </ul>

            {/* 기능 버튼 (유지) */}
            <div className="flex flex-col items-start gap-4">
              <div className="flex flex-col gap-2">
                <Link
                  href="/consult?type=investigation"
                  className="inline-flex items-center gap-2 text-xs md:text-sm px-5 py-2.5 rounded-full border border-[#D4A857] text-[#D4A857] font-bold hover:bg-[#D4A857] hover:text-white transition-all"
                >
                  통지서 긴급검토 요청 <ArrowRight size={14} />
                </Link>
                <p className="text-[11px] text-slate-400 pl-2">
                  * 통지서 도착 후 72시간 내 초기 대응 가이드를 제공합니다.
                </p>
              </div>
              
              <Link
                href="/consult?type=investigation"
                className="px-8 py-3 bg-[#D4A857] text-white font-bold rounded-sm hover:bg-[#C19545] shadow-lg shadow-[#D4A857]/20 transition-all"
              >
                세무조사 긴급 상담
              </Link>
            </div>
          </div>
          <div className="order-1 md:order-2 bg-slate-100 h-80 rounded overflow-hidden shadow-xl">
            <Image
              src="/images/유동수세무사_세무조사_전담_대응.jpg"
              alt="세무조사 전담 대응 - 유동수 세무사"
              width={1200}
              height={700}
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
              priority
            />
          </div>
        </div>

        {/* -------------------------------------------------------------------------
            Service 2 - 양도·상속·증여 맞춤 설계
        ------------------------------------------------------------------------- */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-slate-100 h-80 rounded overflow-hidden shadow-xl order-1">
            <Image
              src="/images/유동수세무사_양도_상속_증여_맞춤설계.jpg"
              alt="양도·상속·증여 맞춤 설계 - 유동수 세무사"
              width={1200}
              height={700}
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
              priority
            />
          </div>
          <div className="order-2">
            {/* [UI 적용 2] 작은 영문 헤더 추가 */}
            <p className="text-[11px] tracking-[0.22em] text-[#D4A857] font-semibold mb-3">
              SERVICE 02 · TRANSFER · INHERITANCE · GIFT
            </p>
            <h3 className="text-3xl font-serif font-bold text-slate-900 mb-2">
              양도·상속·증여 맞춤 설계
            </h3>

            <p className="text-sm md:text-base text-slate-500 mb-6 border-l-4 border-[#D4A857] pl-3">
              계약서 쓰기 전에, <span className="font-bold text-slate-700">세후 실수령액</span>과 <span className="font-bold text-slate-700">가족관계 영향</span>부터 확인하세요.
            </p>

            <p className="text-[#D4A857] font-medium mb-6">
              &quot;세금은 줄이고, 가족 간의 분쟁은 예방합니다.&quot;
            </p>
            
            <CollapsibleText>
              <p>
                부동산 양도와 자산 이전은 단순한 세율 계산이 아닙니다. 가족 관계, 자산의 종류, 미래 가치까지
                고려한 종합적인 설계가 필요합니다.
              </p>
              <p>
                다각도의 시뮬레이션을 통해 최적의 절세 플랜을 제시하고, 신고부터 사후 관리까지 원스톱으로
                지원합니다.
              </p>
            </CollapsibleText>

            <ul className="space-y-2 mb-8">
              <li className="flex items-center gap-2 text-slate-700">
                <CheckCircle2 size={18} className="text-[#D4A857] flex-shrink-0" /> 상황별(보유기간, 주택수 등) 세액 비교 분석
              </li>
              <li className="flex items-center gap-2 text-slate-700">
                <CheckCircle2 size={18} className="text-[#D4A857] flex-shrink-0" /> 상속세 재원 마련 및 사전 증여 컨설팅
              </li>
              <li className="flex items-center gap-2 text-slate-700">
                <CheckCircle2 size={18} className="text-[#D4A857] flex-shrink-0" /> 세무 리스크 없는 안전한 자산 이전
              </li>
            </ul>

            {/* 기능 버튼 (유지) */}
            <div className="flex flex-wrap gap-2 mb-6">
              <Link
                href="/consult?type=yangdo"
                className="text-xs md:text-sm px-4 py-2 rounded-full border border-[#D4A857] text-[#D4A857] font-medium hover:bg-[#D4A857] hover:text-white transition-colors"
              >
                양도 계약 전 세금 점검 요청
              </Link>
              <Link
                href="/consult?type=inherit-gift"
                className="text-xs md:text-sm px-4 py-2 rounded-full border border-[#D4A857] text-[#D4A857] font-medium hover:bg-[#D4A857] hover:text-white transition-colors"
              >
                가족 상황 맞춤 상속·증여 플랜 문의
              </Link>
            </div>

            <div className="flex flex-wrap gap-3 mb-6">
              <Link
                href="/services/yangdo"
                className="text-sm text-slate-600 bg-slate-50 px-4 py-2 rounded hover:bg-slate-200 transition-colors flex items-center gap-1"
              >
                양도소득세 상세 <ArrowRight size={14} />
              </Link>
              <Link
                href="/services/sangsok"
                className="text-sm text-slate-600 bg-slate-50 px-4 py-2 rounded hover:bg-slate-200 transition-colors flex items-center gap-1"
              >
                상속세 상세 <ArrowRight size={14} />
              </Link>
              <Link
                href="/services/jeungyo"
                className="text-sm text-slate-600 bg-slate-50 px-4 py-2 rounded hover:bg-slate-200 transition-colors flex items-center gap-1"
              >
                증여세 상세 <ArrowRight size={14} />
              </Link>
            </div>
            
            <Link
              href="/consult?type=inherit-gift"
              className="px-8 py-3 bg-[#D4A857] text-white font-bold rounded-sm hover:bg-[#C19545] shadow-lg shadow-[#D4A857]/20 inline-block transition-all"
            >
              상속·증여 설계 상담
            </Link>
          </div>
        </div>

        {/* -------------------------------------------------------------------------
            Service 3 - 조세불복
        ------------------------------------------------------------------------- */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            {/* [UI 적용 2] 작은 영문 헤더 추가 */}
            <p className="text-[11px] tracking-[0.22em] text-[#D4A857] font-semibold mb-3">
              SERVICE 03 · TAX APPEAL
            </p>
            <h3 className="text-3xl font-serif font-bold text-slate-900 mb-2">
              조세불복 · 경정청구
            </h3>

            <p className="text-sm md:text-base text-slate-500 mb-6 border-l-4 border-[#D4A857] pl-3">
              이미 나온 세금도, <span className="font-bold text-slate-700">부당 과세</span>라면 다시 계산할 수 있습니다.
            </p>

            <p className="text-[#D4A857] font-medium mb-6">
              &quot;억울한 세금, 정당한 권리를 되찾아 드립니다.&quot;
            </p>
            
            <CollapsibleText>
              <p>
                위법하거나 부당한 처분으로 권리를 침해받았다면 포기하지 마십시오. 이의신청, 심판청구 등 불복
                절차를 통해 구제받을 수 있습니다.
              </p>
              <p>
                과거에 더 낸 세금이 있다면 경정청구를 통해 환급받을 수 있도록 도와드립니다.
              </p>
            </CollapsibleText>

            <ul className="space-y-2 mb-8">
              <li className="flex items-center gap-2 text-slate-700">
                <CheckCircle2 size={18} className="text-[#D4A857] flex-shrink-0" /> 과세 전 적부심사 청구 대행
              </li>
              <li className="flex items-center gap-2 text-slate-700">
                <CheckCircle2 size={18} className="text-[#D4A857] flex-shrink-0" /> 이의신청 및 조세심판청구 수행
              </li>
              <li className="flex items-center gap-2 text-slate-700">
                <CheckCircle2 size={18} className="text-[#D4A857] flex-shrink-0" /> 숨은 환급금을 찾는 경정청구 서비스
              </li>
            </ul>

            {/* 기능 버튼 (유지) */}
            <div className="flex flex-wrap gap-2 mb-6">
              <Link
                href="/consult?type=appeal"
                className="text-xs md:text-sm px-4 py-2 rounded-full border border-[#D4A857] text-[#D4A857] font-medium hover:bg-[#D4A857] hover:text-white transition-colors"
              >
                이 결정, 부당 과세인지 검토 요청
              </Link>
              <Link
                href="/consult?type=refund"
                className="text-xs md:text-sm px-4 py-2 rounded-full border border-slate-300 text-slate-500 hover:border-[#D4A857] hover:text-[#D4A857] transition-colors"
              >
                예전에 낸 세금, 환급 가능성 확인
              </Link>
            </div>

            <div className="flex flex-wrap gap-3 mb-6">
              <Link
                href="/services/bulbok"
                className="text-sm text-slate-600 bg-slate-50 px-4 py-2 rounded hover:bg-slate-200 transition-colors flex items-center gap-1"
              >
                조세불복 상세 보기 <ArrowRight size={14} />
              </Link>
            </div>
            <Link
              href="/consult?type=appeal"
              className="px-8 py-3 bg-[#D4A857] text-white font-bold rounded-sm hover:bg-[#C19545] shadow-lg shadow-[#D4A857]/20 inline-block transition-all"
            >
              조세불복 상담 요청
            </Link>
          </div>
          <div className="order-1 md:order-2 bg-slate-100 h-80 rounded overflow-hidden shadow-xl">
            <Image
              src="/images/유동수세무사_조세불복_경정청구.jpg"
              alt="조세불복·경정청구 - 유동수 세무사"
              width={1200}
              height={700}
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
              priority
            />
          </div>
        </div>

        {/* -------------------------------------------------------------------------
            Service 4 - 상시 세무 자문
        ------------------------------------------------------------------------- */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-slate-100 h-80 rounded overflow-hidden shadow-xl order-1">
            <Image
              src="/images/유동수세무사_상시_세무_자문.jpg"
              alt="상시 세무 자문 - 유동수 세무사"
              width={1200}
              height={700}
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
              priority
            />
          </div>
          <div className="order-2">
            {/* [UI 적용 2] 작은 영문 헤더 추가 */}
            <p className="text-[11px] tracking-[0.22em] text-[#D4A857] font-semibold mb-3">
              SERVICE 04 · TAX ADVISORY
            </p>
            <h3 className="text-3xl font-serif font-bold text-slate-900 mb-2">
              상시 세무 자문
            </h3>

            <p className="text-sm md:text-base text-slate-500 mb-6 border-l-4 border-[#D4A857] pl-3">
              세무는 뒤처리가 아니라, 사업을 지키는 <span className="font-bold text-slate-700">안전장치</span>입니다.
            </p>

            <p className="text-[#D4A857] font-medium mb-6">
              &quot;사업의 든든한 파트너가 되어드립니다.&quot;
            </p>
            
            <CollapsibleText>
              <p>
                법인 및 개인 사업자를 위한 기장 대행 및 세무 신고를 대행합니다. 단순한 신고 대행을 넘어, 정기적인
                결산과 리스크 점검을 통해 사업의 안정성을 높입니다.
              </p>
            </CollapsibleText>

            <ul className="space-y-2 mb-8">
              <li className="flex items-center gap-2 text-slate-700">
                <CheckCircle2 size={18} className="text-[#D4A857] flex-shrink-0" /> 업종별 특성에 맞춘 꼼꼼한 기장 관리
              </li>
              <li className="flex items-center gap-2 text-slate-700">
                <CheckCircle2 size={18} className="text-[#D4A857] flex-shrink-0" /> 부가세, 소득세, 법인세 신고 대행
              </li>
              <li className="flex items-center gap-2 text-slate-700">
                <CheckCircle2 size={18} className="text-[#D4A857] flex-shrink-0" /> 대표 세무사와의 직접 소통 채널
              </li>
            </ul>

            {/* 기능 버튼 (유지) */}
            <div className="mb-6">
              <Link
                href="/consult?type=advisory"
                className="inline-flex items-center gap-2 text-xs md:text-sm px-4 py-2 rounded-full border border-[#D4A857] text-[#D4A857] font-medium hover:bg-[#D4A857] hover:text-white transition-colors"
              >
                월 정기 자문 견적 받아보기
              </Link>
            </div>

            <Link
              href="/consult?type=advisory"
              className="px-8 py-3 bg-[#D4A857] text-white font-bold rounded-sm hover:bg-[#C19545] shadow-lg shadow-[#D4A857]/20 inline-block transition-all"
            >
              상시 자문 문의
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}