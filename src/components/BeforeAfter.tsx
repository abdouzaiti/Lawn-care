/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef, useEffect } from "react";
import { Sparkles, Sliders, ArrowLeftRight, Leaf } from "lucide-react";
import { motion } from "motion/react";
// @ts-expect-error - PNG image import typing
import regeneratedImage from "../assets/images/regenerated_image_1781537394866.png";

export default function BeforeAfter() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [containerWidth, setContainerWidth] = useState(800);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const position = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(position);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
      window.addEventListener("touchmove", handleTouchMove);
      window.addEventListener("touchend", handleMouseUp);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, [isDragging]);

  useEffect(() => {
    if (!containerRef.current) return;
    const handleResize = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.getBoundingClientRect().width || containerRef.current.offsetWidth);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    handleMove(e.clientX);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    handleMove(e.touches[0].clientX);
  };

  return (
    <section id="before-after" className="py-24 bg-gray-50/55 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <span className="text-xs font-bold tracking-widest text-[#76a827] uppercase">
            THE TRANSFORMATION
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-[40px] font-extrabold text-gray-900 tracking-tight leading-tight">
            See the Before & After
          </h2>
          <p className="text-sm md:text-base text-gray-500 font-light max-w-xl mx-auto leading-relaxed">
            Drag the button to see the incredible transformation our team achieves. Perfect lines, green grass, and majestic aesthetics.
          </p>
        </div>

        {/* Interactive Dragging Slider Container - Centered */}
        <div className="flex justify-center">
          <div
            ref={containerRef}
            onMouseDown={handleMouseDown}
            onTouchStart={handleTouchStart}
            className="relative w-full max-w-[800px] aspect-[16/10] sm:aspect-[16/9] rounded-3xl overflow-hidden cursor-ew-resize select-none border border-gray-150 shadow-2xl bg-slate-200"
            id="slider-container"
          >
            {/* After Image (Background/Underlay) */}
            <div className="absolute inset-0">
              <img
                src={regeneratedImage}
                alt="After the magnificent elite gardening transformation"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute bottom-5 right-5 bg-[#76a827] border border-white/20 text-white text-[11px] uppercase font-bold tracking-widest px-4 py-2 rounded-full z-10 shadow-lg">
                AFTER
              </div>
            </div>

            {/* Before Image (Overlay with absolute sliding width) */}
            <div
              className="absolute inset-y-0 left-0 overflow-hidden"
              style={{ width: `${sliderPosition}%` }}
            >
              {/* Force matching dimensions of grandparent to prevent squishing */}
              <div 
                className="absolute inset-y-0 left-0 h-full"
                style={{ width: `${containerWidth}px` }}
              >
                <img
                  src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1200&auto=format&fit=crop"
                  alt="Before: raw field landscaping grounds"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center filter brightness-[90%]"
                />
                <div className="absolute bottom-5 left-5 bg-gray-900 border border-white/10 text-white text-[11px] uppercase font-bold tracking-widest px-4 py-2 rounded-full z-10 shadow-lg">
                  BEFORE
                </div>
              </div>
            </div>

            {/* Dragging Line & Handle Indicator */}
            <div
              className="absolute inset-y-0 w-1 bg-white cursor-ew-resize flex items-center justify-center pointer-events-none group-hover:scale-y-105 duration-300"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="w-12 h-12 rounded-full bg-white border border-gray-200 shadow-2xl flex items-center justify-center p-2.5 text-gray-800 -translate-x-[23px] pointer-events-none">
                <ArrowLeftRight className="w-5 h-5 text-gray-700" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
