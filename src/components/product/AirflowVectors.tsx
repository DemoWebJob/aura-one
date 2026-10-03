"use client";

import React from "react";

interface AirflowVectorsProps {
  className?: string;
  intensity?: number;
}

export default function AirflowVectors({
  className = "",
  intensity = 1,
}: AirflowVectorsProps) {
  return (
    <div
      className={`pointer-events-none select-none overflow-visible ${className}`}
      style={{ opacity: intensity }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1000 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <defs>
          <linearGradient id="airGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4E816E" stopOpacity="0" />
            <stop offset="40%" stopColor="#82AA99" stopOpacity="0.45" />
            <stop offset="80%" stopColor="#A3C6B6" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#4E816E" stopOpacity="0" />
          </linearGradient>

          <linearGradient id="airGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#82AA99" stopOpacity="0" />
            <stop offset="50%" stopColor="#528472" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#04271B" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Laminar Streamline 1 */}
        <path
          d="M 50 350 C 250 320, 420 280, 520 290 C 680 305, 840 220, 950 180"
          stroke="url(#airGrad1)"
          strokeWidth="2.5"
          strokeDasharray="8 12"
          className="animate-[dash_12s_linear_infinite]"
        />

        {/* Laminar Streamline 2 (Gentle looping envelope) */}
        <path
          d="M 120 420 C 300 390, 480 340, 560 320 C 720 280, 860 330, 980 280"
          stroke="url(#airGrad2)"
          strokeWidth="2"
          strokeDasharray="6 14"
          className="animate-[dash_16s_linear_infinite]"
        />

        {/* Laminar Streamline 3 (Lower return path) */}
        <path
          d="M 80 280 C 260 220, 460 260, 540 270 C 660 285, 780 210, 920 140"
          stroke="url(#airGrad1)"
          strokeWidth="1.5"
          strokeDasharray="5 10"
          className="animate-[dash_10s_linear_infinite]"
        />

        {/* Ambient floating air micro-particles */}
        <circle cx="340" cy="310" r="2.5" fill="#82AA99" opacity="0.6" />
        <circle cx="580" cy="300" r="2" fill="#528472" opacity="0.5" />
        <circle cx="720" cy="260" r="3" fill="#A3C6B6" opacity="0.7" />
        <circle cx="450" cy="275" r="1.5" fill="#82AA99" opacity="0.4" />
      </svg>
    </div>
  );
}
