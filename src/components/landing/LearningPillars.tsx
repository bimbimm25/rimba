import React from 'react';
import { Trees, Flame, Shield, CheckCircle2, Award } from 'lucide-react';
import { Card } from '@/components/ui/Card';

const pillars = [
    {
        icon: Trees,
        title: 'Kenali Rimba',
        desc: 'Mengetahui pentingnya peran pohon dan hutan bagi udara segar kita.',
        color: 'text-rimba-600',
        bg: 'bg-rimba-50',
    },
    {
        icon: Flame,
        title: 'Kenali Karhutla',
        desc: 'Memahami apa itu kebakaran lahan dan penyebab utamanya dengan tenang.',
        color: 'text-accent-flame',
        bg: 'bg-accent-flameLight',
    },
    {
        icon: Shield,
        title: 'Belajar Mencegah',
        desc: 'Langkah sederhana sehari-hari agar kebakaran tidak terjadi di sekitar kita.',
        color: 'text-rimba-700',
        bg: 'bg-leaf-light',
    },
    {
        icon: CheckCircle2,
        title: 'Pilih Tindakan Aman',
        desc: 'Melatih respon yang tepat: hindari bahaya dan laporkan pada orang dewasa.',
        color: 'text-accent-sky',
        bg: 'bg-accent-skyLight',
    },
    {
        icon: Award,
        title: 'Selesaikan Misi',
        desc: 'Uji wawasan melalui kuis dan jadilah Sahabat Rimba yang membanggakan.',
        color: 'text-accent-sun',
        bg: 'bg-accent-sunLight',
    },
];

export const LearningPillars = () => {
    return (
        <section className="py-16 bg-white border-y border-rimba-100">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-2xl mx-auto mb-12">
                    <h2 className="font-display font-bold text-2xl sm:text-3xl text-rimba-900 tracking-tight">
                        Apa yang Akan Kamu Pelajari?
                    </h2>
                    <p className="text-rimba-700 text-sm sm:text-base mt-2">
                        Materi disusun ringkas dan terfokus agar mudah dipahami langkah demi langkah.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
                    {pillars.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <Card key={index} className="flex flex-col items-center text-center p-6 hover:translate-y-[-2px] transition-transform">
                                <div className={`w-12 h-12 rounded-2xl ${item.bg} ${item.color} flex items-center justify-center mb-4`}>
                                    <Icon className="w-6 h-6" />
                                </div>
                                <h3 className="font-display font-semibold text-rimba-900 text-base mb-2">
                                    {item.title}
                                </h3>
                                <p className="text-xs text-rimba-700 leading-relaxed">
                                    {item.desc}
                                </p>
                            </Card>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};