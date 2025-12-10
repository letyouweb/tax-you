'use client';

import Link from 'next/link';
import { ChevronDown } from 'lucide-react';

export default function HeroButtons() {
  
  // 이미지(444.PNG)에 있는 텍스트 그대로 적용
  const menus = [
    { title: "세무조사", href: "/services" },
    { title: "양도", href: "/services/yangdo" },
    { title: "상속", href: "/services/sangsok" },
    { title: "증여", href: "/services/jeungyo" },
    { title: "조세불복", href: "/services/bulbok" },
  ];

  const handleScroll = () => {
    // page.tsx의 ID와 일치하도록 수정 (insight -> insight-section)
    const target = document.getElementById("insight-section");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    // ✅ 위치만 bottom-6 -> bottom-10으로 수정하여 다른 페이지 버튼과 높이 통일
    <div className="absolute bottom-10 left-0 w-full flex flex-col items-center justify-center z-20 gap-3">
      
      {/* 1. 서비스 버튼 (원하시는 사각형 디자인 유지) */}
      <div className="flex flex-wrap justify-center gap-2">
        {menus.map((menu, index) => (
          <Link
            key={index}
            href={menu.href}
            className="px-3 py-1.5 text-xs text-white/90 border border-white/30 rounded-[3px] bg-transparent transition-all duration-200 hover:bg-sky-400 hover:border-sky-400 hover:text-white"
          >
            {menu.title}
          </Link>
        ))}
      </div>

      {/* 2. Scroll Hint (텍스트 없이 심플한 화살표만 유지) */}
      <button
        type="button"
        onClick={handleScroll}
        className="flex flex-col items-center opacity-60 hover:opacity-100 transition-opacity cursor-pointer mt-2"
        aria-label="Scroll to content"
      >
        {/* SCROLL 글자 제거, 화살표만 깔끔하게 */}
        <ChevronDown className="w-5 h-5 text-white animate-bounce" />
      </button>

    </div>
  );
}