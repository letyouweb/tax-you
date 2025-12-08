import PageHeader from '@/components/PageHeader';
import KakaoMap from '@/components/KakaoMap';
import { MapPin, Clock, Phone, Mail, Train, ExternalLink } from 'lucide-react';

export default function Location() {
  const naverMapUrl = "https://map.naver.com/p/search/%EC%84%9C%EC%9A%B8%20%EA%B0%95%EB%82%A8%EA%B5%AC%20%EC%96%B8%EC%A3%BC%EB%A1%9C130%EA%B8%B8%2023";
  const kakaoMapUrl = "https://map.kakao.com/link/search/서울 강남구 언주로130길 23";

  return (
    <div className="bg-white min-h-screen">
      <PageHeader title="오시는 길" subTitle="방문해 주시면 친절하고 상세하게 안내해 드리겠습니다." />
      
      {/* 상단 섹션: 정보 + 건물 사진 (연한 회색 배경) */}
      <section className="bg-[#F5F5F7]">
        <div className="container mx-auto px-6 py-16 md:py-20">
          <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-start">
            
            {/* 왼쪽: 텍스트 정보 */}
            <div className="space-y-8">
              <div>
                <h3 className="font-bold text-2xl md:text-3xl mb-6 text-slate-900">
                  유동수 세무회계
                </h3>
                
                <ul className="space-y-5 text-slate-700">
                  {/* 주소 */}
                  <li className="flex gap-4 items-start">
                    <MapPin className="text-[#D4A857] flex-shrink-0 w-[22px] h-[22px] mt-0.5" />
                    <span className="leading-relaxed">
                      <strong className="text-slate-900">주소</strong><br/>
                      <span className="text-slate-600">
                        서울 강남구 언주로130길 23, 평해빌딩 201호
                      </span>
                    </span>
                  </li>

                  {/* 지하철 안내 */}
                  <li className="flex gap-4 items-start">
                    <Train className="text-[#D4A857] flex-shrink-0 w-[22px] h-[22px] mt-0.5" />
                    <span className="leading-relaxed">
                      <strong className="text-slate-900">지하철 이용 안내</strong><br/>
                      <span className="text-slate-600">7호선 강남구청역 2번 출구 → 도보 6분</span>
                    </span>
                  </li>

                  {/* 전화/팩스 */}
                  <li className="flex gap-4 items-start">
                    <a href="tel:025180130" className="flex-shrink-0 cursor-pointer hover:scale-110 transition-transform">
                      <Phone className="text-[#D4A857] w-[22px] h-[22px] mt-0.5" />
                    </a>
                    <span className="leading-relaxed">
                      <strong className="text-slate-900">상담 문의</strong><br/>
                      <span className="text-slate-600">
                        Tel. <a href="tel:025180130" className="hover:text-[#D4A857] transition-colors font-medium">02-518-0130</a><br/>
                        Fax. 02-518-0137
                      </span>
                    </span>
                  </li>

                  {/* 이메일 */}
                  <li className="flex gap-4 items-start">
                    <Mail className="text-[#D4A857] flex-shrink-0 w-[22px] h-[22px] mt-0.5" />
                    <span className="leading-relaxed">
                      <strong className="text-slate-900">이메일</strong><br/>
                      <a href="mailto:rdscta@daum.net" className="text-slate-600 hover:text-[#D4A857] transition-colors">
                        rdscta@daum.net
                      </a>
                    </span>
                  </li>

                  {/* 운영시간 */}
                  <li className="flex gap-4 items-start">
                    <Clock className="text-[#D4A857] flex-shrink-0 w-[22px] h-[22px] mt-0.5" />
                    <span className="leading-relaxed">
                      <strong className="text-slate-900">상담 가능 시간</strong><br/>
                      <span className="text-slate-600">
                        평일 09:30 ~ 17:30<br/>
                        점심시간 12:30 ~ 13:30 / 주말·공휴일 휴무
                      </span>
                    </span>
                  </li>
                </ul>
              </div>

              {/* 길찾기 버튼 2개 - 네이버(그린) / 카카오(옐로우) */}
              <div className="flex flex-wrap gap-3 pt-4">
                <a 
                  href={naverMapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#03C75A] hover:bg-[#02b350] text-white font-semibold rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
                >
                  <span>네이버 지도 열기</span>
                  <ExternalLink size={16} />
                </a>
                <a 
                  href={kakaoMapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#FEE500] hover:bg-[#f5dc00] text-[#3C1E1E] font-semibold rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
                >
                  <span>카카오맵 열기</span>
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>

            {/* 오른쪽: 건물 사진 */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl bg-white">
                <img 
                  src="/images/유동수세무회계_오시는길.jpg" 
                  alt="평해빌딩 전경" 
                  className="w-full h-[320px] md:h-[400px] lg:h-[480px] object-cover"
                />
              </div>
              <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-sm text-white text-sm px-4 py-2 rounded-lg">
                평해빌딩 201호
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 하단 섹션: 전체 너비 와이드 지도 */}
      <section className="w-full">
        <KakaoMap 
          address="서울 강남구 언주로130길 23"
          markerTitle="유동수 세무회계"
          useClassHeight={true}
          className="h-[350px] md:h-[450px] lg:h-[500px]"
        />
      </section>
    </div>
  );
}
