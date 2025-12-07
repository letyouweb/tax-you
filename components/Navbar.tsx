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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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

  const isMain = pathname === '/';
  const isTransparent = isMain && !isScrolled && !isMobileMenuOpen;

  // 전문분야 하위 메뉴
  const servicesSubMenu = [
    { name: '양도소득세', path: '/services/yangdo' },
    { name: '상속세', path: '/services/sangsok' },
    { name: '증여세', path: '/services/jeungyo' },
    { name: '조세불복', path: '/services/bulbok' },
  ];

  const navItems = [
    { name: '회사소개', path: '/about' },
    { name: '인사이트', path: '/insight' },
    { name: '전문분야', path: '/services', hasSubmenu: true },
    { name: '주요경력', path: '/career' },
    { name: '오시는길', path: '/location' },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-500 ${
        isTransparent 
          ? 'bg-transparent py-6' 
          : 'bg-white py-4 shadow-lg border-b border-slate-100'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* 로고 */}
        <Link 
          href="/" 
          className="font-serif text-xl md:text-2xl tracking-widest font-bold z-50"
          style={{ color: isTransparent ? '#FFFFFF' : '#050B16' }}
        >
          유동수 세무회계
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
                  style={{ 
                    color: pathname.startsWith('/services')
                      ? '#D4A857' 
                      : isTransparent ? '#cbd5e1' : '#050B16'
                  }}
                  className="text-sm font-light hover:!text-[#D4A857] transition-colors tracking-wide flex items-center gap-1"
                >
                  {item.name}
                  <ChevronDown size={14} className={`transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
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
                style={{ 
                  color: pathname === item.path 
                    ? '#D4A857' 
                    : isTransparent ? '#cbd5e1' : '#050B16'
                }}
                className="text-sm font-light hover:!text-[#D4A857] transition-colors tracking-wide"
              >
                {item.name}
              </Link>
            )
          ))}
          <Link href="/consult">
            <button className="px-5 py-2 border border-[#D4A857] text-[#D4A857] rounded-sm hover:bg-[#D4A857] hover:text-white transition-all text-sm tracking-wide">
              상담 문의
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden z-50 transition-colors p-2"
          style={{ color: isMobileMenuOpen ? '#FFFFFF' : (isTransparent ? '#FFFFFF' : '#050B16') }}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Full-Screen Overlay */}
      <div 
        className={`fixed inset-0 bg-[#020617] md:hidden z-40 transition-all duration-300 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
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
            회사소개
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
              <ChevronDown size={22} className={`transition-transform duration-200 ${isMobileServicesOpen ? 'rotate-180' : ''}`} />
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
            href="/career" 
            className="text-2xl text-white font-medium hover:text-[#D4A857] transition-colors tracking-wide" 
            onClick={() => setIsMobileMenuOpen(false)}
          >
            주요경력
          </Link>
          
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
