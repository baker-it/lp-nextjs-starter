'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const faqs = [
        {
            question: "Czy 2 dni wystarczą, żeby się tego nauczyć?",
            answer: "Tak, szkolenie jest intensywne i skupione na praktyce. Nasza unikalna metodologia pozwala na opanowanie techniki w 2 dni. Dodatkowo otrzymujesz dożywotnie wsparcie online."
        },
        {
            question: "Co jeśli zapomnę techniki po szkoleniu?",
            answer: "Otrzymujesz dostęp do zamkniętej grupy wsparcia oraz materiałów wideo, do których możesz wrócić w każdej chwili."
        },
        {
            question: "Ile mogę realnie brać za usługę AirTouch?",
            answer: "Średnia cena rynkowa to 800-1500 zł w zależności od długości włosów i lokalizacji. Inwestycja zwraca się błyskawicznie."
        },
        {
            question: "Czy dostępna jest płatność w ratach? (30% zaliczki + 6 rat 0%)",
            answer: "Tak, oferujemy elastyczne plany płatności. Wystarczy wpłacić 30% zaliczki, a resztę rozłożyć na wygodne raty 0%."
        },
        {
            question: "Czy muszę mieć doświadczenie w rozjaśnianiu?",
            answer: "Podstawowa wiedza fryzjerska jest wymagana, ale nie musisz być ekspertem w blondach. Uczymy wszystkiego od podstaw techniki AirTouch."
        }
    ];

    return (
        <section className="py-20 px-4 md:px-8">
            <div className="max-w-3xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="uppercase tracking-widest text-sm mb-2 bg-clip-text text-transparent bg-gradient-to-r from-[#FCE7A4] via-[#D4AF37] to-[#B48811]">OBIEKCJE / FAQ</h2>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="border border-white/10 rounded-lg bg-[#222] overflow-hidden transition-all duration-300 hover:border-[#D4AF37]/30"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                            >
                                <span className={`font-medium text-lg ${openIndex === index ? 'text-[#D4AF37]' : 'text-white'}`}>
                                    {faq.question}
                                </span>
                                {openIndex === index ? (
                                    <ChevronUp className="w-5 h-5 text-[#D4AF37]" />
                                ) : (
                                    <ChevronDown className="w-5 h-5 text-gray-400" />
                                )}
                            </button>

                            <div
                                className={`transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                                    }`}
                            >
                                <div className="p-6 pt-0 text-gray-400 leading-relaxed border-t border-white/5">
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
