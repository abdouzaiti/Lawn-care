/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { Menu, X, PhoneCall, Leaf, Sparkles, LogIn, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface NavbarProps {
  onOpenEstimate: () => void;
}

export default function Navbar({ onOpenEstimate }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "py-3 bg-[#0a1e12]/95 backdrop-blur-md border-b border-white/5 shadow-lg"
            : "py-6 bg-transparent"
        }`}
      >
        <div className="w-full px-6 sm:px-10 lg:px-16">
          <div className="flex justify-between items-center">
            {/* Logo GREENSCAPE */}
            <div
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex items-center gap-2 cursor-pointer group"
              id="brand-logo"
            >
              <div className="flex items-center gap-3">
                <div className="p-1 rounded-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                  <Leaf className="w-6 h-6 text-[#acd355] fill-[#acd355]/20" />
                </div>
                <div className="flex flex-col">
                  <span className="text-lg font-black tracking-[0.2em] text-white leading-none uppercase">
                    Greenscape
                  </span>
                  <span className="text-[7.5px] font-bold tracking-[0.3em] text-white/60 uppercase leading-none mt-1">
                    Lawn Care & Landscaping
                  </span>
                </div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-10">
              {[
                { label: "Services", target: "services" },
                { label: "About Us", target: "why-choose-us" },
                { label: "Our Work", target: "before-after" },
                { label: "Contact", target: "footer-contact-cta" },
              ].map((link, idx) => (
                <button
                  key={idx}
                  onClick={() => scrollToSection(link.target)}
                  className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/90 hover:text-[#acd355] transition-colors relative group py-2"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#acd355] transition-all duration-300 group-hover:w-full" />
                </button>
              ))}
            </nav>

            {/* CTA Glassy Button */}
            <div className="hidden lg:flex items-center">
              <button
                onClick={onOpenEstimate}
                className="flex items-center gap-2 text-[10px] font-bold tracking-[0.2em] uppercase text-white hover:text-[#acd355] transition-all border border-white/30 hover:border-[#acd355] hover:bg-white/5 px-6 py-2.5 rounded-full shadow-sm"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                Get A Quote
              </button>
            </div>

            {/* Mobile Menu Trigger */}
            <div className="flex lg:hidden items-center gap-3">
              <a
                href="tel:123-456-7890"
                className="bg-[#76a827] text-white px-3 py-2 text-xs font-bold rounded-full flex items-center gap-1"
              >
                <PhoneCall className="w-3 h-3" /> Call
              </a>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                id="mobile-nav-toggle"
                className="p-2 text-white hover:bg-white/10 rounded-xl transition-colors"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden absolute top-[100%] left-0 right-0 bg-[#0a1e12] border-b border-white/10 py-6 px-4 shadow-xl"
              id="mobile-drawer"
            >
              <div className="flex flex-col gap-4 font-sans text-center max-w-sm mx-auto">
                {[
                  { label: "Services", target: "services" },
                  { label: "About Us", target: "why-choose-us" },
                  { label: "Our Work", target: "before-after" },
                  { label: "Contact", target: "footer-contact-cta" },
                ].map((link, idx) => (
                  <button
                    key={idx}
                    onClick={() => scrollToSection(link.target)}
                    className="text-xs font-bold uppercase tracking-[0.2em] text-white/90 hover:text-[#acd355] hover:bg-white/5 py-2.5 rounded-lg transition-all"
                  >
                    {link.label}
                  </button>
                ))}

                <div className="h-[1px] bg-white/10 my-2" />

                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenEstimate();
                  }}
                  className="flex items-center justify-center gap-2 text-xs font-bold tracking-[0.15em] uppercase text-white py-3 bg-[#76a827] hover:bg-[#65931f] rounded-full shadow-md"
                >
                  <PhoneCall className="w-4 h-4" />
                  Get A Quote
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
