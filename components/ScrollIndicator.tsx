'use client';

import { ChevronDown, ChevronUp } from 'lucide-react';

interface ScrollIndicatorProps {
  targetId: string;
  direction?: 'down' | 'up';
  className?: string;
}

export function ScrollIndicator({
  targetId,
  direction = 'down',
  className = '',
}: ScrollIndicatorProps) {
  const Icon = direction === 'down' ? ChevronDown : ChevronUp;

  const handleClick = () => {
    // 1. PC (Snap Container) 스크롤 제어
    const snapContainer = document.querySelector('.snap-container');
    if (snapContainer) {
      if (targetId === 'hero' || direction === 'up') {
        snapContainer.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const el = document.getElementById(targetId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
      return;
    }

    // 2. Mobile / General 스크롤 제어
    if (targetId === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const el = document.getElementById(targetId);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={[
        'inline-flex items-center justify-center p-2',
        'transition-all duration-300',
        'opacity-50 hover:opacity-100 hover:scale-110',
        'cursor-pointer',
        className,
      ].join(' ')}
      aria-label={direction === 'down' ? 'Scroll down' : 'Scroll up'}
    >
      {/* 텍스트(SCROLL) 제거됨, 아이콘만 표시 */}
      <Icon className="w-8 h-8 animate-bounce" strokeWidth={1.5} />
    </button>
  );
}