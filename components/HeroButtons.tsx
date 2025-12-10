'use client';

import Link from 'next/link';
import { ChevronDown } from 'lucide-react';

export default function HeroButtons() {
  
  const menus = [
    { title: "세무조사", href: "/services" },
    { title: "양도", href: "/services/yangdo" },
    { title: "상속", href: "/services/sangsok" },
    { title: "증여", href: "/services/jeungyo" },
    { title: "조세불복", href: "/services/bulbok" },
  ];

  const handleScroll = () => {
    const target = document.getElementById("insight");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="absolute bottom-6 left-0 w-full flex flex-col items-center justify-center z-20 gap-3">
      
      {/* 서비스 버튼 - 네모, 컴팩트, 하늘색 호버 */}
      <div className="flex flex-wrap justify-center gap-2">
        {menus.map((menu, index) => (
          <Link
            key={index}
            href={menu.href}
            className="px-3 py-1.5 text-xs text-white/70 border border-white/30 rounded-[3px] bg-transparent transition-all duration-200 hover:bg-sky-400 hover:border-sky-400 hover:text-white"
          >
            {menu.title}
          </Link>
        ))}
      </div>

      {/* Scroll Hint */}
      <button
        type="button"
        onClick={handleScroll}
        className="flex flex-col items-center opacity-40 hover:opacity-80 transition-opacity cursor-pointer mt-1"
        aria-label="Scroll to content"
      >
        <ChevronDown className="w-4 h-4 text-white animate-bounce" />
      </button>

    </div>
  );
}
