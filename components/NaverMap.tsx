'use client';

import { useEffect, useRef } from 'react';

declare global {
  interface Window {
    naver: any;
  }
}

interface NaverMapProps {
  clientId: string;
  address: string;
  markerTitle?: string;
}

export default function NaverMap({ clientId, address, markerTitle = '유동수 세무회계' }: NaverMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);

  useEffect(() => {
    const initMap = () => {
      if (!mapRef.current || !window.naver) return;

      // 네이버 지오코딩으로 주소를 좌표로 변환
      window.naver.maps.Service.geocode(
        { query: address },
        (status: any, response: any) => {
          if (status !== window.naver.maps.Service.Status.OK) {
            // 지오코딩 실패 시 기본 좌표 사용 (강남구청역 부근)
            const defaultLocation = new window.naver.maps.LatLng(37.5173, 127.0410);
            createMap(defaultLocation);
            return;
          }

          const result = response.v2.addresses[0];
          const location = new window.naver.maps.LatLng(
            parseFloat(result.y),
            parseFloat(result.x)
          );
          createMap(location);
        }
      );
    };

    const createMap = (location: any) => {
      if (!mapRef.current) return;

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
        animation: window.naver.maps.Animation.DROP,
      });
    };

    // 네이버 지도 SDK 로드
    const loadNaverMapScript = () => {
      if (window.naver && window.naver.maps) {
        initMap();
        return;
      }

      const script = document.createElement('script');
      script.src = `https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${clientId}&submodules=geocoder`;
      script.async = true;
      script.onload = () => {
        initMap();
      };
      document.head.appendChild(script);
    };

    loadNaverMapScript();

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.destroy();
      }
    };
  }, [clientId, address, markerTitle]);

  return (
    <div 
      ref={mapRef} 
      className="w-full h-full rounded-lg"
      style={{ minHeight: '256px' }}
    />
  );
}
