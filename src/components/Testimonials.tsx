/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { motion } from "motion/react";

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState([
    {
      id: "test-1",
      name: "Sarah M.",
      quote: "LUSH transformed our backyard into a beautiful oasis. Professional, reliable, and highly recommended!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=150&auto=format&fit=crop",
    },
    {
      id: "test-2",
      name: "James T.",
      quote: "The team is amazing! Our lawn has never looked better. Great service and fair pricing.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop",
    },
    {
      id: "test-3",
      name: "Emily R.",
      quote: "From design to maintenance, they handle everything perfectly. Our property stands out now!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop",
    },
  ]);

  return (
    <section id="testimonials" className="py-24 bg-white relative overflow-hidden">
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0%); }
        }
        .animate-marquee {
          animation: marquee 35s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header containing text left, arrows right */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
          <div className="space-y-3 text-left max-w-2xl">
            <span className="text-xs font-bold tracking-widest text-[#76a827] uppercase">
              WHAT OUR CLIENTS SAY
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
              Trusted By Hundreds <br />
              Of Happy Customers
            </h2>
          </div>

          {/* Dummy navigation chevrons for mockup similarity */}
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-full border border-gray-150 flex items-center justify-center text-gray-700 hover:bg-gray-50 transition-colors cursor-pointer">
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </div>
            <div className="w-11 h-11 rounded-full bg-[#76a827] flex items-center justify-center text-white hover:bg-[#65931f] transition-all cursor-pointer shadow-md">
              <ChevronRight className="w-5 h-5 text-white" />
            </div>
          </div>
        </div>

        {/* Testimonials Marquee */}
        <div className="flex gap-8 py-4 animate-marquee w-max">
          {[...testimonials, ...testimonials, ...testimonials, ...testimonials].map((test, index) => (
            <div
              key={`${test.id}-${index}`}
              id={index < testimonials.length ? test.id : undefined}
              className="w-[350px] sm:w-[420px] shrink-0 bg-white p-8 rounded-3xl border border-gray-100 hover:border-[#76a827]/30 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-6">
                {/* Contributor Profile on row: photo on left, details on right */}
                <div className="flex items-center gap-4">
                  <img
                    src={test.image}
                    alt={test.name}
                    referrerPolicy="no-referrer"
                    className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-md"
                  />
                  <div>
                    <h4 className="text-base font-bold text-gray-900 tracking-wide leading-none">
                      {test.name}
                    </h4>
                    {/* 5-Stars directly under name */}
                    <div className="flex gap-0.5 mt-1.5">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-[#76a827] text-[#76a827]"
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Quote Content */}
                <p className="text-sm font-medium text-gray-650 italic leading-relaxed whitespace-normal">
                  "{test.quote}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
