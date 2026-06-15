/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ArrowRight, ArrowLeft, Check, Calendar, Mail, Phone, User, Compass, Sparkles, Sprout, CheckCircle2 } from "lucide-react";

interface EstimateWizardProps {
  isOpen: boolean;
  onClose: () => void;
  selectedServiceId?: string;
}

export default function EstimateWizard({ isOpen, onClose, selectedServiceId }: EstimateWizardProps) {
  const [step, setStep] = useState(1);
  const [size, setSize] = useState<"small" | "medium" | "large">("medium");
  const [service, setService] = useState<string>(selectedServiceId || "landscaping");
  const [upgrades, setUpgrades] = useState<{ [key: string]: boolean }>({
    lighting: false,
    mulching: false,
    flowers: false,
  });
  const [clientInfo, setClientInfo] = useState({
    name: "",
    email: "",
    phone: "",
    schedule: "asap",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Approximate luxury pricing engine
  const basePrices: { [key: string]: number } = {
    maintenance: 180,
    landscaping: 1500,
    irrigation: 1200,
    weed: 95,
    cleanup: 350,
    garden: 800,
  };

  const sizeMultipliers = {
    small: 0.8,
    medium: 1.2,
    large: 2.2,
  };

  const calculateEstimate = () => {
    const base = basePrices[service] || 500;
    const mult = sizeMultipliers[size];
    let total = base * mult;

    if (upgrades.lighting) total += 650;
    if (upgrades.mulching) total += 180;
    if (upgrades.flowers) total += 380;

    return Math.round(total);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API lead transmission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1200);
  };

  const nextStep = () => {
    if (step < 3) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-slate-950/80 backdrop-blur-md"
          id="wizard-backdrop"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-2xl overflow-hidden rounded-2xl glass-panel-heavy shadow-2xl border border-emerald-100 bg-white"
          id="wizard-container"
        >
          {/* Header */}
          <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
            <div>
              <span className="text-xs font-semibold tracking-widest text-emerald-700 uppercase flex items-center gap-1.5">
                <Compass className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: '6s' }} /> Instant Landscape Proposal
              </span>
              <h3 className="text-xl font-serif font-semibold text-emerald-950 mt-1">
                {isSuccess ? "Your Luxury Estimate" : `Prestige Consultation — Step ${step} of 3`}
              </h3>
            </div>
            <button
              onClick={onClose}
              id="close-wizard-btn"
              className="text-emerald-800 hover:text-emerald-950 p-2 rounded-full hover:bg-emerald-50 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {!isSuccess ? (
            <div className="p-6 md:p-8">
              {/* Progress Bar */}
              <div className="w-full bg-slate-100 h-1 mb-8 rounded-full overflow-hidden">
                <div
                  className="h-full bg-emerald-650 transition-all duration-500"
                  style={{ width: `${(step / 3) * 100}%` }}
                />
              </div>

              {step === 1 && (
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-emerald-950 mb-3 font-sans">
                      Select Your Desired Premium Service
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {[
                        { id: "maintenance", label: "Lawn Maintenance", icon: Sprout },
                        { id: "landscaping", label: "Landscaping Design", icon: Compass },
                        { id: "irrigation", label: "Irrigation Systems", icon: Sparkles },
                        { id: "weed", label: "Weed Control & Feed", icon: CheckCircle2 },
                        { id: "cleanup", label: "Seasonal Cleanups", icon: Calendar },
                        { id: "garden", label: "Garden Installation", icon: Sparkles },
                      ].map((item) => {
                        const Icon = item.icon;
                        return (
                          <button
                            key={item.id}
                            type="button"
                            onClick={() => setService(item.id)}
                            className={`p-3.5 rounded-xl border text-center transition-all flex flex-col items-center justify-center gap-2 cursor-pointer ${
                              service === item.id
                                ? "border-emerald-600 bg-emerald-50 text-emerald-800 shadow-[0_0_15px_rgba(16,185,129,0.1)]"
                                : "border-slate-100 bg-slate-50/50 text-slate-500 hover:text-slate-800 hover:border-slate-200"
                            }`}
                          >
                            <Icon className="w-5 h-5 text-current" />
                            <span className="text-xs font-semibold">{item.label}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-emerald-950 mb-3 font-sans">
                      Estates grounds or lawn scope
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      {[
                        { id: "small", label: "Boutique Estate", desc: "Under 2,500 sq ft" },
                        { id: "medium", label: "Prestige Manor", desc: "2,500 - 8,000 sq ft" },
                        { id: "large", label: "Grand Resort", desc: "Over 8,000 sq ft" },
                      ].map((item) => (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => setSize(item.id as any)}
                          className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                            size === item.id
                              ? "border-emerald-600 bg-emerald-50 text-emerald-950 shadow-[0_0_15px_rgba(16,185,129,0.05)]"
                              : "border-slate-100 bg-slate-50/50 text-slate-500 hover:border-slate-200"
                          }`}
                        >
                          <div className={`text-xs uppercase tracking-wider font-semibold ${size === item.id ? "text-emerald-700" : "text-slate-400"}`}>
                            {item.label}
                          </div>
                          <div className="text-sm font-bold text-emerald-950 mt-1">{item.desc}</div>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-6">
                  <div className="text-center max-w-md mx-auto mb-4">
                    <h4 className="text-lg font-serif font-medium text-emerald-950">Prestige Outdoor Enrichment</h4>
                    <p className="text-xs text-emerald-950/70 mt-1">Elevate your estate landscaping with dynamic artisan upgrades and scheduled treatments.</p>
                  </div>

                  <div className="space-y-3">
                    {[
                      {
                        id: "lighting",
                        title: "Artistic Low-Voltage Illumination",
                        desc: "Subtle landscape uplights, walkway washes, and automatic sunset timers.",
                        price: "+$650 setup",
                      },
                      {
                        id: "mulching",
                        title: "Polished Organic Premium Mulching",
                        desc: "Double-shredded dark hardwood dressing with laser-sharp garden bed cutting.",
                        price: "+$180 est.",
                      },
                      {
                        id: "flowers",
                        title: "Curated Seasonal Botanical Displays",
                        desc: "Hand-selected visual highlights matching the microclimate and structure of your house.",
                        price: "+$380 / season",
                      },
                    ].map((upg) => (
                      <div
                        key={upg.id}
                        onClick={() => setUpgrades({ ...upgrades, [upg.id]: !upgrades[upg.id] })}
                        className={`p-4 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                          upgrades[upg.id]
                            ? "border-emerald-600 bg-emerald-50/30 shadow-[0_0_10px_rgba(16,185,129,0.05)]"
                            : "border-slate-100 bg-slate-50/50 hover:border-slate-200"
                        }`}
                      >
                        <div className="flex-1 pr-4">
                          <div className="flex items-center gap-2">
                            <span className={`w-4 h-4 rounded-full border flex items-center justify-center transition-all ${
                              upgrades[upg.id] ? "bg-emerald-650 border-emerald-650 text-white animate-pulse" : "border-slate-300"
                            }`}>
                              {upgrades[upg.id] && <Check className="w-3 h-3 stroke-[3]" />}
                            </span>
                            <span className="font-bold text-sm text-emerald-950">{upg.title}</span>
                          </div>
                          <p className="text-xs text-emerald-950/75 mt-1 pl-6">{upg.desc}</p>
                        </div>
                        <div className="text-right whitespace-nowrap">
                          <span className="text-xs font-mono font-bold text-emerald-700">{upg.price}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {step === 3 && (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="text-center max-w-md mx-auto mb-4">
                    <h4 className="text-lg font-serif font-medium text-emerald-950">Prestige Contact Verification</h4>
                    <p className="text-xs text-emerald-955/70 mt-1">Your proposal will be saved under your name and delivered to schedule priority.</p>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-xs font-semibold text-emerald-900 uppercase tracking-wider mb-1.5 pl-1">
                        Your Full Name
                      </label>
                      <div className="relative">
                        <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-emerald-755">
                          <User className="w-4 h-4" />
                        </span>
                        <input
                          type="text"
                          required
                          value={clientInfo.name}
                          onChange={(e) => setClientInfo({ ...clientInfo, name: e.target.value })}
                          className="w-full bg-emerald-50/50 border border-emerald-100 rounded-xl py-3 pl-10 pr-4 text-emerald-950 text-sm focus:outline-none focus:border-emerald-600 transition-all"
                          placeholder="Lord/Lady Harrington"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-emerald-900 uppercase tracking-wider mb-1.5 pl-1">
                          Secure Email Address
                        </label>
                        <div className="relative">
                          <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-emerald-755">
                            <Mail className="w-4 h-4" />
                          </span>
                          <input
                            type="email"
                            required
                            value={clientInfo.email}
                            onChange={(e) => setClientInfo({ ...clientInfo, email: e.target.value })}
                            className="w-full bg-emerald-50/50 border border-emerald-100 rounded-xl py-3 pl-10 pr-4 text-emerald-950 text-sm focus:outline-none focus:border-emerald-600 transition-all"
                            placeholder="harrington@estate.com"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-emerald-900 uppercase tracking-wider mb-1.5 pl-1">
                          Direct Contact Number
                        </label>
                        <div className="relative">
                          <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-emerald-755">
                            <Phone className="w-4 h-4" />
                          </span>
                          <input
                            type="tel"
                            required
                            value={clientInfo.phone}
                            onChange={(e) => setClientInfo({ ...clientInfo, phone: e.target.value })}
                            className="w-full bg-emerald-50/50 border border-emerald-100 rounded-xl py-3 pl-10 pr-4 text-emerald-950 text-sm focus:outline-none focus:border-emerald-600 transition-all"
                            placeholder="(555) 123-4567"
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-emerald-900 uppercase tracking-wider mb-1.5 pl-1">
                        Preferred Survey Window
                      </label>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                        {[
                          { id: "asap", label: "Urgent (Within 48h)" },
                          { id: "week", label: "This Week" },
                          { id: "next-week", label: "Next Week" },
                          { id: "consult", label: "Discussion First" },
                        ].map((sch) => (
                          <button
                            key={sch.id}
                            type="button"
                            onClick={() => setClientInfo({ ...clientInfo, schedule: sch.id })}
                            className={`p-3 rounded-lg border text-center transition-all cursor-pointer ${
                              clientInfo.schedule === sch.id
                                ? "border-emerald-650 bg-emerald-55 text-white text-xs font-semibold"
                                : "border-slate-100 bg-slate-50/50 text-slate-500 hover:border-slate-200 text-xs"
                            }`}
                          >
                            {sch.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </form>
              )}

              {/* Navigation Actions */}
              <div className="flex justify-between items-center mt-10 pt-4 border-t border-slate-100">
                <button
                  type="button"
                  onClick={prevStep}
                  disabled={step === 1}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold transition-all cursor-pointer ${
                    step === 1
                      ? "text-slate-300 cursor-not-allowed opacity-50"
                      : "text-slate-605 hover:text-slate-900 hover:bg-slate-100"
                  }`}
                >
                  <ArrowLeft className="w-4 h-4" /> Back
                </button>

                {step < 3 ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    className="flex items-center gap-2 bg-emerald-700 hover:bg-emerald-800 text-white px-6 py-2.5 rounded-lg text-sm font-semibold shadow-md transition-all border border-emerald-600/20 cursor-pointer"
                  >
                    Continue <ArrowRight className="w-4 h-4" />
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={handleSubmit}
                    disabled={isSubmitting || !clientInfo.name || !clientInfo.email || !clientInfo.phone}
                    className="flex items-center gap-2 bg-emerald-700 hover:bg-emerald-800 text-white px-8 py-3 rounded-lg text-sm font-bold shadow-md transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                    id="submit-proposal-btn"
                  >
                    {isSubmitting ? "Generating Proposal..." : "Generate Digital Outline"} <Check className="w-4 h-4 stroke-[3]" />
                  </button>
                )}
              </div>
            </div>
          ) : (
            /* Success Proposal Dashboard */
            <div className="p-6 md:p-8 space-y-6">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-300 flex items-center justify-center p-3 text-emerald-700 mb-4 shadow-md">
                  <Sparkles className="w-8 h-8 animate-pulse" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-emerald-950 tracking-wide">
                  Architectural Survey Approved
                </h3>
                <p className="text-xs text-emerald-800/80 mt-1 max-w-sm">
                  Welcome to elite outdoor living, {clientInfo.name}. Your digital lawn profile is complete.
                </p>
              </div>

              {/* Estimate Bill Box */}
              <div className="bg-emerald-50/50 rounded-2xl p-6 border border-emerald-100 text-center relative overflow-hidden text-emerald-950">
                <div className="absolute top-0 right-0 p-3">
                  <span className="text-[10px] bg-emerald-100 text-emerald-800 border border-emerald-200 px-2.5 py-0.5 rounded-full font-mono font-bold tracking-wider">
                    ESTATE LEVEL ACTIVE
                  </span>
                </div>
                <span className="text-xs text-emerald-900/50 tracking-widest uppercase font-mono font-semibold">Estimated Luxury Investment</span>
                <div className="text-4xl md:text-5xl font-serif font-bold text-emerald-900 my-3">
                  ${calculateEstimate().toLocaleString()}
                  <span className="text-sm font-sans font-normal text-emerald-900/70 block mt-1">
                    {service === "maintenance" || service === "weed" ? "/ month base schedule" : " estimated project initiation value"}
                  </span>
                </div>
                <p className="text-xs text-emerald-900/80 mt-2 max-w-md mx-auto font-light">
                  Includes full project mapping, high-grade biological nourishment, professional personnel allotment, and regular status notifications.
                </p>
              </div>

              {/* Included Prestige Standards list */}
              <div className="space-y-3">
                <h4 className="text-xs font-mono font-bold text-emerald-900 uppercase tracking-widest pl-1">
                  Verdant Estate Standards Included:
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                  {[
                    "pH & soil mineral optimization matrix",
                    "Laser-guided border trimming alignment",
                    "Acoustically damped low-emission machinery",
                    "Elite certified turf agronomist review",
                    "Real-time customer portal & photo updates",
                    "Priority emergency response within 6 hours",
                  ].map((std, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 bg-emerald-50/20 p-2.5 rounded-lg border border-emerald-100">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span className="text-emerald-950 text-xs font-light">{std}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex items-start gap-3">
                <Calendar className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5 animate-bounce" style={{ animationDuration: '3s' }} />
                <div>
                  <h5 className="text-xs font-bold text-slate-900">Dedicated Representative Assigned</h5>
                  <p className="text-[11px] text-slate-650 mt-0.5 font-light">
                    An estate development manager will call you at <span className="text-emerald-800 font-semibold font-mono">{clientInfo.phone}</span> or email <span className="text-emerald-800 font-semibold font-mono">{clientInfo.email}</span> within 2 hours to coordinate the final layout.
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={onClose}
                className="w-full bg-emerald-700 hover:bg-emerald-800 text-white font-bold py-3 px-6 rounded-xl text-sm transition-all shadow-md cursor-pointer"
              >
                Conclude Outline & Close
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
