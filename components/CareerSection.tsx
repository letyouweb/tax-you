import React from "react";

export default function CareerSection() {
  return (
    <section className="bg-[#f5f7fb]">
      <div
        className="mx-auto max-w-4xl px-4 py-16 sm:py-20 lg:py-24 text-center"
        style={{ wordBreak: "keep-all" }}
      >
        {/* Eyebrow */}
        <p className="mb-2 text-xs font-semibold tracking-[0.22em] text-[#D4AF6A]">
          CAREER
        </p>

        {/* Sub-headline */}
        <p className="mb-4 text-sm text-slate-500 sm:text-base leading-[1.5]">
          세무조사 첫 대응부터 조세불복까지
        </p>

        {/* 메인 헤드라인 + 하얀 박스 강조 (222.PNG 스타일) */}
        <div className="relative inline-block">
          {/* 뒤쪽 박스 (하얀 배경 + 약간 아래로 그림자처럼) */}
          <div
            className="absolute inset-0 translate-y-2 rounded-xl bg-white/90"
            aria-hidden="true"
          />
          {/* 실제 텍스트 */}
          <h2 className="relative px-6 py-3 text-2xl font-extrabold leading-[1.4] text-slate-900 sm:text-3xl lg:text-5xl">
            <span className="text-slate-900">국세청 25년&nbsp;</span>
            <span className="text-[#5B9FD5]">경험으로 함께합니다</span>
          </h2>
        </div>
      </div>
    </section>
  );
}
