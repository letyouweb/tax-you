// app/consult/page.tsx
import PageHeader from '@/components/PageHeader';
import Link from 'next/link';

type ConsultPageProps = {
  searchParams?: {
    type?: string;
  };
};

// type 파라미터를 카테고리로 정규화
function normalizeType(raw?: string) {
  if (!raw) return 'investigation';

  if (raw === 'yangdo' || raw === 'inherit-gift') return 'yangdo';
  if (raw === 'appeal' || raw === 'refund') return 'appeal';
  if (raw === 'advisory') return 'advisory';
  if (raw === 'investigation') return 'investigation';

  return 'investigation';
}

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
      '통지서 수령 시점, 조사 예정 기간, 이미 제출한 자료 여부',
      '현재 사업 규모와 쟁점이 될 수 있는 거래(양도·상속·증여 등)',
      '이미 진행 중인 세무사 / 회계사와의 협업 필요 여부',
    ],
    placeholder:
      '예) 어제 세무조사 통지서를 받았고, 최근 3년간 매출 누락이 있을까 걱정됩니다. \n어떤 자료부터 준비해야 할지, 실제 조사 일정이 어떻게 진행되는지 알고 싶습니다.',
  },
  yangdo: {
    label: '양도·상속·증여 맞춤 설계',
    description:
      '계약서 쓰기 전, 세후 실수령액과 가족관계에 미치는 영향까지 함께 설계합니다.',
    bullets: [
      '양도(매매) 예정 일자, 매매가, 취득가 및 대출 여부',
      '상속·증여 대상 자산(부동산, 지분, 예금 등)과 가족 관계',
      '사전 증여, 공동명의, 법인 전환 등을 고민 중인지 여부',
    ],
    placeholder:
      '예) 부모님 아파트를 증여받을지, 상속으로 남길지 고민 중입니다. \n세후 실수령액과 가족 간 분쟁 가능성을 최소화하는 방법을 알고 싶습니다.',
  },
  appeal: {
    label: '조세불복 · 경정청구',
    description:
      '이미 나온 세금이라도, 부당 과세라면 조세불복·경정청구로 다시 계산할 수 있습니다.',
    bullets: [
      '통지 받은 결정(경정·부과) 내용과 금액, 고지서 수령일',
      '어떤 부분이 부당하다고 느끼시는지(사실관계 / 법리)',
      '과거에 과다 납부했을 수 있는 세금(부가세, 종부세, 양도세 등)',
    ],
    placeholder:
      '예) 최근 양도소득세 고지서를 받았는데, 실거래가와 과세표준이 다르게 계산된 것 같습니다. \n부당 과세인지, 이의신청이나 심판청구가 가능한지 알고 싶습니다.',
  },
  advisory: {
    label: '상시 세무 자문',
    description:
      '기장·신고를 넘어, 사업을 지키는 안전장치로서의 세무 파트너가 되어드립니다.',
    bullets: [
      '법인 / 개인사업자 여부와 업종, 대략적인 연 매출 규모',
      '현재 사용 중인 기장·세무 서비스(있다면)와 불편한 점',
      '앞으로 1~2년 안에 예상되는 큰 이벤트(투자, 지분 이전, 사업 확장 등)',
    ],
    placeholder:
      '예) 매출이 빠르게 늘고 있는데, 현재 기장 사무소에서 세무 리스크를 얼마나 체크해 주는지 모르겠습니다. \n월 정기 자문으로 어떤 도움을 받을 수 있는지 궁금합니다.',
  },
};

export default function ConsultPage({ searchParams }: ConsultPageProps) {
  const rawType = searchParams?.type;
  const normalized = normalizeType(rawType);
  const preset = PRESETS[normalized];

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
        subTitle="세무조사, 상속, 증여, 조세불복까지 모든 세무 고민을 남겨주세요."
      />

      <main className="container mx-auto px-6 py-12 space-y-10 max-w-5xl">
        {/* 상단 카테고리 탭 (이모티콘 제거 버전) */}
        <div className="flex flex-wrap justify-center gap-3">
          {tabs.map((tab) => (
            <Link
              key={tab.key}
              href={`/consult?type=${tab.key}`}
              className={[
                'px-4 py-2 rounded-full text-sm font-medium border transition-colors',
                normalized === tab.key
                  ? 'bg-[#D4A857] border-[#D4A857] text-white shadow-sm'
                  : 'border-slate-200 text-slate-600 hover:border-[#D4A857] hover:text-[#D4A857]',
              ].join(' ')}
            >
              {tab.label}
            </Link>
          ))}
        </div>

        {/* 본문 : 좌측 안내 카드 + 우측 폼 */}
        <div className="grid md:grid-cols-[1.1fr_1.2fr] gap-10 items-start">
          {/* 왼쪽 : 선택된 서비스 설명 */}
          <section className="bg-slate-50 border border-slate-100 rounded-2xl p-6 md:p-7">
            <h2 className="text-sm font-semibold tracking-[0.18em] text-slate-500 mb-2">
              선택된 상담 유형
            </h2>
            <p className="text-2xl md:text-[26px] font-serif font-bold text-slate-900 mb-3">
              {preset.label}
            </p>
            <p className="text-sm md:text-base text-slate-600 mb-6">
              {preset.description}
            </p>

            <div className="space-y-2 mb-6">
              <p className="text-xs font-semibold text-slate-500 tracking-wide">
                아래 내용을 간단히 적어주시면, 더 정확하게 도와드릴 수 있습니다.
              </p>
              <ul className="text-sm text-slate-600 space-y-1.5 list-disc list-inside leading-relaxed">
                {preset.bullets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="text-xs text-slate-400 border-t border-slate-200 pt-4">
              <p>※ 남겨주신 내용은 상담 목적 외 다른 용도로 사용되지 않습니다.</p>
              <p>※ 전화 상담을 원하시면 하단 대표번호로 바로 연락 주셔도 됩니다.</p>
            </div>
          </section>

          {/* 오른쪽 : 상담 폼 카드 */}
          <section className="bg-white border border-slate-100 rounded-2xl shadow-lg shadow-slate-200/40 p-6 md:p-8">
            <h2 className="text-center text-lg font-semibold text-slate-900 mb-1">
              1:1 상담 예약
            </h2>
            <p className="text-center text-xs md:text-sm text-slate-500 mb-8">
              아래 내용을 남겨주시면 대표 세무사가 직접 확인 후 연락드립니다.
            </p>

            <form className="space-y-5">
              {/* 원래 type 값도 같이 넘겨주고 싶으면 hidden 으로 실어보냄 */}
              <input type="hidden" name="type" value={rawType ?? normalized} />

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="block text-sm font-semibold text-slate-700">
                    이름
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="이름을 입력해주세요."
                    className="w-full rounded-md border border-slate-200 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#D4A857]/70 focus:border-[#D4A857]"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="block text-sm font-semibold text-slate-700">
                    연락처
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="010-0000-0000"
                    className="w-full rounded-md border border-slate-200 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#D4A857]/70 focus:border-[#D4A857]"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="block text-sm font-semibold text-slate-700">
                  상담 분야
                </label>
                <select
                  name="category"
                  defaultValue={normalized}
                  className="w-full rounded-md border border-slate-200 px-3 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#D4A857]/70 focus:border-[#D4A857]"
                >
                  <option value="investigation">세무조사 전담 대응</option>
                  <option value="yangdo">양도·상속·증여 맞춤 설계</option>
                  <option value="appeal">조세불복 · 경정청구</option>
                  <option value="advisory">상시 세무 자문</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="block text-sm font-semibold text-slate-700">
                  문의 내용
                </label>
                <textarea
                  name="message"
                  rows={6}
                  placeholder={preset.placeholder}
                  className="w-full rounded-md border border-slate-200 px-3 py-2.5 text-sm leading-relaxed resize-none focus:outline-none focus:ring-2 focus:ring-[#D4A857]/70 focus:border-[#D4A857]"
                />
              </div>

              <button
                type="submit"
                className="w-full mt-2 inline-flex items-center justify-center rounded-md bg-[#D4A857] px-4 py-3 text-sm font-semibold text-white hover:bg-[#C19545] transition-colors"
              >
                상담 신청하기
              </button>
            </form>

            {/* 하단 빠른 상담 박스 */}
            <div className="mt-8 pt-5 border-t border-slate-100 text-center space-y-2">
              <p className="text-xs text-slate-500">빠른 상담이 필요하신가요?</p>
              <a
                href="tel:02-518-0130"
                className="inline-flex items-center justify-center rounded-md border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 hover:border-[#D4A857] hover:text-[#D4A857] transition-colors"
              >
                전화 상담 02-518-0130
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
