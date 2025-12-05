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
          className="md:hidden z-50 transition-colors"
          style={{ color: isTransparent ? '#FFFFFF' : '#050B16' }}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="absolute top-0 left-0 w-full h-screen bg-[#050B16] flex flex-col items-center justify-center space-y-6 md:hidden z-40">
          <Link 
            href="/" 
            className="text-xl text-white font-serif hover:text-[#D4A857] transition-colors" 
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </Link>
          
          <Link 
            href="/about" 
            className="text-xl text-white font-serif hover:text-[#D4A857] transition-colors" 
            onClick={() => setIsMobileMenuOpen(false)}
          >
            회사소개
          </Link>
          
          <Link 
            href="/insight" 
            className="text-xl text-white font-serif hover:text-[#D4A857] transition-colors" 
            onClick={() => setIsMobileMenuOpen(false)}
          >
            인사이트
          </Link>
          
          {/* 전문분야 - 모바일 서브메뉴 */}
          <div className="flex flex-col items-center">
            <button
              onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
              className="text-xl text-white font-serif hover:text-[#D4A857] transition-colors flex items-center gap-2"
            >
              전문분야
              <ChevronDown size={18} className={`transition-transform ${isMobileServicesOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {isMobileServicesOpen && (
              <div className="mt-3 flex flex-col items-center space-y-3 bg-white/10 rounded-lg px-8 py-4">
                {servicesSubMenu.map((sub) => (
                  <Link
                    key={sub.name}
                    href={sub.path}
                    className="text-base text-slate-300 hover:text-[#D4A857] transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {sub.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
          
          <Link 
            href="/career" 
            className="text-xl text-white font-serif hover:text-[#D4A857] transition-colors" 
            onClick={() => setIsMobileMenuOpen(false)}
          >
            주요경력
          </Link>
          
          <Link 
            href="/location" 
            className="text-xl text-white font-serif hover:text-[#D4A857] transition-colors" 
            onClick={() => setIsMobileMenuOpen(false)}
          >
            오시는길
          </Link>
          
          <Link 
            href="/consult" 
            className="text-xl text-[#D4A857] font-serif hover:text-white transition-colors border border-[#D4A857] px-6 py-2 rounded mt-4" 
            onClick={() => setIsMobileMenuOpen(false)}
          >
            상담문의
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
