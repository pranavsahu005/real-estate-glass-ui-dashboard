import React from 'react';
import { Home } from 'lucide-react';

export default function PropertyHero({
  property,
  activeSlide = 1,
  onSlideChange,
}) {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      {/* 100% Crisp, High-Definition Villa Background - NO BLUR on the image! */}
      <img
        src={property.imageUrl}
        alt={property.title}
        className="w-full h-full object-cover object-center select-none"
        style={{
          imageRendering: '-webkit-optimize-contrast',
          filter: 'brightness(0.98) contrast(1.02)',
        }}
      />

      {/* Very faint vignette around screen edges to make white text on sky readable */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-black/30 pointer-events-none" />

      {/* Center Property Title & Subtitles directly over the sky above villa roof - EXACTLY like reference */}
      <div className="absolute top-[6.5%] left-1/2 -translate-x-1/2 text-center pointer-events-auto z-10 select-none">
        <h1 className="text-3xl lg:text-[34px] font-normal tracking-wide text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.45)]">
          Dune Dweller House
        </h1>
        <p className="text-xs lg:text-[13px] text-white/90 tracking-wider font-light drop-shadow-[0_1px_4px_rgba(0,0,0,0.4)] mt-1">
          Desert Wedge, Dune District, Bhopal Eco-Corridor
        </p>
        <p className="text-[11.5px] text-white/75 tracking-wider font-light drop-shadow-[0_1px_3px_rgba(0,0,0,0.4)] mt-0.5">
          Infinity Core ID: #INF-8029 Bhopal
        </p>
      </div>

      {/* Reference-identical slide selector pill directly below the villa on the deck */}
      <div className="absolute top-[57%] left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-auto z-10">
        <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/75 backdrop-blur-md border border-white/80 shadow-md">
          <button
            onClick={() => onSlideChange?.(1)}
            className={`flex items-center justify-center h-5 w-5 rounded-full text-[11px] transition-all ${
              activeSlide === 1
                ? 'bg-neutral-800 text-white font-medium'
                : 'text-neutral-600 hover:bg-white'
            }`}
          >
            <Home className="w-2.5 h-2.5" />
          </button>
          <button
            onClick={() => onSlideChange?.(2)}
            className={`flex items-center justify-center h-5 w-5 rounded-full text-[11px] transition-all ${
              activeSlide === 2
                ? 'bg-neutral-800 text-white font-medium'
                : 'text-neutral-600 hover:bg-white'
            }`}
          >
            1
          </button>
          <button
            onClick={() => onSlideChange?.(3)}
            className={`flex items-center justify-center h-5 w-5 rounded-full text-[11px] transition-all ${
              activeSlide === 3
                ? 'bg-neutral-800 text-white font-medium'
                : 'text-neutral-600 hover:bg-white'
            }`}
          >
            2
          </button>
        </div>
      </div>
    </div>
  );
}

