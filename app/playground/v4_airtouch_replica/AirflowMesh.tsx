import React from 'react';

interface AirflowMeshProps {
    className?: string;
    opacity?: number;
}

export const AirflowMesh: React.FC<AirflowMeshProps> = ({ className = "", opacity = 0.2 }) => {
    return (
        <div className={`pointer-events-none absolute inset-0 ${className}`} style={{ opacity }}>
            <svg
                viewBox="0 0 800 800"
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
                preserveAspectRatio="none"
                className="w-full h-full"
            >
                <defs>
                    <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="ccchaos-grad">
                        <stop stopColor="hsl(45, 100%, 50%)" stopOpacity="1" offset="0%"></stop>
                        <stop stopColor="hsl(181, 100%, 50%)" stopOpacity="0" offset="100%"></stop>
                    </linearGradient>
                </defs>
                <g strokeWidth="1.5" stroke="url(#ccchaos-grad)" fill="none" strokeLinecap="round">
                    {/* Generated Wave Paths */}
                    <path d="M-50 400 C 150 200, 350 600, 850 400" />
                    <path d="M-50 420 C 150 220, 350 620, 850 420" />
                    <path d="M-50 440 C 150 240, 350 640, 850 440" />
                    <path d="M-50 460 C 150 260, 350 660, 850 460" />
                    <path d="M-50 480 C 150 280, 350 680, 850 480" />

                    <path d="M-50 380 C 150 180, 350 580, 850 380" />
                    <path d="M-50 360 C 150 160, 350 560, 850 360" />
                    <path d="M-50 340 C 150 140, 350 540, 850 340" />

                    {/* Cross Waves */}
                    <path d="M-50 200 C 250 500, 550 300, 850 600" opacity="0.5" />
                    <path d="M-50 220 C 250 520, 550 320, 850 620" opacity="0.5" />
                    <path d="M-50 240 C 250 540, 550 340, 850 640" opacity="0.5" />

                    {/* Vertical-ish curves */}
                    <path d="M200 -50 C 400 250, 200 550, 400 850" opacity="0.3" />
                    <path d="M220 -50 C 420 250, 220 550, 420 850" opacity="0.3" />
                    <path d="M600 -50 C 400 250, 600 550, 400 850" opacity="0.3" />
                </g>
            </svg>
        </div>
    );
};
