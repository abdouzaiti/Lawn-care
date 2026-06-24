/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { Service } from "../types";
import { X, ArrowRight, Check, Droplets, LayoutGrid, Sprout, Leaf } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
// @ts-expect-error - PNG image import typing
import regeneratedIrrigationImage from "../assets/images/regenerated_image_1782298305085.png";
// @ts-expect-error - PNG image import typing
import regeneratedMaintenanceImage from "../assets/images/regenerated_image_1782298409831.png";

interface ServicesProps {
  onOpenEstimateWithService: (serviceId: string) => void;
}

export default function Services({ onOpenEstimateWithService }: ServicesProps) {
  const [activeService, setActiveService] = useState<Service | null>(null);

  const servicesData: Service[] = [
    {
      id: "maintenance",
      title: "Lawn Maintenance",
      shortDescription: "Mowing, edging, trimming, and lawn care.",
      longDescription: "Our signature lawn care regime elevates basic turf administration to an art form. We operate clean, state-of-the-art mowers calibrated uniquely daily to match soil dampness and grass tensile strength.",
      image: regeneratedMaintenanceImage,
      features: [
        "Calibrated precision mowing and striping",
        "Polished sidewalk and hardscape hand-edging",
        "Organic high-grade biological lawn feed",
        "Immediate clippings recycling or removal"
      ],
      startingPrice: "$180/visit",
      schedule: "Weekly / Bi-Weekly",
      tierNotes: "Available for boutique residential estates and Country Club manors."
    },
    {
      id: "landscaping",
      title: "Landscape Design",
      shortDescription: "Custom landscape design and installation.",
      longDescription: "Work with elite landscape architects to craft stunning pathways, premium water fixtures, and beautiful terraces. We utilize 3D architectural renders to match your estate's existing lines.",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop",
      features: [
        "In-depth 3D master-grade architectural blueprints",
        "Premium paving and custom stonework",
        "Specimen trees with custom soil composition",
        "Dedicated project managers for absolute transparency"
      ],
      startingPrice: "$5,000+",
      schedule: "Scheduled Project",
      tierNotes: "Requires custom architect consultations."
    },
    {
      id: "irrigation",
      title: "Irrigation Systems",
      shortDescription: "Efficient irrigation solutions for a healthy lawn.",
      longDescription: "Our professional irrigation systems feature dynamic weather integration, tracking microclimate precipitation in real-time. This saves water while ensuring deep botanical hydration.",
      image: regeneratedIrrigationImage,
      features: [
        "Smart mobile controllers with climate sensors",
        "Micro-drip flower bed lines and spray heads",
        "Precision pressure regulating valve designs"
      ],
      startingPrice: "$1,200+",
      schedule: "Spring & Autumn Programs",
      tierNotes: "Highly recommended for newly installed gardens."
    },
    {
      id: "garden",
      title: "Garden Installation",
      shortDescription: "Beautiful garden beds and plant installation.",
      longDescription: "Create a serene natural paradise with curated botanical selections. We place individual accent structures, elegant lavender arrays, and customized mulch lines to form paths.",
      image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=800&auto=format&fit=crop",
      features: [
        "Curated high-contrast multi-seasonal flora",
        "Strict boxwood hedge placement and symmetry",
        "Premium weed-blocking mineral pathways",
        "Natural structural boulder placements"
      ],
      startingPrice: "$800+",
      schedule: "Custom Architectural Schedule",
      tierNotes: "Includes a 6-month botanical health warranty."
    }
  ];

  // Helper to map icons
  const getIconForService = (id: string) => {
    switch (id) {
      case "maintenance":
        return Leaf;
      case "landscaping":
        return LayoutGrid;
      case "irrigation":
        return Droplets;
      case "garden":
        return Sprout;
      default:
        return Leaf;
    }
  };

  return (
    <section id="services" className="py-24 bg-white/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section MATCHING THE SCREENSHOT EXACTLY */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
          <div className="space-y-4 text-left max-w-xl">
            <span className="text-xs font-bold tracking-widest text-[#76a827] uppercase">
              OUR SERVICES
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-[40px] font-extrabold text-gray-900 tracking-tight leading-tight">
              Premium Lawn Care <br />
              & Landscaping Services
            </h2>
          </div>
          <p className="text-sm md:text-base text-gray-500 font-light max-w-xl md:text-right leading-relaxed">
            From routine maintenance to complete landscape transformations, we provide everything your outdoor space needs to thrive.
          </p>
        </div>

        {/* Services 4-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesData.map((svc) => {
            const Icon = getIconForService(svc.id);
            return (
              <div
                key={svc.id}
                onClick={() => setActiveService(svc)}
                className="group relative bg-white rounded-3xl overflow-hidden cursor-pointer border border-gray-100/80 hover:border-[#76a827]/40 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                id={`service-card-${svc.id}`}
              >
                {/* Image panel */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={svc.image}
                    alt={svc.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Overlapping circle icon floating bottom-left */}
                  <div className="absolute -bottom-6 left-6 w-12 h-12 rounded-full bg-[#1e5c3e] group-hover:bg-[#76a827] transition-colors border-4 border-white flex items-center justify-center text-white shadow-md z-10 duration-300">
                    <Icon className="w-5 h-5 text-white fill-white/20" />
                  </div>
                </div>

                {/* Text section */}
                <div className="p-6 pt-10 space-y-2 relative flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 tracking-tight">
                      {svc.title}
                    </h3>
                    <p className="text-xs text-gray-400 leading-normal mt-1 block">
                      {svc.shortDescription}
                    </p>
                  </div>

                  {/* Arrow CTA bottom-right */}
                  <div className="pt-4 flex justify-end">
                    <div className="w-8 h-8 rounded-full border border-gray-100 group-hover:border-[#76a827] flex items-center justify-center text-gray-300 group-hover:text-[#76a827] transition-all duration-300">
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Interactive Service Details Modal */}
      <AnimatePresence>
        {activeService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveService(null)}
              className="absolute inset-0 bg-[#07130d]/80 backdrop-blur-sm"
              id="service-modal-backdrop"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.4 }}
              className="relative w-full max-w-2xl overflow-hidden rounded-2xl shadow-2xl border border-gray-100 bg-white"
              id="service-details-modal"
            >
              <div className="grid grid-cols-1 md:grid-cols-12">
                {/* Left image column */}
                <div className="md:col-span-5 relative h-48 md:h-auto min-h-[220px] bg-slate-50">
                  <img
                    src={activeService.image}
                    alt={activeService.title}
                    referrerPolicy="no-referrer"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/80 to-transparent" />
                  
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-[10px] uppercase font-mono tracking-widest text-[#a3e635] font-bold">
                      PRO SERVICE
                    </span>
                    <h4 className="text-xl font-bold tracking-wide">
                      {activeService.title}
                    </h4>
                  </div>
                </div>

                {/* Right content column */}
                <div className="md:col-span-7 p-6 md:p-8 space-y-6 max-h-[80vh] overflow-y-auto">
                  {/* Close button */}
                  <button
                    onClick={() => setActiveService(null)}
                    id="close-svc-details-btn"
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 p-2 rounded-full hover:bg-gray-100 transition-all z-10"
                  >
                    <X className="w-5 h-5" />
                  </button>

                  <div className="space-y-1">
                    <span className="text-xs font-bold text-[#76a827] uppercase tracking-wider block">
                      Description
                    </span>
                    <p className="text-sm text-gray-600 leading-relaxed font-light">
                      {activeService.longDescription}
                    </p>
                  </div>

                  {/* Highlights checklist */}
                  <div className="space-y-2">
                    <h5 className="text-xs font-bold text-[#76a827] uppercase tracking-wide">
                      Core Features:
                    </h5>
                    <div className="space-y-1.5">
                      {activeService.features.map((feat, index) => (
                        <div key={index} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-[#76a827] shrink-0 mt-0.5" />
                          <span className="text-xs text-gray-500">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Pricing and Action */}
                  <div className="pt-4 border-t border-gray-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                      <span className="text-[10px] text-gray-400 uppercase tracking-widest block font-bold">
                        Average Price
                      </span>
                      <span className="text-lg font-extrabold text-gray-900 block">
                        {activeService.startingPrice}
                      </span>
                    </div>
                    <button
                      onClick={() => {
                        setActiveService(null);
                        onOpenEstimateWithService(activeService.id);
                      }}
                      className="bg-[#76a827] hover:bg-[#65931f] text-white font-bold py-3 px-5 rounded-xl text-xs uppercase tracking-wider transition-all text-center flex items-center justify-center gap-1.5 cursor-pointer shadow-md"
                      id="modal-select-service"
                    >
                      Instant Estimate <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
