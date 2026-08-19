import React from 'react';

export function StravaLogo({ size = 24, color = "currentColor", weight = "regular", className = "" }) {
  // A simple representation of the Strava logo geometry
  // Strava logo consists of three overlapping/adjacent triangles
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill={color} 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M15.387 17.944l-2.089-4.116h-3.065l5.154 10.172 5.156-10.172h-3.066l-2.09 4.116z" />
      <path d="M7.166 17.944h4.437l-4.437-8.73-4.438 8.73h4.438z" />
      <path d="M11.603 9.214l-3.328-6.529-3.328 6.529h-4.438L11.603 -0.001l11.094 21.782h-4.438L11.603 9.214z" />
    </svg>
  );
}
