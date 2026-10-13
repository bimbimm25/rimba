import React from 'react';
import Link from 'next/link';
import { BookOpen, Users, ShieldAlert, Award, ArrowRight } from 'lucide-react';

export default function PanduanPage() {
    const tips = [
        {
            title: 'Dampingi Membaca Materi 8 Bab',
            desc: 'Bantu anak memahami istilah baru seperti "gambut" dan "PM2.5" menggunakan fitur narasi suara yang tersedia.',
            icon: BookOpen
        },
        {
            title: 'Eksplorasi Game Bersama',
            desc: 'Biarkan anak mencoba menggerakkan karakter di peta RPG dan ajak berdiskusi mengenai alasan di balik jawaban pos kuis.',
            icon: Users
        },
        {
            title: 'Tanamkan Pesan Keselamatan',
            desc: 'Tegaskan kepada anak bahwa saat melihat api atau asap tebal, tugas utama mereka adalah menjauh dan mencari orang dewasa.',
            icon: ShieldAlert
        },
        {
            title: 'Cetak Piagam Apresiasi',
            desc: 'Setelah anak menyelesaikan seluruh misi, buka modul sertifikat untuk mengisi nama dan mencetak Piagam Duta Rimba sebagai bentuk apresiasi.',
            icon: Award
        }
    ];

    return (
        <div className="min-h-screen bg-earth-cream pb-28 pt-28 sm:pt-32">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-10">

                <section className="text-center max-w-2xl mx-auto space-y-3">
                    <span className="text-[10px] font-extrabold uppercase px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 tracking-wider">
                        Untuk Pendidik & Wali Murid
                    </span>
                    <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-rimba-950">
                        Panduan Pendamping Belajar
                    </h1>
                    <p className="text-rimba-800 text-sm sm:text-base leading-relaxed">
                        Petunjuk praktis bagi Bapak/Ibu Guru dan orang tua dalam mendampingi anak belajar literasi karhutla dengan aman dan bermakna.
                    </p>
                </section>

                <section className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {tips.map((tip, idx) => {
                        const Icon = tip.icon;
                        return (
                            <div key={idx} className="bg-white p-6 rounded-3xl border border-rimba-100 shadow-sm space-y-3">
                                <div className="w-10 h-10 rounded-2xl bg-earth-soft text-rimba-700 flex items-center justify-center">
                                    <Icon className="w-5 h-5" />
                                </div>
                                <h3 className="font-display font-bold text-base text-rimba-950">{tip.title}</h3>
                                <p className="text-xs text-rimba-800 leading-relaxed font-normal">{tip.desc}</p>
                            </div>
                        );
                    })}
                </section>

            </div>
        </div>
    );
}