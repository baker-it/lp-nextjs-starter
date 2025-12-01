import React from 'react';
import { Check, CreditCard } from 'lucide-react';
import { BorderBeam } from './BorderBeam';

const BENEFITS = [
    "2 dni intensywnego wdrożenia (Teoria + Modelki)",
    "Certyfikat imienny (Hologram Autentyczności)",
    "Dostęp do grupy Mastermind Absolwentów",
    "Gotowe skrypty konsultacji i wyceny (PDF)",
    "Gwarancja Satysfakcji (Zwrot pieniędzy 1. dnia)"
];

const COUNTDOWN = { d: "02", h: "14", m: "35" };

export const PricingCard = () => {
    return (
        <section className="py-24 bg-[#050505] text-white relative overflow-hidden">
            {/* Carbon Fiber Texture */}
            <div className="absolute inset-0 opacity-20" style={{
                backgroundImage: 'linear-gradient(45deg, #1a1a1a 25%, transparent 25%, transparent 75%, #1a1a1a 75%, #1a1a1a), linear-gradient(45deg, #1a1a1a 25%, transparent 25%, transparent 75%, #1a1a1a 75%, #1a1a1a)',
                backgroundSize: '20px 20px',
                backgroundPosition: '0 0, 10px 10px'
            }}></div>

            {/* Glow Effect behind the card */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#D4AF37] rounded-full blur-[120px] opacity-10 pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-lg mx-auto bg-[#0f0f0f] border border-[#D4AF37]/30 rounded-3xl shadow-[0_0_40px_rgba(234,179,8,0.1)] overflow-hidden relative">

                    <div className="p-8 md:p-12 flex flex-col items-center text-center">
                        {/* Header */}
                        <div className="text-xs tracking-widest text-gray-400 uppercase mb-4 font-medium">
                            NAJBLIŻSZA EDYCJA: WARSZAWA
                        </div>
                        <h3 className="font-serif text-2xl md:text-3xl text-white mb-6">
                            AirTouch Original: Level 1
                        </h3>

                        {/* Price */}
                        <div className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#F3E5AB] to-[#D4AF37] mb-2">
                            2500 PLN
                        </div>
                        <div className="text-xs text-gray-500 mb-8">
                            Cena brutto. Wystawiamy fakturę VAT.
                        </div>

                        {/* Countdown */}
                        <div className="flex gap-4 mb-10">
                            {Object.entries(COUNTDOWN).map(([unit, val]) => (
                                <div key={unit} className="flex flex-col items-center bg-white/5 border border-white/10 rounded-lg p-3 min-w-[70px]">
                                    <div className="text-2xl font-mono font-bold text-[#D4AF37]">{val}</div>
                                    <div className="text-[10px] uppercase tracking-wider text-gray-400 mt-1">
                                        {unit === 'd' ? 'DNI' : unit === 'h' ? 'GODZ' : 'MIN'}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Value Stack */}
                        <div className="w-full space-y-4 mb-10 text-left">
                            {BENEFITS.map((benefit, i) => (
                                <div key={i} className="flex items-start gap-3">
                                    <div className="mt-0.5 min-w-[20px] h-5 rounded-full bg-[#D4AF37]/10 flex items-center justify-center border border-[#D4AF37]/30">
                                        <Check className="w-3 h-3 text-[#D4AF37]" />
                                    </div>
                                    <span className="text-sm text-gray-300 leading-tight">{benefit}</span>
                                </div>
                            ))}
                        </div>

                        {/* CTA Button */}
                        <div className="w-full group relative mb-6">
                            {/* Border Beam */}
                            <BorderBeam
                                duration={8}
                                size={100}
                                colorFrom="transparent"
                                colorTo="#D4AF37"
                                className="from-transparent via-[#D4AF37] to-transparent"
                            />

                            <button className="relative z-10 w-full bg-gradient-to-r from-[#C5A028] to-[#E5C558] text-[#111] font-bold py-5 rounded-xl shadow-[0_0_30px_rgba(212,175,55,0.4)] hover:shadow-[0_0_50px_rgba(212,175,55,0.6)] hover:scale-[1.02] transition-all duration-300 uppercase tracking-widest text-sm overflow-hidden">
                                <span className="relative z-10">
                                    DOŁĄCZ DO ELITY — REZERWUJĘ MIEJSCE
                                </span>
                                {/* Shine Effect */}
                                <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-25deg] animate-shine"></div>
                            </button>
                        </div>

                        {/* Payment Icons */}
                        <div className="flex items-center justify-center gap-4 text-gray-500">
                            <CreditCard className="w-5 h-5" />
                            <span className="text-xs uppercase tracking-wider">Visa / Mastercard / Blik</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
