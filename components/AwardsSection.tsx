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
      <section id="career" className="snap-section relative py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <span className="text-[#D4A857] font-bold tracking-widest text-sm uppercase">CAREER</span>
            <p className="text-slate-500 max-w-2xl mx-auto font-light">
              세무조사 첫 대응부터 조세불복까지
            </p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900">
              국세청 25년 <span className="text-[#5B9BD5]">경험으로 함께합니다</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {awardsData.map((award, idx) => (
              <div 
                key={idx}
                className="bg-white p-4 pb-8 rounded shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer"
                onClick={() => openLightbox(award.src, award.alt)}
              >
                <div className="aspect-[3/4] bg-slate-100 overflow-hidden rounded mb-6 border border-slate-100 relative">
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
                <div className="px-2 text-center">
                  <h3 className="font-serif text-lg font-bold text-slate-900 mb-2">{award.title}</h3>
                  <p className="text-sm text-slate-500 font-light line-clamp-2">{award.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Scroll Indicator - 밝은 배경용 */}
        <div className="absolute left-1/2 bottom-6 -translate-x-1/2 z-30">
          <ScrollIndicator
            targetId="contact"
            direction="down"
            className="text-slate-400"
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
