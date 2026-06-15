/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import BeforeAfter from "./components/BeforeAfter";
import WhyChooseUs from "./components/WhyChooseUs";
import Testimonials from "./components/Testimonials";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import EstimateWizard from "./components/EstimateWizard";

export default function App() {
  const [wizardOpen, setWizardOpen] = useState(false);
  const [selectedServiceId, setSelectedServiceId] = useState<string | undefined>(undefined);

  const handleOpenWizard = (serviceId?: string) => {
    setSelectedServiceId(serviceId);
    setWizardOpen(true);
  };

  const handleCloseWizard = () => {
    setWizardOpen(false);
    setSelectedServiceId(undefined);
  };

  return (
    <div className="bg-slate-50 text-slate-800 min-h-screen font-sans select-none selection:bg-emerald-600 selection:text-white overflow-x-hidden antialiased">


      {/* Floating Header */}
      <Navbar onOpenEstimate={() => handleOpenWizard()} />

      {/* Hero section */}
      <Hero onOpenEstimate={() => handleOpenWizard()} />

      {/* Landscape services catalogue bento */}
      <Services onOpenEstimateWithService={(svcId) => handleOpenWizard(svcId)} />

      {/* Interactive before-after reveal slider */}
      <BeforeAfter />

      {/* Premium landscape philosophy details */}
      <WhyChooseUs />

      {/* Verified client testimonies & real-time reviews */}
      <Testimonials />

      {/* High-res asset portfolio masonry & Lightbox */}
      <Gallery />

      {/* Professional CTA & Corporate Footer */}
      <Footer onOpenEstimate={() => handleOpenWizard()} />

      {/* Interactive lead-calculator survey dialog */}
      <EstimateWizard
        isOpen={wizardOpen}
        onClose={handleCloseWizard}
        selectedServiceId={selectedServiceId}
      />
    </div>
  );
}
