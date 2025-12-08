'use client';

import PageHeader from '@/components/PageHeader';
import { CheckCircle2, Award, Shield, TrendingUp, Calendar } from 'lucide-react';
import AwardsCarousel from '@/components/AwardsCarousel';

export default function About() {
  const awardsForCarousel = [
    {
      src: '/images/awards/유동수세무회계_대통령임명장.jpg',
      alt: '대통령으로부터 강남세무서 조사과 세무주사로 임명받은 임명장입니다.',
      title: '대통령 임명장'
    },
    {
      src: '/images/awards/유동수세무회계_국세청_표창장.jpg',
      alt: '국세청장으로부터 수여받은 표창장으로 세무 행정 분야에 대한 전문성을 인정받았습니다.',
      title: '국세청장 표창장'
    },
    {
      src: '/images/awards/유동수세무회계_강남세무서_명예퇴임.jpg',
      alt: '강남세무서 조사과 동료들이 함께 남겨준 감사의 기념패입니다.',
      title: '강남세무서 명예퇴임 기념패'
    },
    {
      src: '/images/awards/유동수세무회계_국세청장재직기념패.jpg',
      alt: '국세행정에 기여한 공로를 인정받아 수여된 기념패입니다.',
      title: '국세청장 재직 기념패'
    },
    {
      src: '/images/awards/유동수세무회계_표창장.jpg',
      alt: '성실한 국세 행정에 기여한 공로를 인정받아 수여된 표창장입니다.',
      title: '국세청 표창장'
    },
    {
      src: '/images/awards/유동수세무회계_강남세무서_재직.jpg',
      alt: '강남세무서 재직 당시의 기록입니다.',
      title: '강남세무서 재직'
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      <PageHeader title="대표 세무사" subTitle="국세청 25년, 세무조사·양도·상속·증여 전문" />
      
      {/* 대표 소개 섹션 */}
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
      
      {/* 경력 요약 섹션 */}
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

      {/* 약속 섹션 */}
      <div className="bg-white py-20">
        <div className="container mx-auto px-6 text-center">
           <h3 className="text-2xl font-serif font-bold mb-10 text-slate-900">유동수 세무회계의 약속</h3>
           <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-slate-50 p-8 rounded shadow-sm border-t-4 border-[#D4A857]">
                 <div className="text-[#D4A857] mb-4 flex justify-center"><Award size={40}/></div>
                 <h4 className="font-bold text-lg mb-3">직접 처리 원칙</h4>
                 <p className="text-slate-600 text-sm">기장을 제외한 모든 주요 업무는 대표 세무사가 처음부터 끝까지 직접 책임지고 처리합니다.</p>
              </div>
              <div className="bg-slate-50 p-8 rounded shadow-sm border-t-4 border-[#D4A857]">
                 <div className="text-[#D4A857] mb-4 flex justify-center"><Shield size={40}/></div>
                 <h4 className="font-bold text-lg mb-3">철저한 비밀 보장</h4>
                 <p className="text-slate-600 text-sm">고객의 정보와 상담 내용은 철저하게 비밀이 보장되며, 고객의 이익을 최우선으로 보호합니다.</p>
              </div>
              <div className="bg-slate-50 p-8 rounded shadow-sm border-t-4 border-[#D4A857]">
                 <div className="text-[#D4A857] mb-4 flex justify-center"><TrendingUp size={40}/></div>
                 <h4 className="font-bold text-lg mb-3">최적의 절세 솔루션</h4>
                 <p className="text-slate-600 text-sm">획일적인 처리가 아닌, 고객 상황에 맞는 맞춤형 절세 전략과 대응 방안을 제시합니다.</p>
              </div>
           </div>
        </div>
      </div>

      {/* 타임라인 섹션 */}
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

      {/* 상장/경력 슬라이드 섹션 */}
      <div className="bg-slate-50 py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-[#D4A857] font-bold tracking-widest text-sm uppercase">AWARDS</span>
            <h3 className="text-3xl font-serif font-bold text-slate-900 mt-3 mb-4">
              국세청 25년, 이렇게 걸어왔습니다
            </h3>
            <p className="text-slate-500 max-w-2xl mx-auto font-light">
              대통령 임명장부터 국세청장 표창까지, 신뢰를 증명하는 기록들입니다.
            </p>
          </div>
          
          <AwardsCarousel 
            awards={awardsForCarousel}
            autoPlay={true}
            autoPlayInterval={3000}
          />
        </div>
      </div>
    </div>
  );
}
