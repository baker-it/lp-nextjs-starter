import React from 'react';
import Image from 'next/image';
import { ArrowRight, Star } from 'lucide-react';

const Hero: React.FC = () => {
    return (
        <section className="relative w-full bg-transparent text-[#FAFAFA] py-20 px-4 md:px-8 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FACC15]/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#FACC15]/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

            <div className="max-w-7xl mx-auto flex flex-col items-center text-center relative z-10">
                {/* Logo / Brand */}
                <div className="mb-8 animate-fade-in">
                    <Image
                        src="/logo-terst.png"
                        alt="TERST Academy Logo"
                        width={180}
                        height={50}
                        className="h-auto w-auto"
                        priority
                    />
                </div>

                {/* Label */}
                <div className="mb-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#FACC15]/30 bg-[#FACC15]/5 text-[#FACC15] text-sm font-medium tracking-wider uppercase">
                    <Star className="w-3 h-3 fill-current" />
                    HERO SECTION
                </div>

                {/* Headline */}
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 max-w-5xl">
                    Zarabiaj <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FCE7A4] via-[#D4AF37] to-[#B48811]">10k+</span> Miesięcznie z AirTouch: 2-Dniowe Szkolenie, które Zwraca się w <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FCE7A4] via-[#D4AF37] to-[#B48811]">2 Klientkach</span>.
                </h1>

                {/* Subheadline */}
                <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl leading-relaxed">
                    Naucz się najbardziej poszukiwanej techniki rozjaśniania 2025. Seamless blend, 6-miesięczna trwałość, minimalne uszkodzenia włosów. Praktyka, certyfikat, lifetime wsparcie.
                </p>

                {/* CTA Button */}
                <button className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-black transition-all duration-200 bg-gradient-to-r from-[#FCE7A4] via-[#D4AF37] to-[#B48811] rounded-full hover:scale-105 shadow-[0_0_15px_rgba(212,175,55,0.4)] hover:shadow-[0_0_30px_rgba(212,175,55,0.6)]">
                    <span>Zarezerwuj Miejsce (Zostały 2)</span>
                    <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                </button>

                {/* Trust Bar */}
                <div className="mt-8 text-sm text-gray-400 flex items-center gap-2">
                    <div className="flex -space-x-2">
                        {/* Placeholder avatars if needed, or just text */}
                    </div>
                    <p>
                        <span className="text-[#FACC15] font-semibold">150+</span> fryzjerów przeszkolonych. Średni wzrost przychodów: <span className="text-[#FACC15] font-semibold">+60%</span>.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Hero;
