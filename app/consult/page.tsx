'use client';

import { Suspense, useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import PageHeader from '@/components/PageHeader';
import Link from 'next/link';
import { Phone, MapPin, CheckCircle2, ChevronDown } from 'lucide-react';

type ConsultPageProps = {
  searchParams?: {
    type?: string;
  };
};

function normalizeType(raw?: string) {
  if (!raw) return 'investigation';

  // 세무조사 관련
  if (raw === 'investigation' || raw === 'investigation-emergency') return 'investigation';
  
  // 양도 관련
  if (raw === 'yangdo' || raw === 'yangdo-check') return 'yangdo';

  // 상속 관련
  if (raw === 'inherit' || raw === 'inherit-gift' || raw === 'inherit-plan') return 'inherit';

  // 증여 관련
  if (raw === 'gift' || raw === 'gift-check' || raw === 'gift-plan' || raw === 'gift-main') return 'gift';
  
  // 조세불복 관련
  if (raw === 'appeal' || raw === 'refund' || raw === 'appeal-check') return 'appeal';
  
  // 자문 관련
  if (raw === 'advisory') return 'advisory';

  return 'investigation'; // 기본값
}

const PRESETS: Record<string, { label: string; description: string; bullets: string[]; placeholder: string; }> = {
  investigation: {
    label: '세무조사 전담 대응',
    description: '세무조사 통지서를 받으셨다면, 첫 72시간의 대응이 추징 세액을 좌우합니다.',
    bullets: ['통지서 수령 시점, 조사 예정 기간', '현재 사업 규모와 쟁점이 될 수 있는 거래', '이미 진행 중인 세무 대리인 유무'],
    placeholder: '예) 어제 세무조사 통지서를 받았습니다. 최근 3년간 매출 누락이 걱정되는데, 어떻게 대응해야 할까요?',
  },
  yangdo: {
    label: '양도소득세 맞춤 설계',
    description: '계약서 쓰기 전, 세후 실수령액과 비과세 요건을 정밀하게 검토합니다.',
    bullets: ['양도(매매) 예정 일자 및 매매가', '보유 주택 수 및 보유 기간', '1세대 1주택 여부 확인'],
    placeholder: '예) 2주택 보유 중입니다. A주택을 먼저 팔아야 할지, B주택을 먼저 팔아야 할지 절세 전략이 궁금합니다.',
  },
  inherit: {
    label: '상속세 절세 플랜',
    description: '가족의 평화를 지키고 세금 부담을 최소화하는 상속 솔루션을 제공합니다.',
    bullets: ['상속 재산 규모(부동산/금융)', '상속인 구성원 및 관계', '사전 증여 이력 유무'],
    placeholder: '예) 부모님 연세가 많으셔서 상속세를 미리 대비하고 싶습니다. 자산은 아파트 포함 약 20억 정도입니다.',
  },
  gift: {
    label: '증여세 절세 및 플랜',
    description: '10년 주기 공제와 사전 증여 전략으로 자산 가치 상승 전, 효율적인 이전을 돕습니다.',
    bullets: ['증여 대상 자산과 가액', '수증자(받는 분)와의 관계', '과거 10년 내 증여 이력'],
    placeholder: '예) 자녀 결혼 자금으로 2억 원을 주려고 합니다. 세금을 가장 적게 내는 방법이 있을까요?',
  },
  appeal: {
    label: '조세불복 · 경정청구',
    description: '이미 나온 세금이라도, 부당 과세라면 조세불복·경정청구로 다시 계산할 수 있습니다.',
    bullets: ['통지 받은 결정 내용과 고지서 수령일', '억울하다고 생각되는 부분', '과거 5년 내 납부한 세금 환급 검토'],
    placeholder: '예) 양도세 고지서를 받았는데 실거래가 반영이 안 된 것 같습니다. 불복 청구가 가능할까요?',
  },
  advisory: {
    label: '상시 세무 자문',
    description: '기장·신고를 넘어, 사업을 지키는 안전장치로서의 세무 파트너가 되어드립니다.',
    bullets: ['법인 / 개인사업자 여부와 업종', '현재 기장 관리 현황', '향후 사업 확장 계획'],
    placeholder: '예) 법인 전환을 고려 중인데, 절세 효과와 세무 관리 방법에 대해 상담받고 싶습니다.',
  },
};

function getDetailedContent(rawType: string | undefined, normalizedType: string, basePreset: any) {
  if (rawType === 'yangdo-check') {
    return {
      ...basePreset,
      label: '양도세 세후 실수령액 모의 계산',
      description: '예상 매매가와 보유 현황을 알려주시면, 대략적인 세금과 실수령액을 계산해 드립니다.',
      placeholder: '예) \n1. 매도 예정 금액: 15억 \n2. 취득 금액: 8억 (5년 전) \n3. 보유 주택 수: 1주택 \n\n위 조건일 때 세금이 얼마나 나올지 궁금합니다.'
    };
  }
  if (rawType === 'inherit-plan') {
    return {
      ...basePreset,
      label: '상속세 예상 세액 진단',
      description: '현재 자산 규모를 바탕으로 예상되는 상속세를 진단하고 절세 방안을 제시합니다.',
      placeholder: '예) \n자산: 상가건물(30억), 아파트(20억) \n가족: 배우자, 자녀 2명 \n\n상속세가 얼마나 나올지 미리 알고 대비하고 싶습니다.'
    };
  }
  if (rawType === 'gift-check') {
    return {
      ...basePreset,
      label: '증여세 절세액 모의 계산',
      description: '증여하고자 하는 금액이나 자산을 알려주시면, 예상 증여세를 계산해 드립니다.',
      placeholder: '예) \n증여 대상: 현금 3억 \n받는 사람: 성인 자녀 \n\n이 경우 세금이 얼마나 나오나요? 줄일 방법이 있을까요?'
    };
  }
  if (rawType === 'gift-plan') {
    return {
      ...basePreset,
      label: '10년 장기 증여 플랜',
      description: '자녀의 성장 주기에 맞춘 10년 단위 무상 증여 플랜을 설계해 드립니다.',
      placeholder: '예) \n자녀 나이: 5세 \n목표: 성인이 되었을 때 주택 자금 마련 \n\n지금부터 어떻게 증여해야 세금 없이 물려줄 수 있나요?'
    };
  }
  if (rawType === 'investigation-emergency') {
    return {
      ...basePreset,
      label: '세무조사 통지서 긴급 분석',
      description: '통지서 내용을 바탕으로 조사관의 의도를 파악하고 초기 대응 전략을 수립합니다.',
      placeholder: '예) \n1. 통지서 받은 날짜: 어제 \n2. 조사 관할: 강남세무서 조사과 \n3. 조사 대상 기간: 2021~2023년 \n\n당장 무엇부터 준비해야 할까요?'
    };
  }
  if (rawType === 'refund') {
    return {
      ...basePreset,
      label: '과오납 세금 환급(경정청구)',
      description: '지난 5년간 더 낸 세금이 있다면, 법리적 검토를 통해 돌려받아 드립니다.',
      placeholder: '예) 최근 3년간 법인세 감면 혜택을 놓친 것 같습니다. 경정청구가 가능한지 검토 부탁드립니다.'
    };
  }

  return basePreset;
}

export default function ConsultPage({ searchParams }: ConsultPageProps) {
  const rawType = searchParams?.type;
  const normalized = normalizeType(rawType);
  
  const basePreset = PRESETS[normalized] || PRESETS['investigation'];
  const preset = getDetailedContent(rawType, normalized, basePreset);

  const tabs = [
    { key: 'investigation', label: '세무조사' },
    { key: 'yangdo', label: '양도소득세' },
    { key: 'inherit', label: '상속세' },
    { key: 'gift', label: '증여세' },
    { key: 'appeal', label: '조세불복' },
    { key: 'advisory', label: '상시자문' },
  ];

  return (
    <div className="bg-white min-h-screen">
      <PageHeader
        title="상담 문의"
        subTitle="국세청 25년 경력의 전문가가 직접 해결책을 제시합니다."
      />

      <main className="container mx-auto px-6 py-16 space-y-12 max-w-6xl">
        {/* 상단 카테고리 탭 */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3">
          {tabs.map((tab) => (
            <Link
              key={tab.key}
              href={`/consult?type=${tab.key}`}
              className={[
                'px-4 py-2 md:px-6 md:py-3 rounded-full text-sm md:text-base font-bold border transition-all duration-300',
                normalized === tab.key
                  ? 'bg-[#D4A857] border-[#D4A857] text-white shadow-md transform scale-105'
                  : 'border-slate-200 text-slate-500 hover:border-[#D4A857] hover:text-[#D4A857] bg-white',
              ].join(' ')}
            >
              {tab.label}
            </Link>
          ))}
        </div>

        {/* 본문 */}
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-10 items-start">
          
          {/* [수정됨] 오른쪽 : 상담 폼 카드 
              - order-1: 모바일에서 가장 먼저 보임
              - lg:order-2: PC에서는 오른쪽에 위치
          */}
          <section className="bg-white border border-slate-200 rounded-2xl shadow-xl shadow-slate-200/50 p-8 md:p-10 order-1 lg:order-2">
            <div className="text-center mb-10">
               <h2 className="text-2xl font-serif font-bold text-slate-900 mb-2">
                 1:1 상담 신청
               </h2>
               <p className="text-slate-500 text-sm">
                 대표 세무사가 내용을 직접 확인하고 연락드립니다.
               </p>
            </div>

            <form className="space-y-6">
              <input type="hidden" name="type" value={rawType ?? normalized} />

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-bold text-slate-800">
                    성함 (업체명) <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="홍길동"
                    className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm focus:outline-none focus:border-[#D4A857] focus:ring-1 focus:ring-[#D4A857] transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-bold text-slate-800">
                    연락처 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="010-0000-0000"
                    className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm focus:outline-none focus:border-[#D4A857] focus:ring-1 focus:ring-[#D4A857] transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-bold text-slate-800">
                  상담 분야
                </label>
                <div className="relative">
                  <select
                    name="category"
                    defaultValue={normalized}
                    className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm bg-white focus:outline-none focus:border-[#D4A857] focus:ring-1 focus:ring-[#D4A857] transition-all appearance-none"
                  >
                    <option value="investigation">세무조사 대응</option>
                    <option value="yangdo">양도소득세</option>
                    <option value="inherit">상속세</option>
                    <option value="gift">증여세</option>
                    <option value="appeal">조세불복 · 경정청구</option>
                    <option value="advisory">법인/개인 세무 자문</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                    <ChevronDown size={16} />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-bold text-slate-800">
                  문의 내용
                </label>
                <textarea
                  name="message"
                  rows={8}
                  placeholder={preset.placeholder}
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm leading-relaxed resize-none focus:outline-none focus:border-[#D4A857] focus:ring-1 focus:ring-[#D4A857] transition-all"
                />
              </div>
              
              <div className="flex items-center gap-2 pt-2">
                 <input type="checkbox" id="privacy" required className="accent-[#D4A857] w-4 h-4" />
                 <label htmlFor="privacy" className="text-xs text-slate-500 cursor-pointer hover:text-slate-800">
                    개인정보 수집 및 이용에 동의합니다.
                 </label>
              </div>

              <button
                type="submit"
                className="w-full mt-4 flex items-center justify-center rounded-lg bg-[#D4A857] px-6 py-4 text-base font-bold text-white hover:bg-[#C19545] transition-all shadow-lg shadow-[#D4A857]/20"
              >
                상담 예약하기
              </button>
            </form>
          </section>

          {/* [수정됨] 왼쪽 : 선택된 서비스 설명 
              - order-2: 모바일에서 폼 아래에 위치
              - lg:order-1: PC에서는 왼쪽에 위치
              - lg:sticky: PC에서만 스티키 적용
          */}
          <section className="bg-slate-50 border border-slate-200 rounded-2xl p-8 md:p-10 order-2 lg:order-1 lg:sticky lg:top-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-1 bg-[#D4A857]"></span>
              <h2 className="text-sm font-bold tracking-[0.2em] text-[#D4A857] uppercase">
                Selected Service
              </h2>
            </div>
            
            <p className="text-3xl font-serif font-bold text-slate-900 mb-6 leading-tight">
              {preset.label}
            </p>
            <p className="text-slate-600 mb-8 text-lg leading-relaxed">
              {preset.description}
            </p>

            <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm mb-8">
              <p className="text-sm font-bold text-slate-800 mb-4 flex items-center gap-2">
                <CheckCircle2 size={16} className="text-[#D4A857]"/> 
                상담 전 체크 포인트
              </p>
              <ul className="text-sm text-slate-600 space-y-3">
                {preset.bullets.map((item: string, i: number) => (
                  <li key={i} className="flex items-start gap-2 pl-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-1.5 shrink-0"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-4 pt-6 border-t border-slate-200">
               <div className="flex items-center gap-4">
                 <div className="p-2.5 bg-[#D4A857]/10 text-[#D4A857] rounded-full">
                   <Phone size={20} />
                 </div>
                 <div>
                   <h4 className="text-xs text-slate-500 font-bold mb-1">전화 상담</h4>
                   <a 
                     href="tel:025180130" 
                     className="text-slate-900 font-bold text-lg hover:text-[#D4A857] transition-colors"
                   >
                     02-518-0130
                   </a>
                   <p className="text-xs text-slate-400 mt-1">평일 09:00 - 18:00</p>
                 </div>
               </div>
               <div className="flex items-center gap-4">
                 <div className="p-2.5 bg-[#D4A857]/10 text-[#D4A857] rounded-full">
                   <MapPin size={20} />
                 </div>
                 <div>
                   <h4 className="text-xs text-slate-500 font-bold mb-1">오시는 길</h4>
                   <a 
                     href="https://map.kakao.com/?q=서울 강남구 언주로130길 23" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="text-slate-900 text-sm hover:text-[#D4A857] hover:underline transition-all block leading-relaxed"
                   >
                     서울 강남구 언주로130길 23 평해빌딩 201호
                   </a>
                   <p className="text-xs text-slate-400 mt-1">학동역 7번 출구 도보 5분</p>
                 </div>
               </div>
            </div>
          </section>

        </div>
      </main>
    </div>
  );
}