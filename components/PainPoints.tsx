import React from 'react';
import { Calendar, Zap, TrendingUp, Lock } from 'lucide-react';

const PainPoints = () => {
    const points = [
        {
            icon: Calendar,
            title: "Klientki wracają co 6 tyg.",
            impact: "(Utrata 1500 zł/rok)",
        },
        {
            icon: Zap,
            title: "Uszkodzone włosy.",
            impact: "(Spadek reputacji i churn rate)",
        },
        {
            icon: TrendingUp,
            title: "Konkurencja oferuje AirTouch.",
            impact: "(Utrata klientek premium)",
        },
        {
            icon: Lock,
            title: "Fear: \"Technika za trudna\".",
            impact: "(0 zł dodatkowego przychodu)",
        },
    ];

    return (
        <section className="py-20 px-4 md:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-sm font-bold tracking-widest uppercase mb-2 bg-clip-text text-transparent bg-gradient-to-r from-[#FCE7A4] via-[#D4AF37] to-[#B48811]">
                        Pain Points
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {points.map((point, index) => (
                        <div
                            key={index}
                            className="group relative p-8 bg-[#222] rounded-xl border border-white/5 hover:border-[#D4AF37]/30 transition-all duration-300 hover:-translate-y-1"
                        >
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500/0 via-red-500/50 to-red-500/0 opacity-0 group-hover:opacity-100 transition-opacity" />

                            <div className="flex flex-col items-center text-center h-full">
                                <div className="mb-6 p-4 rounded-full bg-white/5 text-[#D4AF37] group-hover:bg-[#D4AF37]/10 transition-colors">
                                    <point.icon className="w-8 h-8" />
                                </div>

                                <h3 className="text-xl font-bold text-white mb-3">
                                    {point.title}
                                </h3>

                                <p className="text-red-400 font-medium mt-auto">
                                    {point.impact}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PainPoints;
