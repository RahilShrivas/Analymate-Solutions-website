import React from 'react';

interface BrandLogoProps {
  variant?: 'dark' | 'light';
  size?: 'sm' | 'md' | 'lg';
  showTagline?: boolean;
  className?: string;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = 'dark',
  size = 'md',
  showTagline = false,
  className = ''
}) => {
  const isLight = variant === 'light';

  const sizeDimensions = {
    sm: { icon: 28, text: 'text-base', sub: 'text-[9px]' },
    md: { icon: 36, text: 'text-lg', sub: 'text-[10px]' },
    lg: { icon: 44, text: 'text-2xl', sub: 'text-xs' }
  }[size];

  return (
    <div className={`inline-flex items-center gap-2.5 ${className}`}>
      {/* Precision Geometric Brand Mark */}
      <svg
        width={sizeDimensions.icon}
        height={sizeDimensions.icon}
        viewBox="0 0 44 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 transition-transform duration-200 hover:scale-105"
        aria-label="Analymate Solutions Emblem"
      >
        {/* Navy Foundation Diamond / Matrix */}
        <path
          d="M6 34L22 8L28 17L17 34H6Z"
          fill="#102B49"
        />
        {/* Corporate Teal Transformation Path */}
        <path
          d="M22 8L38 34H27L22 25L28 17L22 8Z"
          fill="#087C78"
        />
        {/* Process Crossbeam */}
        <path
          d="M13 27H31L28 22H16L13 27Z"
          fill="#102B49"
          fillOpacity={isLight ? "0.9" : "0.75"}
        />
        {/* Strategic Apex Accent Dot (Orange) */}
        <circle
          cx="22"
          cy="7"
          r="3"
          fill="#F07820"
        />
      </svg>

      {/* Brand Typographic Wordmark */}
      <div className="flex flex-col leading-none">
        <div className="flex items-baseline gap-1">
          <span
            className={`font-display font-extrabold tracking-tight ${sizeDimensions.text} ${
              isLight ? 'text-white' : 'text-[#102B49]'
            }`}
          >
            ANALYMATE
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#F07820] self-center"></span>
        </div>
        <div className="flex items-center justify-between gap-1 mt-0.5">
          <span
            className={`font-sans font-semibold tracking-[0.28em] uppercase ${sizeDimensions.sub} ${
              isLight ? 'text-[#087C78]' : 'text-[#087C78]'
            }`}
          >
            SOLUTIONS
          </span>
          {showTagline && (
            <span
              className={`text-[9px] tracking-wider uppercase font-medium ${
                isLight ? 'text-slate-400' : 'text-slate-500'
              }`}
            >
              PVT. LTD.
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
