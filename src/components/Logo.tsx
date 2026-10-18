import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showSubtitle?: boolean;
  lightVariant?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  size = 'md',
  showSubtitle = true,
  lightVariant = false,
}) => {
  const heightMap = {
    sm: 'h-8',
    md: 'h-11',
    lg: 'h-16',
    xl: 'h-24',
  };

  return (
    <div className={`flex items-center gap-2 select-none ${className}`}>
      {/* Authentic Campo Verde SVG Emblem */}
      <svg
        className={`${heightMap[size]} w-auto drop-shadow-xs`}
        viewBox="0 0 320 180"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Outer Lime Green Circle Frame */}
        <circle cx="160" cy="55" r="48" stroke="#82C328" strokeWidth="9" fill="none" />
        
        {/* Inner Blue Silhouette Circle */}
        <circle cx="160" cy="55" r="42" fill="#0040FF" />

        {/* Animal Silhouettes (Dog, Cat, Rabbit, Bird) in White */}
        <path
          d="M178 78c-2-6-5-10-8-14-3 5-7 8-12 11 1 2 3 3 5 3h15zM140 78c2-4 3-8 3-12-3 2-6 5-8 9 1 1 3 2 5 3zM155 32c-6 0-12 4-15 9 4-2 9-3 14-3 6 0 11 2 15 5-3-7-8-11-14-11z"
          fill="#FFFFFF"
        />
        {/* Dog head & back silhouette */}
        <path
          d="M150 78c-4-8-10-14-18-18 2 5 5 10 10 14h8zM172 60c-2-8-8-14-15-18 4 4 8 9 10 15 3 1 4 2 5 3z"
          fill="#FFFFFF"
        />
        {/* Main combined pet outline */}
        <path
          d="M160 22c-18 0-33 15-33 33 0 10 4 19 11 25h44c7-6 11-15 11-25 0-18-15-33-33-33zm-4 12c4 0 8 2 11 5-3 3-7 4-11 4s-8-1-11-4c3-3 7-5 11-5zm-16 28c0-7 4-13 10-16-3 3-5 8-5 13 0 8 5 15 12 18h-11c-4-4-6-9-6-15zm32 15c7-3 12-10 12-18 0-5-2-10-5-13 6 3 10 9 10 16 0 6-2 11-6 15h-11z"
          fill="#FFFFFF"
        />

        {/* Script Campo Verde Brand Name in Vivid Lime Green */}
        <text
          x="160"
          y="132"
          textAnchor="middle"
          fill="#82C328"
          stroke="#173F2A"
          strokeWidth="1.5"
          fontSize="46"
          fontWeight="900"
          fontFamily="system-ui, cursive, sans-serif"
          fontStyle="italic"
          letterSpacing="-1"
        >
          CampoVerde
        </text>

        {/* Blue Ribbon Banner for AGROPECUARIA & VETERINARIA */}
        {showSubtitle && (
          <g>
            <path
              d="M20 148 L15 168 L40 160 L280 160 L305 168 L300 148 Z"
              fill="#0038D1"
            />
            <path
              d="M30 145 L290 145 L300 165 L20 165 Z"
              fill="#0040FF"
            />
            <text
              x="160"
              y="159"
              textAnchor="middle"
              fill="#FFFFFF"
              fontSize="12.5"
              fontWeight="900"
              fontFamily="system-ui, sans-serif"
              letterSpacing="1"
            >
              AGROPECUARIA & VETERINARIA
            </text>
          </g>
        )}
      </svg>
    </div>
  );
};
