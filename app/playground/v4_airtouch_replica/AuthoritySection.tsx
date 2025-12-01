'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Award, CheckCircle2 } from 'lucide-react';
import { CertificateDisplay } from './CertificateDisplay';

export const AuthoritySection = () => {
    return (
        <section className="relative w-full py-24 bg-[#050505] overflow-hidden">
            {/* Radial Gradient Background */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-yellow-900/10 via-[#050505] to-[#050505] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* LEWA STRONA - COPYWRITING */}
                    <div className="order-2 lg:order-1 space-y-8">
                        <div>
                            <h2 className="font-serif text-3xl md:text-5xl text-[#D4AF37] tracking-wide leading-tight mb-4">
                                GWARANCJA CZYSTOŚCI TECHNIKI
                            </h2>
                            <p className="text-gray-400 text-lg leading-relaxed">
                                Nie ucz się z kopii. Czerp prosto ze źródła. Wiedza niedostępna w Polsce ze względu na barierę językową – teraz na wyciągnięcie Twojej ręki.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="mt-1 p-2 bg-[#D4AF37]/10 rounded-full border border-[#D4AF37]/20">
                                    <Award className="w-6 h-6 text-[#D4AF37]" />
                                </div>
                                <div>
                                    <h3 className="text-white font-bold text-lg">MasterClass Graduate</h3>
                                    <p className="text-gray-400">Absolwentka wszystkich <span className="text-[#D4AF37] font-bold">3 poziomów</span> MasterClass u Vladimira Sarbasheva.</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="mt-1 p-2 bg-[#D4AF37]/10 rounded-full border border-[#D4AF37]/20">
                                    <CheckCircle2 className="w-6 h-6 text-[#D4AF37]" />
                                </div>
                                <div>
                                    <h3 className="text-white font-bold text-lg">Ogromna Inwestycja</h3>
                                    <p className="text-gray-400">Ponad <span className="text-[#D4AF37] font-bold">30 000 PLN</span> zainwestowane w oryginalną edukację, abyś Ty nie musiał zgadywać.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* PRAWA STRONA - DISPLAY CERTYFIKATU I WIDEO */}
                    <div className="order-1 lg:order-2 relative flex justify-center lg:justify-end">
                        <div className="relative w-full max-w-md">
                            <CertificateDisplay />


                        </div>


                    </div>
                </div>
            </div>
        </section>
    );
};
