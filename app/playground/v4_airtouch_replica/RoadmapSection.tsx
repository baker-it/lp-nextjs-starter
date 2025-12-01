'use client';

import { motion } from 'framer-motion';
import { Lock, Unlock, ArrowRight, CheckCircle } from 'lucide-react';

const LEVELS = [
    {
        id: 1,
        title: "LEVEL 1: FUNDAMENTY",
        subtitle: "Fundamenty Systemu & Schematy",
        status: "active",
        description: "Kompletne wdrożenie w system AirTouch. Od teorii architektury włosa po praktyczne schematy separacji.",
        cta: "Aplikuj na Level 1"
    },
    {
        id: 2,
        title: "LEVEL 2: ADVANCED",
        subtitle: "Korekty i Trudne Przypadki",
        status: "locked",
        description: "Zaawansowane techniki naprawcze, praca z plamami i trudną historią koloryzacji.",
        cta: "Dostępne dla Absolwentów L1"
    },
    {
        id: 3,
        title: "LEVEL 3: MASTER",
        subtitle: "Total Blonde & Art",
        status: "locked",
        description: "Artystyczne wariacje, Total Blonde w systemie AirTouch i techniki mistrzowskie.",
        cta: "Dostępne dla Absolwentów L2"
    }
];

export const RoadmapSection = () => {
    return (
        <section className="relative w-full py-24 bg-[#0a0a0a] overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="text-center mb-20">
                    <div className="text-xs font-bold tracking-[0.2em] text-[#D4AF37] uppercase mb-4">Ścieżka Rozwoju</div>
                    <h2 className="font-serif text-3xl md:text-5xl font-bold text-white mb-6">
                        KOMPLETNY SYSTEM <br /> <span className="text-[#D4AF37]">EDUKACJI</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        To nie jest jednorazowe szkolenie. To przemyślana ścieżka kariery, która zabierze Cię od podstaw do mistrzostwa.
                    </p>
                </div>

                <div className="relative max-w-4xl mx-auto">
                    {/* Vertical Line */}
                    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-[#D4AF37]/0 via-[#D4AF37]/30 to-[#D4AF37]/0" />

                    <div className="space-y-12">
                        {LEVELS.map((level, index) => {
                            const isActive = level.status === 'active';
                            const isLeft = index % 2 === 0;

                            return (
                                <motion.div
                                    key={level.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.5, delay: index * 0.2 }}
                                    className={`relative flex flex-col md:flex-row gap-8 ${isLeft ? 'md:flex-row-reverse' : ''}`}
                                >
                                    {/* Timeline Node */}
                                    <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full border-2 border-[#0a0a0a] z-10 flex items-center justify-center">
                                        <div className={`w-full h-full rounded-full flex items-center justify-center ${isActive ? 'bg-[#D4AF37] shadow-[0_0_15px_rgba(212,175,55,0.5)]' : 'bg-[#1a1a1a] border border-white/10'}`}>
                                            {isActive ? (
                                                <div className="w-2 h-2 bg-black rounded-full animate-pulse" />
                                            ) : (
                                                <Lock className="w-3 h-3 text-gray-500" />
                                            )}
                                        </div>
                                    </div>

                                    {/* Content Card */}
                                    <div className="ml-12 md:ml-0 md:w-1/2 pl-4 md:px-8">
                                        <div className={`relative p-8 rounded-2xl border backdrop-blur-sm transition-all duration-300 group
                                            ${isActive
                                                ? 'bg-[#D4AF37]/5 border-[#D4AF37]/30 shadow-[0_0_30px_rgba(212,175,55,0.05)] hover:border-[#D4AF37]/50'
                                                : 'bg-white/5 border-white/5 opacity-60 grayscale hover:grayscale-0 hover:opacity-100'
                                            }
                                        `}>
                                            {/* Status Badge */}
                                            <div className="flex justify-between items-start mb-4">
                                                <span className={`text-xs font-bold tracking-[0.2em] uppercase ${isActive ? 'text-[#D4AF37]' : 'text-gray-500'}`}>
                                                    {level.title}
                                                </span>
                                                {isActive && (
                                                    <span className="flex items-center gap-2 px-2 py-1 bg-[#D4AF37]/10 rounded text-[10px] font-bold text-[#D4AF37] border border-[#D4AF37]/20">
                                                        <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse" />
                                                        OTWARTA REKRUTACJA
                                                    </span>
                                                )}
                                            </div>

                                            <h3 className={`text-xl font-bold mb-3 ${isActive ? 'text-white' : 'text-gray-300'}`}>
                                                {level.subtitle}
                                            </h3>
                                            <p className="text-sm text-gray-400 leading-relaxed mb-6">
                                                {level.description}
                                            </p>

                                            <button
                                                disabled={!isActive}
                                                className={`w-full py-3 px-4 rounded text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all
                                                    ${isActive
                                                        ? 'bg-[#D4AF37] text-black hover:bg-[#E5C558] shadow-lg'
                                                        : 'bg-white/5 text-gray-500 cursor-not-allowed border border-white/5'
                                                    }
                                                `}
                                            >
                                                {isActive ? (
                                                    <>
                                                        {level.cta} <ArrowRight className="w-4 h-4" />
                                                    </>
                                                ) : (
                                                    <>
                                                        <Lock className="w-3 h-3" /> {level.cta}
                                                    </>
                                                )}
                                            </button>
                                        </div>
                                    </div>

                                    {/* Empty Space for the other side */}
                                    <div className="hidden md:block md:w-1/2" />
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};
