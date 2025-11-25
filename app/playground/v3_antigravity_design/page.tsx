import React from 'react'
import Image from 'next/image'
import { Playfair_Display, Inter } from 'next/font/google'
import { Check, Star, ArrowRight, AlertTriangle, X, Clock, Shield } from 'lucide-react'

// --- FONTS ---
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

// --- MOCK DATA ---
const MOCK_DATA = {
    hero: {
        headline: "OPANUJ SZTUKĘ AIRTOUCH. ZDEFINIUJ SWOJĄ PRZYSZŁOŚĆ.",
        subheadline: "Definitywne szkolenie dla profesjonalnych stylistów poszukujących precyzji, naturalnych efektów i znacząco wyższych przychodów z usług koloryzacji.",
        cta: "ZAPISZ SIĘ NA SZKOLENIE",
        image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1600&q=80"
    },
    problem: {
        headline: "OGRANICZENIA TRADYCYJNEGO BALEYAGE",
        items: [
            {
                title: "Niespójne Mieszanie",
                description: "Tradycyjne techniki ręcznego malowania często skutkują widocznymi liniami odrostu i nierównym rozkładem koloru."
            },
            {
                title: "Uszkodzenia Włosów",
                description: "Nadmierna aplikacja rozjaśniacza prowadzi do uszkodzeń, łamliwości i niezadowolenia klientek."
            },
            {
                title: "Niskie Zarobki",
                description: "Nieprzewidywalne rezultaty ograniczają Twoją zdolność do pobierania premium cen za usługi."
            }
        ]
    },
    solution: {
        headline: "METODOLOGIA AIRTOUCH",
        steps: [
            { title: "1. Sekcjonowanie", desc: "Precyzyjny podział i wydmuchanie baby hair." },
            { title: "2. Separacja", desc: "Chłodne powietrze idealnie oddziela warstwy." },
            { title: "3. Aplikacja", desc: "Bezpieczne rozjaśnianie tylko wybranych pasm." },
            { title: "4. Tonowanie", desc: "Bezszwowe przejścia i naturalny efekt." }
        ]
    },
    socialProof: {
        headline: "PRZEMIANA",
        quote: "Byłam przerażona – technika wyglądała na skomplikowaną. Po szkoleniu, pierwsza klientka PŁAKAŁA ze szczęścia. Teraz jestem w pełni zarezerwowana.",
        author: "Sarah Jenkins",
        role: "Senior Stylist",
        beforeImage: "https://images.unsplash.com/photo-1634449571010-02389ed0f9b0?auto=format&fit=crop&w=800&q=80",
        afterImage: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=800&q=80"
    },
    pricing: {
        headline: "ZABEZPIECZ SWOJE MIEJSCE — 2500 ZŁ",
        cta: "ZAPISZ SIĘ TERAZ",
        countdown: { d: "02", h: "14", m: "35" }
    }
}

export default function AirTouchLandingPage() {
    return (
        <div className={`${playfair.variable} ${inter.variable} font-sans bg-[#F9F7F2] text-[#1A1A1A] min-h-screen selection:bg-[#D4AF37] selection:text-white`}>

            {/* 1. HERO SECTION */}
            <section className="relative min-h-[90vh] flex items-center overflow-hidden">
                <div className="container mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center gap-16">
                    <div className="lg:w-1/2 pt-20 lg:pt-0">
                        <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 border border-[#D4AF37] text-[#D4AF37] text-xs font-bold tracking-[0.2em] uppercase bg-white/50 backdrop-blur-sm">
                            <Star className="w-3 h-3 fill-current" /> Master Class
                        </div>
                        <h1 className="font-serif text-5xl md:text-7xl font-bold leading-[1.1] mb-8 tracking-tight">
                            OPANUJ SZTUKĘ <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#B5902C]">AIRTOUCH</span>. <br />
                            ZDEFINIUJ PRZYSZŁOŚĆ.
                        </h1>
                        <p className="font-sans text-lg md:text-xl opacity-70 mb-12 max-w-xl leading-relaxed font-light">
                            {MOCK_DATA.hero.subheadline}
                        </p>
                        <button className="group relative overflow-hidden bg-[#111] text-white font-bold py-6 px-12 text-sm uppercase tracking-[0.15em] hover:shadow-2xl hover:shadow-[#D4AF37]/20 transition-all duration-300">
                            <span className="relative z-10 flex items-center gap-3">
                                {MOCK_DATA.hero.cta} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37] to-[#B5902C] transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
                        </button>
                    </div>

                    <div className="lg:w-1/2 relative h-[700px] w-full hidden lg:block">
                        <div className="absolute top-0 right-0 w-[85%] h-full bg-[#111] overflow-hidden shadow-2xl transform rotate-2 border-4 border-white">
                            <Image
                                src={MOCK_DATA.hero.image}
                                alt="Hero Model"
                                fill
                                className="object-cover opacity-90 hover:opacity-100 hover:scale-105 transition-all duration-1000"
                                priority
                            />
                        </div>
                        {/* Decorative Elements */}
                        <div className="absolute -bottom-10 -left-4 w-64 h-64 bg-[#D4AF37]/10 rounded-full blur-3xl"></div>
                        <div className="absolute top-1/2 -right-10 w-40 h-40 bg-[#D4AF37]/20 rounded-full blur-3xl"></div>
                    </div>
                </div>
            </section>

            {/* 2. PROBLEM SECTION (Agitation) */}
            <section className="py-32 bg-white relative">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-24 max-w-3xl mx-auto">
                        <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
                            {MOCK_DATA.problem.headline}
                        </h2>
                        <div className="w-20 h-1 bg-[#D4AF37] mx-auto"></div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-12">
                        {MOCK_DATA.problem.items.map((item, i) => (
                            <div key={i} className="group p-10 bg-[#F9F7F2] border border-transparent hover:border-[#D4AF37]/30 transition-all duration-300 hover:-translate-y-2">
                                <div className="w-16 h-16 mx-auto mb-8 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                                    <AlertTriangle className="w-7 h-7 text-[#D4AF37]" />
                                </div>
                                <h3 className="font-serif text-2xl font-bold mb-4 text-center">{item.title}</h3>
                                <p className="text-center opacity-60 leading-relaxed text-sm font-light">
                                    {item.description}
                                </p>
                            </div>
                        ))}
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
                            Systematyczny proces, który eliminuje zgadywanie i gwarantuje powtarzalne, luksusowe rezultaty.
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
            <section className="py-32 bg-[#F9F7F2]">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row gap-20 items-center">
                        {/* Before/After Image */}
                        <div className="md:w-1/2 relative group">
                            <div className="absolute -inset-4 border border-[#D4AF37] opacity-30 group-hover:scale-105 transition-transform duration-700"></div>
                            <div className="relative flex h-[600px] w-full shadow-2xl overflow-hidden">
                                <div className="w-1/2 relative border-r border-white/20">
                                    <Image src={MOCK_DATA.socialProof.beforeImage} alt="Before" fill className="object-cover" />
                                    <div className="absolute bottom-6 left-6 bg-black/80 text-white text-xs font-bold px-3 py-1 tracking-widest backdrop-blur-md">BEFORE</div>
                                </div>
                                <div className="w-1/2 relative">
                                    <Image src={MOCK_DATA.socialProof.afterImage} alt="After" fill className="object-cover" />
                                    <div className="absolute bottom-6 right-6 bg-[#D4AF37] text-black text-xs font-bold px-3 py-1 tracking-widest shadow-lg">AFTER</div>
                                </div>
                            </div>
                        </div>

                        {/* Testimonial */}
                        <div className="md:w-1/2">
                            <span className="text-[#D4AF37] text-xs font-bold tracking-[0.2em] uppercase mb-8 block">{MOCK_DATA.socialProof.headline}</span>
                            <div className="mb-10">
                                {[1, 2, 3, 4, 5].map(s => <Star key={s} className="inline-block w-5 h-5 text-[#D4AF37] fill-current mr-1" />)}
                            </div>
                            <blockquote className="font-serif text-3xl md:text-4xl leading-tight mb-12 text-[#111]">
                                "{MOCK_DATA.socialProof.quote}"
                            </blockquote>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden relative">
                                    {/* Placeholder avatar */}
                                    <div className="absolute inset-0 bg-[#D4AF37]"></div>
                                </div>
                                <div>
                                    <div className="font-bold text-lg uppercase tracking-widest">{MOCK_DATA.socialProof.author}</div>
                                    <div className="text-[#D4AF37] text-sm font-medium">{MOCK_DATA.socialProof.role}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. PRICING / CTA */}
            <section className="py-32 bg-[#111] text-white relative overflow-hidden">
                {/* Carbon fiber pattern overlay */}
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#333 1px, transparent 1px)', backgroundSize: '4px 4px' }}></div>

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <div className="max-w-5xl mx-auto bg-[#1a1a1a] p-12 md:p-24 border border-[#333] shadow-2xl relative overflow-hidden group">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#D4AF37] via-[#F9F7F2] to-[#D4AF37] opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>

                        <h2 className="font-serif text-4xl md:text-6xl font-bold mb-12 tracking-tight">
                            {MOCK_DATA.pricing.headline}
                        </h2>

                        <div className="flex justify-center gap-8 md:gap-20 mb-16 font-mono text-[#D4AF37]">
                            {Object.entries(MOCK_DATA.pricing.countdown).map(([unit, val]) => (
                                <div key={unit} className="text-center">
                                    <div className="text-5xl md:text-7xl font-bold mb-2">{val}</div>
                                    <div className="text-xs tracking-[0.2em] opacity-50 uppercase">{unit === 'd' ? 'Dni' : unit === 'h' ? 'Godz' : 'Min'}</div>
                                </div>
                            ))}
                        </div>

                        <button className="w-full md:w-auto bg-[#D4AF37] text-black font-black text-xl py-8 px-20 hover:bg-white hover:text-black transition-all duration-300 mb-12 uppercase tracking-[0.15em] shadow-[0_0_40px_rgba(212,175,55,0.3)] hover:shadow-[0_0_60px_rgba(212,175,55,0.5)] transform hover:-translate-y-1">
                            {MOCK_DATA.pricing.cta}
                        </button>

                        <div className="flex flex-col md:flex-row justify-center gap-8 text-sm opacity-50 font-light tracking-wide">
                            <span className="flex items-center gap-2"><Shield className="w-4 h-4" /> Gwarancja Satysfakcji</span>
                            <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> Dożywotni Dostęp</span>
                            <span className="flex items-center gap-2"><Check className="w-4 h-4" /> Certyfikat Ukończenia</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. FOOTER */}
            <footer className="bg-black text-white py-16 border-t border-[#222]">
                <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="font-serif text-3xl font-bold italic tracking-tighter">
                        AirTouch<span className="text-[#D4AF37]">Mastery</span>
                    </div>
                    <div className="flex gap-10 text-sm opacity-60 font-light tracking-widest uppercase">
                        <a href="#" className="hover:text-[#D4AF37] transition-colors">Regulamin</a>
                        <a href="#" className="hover:text-[#D4AF37] transition-colors">Prywatność</a>
                        <a href="#" className="hover:text-[#D4AF37] transition-colors">Kontakt</a>
                    </div>
                    <div className="text-xs opacity-30 font-mono">
                        © 2025 AIRTOUCH ACADEMY
                    </div>
                </div>
            </footer>

        </div>
    )
}
