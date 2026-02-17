'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export const CertificateDisplay = () => {
    const [isZoomed, setIsZoomed] = useState(false);

    return (
        <div className="relative w-full max-w-[600px] mx-auto lg:max-w-none">

            {/* CONTAINER: Flex Column for both, controlling order via classes */}
            <div className="flex flex-col gap-8 lg:block">

                {/* --- VIDEO SECTION --- */}
                {/* Mobile: Order 1 (First), Full Width. Desktop: Absolute Positioned (Secondary) */}
                <div className="order-1 lg:order-2 lg:absolute lg:right-0 lg:bottom-12 lg:w-[32%] z-20 flex flex-col items-center lg:items-end">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="relative w-full aspect-[9/16] lg:aspect-[3/4] rounded-xl overflow-hidden shadow-2xl border border-white/10"
                    >
                        {/* Video */}
                        <video
                            src="/sarbashev-proof.mp4"
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-cover"
                        />
                        {/* Optional: Glossy overlay */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none" />
                    </motion.div>

                    {/* Caption */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="mt-4 text-xs text-gray-500 italic text-center lg:text-right leading-tight max-w-[280px]"
                    >
                        Tetiana odbierająca certyfikat najwyższego, 3. poziomu (Limited Progressive) bezpośrednio od twórcy metody AirTouch, Vladimira Sarbasheva.
                    </motion.p>
                </div>

                {/* --- CERTIFICATE SECTION (Main Proof) --- */}
                {/* Mobile: Order 2. Desktop: Order 1 (Main focus) */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="order-2 lg:order-1 relative w-full lg:w-[65%] z-10 flex flex-col items-start"
                >
                    {/* Minimalist Frame - Just the image with clean borders */}
                    <div
                        className="relative inline-block shadow-2xl cursor-zoom-in transition-transform duration-300 hover:scale-[1.01]"
                        onClick={() => setIsZoomed(true)}
                    >
                        {/* Thin Gold Border - Direct on Image (Option B) */}
                        <div className="relative border-[1px] border-[#D4AF37]/60">
                            <Image
                                src="/certificate-level3.jpg"
                                alt="Sarbashev Level 3 Certificate"
                                width={800}
                                height={1131}
                                className="w-full h-auto object-cover block"
                            />
                        </div>
                    </div>

                    {/* Click to Enlarge Text */}
                    <button
                        onClick={() => setIsZoomed(true)}
                        className="mt-3 text-[#D4AF37] text-xs transition-colors group flex items-center gap-2"
                    >
                        <span className="italic opacity-70 group-hover:opacity-100 transition-opacity">
                            kliknij, aby powiększyć
                        </span>
                    </button>

                </motion.div>

            </div>

            {/* --- LIGHTBOX MODAL --- */}
            <AnimatePresence>
                {isZoomed && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 md:p-8 backdrop-blur-sm"
                        onClick={() => setIsZoomed(false)} // Close on background click
                    >
                        {/* Wrapper to control click propagation */}
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="relative max-w-full max-h-full"
                            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking image wrapper
                        >
                            <Image
                                src="/certificate-level3.jpg"
                                alt="Sarbashev Level 3 Certificate (Full)"
                                width={1200}
                                height={1696}
                                className="w-auto h-auto max-h-[90vh] object-contain rounded-sm shadow-2xl border border-white/10"
                            />

                            {/* Close Button (Mobile friendly visual cue) */}
                            <button
                                onClick={() => setIsZoomed(false)}
                                className="absolute -top-12 right-0 md:top-4 md:-right-12 text-white/50 hover:text-white transition-colors p-2"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>

                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

        </div>
    );
};
