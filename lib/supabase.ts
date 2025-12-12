// lib/supabase.ts
import { createClient } from '@supabase/supabase-js';

// 브라우저에서 쓸 수 있는 안전한 연결 (NEXT_PUBLIC_ 키 사용)
export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);