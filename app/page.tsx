import React from 'react';
import { Inter } from 'next/font/google';
import Hero from '@/components/Hero';
import PainPoints from '@/components/PainPoints';
import Methodology from '@/components/Methodology';
import Benefits from '@/components/Benefits';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import CTASection from '@/components/CTASection';

const inter = Inter({ subsets: ['latin'] });

export default function Page() {
    return (
        <main
            className={`min-h-screen text-[#FAFAFA] ${inter.className}`}
            style={{
                backgroundImage: `linear-gradient(rgba(26, 26, 26, 0.85), rgba(26, 26, 26, 0.95)), url('/bg-pattern.png')`,
                backgroundRepeat: 'repeat',
                backgroundSize: 'auto', // Or 'cover' depending on the pattern size, usually 'auto' or specific size for patterns
                backgroundAttachment: 'fixed' // Optional: parallax effect
            }}
        >
            <Hero />
            <PainPoints />
            <Methodology />
            <Benefits />
            <Testimonials />
            <FAQ />
            <CTASection />
        </main>
    );
}
