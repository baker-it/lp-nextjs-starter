import React from 'react';
import { Star } from 'lucide-react';

const TESTIMONIALS = [
    {
        id: 1,
        quote: "Ten kurs zmienił moje życie. Moje umiejętności poszybowały w górę, a moi klienci są zachwyceni wynikami. AirTouch to nie tylko technika, to filozofia. Moje zarobki wzrosły o 300% w ciągu trzech miesięcy!",
        author: "Sarah Jenkins",
        role: "Stylistka Gwiazd",
        initials: "SJ"
    },
    {
        id: 2,
        quote: "Nigdy nie sądziłam, że koloryzacja może być tak precyzyjna. System Sarbasheva to inżynieria w czystej postaci. Klientki wracają zachwycone, a ja pracuję spokojniej i pewniej.",
        author: "Karolina Nowak",
        role: "Właścicielka Salonu",
        initials: "KN"
    },
    {
        id: 3,
        quote: "Inwestycja w to szkolenie zwróciła się po pierwszym miesiącu. To nie jest zwykły kurs, to kompletny system pracy, który pozwala wejść na poziom premium.",
        author: "Marek Wiśniewski",
        role: "Master Colorist",
        initials: "MW"
    }
];

export const TestimonialsSection = () => {
    return (
        <section className="py-24 bg-[#0f0f0f]">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <div className="text-xs font-bold tracking-[0.2em] text-[#D4AF37] uppercase mb-4">Opinie Absolwentów</div>
                    <h2 className="font-serif text-4xl md:text-5xl font-bold text-white">
                        CO MÓWIĄ <span className="text-[#D4AF37]">PROFESJONALIŚCI</span>
                    </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {TESTIMONIALS.map((testimonial) => (
                        <div
                            key={testimonial.id}
                            className="relative p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-[#D4AF37]/50 transition-all duration-300 group"
                        >
                            {/* Stars */}
                            <div className="flex gap-1 mb-6">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <Star key={star} className="w-4 h-4 text-[#D4AF37] fill-[#D4AF37]" />
                                ))}
                            </div>

                            {/* Quote */}
                            <blockquote className="font-sans text-gray-300 text-sm leading-relaxed mb-8 min-h-[80px]">
                                &quot;{testimonial.quote}&quot;
                            </blockquote>

                            {/* Author */}
                            <div className="flex items-center gap-4 pt-6 border-t border-white/5">
                                <div className="w-10 h-10 rounded-full bg-[#D4AF37] flex items-center justify-center text-black font-bold text-xs shadow-lg shadow-[#D4AF37]/20">
                                    {testimonial.initials}
                                </div>
                                <div>
                                    <div className="text-white font-bold text-sm tracking-wide">{testimonial.author}</div>
                                    <div className="text-[#D4AF37] text-xs font-medium opacity-80">{testimonial.role}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
