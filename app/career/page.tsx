import PageHeader from '@/components/PageHeader';
import { Calendar } from 'lucide-react';

export default function Career() {
  return (
    <div className="bg-white min-h-screen">
      <PageHeader title="주요 경력" subTitle="25년의 국세 행정 경험과 실무 능력을 증명합니다." />
      
      {/* Summary */}
      <div className="bg-slate-50 py-20">
        <div className="container mx-auto px-6 max-w-4xl">
           <h3 className="text-2xl font-serif font-bold text-slate-900 mb-8 text-center">국세청 25년 경력 요약</h3>
           <div className="bg-white p-10 rounded shadow-sm border border-slate-100">
              <ul className="grid md:grid-cols-2 gap-y-4 gap-x-8 text-slate-700">
                 <li className="flex items-center gap-3"><span className="w-2 h-2 bg-[#D4A857] rounded-full"></span>국세청 25년 근무</li>
                 <li className="flex items-center gap-3"><span className="w-2 h-2 bg-[#D4A857] rounded-full"></span>국립세무대학 졸업</li>
                 <li className="flex items-center gap-3"><span className="w-2 h-2 bg-[#D4A857] rounded-full"></span>제53회 세무사시험 합격</li>
                 <li className="flex items-center gap-3"><span className="w-2 h-2 bg-[#D4A857] rounded-full"></span>강남세무서 조사과 사무관 명예퇴임</li>
                 <li className="flex items-center gap-3"><span className="w-2 h-2 bg-[#D4A857] rounded-full"></span>반포·마포·영등포·부천세무서 등 근무</li>
              </ul>
           </div>
        </div>
      </div>

      {/* Awards */}
      <div className="container mx-auto px-6 py-20">
         <div className="text-center mb-16">
            <h3 className="text-3xl font-serif font-bold text-slate-900 mb-4">수상 및 주요 경력</h3>
            <p className="text-slate-500">성실한 납세 행정과 전문성을 인정받아 온 기록입니다.</p>
         </div>
         <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Card 1 */}
            <div className="space-y-4">
               <div className="aspect-[4/3] bg-slate-100 rounded overflow-hidden shadow-sm border border-slate-100">
                  <img src="/images/awards/유동수세무회계_대통령임명장.jpg" alt="대통령 임명장" className="w-full h-full object-cover" />
               </div>
               <div className="text-center">
                  <h4 className="font-bold text-slate-900">대통령 임명장</h4>
                  <p className="text-sm text-slate-500">강남세무서 조사과 세무주사 임명</p>
               </div>
            </div>
            {/* Card 2 */}
            <div className="space-y-4">
               <div className="aspect-[4/3] bg-slate-100 rounded overflow-hidden shadow-sm border border-slate-100">
                  <img src="/images/awards/유동수세무회계_국세청장재직기념패.jpg" alt="국세청장 재직기념패" className="w-full h-full object-cover" />
               </div>
               <div className="text-center">
                  <h4 className="font-bold text-slate-900">국세청장 재직 기념패</h4>
                  <p className="text-sm text-slate-500">국세행정 기여 공로 인정</p>
               </div>
            </div>
            {/* Card 3 */}
            <div className="space-y-4">
               <div className="aspect-[4/3] bg-slate-100 rounded overflow-hidden shadow-sm border border-slate-100">
                  <img src="/images/awards/유동수세무회계_강남세무서명예퇴임기념폐.jpg" alt="명예퇴임 기념패" className="w-full h-full object-cover" />
               </div>
               <div className="text-center">
                  <h4 className="font-bold text-slate-900">명예퇴임 기념패</h4>
                  <p className="text-sm text-slate-500">강남세무서 조사과 명예퇴임</p>
               </div>
            </div>
         </div>
      </div>

      {/* Timeline */}
      <div className="bg-[#050B16] py-20 text-white">
         <div className="container mx-auto px-6 max-w-4xl">
            <h3 className="text-2xl font-serif font-bold mb-12 text-center">Career History</h3>
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-[#D4A857] before:to-transparent">
               {/* Item 1 */}
               <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/20 bg-[#050B16] shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 text-[#D4A857]">
                     <Calendar size={18}/>
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded border border-white/10 bg-[#0A1120]">
                     <div className="flex items-center justify-between space-x-2 mb-1">
                        <div className="font-bold text-white">강남세무서 명예퇴임</div>
                        <time className="font-mono italic text-[#D4A857]">2017</time>
                     </div>
                     <div className="text-slate-400 text-sm">강남세무서 조사과 사무관으로 공직 생활 마무리</div>
                  </div>
               </div>
               {/* Item 2 */}
               <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/20 bg-[#050B16] shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 text-[#D4A857]">
                     <Calendar size={18}/>
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded border border-white/10 bg-[#0A1120]">
                     <div className="flex items-center justify-between space-x-2 mb-1">
                        <div className="font-bold text-white">제53회 세무사시험 합격</div>
                        <time className="font-mono italic text-[#D4A857]">2016</time>
                     </div>
                     <div className="text-slate-400 text-sm">전문 자격 취득 및 심화 전문성 확보</div>
                  </div>
               </div>
               {/* Item 3 */}
               <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/20 bg-[#050B16] shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 text-[#D4A857]">
                     <Calendar size={18}/>
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded border border-white/10 bg-[#0A1120]">
                     <div className="flex items-center justify-between space-x-2 mb-1">
                        <div className="font-bold text-white">서울지방국세청 근무</div>
                        <time className="font-mono italic text-[#D4A857]">1993~</time>
                     </div>
                     <div className="text-slate-400 text-sm">반포, 마포, 영등포, 부천세무서 등 주요 요직 거침</div>
                  </div>
               </div>
            </div>
         </div>
      </div>
    </div>
  );
}
