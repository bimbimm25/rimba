'use client';

import React from 'react';
import Link from 'next/link';
import { Sparkles, Heart, Target } from 'lucide-react';
import { AnimatedItem } from '@/components/common/AnimatedItem';

export default function TentangPage() {
    const akronim = [
        { huruf: 'R', arti: 'Ruang', desc: 'Ruang belajar digital yang aman dan menyenangkan bagi anak-anak.' },
        { huruf: 'I', arti: 'Interaktif', desc: 'Belajar melalui eksplorasi, pilihan keputusan, dan game RPG.' },
        { huruf: 'M', arti: 'Mengenal', desc: 'Mengenal penyebab, dampak, dan pencegahan karhutla sejak dini.' },
        { huruf: 'B', arti: 'Bencana', desc: 'Membangun literasi kesiapsiagaan menghadapi bahaya kabut asap.' },
        { huruf: 'A', arti: 'Alam', desc: 'Menumbuhkan rasa cinta dan kepedulian terhadap kelestarian hutan.' }
    ];

    return (
        <div className="min-h-screen bg-earth-cream pb-28 pt-28 sm:pt-32 overflow-hidden">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-12">

                {/* Header Bagian Atas */}
                <section className="text-center max-w-2xl mx-auto space-y-3">
                    <AnimatedItem variant="fade-up" delay={0}>
                        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-100 text-emerald-950 text-xs font-bold uppercase tracking-wider">
                            <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
                            <span>Tentang Inovasi Edukasi</span>
                        </div>
                    </AnimatedItem>

                    <AnimatedItem variant="fade-up" delay={120}>
                        <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-rimba-950">
                            Mengenal Lebih Dekat R.I.M.B.A
                        </h1>
                    </AnimatedItem>

                    <AnimatedItem variant="fade-up" delay={220}>
                        <p className="text-rimba-800 text-sm sm:text-base leading-relaxed">
                            Platform edukasi digital yang dirancang khusus untuk mengenalkan pencegahan kebakaran hutan dan lahan kepada siswa sekolah dasar di Indonesia.
                        </p>
                    </AnimatedItem>
                </section>

                {/* Makna Nama R.I.M.B.A (Container & Kartu Huruf Staggered) */}
                <AnimatedItem variant="fade-scale" delay={160}>
                    <section className="bg-white rounded-3xl p-6 sm:p-8 border border-rimba-100 shadow-sm space-y-6">
                        <h2 className="font-display font-bold text-xl text-rimba-950 text-center">
                            Makna Nama R.I.M.B.A
                        </h2>

                        <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
                            {akronim.map((item, index) => (
                                <AnimatedItem
                                    key={item.huruf}
                                    variant="fade-scale"
                                    delay={240 + index * 90} // Huruf R: 240ms, I: 330ms, M: 420ms, B: 510ms, A: 600ms
                                    className="h-full"
                                >
                                    <div className="h-full p-4 rounded-2xl bg-earth-soft/60 border border-rimba-100 text-center space-y-1 hover:border-rimba-300 transition-colors">
                                        <span className="w-10 h-10 rounded-xl bg-rimba-600 text-white font-display font-black text-xl flex items-center justify-center mx-auto shadow-xs">
                                            {item.huruf}
                                        </span>
                                        <h3 className="font-bold text-sm text-rimba-950 pt-1">{item.arti}</h3>
                                        <p className="text-[11px] text-rimba-800 leading-snug">{item.desc}</p>
                                    </div>
                                </AnimatedItem>
                            ))}
                        </div>
                    </section>
                </AnimatedItem>

                {/* Visi & Misi (Slide Halus dari Sisi Berlawanan) */}
                <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <AnimatedItem variant="fade-left" delay={200} className="h-full">
                        <div className="h-full bg-white rounded-3xl p-6 sm:p-8 border border-rimba-100 shadow-sm space-y-3">
                            <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold">
                                <Target className="w-5 h-5" />
                            </div>
                            <h3 className="font-display font-bold text-lg text-rimba-950">Visi Kami</h3>
                            <p className="text-xs sm:text-sm text-rimba-800 leading-relaxed">
                                Menjadi wadah pembelajaran digital yang menyenangkan dalam menanamkan kebiasaan peduli lingkungan dan kesiapsiagaan bencana bagi anak-anak Indonesia sejak bangku sekolah dasar.
                            </p>
                        </div>
                    </AnimatedItem>

                    <AnimatedItem variant="fade-right" delay={260} className="h-full">
                        <div className="h-full bg-white rounded-3xl p-6 sm:p-8 border border-rimba-100 shadow-sm space-y-3">
                            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
                                <Heart className="w-5 h-5" />
                            </div>
                            <h3 className="font-display font-bold text-lg text-rimba-950">Misi Kami</h3>
                            <p className="text-xs sm:text-sm text-rimba-800 leading-relaxed">
                                Menyederhanakan materi teknis kebencanaan menjadi cerita visual, melatih anak membedakan situasi aman dan berbahaya, serta mendorong kebiasaan tidak membakar sampah sembarangan.
                            </p>
                        </div>
                    </AnimatedItem>
                </section>

            </div>
        </div>
    );
}