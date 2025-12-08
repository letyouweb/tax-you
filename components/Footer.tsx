import Link from 'next/link';

const Footer = () => (
  <footer className="bg-[#050B16] text-center py-10 border-t border-white/5 text-slate-500">
    <div className="container mx-auto px-6">
      <div className="mb-4">
        <Link href="/" className="text-white font-serif text-lg tracking-widest font-bold">
          유동수 세무회계
        </Link>
      </div>
      <p className="text-xs tracking-wide leading-relaxed">
        서울 강남구 언주로130길 23 평해빌딩 201호 <br className="md:hidden"/> | 대표세무사: 유동수 | 사업자등록번호: 714-17-00577 <br/>
        Tel: <a href="tel:025180130" className="hover:text-[#D4A857] transition-colors">02-518-0130</a> | Fax: 02-518-0137 | Email: <a href="mailto:rdscta@daum.net" className="hover:text-[#D4A857] transition-colors">rdscta@daum.net</a>
      </p>
      <p className="text-[#D4A857]/50 text-[10px] mt-4">
        Copyright © 2025 YOO DONG SU TAX & ACCOUNTING. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
