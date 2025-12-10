'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const pathname = usePathname();

  // 1. 스크롤 감지 로직 (수정 없음, 그대로 유지)
  useEffect(() => {
    const checkScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    checkScroll();
    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  // 모바일 메뉴 열릴 때 스크롤 방지
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  // 메인 페이지 여부
  const isMainPage = pathname === '/';
  
  // 2. 투명 배경 조건 (논리 강화)
  // 메인 페이지이면서 + 스크롤이 최상단이고 + 모바일 메뉴가 닫혀있을 때만 투명
  const isTransparent = isMainPage && !isScrolled && !isMobileMenuOpen;

  // 3. 색상 설정 (가장 중요한 수정 부분)
  // 스크롤 되면 무조건 검정(#050B16), 투명 상태일 때만 흰색
  const logoColor = isTransparent ? '#FFFFFF' : '#050B16'; 
  const menuTextColor = isTransparent ? '#e2e8f0' : '#334155';
  
  // 햄버거 버튼 색상 (모바일 메뉴가 열려있으면 무조건 흰색, 닫혀있으면 배경에 따라 다름)
  const hamburgerColor = isMobileMenuOpen ? '#FFFFFF' : (isTransparent ? '#FFFFFF' : '#050B16');

  // 배경 클래스 (scrolled-header 클래스 추가하여 globals.css와 연동)
  const navContainerClass = `fixed w-full z-50 transition-all duration-300 ${
    isTransparent 
      ? 'bg-transparent py-6' 
      : 'bg-white/95 backdrop-blur-md shadow-lg border-b border-slate-100 py-4 scrolled-header'
  }`;

  // 전문분야 하위 메뉴 데이터
  const servicesSubMenu = [
    { name: '양도소득세', path: '/services/yangdo' },
    { name: '상속세', path: '/services/sangsok' },
    { name: '증여세', path: '/services/jeungyo' },
    { name: '조세불복', path: '/services/bulbok' },
  ];

  const navItems = [
    { name: '대표 세무사', path: '/about' },
    { name: '인사이트', path: '/insight' },
    { name: '전문분야', path: '/services', hasSubmenu: true },
    { name: '오시는길', path: '/location' },
  ];

  return (
    <nav className={navContainerClass}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* 로고 */}
        <Link 
          href="/" 
          className="font-serif text-xl md:text-2xl tracking-widest font-bold z-50 transition-colors duration-300 group"
          style={{ color: logoColor }}
        >
          유동수 세무회계
          {/* 서브 텍스트는 골드색 유지 */}
          <span className="block text-[10px] md:text-xs font-sans font-light tracking-[0.3em] text-[#D4A857] mt-1">
            TAX & ACCOUNTING
          </span>
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8 lg:space-x-10">
          {navItems.map((item) => (
            item.hasSubmenu ? (
              // 전문분야 드롭다운
              <div 
                key={item.name}
                className="relative"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <Link 
                  href={item.path}
                  className="text-sm font-medium hover:text-[#D4A857] transition-colors duration-300 tracking-wide flex items-center gap-1"
                  style={{ 
                    color: pathname.startsWith('/services') ? '#D4A857' : menuTextColor
                  }}
                >
                  {item.name}
                  <ChevronDown 
                    size={14} 
                    className={`transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} 
                  />
                </Link>
                
                {/* 드롭다운 메뉴 */}
                {isServicesOpen && (
                  <div className="absolute top-full left-0 pt-2">
                    <div className="bg-white rounded-lg shadow-xl border border-slate-100 py-2 min-w-[160px]">
                      {servicesSubMenu.map((sub) => (
                        <Link
                          key={sub.name}
                          href={sub.path}
                          className="block px-4 py-2.5 text-sm text-slate-700 hover:bg-slate-50 hover:text-[#D4A857] transition-colors"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link 
                key={item.name} 
                href={item.path}
                className="text-sm font-medium hover:text-[#D4A857] transition-colors duration-300 tracking-wide"
                style={{ 
                  color: pathname === item.path ? '#D4A857' : menuTextColor
                }}
              >
                {item.name}
              </Link>
            )
          ))}
          
          {/* 상담 문의 버튼 */}
          <Link href="/consult">
            <button 
              className={`px-5 py-2 border rounded-sm transition-all duration-300 text-sm tracking-wide font-medium
                ${isTransparent 
                  ? 'border-[#D4A857] text-[#D4A857] hover:bg-[#D4A857] hover:text-white' 
                  : 'border-[#050B16] text-[#050B16] hover:bg-[#050B16] hover:text-white'
                }
              `}
            >
              상담 문의
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button - 색상 동적 변경 적용 */}
        <button 
          className="md:hidden z-50 p-2 transition-colors duration-300 focus:outline-none"
          style={{ color: hamburgerColor }}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="메뉴 열기/닫기"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Full-Screen Overlay (기존 디자인 유지) */}
      <div 
        className={`fixed inset-0 bg-[#020617] md:hidden z-40 transition-all duration-300 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        {/* 상단 고정 헤더 영역 */}
        <div className="fixed top-0 left-0 right-0 px-6 py-6 flex justify-between items-center z-50">
          <Link 
            href="/" 
            className="font-serif text-xl tracking-widest font-bold text-white"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            유동수 세무회계
            <span className="block text-[10px] font-sans font-light tracking-[0.3em] text-[#D4A857] mt-1">
              TAX & ACCOUNTING
            </span>
          </Link>
          {/* 닫기 버튼 자리는 button 태그가 absolute가 아니므로 위쪽 button이 z-50으로 처리함 */}
        </div>

        {/* 메뉴 항목들 - 세로 중앙 정렬 */}
        <div className="flex flex-col items-center justify-center min-h-screen px-6 py-24 space-y-8">
          <Link 
            href="/" 
            className="text-2xl text-white font-medium hover:text-[#D4A857] transition-colors tracking-wide" 
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </Link>
          
          <Link 
            href="/about" 
            className="text-2xl text-white font-medium hover:text-[#D4A857] transition-colors tracking-wide" 
            onClick={() => setIsMobileMenuOpen(false)}
          >
            대표 세무사
          </Link>
          
          <Link 
            href="/insight" 
            className="text-2xl text-white font-medium hover:text-[#D4A857] transition-colors tracking-wide" 
            onClick={() => setIsMobileMenuOpen(false)}
          >
            인사이트
          </Link>
          
          {/* 전문분야 - 모바일 서브메뉴 */}
          <div className="flex flex-col items-center">
            <button
              onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
              className="text-2xl text-white font-medium hover:text-[#D4A857] transition-colors tracking-wide flex items-center gap-3"
            >
              전문분야
              <ChevronDown 
                size={22} 
                className={`transition-transform duration-200 ${isMobileServicesOpen ? 'rotate-180' : ''}`} 
              />
            </button>
            
            <div className={`mt-4 flex flex-col items-center space-y-4 overflow-hidden transition-all duration-300 ${
              isMobileServicesOpen ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'
            }`}>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl px-10 py-5 space-y-4">
                {servicesSubMenu.map((sub) => (
                  <Link
                    key={sub.name}
                    href={sub.path}
                    className="block text-lg text-slate-300 hover:text-[#D4A857] transition-colors text-center"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {sub.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          
          <Link 
            href="/location" 
            className="text-2xl text-white font-medium hover:text-[#D4A857] transition-colors tracking-wide" 
            onClick={() => setIsMobileMenuOpen(false)}
          >
            오시는길
          </Link>
          
          {/* 상담문의 CTA 버튼 */}
          <div className="pt-6">
            <Link 
              href="/consult" 
              className="inline-block text-xl text-[#020617] font-bold bg-gradient-to-r from-[#C5A059] via-[#E6C888] to-[#B88A00] px-10 py-4 rounded-full shadow-lg hover:brightness-105 transition-all" 
              onClick={() => setIsMobileMenuOpen(false)}
            >
              상담문의
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;