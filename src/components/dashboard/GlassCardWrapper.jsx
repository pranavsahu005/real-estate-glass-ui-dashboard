import React from 'react';
import { ArrowUpRight } from 'lucide-react';

/**
 * Universal Luxury Frosted Translucent Glass Card Container
 * Built directly from glass.html specifications:
 * - linear-gradient(145deg, rgba(255,255,255,.76), rgba(247,242,232,.58))
 * - backdrop-filter: blur(20px) saturate(120%)
 * - border: 1px solid rgba(255,255,255,.85)
 * - radial-gradient reflection sheen
 * Lets the background villa show through beautifully without being hidden!
 */
export default function GlassCardWrapper({
  children,
  className = '',
  onActionClick,
  actionAriaLabel = 'Card action',
}) {
  return (
    <div
      className={`relative glass-card-editorial glass-reflection rounded-[30px] sm:rounded-[34px] p-4 sm:p-5 select-none transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl hover:border-white/50 hover:brightness-105 cursor-pointer ${className}`}
    >
      {/* Top right circular action button */}
      <button
        onClick={onActionClick}
        aria-label={actionAriaLabel}
        className="absolute top-3.5 right-3.5 sm:top-4 sm:right-4 h-5.5 w-5.5 rounded-full bg-[#4E4945]/85 hover:bg-[#383431] active:scale-95 text-white flex items-center justify-center transition-all cursor-pointer shadow-xs z-10"
      >
        <ArrowUpRight className="w-2.5 h-2.5 stroke-[2.5]" />
      </button>

      {/* Relative wrapper so content sits cleanly above pseudo-element reflection */}
      <div className="relative z-2 h-full flex flex-col justify-between">
        {children}
      </div>
    </div>
  );
}
