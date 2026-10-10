import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
}

export const Logo: React.FC<LogoProps> = ({ className = '', size = 32 }) => {
  return (
    <svg
      width={size * 1.55}
      height={size}
      viewBox="0 0 320 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 ${className}`}
      aria-label="Prime Web Works Winged PW Monogram Logo"
    >
      <defs>
        {/* Subtle luminous glow */}
        <filter id="pw_monogram_glow" x="-10%" y="-10%" width="120%" height="120%" filterUnits="userSpaceOnUse">
          <feDropShadow dx="0" dy="1" stdDeviation="1.5" floodColor="#FFFFFF" floodOpacity="0.25" />
        </filter>

        {/* White to subtle ice-cyan sheen */}
        <linearGradient id="pw_white_sheen" x1="60" y1="50" x2="260" y2="150" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="50%" stopColor="#F8FAFC" />
          <stop offset="100%" stopColor="#E2E8F0" />
        </linearGradient>
      </defs>

      <g filter="url(#pw_monogram_glow)" fill="url(#pw_white_sheen)">
        {/* Main Winged PW Monogram Body */}
        {/*
          1. Left Wing tip at (60, 52)
          2. Left outer diagonal descending to (122, 148)
          3. P bowl extending on the upper left
          4. Center diagonal peak with serif at (158, 52)
          5. Center right diagonal descending to (188, 148)
          6. Right outer diagonal ascending to (260, 52) with flared right wing
        */}

        {/* Letter P and Left Wing Section */}
        <path
          d="M60 52 C78 54 94 62 102 78 L122 148 L133 148 L104 64 L138 64 C150 64 158 72 158 84 C158 96 148 104 135 106 L124 108 L119 119 L136 117 C157 114 170 101 170 84 C170 66 156 52 135 52 L60 52 Z"
        />

        {/* Negative space cutout inside P bowl */}
        <path
          d="M109 68 L119 96 C134 94 144 87 144 80 C144 73 136 68 123 68 L109 68 Z"
          fill="#080B12"
        />

        {/* Center Diagonal Stroke (Ascending from left vertex to center top) */}
        <path
          d="M120 148 L152 58 L144 58 L144 52 L174 52 L174 58 L166 58 L136 148 Z"
        />

        {/* Center-Right Diagonal Stroke (Descending from center top to right vertex) */}
        <path
          d="M166 58 L188 148 L198 148 L174 58 Z"
        />

        {/* Right Wing & Outer Right Diagonal of W */}
        <path
          d="M188 148 L228 62 L220 58 L220 52 L260 52 C242 54 228 64 220 78 L198 148 Z"
        />

        {/* Top-Right Wing Tapered Flare */}
        <path
          d="M220 52 H260 C246 55 234 65 228 78 L224 70 C228 60 238 54 250 53 L220 52 Z"
        />

        {/* Top-Left Wing Tapered Flare */}
        <path
          d="M60 52 H100 L95 56 C82 56 72 62 66 72 L63 68 C68 59 78 54 90 53 L60 52 Z"
        />

        {/* Bottom Left vertex sharp cap */}
        <path d="M120 146 L123 151 L131 146 Z" />

        {/* Bottom Right vertex sharp cap */}
        <path d="M186 146 L189 151 L197 146 Z" />
      </g>
    </svg>
  );
};
