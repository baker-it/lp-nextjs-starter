'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export const CertificateDisplay = () => {
    return (
        <div className="relative w-full max-w-md mx-auto perspective-1000">
            {/* Main Certificate Card with Desktop Tilt */}
            <motion.div
                className="relative w-full aspect-[1/1.414] rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#0a0a0a]"
                whileHover={{ scale: 1.02, rotateX: 2, rotateY: 2 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                style={{ transformStyle: "preserve-3d" }}
            >
                <Image
                    src="/certificate-sarbashev.jpg"
                    alt="Sarbashev MasterClass Certificate"
                    fill
                    className="object-cover"
                    priority
                />
                {/* Overlay for texture/depth */}
                <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-white/5 pointer-events-none" />
            </motion.div>

            {/* Living Proof Video Badge - Positioned to overlap/extend */}
            <div className="absolute -bottom-5 -right-1 md:-bottom-8 md:-right-8 w-[120px] h-[192px] md:w-[180px] md:h-[288px] rounded-xl overflow-hidden border-2 border-[#D4AF37] shadow-[0_0_30px_rgba(212,175,55,0.3)] bg-black z-20">
                <video
                    src="/sarbashev-proof.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                />
                {/* Badge Label */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-max max-w-[90%] bg-black/80 backdrop-blur-sm border border-[#D4AF37]/30 px-2 py-1 rounded flex flex-col items-center text-center">
                    <span className="text-[8px] md:text-[10px] text-[#D4AF37] font-bold uppercase tracking-widest leading-none">
                        Living Proof
                    </span>
                </div>
            </div>
        </div>
    );
};
