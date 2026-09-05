import React from 'react';
import { ChevronLeft, ChevronRight, Plus, Maximize2, Minimize2, Sparkles, Layers } from 'lucide-react';

/**
 * Bottom Floating Dock
 * 1:1 replica of the bottom rounded status bar from reference-preview.jpeg
 * with Infinity Core Bhopal branding & mode switching
 */
export default function ReferenceDock({
  mode = 'infinityCore',
  onToggleMode,
  onOpenDetails,
  isFullscreen,
  onToggleFullscreen,
  dockData,
}) {
  const isReference = mode === 'reference';

  return (
    <div className="relative z-30 pb-3 px-4 md:px-6 w-full flex items-center justify-between select-none">
      {/* Main Rounded Capsule */}
      <div className="flex-1 bg-[#EAE2D7] border border-white/85 shadow-[0_12px_28px_-6px_rgba(40,30,20,0.22),inset_0_1.5px_2px_rgba(255,255,255,0.9)] rounded-full px-4 sm:px-6 py-2.5 flex items-center justify-between">
        
        {/* Left: Brand with Logo */}
        <div className="flex items-center gap-2.5">
          <div className="h-6 w-6 rounded-full overflow-hidden flex items-center justify-center bg-white/80 p-0.5 shadow-2xs border border-white/90 shrink-0">
            <img
              src="/assets/company-logo.png"
              alt="Brand Logo"
              className="h-full w-full object-contain"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
          </div>
          <span className="text-xs font-semibold text-neutral-800 tracking-tight">
            {isReference ? 'CoStar Group' : 'INFINITY CORE BHOPAL'}
          </span>
        </div>

        {/* Center: Navigation Pill */}
        <div className="flex items-center gap-2 sm:gap-3 bg-white/80 px-3 sm:px-4 py-1 rounded-full border border-white shadow-2xs">
          <button
            title="Previous Stream"
            className="text-neutral-400 hover:text-neutral-800 transition-colors cursor-pointer"
          >
            <ChevronLeft className="w-3.5 h-3.5" />
          </button>
          <span className="text-[11px] sm:text-xs font-medium text-neutral-800">
            {dockData?.streamLabel || (isReference ? 'My Loans' : 'Executive Feed')}
          </span>
          <span className="text-[10px] font-semibold text-neutral-600 bg-white px-2 py-0.2 rounded-full border border-neutral-200 shadow-3xs">
            {dockData?.streamCount || (isReference ? '22' : '24')}
          </span>
          <button
            title="Next Stream"
            className="text-neutral-400 hover:text-neutral-800 transition-colors cursor-pointer"
          >
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Right Controls: Mode Toggle & Action */}
        <div className="flex items-center gap-2 sm:gap-3.5">
          {/* Mode Switcher */}
          <button
            onClick={onToggleMode}
            title="Switch Dashboard Mode"
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/70 hover:bg-white text-[11px] font-medium text-neutral-700 border border-white transition-all cursor-pointer shadow-3xs"
          >
            <Layers className="w-3 h-3 text-[#A8833C]" />
            <span className="hidden sm:inline">
              {isReference ? 'Switch to Infinity Core' : '1:1 Reference Mode'}
            </span>
          </button>

          {/* Quick Details / Real Estate Inspector */}
          <button
            onClick={onOpenDetails}
            className="flex items-center gap-1 text-[11px] sm:text-xs text-neutral-700 hover:text-neutral-900 transition-colors cursor-pointer font-medium"
          >
            <span>{isReference ? 'Add to scoring' : 'Analytics & Leads'}</span>
            <Plus className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Expand Fullscreen Button */}
      <button
        onClick={onToggleFullscreen}
        aria-label="Toggle Fullscreen"
        title={isFullscreen ? 'Exit Fullscreen' : 'Enter Fullscreen'}
        className="ml-3 h-10 w-10 rounded-2xl bg-[#EAE2D7] border border-white/85 shadow-[0_12px_24px_-4px_rgba(40,30,20,0.22),inset_0_1.5px_2px_rgba(255,255,255,0.9)] flex items-center justify-center text-neutral-700 hover:text-neutral-900 active:scale-95 transition-all cursor-pointer shrink-0"
      >
        {isFullscreen ? (
          <Minimize2 className="w-4 h-4" />
        ) : (
          <Maximize2 className="w-4 h-4" />
        )}
      </button>
    </div>
  );
}
