'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { X } from 'lucide-react';

export const CertificateDisplay = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <>
            <div className="relative w-full max-w-md mx-auto perspective-1000">
                {/* Main Certificate Card with Desktop Tilt */}
                <motion.div
                    className="relative w-full aspect-[1/1.414] rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#0a0a0a] cursor-zoom-in"
                    whileHover={{ scale: 1.02, rotateX: 2, rotateY: 2 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    style={{ transformStyle: "preserve-3d" }}
                    onClick={() => setIsExpanded(true)}
                >
                    <Image
                        src="/certificate-level3.jpg"
                        alt="Sarbashev MasterClass Certificate"
                        fill
                        className="object-cover"
                        style={{ objectPosition: '47% 45%' }} // 3% left, 5% up from center (50% 50%)
                        priority
                    />
                    {/* Overlay for texture/depth */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-white/5 pointer-events-none" />
                </motion.div>

                {/* Living Proof Video Badge - Positioned to overlap/extend */}
                <div className="absolute top-[18%] md:top-[15%] -right-1 md:-right-8 w-[153px] h-[245px] md:w-[201px] md:h-[321px] rounded-xl overflow-hidden border-2 border-[#D4AF37] shadow-[0_0_30px_rgba(212,175,55,0.3)] bg-black z-20 pointer-events-none">
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
                            CERTYFIKACJA LEVEL 3
                        </span>
                    </div>
                </div>
            </div>

            {/* Full Screen Modal */}
            <AnimatePresence>
                {isExpanded && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsExpanded(false)}
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md p-4 cursor-zoom-out"
                    >
                        <motion.button
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="absolute top-4 right-4 text-white/70 hover:text-white p-2"
                        >
                            <X size={32} />
                        </motion.button>

                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="relative w-full h-full max-w-4xl max-h-[90vh] flex items-center justify-center"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <Image
                                src="/certificate-level3.jpg"
                                alt="Sarbashev MasterClass Certificate - Full View"
                                fill
                                className="object-contain"
                                sizes="100vw"
                                priority
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};
