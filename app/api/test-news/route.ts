import { NextResponse } from 'next/server';
import { createServiceSupabaseClient } from '@/lib/supabaseClient';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const supabase = createServiceSupabaseClient();
    
    // 모든 뉴스 조회
    const { data, error, count } = await supabase
      .from('tax_news')
      .select('*', { count: 'exact' })
      .order('created_at', { ascending: false });

    if (error) {
      return NextResponse.json(
        { success: false, error: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      count: count || 0,
      news: data || [],
      message: `총 ${count || 0}개의 뉴스가 DB에 있습니다.`
    });

  } catch (error) {
    console.error('테스트 중 에러:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: error instanceof Error ? error.message : '알 수 없는 에러' 
      },
      { status: 500 }
    );
  }
}
