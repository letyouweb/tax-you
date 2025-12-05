import Link from 'next/link';
import PageHeader from '@/components/PageHeader';
import { ChevronRight } from 'lucide-react';

export default function Insight() {
  const insights = [
    { title: "세무조사 통지를 받았다면", sub: "당황하지 말고 전문가와 상의하세요", desc: "세무조사 통지서를 받으셨나요? 초기 대응이 결과의 90%를 좌우합니다. 국세청이 어떤 자료를 요구하는지, 어떤 쟁점을 보고 있는지 분석하여 대응 전략을 수립해야 합니다. 무리한 소명보다는 사실관계에 입각한 논리적 대응이 중요합니다." },
    { title: "부모 재산 상속 준비", sub: "상속세, 미리 준비하면 줄일 수 있습니다", desc: "상속은 피할 수 없는 현실입니다. 하지만 미리 준비하면 세금 부담을 크게 줄일 수 있습니다. 상속 재산의 규모와 종류, 가족 구성원 등을 고려하여 사전 증여와 상속의 비율을 조정하고, 납세 재원을 마련하는 플랜이 필요합니다." },
    { title: "아파트·상가 양도 전", sub: "양도소득세, 매매 계약 전에 확인하세요", desc: "부동산 양도소득세는 보유 기간, 거주 여부, 주택 수 등에 따라 세액 차이가 큽니다. 매매 계약서를 작성하기 전에 세무 전문가와 상담하여 비과세 요건이나 감면 조항을 확인하고, 최적의 양도 시기를 결정하는 것이 현명합니다." },
    { title: "억울한 세금 고지", sub: "조세불복으로 권리를 찾으세요", desc: "과세 관청의 처분이 항상 옳은 것은 아닙니다. 사실 관계 오인이나 법령 해석의 차이로 인해 억울한 세금이 부과될 수 있습니다. 이의신청, 심판청구 등 적법한 절차를 통해 부당한 과세 처분을 다투고 정당한 권리를 구제받을 수 있습니다." },
  ];

  return (
    <div className="bg-white min-h-screen">
      <PageHeader title="인사이트" subTitle="복잡한 세무 문제, 전문가의 시각으로 명쾌하게 풀어드립니다." />
      <div className="container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-8">
          {insights.map((item, idx) => (
            <div key={idx} className="bg-white p-10 border border-slate-200 rounded hover:shadow-lg hover:border-[#D4A857] transition-all group">
              <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-[#D4A857] transition-colors">{item.title}</h3>
              <p className="text-sm font-medium text-[#D4A857] mb-4">{item.sub}</p>
              <p className="text-slate-600 leading-relaxed mb-6">{item.desc}</p>
              <Link href="/consult" className="inline-flex items-center text-sm font-bold text-slate-800 hover:text-[#D4A857]">
                상담 신청하기 <ChevronRight size={16} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
