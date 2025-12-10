'use client';

import { useState } from 'react';
import Image from 'next/image';
import ImageLightbox from '@/components/ImageLightbox';
import { ScrollIndicator } from './ScrollIndicator';

const awardsData = [
  {
    src: '/images/awards/유동수세무회계_표창장.jpg',
    alt: '표창장',
    title: '국세청 표창장',
    desc: '성실한 국세 행정에 기여한 공로를 인정받아 수여된 표창장입니다.'
  },
  {
    src: '/images/awards/유동수세무회계_국세청_표창장.jpg',
    alt: '국세청 표창장',
    title: '국세청장 표창장',
    desc: '국세청장으로부터 수여받은 표창장으로 세무 행정 분야에 대한 전문성을 인정받았습니다.'
  },
  {
    src: '/images/awards/유동수세무회계_강남세무서_명예퇴임.jpg',
    alt: '강남세무서 명예퇴임 기념패',
    title: '명예퇴임 기념패',
    desc: '강남세무서 조사과 동료들이 함께 남겨준 감사의 기념패입니다.'
  },
  {
    src: '/images/awards/유동수세무회계_국세청장재직기념패.jpg',
    alt: '국세청장 재직 기념패',
    title: '국세청장 재직 기념패',
    desc: '국세행정에 기여한 공로를 인정받아 수여된 기념패입니다.'
  }
];

export default function AwardsSection() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState({ src: '', alt: '' });

  const openLightbox = (src: string, alt: string) => {
    setLightboxImage({ src, alt });
    setLightboxOpen(true);
  };

  return (
    <>
      {/* [수정 1] min-h-screen flex flex-col justify-center
         - 섹션 높이를 화면 전체로 잡고, 내용물을 수직 중앙 정렬합니다.
         - 이렇게 해야 스크롤 화살표가 항상 화면 맨 아래에 고정됩니다.
      */}
      <section id="awards" className="snap-section relative min-h-screen flex flex-col justify-center bg-slate-50 py-12 md:py-0">
        <div className="container mx-auto px-6">
          
          {/* Header Area */}
          {/* [수정 2] mb-16 -> mb-10 : 그리드와의 간격을 줄임 */}
          <div className="text-center mb-10 md:mb-12 space-y-3">
            
            {/* 3D 골드 배지 */}
            <div className="flex justify-center mb-4">
              <Image 
                src="/images/badge-gold-3d.png" 
                alt="국세청 25년 경력 조사팀장 출신"
                width={360} 
                height={80}
                className="object-contain h-auto drop-shadow-xl hover:scale-105 transition-transform duration-500"
                priority
              />
            </div>

            <p className="text-slate-500 max-w-2xl mx-auto font-light text-lg">
              세무조사 첫 대응부터 조세불복까지
            </p>
            
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 leading-tight">
              국세청 25년 <span className="text-[#D4A857]">경험으로 함께합니다</span>
            </h2>
          </div>

          {/* Awards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 max-w-7xl mx-auto">
            {awardsData.map((award, idx) => (
              <div 
                key={idx}
                className="bg-white p-4 pb-6 rounded shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer border border-transparent hover:border-[#D4A857]/30"
                onClick={() => openLightbox(award.src, award.alt)}
              >
                {/* [수정 3] 이미지 비율 조정 및 하단 여백 축소 */}
                <div className="aspect-[3/4] bg-slate-100 overflow-hidden rounded mb-4 border border-slate-100 relative">
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors z-10 flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 text-white font-bold text-sm bg-black/50 px-4 py-2 rounded transition-opacity">
                      클릭하여 확대
                    </span>
                  </div>
                  <Image 
                    src={award.src}
                    alt={award.alt}
                    fill
                    className="object-contain p-2 transform group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="px-1 text-center">
                  <h3 className="font-serif text-lg font-bold text-slate-900 mb-1 group-hover:text-[#D4A857] transition-colors">
                    {award.title}
                  </h3>
                  <p className="text-sm text-slate-500 font-light line-clamp-2">
                    {award.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* [수정 4] 스크롤 화살표 위치 고정 */}
        {/* bottom-6 md:bottom-10 : 화면 맨 아래에 고정됨 */}
        <div className="absolute left-1/2 bottom-6 md:bottom-10 -translate-x-1/2 z-30">
          <ScrollIndicator
            targetId="location-section" 
            direction="down"
            className="text-slate-400 hover:text-[#D4A857] transition-colors"
          />
        </div>
      </section>

      <ImageLightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        imageSrc={lightboxImage.src}
        imageAlt={lightboxImage.alt}
      />
    </>
  );
}