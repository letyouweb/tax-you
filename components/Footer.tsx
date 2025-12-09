import Link from 'next/link';

const Footer = () => (
  <footer className="bg-[#050B16] text-center py-16 border-t border-white/5 text-slate-400">
    <div className="container mx-auto px-6">
      {/* 로고 영역 */}
      <div className="mb-8">
        <Link href="/" className="text-white font-serif text-xl tracking-[0.2em] font-bold hover:text-[#D4A857] transition-colors">
          유동수 세무회계
        </Link>
      </div>

      {/* 정보 영역: 가독성을 위해 줄바꿈 및 간격 조정 */}
      <div className="space-y-2 text-sm md:text-base font-light tracking-wide leading-relaxed text-slate-400/80">
        <p>서울 강남구 언주로130길 23 평해빌딩 201호</p>
        <p>
          대표세무사: 유동수 <span className="mx-2 opacity-30">|</span> 사업자등록번호: 714-17-00577
        </p>
        <p className="mt-2">
          Tel: <a href="tel:025180130" className="text-slate-300 hover:text-[#D4A857] transition-colors font-medium">02-518-0130</a>
          <span className="mx-3 opacity-30">|</span>
          Fax: 02-518-0137
          <span className="mx-3 opacity-30">|</span>
          Email: <a href="mailto:rdscta@daum.net" className="text-slate-300 hover:text-[#D4A857] transition-colors font-medium">rdscta@daum.net</a>
        </p>
      </div>

      {/* 카피라이트: 간격(margin-top)을 넓혀서 분리감 부여 */}
      <p className="text-slate-600 text-[11px] mt-10 tracking-wider">
        Copyright © 2025 YOO DONG SU TAX & ACCOUNTING. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;