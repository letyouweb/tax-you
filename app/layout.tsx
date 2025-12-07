import type { Metadata } from "next";
import Script from "next/script"; // [추가됨] 스크립트 컴포넌트 임포트
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "유동수 세무회계 | 국세청 25년 경력 세무사",
  description: "세무조사, 양도·상속·증여, 조세불복 전문. 국세청 25년 경력의 유동수 세무사가 직접 상담합니다.",
  keywords: "세무사, 세무조사, 상속세, 증여세, 양도소득세, 조세불복, 강남세무사",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        {/* [추가됨] 네이버 지도 스크립트 로드 */}
        {/* strategy="beforeInteractive": 페이지 상호작용 전에 스크립트를 먼저 불러와 지도가 깨지는 것을 방지합니다. */}
        <Script
          strategy="beforeInteractive"
          src={`https://oapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_NAVER_MAP_CLIENT_ID}`}
        />

        <div className="flex flex-col min-h-screen">
          <Navbar />
          <div className="flex-grow">
            {children}
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}