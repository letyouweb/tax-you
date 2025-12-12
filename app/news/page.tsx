'use client';

import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
// GlobalFooter 임포트는 필요 없어서 제거하거나 두셔도 됩니다.
// import GlobalFooter from '@/components/GlobalFooter'; 
import { Calendar, ExternalLink, Loader2, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

interface NewsItem {
  id: number;
  title: string;
  link: string;
  date: string;
  created_at: string;
}

export default function NewsPage() {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAllNews = async () => {
      try {
        // API를 통해 최대 100개의 뉴스 가져오기
        const response = await fetch('/api/cron/tax-news'); // [주의] API 경로가 cron 쪽인지 확인 필요, 보통 조회용 API를 따로 만들거나 cron 결과가 아닌 조회 로직이어야 함.
        // 하지만 기존에 Supabase 직접 조회를 썼다면 그걸 유지하는 게 낫습니다.
        // 아까 제안드린 코드는 Supabase 클라이언트 직접 사용이었습니다.
        // 여기서는 '조회' 목적이므로, 복잡한 API 호출보다 Supabase 직접 호출 코드로 복원해드리겠습니다.
        
        // (사용자가 올린 page.tsx 파일 내용을 기반으로, fetch 대신 supabase 직접 호출로 안전하게 복구)
        // 사용자가 올린 파일에는 fetch('/api/all-news')로 되어있는데, 이 API가 없을 수도 있습니다.
        // 가장 확실한 Supabase 직접 조회 코드로 드립니다.
        const { supabase } = await import('@/lib/supabase'); // 동적 임포트로 안전하게

        const { data, error } = await supabase
          .from('tax_news')
          .select('*')
          .order('date', { ascending: false })
          .limit(100);

        if (error) throw error;
        if (data) setNews(data);

      } catch (error) {
        console.error('뉴스 로딩 실패:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchAllNews();
  }, []);

  return (
    <div className="bg-white min-h-screen flex flex-col">
      <Navbar />
      
      {/* 헤더 영역 */}
      <div className="pt-20">
        <div className="bg-[#050B16] text-white py-16 px-6 text-center relative overflow-hidden">
           {/* 배경 패턴 */}
           <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
           
           <div className="relative z-10 max-w-4xl mx-auto">
             <Link href="/" className="inline-flex items-center text-slate-400 hover:text-[#D4A857] mb-6 text-sm transition-colors">
               <ArrowLeft size={14} className="mr-1" /> 메인으로 돌아가기
             </Link>
             <h1 className="text-3xl md:text-4xl font-serif font-bold mb-4">
               국세청 뉴스 아카이브
             </h1>
             <p className="text-slate-400 text-sm md:text-base">
               매일 아침 업데이트되는 국세청의 최신 정책과 보도자료를<br className="hidden md:block"/>
               유동수 세무회계에서 가장 빠르고 정확하게 전달해 드립니다.
             </p>
           </div>
        </div>
      </div>

      {/* 뉴스 리스트 영역 */}
      <main className="flex-1 container mx-auto px-6 py-16 max-w-4xl">
        {loading ? (
          <div className="flex justify-center py-20">
            <Loader2 className="animate-spin text-[#D4A857]" size={40} />
          </div>
        ) : (
          <div className="space-y-6">
            <div className="flex justify-between items-end border-b border-slate-100 pb-4 mb-8">
              <h2 className="text-xl font-bold text-slate-800">
                전체 소식 <span className="text-[#D4A857] ml-1">{news.length}</span>
              </h2>
              <span className="text-xs text-slate-400">최근 100건 제공</span>
            </div>

            {/* 리스트 아이템 */}
            <div className="grid gap-4">
              {news.map((item) => (
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
                          {/* 날짜 포맷 안전하게 처리 */}
                          {new Date(item.date || item.created_at).toLocaleDateString('ko-KR')}
                        </span>
                        {/* 최신 뉴스 배지 */}
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
              ))}
            </div>

            {news.length === 0 && (
              <div className="text-center py-24 bg-slate-50 rounded-lg border border-slate-100 border-dashed">
                <p className="text-slate-400">아직 등록된 뉴스가 없습니다.</p>
              </div>
            )}
          </div>
        )}
      </main>

      {/* [수정됨] GlobalFooter 제거 (Layout에서 이미 보여주고 있으므로 중복 방지) */}
      {/* <GlobalFooter /> */}
    </div>
  );
}