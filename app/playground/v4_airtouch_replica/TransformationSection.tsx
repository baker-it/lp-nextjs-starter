import React from 'react';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';

const MOCK_DATA = {
    socialProof: {
        beforeImage: "https://images.unsplash.com/photo-1634449571010-02389ed0f9b0?auto=format&fit=crop&w=800&q=80",
        afterImage: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=800&q=80"
    }
};

export const TransformationSection = () => {
    return (
        <section className="py-24 bg-[#0f0f0f]">
            <div className="container mx-auto px-6 text-center">
                <div className="text-xs font-bold tracking-[0.2em] text-[#D4AF37] uppercase mb-4">Social Proof / Transformation Section</div>
                <h2 className="font-serif text-4xl md:text-5xl font-bold mb-16 text-white">PRZEMIANA</h2>

                <div className="max-w-4xl mx-auto bg-white/5 border border-white/10 p-4 rounded-3xl shadow-2xl mb-16 relative backdrop-blur-sm">
                    {/* Before/After Visualization */}
                    <div className="relative aspect-[16/9] md:aspect-[2/1] rounded-2xl overflow-hidden flex">
                        <div className="w-1/2 relative">
                            <Image src={MOCK_DATA.socialProof.beforeImage} alt="Before" fill className="object-cover" />
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-transparent to-transparent p-6 pt-12 text-left">
                                <span className="text-yellow-500 text-xs font-bold tracking-[0.2em] uppercase">Tradycyjna Metoda</span>
                            </div>
                        </div>
                        <div className="w-1/2 relative">
                            <Image src={MOCK_DATA.socialProof.afterImage} alt="After" fill className="object-cover" />
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-transparent to-transparent p-6 pt-12 text-right">
                                <span className="text-yellow-500 text-xs font-bold tracking-[0.2em] uppercase">System AirTouch</span>
                            </div>
                        </div>

                        {/* Center Slider Handle Simulation */}
                        <div className="absolute top-0 bottom-0 left-1/2 w-[1px] bg-white/50 cursor-ew-resize flex items-center justify-center -translate-x-1/2">
                            <div className="w-8 h-8 bg-[#D4AF37] rounded-full border-2 border-white shadow-xl flex items-center justify-center">
                                <div className="flex gap-[2px]">
                                    <ChevronRight className="w-3 h-3 text-black rotate-180" />
                                    <ChevronRight className="w-3 h-3 text-black" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-[#1a1a1a] border border-white/10 text-white/60 text-[10px] font-bold px-6 py-2 rounded-full uppercase tracking-widest shadow-xl">
                        Przesuń aby zobaczyć
                    </div>
                </div>
            </div>
        </section>
    );
};
