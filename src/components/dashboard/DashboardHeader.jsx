import React, { useState, useEffect } from 'react';
import { Maximize2, Minimize2, Radio, Sparkles } from 'lucide-react';
import Badge from '../common/Badge';

export default function DashboardHeader({ companyData }) {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Live real-time clock updating every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Listen to fullscreen changes
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(Boolean(document.fullscreenElement));
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen?.().catch((err) => {
        console.error('Fullscreen request error:', err);
      });
    } else {
      document.exitFullscreen?.();
    }
  };

  const formattedDate = currentTime.toLocaleDateString('en-GB', {
    weekday: 'short',
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });

  const formattedTime = currentTime.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
  });

  return (
    <header className="w-full flex items-center justify-between px-6 py-3 z-30 shrink-0">
      {/* Brand Identity - Left */}
      <div className="flex items-center gap-3.5">
        <div className="relative flex items-center justify-center h-11 w-11 rounded-2xl bg-white/70 backdrop-blur-md border border-white/80 shadow-sm p-1">
          <img
            src={companyData.logoUrl}
            alt="Infinity Core Logo"
            className="h-full w-full object-contain rounded-xl drop-shadow-sm"
          />
        </div>
        <div className="flex flex-col justify-center">
          <div className="flex items-center gap-2">
            <h1 className="text-[17px] font-semibold tracking-tight text-luxury-charcoal leading-tight">
              {companyData.name}
            </h1>
            <span className="text-[11px] font-medium tracking-wide uppercase px-2 py-0.5 rounded-md bg-[#C5A059]/15 text-[#9E7C35] border border-[#C5A059]/25">
              {companyData.location}
            </span>
          </div>
          <p className="text-[11px] font-normal text-luxury-taupe tracking-wide">
            {companyData.tagline} • Executive Intelligence
          </p>
        </div>
      </div>

      {/* Center Breadcrumb / Context Pill */}
      <div className="hidden md:flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/75 shadow-xs text-xs text-luxury-charcoal-soft">
        <Sparkles className="w-3.5 h-3.5 text-luxury-gold" />
        <span className="font-medium text-luxury-charcoal">Dune Horizon Residence</span>
        <span className="text-luxury-taupe-light">•</span>
        <span className="text-luxury-taupe">Daily Sales & Activity Overview</span>
      </div>

      {/* Right Controls - Date, Clock, Live Indicator & Fullscreen */}
      <div className="flex items-center gap-3">
        {/* Live Pulse Indicator */}
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#4A7C59]/10 border border-[#4A7C59]/20">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4A7C59] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#4A7C59]"></span>
          </span>
          <span className="text-[11px] font-medium text-[#2E5E3B]">
            Live Feed
          </span>
        </div>

        {/* Real-time Clock Card */}
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/65 backdrop-blur-md border border-white/80 shadow-xs">
          <span className="text-xs font-medium text-luxury-taupe">
            {formattedDate}
          </span>
          <span className="text-luxury-taupe-lighter font-light">|</span>
          <span className="text-xs font-semibold tracking-wide text-luxury-charcoal tabular-nums">
            {formattedTime}
          </span>
        </div>

        {/* TV Fullscreen Button */}
        <button
          onClick={toggleFullscreen}
          title={isFullscreen ? 'Exit Fullscreen' : 'Enter TV Fullscreen Mode'}
          aria-label="Toggle Fullscreen"
          className="flex items-center justify-center h-8 w-8 rounded-xl bg-white/60 hover:bg-white/85 text-luxury-charcoal-soft hover:text-luxury-charcoal backdrop-blur-md border border-white/80 shadow-xs transition-all cursor-pointer active:scale-95"
        >
          {isFullscreen ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
        </button>
      </div>
    </header>
  );
}
