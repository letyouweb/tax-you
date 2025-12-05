import PageHeader from '@/components/PageHeader';
import { CheckCircle2, Award, Shield, TrendingUp } from 'lucide-react';

export default function About() {
  return (
    <div className="bg-white min-h-screen">
      <PageHeader title="회사 소개" subTitle="국세청 25년의 경험으로 고객의 소중한 재산을 지킵니다." />
      
      <div className="container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
             <div className="absolute top-6 -left-6 w-full h-full border-2 border-[#050B16] z-0"></div>
             <img src="/images/Main.jpg" alt="유동수 세무사" className="relative z-10 w-full shadow-2xl grayscale object-cover" />
          </div>
          <div className="space-y-8">
            <h3 className="text-3xl font-serif font-bold text-slate-900">
              &quot;납세자의 권익 보호를<br/>최우선으로 생각합니다.&quot;
            </h3>
            <div className="space-y-4 text-slate-600 leading-relaxed text-lg">
              <p>
                안녕하십니까, <span className="font-bold text-[#050B16]">세무사 유동수</span>입니다.
              </p>
              <p>
                국세청에서 25년간 세무조사와 심사를 담당하며 수많은 현장을 경험했습니다. 
                강남세무서 조사과 사무관으로 근무하며 쌓은 실무 지식과 노하우를 바탕으로, 
                이제는 납세자의 편에서 든든한 파트너가 되고자 합니다.
              </p>
              <p>
                세금은 피할 수 없지만, 억울한 세금까지 감당할 필요는 없습니다. 
                정확한 법과 사실을 바탕으로 고객이 납득할 수 있는 최상의 결과를 만들어 드리겠습니다.
              </p>
            </div>
            
            <div className="pt-6 border-t border-slate-200">
              <h4 className="font-bold text-slate-900 mb-4">핵심 강점</h4>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-center gap-3"><CheckCircle2 size={18} className="text-[#D4A857]"/> 국세청 25년 근무 경력 (조사·심사 분야 특화)</li>
                <li className="flex items-center gap-3"><CheckCircle2 size={18} className="text-[#D4A857]"/> 강남세무서 조사과 사무관 출신</li>
                <li className="flex items-center gap-3"><CheckCircle2 size={18} className="text-[#D4A857]"/> 세무조사, 조세불복, 양도·상속·증여 전문</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      {/* Philosophy Section */}
      <div className="bg-slate-50 py-20">
        <div className="container mx-auto px-6 text-center">
           <h3 className="text-2xl font-serif font-bold mb-10 text-slate-900">유동수 세무회계의 약속</h3>
           <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded shadow-sm border-t-4 border-[#D4A857]">
                 <div className="text-[#D4A857] mb-4 flex justify-center"><Award size={40}/></div>
                 <h4 className="font-bold text-lg mb-3">직접 처리 원칙</h4>
                 <p className="text-slate-600 text-sm">기장을 제외한 모든 주요 업무는 대표 세무사가 처음부터 끝까지 직접 책임지고 처리합니다.</p>
              </div>
              <div className="bg-white p-8 rounded shadow-sm border-t-4 border-[#D4A857]">
                 <div className="text-[#D4A857] mb-4 flex justify-center"><Shield size={40}/></div>
                 <h4 className="font-bold text-lg mb-3">철저한 비밀 보장</h4>
                 <p className="text-slate-600 text-sm">고객의 정보와 상담 내용은 철저하게 비밀이 보장되며, 고객의 이익을 최우선으로 보호합니다.</p>
              </div>
              <div className="bg-white p-8 rounded shadow-sm border-t-4 border-[#D4A857]">
                 <div className="text-[#D4A857] mb-4 flex justify-center"><TrendingUp size={40}/></div>
                 <h4 className="font-bold text-lg mb-3">최적의 절세 솔루션</h4>
                 <p className="text-slate-600 text-sm">획일적인 처리가 아닌, 고객 상황에 맞는 맞춤형 절세 전략과 대응 방안을 제시합니다.</p>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
