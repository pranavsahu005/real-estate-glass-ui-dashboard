import React from 'react';
import GlassCardWrapper from './GlassCardWrapper';

/**
 * Top-Left Card - True Borrower / Client Intelligence
 * 1:1 replica of the reference top-left card
 */
export default function TrueBorrowerCard({ data, onAction }) {
  const {
    cardTitle = "True Borrower",
    name = "Scott J. Seligman",
    role = "Borrower",
    riskBadge = "Average risk ?",
    debtText = "Has a total debt of $42,910",
    avatarUrl = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80",
  } = data || {};

  return (
    <GlassCardWrapper onActionClick={onAction} className="w-full">
      {/* Title */}
      <h3 className="text-center text-[13px] font-medium text-neutral-800 tracking-wide mb-3">
        {cardTitle}
      </h3>

      {/* Profile Pill */}
      <div className="flex items-center justify-between bg-white/75 backdrop-blur-xs rounded-full px-3 py-1.5 border border-white/85 shadow-xs mb-2.5">
        <div className="flex items-center gap-2.5">
          <div className="h-7 w-7 rounded-full overflow-hidden bg-neutral-300 border border-white shrink-0 shadow-2xs">
            <img
              src={avatarUrl}
              alt={name}
              className="h-full w-full object-cover"
              onError={(e) => {
                e.currentTarget.src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80";
              }}
            />
          </div>
          <div className="flex flex-col">
            <span className="text-[9px] text-neutral-400 font-normal leading-tight">
              {role}
            </span>
            <span className="text-[11.5px] font-semibold text-neutral-800 leading-tight">
              {name}
            </span>
          </div>
        </div>

        <span className="text-[10px] font-medium text-neutral-700 bg-white px-2 py-0.5 rounded-full border border-neutral-200/80 shadow-2xs flex items-center gap-1">
          {riskBadge}
        </span>
      </div>

      {/* Subtext */}
      <p className="text-center text-[10.5px] text-neutral-500 font-normal">
        {debtText.includes('$') ? (
          <>
            Has a total debt of <span className="font-semibold text-neutral-800">$42,910</span>
          </>
        ) : (
          debtText
        )}
      </p>
    </GlassCardWrapper>
  );
}
