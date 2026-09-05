import React, { useState } from 'react';
import { Tv, Sparkles, RefreshCw, ChevronLeft, ChevronRight, SlidersHorizontal } from 'lucide-react';

export default function DashboardFooter({ companyData, activeTab, onTabChange }) {
  const tabs = [
    { id: 'overview', label: 'Executive Overview', badge: 'Live' },
    { id: 'site-visits', label: 'Site Visits', badge: '12' },
    { id: 'interactions', label: 'Client CRM', badge: '68' },
    { id: 'portfolio', label: 'Property Portfolio', badge: '3 Devs' },
  ];

  return (
    <footer className="w-full px-6 py-2.5 z-30 shrink-0">
      <div className="glass-dock w-full rounded-full px-5 py-2 flex items-center justify-between shadow-dock">
        {/* Left: Brand / Company Tag */}
        <div className="flex items-center gap-2.5">
          <div className="h-6 w-6 rounded-full bg-white/90 border border-white p-0.5 shadow-2xs flex items-center justify-center">
            <img
              src={companyData.logoUrl}
              alt="Infinity Core"
              className="h-full w-full object-contain"
            />
          </div>
          <span className="text-xs font-semibold text-luxury-charcoal tracking-tight">
            {companyData.name}
          </span>
          <span className="text-[10px] text-luxury-taupe-light font-normal hidden sm:inline">
            • Bhopal Executive Suite
          </span>
        </div>

        {/* Center: View Switcher Tabs (Reference-inspired dock pill selector) */}
        <div className="flex items-center gap-1 bg-black/[0.04] p-1 rounded-full border border-white/60">
          <button className="h-6 w-6 rounded-full flex items-center justify-center text-luxury-taupe hover:text-luxury-charcoal transition-all">
            <ChevronLeft className="w-3 h-3" />
          </button>

          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => onTabChange(tab.id)}
                className={`
                  flex items-center gap-1.5 px-3 py-1 rounded-full text-xs transition-all font-medium
                  ${
                    isActive
                      ? 'bg-white text-luxury-charcoal shadow-xs border border-white/80'
                      : 'text-luxury-taupe hover:text-luxury-charcoal'
                  }
                `}
              >
                <span>{tab.label}</span>
                {tab.badge && (
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                      isActive
                        ? 'bg-[#C5A059]/20 text-[#9E7C35] font-semibold'
                        : 'bg-black/[0.05] text-luxury-taupe'
                    }`}
                  >
                    {tab.badge}
                  </span>
                )}
              </button>
            );
          })}

          <button className="h-6 w-6 rounded-full flex items-center justify-center text-luxury-taupe hover:text-luxury-charcoal transition-all">
            <ChevronRight className="w-3 h-3" />
          </button>
        </div>

        {/* Right: Telemetry & TV Resolution status */}
        <div className="flex items-center gap-3 text-xs text-luxury-taupe">
          <div className="hidden lg:flex items-center gap-1.5 text-[11px]">
            <Tv className="w-3.5 h-3.5 text-luxury-gold" />
            <span className="text-luxury-charcoal-soft font-medium">1080p Ultra-Wide TV Canvas</span>
          </div>
          <span className="text-luxury-taupe-lighter hidden lg:inline">•</span>
          <div className="flex items-center gap-1 text-[11px]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4A7C59]"></span>
            <span>Synced 01:42 PM</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
