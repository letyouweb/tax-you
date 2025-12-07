'use client';

import { useEffect, useRef, useState } from 'react';

declare global {
  interface Window {
    naver: any;
  }
}

interface NaverMapProps {
  clientId?: string;
  latitude?: number;
  longitude?: number;
  markerTitle?: string;
  height?: string;
}

export default function NaverMap({ 
  clientId = 'awrp3jma17',
  latitude = 37.5173319, 
  longitude = 127.0410489,
  markerTitle = '유동수 세무회계',
  height = '340px'
}: NaverMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const mapInstance = useRef<any>(null);

  useEffect(() => {
    // 이미 스크립트가 로드되어 있는지 확인
    const existingScript = document.querySelector(`script[src*="oapi.map.naver.com"]`);
    
    const initMap = () => {
      if (!mapRef.current || !window.naver?.maps) return;

      try {
        const location = new window.naver.maps.LatLng(latitude, longitude);

        mapInstance.current = new window.naver.maps.Map(mapRef.current, {
          center: location,
          zoom: 17,
          zoomControl: true,
          zoomControlOptions: {
            position: window.naver.maps.Position.TOP_RIGHT,
          },
          scaleControl: false,
          logoControl: true,
          mapDataControl: false,
        });

        new window.naver.maps.Marker({
          position: location,
          map: mapInstance.current,
          title: markerTitle,
          animation: window.naver.maps.Animation.DROP,
        });

        setIsLoaded(true);
      } catch (e) {
        console.error('Map initialization error:', e);
        setError('지도를 불러올 수 없습니다.');
      }
    };

    if (existingScript && window.naver?.maps) {
      initMap();
      return;
    }

    // 스크립트 로드
    const script = document.createElement('script');
    script.src = `https://oapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${clientId}`;
    script.async = true;

    script.onload = () => {
      // API 초기화 대기
      const checkAndInit = () => {
        if (window.naver?.maps) {
          initMap();
        } else {
          setTimeout(checkAndInit, 100);
        }
      };
      checkAndInit();
    };

    script.onerror = () => {
      setError('지도 스크립트 로드 실패');
    };

    document.head.appendChild(script);

    return () => {
      if (mapInstance.current) {
        mapInstance.current = null;
      }
    };
  }, [clientId, latitude, longitude, markerTitle]);

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
