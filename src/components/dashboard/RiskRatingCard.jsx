import React from 'react';
import GlassCardWrapper from './GlassCardWrapper';

/**
 * Bottom-Left Card - Risk Rating & Activity Bars
 * 1:1 replica of the reference bottom-left card with 7 vertical bars (yellow highlights)
 */
export default function RiskRatingCard({ data, onAction }) {
  const {
    row1 = {
      label: "CoStar Risk Rating",
      value: "4 - Low",
      avg: "5",
      exposure: "1.3%, $437,522",
    },
    bars = [
      { height: 38, active: false },
      { height: 68, active: true },   // yellow highlight
      { height: 32, active: false },
      { height: 50, active: false },
      { height: 68, active: false },
      { height: 86, active: true },   // yellow highlight
      { height: 42, active: false },
    ],
    badge = "High risk ?",
    row2 = {
      label: "CoStar Risk Rating",
      value: "5 - Average",
      avg: "6",
      exposure: "3.2%, $1,153,102",
    },
  } = data || {};

  return (
    <GlassCardWrapper onActionClick={onAction} className="w-full flex-1 flex flex-col justify-between">
      {/* Row 1: Upper Metrics (pr-6 for corner action button clearance) */}
      <div className="grid grid-cols-3 gap-2 items-center text-neutral-800 pr-5">
        <div>
          <span className="block text-[8.5px] text-neutral-400 leading-tight">
            {row1.label}
          </span>
          <span className="text-[12px] font-semibold text-neutral-800 leading-tight">
            {row1.value}
          </span>
        </div>
        <div className="text-center">
          <span className="text-xl font-bold text-neutral-800 leading-none">
            {row1.avg}
          </span>
          <span className="block text-[8.5px] text-neutral-400">Average</span>
        </div>
        <div className="text-right">
          <span className="block text-[8.5px] text-neutral-400 leading-tight">
            Exposure
          </span>
          <span className="text-[11px] font-semibold text-neutral-800 leading-tight">
            {row1.exposure}
          </span>
        </div>
      </div>

      {/* Row 2: 7 Vertical Bars + High Risk Pill */}
      <div className="my-auto py-3 flex items-end justify-between px-2">
        <div className="flex items-end gap-3 h-24 w-[70%] pb-1">
          {bars.map((bar, idx) => (
            <div
              key={idx}
              className="flex-1 rounded-xs transition-all duration-300"
              style={{
                height: `${bar.height}px`,
                backgroundColor: bar.active ? '#F8DB68' : '#D5CCC0',
                boxShadow: bar.active ? '0 2px 10px rgba(248, 219, 104, 0.55)' : 'none',
              }}
            />
          ))}
        </div>

        <div className="flex flex-col items-end justify-center pb-2">
          <span className="text-[9.5px] font-medium text-neutral-700 bg-white/85 px-2.5 py-1 rounded-full border border-white/90 shadow-2xs flex items-center gap-1">
            {badge}
          </span>
        </div>
      </div>

      {/* Row 3: Lower Metrics */}
      <div className="grid grid-cols-3 gap-2 items-center text-neutral-800 pt-2 border-t border-neutral-300/40">
        <div>
          <span className="block text-[8.5px] text-neutral-400 leading-tight">
            {row2.label}
          </span>
          <span className="text-[12px] font-semibold text-neutral-800 leading-tight">
            {row2.value}
          </span>
        </div>
        <div className="text-center">
          <span className="text-xl font-bold text-neutral-800 leading-none">
            {row2.avg}
          </span>
          <span className="block text-[8.5px] text-neutral-400">Average</span>
        </div>
        <div className="text-right pr-2">
          <span className="block text-[8.5px] text-neutral-400 leading-tight">
            Exposure
          </span>
          <span className="text-[11px] font-semibold text-neutral-800 leading-tight">
            {row2.exposure}
          </span>
        </div>
      </div>
    </GlassCardWrapper>
  );
}
