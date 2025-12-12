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

    console.log(`RSS에서 ${feed.items.length}개의 항목을 가져왔습니다.`);

    // 2. Supabase 클라이언트 생성 (Service Role Key 사용)
    const supabase = createServiceSupabaseClient();

    // 3. 기존 링크 확인
    const { data: existingNews, error: fetchError } = await supabase
      .from('tax_news')
      .select('link');

    if (fetchError) {
      console.error('기존 뉴스 조회 에러:', fetchError);
      return NextResponse.json(
        { success: false, error: fetchError.message },
        { status: 500 }
      );
    }

    const existingLinks = new Set(existingNews?.map(item => item.link) || []);
    console.log(`DB에 이미 ${existingLinks.size}개의 뉴스가 있습니다.`);

    // 4. 새로운 뉴스만 필터링
    const newsItems = feed.items
      .filter((item: RSSItem) => item.link && !existingLinks.has(item.link))
      .map((item: RSSItem) => ({
        title: item.title || '제목 없음',
        link: item.link || '',
        date: item.pubDate || item.isoDate || new Date().toISOString(),
      }));

    console.log(`${newsItems.length}개의 새로운 뉴스를 삽입합니다.`);

    if (newsItems.length === 0) {
      return NextResponse.json({
        success: true,
        inserted: 0,
        total: feed.items.length,
        message: '모든 뉴스가 이미 DB에 존재합니다.'
      });
    }

    // 5. 새로운 뉴스 삽입
    const { data, error } = await supabase
      .from('tax_news')
      .insert(newsItems)
      .select();

    if (error) {
      console.error('Supabase insert 에러:', error);
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
      existing: existingLinks.size,
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
