'use client';

import React from 'react';

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-8 right-6 z-[9999] flex flex-col gap-3 items-end">
      
      {/* 1. 카카오톡 상담 버튼 */}
      <a 
        // 👇 [중요] 여기에 실제 카카오 채널 링크를 넣으세요 (예: https://pf.kakao.com/_xxxxx)
        href="https://pf.kakao.com/_xxxxxx" 
        target="_blank"
        rel="noreferrer"
        className="flex items-center gap-2 bg-[#FEE500] text-[#3c1e1e] px-4 py-3 rounded-full shadow-lg hover:scale-105 transition-transform duration-300 group"
      >
        {/* 카카오 아이콘 SVG */}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M12 3c-4.97 0-9 3.185-9 7.115 0 2.557 1.707 4.8 4.27 6.054-.188.702-.682 2.545-.78 2.94-.122.49.178.483.375.352.27-.18 2.956-2.008 4.14-2.825.642.094 1.306.144 1.995.144 4.97 0 9-3.186 9-7.115C21 6.185 16.97 3 12 3z"/>
        </svg>
        <span className="font-bold text-sm tracking-tight">카톡</span>
      </a>

      {/* 2. 전화 상담 버튼 */}
      <a 
        href="tel:025180130"
        className="flex items-center gap-2 bg-[#050B16] text-white border border-white/20 px-4 py-3 rounded-full shadow-lg hover:scale-105 transition-transform duration-300 hover:bg-[#D4A857] hover:border-[#D4A857] group"
      >
        {/* 전화 아이콘 SVG */}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
        <span className="font-bold text-sm tracking-tight">전화</span>
      </a>

    </div>
  );
}