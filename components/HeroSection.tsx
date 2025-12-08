'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Phone } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative bg-[#020617] overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-20 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="space-y-8"
          >
            {/* Meta Text */}
            <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-[#D4AF6A]">
              <span>국세청 25년</span>
              <span className="text-[#D4AF6A]/40">·</span>
              <span>세무조사</span>
              <span className="text-[#D4AF6A]/40">·</span>
              <span>양도</span>
              <span className="text-[#D4AF6A]/40">·</span>
              <span>상속</span>
              <span className="text-[#D4AF6A]/40">·</span>
              <span>증여</span>
              <span className="text-[#D4AF6A]/40">·</span>
              <span>조세불복 전문</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1
                className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-[1.4]"
                style={{ wordBreak: 'keep-all' }}
              >
                복잡한 세무는
                <br />
                유동수 세무회계에 맡기시고,
              </h1>
              
              <p
                className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#D4AF6A] leading-[1.4]"
                style={{ wordBreak: 'keep-all' }}
              >
                대표님은
                <br className="sm:hidden" />
                {' '}사업에만 집중하세요.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              {/* Primary Button - Gold Gradient - 전화연결 */}
              <a href="tel:025180130">
                <button
                  className="group relative px-8 py-4 rounded-full font-bold text-[#111827] 
                            bg-gradient-to-r from-[#C5A059] via-[#E6C888] to-[#B88A00] 
                            shadow-lg hover:brightness-105 transition-all transform hover:-translate-y-0.5
                            min-h-[52px] w-full sm:w-auto"
                >
                  <span className="flex items-center justify-center gap-2">
                    세무조사 긴급 상담
                    <Phone className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  </span>
                </button>
              </a>

              {/* Secondary Button - Gold Border Outline */}
              <button
                className="group px-8 py-4 bg-transparent text-[#D4AF6A] font-semibold rounded-full
                          border-2 border-[#D4AF6A]/60 hover:border-[#D4AF6A] hover:bg-[#D4AF6A]/10
                          transition-all duration-200 min-h-[52px]"
              >
                <span className="flex items-center justify-center gap-2">
                  <Calendar className="w-5 h-5" />
                  1:1 상담 예약
                </span>
              </button>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
            className="relative lg:h-[600px] h-[500px]"
          >
            <div className="relative h-full w-full overflow-hidden rounded-2xl">
              {/* Gradient Overlay */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#020617]/70 via-transparent to-transparent z-10" />
              
              {/* Image */}
              <img
                src="/images/Main.jpg"
                alt="유동수 세무사 사진"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
