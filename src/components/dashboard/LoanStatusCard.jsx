import React from 'react';
import GlassCardWrapper from './GlassCardWrapper';
import { barcodeTicks } from '../../data/dashboardData';

/**
 * Bottom-Center Card - Loan Status with Waveform Barcode
 * 1:1 replica of the center-bottom card from reference-preview.jpeg
 */
export default function LoanStatusCard({ data, onAction }) {
  const {
    title = "Loan Status",
    metrics = [
      { label: "DP MIN", value: "322,471" },
      { label: "NC LOW", value: "179.49" },
      { label: "LTV", value: "41.4%" },
      { label: "DEBT YIELD", value: "9.6%" },
    ],
  } = data || {};

  return (
    <GlassCardWrapper onActionClick={onAction} className="w-full">
      {/* Title */}
      <h3 className="text-center text-[12.5px] font-medium text-neutral-800 tracking-wide mb-3">
        {title}
      </h3>

      {/* 4-column metric grid */}
      <div className="grid grid-cols-4 gap-2 text-center mb-3">
        {metrics.map((m, idx) => (
          <div key={idx}>
            <span className="block text-[8.5px] text-neutral-400 uppercase tracking-tight">
              {m.label}
            </span>
            <span className="text-[12.5px] font-semibold text-neutral-800 tabular-nums">
              {m.value}
            </span>
          </div>
        ))}
      </div>

      {/* Barcode frequency waveform lines */}
      <div className="flex items-center justify-between h-7 px-1">
        {barcodeTicks.map((h, i) => (
          <div
            key={i}
            className="w-[1.5px] bg-neutral-600 rounded-full transition-all duration-300"
            style={{
              height: `${h}px`,
              opacity: 0.22 + (h / 32) * 0.52,
            }}
          />
        ))}
      </div>
    </GlassCardWrapper>
  );
}
