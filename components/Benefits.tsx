import React from 'react';
import { Check } from 'lucide-react';

const Benefits = () => {
    const stylistBenefits = [
        "Wzrost zarobków o 60% w 3 miesiące",
        "Klientki wracają rzadziej, ale płacą 3x więcej",
        "Budowa portfolio Premium",
        "Mniej pracy fizycznej, większy zysk",
        "Przewaga nad konkurencją w regionie",
        "Prestiżowy Certyfikat TERST Academy"
    ];

    const clientBenefits = [
        "Naturalny efekt 'Seamless Blend'",
        "Brak odcięcia przy odroście (6 miesięcy spokoju)",
        "Zdrowsze włosy (minimalna ingerencja)",
        "Oszczędność czasu (rzadsze wizyty)",
        "Luksusowy wygląd fryzury",
        "Bezpieczeństwo (gwarancja jakości)"
    ];

    return (
        <section className="py-20 px-4 md:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                        Dlaczego <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FCE7A4] via-[#D4AF37] to-[#B48811]">AirTouch?</span>
                    </h2>
                    <p className="text-gray-400 text-lg">Korzyści dla Ciebie i Twoich klientek</p>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Stylist Column */}
                    <div className="bg-[#222] p-8 rounded-2xl border border-white/5 hover:border-[#D4AF37]/20 transition-colors">
                        <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                            <span className="w-2 h-8 bg-[#D4AF37] rounded-full" />
                            Dla Stylisty
                        </h3>
                        <ul className="space-y-4">
                            {stylistBenefits.map((benefit, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <div className="mt-1 min-w-5 min-h-5 w-5 h-5 rounded-full bg-[#D4AF37]/20 flex items-center justify-center">
                                        <Check className="w-3 h-3 text-[#D4AF37]" />
                                    </div>
                                    <span className="text-gray-300">{benefit}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Client Column */}
                    <div className="bg-[#222] p-8 rounded-2xl border border-white/5 hover:border-[#D4AF37]/20 transition-colors">
                        <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                            <span className="w-2 h-8 bg-white/20 rounded-full" />
                            Dla Klienta
                        </h3>
                        <ul className="space-y-4">
                            {clientBenefits.map((benefit, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <div className="mt-1 min-w-5 min-h-5 w-5 h-5 rounded-full bg-[#D4AF37]/20 flex items-center justify-center">
                                        <Check className="w-3 h-3 text-[#D4AF37]" />
                                    </div>
                                    <span className="text-gray-300">{benefit}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Benefits;
