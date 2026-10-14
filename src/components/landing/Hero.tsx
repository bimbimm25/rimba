import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Sparkles, ArrowRight, Compass } from 'lucide-react';
import { AnimatedSection } from '@/components/common/AnimatedSection';

export const Hero = () => {
    return (
        <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-28 pb-16 sm:py-24">
            {/* Background 100% Full Viewport */}
            <div className="absolute inset-0 -z-20 select-none">
                <Image
                    src="/hero-bg.png"
                    alt="Dunia Hutan Petualangan R.I.M.B.A"
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover object-center w-full h-full"
                />
            </div>

            <div className="absolute inset-0 -z-10 bg-linear-to-b from-white/70 via-white/20 to-earth-cream/90 backdrop-blur-[1px]" />
            <div className="absolute inset-0 -z-10 bg-radial-[at_center_top] from-transparent via-black/5 to-black/20" />

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 flex flex-col items-center">

                {/* 1. Badge Pill */}
                <AnimatedSection type="fade-up" delay={100}>
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white/95 border border-rimba-200/80 shadow-sm shadow-rimba-900/5 mb-5 sm:mb-6 backdrop-blur-md">
                        <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-rimba-600 shrink-0" />
                        <span className="font-display text-[11px] sm:text-sm font-bold text-rimba-900 tracking-wide">
                            R.I.M.B.A — Ruang Interaktif Mengenal Bencana dan Alam
                        </span>
                    </div>
                </AnimatedSection>

                {/* 2. Judul Utama */}
                <AnimatedSection type="fade-up" delay={220}>
                    <h1 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-rimba-950 tracking-tight leading-[1.2] max-w-3xl mb-5 sm:mb-6 drop-shadow-xs">
                        Ketika Hutan Terancam,{' '}
                        <span className="block mt-2 sm:inline-block">
                            Kamu Bisa{' '}
                            <span className="inline-block bg-rimba-500 text-white px-3 sm:px-4 py-1 sm:py-1.5 rounded-2xl shadow-md shadow-rimba-600/30 transform -rotate-1 hover:rotate-0 transition-transform">
                                Menjaganya!
                            </span>
                        </span>
                    </h1>
                </AnimatedSection>

                {/* 3. Deskripsi */}
                <AnimatedSection type="fade-up" delay={340}>
                    <p className="text-sm sm:text-lg lg:text-xl text-rimba-900/90 font-medium leading-relaxed max-w-2xl mb-8 sm:mb-10 drop-shadow-2xs">
                        Ayo belajar mengenali penyebab kebakaran hutan dan lahan, melindungi hewan serta udara bersih, dan berlatih tindakan aman melalui petualangan seru.
                    </p>
                </AnimatedSection>

                {/* 4. Tombol Aksi CTA */}
                <AnimatedSection type="fade-scale" delay={450}>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 w-full sm:w-auto">
                        <Link href="/belajar" className="w-full sm:w-auto">
                            <button className="w-full sm:w-auto min-h-12.5 sm:min-h-13 px-8 py-3.5 rounded-full bg-rimba-500 hover:bg-rimba-600 text-white font-display font-bold text-sm sm:text-base shadow-lg shadow-rimba-600/25 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer">
                                <span>Mulai Belajar</span>
                                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                            </button>
                        </Link>

                        <Link href="/belajar" className="w-full sm:w-auto">
                            <button className="w-full sm:w-auto min-h-12.5 sm:min-h-13 px-7 py-3.5 rounded-full bg-white/95 hover:bg-white border-2 border-rimba-500/70 text-rimba-800 font-display font-bold text-sm sm:text-base hover:shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all backdrop-blur-sm flex items-center justify-center gap-2 cursor-pointer">
                                <Compass className="w-4 h-4 sm:w-5 sm:h-5 text-rimba-600" />
                                <span>Eksplorasi Rimba</span>
                            </button>
                        </Link>
                    </div>
                </AnimatedSection>

            </div>
        </section>
    );
};