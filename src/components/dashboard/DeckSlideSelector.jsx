import React from 'react';
import { Home } from 'lucide-react';

/**
 * Deck Slide Selector Pill
 * 1:1 replica of the floating selector resting on the villa deck
 */
export default function DeckSlideSelector({ activeSlide, onSelectSlide }) {
  return (
    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/80 backdrop-blur-md border border-white/90 shadow-[0_4px_16px_rgba(0,0,0,0.15)] transition-all">
      <button
        onClick={() => onSelectSlide(1)}
        title="Main Villa Facade"
        className={`flex items-center justify-center h-5 w-5 rounded-full text-[10px] transition-all cursor-pointer ${
          activeSlide === 1
            ? 'bg-neutral-800 text-white font-medium shadow-xs'
            : 'text-neutral-600 hover:bg-white/90'
        }`}
      >
        <Home className="w-2.5 h-2.5" />
      </button>

      <button
        onClick={() => onSelectSlide(2)}
        title="Panoramic Sunset Deck"
        className={`flex items-center justify-center h-5 w-5 rounded-full text-[10px] transition-all cursor-pointer ${
          activeSlide === 2
            ? 'bg-neutral-800 text-white font-medium shadow-xs'
            : 'text-neutral-600 hover:bg-white/90'
        }`}
      >
        1
      </button>

      <button
        onClick={() => onSelectSlide(3)}
        title="Architecture Details"
        className={`flex items-center justify-center h-5 w-5 rounded-full text-[10px] transition-all cursor-pointer ${
          activeSlide === 3
            ? 'bg-neutral-800 text-white font-medium shadow-xs'
            : 'text-neutral-600 hover:bg-white/90'
        }`}
      >
        2
      </button>
    </div>
  );
}
