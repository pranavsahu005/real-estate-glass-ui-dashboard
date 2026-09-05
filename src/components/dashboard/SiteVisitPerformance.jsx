import React from 'react';
import { CheckCircle2, CalendarCheck, Clock, Users, ArrowRight } from 'lucide-react';
import GlassCard from '../common/GlassCard';

export default function SiteVisitPerformance({ performanceData }) {
  return (
    <GlassCard className="flex flex-col justify-between p-4.5 rounded-[24px] h-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-luxury-taupe">
            Site Visit Performance
          </span>
          <span className="text-[10.5px] px-2 py-0.5 rounded-full bg-[#4A7C59]/15 text-[#2E5E3B] font-medium">
            8/12 Completed Today
          </span>
        </div>
        <div className="flex items-center gap-1 text-[11px] text-luxury-taupe font-medium">
          <span>Target: 100%</span>
        </div>
      </div>

      {/* Progress Bars */}
      <div className="space-y-2.5 my-1">
        {performanceData.map((item) => (
          <div key={item.status} className="space-y-1">
            <div className="flex items-center justify-between text-[11.5px]">
              <span className="font-medium text-luxury-charcoal-soft">
                {item.status}
              </span>
              <div className="flex items-center gap-2">
                <span className="text-luxury-taupe text-[11px]">
                  {item.count} of {item.target}
                </span>
                <span className="font-semibold text-luxury-charcoal text-[11px] w-7 text-right">
                  {item.percentage}%
                </span>
              </div>
            </div>

            {/* Elegant thin progress bar */}
            <div className="h-1.5 w-full bg-black/[0.05] rounded-full overflow-hidden p-[1px] border border-white/60">
              <div
                className="h-full rounded-full transition-all duration-500 ease-out"
                style={{
                  width: `${item.percentage}%`,
                  backgroundColor: item.color,
                }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Summary Info */}
      <div className="flex items-center justify-between pt-2 mt-1 border-t border-black/[0.04] text-[11px]">
        <span className="text-luxury-taupe">
          Next escort: <strong className="text-luxury-charcoal font-medium">02:30 PM (Green Glades)</strong>
        </span>
        <span className="text-[#3B6E47] font-semibold flex items-center gap-1">
          <CheckCircle2 className="w-3 h-3" />
          On Track
        </span>
      </div>
    </GlassCard>
  );
}
