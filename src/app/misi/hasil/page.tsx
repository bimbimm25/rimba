'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
    Trophy,
    Award,
    Lock,
    Sparkles,
    RotateCcw,
    BookOpen,
    Compass,
    Trees,
    Wind,
    ShieldCheck,
    CheckCircle2
} from 'lucide-react';
import { MISSIONS } from '@/data/missions';
import { CertificateModal } from '@/components/certificate/CertificateModal';

interface BadgeItem {
    id: string;
    name: string;
    desc: string;
    icon: React.ElementType;
    minCompleted: number;
    color: string;
    bgColor: string;
    borderColor: string;
}

const BADGES_LIST: BadgeItem[] = [
    {
        id: 'badge-penjelajah',
        name: 'Penjelajah Rimba',
        desc: 'Berhasil memulai langkah pertama dan menuntaskan misi perkenalan.',
        icon: Compass,
        minCompleted: 1,
        color: 'text-sky-600',
        bgColor: 'bg-sky-50',
        borderColor: 'border-sky-200'
    },
    {
        id: 'badge-pakar-gambut',
        name: 'Penjaga Gambut',
        desc: 'Memahami cara menjaga tanah rawa agar tetap basah dan aman dari api.',
        icon: Trees,
        minCompleted: 3,
        color: 'text-emerald-600',
        bgColor: 'bg-emerald-50',
        borderColor: 'border-emerald-200'
    },
    {
        id: 'badge-penjaga-udara',
        name: 'Pelindung Udara Bersih',
        desc: 'Mengetahui cara melindungi diri dari bahaya asap dan mengolah daun jadi kompos.',
        icon: Wind,
        minCompleted: 6,
        color: 'text-amber-600',
        bgColor: 'bg-amber-50',
        borderColor: 'border-amber-200'
    },
    {
        id: 'badge-sahabat-rimba',
        name: 'Sahabat Rimba Teladan',
        desc: 'Lencana tertinggi! Berhasil menuntaskan seluruh misi penjelajahan hutan.',
        icon: ShieldCheck,
        minCompleted: 8,
        color: 'text-purple-600',
        bgColor: 'bg-purple-50',
        borderColor: 'border-purple-200'
    }
];

export default function HasilMisiPage() {
    const [completedMissions, setCompletedMissions] = useState<string[]>([]);
    const [isMounted, setIsMounted] = useState<boolean>(false);
    const [isCertificateOpen, setIsCertificateOpen] = useState<boolean>(false);

    useEffect(() => {
        setIsMounted(true);
        try {
            const savedMissions = localStorage.getItem('rimba_completed_missions');
            if (savedMissions) {
                setCompletedMissions(JSON.parse(savedMissions));
            }
        } catch {
            // Abaikan jika peramban membatasi akses storage
        }
    }, []);

    const totalMissions = MISSIONS.length;
    const completedCount = completedMissions.length;
    const completionPercentage = Math.round((completedCount / totalMissions) * 100);
    const totalXp = completedCount * 125;
    const isAllCompleted = completedCount >= totalMissions;

    if (!isMounted) return null;

    return (
        <div className="min-h-screen bg-earth-cream pb-28 pt-28 sm:pt-32">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-10">

                {/* 1. Header Halaman */}
                <header className="text-center space-y-3">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-950 text-xs font-bold uppercase tracking-wider">
                        <Trophy className="w-3.5 h-3.5 text-amber-600" />
                        <span>Pencapaian Sahabat Rimba</span>
                    </div>

                    <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-rimba-950">
                        Hasil & Lembar Prestasi
                    </h1>

                    <p className="text-sm sm:text-base text-rimba-800 max-w-xl mx-auto leading-relaxed">
                        Lihat perolehan lencana penjelajahanmu dan buka piagam penghargaan resmi sebagai pelindung kelestarian alam[cite: 3].
                    </p>
                </header>

                {/* 2. Kartu Rangkuman Nilai & Skor */}
                <section className="bg-white rounded-3xl p-6 sm:p-8 border border-rimba-100 shadow-sm space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">

                        <div className="p-5 rounded-2xl bg-earth-soft/60 border border-rimba-100 flex flex-col items-center justify-center space-y-1">
                            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Misi Selesai</span>
                            <p className="font-display font-black text-3xl text-rimba-950">
                                {completedCount} <span className="text-lg font-bold text-slate-400">/ {totalMissions}</span>
                            </p>
                            <span className="text-[11px] font-semibold text-emerald-700">Tantangan Lapangan</span>
                        </div>

                        <div className="p-5 rounded-2xl bg-earth-soft/60 border border-rimba-100 flex flex-col items-center justify-center space-y-1">
                            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Skor Pengalaman</span>
                            <p className="font-display font-black text-3xl text-amber-600">
                                {totalXp} <span className="text-lg font-bold text-amber-400">XP</span>
                            </p>
                            <span className="text-[11px] font-semibold text-amber-700">Poin Kesiapsiagaan</span>
                        </div>

                        <div className="p-5 rounded-2xl bg-earth-soft/60 border border-rimba-100 flex flex-col items-center justify-center space-y-1">
                            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Tingkat Kelulusan</span>
                            <p className="font-display font-black text-3xl text-emerald-700">
                                {completionPercentage}%
                            </p>
                            <span className="text-[11px] font-semibold text-emerald-700">
                                {isAllCompleted ? 'Selesai Sempurna!' : 'Terus Belajar'}
                            </span>
                        </div>

                    </div>

                    {/* Bar Kemajuan Visual */}
                    <div className="space-y-2">
                        <div className="flex justify-between text-xs font-bold text-rimba-900">
                            <span>Kemajuan Belajar Total</span>
                            <span>{completedCount} dari {totalMissions} Misi Selesai</span>
                        </div>
                        <div className="w-full h-3 rounded-full bg-slate-100 overflow-hidden p-0.5 border border-slate-200">
                            <div
                                className="h-full rounded-full bg-linear-to-r from-emerald-500 to-amber-400 transition-all duration-500"
                                style={{ width: `${Math.min(completionPercentage, 100)}%` }}
                            />
                        </div>
                    </div>
                </section>

                {/* 3. Galeri Lencana Penghargaan (Badges) */}
                <section className="bg-white rounded-3xl p-6 sm:p-8 border border-rimba-100 shadow-sm space-y-6">
                    <div className="border-b border-rimba-100 pb-4">
                        <h2 className="font-display font-bold text-xl text-rimba-950 flex items-center gap-2">
                            <Award className="w-5 h-5 text-amber-500" />
                            <span>Koleksi Lencana Rimba</span>
                        </h2>
                        <p className="text-xs text-rimba-700 font-medium mt-0.5">
                            Lencana otomatis terbuka saat kamu menyelesaikan misi yang diperlukan[cite: 3].
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {BADGES_LIST.map((badge) => {
                            const Icon = badge.icon;
                            const isUnlocked = completedCount >= badge.minCompleted;

                            return (
                                <div
                                    key={badge.id}
                                    className={`p-4 sm:p-5 rounded-2xl border transition-all flex items-start gap-4 ${isUnlocked
                                        ? `${badge.bgColor}${badge.borderColor} shadow-xs`
                                        : 'bg-slate-50 border-slate-200 opacity-60'
                                        }`}
                                >
                                    <div
                                        className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 border ${isUnlocked
                                            ? `bg-white ${badge.color}${badge.borderColor} shadow-xs`
                                            : 'bg-slate-200 text-slate-400 border-slate-300'
                                            }`}
                                    >
                                        {isUnlocked ? <Icon className="w-6 h-6" /> : <Lock className="w-5 h-5" />}
                                    </div>

                                    <div className="space-y-1">
                                        <div className="flex items-center gap-2">
                                            <h3 className={`font-display font-bold text-sm ${isUnlocked ? 'text-rimba-950' : 'text-slate-500'}`}>
                                                {badge.name}
                                            </h3>
                                            {isUnlocked && (
                                                <span className="text-[10px] font-extrabold uppercase px-2 py-0.2 rounded-full bg-emerald-100 text-emerald-800">
                                                    Terbuka
                                                </span>
                                            )}
                                        </div>
                                        <p className="text-xs text-slate-600 leading-relaxed font-normal">
                                            {badge.desc}
                                        </p>
                                        <span className="text-[10px] font-bold text-slate-400 block pt-1">
                                            Syarat: Minimal {badge.minCompleted} Misi Selesai
                                        </span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </section>

                {/* 4. Banner Panggilan Sertifikat Modal */}
                <section className="bg-[#052917] text-white rounded-3xl p-6 sm:p-8 border-2 border-emerald-700/80 shadow-md flex flex-col sm:flex-row items-center justify-between gap-6">
                    <div className="space-y-1.5 text-center sm:text-left">
                        <span className="text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full bg-amber-400 text-amber-950 tracking-wider inline-block">
                            Piagam Kelulusan
                        </span>
                        <h2 className="font-display font-extrabold text-xl sm:text-2xl text-white">
                            Sertifikat Duta Muda Rimba
                        </h2>
                        <p className="text-xs sm:text-sm text-emerald-200/90 max-w-md leading-relaxed font-normal">
                            {isAllCompleted
                                ? 'Semua misi berhasil kamu selesaikan! Klik tombol di samping untuk mencetak sertifikat resmi atas namamu.'
                                : 'Sertifikat dapat kamu cetak kapan saja sebagai bukti apresiasi perjalanan belajarmu.'}
                        </p>
                    </div>

                    <button
                        type="button"
                        onClick={() => setIsCertificateOpen(true)}
                        className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-amber-400 hover:bg-amber-300 active:scale-95 text-amber-950 font-display font-extrabold text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer shrink-0 border-0 outline-none"
                    >
                        <Award className="w-5 h-5 text-amber-950" />
                        <span>Buka Sertifikat Penghargaan</span>
                    </button>
                </section>

                {/* 5. Navigasi Aksi Bawah */}
                <footer className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4">
                    <Link
                        href="/misi"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-white border border-rimba-200 text-rimba-900 hover:bg-rimba-50 font-display font-bold text-xs shadow-2xs transition-colors"
                    >
                        <RotateCcw className="w-4 h-4 text-rimba-600" />
                        <span>Kembali ke Daftar Misi</span>
                    </Link>

                    <Link
                        href="/belajar"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-rimba-900 hover:bg-rimba-950 text-white font-display font-bold text-xs shadow-sm transition-all"
                    >
                        <BookOpen className="w-4 h-4 text-amber-300" />
                        <span>Baca Materi Belajar Lagi</span>
                    </Link>
                </footer>

            </div>

            {/* Komponen Modal Sertifikat */}
            <CertificateModal
                isOpen={isCertificateOpen}
                onClose={() => setIsCertificateOpen(false)}
            />
        </div>
    );
}