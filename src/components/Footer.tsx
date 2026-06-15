/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { Leaf, PhoneCall, Mail, MapPin, Sparkles, Clock, Globe, ArrowUp, Instagram, Facebook, Calendar, CheckSquare, Heart } from "lucide-react";
import { motion } from "motion/react";

interface FooterProps {
  onOpenEstimate: () => void;
}

export default function Footer({ onOpenEstimate }: FooterProps) {
  const [emailSubscribed, setEmailSubscribed] = useState(false);
  const [subscriberEmail, setSubscriberEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!subscriberEmail) return;
    setEmailSubscribed(true);
    setSubscriberEmail("");
    setTimeout(() => {
      setEmailSubscribed(false);
    }, 3000);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Luxury service areas list
  const serviceAreas = [
    "Bel Air & Beverly Hills",
    "Brentwood Manor Estates",
    "Holmby Hills Grounds",
    "Pacific Palisades Heights",
    "Malibu Coastal Manors",
    "Santa Monica Gardens",
  ];

  return (
    <footer className="relative bg-[#0b2418] text-emerald-100/85 font-sans mt-0" id="footer-main">
      
      {/* FINAL CTA SECTION (Integrated majestically at the top of the footer module) */}
      <section className="relative py-28 overflow-hidden bg-[#0A1F14] border-b border-emerald-900/30">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1920&auto=format&fit=crop"
            alt="Drone aerial shot of premium luxury landscaped estate pool and lawn garden"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center scale-102"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b2418] via-[#0b2413]/90 to-transparent" />
          <div className="absolute inset-0 bg-emerald-950/40" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white shadow-lg"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[10px] font-mono tracking-widest uppercase font-bold text-emerald-100">
              Schedule Your Summer Consultation
            </span>
          </motion.div>

          <div className="space-y-4 max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white tracking-wide leading-tight animate-fade-in">
              Ready for the Best Lawn <br />
              in the Neighborhood?
            </h2>
            <p className="text-sm md:text-base text-emerald-100/90 max-w-xl mx-auto font-light leading-relaxed">
              Elevate your visual standing. Book a priority landscape architect walk-through and receive your digital proposal in hours.
            </p>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenEstimate}
              id="cta-est-btn"
              className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-10 py-4.5 rounded-xl text-xs uppercase tracking-widest transition-all hover:scale-[1.02] shadow-lg cursor-pointer"
            >
              Get Your Free Quote Today
            </button>
            <a
              href="tel:1-800-555-5296"
              className="w-full sm:w-auto bg-white/10 hover:bg-white/20 border border-white/10 text-white font-bold px-8 py-4 px-9.5 rounded-xl text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-2 backdrop-blur-sm"
            >
              <PhoneCall className="w-3.5 h-3.5 text-emerald-400" /> Call Direct Line
            </a>
          </div>

          {/* Quick micro triggers */}
          <div className="flex flex-wrap justify-center gap-y-2 gap-x-6 pt-2 text-[10px] font-mono font-semibold text-emerald-200/70 leading-none">
            <div className="flex items-center gap-1.5">
              <CheckSquare className="w-3.5 h-3.5 text-emerald-400" /> NO-OBLIGATION CALCULATIONS
            </div>
            <div className="flex items-center gap-1.5">
              <CheckSquare className="w-3.5 h-3.5 text-emerald-400" /> DIRECT OWNER SURVEYS
            </div>
            <div className="flex items-center gap-1.5">
              <CheckSquare className="w-3.5 h-3.5 text-emerald-400" /> EMERGENCY 24H CARE ACTIVE
            </div>
          </div>
        </div>
      </section>

      {/* CORE FOOTER NAVIGATION GRID */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pl-0.5">
          
          {/* Col 1: Bio and newsletter */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-2 cursor-pointer group" onClick={scrollToTop}>
              <div className="p-2 rounded-lg bg-emerald-990 border border-emerald-800 flex items-center justify-center">
                <Leaf className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-serif font-bold uppercase tracking-widest text-emerald-50 leading-tight">
                  Verdant
                </span>
                <span className="text-[9px] font-mono tracking-[0.3em] text-emerald-450 uppercase leading-none">
                  Lawn & Estate
                </span>
              </div>
            </div>

            <p className="text-xs text-emerald-200/80 leading-relaxed font-light">
              We sculpt and nourish luxury residential lawns and custom estate botanical gardens. Every lawn we trim is a visual masterpiece engineered to improve residential real estate valuations.
            </p>

            {/* Newsletter input */}
            <div className="space-y-2 pt-2" id="footer-newsletter">
              <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider pl-0.5">
                Prestige Seasonal Newsletter
              </h4>
              <p className="text-[10px] text-emerald-300/70 pl-0.5">
                Receive biological gardening schedules, fertilizer reminders, and early season slots on us.
              </p>
              
              {emailSubscribed ? (
                <div className="p-2.5 rounded-lg border border-emerald-700/40 bg-emerald-[#0A1F14] text-emerald-300 font-bold text-xs animate-fade-in animate-duration-300">
                  Estates Newsletter Activated! Check your inbox soon.
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex gap-2">
                  <input
                    type="email"
                    required
                    value={subscriberEmail}
                    onChange={(e) => setSubscriberEmail(e.target.value)}
                    className="flex-1 bg-emerald-950/50 border border-emerald-900 px-3 py-2 rounded-lg text-white text-xs placeholder-emerald-600 focus:outline-none focus:border-emerald-500"
                    placeholder="victoria@sterling-manor.com"
                  />
                  <button
                    type="submit"
                    className="bg-emerald-650 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg text-xs font-bold uppercase transition-all whitespace-nowrap cursor-pointer hover:shadow-md"
                  >
                    Subscribe
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Col 2: Service Areas */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-widest pl-0.5">
              Active Service Areas
            </h4>
            <div className="h-[1px] bg-emerald-900/50" />
            <ul className="space-y-2.5 text-xs">
              {serviceAreas.map((area, idx) => (
                <li key={idx} className="flex items-center gap-2 hover:text-white transition-colors">
                  <MapPin className="w-3.5 h-3.5 text-emerald-550 shrink-0" />
                  <span className="font-light">{area}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Direct Contact Specs */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-widest pl-0.5">
              Direct Contact Details
            </h4>
            <div className="h-[1px] bg-emerald-900/50" />
            <ul className="space-y-3.5 text-xs">
              <li className="flex items-start gap-2.5 hover:text-white transition-all">
                <MapPin className="w-4 h-4 text-emerald-550 shrink-0 mt-0.5" />
                <span className="font-light text-emerald-250">
                  Verdant HQ Suite 800,<br />
                  Sunset Palms Blvd, Los Angeles, CA
                </span>
              </li>
              <li className="flex items-center gap-2.5 hover:text-white transition-all">
                <Mail className="w-4 h-4 text-emerald-550 shrink-0" />
                <a href="mailto:concierge@verdantestates.com" className="font-light font-mono text-emerald-250 hover:underline">
                  concierge@verdantestates.com
                </a>
              </li>
              <li className="flex items-center gap-2.5 hover:text-[#D4AF37] transition-all">
                <Clock className="w-4 h-4 text-emerald-550 shrink-0" />
                <span className="font-light text-emerald-205">
                  Mon - Sat: 7:00 AM - 6:00 PM
                </span>
              </li>
            </ul>
          </div>

          {/* Col 4: Corporate Quicklinks */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-widest pl-0.5">
              Follow Prestige
            </h4>
            <div className="h-[1px] bg-emerald-900/50" />
            <div className="flex gap-3 pt-1">
              <a
                href="https://instagram.com"
                className="p-2.5 bg-emerald-950/50 border border-emerald-900 rounded-xl text-emerald-300 hover:text-white hover:border-emerald-600 hover:-translate-y-0.5 transition-all"
                aria-label="Instagram Link"
              >
                <Instagram className="w-4.5 h-4.5" />
              </a>
              <a
                href="https://facebook.com"
                className="p-2.5 bg-emerald-950/50 border border-emerald-900 rounded-xl text-emerald-300 hover:text-white hover:border-emerald-600 hover:-translate-y-0.5 transition-all"
                aria-label="Facebook Link"
              >
                <Facebook className="w-4.5 h-4.5" />
              </a>
              <a
                href="https://google.com"
                className="p-2.5 bg-emerald-950/50 border border-emerald-900 rounded-xl text-emerald-300 hover:text-white hover:border-emerald-600 hover:-translate-y-0.5 transition-all"
                aria-label="Global Link"
              >
                <Globe className="w-4.5 h-4.5" />
              </a>
            </div>

            <div className="pt-2">
              <button
                onClick={scrollToTop}
                className="p-2.5 text-[10px] font-mono tracking-wider text-emerald-400 border border-emerald-900 hover:border-emerald-700 rounded-xl flex items-center gap-1.5 hover:text-white transition-all cursor-pointer"
              >
                <ArrowUp className="w-3.5 h-3.5" /> Scroll To Top
              </button>
            </div>
          </div>

        </div>

        {/* BOTTOM METADATA BAR */}
        <div className="border-t border-emerald-900/60 mt-16 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] text-emerald-600/70 pl-0.5">
          <div>
            &copy; {new Date().getFullYear()} Verdant Lawn Care & Estate Landscaping Agency. All rights reserved.
          </div>
          <div className="flex items-center gap-1">
            Engineered with <Heart className="w-3 h-3 text-emerald-500 animate-pulse fill-current" /> for elite real estate valuations.
          </div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Privacy Charter</a>
            <a href="#" className="hover:text-white transition-colors">Client Covenant</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
