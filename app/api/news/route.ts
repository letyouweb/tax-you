import { NextResponse } from 'next/server';
import { createServerSupabaseClient } from '@/lib/supabaseClient';

// Next.js 캐시 비활성화
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET() {
  try {
    const supabase = createServerSupabaseClient();
    
    // 최신 뉴스 4개 가져오기
    const { data, error } = await supabase
      .from('tax_news')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(4);

    if (error) {
      console.error('뉴스 가져오기 실패:', error);
      return NextResponse.json(
        { success: false, error: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      news: data || []
    });

  } catch (error) {
    console.error('뉴스 조회 중 에러:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: error instanceof Error ? error.message : '알 수 없는 에러가 발생했습니다.' 
      },
      { status: 500 }
    );
  }
}
