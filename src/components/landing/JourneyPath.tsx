import React from 'react';
import { Search, HelpCircle, Eye, AlertOctagon, UserCheck, Trophy } from 'lucide-react';

const steps = [
    {
        step: '01',
        title: 'Kenali',
        desc: 'Apa itu karhutla dan bagaimana mengenali tanda-tandanya?',
        icon: Search,
        color: 'text-rimba-600',
        bg: 'bg-rimba-50',
        hoverBorder: 'hover:border-rimba-400',
        hoverShadow: 'hover:shadow-rimba-500/10',
        indicator: 'bg-rimba-500',
        badgeBg: 'bg-rimba-100 text-rimba-800',
        iconHoverAnim: 'group-hover:scale-110 group-hover:-rotate-12',
    },
    {
        step: '02',
        title: 'Pahami',
        desc: 'Kenapa bisa terjadi di lahan gambut dan kawasan hutan kita?',
        icon: HelpCircle,
        color: 'text-accent-sky',
        bg: 'bg-accent-skyLight',
        hoverBorder: 'hover:border-accent-sky/50',
        hoverShadow: 'hover:shadow-accent-sky/10',
        indicator: 'bg-accent-sky',
        badgeBg: 'bg-accent-skyLight text-sky-800',
        iconHoverAnim: 'group-hover:scale-110 group-hover:rotate-12',
    },
    {
        step: '03',
        title: 'Temukan',
        desc: 'Apa dampaknya bagi satwa rimba, tanaman, dan kesehatan udara?',
        icon: Eye,
        color: 'text-accent-flame',
        bg: 'bg-accent-flameLight',
        hoverBorder: 'hover:border-accent-flame/50',
        hoverShadow: 'hover:shadow-accent-flame/10',
        indicator: 'bg-accent-flame',
        badgeBg: 'bg-accent-flameLight text-orange-800',
        iconHoverAnim: 'group-hover:scale-110 group-hover:-translate-y-0.5',
    },
    {
        step: '04',
        title: 'Cegah',
        desc: 'Kebiasaan baik sehari-hari agar api tidak muncul sembarangan.',
        icon: AlertOctagon,
        color: 'text-leaf-dark',
        bg: 'bg-leaf-light',
        hoverBorder: 'hover:border-leaf/50',
        hoverShadow: 'hover:shadow-leaf/10',
        indicator: 'bg-leaf',
        badgeBg: 'bg-leaf-light text-emerald-800',
        iconHoverAnim: 'group-hover:scale-110 group-hover:rotate-6',
    },
    {
        step: '05',
        title: 'Bertindak Aman',
        desc: 'Menghindar dari bahaya dan segera lapor ke orang dewasa.',
        icon: UserCheck,
        color: 'text-rimba-700',
        bg: 'bg-rimba-100',
        hoverBorder: 'hover:border-rimba-500/50',
        hoverShadow: 'hover:shadow-rimba-600/10',
        indicator: 'bg-rimba-600',
        badgeBg: 'bg-rimba-100 text-rimba-900',
        iconHoverAnim: 'group-hover:scale-110 group-hover:-translate-y-0.5',
    },
    {
        step: '06',
        title: 'Misi Rimba',
        desc: 'Uji pemahaman lewat skenario interaktif dan raih lencanamu!',
        icon: Trophy,
        color: 'text-accent-sun',
        bg: 'bg-accent-sunLight',
        hoverBorder: 'hover:border-accent-sun/60',
        hoverShadow: 'hover:shadow-accent-sun/15',
        indicator: 'bg-accent-sun',
        badgeBg: 'bg-accent-sunLight text-amber-900',
        iconHoverAnim: 'group-hover:scale-110 group-hover:-rotate-6',
    },
];

export const JourneyPath = () => {
    return (
        <section className="py-20 bg-earth-cream relative border-b border-rimba-100/70">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header Section */}
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <div className="inline-block px-3.5 py-1 rounded-full bg-rimba-100 border border-rimba-200/80 text-rimba-800 text-xs font-bold uppercase tracking-wider mb-3">
                        Alur Pembelajaran
                    </div>
                    <h2 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-rimba-950 tracking-tight">
                        Perjalanan Belajar Sahabat Rimba
                    </h2>
                    <p className="text-rimba-800 text-sm sm:text-base mt-3 leading-relaxed font-medium">
                        Mulai dari dasar hingga latihan mengambil keputusan yang tepat.
                    </p>
                </div>

                {/* Steps Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {steps.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <div
                                key={index}
                                className={`group relative bg-white rounded-3xl p-6 sm:p-7 border border-rimba-100/90 shadow-sm flex items-start gap-5 cursor-pointer overflow-hidden transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-xl ${item.hoverBorder} ${item.hoverShadow}`}
                            >
                                {/* Visual Icon Container */}
                                <div
                                    className={`w-13 h-13 rounded-2xl ${item.bg} ${item.color} flex items-center justify-center shrink-0 shadow-xs transition-transform duration-300 ease-out`}
                                >
                                    <Icon
                                        className={`w-6 h-6 transition-all duration-300 ease-out ${item.iconHoverAnim}`}
                                    />
                                </div>

                                {/* Konten Teks */}
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-center gap-2 mb-1">
                                        <span
                                            className={`text-[10px] font-extrabold tracking-wider px-2 py-0.5 rounded-md uppercase ${item.badgeBg}`}
                                        >
                                            Langkah {item.step}
                                        </span>
                                    </div>
                                    <h3 className="font-display font-bold text-rimba-950 text-base sm:text-lg group-hover:text-rimba-700 transition-colors duration-200 truncate">
                                        {item.title}
                                    </h3>
                                    <p className="text-xs text-rimba-800 leading-relaxed font-normal mt-1">
                                        {item.desc}
                                    </p>
                                </div>

                                {/* Garis Aksen Bawah (Mengembang dari tengah saat di-hover) */}
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