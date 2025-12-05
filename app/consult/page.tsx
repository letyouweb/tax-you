import PageHeader from '@/components/PageHeader';
import { Phone } from 'lucide-react';

export default function Consult() {
  return (
    <div className="bg-white min-h-screen">
      <PageHeader title="상담 문의" subTitle="세무조사, 상속, 증여 등 모든 세무 고민을 남겨주세요." />
      
      <div className="container mx-auto px-6 py-20 max-w-3xl">
         <div className="bg-white p-8 md:p-12 rounded shadow-lg border border-slate-100">
            <div className="text-center mb-10">
               <h3 className="text-2xl font-bold text-slate-900 mb-2">1:1 상담 예약</h3>
               <p className="text-slate-500 text-sm">양식에 맞춰 내용을 남겨주시면 확인 후 빠르게 연락드리겠습니다.</p>
            </div>
            
            <form className="space-y-6">
               <div className="grid md:grid-cols-2 gap-6">
                  <div>
                     <label className="block text-sm font-bold text-slate-700 mb-2">이름</label>
                     <input type="text" className="w-full px-4 py-3 rounded border border-slate-300 focus:border-[#D4A857] focus:ring-1 focus:ring-[#D4A857] outline-none transition-colors" placeholder="홍길동" />
                  </div>
                  <div>
                     <label className="block text-sm font-bold text-slate-700 mb-2">연락처</label>
                     <input type="tel" className="w-full px-4 py-3 rounded border border-slate-300 focus:border-[#D4A857] focus:ring-1 focus:ring-[#D4A857] outline-none transition-colors" placeholder="010-0000-0000" />
                  </div>
               </div>
               
               <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">상담 분야</label>
                  <select className="w-full px-4 py-3 rounded border border-slate-300 focus:border-[#D4A857] focus:ring-1 focus:ring-[#D4A857] outline-none transition-colors bg-white">
                     <option>세무조사 대응</option>
                     <option>양도/상속/증여</option>
                     <option>조세불복/경정청구</option>
                     <option>세무기장/자문</option>
                     <option>기타 문의</option>
                  </select>
               </div>
               
               <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">문의 내용</label>
                  <textarea rows={5} className="w-full px-4 py-3 rounded border border-slate-300 focus:border-[#D4A857] focus:ring-1 focus:ring-[#D4A857] outline-none transition-colors resize-none" placeholder="간단한 상담 내용을 입력해주세요."></textarea>
               </div>
               
               <button type="button" className="w-full py-4 bg-[#050B16] text-white font-bold rounded hover:bg-[#D4A857] transition-colors text-lg">
                  상담 신청하기
               </button>
            </form>
         </div>
         
         <div className="mt-12 text-center">
            <p className="text-slate-600 mb-4">빠른 상담이 필요하신가요?</p>
            <a href="tel:025180130" className="inline-flex items-center gap-3 px-8 py-4 border border-[#D4A857] text-[#D4A857] font-bold rounded hover:bg-[#D4A857] hover:text-white transition-colors">
               <Phone size={20}/> 전화 상담 02-518-0130
            </a>
         </div>
      </div>
    </div>
  );
}
