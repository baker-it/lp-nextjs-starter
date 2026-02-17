'use client';

import { motion } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';

// Zakładamy, że importujesz to zdjęcie procesu jako local asset
// np. import processImage from '@/assets/images/process-foil.jpg';

export const ProcessReveal = () => {
    const [progress, setProgress] = useState(0);
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        let animationFrameId: number;

        const updateProgress = () => {
            if (videoRef.current) {
                const current = videoRef.current.currentTime;
                const duration = videoRef.current.duration;
                if (duration > 0) {
                    setProgress((current / duration) * 100);
                }
            }
            animationFrameId = requestAnimationFrame(updateProgress);
        };

        const handlePlay = () => {
            animationFrameId = requestAnimationFrame(updateProgress);
        };

        const handlePause = () => {
            cancelAnimationFrame(animationFrameId);
        };

        const videoElement = videoRef.current;
        if (videoElement) {
            videoElement.addEventListener('play', handlePlay);
            videoElement.addEventListener('pause', handlePause);
            // If already playing when effect runs
            if (!videoElement.paused) {
                handlePlay();
            }
        }

        return () => {
            if (videoElement) {
                videoElement.removeEventListener('play', handlePlay);
                videoElement.removeEventListener('pause', handlePause);
            }
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <section className="relative w-full py-24 bg-[#0a0a0a] overflow-hidden">
            <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                {/* LEWA STRONA - "INŻYNIERIA" OBRAZ */}
                <div className="relative group">
                    {/* Ozdobna ramka "Techniczna" */}
                    <div className="absolute -inset-2 border border-yellow-600/20 rounded-lg z-0" />
                    <div className="absolute -inset-1 border border-yellow-600/40 rounded-lg z-0 translate-x-2 translate-y-2" />

                    <div className="relative h-[500px] w-full rounded-lg overflow-hidden border border-white/10 shadow-2xl">
                        {/* Wideo procesu */}
                        <div className="absolute inset-0 bg-gray-800">
                            <video
                                ref={videoRef}
                                src="/process-video.mp4"
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="object-cover w-full h-full"
                            />
                        </div>

                        {/* Overlay Gradient - żeby pasowało do Dark Mode */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-90" />

                        {/* Animowany "skaner" lub linia podziału */}
                        <motion.div
                            initial={{ top: "0%" }}
                            animate={{ top: "100%" }}
                            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                            className="absolute left-0 right-0 h-[1px] bg-yellow-400/30 shadow-[0_0_10px_rgba(250,204,21,0.5)] z-20"
                        />

                        <div className="absolute bottom-6 left-6 right-6">
                            {/* REMOVED: PRECISION INDEX text */}
                            <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                                <motion.div
                                    style={{ width: `${progress}%` }}
                                    className="h-full bg-yellow-500"
                                />
                            </div>
                            <div className="flex justify-between mt-2 text-white font-serif italic text-lg">
                                <span>Separacja pasm</span>
                                <span className="text-yellow-500">{Math.round(progress)}%</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* PRAWA STRONA - COPY */}
                <div className="flex flex-col space-y-8">
                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <span className="h-[1px] w-12 bg-yellow-600"></span>
                            <span className="text-yellow-500 text-sm font-bold tracking-widest uppercase">Metodologia</span>
                        </div>
                        <h2 className="text-4xl lg:text-5xl font-serif text-white leading-tight">
                            To nie przypadek. <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-yellow-600">
                                To precyzja.
                            </span>
                        </h2>
                    </div>

                    <p className="text-gray-400 leading-relaxed text-lg">
                        Większość szkoleń uczy Cię &quot;jak nakładać farbę&quot;. System AirTouch uczy Cię
                        <strong className="text-white"> architektury włosa</strong>.
                        Opanuj schemat, który eliminuje zgadywanie i gwarantuje powtarzalny, luksusowy efekt.
                        To zdjęcie obok? To nie bałagan. To idealnie zaprojektowana separacja, która podnosi Twoje stawki o 50%.
                    </p>

                    <div className="flex gap-4 pt-4">
                        <button className="px-8 py-4 bg-yellow-600 text-black font-bold text-sm tracking-wider hover:bg-yellow-500 transition-colors">
                            ZOBACZ PROGRAM
                        </button>
                    </div>
                </div>

            </div>
        </section>
    );
};
