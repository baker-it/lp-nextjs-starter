'use client'

import React from 'react'
import Image from 'next/image'

export default function HeroBackground() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none select-none bg-[#050505]">
            {/* LAYER 1: Texture (Bottom) */}
            <div className="absolute inset-0 z-0 animate-breathing">
                <Image
                    src="/sss.jpg"
                    alt="Texture"
                    fill
                    className="object-cover opacity-20"
                    priority
                />
            </div>

            {/* LAYER 2: Light/Glow (Middle) - SAFE LAYERING (No mix-blend-mode) */}
            {/* Top-Right Amber/Gold Blob */}
            <div className="absolute z-10 top-[-40vw] left-[-40vw] w-[140vw] h-[140vw] md:top-[-15%] md:left-[-10%] md:w-[50vw] md:h-[50vw] bg-[radial-gradient(circle,rgba(245,158,11,0.5)_0%,transparent_70%)] blur-[80px] pointer-events-none animate-pulse-slow"></div>

            {/* Bottom-Left Purple/Deep Blue Blob */}
            <div className="absolute bottom-[-40vw] right-[-40vw] w-[175vw] h-[175vw] md:bottom-[-10%] md:right-[-10%] md:w-[50vw] md:h-[50vw] bg-[radial-gradient(circle,rgba(49,46,129,0.6)_0%,transparent_70%)] blur-[80px] pointer-events-none z-10"></div>

            {/* LAYER 3: Engineering SVG (Top) */}
            <div className="absolute inset-0 z-20 opacity-40">
                <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[180%] h-[180%] md:w-[120%] md:h-[120%]" viewBox="0 0 100 100">
                    {/* Circle 1: Thin Solid - Clockwise Slow */}
                    <g className="origin-center animate-[spin_60s_linear_infinite]">
                        <circle cx="50" cy="50" r="48" fill="none" stroke="#D4AF37" strokeWidth="0.3" opacity="0.3" />
                        <circle cx="50" cy="50" r="48" fill="none" stroke="#D4AF37" strokeWidth="0.15" strokeDasharray="1 4" opacity="0.5" />
                    </g>

                    {/* Circle 2: Dashed - Counter-Clockwise */}
                    <g className="origin-center animate-[spin_45s_linear_infinite_reverse]">
                        <circle cx="50" cy="50" r="38" fill="none" stroke="#D4AF37" strokeWidth="0.45" strokeDasharray="4 6" opacity="0.6" />
                    </g>

                    {/* Circle 3: Very Thin - Clockwise Very Slow */}
                    <g className="origin-center animate-[spin_80s_linear_infinite]">
                        <circle cx="50" cy="50" r="28" fill="none" stroke="#D4AF37" strokeWidth="0.15" opacity="0.4" />
                        <circle cx="50" cy="50" r="28" fill="none" stroke="#D4AF37" strokeWidth="0.6" strokeDasharray="0.5 10" opacity="0.3" />
                    </g>

                    {/* Circle 4: Extra Outer Ring - Counter-Clockwise Slow */}
                    <g className="origin-center animate-[spin_70s_linear_infinite_reverse]">
                        <circle cx="50" cy="50" r="58" fill="none" stroke="#D4AF37" strokeWidth="0.15" opacity="0.2" />
                        <circle cx="50" cy="50" r="58" fill="none" stroke="#D4AF37" strokeWidth="0.3" strokeDasharray="2 8" opacity="0.4" />
                    </g>

                    {/* Center Static Elements */}
                    <circle cx="50" cy="50" r="15" fill="none" stroke="#D4AF37" strokeWidth="0.15" opacity="0.2" />
                </svg>
            </div>

            {/* Global Styles for custom animations if needed */}
            <style jsx global>{`
                @keyframes pulse-slow {
                    0%, 100% { opacity: 0.8; transform: scale(1); }
                    50% { opacity: 1; transform: scale(1.05); }
                }
                .animate-pulse-slow {
                    animation: pulse-slow 8s ease-in-out infinite;
                }
            `}</style>
        </div>
    )
}
