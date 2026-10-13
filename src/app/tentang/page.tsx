import React from 'react';
import Link from 'next/link';
import { Trees, Sparkles, Heart, Target, Compass, Award, ArrowRight } from 'lucide-react';

export default function TentangPage() {
    const akronim = [
        { huruf: 'R', arti: 'Ruang', desc: 'Ruang belajar digital yang aman dan menyenangkan bagi anak-anak.' },
        { huruf: 'I', arti: 'Interaktif', desc: 'Belajar melalui eksplorasi, pilihan keputusan, dan game RPG.' },
        { huruf: 'M', arti: 'Mengenal', desc: 'Mengenal penyebab, dampak, dan pencegahan karhutla sejak dini.' },
        { huruf: 'B', arti: 'Bencana', desc: 'Membangun literasi kesiapsiagaan menghadapi bahaya kabut asap.' },
        { huruf: 'A', arti: 'Alam', desc: 'Menumbuhkan rasa cinta dan kepedulian terhadap kelestarian hutan.' }
    ];

    return (
        <div className="min-h-screen bg-earth-cream pb-28 pt-28 sm:pt-32">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-12">

                {/* Header */}
                <section className="text-center max-w-2xl mx-auto space-y-3">
                    <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-100 text-emerald-950 text-xs font-bold uppercase tracking-wider">
                        <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
                        <span>Tentang Inovasi Edukasi</span>
                    </div>
                    <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-rimba-950">
                        Mengenal Lebih Dekat R.I.M.B.A
                    </h1>
                    <p className="text-rimba-800 text-sm sm:text-base leading-relaxed">
                        Platform edukasi digital yang dirancang khusus untuk mengenalkan pencegahan kebakaran hutan dan lahan kepada siswa sekolah dasar di Indonesia.
                    </p>
                </section>

                {/* Makna Nama */}
                <section className="bg-white rounded-3xl p-6 sm:p-8 border border-rimba-100 shadow-sm space-y-6">
                    <h2 className="font-display font-bold text-xl text-rimba-950 text-center">
                        Makna Nama R.I.M.B.A
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
                        {akronim.map((item) => (
                            <div key={item.huruf} className="p-4 rounded-2xl bg-earth-soft/60 border border-rimba-100 text-center space-y-1">
                                <span className="w-10 h-10 rounded-xl bg-rimba-600 text-white font-display font-black text-xl flex items-center justify-center mx-auto shadow-xs">
                                    {item.huruf}
                                </span>
                                <h3 className="font-bold text-sm text-rimba-950">{item.arti}</h3>
                                <p className="text-[11px] text-rimba-800 leading-snug">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Visi & Misi */}
                <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white rounded-3xl p-6 sm:p-8 border border-rimba-100 shadow-sm space-y-3">
                        <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold">
                            <Target className="w-5 h-5" />
                        </div>
                        <h3 className="font-display font-bold text-lg text-rimba-950">Visi Kami</h3>
                        <p className="text-xs sm:text-sm text-rimba-800 leading-relaxed">
                            Menjadi wadah pembelajaran digital yang menyenangkan dalam menanamkan kebiasaan peduli lingkungan dan kesiapsiagaan bencana bagi anak-anak Indonesia sejak bangku sekolah dasar.
                        </p>
                    </div>

                    <div className="bg-white rounded-3xl p-6 sm:p-8 border border-rimba-100 shadow-sm space-y-3">
                        <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
                            <Heart className="w-5 h-5" />
                        </div>
                        <h3 className="font-display font-bold text-lg text-rimba-950">Misi Kami</h3>
                        <p className="text-xs sm:text-sm text-rimba-800 leading-relaxed">
                            Menyederhanakan materi teknis kebencanaan menjadi cerita visual, melatih anak membedakan situasi aman dan berbahaya, serta mendorong kebiasaan tidak membakar sampah sembarangan.
                        </p>
                    </div>
                </section>

            </div>
        </div>
    );
}