import { supabase } from '@/lib/supabase';
import Navbar from '@/components/Navbar';
// Footer는 Layout.tsx에서 처리되므로 여기선 import 안 함
import { Calendar, ExternalLink, Megaphone } from 'lucide-react'; // ArrowLeft 제거됨

// [핵심] 60초마다 데이터를 갱신 (ISR 방식) - 빠른 로딩
export const revalidate = 60;

interface NewsItem {
  id: number;
  title: string;
  link: string;
  date: string;
  created_at: string;
}

export default async function NewsPage() {
  // [서버 사이드] 데이터 미리 가져오기
  const { data: news, error } = await supabase
    .from('tax_news')
    .select('*')
    .order('date', { ascending: false })
    .limit(100);

  if (error) {
    console.error('News loading error:', error);
  }

  const newsList = news || [];

  return (
    <div className="bg-white min-h-screen flex flex-col">
      <Navbar />
      
      {/* 헤더 영역 */}
      <div className="pt-20">
        <div className="bg-[#050B16] text-white py-20 px-6 text-center relative overflow-hidden">
           {/* 배경 패턴 */}
           <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
           
           <div className="relative z-10 max-w-4xl mx-auto">
             {/* [삭제됨] 메인으로 돌아가기 링크 제거하여 디자인 단순화 */}
             
             <h1 className="text-3xl md:text-5xl font-serif font-bold mb-6 tracking-tight">
               국세청 뉴스 아카이브
             </h1>
             <p className="text-slate-400 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
               매일 아침 업데이트되는 국세청의 최신 정책과 보도자료를<br className="hidden md:block"/>
               유동수 세무회계에서 가장 빠르고 정확하게 전달해 드립니다.
             </p>
           </div>
        </div>
      </div>

      {/* 뉴스 리스트 영역 */}
      <main className="flex-1 container mx-auto px-6 py-16 max-w-4xl">
        <div className="space-y-6">
          <div className="flex justify-between items-end border-b border-slate-100 pb-4 mb-8">
            <h2 className="text-xl font-bold text-slate-800">
              전체 소식 <span className="text-[#D4A857] ml-1">{newsList.length}</span>
            </h2>
            <span className="text-xs text-slate-400">최근 100건 제공 (1분 주기 갱신)</span>
          </div>

          {/* 리스트 아이템 */}
          <div className="grid gap-4">
            {newsList.length > 0 ? (
              newsList.map((item) => (
                <a 
                  key={item.id}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block bg-white border border-slate-100 rounded-lg p-6 hover:border-[#D4A857] hover:shadow-md transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="inline-flex items-center gap-1 bg-slate-50 text-slate-500 text-xs px-2 py-1 rounded border border-slate-100">
                          <Calendar size={12} />
                          {/* 날짜 표시 */}
                          {new Date(item.date || item.created_at).toLocaleDateString('ko-KR')}
                        </span>
                        {/* 최신 뉴스(오늘/어제)인 경우 NEW 배지 표시 */}
                        {new Date(item.date || item.created_at) > new Date(Date.now() - 86400000 * 2) && (
                          <span className="text-[10px] font-bold text-red-500 bg-red-50 px-2 py-1 rounded animate-pulse">
                            NEW
                          </span>
                        )}
                      </div>
                      <h3 className="text-lg font-bold text-slate-800 group-hover:text-[#D4A857] transition-colors leading-snug">
                        {item.title}
                      </h3>
                    </div>
                    
                    <div className="shrink-0">
                      <span className="inline-flex items-center gap-1 text-sm text-slate-400 font-medium group-hover:text-[#D4A857] transition-colors">
                        원문 보기 <ExternalLink size={14} />
                      </span>
                    </div>
                  </div>
                </a>
              ))
            ) : (
              // 데이터가 없을 경우
              <div className="text-center py-24 bg-slate-50 rounded-lg border border-slate-100 border-dashed flex flex-col items-center gap-3">
                <Megaphone className="text-slate-300" size={40} />
                <p className="text-slate-400">등록된 뉴스가 없습니다.</p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}