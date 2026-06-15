/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";

interface HeroProps {
  onOpenEstimate: () => void;
}

export default function Hero({ onOpenEstimate }: HeroProps) {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-start overflow-hidden bg-[#07170d]"
    >
      {/* Immersive background image with high-performance eager loading */}
      <div className="absolute inset-0 z-0">
        <img
          src="/back.png"
          alt="Greenscape Perfect Luxe Lawns and Gardens"
          loading="eager"
          fetchPriority="high"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center scale-102 animate-[subtle-zoom_25s_ease-in-out_infinite_alternate]"
        />
        {/* Subtle top dark overlay for navbar readability and light bottom overlay to ground the typography, matching the screenshot exactly */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/5 to-transparent h-1/3" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#07170d66] via-transparent to-transparent" />
      </div>

      <style>{`
        @keyframes subtle-zoom {
          from { transform: scale(1); }
          to { transform: scale(1.04); }
        }
        @keyframes scroll-down {
          0% { transform: translateY(-100%); }
          80% { transform: translateY(150%); }
          100% { transform: translateY(150%); }
        }
      `}</style>

      {/* Main Content Container */}
      <div className="relative z-10 w-full px-6 sm:px-10 lg:px-16 pt-32 pb-16 sm:pb-20 lg:pb-24 min-h-screen flex flex-col justify-end">
        <div className="max-w-5xl text-left space-y-6 md:space-y-8 ml-4 sm:ml-10 md:ml-16 lg:ml-24 translate-y-4 sm:translate-y-6">
          {/* Captivating Heading */}
          <div className="space-y-2">
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[102px] font-serif font-normal tracking-tight leading-[1.05] text-white"
            >
              Perfect Lawns.{" "}
              <span className="text-[#acd355] font-serif italic font-medium">Beautiful Living.</span>
            </motion.h1>
          </div>

          {/* CTA Link below text */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="pt-4"
          >
            <button
              onClick={onOpenEstimate}
              id="hero-est-btn"
              className="group inline-flex items-center gap-3 text-white hover:text-[#acd355] transition-colors cursor-pointer text-xs sm:text-sm font-bold tracking-[0.2em] uppercase"
            >
              <span>Get Your Free Estimate</span>
              <span className="inline-flex items-center transition-transform duration-300 group-hover:translate-x-2 text-white/80 group-hover:text-[#acd355] text-sm font-semibold">
                ──&gt;
              </span>
            </button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator in bottom center */}
      <motion.button
        onClick={() => {
          const el = document.getElementById("services");
          if (el) {
            const offset = 80;
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = el.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            window.scrollTo({
              top: elementPosition - offset,
              behavior: "smooth"
            });
          }
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2.5 text-white/40 hover:text-white transition-all cursor-pointer group z-20"
      >
        <div className="relative w-[1px] h-10 bg-white/20 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-[#acd355] animate-[scroll-down_2s_infinite]" />
        </div>
        <span className="text-[9px] font-sans tracking-[0.4em] font-bold uppercase text-white/60 group-hover:text-white transition-colors leading-none">
          Scroll
        </span>
      </motion.button>
    </section>
  );
}
