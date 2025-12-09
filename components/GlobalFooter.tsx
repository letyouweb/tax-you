'use client';

import { usePathname } from 'next/navigation';
import Footer from './Footer';

export default function GlobalFooter() {
  const pathname = usePathname();

  // 만약 현재 주소가 메인('/')이라면 아무것도 보여주지 않음 (null)
  if (pathname === '/') {
    return null;
  }

  // 그 외의 페이지라면 원래 Footer를 보여줌
  return <Footer />;
}