'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  
  // 현재 보고 있는 섹션 번호 (0부터 시작)
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  
  // ✅ [수정 1] 화면 너비 상태 추가 (초기값은 false 또는 0)
  const [isDesktop, setIsDesktop] = useState(false);
  
  const pathname = usePathname();
  const isMainPage = pathname === '/';

  // ⭐️ [중요] 어두운 배경을 가진 섹션 번호 설정
  // 0: 메인(Hero), 2: 서비스 소개, 4: 오시는 길, 5: 하단 상담 문의
  const DARK_BG_SECTIONS = [0, 2, 4, 5]; 

  useEffect(() => {
    const handleScroll = () => {
      // ✅ [수정 2] window.innerWidth 체크를 여기서 수행하여 state에 저장
      const currentWidth = window.innerWidth;
      setIsDesktop(currentWidth >= 1024);

      // 1. PC 화면: 스냅 컨테이너 기준
      const snapContainer = document.querySelector('.snap-container');
      
      if (snapContainer && isMainPage && currentWidth >= 1024) {
        const index = Math.round(snapContainer.scrollTop / window.innerHeight);
        setCurrentSectionIndex(index);
      } else {
        // 2. 모바일/일반 화면
        setCurrentSectionIndex(window.scrollY < 50 ? 0 : 1);
      }
    };

    // 이벤트 리스너 등록
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll); // 화면 크기 변경 시 재계산
    
    const snapContainer = document.querySelector('.snap-container');
    if (snapContainer) {
      snapContainer.addEventListener('scroll', handleScroll);
    }

    // 초기 상태 확인
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      if (snapContainer) {
        snapContainer.removeEventListener('scroll', handleScroll);
      }
    };
  }, [pathname, isMainPage]);

  // 모바일 메뉴 스크롤 방지
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMobileMenuOpen]);

  // 👉 현재 상태 계산
  // ✅ [수정 3] window.innerWidth 대신 state 변수(isDesktop) 사용
  const isDarkSection = isMainPage && (
     (isDesktop && DARK_BG_SECTIONS.includes(currentSectionIndex)) || 
     (!isDesktop && currentSectionIndex === 0)
  );

  // 텍스트 색상 결정 로직
  const shouldUseWhiteText = isDarkSection && !isMobileMenuOpen;

  const textColor = shouldUseWhiteText ? '#FFFFFF' : '#050B16';
  const menuTextColor = shouldUseWhiteText ? '#e2e8f0' : '#334155';
  
  // 배경 클래스
  const navBackgroundClass = (isDarkSection && !isMobileMenuOpen)
    ? 'bg-transparent py-6 border-transparent' 
    : 'bg-white/95 backdrop-blur-md shadow-lg border-b border-slate-100 py-4 scrolled-header';

  // 햄버거 버튼 색상
  const hamburgerColor = isMobileMenuOpen ? '#050B16' : textColor;

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
    <nav className={`fixed w-full z-50 transition-all duration-500 ${navBackgroundClass}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* 로고 */}
        <Link 
          href="/" 
          className="font-serif text-xl md:text-2xl tracking-widest font-bold z-50 transition-colors duration-500 group"
          style={{ color: textColor }}
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
              <div 
                key={item.name}
                className="relative"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <Link 
                  href={item.path}
                  className="text-sm font-medium hover:text-[#D4A857] transition-colors duration-300 tracking-wide flex items-center gap-1"
                  style={{ color: menuTextColor }}
                >
                  {item.name}
                  <ChevronDown size={14} className={`transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
                </Link>
                {/* 드롭다운 */}
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
                style={{ color: menuTextColor }}
              >
                {item.name}
              </Link>
            )
          ))}
          
          <Link href="/consult">
            <button 
              className={`px-5 py-2 border rounded-sm transition-all duration-300 text-sm tracking-wide font-medium
                ${shouldUseWhiteText 
                  ? 'border-[#D4A857] text-[#D4A857] hover:bg-[#D4A857] hover:text-white' 
                  : 'border-[#050B16] text-[#050B16] hover:bg-[#050B16] hover:text-white'
                }
              `}
            >
              상담 문의
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden z-50 p-2 transition-colors duration-300 focus:outline-none"
          style={{ color: hamburgerColor }}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-white md:hidden z-40 transition-all duration-300 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        <div className="fixed top-0 left-0 right-0 px-6 py-6 flex justify-between items-center z-50">
           <div className="h-10"></div>
        </div>

        <div className="flex flex-col items-center justify-center min-h-screen px-6 py-24 space-y-8">
           <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl text-[#050B16] hover:text-[#D4A857] font-medium">Home</Link>
           <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl text-[#050B16] hover:text-[#D4A857] font-medium">대표 세무사</Link>
           <Link href="/insight" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl text-[#050B16] hover:text-[#D4A857] font-medium">인사이트</Link>
           
           <div className="flex flex-col items-center">
            <button onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)} className="text-2xl text-[#050B16] hover:text-[#D4A857] font-medium flex items-center gap-3">
              전문분야 <ChevronDown size={22} className={isMobileServicesOpen ? 'rotate-180' : ''} />
            </button>
            <div className={`mt-4 flex flex-col items-center space-y-4 overflow-hidden transition-all duration-300 ${isMobileServicesOpen ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'}`}>
              <div className="bg-slate-50 rounded-xl px-10 py-5 space-y-4 w-full text-center">
                 {servicesSubMenu.map(sub => (
                   <Link key={sub.name} href={sub.path} onClick={() => setIsMobileMenuOpen(false)} className="block text-lg text-slate-600 hover:text-[#D4A857]">{sub.name}</Link>
                 ))}
              </div>
            </div>
           </div>

           <Link href="/location" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl text-[#050B16] hover:text-[#D4A857] font-medium">오시는길</Link>
           <div className="pt-6">
             <Link href="/consult" onClick={() => setIsMobileMenuOpen(false)} className="inline-block text-xl text-white font-bold bg-[#050B16] px-10 py-4 rounded-full">상담문의</Link>
           </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;