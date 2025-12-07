'use client';

import { useEffect, useRef, useState } from 'react';

declare global {
  interface Window {
    kakao: any;
  }
}

interface KakaoMapProps {
  address?: string;
  markerTitle?: string;
  height?: string;
}

export default function KakaoMap({ 
  address = '서울 강남구 언주로130길 23',
  markerTitle = '유동수 세무회계',
  height = '340px'
}: KakaoMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const KAKAO_JS_KEY = '4986d7910c9d15459bd98bc85eaffd70';
    
    const initMap = () => {
      if (!mapRef.current || !window.kakao?.maps) return;

      window.kakao.maps.load(() => {
        try {
          // 지오코더로 주소 → 좌표 변환
          const geocoder = new window.kakao.maps.services.Geocoder();
          
          geocoder.addressSearch(address, (result: any, status: any) => {
            if (status === window.kakao.maps.services.Status.OK) {
              const coords = new window.kakao.maps.LatLng(result[0].y, result[0].x);
              
              // 지도 생성
              const map = new window.kakao.maps.Map(mapRef.current, {
                center: coords,
                level: 3, // 확대 레벨 (숫자가 작을수록 확대)
              });

              // 마커 생성
              const marker = new window.kakao.maps.Marker({
                map: map,
                position: coords,
                title: markerTitle,
              });

              // 인포윈도우 생성
              const infowindow = new window.kakao.maps.InfoWindow({
                content: `<div style="padding:5px;font-size:12px;white-space:nowrap;">${markerTitle}</div>`
              });
              infowindow.open(map, marker);

              // 줌 컨트롤 추가
              const zoomControl = new window.kakao.maps.ZoomControl();
              map.addControl(zoomControl, window.kakao.maps.ControlPosition.RIGHT);

              setIsLoaded(true);
            } else {
              setError('주소를 찾을 수 없습니다.');
            }
          });
        } catch (e) {
          console.error('Map initialization error:', e);
          setError('지도를 불러올 수 없습니다.');
        }
      });
    };

    // 이미 스크립트가 로드되어 있는지 확인
    const existingScript = document.querySelector(`script[src*="dapi.kakao.com"]`);
    
    if (existingScript && window.kakao?.maps) {
      initMap();
      return;
    }

    // 스크립트 로드
    const script = document.createElement('script');
    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${KAKAO_JS_KEY}&autoload=false&libraries=services`;
    script.async = true;

    script.onload = () => {
      initMap();
    };

    script.onerror = () => {
      setError('지도 스크립트 로드 실패');
    };

    document.head.appendChild(script);
  }, [address, markerTitle]);

  if (error) {
    return (
      <div 
        className="w-full flex items-center justify-center bg-slate-100 rounded-lg"
        style={{ height }}
      >
        <p className="text-slate-500 text-sm">{error}</p>
      </div>
    );
  }

  return (
    <div className="relative w-full rounded-lg overflow-hidden" style={{ height }}>
      <div 
        ref={mapRef} 
        className="w-full h-full"
      />
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-slate-100">
          <div className="flex flex-col items-center gap-2">
            <div className="w-6 h-6 border-2 border-[#D4A857] border-t-transparent rounded-full animate-spin"></div>
            <p className="text-slate-400 text-sm">지도 로딩중...</p>
          </div>
        </div>
      )}
    </div>
  );
}
