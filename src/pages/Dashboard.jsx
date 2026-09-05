import React, { useState } from 'react';
import TrueBorrowerCard from '../components/dashboard/TrueBorrowerCard';
import RiskRatingCard from '../components/dashboard/RiskRatingCard';
import EditorialClientCard from '../components/dashboard/EditorialClientCard';
import LoanStatusCard from '../components/dashboard/LoanStatusCard';
import LTVCard from '../components/dashboard/LTVCard';
import DSCRCard from '../components/dashboard/DSCRCard';
import DeckSlideSelector from '../components/dashboard/DeckSlideSelector';
import ReferenceDock from '../components/dashboard/ReferenceDock';
import TopKPIStrip from '../components/dashboard/TopKPIStrip';
import RealEstateDetailModal from '../components/dashboard/RealEstateDetailModal';
import { dashboardDatasets } from '../data/dashboardData';

/**
 * Infinity Core Bhopal - Luxury Real Estate TV Executive Dashboard
 * Featuring the authentic translucent frosted glass materials from glass.html
 * and 1:1 visual composition of reference-preview.jpeg
 */
export default function Dashboard() {
  const [mode, setMode] = useState('infinityCore'); // 'infinityCore' | 'reference'
  const [leftCardStyle, setLeftCardStyle] = useState('editorial'); // 'editorial' | 'split'
  const [activeSlide, setActiveSlide] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Active dataset
  const activeData = dashboardDatasets[mode] || dashboardDatasets.infinityCore;
  const isReference = mode === 'reference';

  // Toggle fullscreen mode
  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen?.().catch(() => {});
      setIsFullscreen(true);
    } else {
      document.exitFullscreen?.().catch(() => {});
      setIsFullscreen(false);
    }
  };

  // Toggle dataset mode
  const toggleMode = () => {
    setMode((prev) => (prev === 'infinityCore' ? 'reference' : 'infinityCore'));
  };

  // Toggle left card layout style (Editorial large card vs split two-card)
  const toggleLeftCardStyle = () => {
    setLeftCardStyle((prev) => (prev === 'editorial' ? 'split' : 'editorial'));
  };

  // Background image based on active slide
  const getBackgroundImage = () => {
    if (activeSlide === 2) return '/assets/property-wide.jpeg';
    if (activeSlide === 3) return '/assets/property-hero.jpeg';
    return '/assets/property-hero.jpeg';
  };

  return (
    <div className="w-screen h-screen overflow-hidden bg-[#7F7A78] p-2 sm:p-4 md:p-6 lg:p-7 flex items-center justify-center select-none font-sans">
      
      {/* SVG Liquid / Refraction Filter from user prompt */}
      <svg width="0" height="0" style={{ position: 'absolute', pointerEvents: 'none' }}>
        <filter id="lg">
          <feTurbulence type="fractalNoise" baseFrequency="0.012" numOctaves="2" seed="2" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="12" xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </svg>

      {/* Outer Device / TV Tablet Frame matching reference bezel */}
      <div className="relative w-full h-full max-w-[1680px] max-h-[1020px] aspect-[16/10] bg-[#8C8785] rounded-[38px] overflow-hidden shadow-2xl border-[10px] md:border-[14px] border-[#8C8785] flex flex-col justify-between">
        
        {/* Full-bleed Villa Background */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <img
            src={getBackgroundImage()}
            alt="Villa Architecture"
            className="w-full h-full object-cover object-center transition-all duration-700 brightness-[0.96] contrast-[1.02]"
          />
          {/* Subtle soft gradient overlay so sky typography has contrast while house remains radiant */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/15 pointer-events-none" />
        </div>

        {/* Center Top Sky Title directly on sky above villa roof */}
        <div className="absolute top-[2.2%] sm:top-[2.8%] left-1/2 -translate-x-1/2 text-center pointer-events-none z-10 w-full px-4 max-w-xl">
          <h1 className="text-2xl sm:text-3xl md:text-[34px] font-normal tracking-wide text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
            {activeData.propertyTitle}
          </h1>
          <p className="text-[11px] sm:text-xs md:text-[12.5px] text-white/90 tracking-wider font-light mt-0.5 drop-shadow-[0_1px_6px_rgba(0,0,0,0.5)]">
            {activeData.propertySubtitle}
          </p>
          <p className="text-[10px] sm:text-[11px] text-white/75 tracking-wider font-light mt-0.5 drop-shadow-[0_1px_4px_rgba(0,0,0,0.5)]">
            {activeData.propertyId}
          </p>

          {/* Compact Top KPI Strip for Infinity Core mode */}
          {!isReference && (
            <div className="mt-1.5 flex justify-center">
              <TopKPIStrip isVisible={true} />
            </div>
          )}
        </div>

        {/* Slide Indicator Dots directly on deck below villa */}
        <div className="absolute top-[56%] sm:top-[57%] left-1/2 -translate-x-1/2 pointer-events-auto z-10">
          <DeckSlideSelector
            activeSlide={activeSlide}
            onSelectSlide={setActiveSlide}
          />
        </div>

        {/* MAIN CARDS CANVAS (1:1 spatial arrangement) */}
        <div className="relative z-20 flex-1 w-full p-4 sm:p-5 md:p-6 lg:p-7 grid grid-cols-12 gap-4 lg:gap-6 min-h-0">
          
          {/* ================= LEFT COLUMN ================= */}
          <div className="col-span-12 md:col-span-4 lg:col-span-4 flex flex-col justify-between gap-3.5 relative">
            {leftCardStyle === 'editorial' ? (
              /* The Large Editorial Glass Card from glass.html & Prompt Section 29 */
              <div className="h-full flex flex-col justify-between relative">
                <EditorialClientCard
                  data={activeData.editorialClient}
                  onAction={() => setIsModalOpen(true)}
                />
                {/* Switcher Pill top-left */}
                <button
                  onClick={toggleLeftCardStyle}
                  title="Toggle between Single Large Card & Split Two Cards"
                  className="absolute top-3.5 left-3.5 text-[9px] font-medium text-neutral-600 bg-white/75 hover:bg-white px-2 py-0.5 rounded-full border border-white/90 shadow-2xs cursor-pointer z-20 transition-all flex items-center gap-1"
                >
                  <span>Split View</span>
                </button>
              </div>
            ) : (
              /* The Split 2-card Reference Layout */
              <div className="h-full flex flex-col justify-between gap-3.5 relative">
                <TrueBorrowerCard
                  data={activeData.borrower}
                  onAction={() => setIsModalOpen(true)}
                />
                <RiskRatingCard
                  data={activeData.riskRating}
                  onAction={() => setIsModalOpen(true)}
                />
                {/* Switcher Pill top-left of top card */}
                <button
                  onClick={toggleLeftCardStyle}
                  title="Toggle to Large Editorial Card"
                  className="absolute top-3.5 left-3.5 text-[9px] font-medium text-neutral-600 bg-white/75 hover:bg-white px-2 py-0.5 rounded-full border border-white/90 shadow-2xs cursor-pointer z-20 transition-all flex items-center gap-1"
                >
                  <span>Large View</span>
                </button>
              </div>
            )}
          </div>

          {/* ================= CENTER COLUMN ================= */}
          <div className="col-span-12 md:col-span-4 lg:col-span-4 flex flex-col justify-end">
            {/* Card 3: Bottom-Center - Loan Status with Waveform Barcode */}
            <LoanStatusCard
              data={activeData.loanStatus}
              onAction={() => setIsModalOpen(true)}
            />
          </div>

          {/* ================= RIGHT COLUMN ================= */}
          <div className="col-span-12 md:col-span-4 lg:col-span-4 flex flex-col justify-between gap-3.5">
            {/* Card 4: Top-Right - LTV Circular Donut Gauge */}
            <LTVCard
              data={activeData.ltv}
              onAction={() => setIsModalOpen(true)}
            />

            {/* Card 5: Bottom-Right - DSCR Progress Bar */}
            <DSCRCard
              data={activeData.dscr}
              onAction={() => setIsModalOpen(true)}
            />
          </div>

        </div>

        {/* ================= BOTTOM DOCK ================= */}
        <ReferenceDock
          mode={mode}
          onToggleMode={toggleMode}
          onOpenDetails={() => setIsModalOpen(true)}
          isFullscreen={isFullscreen}
          onToggleFullscreen={toggleFullscreen}
          dockData={activeData.dock}
        />

      </div>

      {/* Real Estate Analytics & Leads Breakdown Modal */}
      <RealEstateDetailModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

    </div>
  );
}
