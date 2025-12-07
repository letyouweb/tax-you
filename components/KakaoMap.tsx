'use client';

import { useEffect, useState } from 'react';

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
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // SSR 체크
    if (typeof window === 'undefined') return;

    const KAKAO_JS_KEY = '4986d7910c9d15459bd98bc85eaffd70';
    const container = document.getElementById('kakao-map');
    
    // 이미 로드된 경우
    if (window.kakao?.maps) {
      initializeMap();
      return;
    }

    // 이미 스크립트가 추가된 경우
    const existingScript = document.querySelector('script[src*="dapi.kakao.com"]');
    if (existingScript) {
      existingScript.addEventListener('load', initializeMap);
      return;
    }

    // 스크립트 새로 로드
    const script = document.createElement('script');
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${KAKAO_JS_KEY}&autoload=false&libraries=services`;
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      console.log('Kakao script loaded successfully');
      initializeMap();
    };

    script.onerror = (e) => {
      console.error('Kakao script load error:', e);
      setError('지도 스크립트 로드 실패');
    };

    function initializeMap() {
      if (!window.kakao?.maps) {
        console.error('kakao.maps not available');
        setError('카카오맵 SDK 로드 실패');
        return;
      }

      window.kakao.maps.load(() => {
        const mapContainer = document.getElementById('kakao-map');
        if (!mapContainer) {
          console.error('Map container not found');
          return;
        }

        const geocoder = new window.kakao.maps.services.Geocoder();
        
        geocoder.addressSearch(address, (result: any, status: any) => {
          if (status === window.kakao.maps.services.Status.OK) {
            const coords = new window.kakao.maps.LatLng(result[0].y, result[0].x);
            
            const options = {
              center: coords,
              level: 3,
            };

            const map = new window.kakao.maps.Map(mapContainer, options);

            const marker = new window.kakao.maps.Marker({
              map: map,
              position: coords,
              title: markerTitle,
            });

            const infowindow = new window.kakao.maps.InfoWindow({
              content: `<div style="padding:5px;font-size:12px;white-space:nowrap;">${markerTitle}</div>`
            });
            infowindow.open(map, marker);

            const zoomControl = new window.kakao.maps.ZoomControl();
            map.addControl(zoomControl, window.kakao.maps.ControlPosition.RIGHT);

            setIsLoaded(true);
            console.log('Kakao map initialized successfully');
          } else {
            console.error('Geocoder failed:', status);
            setError('주소를 찾을 수 없습니다.');
          }
        });
      });
    }

    return () => {
      // cleanup
    };
  }, [address, markerTitle]);

  if (error) {
    return (
      <div 
        id="kakao-map"
        style={{ width: '100%', height, background: '#f1f5f9' }}
        className="flex items-center justify-center rounded-lg"
      >
        <p className="text-slate-500 text-sm">{error}</p>
      </div>
    );
  }

  return (
    <div className="relative w-full rounded-lg overflow-hidden" style={{ height }}>
      {/* 지도 컨테이너 - 명시적 높이 */}
      <div 
        id="kakao-map"
        style={{ width: '100%', height: '100%', minHeight: height, background: '#eee' }}
      />
      {!isLoaded && (
        <div 
          className="absolute inset-0 flex items-center justify-center bg-slate-100"
          style={{ height }}
        >
          <div className="flex flex-col items-center gap-2">
            <div className="w-6 h-6 border-2 border-[#D4A857] border-t-transparent rounded-full animate-spin"></div>
            <p className="text-slate-400 text-sm">지도 로딩중...</p>
          </div>
        </div>
      )}
    </div>
  );
}
