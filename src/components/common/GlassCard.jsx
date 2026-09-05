import React from 'react';
import { ArrowUpRight } from 'lucide-react';

/**
 * GlassCard - Warm frosted beige glass container matching the reference screenshot
 */
export default function GlassCard({
  children,
  className = '',
  variant = 'default',
  showPin = true,
  onPinClick,
}) {
  return (
    <div
      className={`
        relative
        bg-[#ede4d8]/82
        backdrop-blur-xl
        border border-white/70
        shadow-[0_16px_36px_-8px_rgba(50,35,20,0.18),inset_0_1px_1.5px_rgba(255,255,255,0.85)]
        rounded-[32px]
        p-5 lg:p-5.5
        transition-all duration-300
        ${className}
      `}
    >
      {/* Top right reference pin/action circular button */}
      {showPin && (
        <button
          onClick={onPinClick}
          aria-label="Card details"
          className="absolute top-4 right-4 h-5 w-5 rounded-full bg-neutral-800/40 hover:bg-neutral-800/60 text-white/90 flex items-center justify-center transition-all cursor-pointer z-10"
        >
          <ArrowUpRight className="w-2.5 h-2.5 stroke-[2.5]" />
        </button>
      )}
      {children}
    </div>
  );
}

