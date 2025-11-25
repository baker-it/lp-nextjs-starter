import { sanityFetch } from '@/lib/sanity.fetch'
import { newLandingPageQuery } from '@/lib/sanity.queries'
import Link from 'next/link'
import Image from 'next/image'

// --- DESIGN TOKENS ---
const theme = {
   colors: {
      bg: '#F5F2EB',      // Cream/Beige
      accent: '#C6A87C',  // Muted Gold
      text: '#1F2024',    // Deep Black
      darkBg: '#1A1A1A',  // Dark section bg
      white: '#FFFFFF',
   },
   fonts: {
      serif: 'font-serif', // Using default serif for now
      sans: 'font-sans',
   }
}

// Hardcoded assets for the "Draft" feel
const PLACEHOLDER_HERO = "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1600&q=80" // Hairdresser/Salon
const PLACEHOLDER_STEP_1 = "https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=400&q=80"
const PLACEHOLDER_STEP_2 = "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=400&q=80"
const PLACEHOLDER_STEP_3 = "https://images.unsplash.com/photo-1595476106812-75456150c590?auto=format&fit=crop&w=400&q=80"
const PLACEHOLDER_STEP_4 = "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=400&q=80"

export const revalidate = 0

export default async function PlaygroundPage() {
   // Fetch REAL data from Sanity (Variant A)
   const variant = 'airtouch-variant-a'
   const data = await sanityFetch<any>(
      newLandingPageQuery,
      { slug: variant },
      ['landing-page']
   )

   if (!data) return <div className="p-10 text-center">Wariant A nie został znaleziony w Sanity. Sprawdź slug.</div>

   return (
      <div style={{ backgroundColor: theme.colors.bg, color: theme.colors.text }} className="min-h-screen font-sans selection:bg-[#C6A87C] selection:text-white">

         {/* --- HERO SECTION --- */}
         <header className="relative overflow-hidden">
            <div className="container mx-auto px-4 pt-24 pb-20 md:pt-32 md:pb-24">
               <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                  {/* Left: Content */}
                  <div className="lg:w-1/2 z-10 relative">
                     <span className="inline-block mb-4 font-bold tracking-widest uppercase text-xs opacity-60">
                        Master Class
                     </span>
                     <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold leading-[1.1] mb-6">
                        {data.hero?.headline || "Master the Art of AirTouch"}
                     </h1>
                     <p className="text-lg md:text-xl opacity-80 mb-10 max-w-lg leading-relaxed">
                        {data.hero?.subheadline || "The definitive training for professional stylists seeking precision."}
                     </p>

                     <div className="flex gap-4">
                        {data.hero?.ctaPrimary && (
                           <Link
                              href={data.hero.ctaPrimary.url || '#'}
                              style={{ backgroundColor: theme.colors.accent }}
                              className="text-white font-bold py-4 px-8 rounded-full text-sm uppercase tracking-wide hover:opacity-90 transition-opacity shadow-xl shadow-[#C6A87C]/20"
                           >
                              {data.hero.ctaPrimary.text}
                           </Link>
                        )}
                     </div>
                  </div>

                  {/* Right: Image (Hardcoded for visual test as Sanity has no image) */}
                  <div className="lg:w-1/2 relative">
                     <div className="relative aspect-[4/5] rounded-sm overflow-hidden shadow-2xl">
                        <Image
                           src={PLACEHOLDER_HERO}
                           alt="Hero Visual"
                           fill
                           className="object-cover"
                           priority
                        />
                        {/* Decorative gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                     </div>
                     {/* Floating Badge */}
                     <div className="absolute -bottom-6 -left-6 bg-white p-6 shadow-xl max-w-[200px] hidden md:block">
                        <p className="font-serif text-2xl italic leading-none">&quot;Precision through Air&quot;</p>
                     </div>
                  </div>

               </div>
            </div>
         </header>

         {/* --- PAIN POINTS (PROBLEM) --- */}
         <section className="py-20 px-4">
            <div className="container mx-auto">
               <div className="text-center mb-16">
                  <span className="text-xs font-bold tracking-widest uppercase opacity-50 mb-2 block">Problem</span>
                  <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tight">
                     The Limits of Traditional Methods
                  </h2>
               </div>

               <div className="grid md:grid-cols-3 gap-8">
                  {data.painPoints?.items?.map((item: any, idx: number) => (
                     <div key={idx} className="bg-white p-8 rounded-sm shadow-sm border border-stone-100 hover:shadow-md transition-shadow text-center group">
                        <div className="w-16 h-16 mx-auto bg-[#F5F2EB] rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                           {/* Simple Icon Placeholder */}
                           <span className="text-2xl text-[#C6A87C]">⚠️</span>
                        </div>
                        <h3 className="text-xl font-bold mb-3">{item.problem}</h3>
                        <p className="text-sm opacity-70 leading-relaxed mb-4">{item.solution}</p>
                        <div className="text-xs font-bold text-[#C6A87C] uppercase tracking-wider">
                           {item.costImpact}
                        </div>
                     </div>
                  )) || (
                        // Fallback if no data
                        [1, 2, 3].map(i => <div key={i} className="h-40 bg-white/50 animate-pulse"></div>)
                     )}
               </div>
            </div>
         </section>

         {/* --- METHODOLOGY (STEPS) --- */}
         <section className="py-20 px-4 border-t border-stone-200">
            <div className="container mx-auto">
               <div className="text-center mb-16">
                  <span className="text-xs font-bold tracking-widest uppercase opacity-50 mb-2 block">Solution</span>
                  <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tight mb-4">
                     The Methodology
                  </h2>
                  <p className="text-xl font-serif italic opacity-60">Precision through air, not teasing.</p>
               </div>

               <div className="grid md:grid-cols-4 gap-4 relative">
                  {/* Connecting line (desktop only) */}
                  <div className="absolute top-24 left-0 w-full h-0.5 bg-[#C6A87C]/30 -z-10 hidden md:block"></div>

                  {[
                     { title: "Tension & Sectioning", img: PLACEHOLDER_STEP_1, desc: data.methodology?.preTraining },
                     { title: "The Air Path", img: PLACEHOLDER_STEP_2, desc: data.methodology?.day1 },
                     { title: "Strategic Application", img: PLACEHOLDER_STEP_3, desc: data.methodology?.day2 },
                     { title: "Seamless Diffuse", img: PLACEHOLDER_STEP_4, desc: data.methodology?.postTraining }
                  ].map((step, i) => (
                     <div key={i} className="relative">
                        <div className="aspect-square mb-6 relative overflow-hidden rounded-sm shadow-lg bg-stone-200 group">
                           <Image src={step.img} alt={step.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                           <div className="absolute top-2 left-2 bg-white w-8 h-8 flex items-center justify-center font-bold text-xs">
                              0{i + 1}
                           </div>
                        </div>
                        <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                        <p className="text-xs leading-relaxed opacity-70 max-w-[200px]">
                           {typeof step.desc === 'string' ? step.desc.slice(0, 80) + '...' : "Learn the technique..."}
                        </p>
                     </div>
                  ))}
               </div>
            </div>
         </section>

         {/* --- BENEFITS (DARK MODE) --- */}
         <section style={{ backgroundColor: theme.colors.darkBg }} className="py-24 px-4 text-white relative overflow-hidden">
            <div className="container mx-auto relative z-10">
               <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-widest mb-2">Unrivaled Benefits</h2>
                  <div className="w-20 h-1 bg-[#C6A87C] mx-auto"></div>
               </div>

               <div className="grid md:grid-cols-2 gap-12">
                  {/* Left: For Stylist */}
                  <div className="space-y-8">
                     <h3 className="text-2xl font-serif italic text-[#C6A87C]">For the Stylist</h3>
                     <div className="pl-6 border-l border-white/10 space-y-6">
                        {data.benefits?.forStylist?.map((benefit: string, i: number) => (
                           <div key={i}>
                              <h4 className="font-bold text-lg mb-1">{benefit}</h4>
                              <p className="text-white/50 text-sm">Increase your ticket value and client retention.</p>
                           </div>
                        )) || <p>Data not found</p>}
                     </div>
                  </div>

                  {/* Right: For Client */}
                  <div className="space-y-8">
                     <h3 className="text-2xl font-serif italic text-[#C6A87C]">For the Client</h3>
                     <div className="pl-6 border-l border-white/10 space-y-6">
                        {data.benefits?.forClient?.map((benefit: string, i: number) => (
                           <div key={i}>
                              <h4 className="font-bold text-lg mb-1">{benefit}</h4>
                              <p className="text-white/50 text-sm">Natural grow-out and healthier hair integrity.</p>
                           </div>
                        )) || <p>Data not found</p>}
                     </div>
                  </div>
               </div>
            </div>
         </section>

         {/* --- SOCIAL PROOF / FOOTER --- */}
         <section className="bg-white py-24 px-4">
            <div className="container mx-auto max-w-4xl text-center">
               {data.testimonials?.items?.[0] && (
                  <div className="mb-20">
                     <p className="text-2xl md:text-3xl font-serif italic leading-relaxed mb-8 opacity-80">
                        &quot;{data.testimonials.items[0].quote}&quot;
                     </p>
                     <div className="flex items-center justify-center gap-4">
                        {/* Placeholder Avatar */}
                        <div className="w-12 h-12 bg-stone-200 rounded-full overflow-hidden relative">
                           {data.testimonials.items[0].photo ? (
                              // If we had a Sanity image helper here, we'd use it, but simpler to just use fallback or generic for now
                              <div className="w-full h-full bg-stone-300"></div>
                           ) : <div className="w-full h-full bg-[#C6A87C]"></div>}
                        </div>
                        <div className="text-left">
                           <div className="font-bold uppercase text-sm">{data.testimonials.items[0].author}</div>
                           <div className="text-xs opacity-50">{data.testimonials.items[0].role}</div>
                        </div>
                     </div>
                  </div>
               )}

               {/* Final CTA */}
               <div className="bg-[#1F2024] text-white p-12 rounded-sm relative overflow-hidden">
                  <div className="relative z-10">
                     <h2 className="text-3xl md:text-5xl font-bold mb-6 uppercase">
                        {data.ctaSection?.headline || "Secure Your Spot"}
                     </h2>
                     <p className="mb-8 text-white/70 max-w-xl mx-auto">
                        {data.ctaSection?.subheadline || "Limited availability for the upcoming masterclass."}
                     </p>

                     {data.ctaSection?.cta && (
                        <Link
                           href={data.ctaSection.cta.url || '#'}
                           className="bg-[#C6A87C] text-white font-bold py-4 px-12 rounded-none text-lg hover:bg-white hover:text-[#1F2024] transition-colors uppercase tracking-widest"
                        >
                           {data.ctaSection.cta.text} — $497
                        </Link>
                     )}
                     <div className="mt-6 flex justify-center gap-8 text-xs font-mono opacity-50">
                        <span>[02] DAYS</span>
                        <span>[14] HOURS</span>
                        <span>[35] MINS</span>
                     </div>
                  </div>
               </div>
            </div>
         </section>

      </div>
   )
}


