import React from 'react';

/**
 * Badge - Refined pill-shaped label matching luxury dashboard aesthetics
 */
export default function Badge({
  children,
  variant = 'gold', // 'gold' | 'green' | 'neutral' | 'outline'
  size = 'sm', // 'xs' | 'sm' | 'md'
  className = '',
}) {
  const getVariantStyles = () => {
    switch (variant) {
      case 'gold':
        return 'bg-[#C5A059]/15 text-[#9E7C35] border border-[#C5A059]/30';
      case 'green':
        return 'bg-[#4A7C59]/15 text-[#2E5E3B] border border-[#4A7C59]/30';
      case 'neutral':
        return 'bg-luxury-taupe/10 text-luxury-taupe border border-luxury-taupe/20';
      case 'outline':
        return 'bg-white/60 text-luxury-charcoal-soft border border-white/80';
      default:
        return 'bg-white/50 text-luxury-charcoal border border-white/60';
    }
  };

  const getSizeStyles = () => {
    switch (size) {
      case 'xs':
        return 'text-[11px] font-medium px-2 py-0.5 rounded-full';
      case 'md':
        return 'text-xs font-semibold px-3 py-1 rounded-full';
      case 'sm':
      default:
        return 'text-[11.5px] font-medium px-2.5 py-0.5 rounded-full';
    }
  };

  return (
    <span className={`inline-flex items-center gap-1.5 transition-colors ${getVariantStyles()} ${getSizeStyles()} ${className}`}>
      {children}
    </span>
  );
}
