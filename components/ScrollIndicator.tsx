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
    if (typeof window === 'undefined') return;
    const el = document.getElementById(targetId);
    if (!el) return;
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={[
        'inline-flex items-center justify-center',
        'transition-opacity duration-300',
        'opacity-50 hover:opacity-100',
        'animate-bounce cursor-pointer',
        className,
      ].join(' ')}
      aria-label={direction === 'down' ? 'Scroll down' : 'Scroll up'}
    >
      <Icon className="w-6 h-6" />
    </button>
  );
}
