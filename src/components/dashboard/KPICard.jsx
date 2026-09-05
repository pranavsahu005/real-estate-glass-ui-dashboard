import React from 'react';
import { TrendingUp, Users, MessageSquareText, PhoneCall, MapPinCheck, ArrowUpRight } from 'lucide-react';
import GlassCard from '../common/GlassCard';

const iconMap = {
  Users: Users,
  MessageSquareText: MessageSquareText,
  PhoneCall: PhoneCall,
  MapPinCheck: MapPinCheck,
};

export default function KPICard({ metric }) {
  const IconComponent = iconMap[metric.icon] || TrendingUp;

  return (
    <GlassCard
      className="relative flex flex-col justify-between p-4.5 rounded-[22px] overflow-hidden"
      hoverEffect={true}
    >
      {/* Top row: Metric label & icon pill */}
      <div className="flex items-center justify-between mb-2">
        <span className="text-[12.5px] font-medium tracking-normal text-luxury-taupe">
          {metric.title}
        </span>
        <div className="flex items-center justify-center w-7 h-7 rounded-full bg-white/75 border border-white/90 shadow-xs text-luxury-gold">
          <IconComponent className="w-3.5 h-3.5 stroke-[1.75]" />
        </div>
      </div>

      {/* Center row: Big KPI Value */}
      <div className="my-1">
        <div className="text-3xl font-semibold tracking-tight text-luxury-charcoal leading-none tabular-nums">
          {metric.value}
        </div>
      </div>

      {/* Bottom row: Status badge & contextual text */}
      <div className="flex items-center justify-between mt-2 pt-2 border-t border-black/[0.04]">
        <div className="flex items-center gap-1.5">
          {metric.changeType === 'positive' && (
            <span className="inline-flex items-center gap-0.5 text-[11px] font-semibold text-[#3B6E47] bg-[#4A7C59]/15 px-2 py-0.5 rounded-md border border-[#4A7C59]/20">
              <ArrowUpRight className="w-3 h-3 stroke-[2.5]" />
              {metric.change}
            </span>
          )}
          {metric.changeType === 'neutral' && (
            <span className="inline-flex items-center text-[11px] font-medium text-luxury-charcoal bg-black/[0.05] px-2 py-0.5 rounded-md border border-black/[0.05]">
              {metric.change}
            </span>
          )}
        </div>
        <span className="text-[11px] text-luxury-taupe-light font-normal truncate max-w-[120px]">
          {metric.subtitle}
        </span>
      </div>
    </GlassCard>
  );
}
