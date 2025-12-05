'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isMain = pathname === '/';
  const navClass = isMain && !isScrolled && !isMobileMenuOpen
    ? 'bg-transparent py-6' 
    : 'bg-[#050B16]/95 backdrop-blur-md py-4 shadow-xl border-b border-white/5';

  const navItems = [
    { name: '회사소개', path: '/about' },
    { name: '인사이트', path: '/insight' },
    { name: '전문분야', path: '/services' },
    { name: '주요경력', path: '/career' },
    { name: '오시는길', path: '/location' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${navClass}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="text-white font-serif text-2xl tracking-widest font-bold z-50">
          유동수 세무회계
          <span className="block text-xs font-sans font-light tracking-[0.3em] text-[#D4A857] mt-1">TAX & ACCOUNTING</span>
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-10">
          {navItems.map((item) => (
            <Link 
              key={item.name} 
              href={item.path} 
              className={`text-sm font-light hover:text-[#D4A857] transition-colors tracking-wide ${pathname === item.path ? 'text-[#D4A857] font-medium' : 'text-slate-300'}`}
            >
              {item.name}
            </Link>
          ))}
          <Link href="/consult">
            <button className="px-6 py-2 border border-[#D4A857] text-[#D4A857] rounded-sm hover:bg-[#D4A857] hover:text-white transition-all text-sm tracking-wide">
              상담 문의
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white z-50" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="absolute top-0 left-0 w-full h-screen bg-[#050B16] flex flex-col items-center justify-center space-y-8 md:hidden z-40">
          {[
            { name: 'Home', path: '/' },
            ...navItems,
            { name: '상담문의', path: '/consult' },
          ].map((item) => (
            <Link 
              key={item.name} 
              href={item.path} 
              className="text-xl text-white font-serif hover:text-[#D4A857]" 
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
