import React from 'react';
import GlassCardWrapper from './GlassCardWrapper';

/**
 * Top-Right Card - LTV with Circular Donut Gauge
 * 1:1 replica of the top-right card from reference-preview.jpeg
 */
export default function LTVCard({ data, onAction }) {
  const {
    title = "LTV",
    debtService = "$1,442,050",
    net = "$3,327,801",
    threshold = "75%",
    current = "41.4%",
    initial = "61.5%",
    market = "39.3%",
  } = data || {};

  return (
    <GlassCardWrapper onActionClick={onAction} className="w-full">
      {/* Title */}
      <h3 className="text-center text-[13px] font-medium text-neutral-800 tracking-wide">
        {title}
      </h3>

      {/* Header Stats (pr-5 to clear corner action button) */}
      <div className="flex items-center justify-between text-[8.5px] text-neutral-400 mt-1 px-1 pr-5">
        <div>
          <span>Debt Service</span>
          <span className="block text-[11px] font-semibold text-neutral-800">
            {debtService}
          </span>
        </div>
        <div className="text-right">
          <span>Net</span>
          <span className="block text-[11px] font-semibold text-neutral-800">
            {net}
          </span>
        </div>
      </div>

      {/* Circular Donut Gauge */}
      <div className="relative flex items-center justify-center my-2">
        <svg width={134} height={134} className="rotate-[-90deg]">
          <circle
            cx={67}
            cy={67}
            r={52}
            stroke="#D6CDBF"
            strokeWidth={13}
            fill="none"
          />
          <circle
            cx={67}
            cy={67}
            r={52}
            stroke="#F8DB68"
            strokeWidth={13}
            strokeLinecap="round"
            fill="none"
            strokeDasharray={326.7}
            strokeDashoffset={130}
          />
        </svg>

        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
          <span className="text-[9px] text-neutral-500">Portfolio Threshold</span>
          <span className="text-lg font-bold text-neutral-800 leading-tight">
            {threshold}
          </span>
        </div>
      </div>

      {/* Center 41.4% Current */}
      <div className="text-center">
        <div className="text-2xl font-bold text-neutral-800 leading-none">
          {current}
        </div>
        <span className="text-[9.5px] text-neutral-400">Current</span>
      </div>

      {/* Comparison Footer */}
      <div className="flex items-center justify-between text-[9.5px] text-neutral-500 px-1 pt-1.5 border-t border-neutral-300/40 mt-1">
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
