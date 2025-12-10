'use client';

import { ChevronDown } from 'lucide-react';

interface NextSectionButtonProps {
  targetId: string;
  isDarkBg?: boolean; // 배경이 어두운 섹션인 경우 true
}

export default function NextSectionButton({ targetId, isDarkBg = false }: NextSectionButtonProps) {
  const handleScroll = () => {
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.warn(`Target ID "${targetId}" not found.`);
    }
  };

  return (
    <div className="absolute bottom-6 left-0 w-full flex justify-center z-20">
      <button
        onClick={handleScroll}
        className={`
          flex flex-col items-center 
          transition-all duration-300 hover:scale-110 cursor-pointer animate-bounce
          ${isDarkBg ? 'text-white opacity-70 hover:opacity-100' : 'text-slate-400 hover:text-[#D4A857]'}
        `}
        aria-label="Next Section"
      >
        <span className="text-[10px] uppercase tracking-widest mb-1">
          Scroll
        </span>
        <ChevronDown className="w-5 h-5" />
      </button>
    </div>
  );
}