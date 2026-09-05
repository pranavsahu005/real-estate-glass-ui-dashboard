import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { PieChart as PieIcon, ArrowUpRight } from 'lucide-react';
import GlassCard from '../common/GlassCard';

export default function ClientDistribution({ data }) {
  const totalCount = data.reduce((acc, curr) => acc + curr.count, 0);

  const CustomPieTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const item = payload[0];
      return (
        <div className="bg-white/95 backdrop-blur-md border border-white/95 px-3 py-1.5 rounded-xl shadow-glass text-xs">
          <p className="font-semibold text-luxury-charcoal">{item.name}</p>
          <p className="text-luxury-taupe text-[11px]">
            {item.value}% ({item.payload.count} clients)
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <GlassCard className="flex flex-col justify-between p-4.5 rounded-[24px] h-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-1">
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-luxury-taupe">
            Lead Distribution
          </span>
          <span className="text-[10.5px] px-2 py-0.5 rounded-full bg-[#C5A059]/15 text-[#9E7C35] font-medium">
            Active Pipeline
          </span>
        </div>
        <div className="flex items-center justify-center w-6 h-6 rounded-full bg-white/70 border border-white/80 shadow-2xs text-luxury-gold">
          <PieIcon className="w-3.5 h-3.5" />
        </div>
      </div>

      {/* Donut Chart with Center Metric */}
      <div className="relative w-full h-36 flex items-center justify-center my-0.5">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Tooltip content={<CustomPieTooltip />} />
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={46}
              outerRadius={64}
              paddingAngle={4}
              dataKey="value"
              stroke="rgba(255,255,255,0.7)"
              strokeWidth={1.5}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>

        {/* Center Label */}
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
          <span className="text-[10px] uppercase tracking-wider text-luxury-taupe font-medium">
            Total Leads
          </span>
          <span className="text-xl font-semibold text-luxury-charcoal leading-tight tabular-nums">
            {totalCount}
          </span>
          <span className="text-[9.5px] text-[#3B6E47] font-medium flex items-center">
            +18% MoM
          </span>
        </div>
      </div>

      {/* Legend Grid */}
      <div className="grid grid-cols-3 gap-x-2 gap-y-1 pt-2 border-t border-black/[0.04] text-[10.5px]">
        {data.slice(0, 3).map((item) => (
          <div key={item.name} className="flex items-center gap-1.5">
            <span
              className="w-2 h-2 rounded-full shrink-0"
              style={{ backgroundColor: item.color }}
            />
            <span className="text-luxury-taupe truncate">{item.name}</span>
            <span className="font-semibold text-luxury-charcoal ml-auto">
              {item.value}%
            </span>
          </div>
        ))}
      </div>
    </GlassCard>
  );
}
