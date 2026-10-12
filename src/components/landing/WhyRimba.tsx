import React from 'react';
import {
    Sparkles,
    Gamepad2,
    Compass,
    ShieldCheck,
    Award,
    HeartHandshake,
    BookOpenCheck,
    Check,
    X
} from 'lucide-react';

const comparisonPoints = [
    {
        conventional: 'Artikel berita panjang dan istilah teknis yang rumit',
        rimba: 'Cerita visual dan ringkas dengan bahasa sederhana ramah anak',
    },
    {
        conventional: 'Menampilkan visual bencana yang menimbulkan rasa cemas',
        rimba: 'Fokus pada keindahan alam dan aksi kepedulian lingkungan',
    },
    {
        conventional: 'Belajar pasif hanya dengan membaca teks',
        rimba: 'Interaktif: memilih keputusan dan latihan skenario aman',
    },
];

const featureHighlights = [
    {
        icon: Gamepad2,
        title: 'Belajar Sambil Bermain',
        desc: 'Konsep gamifikasi ringan yang mengubah materi serius menjadi misi penjelajahan yang seru.',
        color: 'text-rimba-600',
        bg: 'bg-rimba-50',
        hoverBorder: 'hover:border-rimba-400',
        hoverShadow: 'hover:shadow-rimba-500/10',
        indicator: 'bg-rimba-500',
        iconAnim: 'group-hover:scale-110 group-hover:-rotate-6',
    },
    {
        icon: Compass,
        title: 'Latihan Keputusan Nyata',
        desc: 'Anak dilatih membedakan situasi aman dan berbahaya melalui simulasi skenario praktis.',
        color: 'text-accent-sky',
        bg: 'bg-accent-skyLight',
        hoverBorder: 'hover:border-accent-sky/50',
        hoverShadow: 'hover:shadow-accent-sky/10',
        indicator: 'bg-accent-sky',
        iconAnim: 'group-hover:scale-110 group-hover:rotate-12',
    },
    {
        icon: ShieldCheck,
        title: '100% Mengutamakan Keselamatan',
        desc: 'Pesan tegas: jauhi api dan lapor ke orang dewasa. Anak bukan petugas pemadam.',
        color: 'text-leaf-dark',
        bg: 'bg-leaf-light',
        hoverBorder: 'hover:border-leaf/50',
        hoverShadow: 'hover:shadow-leaf/10',
        indicator: 'bg-leaf',
        iconAnim: 'group-hover:scale-110 group-hover:-translate-y-0.5',
    },
    {
        icon: Award,
        title: 'Lencana Sahabat Rimba',
        desc: 'Setiap level yang diselesaikan memberikan apresiasi untuk memotivasi rasa ingin tahu.',
        color: 'text-accent-sun',
        bg: 'bg-accent-sunLight',
        hoverBorder: 'hover:border-accent-sun/60',
        hoverShadow: 'hover:shadow-accent-sun/15',
        indicator: 'bg-accent-sun',
        iconAnim: 'group-hover:scale-110 group-hover:-rotate-6',
    },
    {
        icon: BookOpenCheck,
        title: 'Prinsip Microlearning',
        desc: 'Materi dibagi menjadi bagian-bagian kecil: satu layar memuat satu topik belajar yang terarah.',
        color: 'text-accent-flame',
        bg: 'bg-accent-flameLight',
        hoverBorder: 'hover:border-accent-flame/50',
        hoverShadow: 'hover:shadow-accent-flame/10',
        indicator: 'bg-accent-flame',
        iconAnim: 'group-hover:scale-110 group-hover:rotate-6',
    },
    {
        icon: HeartHandshake,
        title: 'Dukungan Guru & Orang Tua',
        desc: 'Dilengkapi panduan terarah agar proses belajar mandiri maupun didampingi tetap efektif.',
        color: 'text-rimba-700',
        bg: 'bg-rimba-100',
        hoverBorder: 'hover:border-rimba-500/50',
        hoverShadow: 'hover:shadow-rimba-600/10',
        indicator: 'bg-rimba-600',
        iconAnim: 'group-hover:scale-110 group-hover:-translate-y-0.5',
    },
];

export const WhyRimba = () => {
    return (
        <section className="py-20 bg-white border-b border-rimba-100/80 relative">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header Section */}
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rimba-50 border border-rimba-100 text-rimba-800 text-xs font-bold uppercase tracking-wider mb-3">
                        <Sparkles className="w-3.5 h-3.5 text-rimba-600" />
                        <span>Inovasi Edukasi</span>
                    </div>
                    <h2 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-rimba-950 tracking-tight">
                        Mengapa Belajar di R.I.M.B.A?
                    </h2>
                    <p className="text-rimba-800 text-sm sm:text-base mt-3 leading-relaxed font-medium">
                        Belajar mitigasi karhutla tidak harus menegangkan. Kami mengubah informasi kebencanaan menjadi pengalaman interaktif yang aman, menyenangkan, dan membangun kebiasaan peduli.
                    </p>
                </div>

                {/* Comparison Showcase (Cara Lama vs R.I.M.B.A) */}
                <div className="bg-earth-soft/60 rounded-3xl p-6 sm:p-8 lg:p-10 border border-rimba-100/90 mb-16 shadow-xs">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">

                        {/* Sisi Cara Belajar Lama */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-2 text-rose-800 font-display font-bold text-base">
                                <span className="w-7 h-7 rounded-xl bg-rose-100 text-rose-700 flex items-center justify-center shrink-0">
                                    <X className="w-4 h-4 stroke-[2.5]" />
                                </span>
                                <span>Cara Konvensional</span>
                            </div>
                            <ul className="space-y-3">
                                {comparisonPoints.map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3 p-3.5 rounded-2xl bg-white/70 border border-rose-100/60 text-xs sm:text-sm text-rimba-900/80">
                                        <span className="w-1.5 h-1.5 rounded-full bg-rose-400 mt-2 shrink-0" />
                                        <span>{item.conventional}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Sisi Pendekatan R.I.M.B.A */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-2 text-rimba-800 font-display font-bold text-base">
                                <span className="w-7 h-7 rounded-xl bg-rimba-100 text-rimba-700 flex items-center justify-center shrink-0">
                                    <Check className="w-4 h-4 stroke-[2.5]" />
                                </span>
                                <span>Pendekatan R.I.M.B.A</span>
                            </div>
                            <ul className="space-y-3">
                                {comparisonPoints.map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3 p-3.5 rounded-2xl bg-white border border-rimba-200/80 shadow-xs text-xs sm:text-sm text-rimba-950 font-medium">
                                        <span className="w-1.5 h-1.5 rounded-full bg-rimba-500 mt-2 shrink-0" />
                                        <span>{item.rimba}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                    </div>
                </div>

                {/* 6 Feature Pillars Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {featureHighlights.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <div
                                key={index}
                                className={`group relative bg-white rounded-3xl p-6 sm:p-7 border border-rimba-100/90 shadow-sm cursor-pointer overflow-hidden transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-xl ${item.hoverBorder} ${item.hoverShadow}`}
                            >
                                {/* Icon Container */}
                                <div
                                    className={`w-13 h-13 rounded-2xl ${item.bg} ${item.color} flex items-center justify-center mb-5 shadow-xs transition-transform duration-300 ease-out`}
                                >
                                    <Icon
                                        className={`w-6 h-6 transition-all duration-300 ease-out ${item.iconAnim}`}
                                    />
                                </div>

                                {/* Text Content */}
                                <h3 className="font-display font-bold text-rimba-950 text-base sm:text-lg mb-2 group-hover:text-rimba-700 transition-colors duration-200">
                                    {item.title}
                                </h3>
                                <p className="text-xs sm:text-sm text-rimba-800 leading-relaxed font-normal">
                                    {item.desc}
                                </p>

                                {/* Accent Expansion Strip */}
                                <span
                                    className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-1 w-0 group-hover:w-20 rounded-full ${item.indicator} transition-all duration-300 ease-out`}
                                    aria-hidden="true"
                                />
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
};