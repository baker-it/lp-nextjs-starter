import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Clock, Check, Star, ArrowRight, AlertTriangle, X } from 'lucide-react'

// --- IMAGE HELPER ---
// Po wgraniu zdjęć do Sanity Media Library:
// 1. Kliknij prawym na obrazek → "Copy Image URL"
// 2. Wklej URL poniżej (format: https://cdn.sanity.io/images/nfon9ew1/production/[asset-id]-[dimensions].jpg)
// 3. Next.js automatycznie zoptymalizuje obrazy (WebP, responsive sizes)

// --- MOCK DATA FROM NOTION ---
const MOCK_DATA = {
  hero: {
    headline: "OPANUJ SZTUKĘ AIRTOUCH. ZDEFINIUJ SWOJĄ PRZYSZŁOŚĆ.",
    subheadline: "Definitywne szkolenie dla profesjonalnych stylistów poszukujących precyzji, naturalnych efektów i znacząco wyższych przychodów z usług koloryzacji.",
    cta: "ZAPISZ SIĘ NA SZKOLENIE",
    image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1600&q=80" // TODO: Replace with Sanity CDN URL
  },
  problem: {
    headline: "OGRANICZENIA TRADYCYJNEGO BALEYAGE I FOLII",
    items: [
      {
        title: "Niespójne Mieszanie",
        description: "Tradycyjne techniki ręcznego malowania często skutkują widocznymi liniami odrostu i nierównym rozkładem koloru, co wymaga częstych korekt."
      },
      {
        title: "Skomplikowana Integralność",
        description: "Nadmierna aplikacja rozjaśniacza prowadzi do uszkodzeń, łamliwości i niezadowolenia klientek, co negatywnie wpływa na retencję."
      },
      {
        title: "Ograniczony Potencjał Zarobków",
        description: "Nieprzewidywalne rezultaty ograniczają Twoją zdolność do pobierania premium cen i budowania reputacji jako ekspert od naturalnych blondów."
      }
    ]
  },
  solution: {
    headline: "METODOLOGIA AIRTOUCH: PRECYZJA PRZEZ POWIETRZE",
    steps: [
      {
        title: "1. Sekcjonowanie i Ekspozycja",
        description: "Podziel włosy na cienkie sekcje (~2cm). Suszarka wydmuchuje krótsze włosy (baby hair), pozostawiając tylko dłuższe pasma do rozjaśnienia."
      },
      {
        title: "2. Dmuchanie do Perfekcji",
        description: "Chłodne powietrze separuje naturalne warstwy włosów. Ta precyzyjna metoda selekcji eliminuje domysły i zapewnia powtarzalne rezultaty."
      },
      {
        title: "3. Strategiczna Aplikacja",
        description: "Nanieś rozjaśniacz TYLKO na wyselekcjonowane pasma. 50% mniej włosów poddanych chemii = drastycznie zmniejszone uszkodzenia."
      },
      {
        title: "4. Bezszwowe Tonowanie",
        description: "Wyrównaj kolory dla płynnego przejścia. Rezultat: ultra-naturalne, sun-kissed blondy z niewidocznym odrostem przez 6-12 miesięcy."
      }
    ]
  },
  benefits: {
    headline: "KORZYŚCI",
    items: [
      {
        title: "Niezrównana Integralność Włosów",
        description: "50% redukcja chemicznego uszkodzenia. Klientki odchodzą ze zdrowszymi, mocniejszymi włosami - co prowadzi do wyższej retencji i poleceń.",
        image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80" // TODO: Sanity CDN - Benefit 1
      },
      {
        title: "Ultra-Naturalny Odrost",
        description: "Bezszwowe mieszanie oznacza 6-12 miesięcy między wizytami vs 3-4 miesiące przy tradycyjnym baleyage. Mniej maintenance = szczęśliwsze klientki.",
        image: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=800&q=80" // TODO: Sanity CDN - Benefit 2
      },
      {
        title: "Powtarzalna Precyzja",
        description: "Systematyczny proces eliminuje nieprzewidywalność. Każda aplikacja AirTouch daje profesjonalne, spójne rezultaty - niezależnie od tekstury włosów.",
        image: "https://images.unsplash.com/photo-1595476106812-75456150c590?auto=format&fit=crop&w=800&q=80" // TODO: Sanity CDN - Benefit 3
      },
      {
        title: "Premium Ceny Usług",
        description: "Pobieraj 400-600 zł za sesję (vs 200-250 zł za balayage). AirTouch pozycjonuje Cię jako specjalistkę, nie generalistkę.",
        image: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=800&q=80" // TODO: Sanity CDN - Benefit 4
      }
    ]
  },
  socialProof: {
    headline: "PRZEMIANA",
    testimonial: {
      quote: "Byłam przerażona – technika wyglądała na skomplikowaną. Po szkoleniu, pierwsza klientka PŁAKAŁA ze szczęścia. Teraz jestem w pełni zarezerwowana 3 tygodnie do przodu i pobieram 450 zł za AirTouch vs 200 zł za mój stary balayage. To nie szkolenie. To inwestycja w karierę.",
      author: "Sarah Jenkins",
      role: "Senior Stylist"
    },
    beforeImage: "https://images.unsplash.com/photo-1634449571010-02389ed0f9b0?auto=format&fit=crop&w=800&q=80", // TODO: Sanity CDN - Before
    afterImage: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=800&q=80" // TODO: Sanity CDN - After
  },
  instructor: {
    headline: "INSTRUKTORKA",
    name: "Anya Petrova",
    title: "Certified AirTouch Master Educator",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80", // TODO: Sanity CDN - Instructor
    bio: [
      "Certyfikowana przez VS Academy (Vladimir Sarbashev)",
      "8+ lat doświadczenia w koloryzacji",
      "Przeszkoliła ponad 200 stylistek",
      "Specjalizacja: Naturalne blondy i Seamless Techniques",
      "Portfolio: Instagram @anyapetrova_airtouch"
    ],
    credentials: [
      "Certyfikat Kolorysty Hamielna",
      "Poziom Zaawansowany Edukacji",
      "Profesjonalne Przywództwo Stylistki"
    ]
  },
  pricing: {
    headline: "ZABEZPIECZ SWOJE MIEJSCE — 2500 ZŁ",
    cta: "ZAPISZ SIĘ TERAZ",
    countdown: { d: "02", h: "14", m: "35" },
    features: [
      "Ograniczona liczba miejsc: 3-4 uczestniczki",
      "2-dniowy intensywny warsztat",
      "Praktyka na żywych modelkach",
      "Certyfikat ukończenia",
      "Dożywotnie wsparcie w zamkniętej grupie"
    ]
  }
}

// --- DESIGN SYSTEM ---
const theme = {
  colors: {
    bg: '#F9F7F2',      // Light cream
    text: '#1A1A1A',    // Almost black
    gold: '#D4AF37',    // Metallic gold
    dark: '#111111',    // Darker section bg
    white: '#FFFFFF',
    grey: '#F5F5F5'
  }
}

export default function V2NotionProtoPage() {
  return (
    <div style={{ backgroundColor: theme.colors.bg, color: theme.colors.text }} className="font-sans min-h-screen selection:bg-[#D4AF37] selection:text-white">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 pt-20 lg:pt-0">
            <span className="inline-block px-3 py-1 mb-6 border border-[#D4AF37] text-[#D4AF37] text-xs font-bold tracking-[0.2em] uppercase">
              Master Class
            </span>
            <h1 className="text-5xl md:text-7xl font-serif font-bold leading-[1.1] mb-8 tracking-tight">
              OPANUJ SZTUKĘ <span className="text-[#D4AF37]">AIRTOUCH</span>. <br/>
              ZDEFINIUJ SWOJĄ PRZYSZŁOŚĆ.
            </h1>
            <p className="text-lg md:text-xl opacity-80 mb-10 max-w-xl leading-relaxed">
              {MOCK_DATA.hero.subheadline}
            </p>
            <button className="group bg-gradient-to-r from-[#D4AF37] to-[#B5902C] text-white font-bold py-5 px-10 rounded-none text-sm uppercase tracking-widest hover:shadow-2xl hover:shadow-[#D4AF37]/30 transition-all transform hover:-translate-y-1">
              {MOCK_DATA.hero.cta} <ArrowRight className="inline-block ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform"/>
            </button>
          </div>
          
          <div className="lg:w-1/2 relative h-[600px] w-full hidden lg:block">
             <div className="absolute top-0 right-0 w-[90%] h-full bg-[#111] rounded-sm overflow-hidden shadow-2xl transform rotate-3">
                <Image 
                  src={MOCK_DATA.hero.image} 
                  alt="Hero" 
                  fill 
                  className="object-cover opacity-80 hover:opacity-100 transition-opacity duration-700"
                />
             </div>
             <div className="absolute bottom-10 -left-10 bg-white p-8 shadow-xl max-w-xs transform -rotate-2">
                <p className="font-serif text-3xl italic text-[#D4AF37]">"Precision through Air"</p>
             </div>
          </div>
        </div>
      </section>

      {/* 2. PROBLEM SECTION */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wide mb-4">
              {MOCK_DATA.problem.headline}
            </h2>
            <div className="w-24 h-1 bg-[#D4AF37] mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {MOCK_DATA.problem.items.map((item, i) => (
              <div key={i} className="bg-[#F9F7F2] p-10 text-center border border-transparent hover:border-[#D4AF37]/30 transition-colors group">
                <div className="w-16 h-16 mx-auto mb-6 bg-white rounded-full flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                  <AlertTriangle className="w-8 h-8 text-[#D4AF37]" />
                </div>
                <h3 className="text-xl font-bold mb-4 font-serif">{item.title}</h3>
                <p className="opacity-70 leading-relaxed text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. SOLUTION SECTION */}
      <section className="py-24 bg-[#111] text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <span className="text-[#D4AF37] text-sm font-bold tracking-widest uppercase mb-2 block">Rozwiązanie</span>
            <h2 className="text-3xl md:text-5xl font-serif italic">
              {MOCK_DATA.solution.headline}
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6 relative">
            {/* Connector Line */}
            <div className="hidden md:block absolute top-[30px] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent"></div>

            {MOCK_DATA.solution.steps.map((step, i) => (
              <div key={i} className="relative pt-12 group">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-[#D4AF37] rounded-full border-4 border-[#111] z-10 group-hover:scale-125 transition-transform"></div>
                <div className="text-center px-4">
                  <h3 className="text-lg font-bold mb-3 text-[#D4AF37]">{step.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. BENEFITS SECTION */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="md:w-1/3">
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 leading-tight">
                {MOCK_DATA.benefits.headline}
              </h2>
              <p className="opacity-60 mb-8">
                Odkryj przewagę, którą daje precyzyjna technika nad tradycyjnymi metodami.
              </p>
              <div className="space-y-4">
                {MOCK_DATA.benefits.items.map((benefit, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 border-b border-gray-100 hover:bg-gray-50 transition-colors cursor-default">
                    <div className="mt-1 min-w-[24px] text-[#D4AF37]">0{i+1}</div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">{benefit.title}</h4>
                      <p className="text-sm opacity-70">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="md:w-2/3 grid grid-cols-2 gap-4">
               {/* Image Grid */}
               {MOCK_DATA.benefits.items.map((item, i) => (
                 <div key={i} className={`relative h-64 rounded-sm overflow-hidden ${i%2===1 ? 'mt-8' : ''}`}>
                    <Image src={item.image} alt={item.title} fill className="object-cover hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-black/20 hover:bg-transparent transition-colors"></div>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. SOCIAL PROOF */}
      <section className="py-24 bg-[#F9F7F2] border-y border-[#D4AF37]/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold uppercase tracking-widest mb-16">{MOCK_DATA.socialProof.headline}</h2>
          
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12 items-center">
            {/* Before/After */}
            <div className="md:w-1/2 relative">
              <div className="flex gap-2">
                <div className="relative w-1/2 aspect-[3/4]">
                  <Image src={MOCK_DATA.socialProof.beforeImage} alt="Before" fill className="object-cover" />
                  <div className="absolute bottom-4 left-4 bg-black/70 text-white text-xs px-2 py-1">BEFORE</div>
                </div>
                <div className="relative w-1/2 aspect-[3/4]">
                  <Image src={MOCK_DATA.socialProof.afterImage} alt="After" fill className="object-cover" />
                  <div className="absolute bottom-4 left-4 bg-[#D4AF37] text-black text-xs font-bold px-2 py-1">AFTER</div>
                </div>
              </div>
            </div>

            {/* Quote */}
            <div className="md:w-1/2 text-left">
              <Star className="w-8 h-8 text-[#D4AF37] mb-6 fill-current" />
              <p className="text-2xl md:text-3xl font-serif italic leading-relaxed mb-8 text-[#111]">
                {MOCK_DATA.socialProof.testimonial.quote}
              </p>
              <div>
                <div className="font-bold text-lg uppercase tracking-widest">{MOCK_DATA.socialProof.testimonial.author}</div>
                <div className="text-[#D4AF37] text-sm font-medium">{MOCK_DATA.socialProof.testimonial.role}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. INSTRUCTOR */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-16">
             <div className="md:w-1/2 order-2 md:order-1">
                <span className="text-[#D4AF37] font-bold uppercase tracking-widest mb-2 block">Ekspert</span>
                <h2 className="text-4xl font-serif font-bold mb-2">{MOCK_DATA.instructor.name}</h2>
                <p className="text-xl text-gray-500 mb-8 italic">{MOCK_DATA.instructor.title}</p>
                
                <div className="space-y-4 mb-8 border-l-2 border-[#D4AF37] pl-6">
                  {MOCK_DATA.instructor.bio.map((item, i) => (
                    <p key={i} className="text-gray-700">{item}</p>
                  ))}
                </div>

                <div className="grid grid-cols-1 gap-3">
                  {MOCK_DATA.instructor.credentials.map((cred, i) => (
                    <div key={i} className="flex items-center gap-3 font-bold text-sm bg-gray-50 p-3 rounded-sm">
                      <Check className="w-5 h-5 text-[#D4AF37]" />
                      {cred.replace('✓ ', '')}
                    </div>
                  ))}
                </div>
             </div>
             
             <div className="md:w-1/2 order-1 md:order-2 relative">
                <div className="relative aspect-[4/5] w-full max-w-md mx-auto bg-gray-200">
                   <Image 
                    src={MOCK_DATA.instructor.image} 
                    alt={MOCK_DATA.instructor.name} 
                    fill 
                    className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                   />
                   <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-[#D4AF37] -z-10"></div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* 7. PRICING / CTA */}
      <section className="py-32 bg-[#111] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="max-w-4xl mx-auto bg-gradient-to-b from-[#1a1a1a] to-[#000] p-12 md:p-20 border border-[#333] shadow-2xl relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"></div>
            
            <h2 className="text-3xl md:text-5xl font-bold mb-8 tracking-tight">{MOCK_DATA.pricing.headline}</h2>
            
            <div className="flex justify-center gap-8 md:gap-16 mb-12 font-mono text-[#D4AF37]">
              <div className="text-center">
                <div className="text-4xl md:text-6xl font-bold">{MOCK_DATA.pricing.countdown.d}</div>
                <div className="text-xs md:text-sm opacity-50 mt-2">DNI</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-6xl font-bold">{MOCK_DATA.pricing.countdown.h}</div>
                <div className="text-xs md:text-sm opacity-50 mt-2">GODZINY</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-6xl font-bold">{MOCK_DATA.pricing.countdown.m}</div>
                <div className="text-xs md:text-sm opacity-50 mt-2">MINUTY</div>
              </div>
            </div>

            <button className="w-full md:w-auto bg-[#D4AF37] text-black font-black text-xl py-6 px-16 rounded-sm hover:bg-white hover:text-black transition-colors mb-12 uppercase tracking-widest">
              {MOCK_DATA.pricing.cta}
            </button>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 text-left max-w-3xl mx-auto text-sm opacity-70">
              {MOCK_DATA.pricing.features.map((feat, i) => (
                <div key={i} className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#D4AF37]" />
                  {feat.replace('✓ ', '')}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 8. FOOTER */}
      <footer className="bg-black text-white py-12 border-t border-[#222]">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="font-serif text-2xl font-bold italic">AirTouch<span className="text-[#D4AF37]">Mastery</span></div>
          <div className="flex gap-8 text-sm opacity-50">
            <a href="#" className="hover:text-[#D4AF37] transition-colors">Regulamin</a>
            <a href="#" className="hover:text-[#D4AF37] transition-colors">Polityka Prywatności</a>
            <a href="#" className="hover:text-[#D4AF37] transition-colors">FAQ</a>
            <a href="#" className="hover:text-[#D4AF37] transition-colors">Kontakt</a>
          </div>
          <div className="text-sm opacity-30">
            © 2025 AirTouch Academy
          </div>
        </div>
      </footer>

    </div>
  )
}

