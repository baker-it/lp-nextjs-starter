import React from 'react'
import Image from 'next/image'
import { Playfair_Display, Inter } from 'next/font/google'
import { Check, Star, ArrowRight, AlertTriangle, X, Clock, Shield, Award, ChevronRight } from 'lucide-react'

// --- FONTS ---
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

// --- MOCK DATA ---
const MOCK_DATA = {
    hero: {
        headline: "OPANUJ SZTUKĘ AIRTOUCH. ZDEFINIUJ SWOJĄ PRZYSZŁOŚĆ.",
        subheadline: "Definitywne szkolenie dla profesjonalnych stylistów, którzy chcą dominować na rynku, osiągać nieosiągalne wyniki i podnieść swoje stawki. Zapewnij o kompromisach. To jest Twoja droga do mistrzostwa.",
        cta: "ZAPISZ SIĘ NA SZKOLENIE",
        image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1600&q=80"
    },
    problem: {
        headline: "OGRANICZENIA TRADYCYJNEGO BALEYAGE",
        items: [
            {
                title: "NIESPÓJNE MIESZANIE",
                description: "Tradycyjne techniki często prowadzą do ostrych linii, plam i nierównomiernego rozjaśnienia, frustrując klientów i stylistów."
            },
            {
                title: "USZKODZENIA",
                description: "Nadmierne przetrzymywanie i agresywne chemii niszczą strukturę włosa, powodując łamliwość i matowy wygląd."
            },
            {
                title: "NISKIE ZAROBKI",
                description: "Bez specjalistycznych umiejętności, trudno jest uzasadnić wyższe ceny, a konkurencja ciągle depcze po piętach."
            }
        ]
    },
    solution: {
        headline: "METODOLOGIA AIRTOUCH",
        steps: [
            { title: "KROK 1: PRECYZYJNE SEKCJONOWANIE", desc: "Oddzielanie krótszych włosów od dłuższych za pomocą strumienia powietrza dla idealnego cieniowania." },
            { title: "KROK 2: APLIKACJA I KONTROLA ROZJAŚNIANIA", desc: "Techniki aplikacji, które minimalizują uszkodzenia i zapewniają równomierne rezultaty." },
            { title: "KROK 3: TONOWANIE I PERSONALIZACJA KOLORU", desc: "Tworzenie unikalnych, wielowymiarowych odcieni dopasowanych do klienta." },
            { title: "KROK 4: WYKOŃCZENIE I STYLIZACJA MISTRZOWSKA", desc: "Techniki stylizacji podkreślające efekt AirTouch i trwałość fryzury." }
        ]
    },
    socialProof: {
        headline: "PRZEMIANA",
        quote: "Ten kurs zmienił moje życie. Moje umiejętności poszybowały w górę, a moi klienci są zachwyceni wynikami. AirTouch to nie tylko technika, to filozofia. Moje zarobki wzrosły o 300% w ciągu trzech miesięcy!",
        author: "Sarah Jenkins",
        role: "Stylistka Gwiazd",
        beforeImage: "https://images.unsplash.com/photo-1634449571010-02389ed0f9b0?auto=format&fit=crop&w=800&q=80",
        afterImage: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=800&q=80"
    },
    pricing: {
        headline: "ZABEZPIECZ SWOJE MIEJSCE — 2500 ZŁ",
        cta: "ZAPISZ SIĘ NA SZKOLENIE TERAZ",
        countdown: { d: "02", h: "14", m: "35" }
    }
}

export default function V4AirTouchReplica() {
    return (
        <div className={`${playfair.variable} ${inter.variable} font-sans bg-[#F9F7F2] text-[#1A1A1A] min-h-screen selection:bg-[#D4AF37] selection:text-white overflow-x-hidden`}>

            {/* 1. HERO SECTION */}
            <section className="relative pt-12 pb-20 lg:pt-24 lg:pb-32 overflow-hidden">
                {/* Background Elements */}
                <div className="absolute top-0 right-0 w-1/2 h-full bg-[#F0EBE0] -z-10 rounded-bl-[100px] hidden lg:block"></div>

                <div className="container mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center gap-12">
                    <div className="lg:w-1/2">
                        <div className="flex items-center justify-between mb-12">
                            <div className="font-serif font-bold text-xl tracking-tight">AirTouch <span className="text-[#D4AF37]">Mastery</span></div>
                            <button className="text-xs font-bold border border-black px-4 py-2 rounded-full hover:bg-black hover:text-white transition-colors uppercase tracking-widest">Zapisz się</button>
                        </div>

                        <div className="mb-4 text-xs font-bold tracking-[0.2em] text-[#D4AF37] uppercase">Hero Section</div>
                        <h1 className="font-serif text-5xl md:text-7xl font-bold leading-[1.05] mb-8 text-[#111]">
                            OPANUJ SZTUKĘ <br />
                            AIRTOUCH. <br />
                            ZDEFINIUJ SWOJĄ <br />
                            <span className="relative inline-block">
                                PRZYSZŁOŚĆ.
                                <span className="absolute bottom-2 left-0 w-full h-3 bg-[#D4AF37]/20 -z-10"></span>
                            </span>
                        </h1>
                        <p className="font-sans text-base md:text-lg opacity-70 mb-10 max-w-lg leading-relaxed">
                            {MOCK_DATA.hero.subheadline}
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
                            <button className="bg-gradient-to-r from-[#C5A028] to-[#E5C558] text-[#111] font-bold py-4 px-10 rounded-full shadow-lg shadow-[#D4AF37]/30 hover:shadow-xl hover:scale-105 transition-all duration-300 uppercase tracking-wide text-sm">
                                {MOCK_DATA.hero.cta}
                            </button>
                            <div className="flex items-center gap-2 text-xs font-medium opacity-60">
                                <Shield className="w-4 h-4" />
                                <span>Gwarancja dostępności.<br />Gwarancja satysfakcji.</span>
                            </div>
                        </div>
                    </div>

                    <div className="lg:w-1/2 relative mt-12 lg:mt-0">
                        <div className="relative z-10 rounded-t-[200px] overflow-hidden border-4 border-white shadow-2xl max-w-md mx-auto">
                            <Image
                                src={MOCK_DATA.hero.image}
                                alt="Hero Model"
                                width={600}
                                height={800}
                                className="object-cover w-full h-auto"
                                priority
                            />
                            {/* Badge */}
                            <div className="absolute top-10 right-4 w-24 h-24 bg-gradient-to-br from-[#F9F7F2] to-[#E5C558] rounded-full flex items-center justify-center shadow-xl border-2 border-white p-1 rotate-12">
                                <div className="w-full h-full border border-[#D4AF37] rounded-full flex flex-col items-center justify-center text-center p-2">
                                    <span className="text-[8px] font-bold uppercase tracking-widest mb-1">Master Class</span>
                                    <Award className="w-6 h-6 text-[#111]" />
                                    <span className="text-[8px] font-bold uppercase tracking-widest mt-1">Certified</span>
                                </div>
                            </div>
                        </div>
                        {/* Decorative Circle */}
                        <div className="absolute bottom-10 -left-10 w-32 h-32 bg-[#D4AF37] rounded-full blur-3xl opacity-20 -z-10"></div>
                    </div>
                </div>
            </section>

            {/* 2. PROBLEM SECTION */}
            <section className="py-24 bg-white relative">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-20">
                        <div className="text-xs font-bold tracking-[0.2em] text-[#D4AF37] uppercase mb-4">Problem Section (Agitation)</div>
                        <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-[#111]">
                            OGRANICZENIA <br />
                            TRADYCYJNEGO BALEYAGE
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {MOCK_DATA.problem.items.map((item, i) => (
                            <div key={i} className="relative group">
                                {/* Card Background with Gold Border Effect */}
                                <div className="absolute inset-0 bg-gradient-to-b from-[#D4AF37] to-[#B5902C] rounded-2xl transform translate-y-2 translate-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <div className="relative bg-[#FDFBF7] p-8 rounded-2xl border border-[#E5E0D0] shadow-lg h-full flex flex-col items-center text-center hover:-translate-y-1 transition-transform duration-300">
                                    <div className="w-12 h-12 bg-gradient-to-br from-[#D4AF37] to-[#B5902C] rounded-full flex items-center justify-center mb-6 shadow-md text-white">
                                        <span className="font-serif font-bold text-2xl">!</span>
                                    </div>
                                    <h3 className="font-bold text-lg mb-4 uppercase tracking-wide">{item.title}</h3>
                                    <p className="text-sm opacity-70 leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-16 text-sm font-medium opacity-60 max-w-2xl mx-auto">
                        Nie pozwól, by przestarzałe metody hamowały Twój sukces. Przełam bariery.
                    </div>
                </div>
            </section>

            {/* 3. SOLUTION SECTION */}
            <section className="py-24 bg-[#0A0A0A] text-white relative overflow-hidden">
                {/* Hexagon Pattern Overlay */}
                <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center mb-20">
                        <div className="text-xs font-bold tracking-[0.2em] text-[#D4AF37] uppercase mb-4">Solution Section</div>
                        <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#D4AF37]">METODOLOGIA AIRTOUCH</h2>
                    </div>

                    <div className="grid md:grid-cols-4 gap-8 relative">
                        {/* Connecting Line (Desktop) */}
                        <div className="hidden md:block absolute top-12 left-0 w-full h-[2px] bg-[#D4AF37]/20 -z-10"></div>

                        {MOCK_DATA.solution.steps.map((step, i) => (
                            <div key={i} className="flex flex-col items-center text-center group">
                                <div className="w-24 h-24 rounded-full border-2 border-[#D4AF37] bg-[#111] flex items-center justify-center mb-8 group-hover:bg-[#D4AF37] group-hover:text-black transition-colors duration-500 relative z-10">
                                    {/* Icons based on step */}
                                    {i === 0 && <span className="text-3xl">✂️</span>}
                                    {i === 1 && <span className="text-3xl">🖌️</span>}
                                    {i === 2 && <span className="text-3xl">🎨</span>}
                                    {i === 3 && <span className="text-3xl">✨</span>}
                                </div>
                                <h3 className="text-[#D4AF37] font-bold text-sm uppercase tracking-widest mb-3 h-10 flex items-center justify-center">{step.title.split(':')[0]}</h3>
                                <div className="text-xs font-bold mb-3">{step.title.split(':')[1]}</div>
                                <p className="text-xs text-gray-400 leading-relaxed max-w-[200px]">
                                    {step.desc}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-20 text-gray-500 text-sm italic">
                        System, który gwarantuje spójne, luksusowe rezultaty za każdym razem.
                    </div>
                </div>
            </section>

            {/* 4. SOCIAL PROOF / TRANSFORMATION */}
            <section className="py-24 bg-[#F9F7F2]">
                <div className="container mx-auto px-6 text-center">
                    <div className="text-xs font-bold tracking-[0.2em] text-[#D4AF37] uppercase mb-4">Social Proof / Transformation Section</div>
                    <h2 className="font-serif text-4xl md:text-5xl font-bold mb-16 text-[#111]">PRZEMIANA</h2>

                    <div className="max-w-4xl mx-auto bg-white p-4 rounded-3xl shadow-2xl mb-16 relative">
                        {/* Before/After Visualization */}
                        <div className="relative aspect-[16/9] md:aspect-[2/1] rounded-2xl overflow-hidden flex">
                            <div className="w-1/2 relative">
                                <Image src={MOCK_DATA.socialProof.beforeImage} alt="Before" fill className="object-cover" />
                                <div className="absolute bottom-6 left-6 bg-black/60 text-white text-xs font-bold px-4 py-2 rounded-full backdrop-blur-sm">PRZED</div>
                                <div className="absolute top-6 left-6 w-8 h-8 bg-red-500/20 rounded-full flex items-center justify-center backdrop-blur-md">
                                    <X className="w-4 h-4 text-red-600" />
                                </div>
                            </div>
                            <div className="w-1/2 relative">
                                <Image src={MOCK_DATA.socialProof.afterImage} alt="After" fill className="object-cover" />
                                <div className="absolute bottom-6 right-6 bg-[#D4AF37] text-black text-xs font-bold px-4 py-2 rounded-full shadow-lg">PO</div>
                                <div className="absolute top-6 right-6 w-8 h-8 bg-[#D4AF37] rounded-full flex items-center justify-center shadow-lg">
                                    <Check className="w-4 h-4 text-black" />
                                </div>
                            </div>

                            {/* Center Slider Handle Simulation */}
                            <div className="absolute top-0 bottom-0 left-1/2 w-1 bg-white cursor-ew-resize flex items-center justify-center -translate-x-1/2">
                                <div className="w-10 h-10 bg-gradient-to-r from-[#D4AF37] to-[#B5902C] rounded-full border-4 border-white shadow-xl flex items-center justify-center">
                                    <div className="flex gap-1">
                                        <ChevronRight className="w-3 h-3 text-white rotate-180" />
                                        <ChevronRight className="w-3 h-3 text-white" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-[#111] text-white text-xs font-bold px-6 py-2 rounded-full uppercase tracking-widest shadow-xl">
                            Przesuń aby zobaczyć
                        </div>
                    </div>

                    <div className="max-w-3xl mx-auto">
                        <div className="flex justify-center mb-6">
                            {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-5 h-5 text-[#D4AF37] fill-current" />)}
                        </div>
                        <blockquote className="font-serif text-2xl md:text-3xl italic leading-relaxed mb-8 text-[#111]">
                            "{MOCK_DATA.socialProof.quote}"
                        </blockquote>
                        <div className="flex items-center justify-center gap-4">
                            <div className="w-12 h-12 bg-gray-300 rounded-full overflow-hidden">
                                {/* Avatar placeholder */}
                                <div className="w-full h-full bg-[#D4AF37]"></div>
                            </div>
                            <div className="text-left">
                                <div className="font-bold text-sm uppercase tracking-widest">{MOCK_DATA.socialProof.author}</div>
                                <div className="text-[#D4AF37] text-xs font-bold">{MOCK_DATA.socialProof.role}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. PRICING / CTA */}
            <section className="py-24 bg-[#050505] text-white relative overflow-hidden">
                {/* Carbon Fiber Texture */}
                <div className="absolute inset-0 opacity-20" style={{
                    backgroundImage: 'linear-gradient(45deg, #1a1a1a 25%, transparent 25%, transparent 75%, #1a1a1a 75%, #1a1a1a), linear-gradient(45deg, #1a1a1a 25%, transparent 25%, transparent 75%, #1a1a1a 75%, #1a1a1a)',
                    backgroundSize: '20px 20px',
                    backgroundPosition: '0 0, 10px 10px'
                }}></div>

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <div className="text-xs font-bold tracking-[0.2em] text-gray-500 uppercase mb-4">Pricing / CTA</div>
                    <h2 className="font-serif text-3xl md:text-5xl font-bold mb-12">
                        ZABEZPIECZ SWOJE MIEJSCE — <span className="text-[#D4AF37]">2500 ZŁ</span>
                    </h2>

                    <div className="flex justify-center gap-8 md:gap-16 mb-16">
                        {Object.entries(MOCK_DATA.pricing.countdown).map(([unit, val]) => (
                            <div key={unit} className="text-center">
                                <div className="text-6xl md:text-8xl font-bold font-mono text-[#D4AF37] leading-none mb-2">{val}</div>
                                <div className="text-xs uppercase tracking-[0.3em] text-gray-400">{unit === 'd' ? 'DNI' : unit === 'h' ? 'GODZ' : 'MIN'}</div>
                            </div>
                        ))}
                    </div>

                    <div className="max-w-md mx-auto space-y-3 mb-12 text-left text-sm text-gray-300">
                        {[
                            "Dostęp do ekskluzywnej platformy szkoleniowej",
                            "Certyfikat ukończenia AirTouch Mastery",
                            "Wsparcie mentorskie online",
                            "Bonusowe materiały i poradniki",
                            "Gwarancja satysfakcji 30 dni"
                        ].map((feat, i) => (
                            <div key={i} className="flex items-center gap-3">
                                <Check className="w-4 h-4 text-[#D4AF37]" />
                                <span>{feat}</span>
                            </div>
                        ))}
                    </div>

                    <button className="w-full md:w-auto bg-gradient-to-r from-[#C5A028] to-[#E5C558] text-[#111] font-bold py-5 px-16 rounded-full shadow-[0_0_30px_rgba(212,175,55,0.4)] hover:shadow-[0_0_50px_rgba(212,175,55,0.6)] hover:scale-105 transition-all duration-300 uppercase tracking-widest text-sm mb-8">
                        {MOCK_DATA.pricing.cta}
                    </button>

                    <p className="text-xs text-gray-600 max-w-lg mx-auto">
                        Promocja ograniczona czasowo lub do wyczerpania miejsc. Rozpocznij swoją podróż do mistrzostwa już dziś.
                    </p>

                    <div className="mt-20 flex justify-center gap-6 opacity-30">
                        <div className="w-6 h-6 bg-white rounded-full"></div>
                        <div className="w-6 h-6 bg-white rounded-full"></div>
                        <div className="w-6 h-6 bg-white rounded-full"></div>
                    </div>
                    <div className="mt-4 text-[10px] text-gray-700 uppercase tracking-widest">
                        © 2025 AirTouch Mastery. Wszystkie prawa zastrzeżone.
                    </div>
                </div>
            </section>

        </div>
    )
}
