import React from 'react';
import Image from 'next/image';
import { BadgeCheck } from 'lucide-react';

interface Review {
    name: string;
    role: string;
    content: string;
    bgImage: string;
    verified: boolean;
}

const Testimonials: React.FC = () => {
    const reviews: Review[] = [
        {
            name: "Anna",
            role: "Stylistka",
            content: "AirTouch zmienił wszystko ❤️ Włosy gładkie, błyszczące, a ja czuję się pewniejsza niż kiedykolwiek. W pracy same komplementy, a mój chłopak nie może się napatrzeć 🥰",
            bgImage: "/opinia_clean_2.jpg",
            verified: true
        },
        {
            name: "Zuzanna",
            role: "Właścicielka Salonu",
            content: "Jestem bardzo szczęśliwa, że wybrałam AirTouch! Moje włosy wyglądają wspaniale, co sprawia, że od razu czuję się 😍 lepiej 😉🔥 Mój partner je uwielbia, a koleżanki z pracy naprawde sobie chwalą.",
            bgImage: "/opinia_clean_1.jpg",
            verified: true
        },
        {
            name: "Karolina",
            role: "Edukator",
            content: "„AirTouch to totalny game-changer! 💎 Jestem pod wrażeniem precyzji i profesjonalizmu tej metody. Włosy wyglądają luksusowo, nowocześnie i są niesamowicie lśniące. Czuję się jak nowa osoba!”",
            bgImage: "/opinia_clean_3.jpg",
            verified: true
        }
    ];

    return (
        <section className="py-20 px-4 md:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-sm font-bold tracking-widest uppercase mb-2 bg-clip-text text-transparent bg-gradient-to-r from-[#FCE7A4] via-[#D4AF37] to-[#B48811]">TESTIMONIALS</h2>
                    <h3 className="text-3xl md:text-5xl font-bold text-white">Co mówią uczestniczki?</h3>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {reviews.map((review, index) => (
                        <div
                            key={index}
                            className="relative h-[500px] rounded-3xl overflow-hidden border border-[#D4AF37]/20 group"
                        >
                            {/* Layer 1: Background Image */}
                            <Image
                                src={review.bgImage}
                                alt={`Efekt AirTouch - ${review.name}`}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                sizes="(max-width: 768px) 100vw, 33vw"
                            />

                            {/* Layer 2: Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent" />

                            {/* Layer 3: Content */}
                            <div className="absolute inset-0 flex flex-col justify-end p-8 z-10">
                                <div className="flex items-center gap-4 mb-4">
                                    {/* New Avatar Image */}
                                    <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-white/20 shrink-0">
                                        <Image
                                            src="/avatar-placeholder.png"
                                            alt={review.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>

                                    <div>
                                        <div className="flex items-center gap-2">
                                            <h4 className="text-white font-bold text-lg">{review.name}</h4>
                                            {review.verified && <BadgeCheck className="w-5 h-5 text-blue-500 fill-blue-500/10" />}
                                        </div>
                                        {/* <p className="text-gray-400 text-sm">{review.role}</p> */}
                                    </div>
                                </div>

                                <p className="text-gray-200 leading-relaxed text-sm md:text-base">
                                    {review.content}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
