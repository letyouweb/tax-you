import { NextResponse } from 'next/server';
import Parser from 'rss-parser';
import { createServiceSupabaseClient } from '@/lib/supabaseClient';

// Next.js 캐시 비활성화 (매번 최신 데이터 가져오기)
export const dynamic = 'force-dynamic';
export const revalidate = 0;

interface RSSItem {
  title?: string;
  link?: string;
  pubDate?: string;
  isoDate?: string;
}

export async function GET() {
  try {
    // 1. RSS 파싱
    const parser = new Parser();
    const RSS_URL = 'http://www.korea.kr/rss/policy.xml';
    
    console.log('RSS 피드 가져오는 중:', RSS_URL);
    const feed = await parser.parseURL(RSS_URL);
    
    if (!feed.items || feed.items.length === 0) {
      return NextResponse.json(
        { success: false, error: 'RSS 피드에 항목이 없습니다.' },
        { status: 404 }
      );
    }

    // 2. Supabase 클라이언트 생성 (Service Role Key 사용)
    // 이유: 백엔드에서 DB에 쓰기 작업을 하므로 RLS 우회가 필요
    const supabase = createServiceSupabaseClient();

    // 3. RSS 아이템을 tax_news 테이블에 upsert
    const newsItems = feed.items.map((item: RSSItem) => ({
      title: item.title || '제목 없음',
      link: item.link || '',
      date: item.pubDate || item.isoDate || new Date().toISOString(),
    }));

    // link 컬럼 기준 중복 무시 (onConflict)
    const { data, error } = await supabase
      .from('tax_news')
      .upsert(newsItems, { 
        onConflict: 'link',
        ignoreDuplicates: true 
      })
      .select();

    if (error) {
      console.error('Supabase upsert 에러:', error);
      return NextResponse.json(
        { success: false, error: error.message },
        { status: 500 }
      );
    }

    const insertedCount = data?.length || 0;
    console.log(`성공적으로 ${insertedCount}개의 뉴스 저장됨`);

    return NextResponse.json({
      success: true,
      inserted: insertedCount,
      total: feed.items.length,
      message: `${insertedCount}개의 새로운 뉴스가 추가되었습니다.`
    });

  } catch (error) {
    console.error('RSS 수집 중 에러:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: error instanceof Error ? error.message : '알 수 없는 에러가 발생했습니다.' 
      },
      { status: 500 }
    );
  }
}