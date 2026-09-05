import React from 'react';
import { topKPIMetrics } from '../../data/dashboardData';
import { Users, MessageSquare, PhoneCall, MapPin } from 'lucide-react';

const icons = [Users, MessageSquare, PhoneCall, MapPin];

/**
 * Top KPI Strip - Compact 4-pill strip centered under the sky title
 * Engineered with constrained max-width so it never collides with side cards
 */
export default function TopKPIStrip({ isVisible = true }) {
  if (!isVisible) return null;

  return (
    <div className="flex items-center justify-center gap-1.5 sm:gap-2 max-w-[560px] mx-auto pointer-events-auto">
      {topKPIMetrics.map((kpi, idx) => {
        const Icon = icons[idx] || Users;
        return (
          <div
            key={kpi.id}
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#EAE2D7] border border-white/80 shadow-[0_6px_16px_rgba(40,30,20,0.18),inset_0_1px_1px_rgba(255,255,255,0.9)] backdrop-blur-xs transition-all hover:scale-105"
          >
            <div className="h-4.5 w-4.5 rounded-full bg-white/90 flex items-center justify-center text-neutral-700 shadow-3xs shrink-0">
              <Icon className="w-2.5 h-2.5 text-[#A8833C]" />
            </div>
            <div className="flex items-baseline gap-1 text-left">
              <span className="text-[10px] font-semibold text-neutral-800 leading-none">
                {kpi.value}
              </span>
              <span className="text-[8px] text-neutral-500 font-normal leading-none hidden xl:inline">
                {kpi.title.split(' ')[0]}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
