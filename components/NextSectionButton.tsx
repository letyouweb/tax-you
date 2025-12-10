'use client';

import { ChevronDown } from 'lucide-react';

interface NextSectionButtonProps {
  targetId: string;
  isDarkBg?: boolean;
}

export default function NextSectionButton({ targetId, isDarkBg = false }: NextSectionButtonProps) {
  const handleScroll = () => {
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    // ✅ 위치 통일: bottom-10 (Hero 섹션과 동일한 높이)
    // ✅ z-index: 50 (가장 위에 배치)
    <div className="absolute bottom-10 left-0 w-full flex justify-center z-50 pointer-events-none">
      <button
        onClick={handleScroll}
        className={`
          pointer-events-auto flex flex-col items-center 
          transition-all duration-300 hover:scale-110 cursor-pointer animate-bounce
          ${isDarkBg ? 'text-white opacity-90 hover:opacity-100' : 'text-slate-400 hover:text-[#D4A857]'}
        `}
        aria-label="Next Section"
      >
        {/* HeroButtons와 폰트 사이즈, 간격(mb-1) 완전히 동일하게 맞춤 */}
        <span className="text-[10px] uppercase tracking-widest mb-1 font-medium">
          Scroll
        </span>
        <ChevronDown className="w-4 h-4" /> {/* 아이콘 크기도 w-4 h-4로 통일 */}
      </button>
    </div>
  );
}