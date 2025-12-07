import PageHeader from '@/components/PageHeader';
import KakaoMap from '@/components/KakaoMap';
import { MapPin, Clock, Phone, Mail } from 'lucide-react';

export default function Location() {
  return (
    <div className="bg-white min-h-screen">
      <PageHeader title="오시는 길" subTitle="방문해 주시면 친절하고 상세하게 안내해 드리겠습니다." />
      <div className="container mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-start">
         <div className="space-y-8">
            <div>
               <h4 className="font-bold text-xl mb-4 text-slate-900 border-b border-slate-200 pb-2">유동수 세무회계</h4>
               <ul className="space-y-4 text-slate-600">
                  <li className="flex gap-4">
                     <MapPin className="text-[#D4A857] flex-shrink-0" />
                     <span>서울 강남구 언주로130길 23, 평해빌딩 201호<br/><span className="text-sm text-slate-400">(강남구청역 2번 출구 도보 6분)</span></span>
                  </li>
                  <li className="flex gap-4">
                     <Clock className="text-[#D4A857] flex-shrink-0" />
                     <span>
                        평일 09:30 ~ 17:30 <br/>
                        <span className="text-sm text-slate-400">점심시간 12:30 ~ 13:30 / 주말 및 공휴일 휴무</span>
                     </span>
                  </li>
                  <li className="flex gap-4">
                     <Phone className="text-[#D4A857] flex-shrink-0" />
                     <span>
                        Tel: 02-518-0130 <br/>
                        Fax: 02-518-0137
                     </span>
                  </li>
                  <li className="flex gap-4">
                     <Mail className="text-[#D4A857] flex-shrink-0" />
                     <span>rdscta@daum.net</span>
                  </li>
               </ul>
            </div>
         </div>
         
         <div className="space-y-4">
            <div className="relative h-64 bg-slate-100 rounded-lg overflow-hidden">
               <img src="/images/유동수세무회계_오시는길.jpg" alt="건물 외관" className="w-full h-full object-cover" />
               <div className="absolute bottom-0 left-0 bg-black/60 text-white text-xs px-3 py-1">평해빌딩 전경</div>
            </div>
            <div className="rounded-lg overflow-hidden border border-slate-200 shadow-sm">
               <KakaoMap 
                  address="서울 강남구 언주로130길 23"
                  markerTitle="유동수 세무회계"
                  height="320px"
               />
            </div>
         </div>
      </div>
    </div>
  );
}
