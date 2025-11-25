import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { Playfair_Display } from 'next/font/google';

const playfair = Playfair_Display({ subsets: ['latin'] });

const Methodology = () => {
    const steps = [
        {
            title: "Pre-Training",
            description: "Dostęp do materiałów teoretycznych online przed spotkaniem."
        },
        {
            title: "Dzień 1: Teoria & Pokaz Demo",
            description: "Fundamenty techniki, analiza włosa, demonstracja na modelce."
        },
        {
            title: "Dzień 2: Intensywna Praktyka",
            description: "Praca na główkach treningowych (naturalny włos) pod okiem instruktora."
        },
        {
            title: "Post-Training",
            description: "Odbiór Certyfikatu, dostęp do zamkniętej grupy wsparcia lifetime."
        }
    ];

    return (
        <section className="py-20 px-4 md:px-8 relative overflow-hidden bg-transparent">
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-20">
                    <h2 className="text-sm font-bold tracking-widest uppercase mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#FCE7A4] via-[#D4AF37] to-[#B48811]">
                        METHODOLOGY
                    </h2>

                    <div className="p-8 rounded-2xl border border-[#D4AF37]/30 bg-[#D4AF37]/5 mb-10 inline-block max-w-3xl backdrop-blur-sm">
                        <p className="text-xl text-gray-200 leading-relaxed">
                            <span className="font-bold text-white">Szkolenie AirTouch Mastery (Poziom 1: Fundament)</span> jest pierwszym z trzech poziomów certyfikacji TERST Academy.
                        </p>
                    </div>

                    <p className="text-2xl md:text-3xl font-light leading-relaxed max-w-4xl mx-auto text-white">
                        Szkolenie to <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#FCE7A4] via-[#D4AF37] to-[#B48811]">teoria + intensywne warsztaty (praktyka)</span>. Ćwiczenia na główkach z naturalnymi włosami, które zabierasz ze sobą do dalszej pracy.
                    </p>

                    <p className={`mt-8 text-3xl md:text-4xl italic text-[#D4AF37] ${playfair.className}`}>
                        Szkolenie AirTouch TERST©
                    </p>
                </div>

                <div className="relative">
                    {/* Vertical Line - Golden Path */}
                    {/* Mobile: Left aligned (ml-4 + half icon width approx 1.5rem = ~2.5rem total offset or just absolute left) */}
                    {/* Desktop: Center aligned */}
                    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-[#D4AF37] to-transparent md:-translate-x-1/2" />

                    <div className="space-y-16">
                        {steps.map((step, index) => (
                            <div key={index} className={`relative flex flex-col md:flex-row gap-8 md:gap-0 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>

                                {/* Content Side */}
                                <div className={`flex-1 pl-16 md:pl-0 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16 md:text-left'}`}>
                                    <div>
                                        <h3 className="text-2xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-[#FCE7A4] via-[#D4AF37] to-[#B48811]">
                                            {step.title}
                                        </h3>
                                        <p className="text-gray-300 text-lg leading-relaxed">{step.description}</p>
                                    </div>
                                </div>

                                {/* Icon/Marker Center */}
                                {/* Mobile: Left aligned matching the line */}
                                {/* Desktop: Center aligned */}
                                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full z-10 bg-gradient-to-br from-[#FCE7A4] via-[#D4AF37] to-[#B48811] shadow-[0_0_15px_rgba(212,175,55,0.5)]">
                                    <CheckCircle2 className="w-6 h-6 text-black" />
                                </div>

                                {/* Empty Side for Balance (Desktop only) */}
                                <div className="flex-1 hidden md:block" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Methodology;
