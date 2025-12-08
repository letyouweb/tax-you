'use client';

import { useState } from 'react';
import PageHeader from '@/components/PageHeader';
import { Phone, CheckCircle, XCircle } from 'lucide-react';

export default function Consult() {
  const [toast, setToast] = useState<{ type: 'success' | 'error'; message: string } | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://formsubmit.co/ajax/rdscta@daum.net', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setToast({ type: 'success', message: '상담 문의가 접수되었습니다.' });
        form.reset();
      } else {
        setToast({ type: 'error', message: '잠시 후 다시 시도해주세요.' });
      }
    } catch {
      setToast({ type: 'error', message: '잠시 후 다시 시도해주세요.' });
    } finally {
      setIsSubmitting(false);
      // 3초 후 토스트 자동 닫기
      setTimeout(() => setToast(null), 3000);
    }
  };

  return (
    <div className="bg-white min-h-screen">
      <PageHeader title="상담 문의" subTitle="세무조사, 상속, 증여 등 모든 세무 고민을 남겨주세요." />
      
      {/* 토스트 메시지 */}
      {toast && (
        <div className="fixed top-24 left-1/2 -translate-x-1/2 z-50 animate-fade-in">
          <div className={`flex items-center gap-3 px-6 py-4 rounded-lg shadow-lg ${
            toast.type === 'success' 
              ? 'bg-green-50 border border-green-200 text-green-800' 
              : 'bg-red-50 border border-red-200 text-red-800'
          }`}>
            {toast.type === 'success' 
              ? <CheckCircle className="w-5 h-5 text-green-600" />
              : <XCircle className="w-5 h-5 text-red-600" />
            }
            <span className="font-medium">{toast.message}</span>
          </div>
        </div>
      )}

      <div className="container mx-auto px-6 py-20 max-w-3xl">
         <div className="bg-white p-8 md:p-12 rounded shadow-lg border border-slate-100">
            <div className="text-center mb-10">
               <h3 className="text-2xl font-bold text-slate-900 mb-2">1:1 상담 예약</h3>
               <p className="text-slate-500 text-sm">양식에 맞춰 내용을 남겨주시면 확인 후 빠르게 연락드리겠습니다.</p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
               {/* Formsubmit 설정 - hidden 필드 */}
               <input type="hidden" name="_subject" value="유동수 세무회계 홈페이지 상담 문의" />
               <input type="hidden" name="_template" value="table" />
               <input type="hidden" name="_captcha" value="false" />

               <div className="grid md:grid-cols-2 gap-6">
                  <div>
                     <label className="block text-sm font-bold text-slate-700 mb-2">이름</label>
                     <input 
                       type="text" 
                       name="name"
                       required
                       className="w-full px-4 py-3 rounded border border-slate-300 focus:border-[#D4A857] focus:ring-1 focus:ring-[#D4A857] outline-none transition-colors" 
                       placeholder="홍길동" 
                     />
                  </div>
                  <div>
                     <label className="block text-sm font-bold text-slate-700 mb-2">연락처</label>
                     <input 
                       type="tel" 
                       name="phone"
                       required
                       className="w-full px-4 py-3 rounded border border-slate-300 focus:border-[#D4A857] focus:ring-1 focus:ring-[#D4A857] outline-none transition-colors" 
                       placeholder="010-0000-0000" 
                     />
                  </div>
               </div>
               
               <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">상담 분야</label>
                  <select 
                    name="category"
                    required
                    className="w-full px-4 py-3 rounded border border-slate-300 focus:border-[#D4A857] focus:ring-1 focus:ring-[#D4A857] outline-none transition-colors bg-white"
                  >
                     <option value="세무조사 대응">세무조사 대응</option>
                     <option value="양도/상속/증여">양도/상속/증여</option>
                     <option value="조세불복/경정청구">조세불복/경정청구</option>
                     <option value="세무기장/자문">세무기장/자문</option>
                     <option value="기타 문의">기타 문의</option>
                  </select>
               </div>
               
               <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">문의 내용</label>
                  <textarea 
                    rows={5} 
                    name="message"
                    required
                    className="w-full px-4 py-3 rounded border border-slate-300 focus:border-[#D4A857] focus:ring-1 focus:ring-[#D4A857] outline-none transition-colors resize-none" 
                    placeholder="간단한 상담 내용을 입력해주세요."
                  ></textarea>
               </div>
               
               <button 
                 type="submit" 
                 disabled={isSubmitting}
                 className="w-full py-4 bg-[#050B16] text-white font-bold rounded hover:bg-[#D4A857] transition-colors text-lg disabled:opacity-50 disabled:cursor-not-allowed"
               >
                  {isSubmitting ? '전송 중...' : '상담 신청하기'}
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
