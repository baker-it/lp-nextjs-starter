'use client';

import { motion } from 'framer-motion';
import { CertificateDisplay } from './CertificateDisplay';

export const AuthoritySection = () => {
    return (
        <section className="relative w-full py-24 bg-[#050505] overflow-hidden">
            {/* Radial Gradient Background - Subtle warming behind the content */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,_rgba(212,175,55,0.08),_transparent_60%)] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* Layout: Text on the Left, Visuals (Certificate + Video) on the Right */}

                    <div className="order-1 lg:order-1 space-y-6">
                        {/* Nagłówek i Sub-nagłówek */}
                        <div className="space-y-4">
                            <h2 className="font-serif text-3xl md:text-5xl text-[#D4AF37] tracking-wide leading-tight">
                                Wiedza prosto od Twórcy. <br />
                                <span className="text-white">Zero &quot;głuchego telefonu&quot;.</span>
                            </h2>
                            <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
                                Nie uczę techniki z YouTube&apos;a ani od pośredników. Jako jedna z nielicznych w Polsce posiadam Level 3 zdobyty bezpośrednio u rąk <span className="text-white font-bold">Vladimira Sarbasheva</span>. Przekazuję Ci czysty, niezniekształcony system.
                            </p>
                        </div>
                    </div>

                    <div className="order-2 lg:order-2 relative">
                        {/* Visuals - Certificate + Video Composite */}
                        <CertificateDisplay />
                    </div>

                </div>
            </div>
        </section>
    );
};
