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

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    // 화면 너비 확인 (1024px 미만은 모바일로 간주)
    const isMobile = window.innerWidth < 1024;
    const snapContainer = document.querySelector('.snap-container');

    // [수정됨] PC 화면이고, 스냅 컨테이너가 존재할 때만 컨테이너 내부 스크롤
    if (!isMobile && snapContainer) {
      if (targetId === 'hero' || direction === 'up') {
        snapContainer.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const el = document.getElementById(targetId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    } 
    // [수정됨] 모바일이거나 컨테이너가 없으면 전체 윈도우 스크롤 (이 부분이 모바일 동작의 핵심)
    else {
      if (targetId === 'hero' || direction === 'up') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const el = document.getElementById(targetId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={[
        'inline-flex items-center justify-center p-4 z-50', // 터치 영역 확보
        'transition-all duration-300',
        'opacity-50 hover:opacity-100 hover:scale-110',
        'cursor-pointer',
        className,
      ].join(' ')}
      aria-label={direction === 'down' ? 'Scroll down' : 'Scroll up'}
    >
      <Icon className="w-8 h-8 animate-bounce" strokeWidth={1.5} />
    </button>
  );
}