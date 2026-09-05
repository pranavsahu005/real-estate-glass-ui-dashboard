import React from 'react';
import { Clock, Radio, ArrowUpRight } from 'lucide-react';
import GlassCard from '../common/GlassCard';
import Badge from '../common/Badge';

export default function RecentActivity({ activities }) {
  return (
    <GlassCard className="flex flex-col justify-between p-4.5 rounded-[24px] h-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-luxury-taupe">
            Recent Activity
          </span>
          <span className="text-[10.5px] px-2 py-0.5 rounded-full bg-black/[0.04] text-luxury-charcoal font-medium">
            Live Stream
          </span>
        </div>
        <div className="flex items-center gap-1.5 text-[11px] text-luxury-taupe font-normal">
          <Clock className="w-3 h-3 text-luxury-gold" />
          <span>Real-time Log</span>
        </div>
      </div>

      {/* Activity List */}
      <div className="space-y-2 my-0.5 overflow-hidden">
        {activities.slice(0, 4).map((activity) => (
          <div
            key={activity.id}
            className="flex items-center justify-between p-2 rounded-xl bg-white/40 hover:bg-white/70 transition-all border border-white/50"
          >
            <div className="flex items-center gap-2.5 min-w-0">
              {/* Time Pill */}
              <span className="text-[10.5px] font-semibold text-luxury-taupe tabular-nums px-1.5 py-0.5 rounded-md bg-white/70 border border-white/80 shrink-0">
                {activity.time}
              </span>
              <div className="min-w-0">
                <p className="text-[11.5px] font-medium text-luxury-charcoal truncate leading-tight">
                  {activity.title}
                </p>
                <p className="text-[10.5px] text-luxury-taupe truncate leading-tight mt-0.5">
                  {activity.description}
                </p>
              </div>
            </div>

            {/* Badge */}
            <div className="shrink-0 ml-2">
              <Badge
                variant={
                  activity.tagType === 'gold'
                    ? 'gold'
                    : activity.tagType === 'green'
                    ? 'green'
                    : 'neutral'
                }
                size="xs"
              >
                {activity.tag}
              </Badge>
            </div>
          </div>
        ))}
      </div>

      {/* Footer status */}
      <div className="flex items-center justify-between pt-2 mt-1 border-t border-black/[0.04] text-[11px] text-luxury-taupe">
        <span>Logged by sales team • Bhopal HQ</span>
        <span className="text-luxury-charcoal font-medium">Auto-sync 30s</span>
      </div>
    </GlassCard>
  );
}
