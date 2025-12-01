'use client';

import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import Image from 'next/image';
import { Award } from 'lucide-react';

export const InteractiveCertificate = () => {
    const ref = useRef<HTMLDivElement>(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x, { stiffness: 500, damping: 50 });
    const mouseY = useSpring(y, { stiffness: 500, damping: 50 });

    const rotateX = useTransform(mouseY, [-0.5, 0.5], ["15deg", "-15deg"]);
    const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-15deg", "15deg"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();

        const width = rect.width;
        const height = rect.height;

        const mouseXFromCenter = e.clientX - rect.left - width / 2;
        const mouseYFromCenter = e.clientY - rect.top - height / 2;

        const xPct = mouseXFromCenter / width;
        const yPct = mouseYFromCenter / height;

        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
            className="relative w-full max-w-sm mx-auto perspective-1000 cursor-pointer"
        >
            {/* A4 Aspect Ratio Container */}
            <div className="relative aspect-[1/1.414] w-full">

                {/* Glass/Acrylic Card */}
                <div className="absolute inset-0 bg-white/5 backdrop-blur-md border border-yellow-500/30 rounded-lg shadow-[0_0_30px_rgba(234,179,8,0.15)] overflow-hidden">

                    {/* Certificate Image */}
                    <div className="relative w-full h-full p-4">
                        <div className="relative w-full h-full border border-white/10 bg-white/90">
                            <Image
                                src="/certificate-sarbashev.jpg"
                                alt="Sarbashev MasterClass Certificate"
                                fill
                                className="object-cover"
                            />
                            {/* Overlay for texture/paper feel */}
                            <div className="absolute inset-0 bg-[url('/bg-pattern.png')] opacity-10 mix-blend-multiply pointer-events-none" />
                        </div>
                    </div>

                    {/* Hologram / Seal */}
                    <div className="absolute bottom-8 right-8 w-20 h-20 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#B5902C] shadow-lg flex items-center justify-center overflow-hidden border-2 border-white/20">
                        {/* Shimmer Effect */}
                        <motion.div
                            animate={{ x: ["-100%", "100%"] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "linear", repeatDelay: 3 }}
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-12"
                        />

                        <div className="relative z-10 flex flex-col items-center justify-center text-center">
                            <Award className="w-8 h-8 text-white drop-shadow-md" />
                            <span className="text-[6px] font-bold text-white uppercase tracking-widest mt-1 drop-shadow-md">
                                Verified
                            </span>
                        </div>
                    </div>

                    {/* Reflections */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none" />
                </div>
            </div>
        </motion.div>
    );
};
