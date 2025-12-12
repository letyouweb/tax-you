import { createClient } from '@supabase/supabase-js';

// 서버 컴포넌트용 클라이언트 (읽기 전용 - anon key 사용)
export function createServerSupabaseClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error('Supabase URL 또는 Anon Key가 설정되지 않았습니다.');
  }

  return createClient(supabaseUrl, supabaseAnonKey);
}

// API Route용 클라이언트 (쓰기 작업 - service role key 사용)
export function createServiceSupabaseClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !supabaseServiceKey) {
    throw new Error('Supabase URL 또는 Service Role Key가 설정되지 않았습니다.');
  }

  return createClient(supabaseUrl, supabaseServiceKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false
    }
  });
}

// 타입 정의
export interface TaxNews {
  id: number;
  title: string;
  link: string;
  date: string | null;
  created_at: string;
}
