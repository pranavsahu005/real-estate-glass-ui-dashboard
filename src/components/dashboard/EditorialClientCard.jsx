import React from 'react';
import GlassCardWrapper from './GlassCardWrapper';

/**
 * Large Editorial Client Intelligence Glass Card
 * 1:1 implementation of glass.html and Prompt Section 29
 * Structure:
 * - Card Header: Title ("Client Intelligence") + circular menu button
 * - Client row: Avatar + Name ("Rahul Sharma") + Average metric ("2.4")
 * - Central metric: "Engagement Score" / "86%" / "High Priority"
 * - Mini bar chart: M, T, W, T, F, S with golden champagne bars & grow animation
 * - Bottom metrics: 3 columns (Interactions 18, Follow-ups 6, Conversion 41.2%)
 */
export default function EditorialClientCard({ data, onAction }) {
  const {
    cardTitle = "Client Intelligence",
    name = "Rahul Sharma",
    role = "Premium Client",
    averageLabel = "Average Visit",
    averageValue = "2.4",
    centralLabel = "Engagement Score",
    centralValue = "86%",
    centralSubtitle = "High Priority Portfolio Client",
    bars = [
      { day: "M", height: "42%", active: false },
      { day: "T", height: "62%", active: true },
      { day: "W", height: "47%", active: false },
      { day: "T", height: "73%", active: false },
      { day: "F", height: "54%", active: false },
      { day: "S", height: "86%", active: true },
    ],
    bottomMetrics = [
      { label: "Interactions", value: "18" },
      { label: "Follow-ups", value: "6" },
      { label: "Conversion", value: "41.2%" },
    ],
    avatarUrl = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80",
    initials = "RS",
  } = data || {};

  return (
    <GlassCardWrapper onActionClick={onAction} className="w-full h-full flex flex-col justify-between">
      {/* 1. Header */}
      <div className="relative flex items-center justify-center mb-2">
        <h2 className="text-[14px] sm:text-[15px] font-semibold tracking-tight text-[#38342E]">
          {cardTitle}
        </h2>
      </div>

      {/* 2. Client & Average Section */}
      <div className="grid grid-cols-2 items-center py-2.5 border-b border-[#5B4E3C]/10">
        <div className="flex items-center gap-2.5">
          <div className="w-10 h-10 rounded-full overflow-hidden bg-gradient-to-br from-[#D9D1C4] to-[#AAA092] flex items-center justify-center text-white text-xs font-semibold shadow-[inset_0_1px_2px_rgba(255,255,255,0.75),0_4px_10px_rgba(72,60,45,0.15)] border border-white/80 shrink-0">
            {avatarUrl ? (
              <img
                src={avatarUrl}
                alt={name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
            ) : (
              <span>{initials}</span>
            )}
          </div>
          <div>
            <span className="block text-[8.5px] text-[#8B8377] tracking-wide uppercase">
              {role}
            </span>
            <h3 className="text-[12.5px] font-semibold text-[#2E2A24] tracking-tight leading-tight">
              {name}
            </h3>
          </div>
        </div>

        <div className="text-right pr-6">
          <span className="block text-[8.5px] text-[#8B8377] uppercase tracking-wide">
            {averageLabel}
          </span>
          <strong className="text-[22px] font-semibold text-[#2E2A24] leading-none tracking-tight">
            {averageValue}
          </strong>
        </div>
      </div>

      {/* 3. Center Main Metric */}
      <div className="text-center py-3">
        <span className="block text-[9.5px] text-[#8B8377] uppercase tracking-wider mb-1">
          {centralLabel}
        </span>
        <div className="text-[40px] sm:text-[44px] font-semibold text-[#38332B] leading-none tracking-tight">
          {centralValue}
        </div>
        <div className="text-[9px] text-[#91887B] mt-1 tracking-wide">
          {centralSubtitle}
        </div>
      </div>

      {/* 4. Mini Bar Chart (M, T, W, T, F, S) */}
      <div className="h-[95px] sm:h-[110px] flex items-end justify-between gap-3 px-3 pb-2 border-b border-[#5B4E3C]/10">
        {bars.map((b, idx) => (
          <div key={idx} className="h-full flex-1 flex flex-col items-center justify-end">
            <div
              className="w-3.5 sm:w-4 rounded-t-xs transition-all duration-500 animate-bar-grow"
              style={{
                height: b.height,
                background: b.active
                  ? 'linear-gradient(180deg, #F8DB68, #E2B639)'
                  : 'linear-gradient(180deg, #D9BF77, #C5A75F)',
                boxShadow: b.active
                  ? '0 4px 12px rgba(248, 219, 104, 0.45)'
                  : '0 3px 8px rgba(166,136,69,0.18)',
                animationDelay: `${idx * 0.08}s`,
              }}
            />
            <span className="text-[8.5px] text-[#938A7E] font-medium mt-1.5">
              {b.day}
            </span>
          </div>
        ))}
      </div>

      {/* 5. Bottom Metrics Row (3 Columns) */}
      <div className="grid grid-cols-3 pt-2.5">
        {bottomMetrics.map((m, idx) => (
          <div
            key={idx}
            className={`text-center ${idx > 0 ? 'border-l border-[#5B4E3C]/10' : ''}`}
          >
            <span className="block text-[8.5px] text-[#91887C] uppercase tracking-tight">
              {m.label}
            </span>
            <strong className="block text-[15px] sm:text-[17px] font-semibold text-[#2E2A24] tracking-tight mt-0.5">
              {m.value}
            </strong>
          </div>
        ))}
      </div>
    </GlassCardWrapper>
  );
}
