'use client';

import { useEffect, useRef } from 'react';

declare global {
  interface Window {
    naver: any;
  }
}

interface NaverMapProps {
  clientId: string;
  latitude?: number;
  longitude?: number;
  markerTitle?: string;
}

export default function NaverMap({ 
  clientId, 
  latitude = 37.5173319,  // 서울 강남구 언주로130길 23 좌표
  longitude = 127.0410489,
  markerTitle = '유동수 세무회계' 
}: NaverMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);

  useEffect(() => {
    const createMap = () => {
      if (!mapRef.current || !window.naver || !window.naver.maps) return;

      const location = new window.naver.maps.LatLng(latitude, longitude);

      // 지도 생성
      mapInstanceRef.current = new window.naver.maps.Map(mapRef.current, {
        center: location,
        zoom: 17,
        zoomControl: true,
        zoomControlOptions: {
          position: window.naver.maps.Position.TOP_RIGHT,
        },
      });

      // 마커 생성
      new window.naver.maps.Marker({
        position: location,
        map: mapInstanceRef.current,
        title: markerTitle,
      });
    };

    // 네이버 지도 SDK 로드
    const loadNaverMapScript = () => {
      if (window.naver && window.naver.maps) {
        createMap();
        return;
      }

      const script = document.createElement('script');
      script.src = `https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${clientId}`;
      script.async = true;
      script.onload = () => {
        // SDK 로드 후 약간의 지연
        setTimeout(createMap, 100);
      };
      document.head.appendChild(script);
    };

    loadNaverMapScript();

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.destroy();
      }
    };
  }, [clientId, latitude, longitude, markerTitle]);

  return (
    <div 
      ref={mapRef} 
      className="w-full h-full rounded-lg"
      style={{ minHeight: '256px' }}
    />
  );
}
