import React from 'react';
import GlassCardWrapper from './GlassCardWrapper';

/**
 * Bottom-Right Card - DSCR with Threshold Progress Bar
 * 1:1 replica of the bottom-right card from reference-preview.jpeg
 */
export default function DSCRCard({ data, onAction }) {
  const {
    title = "DSCR",
    auxiliaryThreshold = "1.25",
    progressWidth = "40%",
    current = "2.31",
    initial = "1.94",
    market = "2.51",
  } = data || {};

  return (
    <GlassCardWrapper onActionClick={onAction} className="w-full">
      {/* Title */}
      <h3 className="text-center text-[13px] font-medium text-neutral-800 tracking-wide">
        {title}
      </h3>

      {/* Threshold Row (pr-5 to clear corner action button) */}
      <div className="my-2 pr-5">
        <div className="flex items-center justify-between text-[9.5px] text-neutral-500 mb-1 px-1">
          <span className="font-semibold text-neutral-800 text-[11px]">
            {auxiliaryThreshold}
          </span>
          <span className="text-neutral-400 text-[8.5px]">
            Auxiliary Threshold
          </span>
        </div>
        <div className="h-2.5 w-full bg-[#D6CDBF] rounded-xs overflow-hidden p-0.5">
          <div
            className="h-full bg-[#A8E4BA] rounded-xs transition-all duration-500"
            style={{ width: progressWidth }}
          />
        </div>
      </div>

      {/* Center 2.31 Current */}
      <div className="text-center my-1">
        <div className="text-2xl font-bold text-neutral-800 leading-none">
          {current}
        </div>
        <span className="text-[9.5px] text-neutral-400">Current</span>
      </div>

      {/* Comparison Footer */}
      <div className="flex items-center justify-between text-[9.5px] text-neutral-500 px-1 pt-1.5 border-t border-neutral-300/40">
        <div>
          <span className="text-neutral-400 text-[8.5px] block">Initial</span>
          <span className="font-semibold text-neutral-700">{initial}</span>
        </div>
        <div className="text-right">
          <span className="text-neutral-400 text-[8.5px] block">Market</span>
          <span className="font-semibold text-neutral-700">{market}</span>
        </div>
      </div>
    </GlassCardWrapper>
  );
}
