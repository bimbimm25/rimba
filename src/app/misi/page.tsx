'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
    Target,
    Lock,
    CheckCircle2,
    ArrowRight,
    Clock,
    Sparkles,
    Award,
    ShieldAlert,
    Flame,
    Trees,
    Trophy
} from 'lucide-react';
import { MISSIONS } from '@/data/missions';
import { CertificateModal } from '@/components/certificate/CertificateModal';

export default function MisiListPage() {
    const [completedMissionIds, setCompletedMissionIds] = useState<string[]>([]);
    const [mounted, setMounted] = useState(false);
    const [isCertModalOpen, setIsCertModalOpen] = useState(false);

    useEffect(() => {
        setMounted(true);
        try {
            const saved = localStorage.getItem('rimba_completed_missions') || localStorage.getItem('rimba_mission_progress');
            if (saved) {
                const parsed = JSON.parse(saved);
                if (Array.isArray(parsed)) {
                    setCompletedMissionIds(Array.from(new Set(parsed.map(String))));
                }
            }
        } catch {
            // Fallback
        }
    }, []);

    const totalCompleted = completedMissionIds.length;
    const progressPercent = Math.round((totalCompleted / MISSIONS.length) * 100);

    // Fungsi pengecekan apakah misi ini terbuka:
    // Level 1 selalu terbuka. Level N terbuka jika Level N-1 sudah selesai.
    const isMissionUnlocked = (index: number) => {
        if (index === 0) return true;
        const previousMission = MISSIONS[index - 1];
        return completedMissionIds.includes(previousMission.id) || completedMissionIds.includes(previousMission.slug);
    };

    return (
        <>
            <div className="min-h-screen bg-earth-cream pb-28 pt-28 sm:pt-32">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

                    {/* Header Misi */}
                    <section className="text-center max-w-3xl mx-auto space-y-4">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100 border border-amber-200 text-amber-900 text-xs font-bold uppercase tracking-wider">
                            <Target className="w-4 h-4 text-amber-600" />
                            <span>Simulasi Aksi Lapangan Karhutla</span>
                        </div>

                        <h1 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-rimba-950 tracking-tight leading-tight">
                            Pusat Misi Tanggap Bencana Rimba
                        </h1>

                        <p className="text-rimba-800 text-sm sm:text-base leading-relaxed font-medium">
                            Selesaikan setiap misi secara bertahap mulai dari Level 1! Selesaikan satu tantangan untuk membuka kunci misi berikutnya dan dapatkan Piagam Duta Rimba.
                        </p>

                        {/* Kotak Statistik Ringkas */}
                        <div className="flex items-center justify-center gap-6 pt-2">
                            <div className="bg-white px-5 py-3 rounded-2xl border border-rimba-100 shadow-2xs text-left">
                                <span className="text-[10px] font-bold text-slate-500 uppercase block">Level Tuntas</span>
                                <span className="font-display font-black text-xl text-rimba-950">
                                    {mounted ? totalCompleted : 0} / {MISSIONS.length} Level
                                </span>
                            </div>
                            <div className="bg-white px-5 py-3 rounded-2xl border border-rimba-100 shadow-2xs text-left">
                                <span className="text-[10px] font-bold text-slate-500 uppercase block">Progres Kelulusan</span>
                                <span className="font-display font-black text-xl text-emerald-600">
                                    {mounted ? progressPercent : 0}%
                                </span>
                            </div>
                        </div>
                    </section>

                    <Link
                        href="/misi/hasil"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 font-bold text-xs hover:bg-amber-100 transition-colors"
                    >
                        <Trophy className="w-4 h-4 text-amber-600" />
                        <span>Lihat Lembar Prestasi & Lencana</span>
                    </Link>
                    
                    {/* Bar Kemajuan Level */}
                    <div className="w-full h-3.5 bg-rimba-100/70 rounded-full overflow-hidden p-0.5 border border-rimba-200">
                        <div
                            className="h-full bg-linear-to-r from-amber-500 via-emerald-500 to-rimba-600 rounded-full transition-all duration-500"
                            style={{ width: `${progressPercent}%` }}
                        />
                    </div>

                    {/* Daftar 8 Level Misi Berjenjang */}
                    <section className="space-y-4">
                        {MISSIONS.map((mission, idx) => {
                            const isCompleted = completedMissionIds.includes(mission.id) || completedMissionIds.includes(mission.slug);
                            const unlocked = isMissionUnlocked(idx);

                            return (
                                <div
                                    key={mission.id}
                                    className={`p-5 sm:p-6 rounded-3xl border transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 ${isCompleted
                                        ? 'bg-emerald-50/70 border-emerald-200 shadow-xs'
                                        : unlocked
                                            ? 'bg-white border-rimba-200 hover:border-rimba-400 shadow-sm'
                                            : 'bg-slate-100/80 border-slate-200 opacity-65 select-none'
                                        }`}
                                >
                                    {/* Info Misi */}
                                    <div className="flex items-start gap-4">
                                        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center font-display font-black text-sm shrink-0 border mt-0.5 ${isCompleted
                                            ? 'bg-emerald-100 border-emerald-300 text-emerald-900'
                                            : unlocked
                                                ? 'bg-amber-100 border-amber-300 text-amber-950'
                                                : 'bg-slate-200 border-slate-300 text-slate-500'
                                            }`}>
                                            {isCompleted ? <CheckCircle2 className="w-6 h-6 text-emerald-600" /> : unlocked ? `LV ${mission.level}` : <Lock className="w-5 h-5 text-slate-500" />}
                                        </div>

                                        <div className="space-y-1">
                                            <div className="flex flex-wrap items-center gap-2">
                                                <span className="text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-full bg-earth-soft text-rimba-800 border border-rimba-100">
                                                    {mission.category}
                                                </span>
                                                <span className="text-[11px] text-slate-500 font-medium flex items-center gap-1">
                                                    <Clock className="w-3.5 h-3.5" /> {mission.duration}
                                                </span>
                                                <span className="text-[11px] text-amber-600 font-extrabold">
                                                    +{mission.xpReward} XP
                                                </span>
                                                {!unlocked && (
                                                    <span className="text-[10px] font-bold text-rose-700 bg-rose-50 px-2 py-0.5 rounded-md border border-rose-200 flex items-center gap-1">
                                                        <Lock className="w-3 h-3" /> Selesaikan Level {idx} dulu
                                                    </span>
                                                )}
                                            </div>

                                            <h3 className="font-display font-bold text-base sm:text-lg text-rimba-950">
                                                {mission.title}
                                            </h3>
                                            <p className="text-xs text-rimba-800 leading-relaxed font-normal">
                                                {mission.subtitle}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Tombol Aksi */}
                                    <div className="w-full sm:w-auto shrink-0">
                                        {unlocked ? (
                                            <Link href={`/misi/${mission.id}`} className="block w-full sm:w-auto">
                                                <button
                                                    className={`w-full sm:w-auto px-6 py-3 rounded-2xl font-display font-bold text-xs flex items-center justify-center gap-2 shadow-sm transition-all cursor-pointer ${isCompleted
                                                        ? 'bg-emerald-100 hover:bg-emerald-200 text-emerald-950 border border-emerald-300'
                                                        : 'bg-amber-500 hover:bg-amber-600 text-white active:scale-95'
                                                        }`}
                                                >
                                                    <span>{isCompleted ? 'Mainkan Ulang' : 'Mulai Misi'}</span>
                                                    <ArrowRight className="w-4 h-4" />
                                                </button>
                                            </Link>
                                        ) : (
                                            <button
                                                disabled
                                                className="w-full sm:w-auto px-6 py-3 rounded-2xl font-display font-bold text-xs flex items-center justify-center gap-2 bg-slate-200 text-slate-500 border border-slate-300 cursor-not-allowed"
                                            >
                                                <Lock className="w-4 h-4" />
                                                <span>Terkunci</span>
                                            </button>
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                    </section>

                    {/* Kartu Klaim Sertifikat Setelah Misi Selesai */}
                    <div className="p-6 sm:p-8 rounded-3xl bg-[#062817] text-white border border-emerald-800 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-2xl bg-amber-400/20 border border-amber-300/40 text-amber-300 flex items-center justify-center shrink-0 mt-0.5">
                                <Award className="w-6 h-6 text-amber-400" />
                            </div>
                            <div className="space-y-1">
                                <div className="flex items-center gap-2">
                                    <span className="text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-full bg-amber-400 text-amber-950 tracking-wider">
                                        Kelulusan Duta Rimba
                                    </span>
                                    <span className="text-xs text-emerald-300 font-bold flex items-center gap-1">
                                        <Sparkles className="w-3.5 h-3.5" /> Sertifikat Resmi
                                    </span>
                                </div>
                                <h3 className="font-display font-extrabold text-xl text-white">
                                    Piagam Apresiasi Aksi Lapangan
                                </h3>
                                <p className="text-xs text-emerald-200 leading-relaxed max-w-xl">
                                    Selesaikan seluruh level misi untuk mencetak piagam fisik/digital resmi dengan nama lengkapmu!
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center gap-3 w-full md:w-auto shrink-0">
                            <button
                                onClick={() => setIsCertModalOpen(true)}
                                className="w-full md:w-auto px-6 py-3.5 rounded-2xl bg-amber-400 hover:bg-amber-300 active:scale-95 text-amber-950 font-display font-extrabold text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                            >
                                <Award className="w-4 h-4 text-amber-950" />
                                <span>Buka Sertifikat</span>
                            </button>
                        </div>
                    </div>

                </div>
            </div>

            {/* Modal Dialog Sertifikat */}
            <CertificateModal
                isOpen={isCertModalOpen}
                onClose={() => setIsCertModalOpen(false)}
            />
        </>
    );
}