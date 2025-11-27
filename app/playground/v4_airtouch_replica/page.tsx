import React from 'react'
import Image from 'next/image'
import { Playfair_Display, Inter } from 'next/font/google'
import { Check, Star, ArrowRight, AlertTriangle, X, Clock, Shield, Award, ChevronRight, Banknote, ShieldCheck, Users } from 'lucide-react'

// --- FONTS ---
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

// --- MOCK DATA ---
const MOCK_DATA = {
    hero: {
        headline: "NIE SZTUKA, A INŻYNIERIA. OPANUJ SYSTEM AIRTOUCH.",
        subheadline: "Przestań zgadywać. Opanuj system, który gwarantuje powtarzalne, luksusowe rezultaty i pozwala podnieść stawki o 50%. 2-dniowe intensywne wdrożenie.",
        cta: "ZAREZERWUJ MIEJSCE (OGRANICZONA ILOŚĆ)",
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
        headline: "NA CZYM POLEGA RÓŻNICA?",
        subheadline: "Zamień intuicję na precyzyjną inżynierię koloru. Odkryj precyzyjny system, który zamienia intuicję w gwarantowaną, 100% powtarzalną inżynierię koloru — Twój nowy sekret",
        steps: [
            { title: "KROK 1: Sekcjonowanie i Ekspozycja", desc: "Po podzieleniu włosów na cienkie sekcje aktywujemy technikę blow-out (cold air), aby odseparować i wydmuchnąć tzw. baby hair. To precyzyjne odizolowanie pasm zapewnia maksymalną czystość rozjaśnienia." },
            { title: "KROK 2: Dmuchanie do Perfekcji", desc: "Użycie chłodnego powietrza pozwala na mechaniczną separację naturalnych warstw włosów. Ten kontrolowany proces selekcji eliminuje błąd ludzki i jest fundamentalny dla powtarzalnych, luksusowych rezultatów." },
            { title: "Krok 3: Strategiczna aplikacja", desc: "Rozjaśniacz aplikowany jest wyłącznie na precyzyjnie wyselekcjonowane, dłuższe pasma. Rezultat: ~50% mniejsza ekspozycja włosów na chemię, drastycznie zmniejszając uszkodzenia." },
            { title: "KROK 4: Bezszwowe Tonowanie", desc: "Wyrównanie koloru za pomocą strategicznego tonowania. Efekt końcowy to ultra-naturalne, sun-kissed przejście z niewidocznym odrostem utrzymującym się 6-12 miesięcy." }
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

            {/* STICKY NAVBAR */}
            <nav className="fixed top-0 left-0 w-full z-50 bg-[#FAF9F6]/80 backdrop-blur-md border-b border-black/5 px-6 py-4">
                <div className="container mx-auto flex items-center justify-between">
                    <div className="relative h-12 w-40">
                        <Image
                            src="/logo-terst.png"
                            alt="Terst Academy Logo"
                            fill
                            className="object-contain object-left brightness-0"
                        />
                    </div>
                    <button className="text-xs font-bold border border-[#D4AF37] text-[#1A1A1A] px-6 py-3 rounded-full hover:bg-[#D4AF37] hover:text-white transition-colors uppercase tracking-widest">
                        DARMOWA KONSULTACJA
                    </button>
                </div>
            </nav>

            {/* 1. HERO SECTION */}
            <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
                {/* Background Elements */}
                <div className="absolute top-0 right-0 w-1/2 h-full bg-[#F0EBE0] -z-10 rounded-bl-[100px] hidden lg:block"></div>

                <div className="container mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center gap-12">
                    <div className="lg:w-1/2">

                        <div className="mb-4 text-xs font-bold tracking-[0.2em] text-[#D4AF37] uppercase">Hero Section</div>
                        <h1 className="font-serif text-5xl md:text-7xl font-bold leading-[1.05] mb-8 text-[#111]">
                            NIE SZTUKA, <br />
                            A <span className="bg-gradient-to-r from-[#D4AF37] to-[#B5902C] bg-clip-text text-transparent">
                                INŻYNIERIA.
                            </span> <br />
                            OPANUJ <br />
                            <span className="bg-gradient-to-r from-[#D4AF37] to-[#B5902C] bg-clip-text text-transparent">
                                SYSTEM AIRTOUCH.
                            </span>
                        </h1>
                        <p className="font-sans text-base md:text-lg text-gray-600 mb-10 max-w-lg leading-relaxed">
                            {MOCK_DATA.hero.subheadline}
                        </p>

                        <div className="flex flex-col gap-8 items-start">
                            <button className="bg-gradient-to-r from-[#C5A028] to-[#E5C558] text-[#111] font-bold py-4 px-10 rounded-full shadow-lg shadow-[#D4AF37]/30 hover:shadow-xl hover:scale-105 transition-all duration-300 uppercase tracking-wide text-sm">
                                {MOCK_DATA.hero.cta}
                            </button>

                            <div className="flex flex-col gap-3">
                                <div className="flex items-center gap-3 text-sm text-[#1A1A1A]">
                                    <Banknote className="w-5 h-5 text-[#D4AF37]" />
                                    <span>Wdróż usługę wycenianą na 1200 - 3000 PLN za wizytę.</span>
                                </div>
                                <div className="flex items-center gap-3 text-sm text-[#1A1A1A]">
                                    <ShieldCheck className="w-5 h-5 text-[#D4AF37]" />
                                    <span>100% Gwarancja Satysfakcji & Certyfikat Jakości TERST©.</span>
                                </div>
                                <div className="flex items-center gap-3 text-sm text-[#1A1A1A]">
                                    <Users className="w-5 h-5 text-[#D4AF37]" />
                                    <span>Metoda sprawdzona na 50+ klientkach.</span>
                                </div>
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
            <section className="py-32 bg-[#111] text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[#222] to-[#111]"></div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-24 border-b border-white/10 pb-12">
                        <div>
                            <span className="text-[#D4AF37] text-xs font-bold tracking-[0.2em] uppercase mb-4 block">Rozwiązanie</span>
                            <h2 className="font-serif text-4xl md:text-6xl italic">
                                {MOCK_DATA.solution.headline}
                            </h2>
                        </div>
                        <p className="text-gray-400 max-w-md text-right mt-8 md:mt-0 font-light">
                            {MOCK_DATA.solution.subheadline}
                        </p>
                    </div>

                    <div className="grid md:grid-cols-4 gap-8">
                        {MOCK_DATA.solution.steps.map((step, i) => (
                            <div key={i} className="group relative">
                                <div className="text-6xl font-serif text-[#222] group-hover:text-[#D4AF37]/20 transition-colors duration-500 absolute -top-10 -left-4 -z-10 font-bold">
                                    0{i + 1}
                                </div>
                                <div className="border-l border-[#D4AF37] pl-6 py-2 group-hover:border-white transition-colors duration-300">
                                    <h3 className="text-xl font-bold mb-3 text-[#D4AF37] group-hover:text-white transition-colors">{step.title}</h3>
                                    <p className="text-sm text-gray-400 leading-relaxed font-light">
                                        {step.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
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
                            &quot;{MOCK_DATA.socialProof.quote}&quot;
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
