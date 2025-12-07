'use client';

import { useEffect, useRef, useState } from 'react';

declare global {
  interface Window {
    naver: any;
  }
}

interface NaverMapProps {
  clientId: string;
  latitude: number;
  longitude: number;
  markerTitle?: string;
}

export default function NaverMap({ clientId, latitude, longitude, markerTitle = '유동수 세무회계' }: NaverMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // 이미 로드되어 있으면 바로 지도 생성
    if (window.naver && window.naver.maps) {
      createMap();
      return;
    }

    // 스크립트 로드
    const script = document.createElement('script');
    script.src = `https://oapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${clientId}`;
    script.async = true;
    
    script.onload = () => {
      // 약간의 딜레이 후 지도 생성 (API 초기화 대기)
      setTimeout(() => {
        if (window.naver && window.naver.maps) {
          createMap();
        } else {
          setError('네이버 지도 API 로드 실패');
        }
      }, 100);
    };
    
    script.onerror = () => {
      setError('네이버 지도 스크립트 로드 실패');
    };

    document.head.appendChild(script);

    return () => {
      // cleanup은 하지 않음 (다른 컴포넌트에서 사용할 수 있으므로)
    };
  }, [clientId]);

  const createMap = () => {
    if (!mapRef.current || !window.naver || !window.naver.maps) {
      setError('지도를 초기화할 수 없습니다');
      return;
    }

    try {
      const location = new window.naver.maps.LatLng(latitude, longitude);

      const map = new window.naver.maps.Map(mapRef.current, {
        center: location,
        zoom: 17,
        zoomControl: true,
        zoomControlOptions: {
          position: window.naver.maps.Position.TOP_RIGHT,
        },
      });

      new window.naver.maps.Marker({
        position: location,
        map: map,
        title: markerTitle,
      });

      setIsLoaded(true);
    } catch (e) {
      console.error('Map creation error:', e);
      setError('지도 생성 중 오류 발생');
    }
  };

  if (error) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-slate-100 rounded-lg">
        <p className="text-slate-500 text-sm">{error}</p>
      </div>
    );
  }

  return (
    <div className="relative w-full h-full">
      <div 
        ref={mapRef} 
        className="w-full h-full rounded-lg"
        style={{ minHeight: '256px' }}
      />
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-slate-100 rounded-lg">
          <p className="text-slate-400 text-sm">지도 로딩중...</p>
        </div>
      )}
    </div>
  );
}
