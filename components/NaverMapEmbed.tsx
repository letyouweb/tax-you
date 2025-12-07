'use client';

interface NaverMapEmbedProps {
  address?: string;
  height?: string;
}

export default function NaverMapEmbed({ 
  address = '서울 강남구 언주로130길 23',
  height = '340px'
}: NaverMapEmbedProps) {
  // 네이버 지도 검색 URL로 iframe embed
  const encodedAddress = encodeURIComponent(address);
  const mapUrl = `https://map.naver.com/p/search/${encodedAddress}`;

  return (
    <div className="relative w-full rounded-lg overflow-hidden" style={{ height }}>
      <iframe
        src={mapUrl}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="오시는 길"
      />
    </div>
  );
}
