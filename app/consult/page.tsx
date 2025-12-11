// app/consult/page.tsx
import PageHeader from '@/components/PageHeader';
import Link from 'next/link';
import { Phone, MapPin, CheckCircle2 } from 'lucide-react';

type ConsultPageProps = {
  searchParams?: {
    type?: string;
  };
};

// [핵심 수정 1] 새로운 꼬리표(type)들을 올바른 카테고리로 연결해주는 함수
function normalizeType(raw?: string) {
  if (!raw) return 'investigation';

  // 세무조사 관련
  if (raw === 'investigation' || raw === 'investigation-emergency') return 'investigation';
  
  // 양도/상속/증여 관련 (yangdo-check, inherit-plan 추가됨)
  if (raw === 'yangdo' || raw === 'inherit-gift' || raw === 'yangdo-check' || raw === 'inherit-plan') return 'yangdo';
  
  // 조세불복 관련 (appeal-check 추가됨)
  if (raw === 'appeal' || raw === 'refund' || raw === 'appeal-check') return 'appeal';
  
  // 자문 관련
  if (raw === 'advisory') return 'advisory';

  return 'investigation'; // 기본값
}

// 기본 프리셋 (카테고리별 기본 문구)
const PRESETS: Record<
  'investigation' | 'yangdo' | 'appeal' | 'advisory',
  {
    label: string;
    description: string;
    bullets: string[];
    placeholder: string;
  }
> = {
  investigation: {
    label: '세무조사 전담 대응',
    description:
      '세무조사 통지서를 받으셨다면, 첫 72시간의 대응이 추징 세액을 좌우합니다.',
    bullets: [
      '통지서 수령 시점, 조사 예정 기간',
      '현재 사업 규모와 쟁점이 될 수 있는 거래',
      '이미 진행 중인 세무 대리인 유무',
    ],
    placeholder:
      '예) 어제 세무조사 통지서를 받았습니다. 최근 3년간 매출 누락이 걱정되는데, 어떻게 대응해야 할까요?',
  },
  yangdo: {
    label: '양도·상속·증여 맞춤 설계',
    description:
      '계약서 쓰기 전, 세후 실수령액과 가족관계에 미치는 영향까지 함께 설계합니다.',
    bullets: [
      '양도(매매) 예정 일자 및 매매가',
      '상속·증여 대상 자산과 가족 관계',
      '1세대 1주택 여부 및 보유 기간',
    ],
    placeholder:
      '예) 아파트를 자녀에게 증여할지, 매도 후 현금으로 줄지 고민입니다. 세금 차이를 비교해보고 싶습니다.',
  },
  appeal: {
    label: '조세불복 · 경정청구',
    description:
      '이미 나온 세금이라도, 부당 과세라면 조세불복·경정청구로 다시 계산할 수 있습니다.',
    bullets: [
      '통지 받은 결정 내용과 고지서 수령일',
      '억울하다고 생각되는 부분 (사실관계/법리)',
      '과거 5년 내 납부한 세금 환급 검토',
    ],
    placeholder:
      '예) 양도세 고지서를 받았는데 실거래가 반영이 안 된 것 같습니다. 불복 청구가 가능할까요?',
  },
  advisory: {
    label: '상시 세무 자문',
    description:
      '기장·신고를 넘어, 사업을 지키는 안전장치로서의 세무 파트너가 되어드립니다.',
    bullets: [
      '법인 / 개인사업자 여부와 업종',
      '현재 기장 관리 현황',
      '향후 사업 확장 계획',
    ],
    placeholder:
      '예) 법인 전환을 고려 중인데, 절세 효과와 세무 관리 방법에 대해 상담받고 싶습니다.',
  },
};

// [핵심 수정 2] 상세 버튼(type)에 따라 제목과 플레이스홀더를 더 구체적으로 바꿔주는 함수
function getDetailedContent(rawType: string | undefined, normalizedType: string, basePreset: any) {
  // 1. 양도세 세후 실수령액 계산 (yangdo-check)
  if (rawType === 'yangdo-check') {
    return {
      ...basePreset,
      label: '양도세 세후 실수령액 모의 계산',
      description: '예상 매매가와 보유 현황을 알려주시면, 대략적인 세금과 실수령액을 계산해 드립니다.',
      placeholder: '예) \n1. 매도 예정 금액: 15억 \n2. 취득 금액: 8억 (5년 전) \n3. 보유 주택 수: 1주택 \n\n위 조건일 때 세금이 얼마나 나올지 궁금합니다.'
    };
  }

  // 2. 세무조사 긴급 검토 (investigation-emergency)
  if (rawType === 'investigation-emergency') {
    return {
      ...basePreset,
      label: '세무조사 통지서 긴급 분석',
      description: '통지서 내용을 바탕으로 조사관의 의도를 파악하고 초기 대응 전략을 수립합니다.',
      placeholder: '예) \n1. 통지서 받은 날짜: 어제 \n2. 조사 관할: 강남세무서 조사과 \n3. 조사 대상 기간: 2021~2023년 \n\n당장 무엇부터 준비해야 할까요?'
    };
  }

  // 3. 상속/증여 플랜 (inherit-plan)
  if (rawType === 'inherit-plan') {
    return {
      ...basePreset,
      label: '가족 맞춤 상속·증여 플랜',
      description: '가족 구성원과 자산 현황에 맞춰, 분쟁 없는 최적의 이전 계획을 제안합니다.',
      placeholder: '예) \n자산: 상가건물(30억), 아파트(20억) \n가족: 배우자, 자녀 2명 \n\n세금을 가장 줄이면서 자녀들에게 나누어 줄 수 있는 방법이 궁금합니다.'
    };
  }

  // 4. 환급 검토 (refund)
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
  
  // 기본 프리셋 가져오기
  const basePreset = PRESETS[normalized];
  // 상세 내용으로 덮어쓰기 (커스텀 로직 적용)
  const preset = getDetailedContent(rawType, normalized, basePreset);

  const tabs = [
    { key: 'investigation' as const, label: '세무조사' },
    { key: 'yangdo' as const, label: '양도·상속·증여' },
    { key: 'appeal' as const, label: '조세불복' },
    { key: 'advisory' as const, label: '상시 세무 자문' },
  ];

  return (
    <div className="bg-white min-h-screen">
      <PageHeader
        title="상담 문의"
        subTitle="국세청 25년 경력의 전문가가 직접 해결책을 제시합니다."
      />

      <main className="container mx-auto px-6 py-16 space-y-12 max-w-6xl">
        {/* 상단 카테고리 탭 */}
        <div className="flex flex-wrap justify-center gap-3">
          {tabs.map((tab) => (
            <Link
              key={tab.key}
              href={`/consult?type=${tab.key}`}
              className={[
                'px-6 py-3 rounded-full text-sm md:text-base font-bold border transition-all duration-300',
                normalized === tab.key
                  ? 'bg-[#D4A857] border-[#D4A857] text-white shadow-md transform scale-105'
                  : 'border-slate-200 text-slate-500 hover:border-[#D4A857] hover:text-[#D4A857] bg-white',
              ].join(' ')}
            >
              {tab.label}
            </Link>
          ))}
        </div>

        {/* 본문 : 좌측 안내 카드 + 우측 폼 */}
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-10 items-start">
          
          {/* 왼쪽 : 선택된 서비스 설명 */}
          <section className="bg-slate-50 border border-slate-200 rounded-2xl p-8 md:p-10 sticky top-10">
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
                {preset.bullets.map((item, i) => (
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
                   <p className="text-xs text-slate-500 font-bold">전화 상담</p>
                   <p className="text-slate-900 font-bold text-lg">02-518-0130</p>
                 </div>
               </div>
               <div className="flex items-center gap-4">
                 <div className="p-2.5 bg-[#D4A857]/10 text-[#D4A857] rounded-full">
                   <MapPin size={20} />
                 </div>
                 <div>
                   <p className="text-xs text-slate-500 font-bold">오시는 길</p>
                   <p className="text-slate-900 text-sm">서울 강남구 언주로130길 23 평해빌딩 201호</p>
                 </div>
               </div>
            </div>
          </section>

          {/* 오른쪽 : 상담 폼 카드 */}
          <section className="bg-white border border-slate-200 rounded-2xl shadow-xl shadow-slate-200/50 p-8 md:p-10">
            <div className="text-center mb-10">
               <h2 className="text-2xl font-serif font-bold text-slate-900 mb-2">
                 1:1 상담 신청
               </h2>
               <p className="text-slate-500 text-sm">
                 대표 세무사가 내용을 직접 확인하고 연락드립니다.
               </p>
            </div>

            <form className="space-y-6">
              {/* type 값 전송 */}
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
                <select
                  name="category"
                  defaultValue={normalized}
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm bg-white focus:outline-none focus:border-[#D4A857] focus:ring-1 focus:ring-[#D4A857] transition-all"
                >
                  <option value="investigation">세무조사 대응</option>
                  <option value="yangdo">양도소득세 / 상속·증여</option>
                  <option value="appeal">조세불복 · 경정청구</option>
                  <option value="advisory">법인/개인 세무 자문</option>
                </select>
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
        </div>
      </main>
    </div>
  );
}