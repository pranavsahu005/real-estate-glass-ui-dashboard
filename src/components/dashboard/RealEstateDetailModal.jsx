import React from 'react';
import { X, Building2, Calendar, PhoneCall, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { leadBreakdown, siteVisitRows, topPropertyInterests, recentActivities } from '../../data/dashboardData';

/**
 * Real Estate Analytics Drawer
 * Implements Prompt Sections 8, 9, 10, 11, 12:
 * Lead Status Overview (124 leads), Site Visit Performance, Top Property Interests, Recent Activity
 */
export default function RealEstateDetailModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm transition-all duration-300">
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#EAE2D7] border border-white/90 shadow-[0_24px_50px_rgba(30,20,10,0.3),inset_0_2px_3px_rgba(255,255,255,0.95)] rounded-[32px] p-6 sm:p-7 text-neutral-800 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-5 right-5 h-8 w-8 rounded-full bg-[#4E4945] hover:bg-neutral-800 text-white flex items-center justify-center transition-all cursor-pointer shadow-xs"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Header */}
        <div className="mb-6">
          <div className="flex items-center gap-2 text-[11px] font-semibold tracking-wider text-[#A8833C] uppercase">
            <Building2 className="w-3.5 h-3.5" />
            <span>Infinity Core • Bhopal Real Estate Intelligence</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 tracking-tight mt-1">
            Executive Analytics & Portfolio Breakdown
          </h2>
          <p className="text-xs text-neutral-600 mt-0.5">
            Live client pipeline, property inquiries, and operational performance
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          
          {/* Box 1: Lead Status Overview (124 Leads) */}
          <div className="bg-white/70 rounded-[24px] p-4.5 border border-white/80 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-semibold text-neutral-800">
                  Lead Status Overview
                </h3>
                <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-neutral-800 text-white">
                  124 Total Leads
                </span>
              </div>
              <div className="space-y-2">
                {leadBreakdown.map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between text-xs">
                    <span className="text-neutral-600">{item.name}</span>
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-neutral-800">{item.count}</span>
                      <span className="text-[10px] text-neutral-400 w-10 text-right">{item.percentage}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="h-2 w-full bg-neutral-200/80 rounded-full overflow-hidden flex mt-4">
              <div style={{ width: '25.8%' }} className="bg-[#C5A059]" />
              <div style={{ width: '22.6%' }} className="bg-[#DFBE77]" />
              <div style={{ width: '19.4%' }} className="bg-[#A8833C]" />
              <div style={{ width: '14.5%' }} className="bg-[#726D66]" />
              <div style={{ width: '17.7%' }} className="bg-[#4A7C59]" />
            </div>
          </div>

          {/* Box 2: Site Visit Performance */}
          <div className="bg-white/70 rounded-[24px] p-4.5 border border-white/80 shadow-xs">
            <h3 className="text-sm font-semibold text-neutral-800 mb-3">
              Site Visit Performance
            </h3>
            <div className="space-y-3">
              {siteVisitRows.map((row, idx) => (
                <div key={idx}>
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="text-neutral-600">{row.label}</span>
                    <span className="font-semibold text-neutral-800">{row.count} / {row.max}</span>
                  </div>
                  <div className="h-2 w-full bg-neutral-200/80 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-500"
                      style={{
                        width: `${(row.count / row.max) * 100}%`,
                        backgroundColor: row.color,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Box 3: Top Property Interests */}
          <div className="bg-white/70 rounded-[24px] p-4.5 border border-white/80 shadow-xs">
            <h3 className="text-sm font-semibold text-neutral-800 mb-3">
              Top Property Interests
            </h3>
            <div className="space-y-2.5">
              {topPropertyInterests.map((prop, idx) => (
                <div key={idx} className="flex items-center justify-between p-2 rounded-xl bg-white/60 border border-white/70">
                  <div>
                    <span className="block text-xs font-semibold text-neutral-800">{prop.name}</span>
                    <span className="text-[10px] text-neutral-500">{prop.type}</span>
                  </div>
                  <div className="text-right">
                    <span className="block text-xs font-bold text-neutral-800">{prop.count} leads</span>
                    <span className="text-[10px] text-emerald-700 font-medium">{prop.share}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Box 4: Recent Client Activity */}
          <div className="bg-white/70 rounded-[24px] p-4.5 border border-white/80 shadow-xs">
            <h3 className="text-sm font-semibold text-neutral-800 mb-3">
              Recent Client Activity
            </h3>
            <div className="space-y-2.5">
              {recentActivities.map((act, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs">
                  <span className="text-[10px] font-medium text-neutral-400 pt-0.5 w-16 shrink-0">{act.time}</span>
                  <div className="flex-1">
                    <span className="font-semibold text-neutral-800 block">{act.title}</span>
                    <span className="text-[10px] text-neutral-500">{act.sub}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Footer info */}
        <div className="mt-6 pt-4 border-t border-neutral-300/40 flex items-center justify-between text-xs text-neutral-500">
          <span>Infinity Core Bhopal • Internal Executive TV Display</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-full bg-neutral-800 text-white font-medium hover:bg-neutral-900 transition-colors cursor-pointer"
          >
            Back to Dashboard
          </button>
        </div>

      </div>
    </div>
  );
}
