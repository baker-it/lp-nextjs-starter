'use client'

import React from 'react'
import Image from 'next/image'

export default function HeroBackground() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none select-none bg-[#050505]">
            {/* LAYER 1: Texture (Bottom) - Option 3 (Blur + Noise) */}
            <div className="absolute inset-0 z-0 animate-breathing flex flex-col justify-center items-center" style={{ height: 'min(150vh, 1200px)' }}>
                {/* Tło kafelkowe z mocnym blurem by zabić ostre "szwy" obrazków */}
                <div
                    className="absolute inset-0 opacity-[0.4] blur-[8px]"
                    style={{
                        backgroundImage: "url('/sss.jpg')",
                        backgroundRepeat: "repeat",
                        backgroundSize: "400px"
                    }}
                />

                {/* Winieta: Gradienty pionowe (Góra/Dół) */}
                <div className="absolute top-0 w-full h-[30%] bg-gradient-to-b from-[#050505] to-transparent z-10 pointer-events-none"></div>
                <div className="absolute bottom-0 w-full h-[30%] bg-gradient-to-t from-[#050505] to-transparent z-10 pointer-events-none"></div>

                {/* Winieta: Gradienty poziome (Lewo/Prawo) */}
                {/* Gradient od lewej do środka (z czarnego do przezroczystości). Mocny, gładki spadek budujący tajemniczość. */}
                <div className="absolute left-0 top-0 h-full w-[35%] md:w-[25%] bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none"></div>

                {/* Gradient od prawej do środka (z przezroczystości do czarnego) */}
                <div className="absolute right-0 top-0 h-full w-[35%] md:w-[25%] bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none"></div>
            </div>

            {/* LAYER 2: Light/Glow (Middle) - SAFE LAYERING (No mix-blend-mode) */}
            {/* Top-Right Amber/Gold Blob */}
            <div className="absolute z-10 top-[-40vw] left-[-40vw] w-[140vw] h-[140vw] md:top-[-15%] md:left-[-10%] md:w-[50vw] md:h-[50vw] bg-[radial-gradient(circle,rgba(245,158,11,0.5)_0%,transparent_70%)] blur-[80px] pointer-events-none animate-pulse-slow"></div>

            {/* Bottom-Left Purple/Deep Blue Blob */}
            <div className="absolute bottom-[-40vw] right-[-40vw] w-[175vw] h-[175vw] md:bottom-[-10%] md:right-[-10%] md:w-[50vw] md:h-[50vw] bg-[radial-gradient(circle,rgba(49,46,129,0.6)_0%,transparent_70%)] blur-[80px] pointer-events-none z-10"></div>

            {/* LAYER 3: Engineering SVG (Top) - 3D Platform (Kierunek 3 Perspective) + Rocking Animation (Kierunek 2 Motion) */}
            <div className="absolute inset-0 z-20 opacity-60" style={{ perspective: '1200px' }}>
                <div
                    className="absolute top-[60%] left-1/2 w-[250%] h-[250%] md:w-[160%] md:h-[160%]"
                    style={{
                        transform: 'translate(-50%, -50%) rotateX(75deg) rotateY(0deg) rotateZ(0deg)',
                        transformStyle: 'preserve-3d'
                    }}
                >
                    <svg className="w-full h-full" viewBox="0 0 100 100">
                        {/* Circle 1: Thin Solid - Rocking */}
                        <g className="origin-center animate-rocking">
                            <circle cx="50" cy="50" r="48" fill="none" stroke="#D4AF37" strokeWidth="0.3" opacity="0.3" />
                            <circle cx="50" cy="50" r="48" fill="none" stroke="#D4AF37" strokeWidth="0.15" strokeDasharray="1 4" opacity="0.5" />
                        </g>

                        {/* Circle 2: Dashed - Rocking Reverse */}
                        <g className="origin-center animate-rocking-reverse">
                            <circle cx="50" cy="50" r="38" fill="none" stroke="#D4AF37" strokeWidth="0.45" strokeDasharray="4 6" opacity="0.6" />
                        </g>

                        {/* Circle 3: Very Thin - Rocking Slow */}
                        <g className="origin-center animate-rocking-slow">
                            <circle cx="50" cy="50" r="28" fill="none" stroke="#D4AF37" strokeWidth="0.15" opacity="0.4" />
                            <circle cx="50" cy="50" r="28" fill="none" stroke="#D4AF37" strokeWidth="0.6" strokeDasharray="0.5 10" opacity="0.3" />
                        </g>

                        {/* Circle 4: Extra Outer Ring - Rocking Reverse Slow */}
                        <g className="origin-center animate-rocking-reverse-slow">
                            <circle cx="50" cy="50" r="58" fill="none" stroke="#D4AF37" strokeWidth="0.15" opacity="0.2" />
                            <circle cx="50" cy="50" r="58" fill="none" stroke="#D4AF37" strokeWidth="0.3" strokeDasharray="2 8" opacity="0.4" />
                        </g>

                        {/* Center Static Elements */}
                        <circle cx="50" cy="50" r="15" fill="none" stroke="#D4AF37" strokeWidth="0.15" opacity="0.2" />
                    </svg>
                </div>
            </div>

            {/* LAYER 4: Global Noise Overlay for premium sharpness */}
            <div className="absolute inset-0 z-[50] mix-blend-screen pointer-events-none animate-breathing">
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 700 700" width="700" height="700" preserveAspectRatio="none" className="w-full h-full" style={{ opacity: 0.92 }}>
                    <defs>
                        <filter id="nnnoise-filter" x="-20%" y="-20%" width="140%" height="140%" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse" colorInterpolationFilters="linearRGB">
                            <feTurbulence type="turbulence" baseFrequency="0.146" numOctaves="4" seed="15" stitchTiles="stitch" x="0%" y="0%" width="100%" height="100%" result="turbulence"></feTurbulence>
                            <feSpecularLighting surfaceScale="34" specularConstant="3" specularExponent="20" lightingColor="#a79b0f" x="0%" y="0%" width="100%" height="100%" in="turbulence" result="specularLighting">
                                <feDistantLight azimuth="3" elevation="146"></feDistantLight>
                            </feSpecularLighting>
                        </filter>
                    </defs>
                    <rect width="700" height="700" fill="#0e001aff"></rect>
                    <rect width="700" height="700" fill="#a79b0f" filter="url(#nnnoise-filter)"></rect>
                </svg>
            </div>

            {/* LAYER 5: Bottom Fade-out Gradient for smooth section transition */}
            <div className="absolute bottom-0 left-0 right-0 h-48 z-[60] bg-gradient-to-b from-transparent to-[#0f0f0f] pointer-events-none" />

            {/* Global Styles for custom animations if needed */}
            <style jsx global>{`
                @keyframes pulse-slow {
                    0%, 100% { opacity: 0.8; transform: scale(1); }
                    50% { opacity: 1; transform: scale(1.05); }
                }
                .animate-pulse-slow {
                    animation: pulse-slow 8s cubic-bezier(0.1, 0, 0.9, 1) infinite;
                }
            `}</style>
        </div>
    )
}
