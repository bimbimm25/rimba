'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import {
    ArrowLeft,
    ArrowRight,
    CheckCircle2,
    HelpCircle,
    Trees,
    Shield,
    ShieldAlert,
    Sparkles,
    Info,
    Wind,
    Flame,
    CloudRain,
    Bird,
    Trash,
    PhoneCall,
    Check,
    X,
    Volume2,
    VolumeX,
    MessageCircleQuestion,
    CheckCheck
} from 'lucide-react';
import { DETAILED_LESSONS, KeyPoint } from '@/data/lessons';

export default function DetailModulBelajarPage() {
    const params = useParams();
    const router = useRouter();
    const slug = params?.slug as string;

    const currentModule = DETAILED_LESSONS.find((item) => item.slug === slug);
    const currentIndex = DETAILED_LESSONS.findIndex((item) => item.slug === slug);
    const nextModule = currentIndex >= 0 && currentIndex < DETAILED_LESSONS.length - 1
        ? DETAILED_LESSONS[currentIndex + 1]
        : null;

    const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
    const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
    const [isSpeaking, setIsSpeaking] = useState<boolean>(false);
    const [isAlreadyCompleted, setIsAlreadyCompleted] = useState<boolean>(false);

    // Referensi speech synthesis anti-macet & anti-timeout
    const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);
    const speechQueueRef = useRef<string[]>([]);
    const isPlayingRef = useRef<boolean>(false);

    // Periksa apakah modul ini sudah tuntas sebelumnya
    useEffect(() => {
        try {
            const saved = localStorage.getItem('rimba_completed_lessons');
            if (saved) {
                const completedArr: string[] = JSON.parse(saved);
                if (completedArr.includes(slug)) {
                    setIsAlreadyCompleted(true);
                }
            }
        } catch {
            // Abaikan jika storage dibatasi browser
        }
    }, [slug]);

    // Hentikan suara seketika jika halaman berpindah / di-unmount
    useEffect(() => {
        return () => {
            if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
                isPlayingRef.current = false;
                speechQueueRef.current = [];
                window.speechSynthesis.cancel();
            }
        };
    }, [slug]);

    if (!currentModule) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-earth-cream px-4">
                <div className="text-center bg-white p-8 rounded-3xl border border-rimba-100 max-w-md shadow-sm space-y-4">
                    <p className="font-display font-bold text-rimba-950 text-lg">Modul pembelajaran tidak ditemukan</p>
                    <Link
                        href="/belajar"
                        className="inline-flex px-5 py-2.5 bg-rimba-500 hover:bg-rimba-600 text-white rounded-xl text-sm font-bold transition-colors"
                    >
                        Kembali ke Kurikulum Belajar
                    </Link>
                </div>
            </div>
        );
    }

    // Fungsi pemutar antrean kalimat secara rekursif
    const playNextSpeechChunk = () => {
        if (!isPlayingRef.current || speechQueueRef.current.length === 0) {
            setIsSpeaking(false);
            isPlayingRef.current = false;
            return;
        }

        const nextChunk = speechQueueRef.current.shift();
        if (!nextChunk || nextChunk.trim() === '') {
            playNextSpeechChunk();
            return;
        }

        const utterance = new SpeechSynthesisUtterance(nextChunk.trim());
        utterance.lang = 'id-ID';
        utterance.rate = 0.95;
        utteranceRef.current = utterance;

        utterance.onend = () => {
            if (isPlayingRef.current) {
                playNextSpeechChunk();
            }
        };

        utterance.onerror = () => {
            if (isPlayingRef.current) {
                playNextSpeechChunk();
            }
        };

        window.speechSynthesis.speak(utterance);
    };

    const handleToggleSpeech = () => {
        if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
            alert('Fitur pembaca suara tidak didukung di peramban ini.');
            return;
        }

        // Jika sedang bersuara, hentikan
        if (isSpeaking) {
            isPlayingRef.current = false;
            speechQueueRef.current = [];
            window.speechSynthesis.cancel();
            setIsSpeaking(false);
            return;
        }

        // 1. Kumpulkan seluruh materi teks dari awal sampai selesai
        const fullText = [
            currentModule.title,
            currentModule.subtitle,
            currentModule.introText,
            ...currentModule.deepDive.paragraphs,
            `Tahukah kamu? ${currentModule.deepDive.funFact}`
        ].join('. ');

        // 2. Pecah teks menjadi antrean kalimat kecil agar Chrome tidak memutus audio
        const chunks = fullText
            .split(/([.!?]+)/)
            .reduce((acc: string[], cur: string, idx: number, arr: string[]) => {
                if (idx % 2 === 0 && cur.trim()) {
                    const punctuation = arr[idx + 1] || '';
                    acc.push(`${cur}${punctuation}`);
                }
                return acc;
            }, [])
            .filter((chunk) => chunk.trim().length > 0);

        // 3. Mainkan antrean
        window.speechSynthesis.cancel();
        speechQueueRef.current = chunks;
        isPlayingRef.current = true;
        setIsSpeaking(true);

        playNextSpeechChunk();
    };

    const renderPointIcon = (iconName: KeyPoint['iconName']) => {
        switch (iconName) {
            case 'Trees': return <Trees className="w-6 h-6 text-rimba-600" />;
            case 'Wind': return <Wind className="w-6 h-6 text-accent-sky" />;
            case 'Flame': return <Flame className="w-6 h-6 text-accent-flame" />;
            case 'CloudRain': return <CloudRain className="w-6 h-6 text-accent-sky" />;
            case 'Shield': return <Shield className="w-6 h-6 text-amber-600" />;
            case 'Bird': return <Bird className="w-6 h-6 text-emerald-600" />;
            case 'Trash': return <Trash className="w-6 h-6 text-rose-600" />;
            case 'ShieldAlert': return <ShieldAlert className="w-6 h-6 text-rose-600" />;
            case 'PhoneCall': return <PhoneCall className="w-6 h-6 text-rimba-600" />;
            default: return <Info className="w-6 h-6 text-rimba-600" />;
        }
    };

    const handleAnswerClick = (optionId: string) => {
        setSelectedOptionId(optionId);
        setIsSubmitted(true);
    };

    const saveCompletionProgress = () => {
        try {
            const saved = localStorage.getItem('rimba_completed_lessons');
            const currentArr: string[] = saved ? JSON.parse(saved) : [];
            if (!currentArr.includes(slug)) {
                currentArr.push(slug);
                localStorage.setItem('rimba_completed_lessons', JSON.stringify(currentArr));
                setIsAlreadyCompleted(true);
            }
        } catch {
            // Abaikan
        }
    };

    const handleCompleteAndNext = () => {
        saveCompletionProgress();

        if (nextModule) {
            router.push(`/belajar/${nextModule.slug}`);
        } else {
            router.push('/misi');
        }
    };

    const activeOption = currentModule.interactiveCheck.options.find(
        (opt) => opt.id === selectedOptionId
    );

    return (
        <div className="min-h-screen bg-earth-cream pb-24 pt-28 sm:pt-32">
            <div className="max-w-4xl mx-auto px-4 sm:px-6">

                {/* Bar Navigasi Atas & Kontrol Audio */}
                <div className="flex items-center justify-between gap-4 mb-6">
                    <Link
                        href="/belajar"
                        className="inline-flex items-center gap-2 text-xs font-bold text-rimba-800 hover:text-rimba-950 bg-white px-4 py-2 rounded-full border border-rimba-100 shadow-2xs transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4 text-rimba-600" />
                        <span>Kembali ke Kurikulum Belajar</span>
                    </Link>

                    <button
                        onClick={handleToggleSpeech}
                        className={`inline-flex items-center gap-2 text-xs font-bold px-4 py-2 rounded-full border shadow-2xs transition-all cursor-pointer ${isSpeaking
                                ? 'bg-rose-50 border-rose-300 text-rose-700 animate-pulse'
                                : 'bg-white hover:bg-rimba-50 border-rimba-200 text-rimba-900'
                            }`}
                    >
                        {isSpeaking ? <VolumeX className="w-4 h-4 text-rose-600" /> : <Volume2 className="w-4 h-4 text-rimba-600" />}
                        <span>{isSpeaking ? 'Hentikan Suara' : 'Dengarkan Materi'}</span>
                    </button>
                </div>

                {/* Artikel Konten Materi */}
                <article className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-rimba-100 shadow-sm space-y-10">

                    {/* Header Bab */}
                    <header className="border-b border-rimba-100 pb-8">
                        <div className="flex flex-wrap items-center gap-2 mb-3">
                            <span className="text-xs font-extrabold uppercase px-3 py-1 rounded-full bg-rimba-100 text-rimba-900 tracking-wider">
                                Bab {currentModule.level}
                            </span>
                            <span className="text-xs font-bold uppercase px-2.5 py-1 rounded-full bg-earth-soft text-rimba-700">
                                {currentModule.heroBadge}
                            </span>
                            <span className="text-xs font-semibold text-rimba-600">
                                {currentModule.readTime}
                            </span>
                            {isAlreadyCompleted && (
                                <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200 ml-auto">
                                    <CheckCheck className="w-3.5 h-3.5" /> Modul Tuntas
                                </span>
                            )}
                        </div>

                        <h1 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-rimba-950 tracking-tight leading-tight">
                            {currentModule.title}
                        </h1>

                        <p className="text-sm sm:text-base text-rimba-800 font-medium mt-2 leading-relaxed">
                            {currentModule.subtitle}
                        </p>
                    </header>

                    {/* Pengantar */}
                    <section className="bg-earth-soft/60 p-6 rounded-2xl border border-rimba-100 text-sm sm:text-base text-rimba-900 leading-relaxed font-normal">
                        <p className="font-medium">{currentModule.introText}</p>
                    </section>

                    {/* 3 Poin Kunci Utama */}
                    <section className="space-y-4">
                        <div className="flex items-center gap-2 text-rimba-950 font-display font-bold text-base">
                            <Sparkles className="w-5 h-5 text-rimba-600" />
                            <span>3 Hal Penting yang Wajib Kamu Ketahui</span>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {currentModule.keyPoints.map((point, idx) => (
                                <div
                                    key={idx}
                                    className="p-5 rounded-2xl bg-white border border-rimba-100 shadow-2xs flex flex-col justify-between"
                                >
                                    <div>
                                        <div className="w-12 h-12 rounded-xl bg-rimba-50 border border-rimba-100 flex items-center justify-center mb-3">
                                            {renderPointIcon(point.iconName)}
                                        </div>
                                        <h3 className="font-display font-bold text-rimba-950 text-sm sm:text-base mb-1.5">
                                            {point.title}
                                        </h3>
                                        <p className="text-xs text-rimba-800 leading-relaxed font-medium">
                                            {point.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Pembahasan Mendalam */}
                    <section className="space-y-4 text-sm sm:text-base text-rimba-900 leading-relaxed">
                        <h2 className="font-display font-extrabold text-lg sm:text-xl text-rimba-950 tracking-tight">
                            {currentModule.deepDive.heading}
                        </h2>

                        {currentModule.deepDive.paragraphs.map((p, pIdx) => (
                            <p key={pIdx} className="text-rimba-900 font-normal leading-relaxed">{p}</p>
                        ))}

                        <div className="p-5 rounded-2xl bg-leaf-light border border-leaf/30 flex items-start gap-3.5 mt-6">
                            <div className="w-8 h-8 rounded-lg bg-leaf text-white flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                                <Info className="w-4 h-4" />
                            </div>
                            <div>
                                <p className="text-xs font-extrabold uppercase tracking-wider text-leaf-dark">
                                    Tahukah Kamu?
                                </p>
                                <p className="text-xs sm:text-sm text-rimba-950 font-medium mt-0.5 leading-relaxed">
                                    {currentModule.deepDive.funFact}
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Dialog Diskusi */}
                    <section className="bg-amber-50/70 p-6 rounded-3xl border border-amber-200/80 space-y-3">
                        <div className="flex items-center gap-2.5 text-amber-900 font-display font-bold text-sm sm:text-base">
                            <MessageCircleQuestion className="w-5 h-5 text-amber-700" />
                            <span>Obrolan Meja Makan (Diskusi dengan Orang Tua / Guru)</span>
                        </div>
                        <p className="text-xs sm:text-sm text-amber-950 leading-relaxed font-medium">
                            Ajak orang tuamu atau bapak/ibu guru berdiskusi tentang bab ini:
                        </p>
                        <div className="p-4 bg-white/90 rounded-2xl border border-amber-200 text-xs sm:text-sm font-semibold text-rimba-950">
                            &ldquo;Ayah / Ibu / Guru, apakah dulu pernah melihat kabut asap tebal saat kebakaran lahan? Apa yang paling dirasakan saat itu?&rdquo;
                        </div>
                    </section>

                    {/* Kuis Interaktif */}
                    <section className="bg-earth-soft p-6 sm:p-8 rounded-3xl border border-rimba-100/90 space-y-5">
                        <div className="flex items-center gap-2 text-rimba-950 font-display font-bold text-base">
                            <HelpCircle className="w-5 h-5 text-rimba-600" />
                            <span>{currentModule.interactiveCheck.prompt}</span>
                        </div>

                        <p className="text-xs sm:text-sm text-rimba-800 font-semibold leading-relaxed">
                            {currentModule.interactiveCheck.instruction}
                        </p>

                        <div className="space-y-3">
                            {currentModule.interactiveCheck.options.map((option) => {
                                const isSelected = selectedOptionId === option.id;
                                let btnStyle = 'bg-white border-rimba-100 hover:border-rimba-300 text-rimba-950';

                                if (isSelected && isSubmitted) {
                                    btnStyle = option.isCorrect
                                        ? 'bg-emerald-50 border-emerald-500 text-emerald-950 shadow-xs'
                                        : 'bg-rose-50 border-rose-400 text-rose-950 shadow-xs';
                                }

                                return (
                                    <button
                                        key={option.id}
                                        onClick={() => handleAnswerClick(option.id)}
                                        className={`w-full text-left p-4 rounded-2xl border text-xs sm:text-sm font-semibold transition-all flex items-start gap-3 cursor-pointer ${btnStyle}`}
                                    >
                                        <span className="w-6 h-6 rounded-lg bg-earth-soft border border-rimba-100 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                                            {isSelected && isSubmitted ? (
                                                option.isCorrect ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <X className="w-3.5 h-3.5 text-rose-600" />
                                            ) : (
                                                '-'
                                            )}
                                        </span>
                                        <span className="flex-1 leading-normal">{option.text}</span>
                                    </button>
                                );
                            })}
                        </div>

                        {isSubmitted && activeOption && (
                            <div
                                className={`p-4 rounded-2xl text-xs sm:text-sm font-semibold flex items-start gap-3 animate-in fade-in duration-200 ${activeOption.isCorrect
                                        ? 'bg-emerald-100 text-emerald-950 border border-emerald-200'
                                        : 'bg-rose-100 text-rose-950 border border-rose-200'
                                    }`}
                            >
                                {activeOption.isCorrect ? (
                                    <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                                ) : (
                                    <ShieldAlert className="w-5 h-5 text-rose-700 shrink-0 mt-0.5" />
                                )}
                                <div className="flex-1">
                                    <p className="font-bold">
                                        {activeOption.isCorrect ? 'Jawaban Benar!' : 'Belum Tepat, Coba Pahami Lagi:'}
                                    </p>
                                    <p className="mt-0.5 font-normal leading-relaxed">
                                        {activeOption.feedback}
                                    </p>
                                </div>
                            </div>
                        )}
                    </section>

                    {/* Footer Aksi Lanjut */}
                    <footer className="pt-6 border-t border-rimba-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                        <span className="text-xs text-rimba-700 font-semibold flex items-center gap-1.5">
                            <Sparkles className="w-4 h-4 text-accent-sun" />
                            Tuntaskan materi untuk membuka akumulasi syarat Sertifikat Duta Rimba
                        </span>

                        <button
                            onClick={handleCompleteAndNext}
                            className="w-full sm:w-auto px-7 py-3.5 rounded-2xl bg-rimba-500 hover:bg-rimba-600 active:scale-95 text-white font-display font-bold text-sm shadow-sm hover:shadow-md flex items-center justify-center gap-2 transition-all cursor-pointer"
                        >
                            <span>
                                {nextModule ? `Lanjut ke Bab 0${nextModule.level}` : 'Selesai Materi & Mulai Misi Akhir'}
                            </span>
                            <ArrowRight className="w-4 h-4" />
                        </button>
                    </footer>

                </article>
            </div>
        </div>
    );
}