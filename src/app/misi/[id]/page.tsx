'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import {
    ArrowLeft,
    ArrowRight,
    RotateCcw,
    CheckCircle2,
    XCircle,
    Trophy,
    ShieldAlert,
    Sparkles,
    HelpCircle,
    Award,
    Flame,
    Check,
    X
} from 'lucide-react';
import * as MissionsData from '@/data/missions';

interface ScenarioQuestion {
    id: string;
    situation: string;
    question: string;
    options: {
        id: string;
        text: string;
        isCorrect: boolean;
        explanation: string;
    }[];
}

interface MissionDetail {
    id: string;
    title: string;
    categoryTitle?: string;
    badge?: string;
    description: string;
    difficulty?: string;
    scenarios: ScenarioQuestion[];
}

// Helper untuk mengekstrak array misi secara fleksibel dari namespace data
function getMissionsList(): MissionDetail[] {
    for (const key of Object.keys(MissionsData)) {
        const val = (MissionsData as Record<string, unknown>)[key];
        if (Array.isArray(val) && val.length > 0) {
            return val as MissionDetail[];
        }
    }
    return [];
}

export default function MissionRunnerPage() {
    const params = useParams();
    const router = useRouter();
    const missionId = params?.id as string;

    const missions = getMissionsList();
    const currentMission = missions.find((m) => m.id === missionId);

    const [currentStep, setCurrentStep] = useState(0);
    const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
    const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);
    const [score, setScore] = useState(0);
    const [isQuizCompleted, setIsQuizCompleted] = useState(false);
    const [isPassedSaved, setIsPassedSaved] = useState(false);

    // Fallback skenario bawaan jika data skenario di file misi berformat ringkas
    const scenarios: ScenarioQuestion[] = currentMission?.scenarios && currentMission.scenarios.length > 0
        ? currentMission.scenarios
        : [
            {
                id: 's1',
                situation: 'Patroli drone mendeteksi kepulan asap putih tebal di pinggiran lahan gambut kering.',
                question: 'Langkah taktis pertama apa yang wajib dilakukan oleh regu penyelamat?',
                options: [
                    {
                        id: 'a',
                        text: 'Membakar sekeliling semak agar api cepat padam sendiri',
                        isCorrect: false,
                        explanation: 'Membakar semak tambahan justru mempercepat penjalaran kobaran api karhutla!'
                    },
                    {
                        id: 'b',
                        text: 'Segera melapor ke Posko Damkar 113 dan menyekat bara dengan pipa suntik air',
                        isCorrect: true,
                        explanation: 'Tepat! Laporan dini dan penyuntikan air ke dalam tanah gambut mematikan bara sebelum merambat luas.'
                    },
                    {
                        id: 'c',
                        text: 'Menunggu hujan turun beberapa hari ke depan',
                        isCorrect: false,
                        explanation: 'Bara gambut di bawah tanah bisa bertahan berminggu-minggu jika tidak segera dibasahi intensif.'
                    }
                ]
            },
            {
                id: 's2',
                situation: 'Angin kencang bertiup ke arah permukiman warga dan indeks kualitas udara (ISPU) masuk kategori Berbahaya.',
                question: 'Apa instruksi prioritas keselamatan bagi warga dan anak-anak?',
                options: [
                    {
                        id: 'a',
                        text: 'Tetap berolahraga di luar rumah tanpa masker pelindung',
                        isCorrect: false,
                        explanation: 'Paparan partikel debu halus PM2.5 sangat berbahaya bagi saluran paru-paru dan memicu ISPA akut.'
                    },
                    {
                        id: 'b',
                        text: 'Menutup celah jendela dengan kain basah, memakai masker N95, dan mengungsi ke posko ramah anak',
                        isCorrect: true,
                        explanation: 'Sempurna! Masker standar N95 dan penyekatan ruang meminimalkan masuknya gas racun karbon monoksida.'
                    },
                    {
                        id: 'c',
                        text: 'Membuka semua ventilasi rumah lebar-lebar',
                        isCorrect: false,
                        explanation: 'Membuka ventilasi justru mengalirkan asap pekat masuk ke seluruh kamar tidur.'
                    }
                ]
            },
            {
                id: 's3',
                situation: 'Seekor satwa endemik (orangutan/burung enggang) terjebak di pohon yang terkepung asap panas.',
                question: 'Bagaimana tindakan evakuasi satwa yang tepat dan aman?',
                options: [
                    {
                        id: 'a',
                        text: 'Membuat jalur koridor basah dan menghubungi tim BKSDA / penyelamat satwa liar berwenang',
                        isCorrect: true,
                        explanation: 'Benar sekali! Penyelamatan satwa liar membutuhkan penanganan terstandar agar satwa tidak panik atau terluka.'
                    },
                    {
                        id: 'b',
                        text: 'Melempar ranting api ke arah satwa agar ia segera turun melompat',
                        isCorrect: false,
                        explanation: 'Tindakan ini sangat berbahaya dan bisa mencederai satwa yang sedang ketakutan.'
                    },
                    {
                        id: 'c',
                        text: 'Membiarkannya karena satwa pasti tahan terhadap panas api',
                        isCorrect: false,
                        explanation: 'Satwa liar rentan mati lemas akibat menghirup asap pekat karhutla.'
                    }
                ]
            }
        ];

    const totalSteps = scenarios.length;
    const currentScenario = scenarios[currentStep];
    const saved = localStorage.getItem('rimba_completed_missions');
    const current = saved ? JSON.parse(saved) : [];
    if (!current.includes(missionId)) {
        current.push(missionId);
        localStorage.setItem('rimba_completed_missions', JSON.stringify(current));
    }

    // Simpan progres kelulusan ke localStorage saat kuis tuntas dengan skor >= 80
    useEffect(() => {
        if (isQuizCompleted && missionId) {
            const finalScorePercent = Math.round((score / totalSteps) * 100);
            if (finalScorePercent >= 70) {
                try {
                    const saved = localStorage.getItem('rimba_completed_missions');
                    const currentArr: string[] = saved ? JSON.parse(saved) : [];
                    if (!currentArr.includes(missionId)) {
                        const updated = [...currentArr, missionId];
                        localStorage.setItem('rimba_completed_missions', JSON.stringify(updated));
                    }
                    setIsPassedSaved(true);
                } catch {
                    // Abaikan jika storage dibatasi browser
                }
            }
        }
    }, [isQuizCompleted, score, totalSteps, missionId]);

    if (!currentMission) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-earth-cream px-4">
                <div className="text-center bg-white p-8 rounded-3xl border border-rimba-100 max-w-md shadow-sm space-y-4">
                    <Flame className="w-10 h-10 text-rose-500 mx-auto" />
                    <h1 className="font-display font-bold text-rimba-950 text-lg">Misi Tidak Ditemukan</h1>
                    <p className="text-xs text-rimba-700">Pilih skenario simulasi lain dari direktori misi penjaga rimba.</p>
                    <Link
                        href="/misi"
                        className="inline-flex px-5 py-2.5 bg-rimba-600 hover:bg-rimba-700 text-white rounded-xl text-xs font-bold transition-colors"
                    >
                        Kembali ke Daftar Misi
                    </Link>
                </div>
            </div>
        );
    }

    const handleSelectOption = (optionId: string) => {
        if (isAnswerSubmitted) return;
        setSelectedOptionId(optionId);
        setIsAnswerSubmitted(true);

        const chosen = currentScenario.options.find((opt) => opt.id === optionId);
        if (chosen?.isCorrect) {
            setScore((prev) => prev + 1);
        }
    };

    const handleNextStep = () => {
        if (currentStep < totalSteps - 1) {
            setCurrentStep((prev) => prev + 1);
            setSelectedOptionId(null);
            setIsAnswerSubmitted(false);
        } else {
            setIsQuizCompleted(true);
        }
    };

    const handleRestartQuiz = () => {
        setCurrentStep(0);
        setSelectedOptionId(null);
        setIsAnswerSubmitted(false);
        setScore(0);
        setIsQuizCompleted(false);
    };

    const selectedOption = currentScenario?.options.find((opt) => opt.id === selectedOptionId);
    const finalPercentage = Math.round((score / totalSteps) * 100);
    const isPassed = finalPercentage >= 70;

    return (
        <div className="min-h-screen bg-earth-cream pb-24 pt-28 sm:pt-32">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-8">

                {/* Bar Navigasi Atas */}
                <div className="flex items-center justify-between gap-4">
                    <Link
                        href="/misi"
                        className="inline-flex items-center gap-2 text-xs font-bold text-rimba-800 hover:text-rimba-950 bg-white px-4 py-2 rounded-full border border-rimba-100 shadow-2xs transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4 text-rimba-600" />
                        <span>Kembali ke Markas Misi</span>
                    </Link>

                    <span className="text-xs font-extrabold uppercase tracking-wider text-rimba-800 bg-rimba-100 px-3.5 py-1.5 rounded-full border border-rimba-200">
                        Simulasi Taktis Karhutla
                    </span>
                </div>

                {/* TAMPILAN 1: HASIL AKHIR EVALUASI MISI */}
                {isQuizCompleted ? (
                    <div className="bg-white rounded-3xl p-6 sm:p-10 border border-rimba-100 shadow-sm text-center space-y-6 animate-in fade-in zoom-in-95 duration-200">
                        <div className={`w-20 h-20 rounded-3xl mx-auto flex items-center justify-center shadow-md ${isPassed ? 'bg-emerald-100 text-emerald-700 border border-emerald-300' : 'bg-rose-100 text-rose-700 border border-rose-300'
                            }`}>
                            {isPassed ? <Trophy className="w-10 h-10" /> : <ShieldAlert className="w-10 h-10" />}
                        </div>

                        <div className="space-y-2">
                            <span className={`text-[11px] font-black uppercase px-3 py-1 rounded-full ${isPassed ? 'bg-emerald-50 text-emerald-800 border border-emerald-200' : 'bg-rose-50 text-rose-800 border border-rose-200'
                                }`}>
                                {isPassed ? 'Misi Berhasil Dituntaskan!' : 'Evaluasi Taktis Belum Lulus'}
                            </span>
                            <h1 className="font-display font-extrabold text-2xl sm:text-3xl text-rimba-950">
                                {isPassed ? 'Keputusan Lapangan Tepat & Tanggap!' : 'Perlu Pendalaman Strategi Pemadaman'}
                            </h1>
                            <p className="text-xs sm:text-sm text-rimba-700 max-w-md mx-auto leading-relaxed">
                                {isPassed
                                    ? 'Skor simulasi kamu memenuhi standar kelulusan. Status misi ini resmi dicatat sebagai syarat penerbitan Piagam Duta Rimba.'
                                    : 'Skor minimal kelulusan adalah 70%. Ulangi simulasi untuk memperbaiki koordinasi taktis dan menyelamatkan hutan.'}
                            </p>
                        </div>

                        {/* Skor Metric Card */}
                        <div className="p-6 rounded-2xl bg-earth-soft border border-rimba-100 max-w-xs mx-auto flex items-center justify-around">
                            <div>
                                <span className="text-[10px] font-bold text-slate-500 uppercase block">Jawaban Benar</span>
                                <span className="font-display font-black text-2xl text-rimba-950">{score} / {totalSteps}</span>
                            </div>
                            <div className="w-px h-10 bg-rimba-200" />
                            <div>
                                <span className="text-[10px] font-bold text-slate-500 uppercase block">Nilai Akurasi</span>
                                <span className={`font-display font-black text-2xl ${isPassed ? 'text-emerald-700' : 'text-rose-700'}`}>
                                    {finalPercentage}%
                                </span>
                            </div>
                        </div>

                        {/* Tombol Aksi Akhir */}
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4 border-t border-rimba-100">
                            <button
                                onClick={handleRestartQuiz}
                                className="w-full sm:w-auto px-6 py-3 rounded-2xl bg-earth-soft hover:bg-rimba-100 text-rimba-900 font-display font-bold text-xs flex items-center justify-center gap-2 border border-rimba-200 transition-colors cursor-pointer"
                            >
                                <RotateCcw className="w-4 h-4" />
                                <span>Ulangi Simulasi</span>
                            </button>

                            <Link
                                href="/misi"
                                className="w-full sm:w-auto px-7 py-3 rounded-2xl bg-rimba-600 hover:bg-rimba-700 text-white font-display font-bold text-xs flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer"
                            >
                                <span>Pilih Misi Berikutnya</span>
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                ) : (
                    /* TAMPILAN 2: RUNNER SKENARIO PER TAHAP */
                    <div className="bg-white rounded-3xl p-6 sm:p-10 border border-rimba-100 shadow-sm space-y-8">

                        {/* Header Misi & Step Bar */}
                        <div className="space-y-4 border-b border-rimba-100 pb-6">
                            <div className="flex items-center justify-between">
                                <span className="text-[10px] font-extrabold uppercase px-3 py-1 rounded-full bg-rimba-100 text-rimba-900">
                                    {currentMission.badge || 'Skenario Tanggap Karhutla'}
                                </span>
                                <span className="text-xs font-bold text-rimba-700">
                                    Tahap {currentStep + 1} dari {totalSteps}
                                </span>
                            </div>

                            <h1 className="font-display font-extrabold text-xl sm:text-2xl text-rimba-950">
                                {currentMission.title}
                            </h1>

                            {/* Progress Indicator */}
                            <div className="w-full h-2 bg-earth-soft rounded-full overflow-hidden p-0.5 border border-rimba-200">
                                <div
                                    className="h-full bg-rimba-600 rounded-full transition-all duration-300"
                                    style={{ width: `${((currentStep + 1) / totalSteps) * 100}%` }}
                                />
                            </div>
                        </div>

                        {/* Kotak Deskripsi Situasi di Lapangan */}
                        <div className="p-5 rounded-2xl bg-earth-soft/70 border border-rimba-100 space-y-2">
                            <span className="text-[10px] font-black uppercase text-rimba-700 flex items-center gap-1.5">
                                <Sparkles className="w-3.5 h-3.5 text-accent-sun" />
                                <span>Situasi Darurat di Lokasi:</span>
                            </span>
                            <p className="text-xs sm:text-sm text-rimba-950 font-medium leading-relaxed">
                                {currentScenario.situation}
                            </p>
                        </div>

                        {/* Pertanyaan Taktis */}
                        <div className="space-y-4">
                            <div className="flex items-start gap-2.5">
                                <HelpCircle className="w-5 h-5 text-rimba-600 shrink-0 mt-0.5" />
                                <h2 className="font-display font-bold text-sm sm:text-base text-rimba-950 leading-snug">
                                    {currentScenario.question}
                                </h2>
                            </div>

                            {/* Pilihan Jawaban */}
                            <div className="space-y-3 pt-1">
                                {currentScenario.options.map((option) => {
                                    const isSelected = selectedOptionId === option.id;
                                    let cardStyle = 'bg-white border-rimba-100 hover:border-rimba-300 text-rimba-950';

                                    if (isAnswerSubmitted) {
                                        if (option.isCorrect) {
                                            cardStyle = 'bg-emerald-50 border-emerald-400 text-emerald-950 shadow-xs';
                                        } else if (isSelected && !option.isCorrect) {
                                            cardStyle = 'bg-rose-50 border-rose-400 text-rose-950 shadow-xs';
                                        } else {
                                            cardStyle = 'bg-white/60 border-slate-200 text-slate-400 opacity-60';
                                        }
                                    }

                                    return (
                                        <button
                                            key={option.id}
                                            onClick={() => handleSelectOption(option.id)}
                                            disabled={isAnswerSubmitted}
                                            className={`w-full text-left p-4 rounded-2xl border text-xs sm:text-sm font-semibold transition-all flex items-start gap-3 cursor-pointer ${cardStyle}`}
                                        >
                                            <span className="w-6 h-6 rounded-lg bg-earth-soft border border-rimba-100 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                                                {isAnswerSubmitted ? (
                                                    option.isCorrect ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : isSelected ? <X className="w-3.5 h-3.5 text-rose-600" /> : '-'
                                                ) : (
                                                    option.id.toUpperCase()
                                                )}
                                            </span>
                                            <span className="flex-1 leading-relaxed">{option.text}</span>
                                        </button>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Kotak Feedback Penjelasan */}
                        {isAnswerSubmitted && selectedOption && (
                            <div
                                className={`p-4 rounded-2xl text-xs sm:text-sm font-medium flex items-start gap-3 animate-in fade-in duration-200 ${selectedOption.isCorrect
                                    ? 'bg-emerald-100 text-emerald-950 border border-emerald-200'
                                    : 'bg-rose-100 text-rose-950 border border-rose-200'
                                    }`}
                            >
                                {selectedOption.isCorrect ? (
                                    <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                                ) : (
                                    <XCircle className="w-5 h-5 text-rose-700 shrink-0 mt-0.5" />
                                )}
                                <div className="flex-1 space-y-0.5">
                                    <p className="font-bold">
                                        {selectedOption.isCorrect ? 'Keputusan Tepat!' : 'Analisis Taktis Kurang Sesuai:'}
                                    </p>
                                    <p className="leading-relaxed font-normal">{selectedOption.explanation}</p>
                                </div>
                            </div>
                        )}

                        {/* Footer Tombol Lanjut */}
                        <div className="pt-4 border-t border-rimba-100 flex items-center justify-between">
                            <span className="text-xs text-rimba-700 font-semibold">
                                Pilih opsi di atas untuk mengonfirmasi tindakan
                            </span>

                            <button
                                onClick={handleNextStep}
                                disabled={!isAnswerSubmitted}
                                className="px-7 py-3 rounded-2xl bg-rimba-600 hover:bg-rimba-700 disabled:opacity-40 disabled:cursor-not-allowed text-white font-display font-bold text-xs sm:text-sm shadow-md transition-all active:scale-95 flex items-center gap-2 cursor-pointer"
                            >
                                <span>{currentStep < totalSteps - 1 ? 'Tahap Selanjutnya' : 'Lihat Hasil Evaluasi'}</span>
                                <ArrowRight className="w-4 h-4" />
                            </button>
                        </div>

                    </div>
                )}

            </div>
        </div>
    );
}