/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { GalleryItem } from "../types";
import { Star, X, ZoomIn, Eye, Sparkles, Filter, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
// @ts-expect-error - PNG image import typing
import regeneratedGalleryImage from "../assets/images/regenerated_image_1782299410116.png";

export default function Gallery() {
  const [filter, setFilter] = useState<"all" | "lawns" | "gardens" | "hardscapes" | "lighting">("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const galleryItems: GalleryItem[] = [
    {
      id: "gal-1",
      title: "Symmetric Front Lawn Manor",
      category: "lawns",
      image: regeneratedGalleryImage,
      description: "Laser-aligned premium fescue grass with custom brick accents and multi-tiered edge mulch.",
    },
    {
      id: "gal-2",
      title: "The Pergola Patio & Fire pit",
      category: "hardscapes",
      image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=800&auto=format&fit=crop",
      description: "Custom travertine brick installation with double-joint gas fire fixture and ambient seating.",
    },
    {
      id: "gal-3",
      title: "Aromatic Lavender Terrace",
      category: "gardens",
      image: "https://images.unsplash.com/photo-1558521800-8300a7c41344?q=80&w=800&auto=format&fit=crop",
      description: "Symmetric lavender corridors bounded by natural limestone walls and organic trace feeding.",
    },
    {
      id: "gal-4",
      title: "Travertine Poolside Botanical Lines",
      category: "hardscapes",
      image: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=800&auto=format&fit=crop",
      description: "Luxury custom-contoured pool area featuring boxwood structures and automated hidden sprinklers.",
    },
    {
      id: "gal-5",
      title: "Atmospheric Pathway Uplighting",
      category: "lighting",
      image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800&auto=format&fit=crop",
      description: "Dimmable brass landscape washes highlighting specimen maples and visual corridor elements.",
    },
    {
      id: "gal-6",
      title: "Manicured English Boxwoods",
      category: "gardens",
      image: "https://images.unsplash.com/photo-1584467541268-b040f83be3fd?q=80&w=800&auto=format&fit=crop",
      description: "Strictly sheared structural boxwood hedge alignment with premium dark organic fertilizer dressing.",
    },
  ];

  const filteredItems = filter === "all"
    ? galleryItems
    : galleryItems.filter((item) => item.category === filter);

  const filterConfigs: { id: typeof filter; label: string }[] = [
    { id: "all", label: "All Masterpieces" },
    { id: "lawns", label: "Pristine Lawns" },
    { id: "gardens", label: "Botanical Gardens" },
    { id: "hardscapes", label: "Architectural Hardscapes" },
    { id: "lighting", label: "Atmospheric Lighting" },
  ];

  const showNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
    }
  };

  const showPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  return (
    <section id="gallery" className="py-24 bg-[#fcfdfd]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-semibold tracking-widest text-emerald-700 uppercase flex items-center justify-center gap-1.5">
            <Sparkles className="w-4 h-4 animate-spin" style={{ animationDuration: '8s' }} /> Visual Testaments
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-emerald-950 tracking-wide">
            Our Elite Landscape Masterpieces
          </h2>
          <div className="w-16 h-1 bg-emerald-600 mx-auto rounded-full mt-4" />
          <p className="text-sm md:text-base text-emerald-950/80 font-light max-w-xl mx-auto">
            Browse high-resolution photographs showcasing completed luxury lawns, manicured botanical architectures, and sophisticated pool-scapes.
          </p>
        </div>

        {/* Filter buttons group bar */}
        <div className="flex flex-wrap justify-center items-center gap-2 mb-12" id="gallery-filters-bar">
          <span className="text-emerald-700/60 mr-2 uppercase tracking-widest font-mono text-[10px] hidden md:flex items-center gap-1">
            <Filter className="w-3.5 h-3.5 text-emerald-705" /> Filter Portfolio:
          </span>
          {filterConfigs.map((cfg) => (
            <button
              key={cfg.id}
              onClick={() => setFilter(cfg.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                filter === cfg.id
                  ? "bg-emerald-700 text-white font-extrabold shadow-md scale-[1.03]"
                  : "bg-white border border-slate-150 text-slate-500 hover:text-emerald-800 hover:border-emerald-300"
              }`}
            >
              {cfg.label}
            </button>
          ))}
        </div>

        {/* Portfolio Grid layout */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          id="gallery-masonry-grid"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                onClick={() => setLightboxIndex(index)}
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md border border-slate-100 cursor-pointer hover:shadow-xl transition-all"
                id={item.id}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-105 duration-500"
                />
                
                {/* Overlay hover content */}
                <div className="absolute inset-0 bg-emerald-950/80 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-between p-6">
                  <div className="flex justify-between items-start">
                    <span className="text-[10px] font-mono tracking-widest text-[#D4AF37] uppercase bg-white/10 border border-white/20 px-2.5 py-0.5 rounded-full font-bold">
                      {item.category}
                    </span>
                    <ZoomIn className="w-5 h-5 text-white/50 group-hover:text-emerald-400" />
                  </div>

                  <div className="space-y-1 transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-xl font-serif font-semibold text-white tracking-wide">
                      {item.title}
                    </h3>
                    <p className="text-xs text-white/80 font-light line-clamp-2">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Ligthbox Modal view */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <div
            className="fixed inset-0 z-50 flex flex-col justify-center items-center p-4"
            id="lightbox-parent"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setLightboxIndex(null)}
              className="absolute inset-0 bg-emerald-950/40 backdrop-blur-md"
            />

            {/* Lightbox content box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative max-w-4xl w-full aspect-[16/10] overflow-hidden rounded-2xl bg-white border border-emerald-100 z-10 shadow-2xl flex flex-col"
            >
              <div className="absolute top-4 right-4 z-20">
                <button
                  onClick={() => setLightboxIndex(null)}
                  id="close-lightbox"
                  className="p-3 bg-white border border-emerald-100 hover:border-emerald-300 rounded-full text-emerald-800 hover:text-emerald-950 transition-all cursor-pointer shadow-md"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Sliders navigation buttons */}
              <button
                onClick={showPrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-3.5 bg-white border border-emerald-100 hover:border-emerald-300 rounded-full text-emerald-800 hover:text-emerald-950 z-20 cursor-pointer shadow-md"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={showNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-3.5 bg-white border border-emerald-100 hover:border-emerald-300 rounded-full text-emerald-800 hover:text-emerald-950 z-20 cursor-pointer shadow-md"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Main Expanded Image */}
              <div className="flex-1 relative bg-black/5">
                <img
                  src={filteredItems[lightboxIndex]?.image}
                  alt={filteredItems[lightboxIndex]?.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Foot detailed stats caption */}
              <div className="p-5 bg-white/95 backdrop-blur-sm border-t border-slate-100 relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                  <span className="text-[9px] font-mono tracking-widest text-emerald-700 uppercase block leading-none font-bold">
                    ESTATE MASTERPIECE {lightboxIndex + 1} OF {filteredItems.length}
                  </span>
                  <h3 className="text-lg md:text-xl font-serif font-semibold text-emerald-950 tracking-wide mt-1.5 pl-0.5">
                    {filteredItems[lightboxIndex]?.title}
                  </h3>
                  <p className="text-xs text-emerald-900/75 mt-1 pl-0.5">
                    {filteredItems[lightboxIndex]?.description}
                  </p>
                </div>

                <div className="bg-emerald-100 text-emerald-800 border border-emerald-250 px-3 py-1.5 rounded-lg text-[10px] font-mono uppercase tracking-wider font-semibold">
                  ACTIVE PRESTIGE FINISH
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
