/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Users, Leaf, ShieldAlert, Award, Grid, HelpCircle } from "lucide-react";
import { motion } from "motion/react";

export default function WhyChooseUs() {
  const cards = [
    {
      id: "why-1",
      title: "Experienced Professionals",
      desc: "Skilled and certified experts you can trust.",
      icon: Users,
    },
    {
      id: "why-2",
      title: "Eco-Friendly Solutions",
      desc: "Sustainable practices for a greener tomorrow.",
      icon: Leaf,
    },
    {
      id: "why-3",
      title: "Affordable Packages",
      desc: "High-quality service at fair prices.",
      icon: Grid,
    },
    {
      id: "why-4",
      title: "Guaranteed Results",
      desc: "We don't stop until you're 100% satisfied.",
      icon: Award,
    },
  ];

  return (
    <section id="why-choose-us" className="py-24 bg-[#0a1e12] text-white overflow-hidden relative">
      {/* Immersive background image /back2.png */}
      <div className="absolute inset-0 z-0">
        <img
          src="/back2.png"
          alt="Beautiful estate gardens and fine details"
          loading="lazy"
          className="w-full h-full object-cover object-center opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1e12] via-transparent to-[#0a1e12]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Centered Header */}
        <div className="max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold tracking-widest text-[#a3e635] uppercase">
            WHY CHOOSE US
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-[40px] font-extrabold tracking-tight leading-tight">
            Your Satisfaction <br className="sm:hidden" />
            Is Our Priority
          </h2>
          <div className="w-12 h-1 bg-[#76a827] mx-auto rounded-full" />
          <p className="text-sm md:text-base text-gray-300 font-light max-w-xl mx-auto leading-relaxed mt-2">
            We take pride in our work and aim to exceed your expectations on every single visit.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex flex-col items-center text-center p-6 bg-white/5 rounded-2xl border border-white/5 hover:border-[#76a827]/40 transition-all duration-300"
                id={card.id}
              >
                {/* Clean white circular line for the icon */}
                <div className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center text-[#a3e635] mb-5 group-hover:bg-[#76a827] transition-colors">
                  <Icon className="w-6 h-6 text-current" />
                </div>

                <h3 className="text-lg font-bold text-white tracking-wide mb-2.5">
                  {card.title}
                </h3>
                <p className="text-xs text-gray-300 leading-relaxed max-w-xs">
                  {card.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
