import React, { useState } from 'react';
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  BarChart,
  Bar,
} from 'recharts';
import { Activity, BarChart3, TrendingUp } from 'lucide-react';
import GlassCard from '../common/GlassCard';

export default function ClientActivityChart({ data }) {
  const [chartType, setChartType] = useState('bars'); // 'bars' or 'area'

  // Custom refined tooltip matching frosted glass
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white/90 backdrop-blur-md border border-white/95 px-3 py-2 rounded-xl shadow-glass text-xs">
          <p className="font-semibold text-luxury-charcoal mb-1">{label}</p>
          <div className="flex flex-col gap-0.5 text-[11px]">
            <span className="text-[#9E7C35] font-medium">
              Enquiries: {payload[0]?.value}
            </span>
            {payload[1] && (
              <span className="text-luxury-taupe">
                Calls: {payload[1]?.value}
              </span>
            )}
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <GlassCard className="flex flex-col justify-between p-4.5 rounded-[24px] h-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-2">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-luxury-taupe">
              Client Activity Trend
            </span>
            <span className="text-[10.5px] px-2 py-0.5 rounded-full bg-[#C5A059]/15 text-[#9E7C35] font-medium">
              Hourly Flow
            </span>
          </div>
          <p className="text-[11px] text-luxury-taupe-light mt-0.5">
            Peak engagement between 03:00 PM – 05:00 PM
          </p>
        </div>

        {/* View toggle (Bars vs Curve) */}
        <div className="flex items-center gap-1 p-0.5 rounded-lg bg-black/[0.04] border border-white/60">
          <button
            onClick={() => setChartType('bars')}
            className={`p-1 rounded-md transition-all ${
              chartType === 'bars'
                ? 'bg-white shadow-xs text-luxury-charcoal'
                : 'text-luxury-taupe hover:text-luxury-charcoal'
            }`}
            title="Column View"
          >
            <BarChart3 className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={() => setChartType('area')}
            className={`p-1 rounded-md transition-all ${
              chartType === 'area'
                ? 'bg-white shadow-xs text-luxury-charcoal'
                : 'text-luxury-taupe hover:text-luxury-charcoal'
            }`}
            title="Trendline View"
          >
            <Activity className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Chart Canvas */}
      <div className="w-full h-36 mt-1">
        <ResponsiveContainer width="100%" height="100%">
          {chartType === 'bars' ? (
            <BarChart data={data} margin={{ top: 8, right: 4, left: -24, bottom: 0 }}>
              <XAxis
                dataKey="time"
                axisLine={false}
                tickLine={false}
                tick={{ fill: '#8C857B', fontSize: 10, fontWeight: 500 }}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fill: '#8C857B', fontSize: 10 }}
                domain={[0, 20]}
              />
              <Tooltip content={<CustomTooltip />} />
              <Bar
                dataKey="enquiries"
                fill="#DFBE77"
                radius={[4, 4, 0, 0]}
                barSize={14}
              />
              <Bar
                dataKey="calls"
                fill="#C5A059"
                opacity={0.5}
                radius={[4, 4, 0, 0]}
                barSize={14}
              />
            </BarChart>
          ) : (
            <AreaChart data={data} margin={{ top: 8, right: 4, left: -24, bottom: 0 }}>
              <defs>
                <linearGradient id="goldGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#C5A059" stopOpacity={0.35} />
                  <stop offset="95%" stopColor="#C5A059" stopOpacity={0.0} />
                </linearGradient>
              </defs>
              <XAxis
                dataKey="time"
                axisLine={false}
                tickLine={false}
                tick={{ fill: '#8C857B', fontSize: 10, fontWeight: 500 }}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fill: '#8C857B', fontSize: 10 }}
                domain={[0, 20]}
              />
              <Tooltip content={<CustomTooltip />} />
              <Area
                type="monotone"
                dataKey="enquiries"
                stroke="#C5A059"
                strokeWidth={2}
                fillOpacity={1}
                fill="url(#goldGradient)"
              />
            </AreaChart>
          )}
        </ResponsiveContainer>
      </div>

      {/* Summary Footer */}
      <div className="flex items-center justify-between pt-2 mt-1 border-t border-black/[0.04] text-[11px] text-luxury-taupe">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#DFBE77]" />
            <span>Enquiries</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#C5A059]" />
            <span>Connected Calls</span>
          </div>
        </div>
        <span className="font-medium text-luxury-charcoal">
          98 Total Touchpoints
        </span>
      </div>
    </GlassCard>
  );
}
