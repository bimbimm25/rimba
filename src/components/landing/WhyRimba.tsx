import React from "react";

import {
    Sparkles,
    Gamepad2,
    Compass,
    ShieldCheck,
    Award,
    Volume2,
    BookOpenCheck,
    Check,
    X,
} from "lucide-react";

const comparisonPoints = [
    {
        conventional: "Bacaan panjang dengan kata-kata yang sulit dipahami anak",
        rimba: "Materi singkat dan bergambar yang disusun secara berurutan",
    },

    {
        conventional:
            "Belajar hanya dengan membaca tanpa latihan memilih tindakan yang aman",
        rimba:
            "Belajar melalui cerita dan kegiatan interaktif untuk mengenali tindakan yang aman",
    },

    {
        conventional:
            "Latihan yang tidak selalu berkaitan dengan materi yang dipelajari",
        rimba:
            "Misi dan kuis yang sesuai dengan materi agar anak dapat menguji pemahamannya",
    },
];

const featureHighlights = [
    {
        icon: Gamepad2,
        title: "Petualangan Interaktif Sahabat Rimba",
        desc: "Ajak anak menjelajahi dunia R.I.M.B.A, mengenal hutan dan karhutla, serta belajar memilih tindakan yang aman melalui kegiatan interaktif.",
        color: "text-rimba-600",
        bg: "bg-rimba-50",
        hoverBorder: "hover:border-rimba-400",
        hoverShadow: "hover:shadow-rimba-500/10",
        indicator: "bg-rimba-500",
        iconAnim: "group-hover:scale-110 group-hover:-rotate-6",
    },

    {
        icon: Compass,
        title: "Misi dan Kuis Bertahap",
        desc: "Anak dapat menyelesaikan misi secara bertahap dan melatih pemahaman tentang karhutla melalui pertanyaan serta situasi sederhana.",
        color: "text-accent-sky",
        bg: "bg-accent-skyLight",
        hoverBorder: "hover:border-accent-sky/50",
        hoverShadow: "hover:shadow-accent-sky/10",
        indicator: "bg-accent-sky",
        iconAnim: "group-hover:scale-110 group-hover:rotate-12",
    },

    {
        icon: BookOpenCheck,
        title: "Materi Ringkas dan Berurutan",
        desc: "Materi dimulai dari mengenal hutan dan karhutla, memahami penyebab serta dampaknya, lalu belajar cara mencegah kebakaran dan menjaga keselamatan.",
        color: "text-accent-flame",
        bg: "bg-accent-flameLight",
        hoverBorder: "hover:border-accent-flame/50",
        hoverShadow: "hover:shadow-accent-flame/10",
        indicator: "bg-accent-flame",
        iconAnim: "group-hover:scale-110 group-hover:rotate-6",
    },

    {
        icon: Volume2,
        title: "Belajar dengan Bantuan Suara",
        desc: "Fitur suara membantu anak menyimak materi sambil membaca, sehingga kegiatan belajar terasa lebih mudah dan menyenangkan.",
        color: "text-leaf-dark",
        bg: "bg-leaf-light",
        hoverBorder: "hover:border-leaf/50",
        hoverShadow: "hover:shadow-leaf/10",
        indicator: "bg-leaf",
        iconAnim: "group-hover:scale-110 group-hover:-translate-y-0.5",
    },

    {
        icon: Award,
        title: "Lencana Sahabat Rimba",
        desc: "Lencana menjadi tanda apresiasi saat anak menyelesaikan kegiatan belajar dan mendorong mereka untuk terus belajar serta menjaga lingkungan.",
        color: "text-accent-sun",
        bg: "bg-accent-sunLight",
        hoverBorder: "hover:border-accent-sun/60",
        hoverShadow: "hover:shadow-accent-sun/15",
        indicator: "bg-accent-sun",
        iconAnim: "group-hover:scale-110 group-hover:-rotate-6",
    },

    {
        icon: ShieldCheck,
        title: "Panduan Keselamatan",
        desc: "Anak belajar menjauhi api dan asap, tidak mencoba memadamkan kebakaran sendiri, serta segera memberi tahu orang tua, guru, atau orang dewasa.",
        color: "text-rimba-700",
        bg: "bg-rimba-100",
        hoverBorder: "hover:border-rimba-500/50",
        hoverShadow: "hover:shadow-rimba-600/10",
        indicator: "bg-rimba-600",
        iconAnim: "group-hover:scale-110 group-hover:-translate-y-0.5",
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
                        <span>Keunggulan Pembelajaran</span>
                    </div>

                    <h2 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-rimba-950 tracking-tight">
                        Mengapa Belajar di R.I.M.B.A?
                    </h2>

                    <p className="text-rimba-800 text-sm sm:text-base mt-3 leading-relaxed font-medium">
                        Belajar tentang kebakaran hutan dan lahan bisa dilakukan dengan cara
                        yang menyenangkan. R.I.M.B.A membantu anak memahami materi melalui
                        cerita, gambar, misi, dan kuis yang mudah diikuti.
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

                                <span>Bahan Belajar Umum</span>
                            </div>

                            <ul className="space-y-3">
                                {comparisonPoints.map((item, idx) => (
                                    <li
                                        key={idx}
                                        className="flex items-start gap-3 p-3.5 rounded-2xl bg-white/70 border border-rose-100/60 text-xs sm:text-sm text-rimba-900/80"
                                    >
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
                                <span>Metode Belajar R.I.M.B.A</span>
                            </div>

                            <ul className="space-y-3">
                                {comparisonPoints.map((item, idx) => (
                                    <li
                                        key={idx}
                                        className="flex items-start gap-3 p-3.5 rounded-2xl bg-white border border-rimba-200/80 shadow-xs text-xs sm:text-sm text-rimba-950 font-medium"
                                    >
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
