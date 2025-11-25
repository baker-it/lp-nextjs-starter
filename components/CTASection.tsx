import React from 'react';
import { ArrowRight, AlertTriangle } from 'lucide-react';

const CTASection = () => {
    return (
        <section className="py-24 px-4 md:px-8 relative overflow-hidden">
            {/* Dark Background with Gold Glow - Transparent to show global pattern */}
            <div className="absolute inset-0 bg-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#D4AF37]/10 to-transparent pointer-events-none" />

            {/* Texture/Pattern Overlay (optional) */}
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay" />

            <div className="max-w-4xl mx-auto text-center relative z-10">
                <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-[#D4AF37]/20">
                    <span className="text-[#D4AF37] font-bold tracking-wider text-sm">FINAL CTA SECTION</span>
                </div>

                <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 flex flex-col md:flex-row items-center justify-center gap-3">
                    <AlertTriangle className="w-10 h-10 fill-[#D4AF37] text-black" />
                    <span>UWAGA: Ostatnie 5 miejsc na najbliższe szkolenie.</span>
                </h2>

                <div className="flex flex-col items-center gap-6">
                    <button className="group relative inline-flex items-center justify-center px-8 py-5 text-lg font-bold text-black transition-all duration-200 bg-gradient-to-r from-[#FCE7A4] via-[#D4AF37] to-[#B48811] rounded-full hover:scale-105 shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:shadow-[0_0_40px_rgba(212,175,55,0.6)]">
                        <span>Zarezerwuj Miejsce i Odbierz Starter Kit (Ostatnie 2 Miejsca)</span>
                        <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                    </button>

                    <p className="text-gray-400 font-medium">
                        Gwarancja satysfakcji lub zwrot pieniędzy.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default CTASection;
