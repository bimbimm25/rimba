import React from 'react';
import { Trees, Flame, Shield, CheckCircle2, Award } from 'lucide-react';
import { Card } from '@/components/ui/Card';

const pillars = [
    {
        icon: Trees,
        title: 'Kenali Hutan',
        desc: 'Mengetahui pentingnya peran pohon dan hutan bagi udara segar kita.',
        color: 'text-rimba-600',
        bg: 'bg-rimba-50',
        hoverBorder: 'hover:border-rimba-400',
        hoverShadow: 'hover:shadow-rimba-500/10',
        indicator: 'bg-rimba-500',
        iconHoverAnim: 'group-hover:scale-110 group-hover:-translate-y-0.5',
    },
    {
        icon: Flame,
        title: 'Kenali Karhutla',
        desc: 'Memahami apa itu kebakaran hutan dan lahan dan penyebab utamanya.',
        color: 'text-accent-flame',
        bg: 'bg-accent-flameLight',
        hoverBorder: 'hover:border-accent-flame/50',
        hoverShadow: 'hover:shadow-accent-flame/10',
        indicator: 'bg-accent-flame',
        iconHoverAnim: 'group-hover:scale-110 group-hover:rotate-6',
    },
    {
        icon: Shield,
        title: 'Belajar Mencegah',
        desc: 'Mengenali langkah sederhana sehari-hari agar kebakaran tidak terjadi di sekitar kita.',
        color: 'text-leaf-dark',
        bg: 'bg-leaf-light',
        hoverBorder: 'hover:border-leaf/50',
        hoverShadow: 'hover:shadow-leaf/10',
        indicator: 'bg-leaf',
        iconHoverAnim: 'group-hover:scale-110 group-hover:-translate-y-0.5',
    },
    {
        icon: CheckCircle2,
        title: 'Pilih Tindakan Aman',
        desc: 'Belajar melatih respon yang tepat untuk mengindari bahaya dan melaporkan ke orang dewasa.',
        color: 'text-accent-sky',
        bg: 'bg-accent-skyLight',
        hoverBorder: 'hover:border-accent-sky/50',
        hoverShadow: 'hover:shadow-accent-sky/10',
        indicator: 'bg-accent-sky',
        iconHoverAnim: 'group-hover:scale-110 group-hover:rotate-12',
    },
    {
        icon: Award,
        title: 'Selesaikan Misi',
        desc: 'Uji wawasan yang sudah di pelajari melalui kuis dan dapatkan e-certificate.',
        color: 'text-accent-sun',
        bg: 'bg-accent-sunLight',
        hoverBorder: 'hover:border-accent-sun/60',
        hoverShadow: 'hover:shadow-accent-sun/15',
        indicator: 'bg-accent-sun',
        iconHoverAnim: 'group-hover:scale-110 group-hover:-rotate-6',
    },
];

export const LearningPillars = () => {
    return (
        <section className="py-20 bg-white border-y border-rimba-100 relative">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header Section */}
                <div className="text-center max-w-2xl mx-auto mb-14">
                    <h2 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-rimba-950 tracking-tight">
                        Apa yang Akan Kamu Pelajari?
                    </h2>
                    <p className="text-rimba-800 text-sm sm:text-base mt-3 leading-relaxed font-medium">
                        Materi disusun ringkas dan terfokus agar mudah dipahami langkah demi langkah.
                    </p>
                </div>

                {/* Pillars Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 lg:gap-6 items-stretch">
                    {pillars.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <Card
                                key={index}
                                className={`group relative flex h-full flex-col items-center justify-between text-center p-5 sm:p-6 rounded-[28px] border border-rimba-100 bg-white cursor-pointer overflow-hidden transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-xl ${item.hoverBorder} ${item.hoverShadow}`}
                            >
                                {/* Visual Icon Container */}
                                <div
                                    className={`w-16 h-16 rounded-2xl ${item.bg} ${item.color} flex items-center justify-center mb-5 transition-transform duration-300 ease-out shadow-sm`}
                                >
                                    <Icon
                                        className={`w-7 h-7 transition-all duration-300 ease-out ${item.iconHoverAnim}`}
                                    />
                                </div>

                                {/* Konten Teks: Tajam dan Jelas */}
                                <div className="flex w-full flex-1 flex-col items-center justify-start">
                                    <h3 className="font-display font-bold text-rimba-950 text-base leading-snug mb-2 min-h-11 flex items-center justify-center group-hover:text-rimba-700 transition-colors duration-200">
                                        {item.title}
                                    </h3>
                                    <p className="text-xs text-rimba-800 leading-relaxed font-normal max-w-[18rem] min-h-19 flex items-start justify-center text-center">
                                        {item.desc}
                                    </p>
                                </div>

                                {/* Garis Aksen Bawah */}
                                <span
                                    className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-1 w-0 group-hover:w-16 rounded-full ${item.indicator} transition-all duration-300 ease-out`}
                                    aria-hidden="true"
                                />
                            </Card>
                        );
                    })}
                </div>

            </div>
        </section>
    );
};