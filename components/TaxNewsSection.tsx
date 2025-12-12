'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface TaxNews {
  id: number;
  title: string;
  link: string;
  date: string | null;
  created_at: string;
}

export default function TaxNewsSection() {
  const [newsItems, setNewsItems] = useState<TaxNews[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchNews() {
      try {
        // API Route를 통해 데이터 가져오기
        const response = await fetch('/api/news');
        
        if (!response.ok) {
          throw new Error('뉴스를 불러오는데 실패했습니다.');
        }

        const data = await response.json();
        setNewsItems(data.news || []);
      } catch (err) {
        console.error('뉴스 로드 중 에러:', err);
        setError(err instanceof Error ? err.message : '뉴스를 불러오는데 실패했습니다.');
      } finally {
        setLoading(false);
      }
    }

    fetchNews();
  }, []);

  return (
    <section className="min-h-screen snap-start flex items-center justify-center bg-slate-50 py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* 헤더 */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#050B16] mb-4">
            국세청 최신 소식
          </h2>
          <p className="text-lg text-gray-600">
            국세청의 최신 정책 및 세무 관련 소식을 확인하세요
          </p>
        </div>

        {/* 로딩 상태 */}
        {loading ? (
          <div className="text-center py-16">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-[#D4A857] border-t-transparent"></div>
            <p className="text-gray-500 text-lg mt-4">뉴스를 불러오는 중...</p>
          </div>
        ) : error || newsItems.length === 0 ? (
          /* 에러 또는 빈 데이터 처리 */
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">
              {error || '현재 표시할 수 있는 국세청 소식이 없습니다.'}
            </p>
          </div>
        ) : (
          /* 뉴스 그리드 */
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {newsItems.map((news) => (
              <Link
                key={news.id}
                href={news.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 hover:border-[#D4A857]"
              >
                {/* 날짜 */}
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-semibold text-[#D4A857] bg-[#D4A857]/10 px-3 py-1 rounded-full">
                    {new Date(news.date || news.created_at).toLocaleDateString('ko-KR', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </span>
                </div>

                {/* 제목 */}
                <h3 className="text-lg font-semibold text-[#050B16] group-hover:text-[#D4A857] transition-colors duration-200 line-clamp-2 mb-2">
                  {news.title}
                </h3>

                {/* 링크 아이콘 */}
                <div className="flex items-center gap-2 text-sm text-gray-500 group-hover:text-[#D4A857] transition-colors">
                  <span>자세히 보기</span>
                  <svg 
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M9 5l7 7-7 7" 
                    />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        )}

        {/* 더보기 버튼 - 내부 페이지(/news)로 연결 */}
        {newsItems.length > 0 && (
          <div className="text-center mt-12">
            <Link 
              href="/news" 
              className="inline-flex items-center gap-2 bg-[#050B16] text-white px-8 py-4 rounded-lg font-bold hover:bg-slate-800 transition-colors shadow-lg shadow-slate-200"
            >
              뉴스 아카이브 전체보기 <ArrowRight size={18} />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
