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
  
  const pathname = usePathname();
  const isMainPage = pathname === '/';

  // ⭐️ [중요] 어두운 배경을 가진 섹션 번호 설정 (스크린샷 분석 결과 반영)
  // 0: 메인(Hero)
  // 2: 서비스 소개 (Dark Navy)
  // 4: 오시는 길 (배경 이미지)
  // 5: 하단 상담 문의 (Dark Navy)
  const DARK_BG_SECTIONS = [0, 2, 4, 5]; 

  useEffect(() => {
    const handleScroll = () => {
      // 1. PC 화면: 스냅 컨테이너 기준
      const snapContainer = document.querySelector('.snap-container');
      
      if (snapContainer && isMainPage && window.innerWidth >= 1024) {
        // 현재 스크롤 위치를 화면 높이로 나누어 몇 번째 섹션인지 계산 (반올림)
        // 예: 높이가 1000일 때 스크롤이 2000이면 2번째 섹션
        const index = Math.round(snapContainer.scrollTop / window.innerHeight);
        setCurrentSectionIndex(index);
      } else {
        // 2. 모바일/일반 화면: 스크롤이 최상단(0)일 때만 투명하게 처리하기 위해 index 0, 그 외엔 1(흰 배경)로 취급
        // 단, 모바일에서도 특정 위치를 감지하려면 복잡해지므로, 보통 모바일은 최상단만 투명하게 하거나 유지합니다.
        // 여기서는 "스크롤 내리면 무조건 흰색"인 기존 관습을 따르되, PC 스냅 스크롤에 최적화합니다.
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
  // PC 스냅 모드일 때: 설정한 어두운 섹션 목록에 포함되는가?
  // 일반 모드일 때: 스크롤이 최상단(0)인가?
  const isDarkSection = isMainPage && (
     (window.innerWidth >= 1024 && DARK_BG_SECTIONS.includes(currentSectionIndex)) || 
     (window.innerWidth < 1024 && currentSectionIndex === 0)
  );

  // 텍스트 색상 결정 로직
  // 어두운 섹션(isDarkSection)이면서 모바일 메뉴가 닫혀있으면 -> 흰색 글씨
  // 그 외(밝은 섹션이거나 모바일 메뉴 열림) -> 검정 글씨
  const shouldUseWhiteText = isDarkSection && !isMobileMenuOpen;

  const textColor = shouldUseWhiteText ? '#FFFFFF' : '#050B16';
  const menuTextColor = shouldUseWhiteText ? '#e2e8f0' : '#334155';
  
  // 배경 클래스: 어두운 섹션이면 투명, 아니면 흰색
  const navBackgroundClass = (isDarkSection && !isMobileMenuOpen)
    ? 'bg-transparent py-6 border-transparent' 
    : 'bg-white/95 backdrop-blur-md shadow-lg border-b border-slate-100 py-4 scrolled-header';

  // 햄버거 버튼 색상
  const hamburgerColor = isMobileMenuOpen ? '#050B16' : textColor; // 모바일 메뉴 열리면 검정(배경 흰색 가정 시)

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
           {/* 로고 위치 확보용 투명 박스 (닫기 버튼은 위쪽 Navbar의 X가 담당) */}
           <div className="h-10"></div>
        </div>

        {/* 모바일 메뉴 컨텐츠 (검정 글씨 테마) */}
        <div className="flex flex-col items-center justify-center min-h-screen px-6 py-24 space-y-8">
           <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl text-[#050B16] hover:text-[#D4A857] font-medium">Home</Link>
           <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl text-[#050B16] hover:text-[#D4A857] font-medium">대표 세무사</Link>
           <Link href="/insight" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl text-[#050B16] hover:text-[#D4A857] font-medium">인사이트</Link>
           
           {/* 모바일 전문분야 토글 */}
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