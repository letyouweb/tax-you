'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

interface AwardItem {
  src: string;
  alt: string;
  title: string;
}

interface AwardsCarouselProps {
  awards: AwardItem[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
}

const AwardsCarousel = ({ 
  awards, 
  autoPlay = true, 
  autoPlayInterval = 3000
}: AwardsCarouselProps) => {
  const totalItems = awards.length;
  
  // 무한 루프용 확장 배열
  const extendedAwards = [...awards.slice(-5), ...awards, ...awards.slice(0, 5)];
  const startIndex = 5;
  
  const [currentIndex, setCurrentIndex] = useState(startIndex);
  const [isHovered, setIsHovered] = useState(false);
  const [enableTransition, setEnableTransition] = useState(true);
  const [visibleCount, setVisibleCount] = useState(5);
  
  // 라이트박스 상태
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState({ src: '', alt: '', title: '' });
  
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // 라이트박스 열기
  const openLightbox = (src: string, alt: string, title: string) => {
    setLightboxImage({ src, alt, title });
    setLightboxOpen(true);
  };

  // 라이트박스 닫기
  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  // ESC 키로 라이트박스 닫기
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
    };
    
    if (lightboxOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [lightboxOpen]);

  // 반응형
  useEffect(() => {
    const updateVisibleCount = () => {
      const width = window.innerWidth;
      if (width < 480) setVisibleCount(1);
      else if (width < 768) setVisibleCount(2);
      else if (width < 1024) setVisibleCount(3);
      else if (width < 1280) setVisibleCount(4);
      else setVisibleCount(5);
    };
    updateVisibleCount();
    window.addEventListener('resize', updateVisibleCount);
    return () => window.removeEventListener('resize', updateVisibleCount);
  }, []);

  // 다음 슬라이드
  const goNext = () => {
    setEnableTransition(true);
    setCurrentIndex(prev => prev + 1);
  };

  // 이전 슬라이드
  const goPrev = () => {
    setEnableTransition(true);
    setCurrentIndex(prev => prev - 1);
  };

  // 무한 루프 처리
  useEffect(() => {
    if (currentIndex >= startIndex + totalItems) {
      const timer = setTimeout(() => {
        setEnableTransition(false);
        setCurrentIndex(startIndex);
      }, 500);
      return () => clearTimeout(timer);
    }
    if (currentIndex < startIndex) {
      const timer = setTimeout(() => {
        setEnableTransition(false);
        setCurrentIndex(startIndex + totalItems - 1);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, totalItems]);

  // 자동 재생
  useEffect(() => {
    if (!autoPlay || isHovered || lightboxOpen) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }
    
    timerRef.current = setInterval(() => {
      setEnableTransition(true);
      setCurrentIndex(prev => prev + 1);
    }, autoPlayInterval);
    
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [autoPlay, autoPlayInterval, isHovered, lightboxOpen]);

  const realIndex = ((currentIndex - startIndex) % totalItems + totalItems) % totalItems;
  const gap = 16;
  const cardWidthPercent = 100 / visibleCount;

  return (
    <>
      <div 
        className="relative w-full max-w-7xl mx-auto"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* 캐러셀 트랙 */}
        <div className="overflow-hidden mx-10 sm:mx-14">
          <div 
            className="flex"
            style={{
              gap: `${gap}px`,
              transform: `translateX(calc(-${currentIndex * cardWidthPercent}% - ${currentIndex * gap / visibleCount}px))`,
              transition: enableTransition ? 'transform 500ms ease-in-out' : 'none',
            }}
          >
            {extendedAwards.map((award, idx) => (
              <div
                key={`slide-${idx}`}
                className="flex-shrink-0"
                style={{ width: `calc(${cardWidthPercent}% - ${gap * (visibleCount - 1) / visibleCount}px)` }}
              >
                <div 
                  className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden h-full cursor-pointer group"
                  onClick={() => openLightbox(award.src, award.alt, award.title)}
                >
                  <div className="relative aspect-[3/4] bg-slate-50 p-2 sm:p-3">
                    {/* 호버 시 확대 안내 */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors z-10 flex items-center justify-center">
                      <span className="opacity-0 group-hover:opacity-100 text-white font-bold text-xs sm:text-sm bg-black/60 px-3 py-1.5 rounded transition-opacity">
                        클릭하여 확대
                      </span>
                    </div>
                    <Image
                      src={award.src}
                      alt={award.alt}
                      fill
                      className="object-contain group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 20vw"
                    />
                  </div>
                  <div className="p-3 sm:p-4 text-center border-t border-slate-100">
                    <p className="text-xs sm:text-sm font-medium text-slate-800 truncate">{award.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 좌우 버튼 */}
        <button
          onClick={goPrev}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 sm:p-3 rounded-full bg-white shadow-lg text-slate-600 hover:text-[#D4A857] hover:shadow-xl transition-all border border-slate-100"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
        <button
          onClick={goNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 sm:p-3 rounded-full bg-white shadow-lg text-slate-600 hover:text-[#D4A857] hover:shadow-xl transition-all border border-slate-100"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {/* 도트 인디케이터 */}
        <div className="flex justify-center gap-2 mt-6 sm:mt-8">
          {awards.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setEnableTransition(true);
                setCurrentIndex(startIndex + idx);
              }}
              className={`h-2 rounded-full transition-all duration-300 ${
                realIndex === idx ? 'bg-[#D4A857] w-6' : 'bg-slate-300 hover:bg-slate-400 w-2'
              }`}
            />
          ))}
        </div>
      </div>

      {/* 라이트박스 모달 */}
      {lightboxOpen && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm"
          onClick={closeLightbox}
        >
          {/* 닫기 버튼 */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="닫기"
          >
            <X size={32} />
          </button>
          
          {/* 이미지 + 캡션 */}
          <div 
            className="relative w-[90vw] h-[85vh] max-w-4xl flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative flex-1 w-full">
              <Image
                src={lightboxImage.src}
                alt={lightboxImage.alt}
                fill
                className="object-contain"
                sizes="90vw"
                priority
              />
            </div>
            {/* 캡션 */}
            <div className="mt-4 text-center">
              <p className="text-white text-lg font-bold">{lightboxImage.title}</p>
              <p className="text-white/70 text-sm mt-1">{lightboxImage.alt}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AwardsCarousel;
