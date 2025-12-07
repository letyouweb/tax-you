import type { Metadata } from "next";
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
