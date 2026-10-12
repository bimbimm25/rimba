'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { InteractiveForestGame } from '@/components/learning/InteractiveForestGame';
import { CertificateModal } from '@/components/certificate/CertificateModal';
import {
    Trees,
    Flame,
    ShieldCheck,
    Compass,
    ArrowRight,
    Clock,
    Award,
    Calculator,
    History,
    MapPin,
    Leaf,
    Wind,
    PhoneCall,
    Sparkles
} from 'lucide-react';
import { DETAILED_LESSONS } from '@/data/lessons';
import { RpgForestAdventure } from '@/components/learning/RpgForestAdventure';

export default function BelajarHubPage() {
    const [completedSlugs, setCompletedSlugs] = useState<string[]>([]);
    const [completedMissionsCount, setCompletedMissionsCount] = useState<number>(0);
    const [mounted, setMounted] = useState(false);
    const [isCertModalOpen, setIsCertModalOpen] = useState(false);

    const [wasteKg, setWasteKg] = useState<number>(3);
    const [calcResult, setCalcResult] = useState<{ co2Saved: number; treesHelped: number } | null>(null);

    useEffect(() => {
        setMounted(true);
        try {
            const savedLessons = localStorage.getItem('rimba_completed_lessons');
            if (savedLessons) {
                const parsed = JSON.parse(savedLessons);
                if (Array.isArray(parsed)) setCompletedSlugs(Array.from(new Set(parsed.map(String))));
            }

            const savedMissions = localStorage.getItem('rimba_completed_missions') || localStorage.getItem('rimba_mission_progress');
            if (savedMissions) {
                const parsedM = JSON.parse(savedMissions);
                if (Array.isArray(parsedM)) setCompletedMissionsCount(Array.from(new Set(parsedM.map(String))).length);
            }
        } catch {
            // Abaikan batasan storage
        }
    }, []);

    const totalPoints = completedSlugs.length * 100;
    const progressPercent = Math.round((completedSlugs.length / DETAILED_LESSONS.length) * 100);
    const isAllLessonsDone = completedSlugs.length >= DETAILED_LESSONS.length;

    const handleCalculateImpact = () => {
        const co2 = Number((wasteKg * 1.5).toFixed(1));
        const trees = Math.max(1, Math.round(wasteKg * 0.8));
        setCalcResult({ co2Saved: co2, treesHelped: trees });
    };

    return (
        <>
            <div className="min-h-screen bg-earth-cream pb-28 pt-28 sm:pt-32">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

                    {/* 1. HERO PENGANTAR */}
                    <section className="text-center max-w-3xl mx-auto space-y-4">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rimba-100 border border-rimba-200 text-rimba-900 text-xs font-bold uppercase tracking-wider">
                            <Compass className="w-4 h-4 text-rimba-600" />
                            <span>Pusat Edukasi Rimba Indonesia</span>
                        </div>

                        <h1 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-rimba-950 tracking-tight leading-tight">
                            Mari Belajar Menjaga Hutan & Udara Bersih!
                        </h1>

                        <p className="text-rimba-800 text-sm sm:text-base leading-relaxed font-medium">
                            Selamat datang di petualangan seru Sahabat Rimba! Di sini kamu tidak hanya membaca materi, tapi juga mencoba eksperimen kalkulator lingkungan, mini game interaktif, dan aksi kreatif menjaga bumi bebas asap.
                        </p>

                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 text-left">
                            <div className="p-3.5 rounded-2xl bg-white border border-rimba-100 shadow-2xs">
                                <Trees className="w-5 h-5 text-rimba-600 mb-1" />
                                <h2 className="font-bold text-xs text-rimba-950">Kenali Hutan</h2>
                                <p className="text-[11px] text-rimba-700 leading-snug">Rahasia paru-paru bumi & rawa gambut.</p>
                            </div>
                            <div className="p-3.5 rounded-2xl bg-white border border-rimba-100 shadow-2xs">
                                <Flame className="w-5 h-5 text-accent-flame mb-1" />
                                <h2 className="font-bold text-xs text-rimba-950">Cegah Api Liar</h2>
                                <p className="text-[11px] text-rimba-700 leading-snug">Hentikan kebiasaan bakar sampah.</p>
                            </div>
                            <div className="p-3.5 rounded-2xl bg-white border border-rimba-100 shadow-2xs">
                                <Wind className="w-5 h-5 text-accent-sky mb-1" />
                                <h2 className="font-bold text-xs text-rimba-950">Siaga Asap</h2>
                                <p className="text-[11px] text-rimba-700 leading-snug">Lindungi pernapasan & mata.</p>
                            </div>
                            <div className="p-3.5 rounded-2xl bg-white border border-rimba-100 shadow-2xs">
                                <Leaf className="w-5 h-5 text-leaf-dark mb-1" />
                                <h2 className="font-bold text-xs text-rimba-950">Aksi Kompos</h2>
                                <p className="text-[11px] text-rimba-700 leading-snug">Ubah daun gugur jadi pupuk subur.</p>
                            </div>
                        </div>
                    </section>

                    {/* 2. JALUR MODUL BELAJAR */}
                    <section className="bg-white rounded-3xl p-6 sm:p-10 border border-rimba-100 shadow-sm space-y-6">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-rimba-100 gap-4">
                            <div>
                                <span className="text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-full bg-rimba-100 text-rimba-800 tracking-wider">
                                    Jalur Bertahap
                                </span>
                                <h2 className="font-display font-extrabold text-2xl text-rimba-950 mt-1">
                                    Jalur Belajar Sahabat Rimba
                                </h2>
                                <p className="text-xs sm:text-sm text-rimba-800 font-medium mt-0.5">
                                    Selesaikan setiap bab secara berurutan untuk mengumpulkan Poin Rimba (XP).
                                </p>
                            </div>

                            <div className="flex items-center gap-4 bg-earth-soft px-4 py-2.5 rounded-2xl border border-rimba-100 self-start sm:self-auto">
                                <div>
                                    <span className="text-[10px] font-bold text-rimba-700 uppercase block">Total Poin</span>
                                    <span className="font-display font-extrabold text-base text-rimba-950">{mounted ? totalPoints : 0} XP</span>
                                </div>
                                <div className="w-px h-8 bg-rimba-200" />
                                <div>
                                    <span className="text-[10px] font-bold text-rimba-700 uppercase block">Progres</span>
                                    <span className="font-display font-extrabold text-base text-rimba-600">{progressPercent}%</span>
                                </div>
                            </div>
                        </div>

                        <div className="w-full h-3 bg-rimba-50 rounded-full overflow-hidden p-0.5 border border-rimba-100">
                            <div
                                className="h-full bg-gradient-to-r from-leaf to-rimba-500 rounded-full transition-all duration-500 ease-out"
                                style={{ width: `${progressPercent}%` }}
                            />
                        </div>

                        <div className="space-y-4">
                            {DETAILED_LESSONS.map((lesson, idx) => {
                                const isCompleted = completedSlugs.includes(lesson.slug);
                                return (
                                    <div
                                        key={lesson.id}
                                        className={`p-5 rounded-2xl border transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 ${isCompleted
                                            ? 'bg-rimba-50/70 border-rimba-200'
                                            : 'bg-white border-rimba-100 hover:border-rimba-300 shadow-2xs'
                                            }`}
                                    >
                                        <div className="flex items-start gap-4">
                                            <span className="w-9 h-9 rounded-xl bg-earth-soft border border-rimba-200 font-display font-extrabold text-xs text-rimba-900 flex items-center justify-center shrink-0 mt-0.5">
                                                0{idx + 1}
                                            </span>
                                            <div>
                                                <div className="flex items-center gap-2 mb-1">
                                                    <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded-md bg-earth-soft text-rimba-800">
                                                        {lesson.heroBadge}
                                                    </span>
                                                    <span className="flex items-center gap-1 text-[11px] text-rimba-600 font-medium">
                                                        <Clock className="w-3 h-3" /> {lesson.readTime}
                                                    </span>
                                                    <span className="text-[11px] text-accent-sun font-bold">+100 Poin</span>
                                                </div>
                                                <h3 className="font-display font-bold text-rimba-950 text-base">
                                                    {lesson.title}
                                                </h3>
                                                <p className="text-xs text-rimba-800 mt-0.5 line-clamp-1">
                                                    {lesson.subtitle}
                                                </p>
                                            </div>
                                        </div>

                                        <Link
                                            href={`/belajar/${lesson.slug}`}
                                            className={`w-full sm:w-auto px-5 py-2.5 rounded-xl font-display font-bold text-xs flex items-center justify-center gap-1.5 transition-all shrink-0 cursor-pointer ${isCompleted
                                                ? 'bg-rimba-100 text-rimba-900 hover:bg-rimba-200'
                                                : 'bg-rimba-500 hover:bg-rimba-600 text-white shadow-2xs'
                                                }`}
                                        >
                                            <span>{isCompleted ? 'Pelajari Ulang' : 'Mulai Belajar'}</span>
                                            <ArrowRight className="w-3.5 h-3.5" />
                                        </Link>
                                    </div>
                                );
                            })}
                        </div>
                    </section>

                    {/* ============================================================== */}
                    {/* MODUL KHUSUS: RPG PETUALANGAN BELAJAR HUTAN                   */}
                    {/* ============================================================== */}
                    <section>
                        <RpgForestAdventure />
                    </section>

                    {/* 3. KARTU SERTIFIKAT MANDIRI */}
                    <section className="p-6 sm:p-8 rounded-3xl bg-[#062817] text-white border border-emerald-800 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-2xl bg-amber-400/20 border border-amber-300/40 text-amber-300 flex items-center justify-center shrink-0 mt-0.5">
                                <Award className="w-6 h-6 text-amber-400" />
                            </div>
                            <div className="space-y-1">
                                <div className="flex items-center gap-2">
                                    <span className="text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-full bg-amber-400 text-amber-950 tracking-wider">
                                        Kelulusan Resmi
                                    </span>
                                    <span className="text-xs text-emerald-300 font-bold flex items-center gap-1">
                                        <Sparkles className="w-3.5 h-3.5" /> Piagam Duta Rimba
                                    </span>
                                </div>
                                <h3 className="font-display font-extrabold text-xl text-white">
                                    Klaim Sertifikat Kelulusan
                                </h3>
                                <p className="text-xs text-emerald-200 leading-relaxed max-w-xl">
                                    Status: <strong className="text-white">{completedSlugs.length}/{DETAILED_LESSONS.length} Modul</strong> &bull; <strong className="text-white">{completedMissionsCount} Misi Kuis</strong> diselesaikan.
                                    {!isAllLessonsDone && ' Tuntaskan modul tersisa atau buka piagam resmimu!'}
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center gap-3 w-full md:w-auto shrink-0">
                            <button
                                onClick={() => setIsCertModalOpen(true)}
                                className="w-full md:w-auto px-6 py-3.5 rounded-2xl bg-amber-400 hover:bg-amber-300 active:scale-95 text-amber-950 font-display font-extrabold text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                            >
                                <Award className="w-4 h-4 text-amber-950" />
                                <span>Buka & Cetak Sertifikat</span>
                            </button>
                        </div>
                    </section>

                    {/* 4. FUN FACTS */}
                    <section className="space-y-6">
                        <div className="text-center max-w-xl mx-auto">
                            <span className="text-xs font-bold uppercase tracking-wider text-rimba-600">Tahukah Kamu?</span>
                            <h2 className="font-display font-extrabold text-2xl text-rimba-950 mt-1">Fakta Menakjubkan Hutan Kita</h2>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            <div className="p-5 rounded-3xl bg-white border border-rimba-100 shadow-2xs space-y-2">
                                <span className="font-display font-extrabold text-2xl text-rimba-600 block">120 Juta Ha</span>
                                <h3 className="font-bold text-sm text-rimba-950">Hutan Hujan Indonesia</h3>
                                <p className="text-xs text-rimba-800 leading-relaxed">
                                    Indonesia memiliki hutan hujan tropis terluas ketiga di dunia setelah Hutan Amazon dan Kongo.
                                </p>
                            </div>

                            <div className="p-5 rounded-3xl bg-white border border-rimba-100 shadow-2xs space-y-2">
                                <span className="font-display font-extrabold text-2xl text-accent-flame block">10x Lipat</span>
                                <h3 className="font-bold text-sm text-rimba-950">Bahaya Asap Karhutla</h3>
                                <p className="text-xs text-rimba-800 leading-relaxed">
                                    Partikel abu kebakaran hutan mengandung debu halus PM2.5 yang 10 kali lebih berbahaya dibanding debu jalanan.
                                </p>
                            </div>

                            <div className="p-5 rounded-3xl bg-white border border-rimba-100 shadow-2xs space-y-2">
                                <span className="font-display font-extrabold text-2xl text-accent-sky block">Spons Air Alami</span>
                                <h3 className="font-bold text-sm text-rimba-950">Tanah Rawa Gambut</h3>
                                <p className="text-xs text-rimba-800 leading-relaxed">
                                    Lahan gambut basah dapat menyimpan cadangan air hingga 800% dari berat keringnya, menahan banjir secara alami.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* 5. ECO TIMELINE */}
                    <section className="bg-white rounded-3xl p-6 sm:p-9 border border-rimba-100 shadow-sm space-y-6">
                        <div className="flex items-center gap-2 border-b border-rimba-100 pb-4">
                            <History className="w-5 h-5 text-rimba-600" />
                            <div>
                                <h2 className="font-display font-extrabold text-xl text-rimba-950">Garis Waktu Peduli Rimba</h2>
                                <p className="text-xs text-rimba-800 font-medium">Bagaimana kesadaran menjaga hutan berkembang dari masa ke masa</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                            <div className="p-4 rounded-2xl bg-earth-soft border border-rimba-100">
                                <span className="text-xs font-extrabold text-rimba-600 block">Era 1980-an</span>
                                <h3 className="font-bold text-sm text-rimba-950 mt-1">Hutan Tanpa Batas</h3>
                                <p className="text-xs text-rimba-800 mt-1 leading-relaxed">Pemanfaatan kayu besar-besaran sebelum aturan perlindungan hutan diperketat.</p>
                            </div>
                            <div className="p-4 rounded-2xl bg-earth-soft border border-rimba-100">
                                <span className="text-xs font-extrabold text-accent-flame block">Tahun 1997</span>
                                <h3 className="font-bold text-sm text-rimba-950 mt-1">Kebakaran Hebat El Niño</h3>
                                <p className="text-xs text-rimba-800 mt-1 leading-relaxed">Kemarau panjang memicu karhutla luas dan menyadarkan pentingnya menjaga gambut.</p>
                            </div>
                            <div className="p-4 rounded-2xl bg-earth-soft border border-rimba-100">
                                <span className="text-xs font-extrabold text-accent-sky block">Tahun 2016</span>
                                <h3 className="font-bold text-sm text-rimba-950 mt-1">Restorasi Gambut</h3>
                                <p className="text-xs text-rimba-800 mt-1 leading-relaxed">Dibentuk badan khusus untuk menyekat kanal dan membasahi kembali rawa gambut.</p>
                            </div>
                            <div className="p-4 rounded-2xl bg-rimba-50 border border-rimba-200">
                                <span className="text-xs font-extrabold text-rimba-800 block">Era Sekarang</span>
                                <h3 className="font-bold text-sm text-rimba-950 mt-1">Generasi Sahabat Rimba</h3>
                                <p className="text-xs text-rimba-800 mt-1 leading-relaxed">Anak-anak belajar lewat teknologi interaktif dan tidak lagi membakar sampah.</p>
                            </div>
                        </div>
                    </section>

                    {/* 6. KALKULATOR JEJAK PENCEGAHAN */}
                    <section className="bg-white rounded-3xl p-6 sm:p-9 border border-rimba-100 shadow-sm space-y-6">
                        <div className="flex items-center gap-2 border-b border-rimba-100 pb-4">
                            <Calculator className="w-5 h-5 text-rimba-600" />
                            <div>
                                <h2 className="font-display font-extrabold text-xl text-rimba-950">Kalkulator Jejak Pencegahan Karhutla</h2>
                                <p className="text-xs text-rimba-800 font-medium">Berapa banyak gas beracun yang kamu cegah dengan tidak membakar sampah dedaunan?</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
                            <div className="space-y-4">
                                <label className="text-xs font-bold text-rimba-950 block">
                                    Perkiraan tumpukan sampah daun kering pekarangan per minggu (kg):
                                </label>
                                <div className="flex items-center gap-3">
                                    <input
                                        type="range"
                                        min="1"
                                        max="20"
                                        value={wasteKg}
                                        onChange={(e) => setWasteKg(Number(e.target.value))}
                                        className="w-full accent-rimba-600 cursor-pointer"
                                    />
                                    <span className="font-display font-extrabold text-lg text-rimba-950 w-16 text-right">
                                        {wasteKg} kg
                                    </span>
                                </div>
                                <p className="text-xs text-rimba-700">
                                    💡 <em>Tips: Daripada dibakar, timbun daun gugur ini ke tanah agar jadi pupuk kompos subur!</em>
                                </p>
                                <button
                                    onClick={handleCalculateImpact}
                                    className="px-6 py-2.5 rounded-xl bg-rimba-500 hover:bg-rimba-600 text-white font-display font-bold text-xs transition-all shadow-2xs cursor-pointer active:scale-95"
                                >
                                    Hitung Dampak Kebaikanmu
                                </button>
                            </div>

                            <div className="p-5 rounded-2xl bg-earth-soft border border-rimba-100 space-y-3">
                                <h3 className="font-bold text-xs uppercase tracking-wider text-rimba-700">Hasil Nyata Jika Tidak Dibakar:</h3>
                                {calcResult ? (
                                    <div className="space-y-2">
                                        <div className="flex items-center justify-between text-xs sm:text-sm">
                                            <span className="text-rimba-800 font-medium">Emisi Asap Tercegah:</span>
                                            <strong className="text-emerald-700 font-extrabold">{calcResult.co2Saved} kg CO₂</strong>
                                        </div>
                                        <div className="flex items-center justify-between text-xs sm:text-sm">
                                            <span className="text-rimba-800 font-medium">Pohon yang Terlindungi:</span>
                                            <strong className="text-rimba-600 font-extrabold">Setara {calcResult.treesHelped} Bibit Pohon</strong>
                                        </div>
                                        <p className="text-xs text-rimba-800 pt-2 border-t border-rimba-200">
                                            Kamu telah menyelamatkan lingkungan dari kabut asap dan membantu tetanggamu bernapas nyaman!
                                        </p>
                                    </div>
                                ) : (
                                    <p className="text-xs text-rimba-700 italic">
                                        Geser angka di sebelah kiri lalu klik tombol untuk melihat dampak kebaikanmu bagi bumi.
                                    </p>
                                )}
                            </div>
                        </div>
                    </section>

                    {/* 7. MINI GAME */}
                    <section>
                        <InteractiveForestGame />
                    </section>

                    {/* 8. KATALOG AKSI KREATIF */}
                    <section className="space-y-6">
                        <div className="text-center max-w-xl mx-auto">
                            <span className="text-xs font-bold uppercase tracking-wider text-rimba-600">Solusi Nyata di Rumah</span>
                            <h2 className="font-display font-extrabold text-2xl text-rimba-950 mt-1">Kreativitas Menjaga Bumi</h2>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            <div className="p-5 rounded-3xl bg-white border border-rimba-100 shadow-2xs space-y-2">
                                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold text-xs">
                                    01
                                </div>
                                <h3 className="font-bold text-sm text-rimba-950">Pupuk Kompos Cacing</h3>
                                <p className="text-xs text-rimba-800 leading-relaxed">
                                    Masukkan daun kering ke pot tanah basah. Cacing tanah akan mengubahnya jadi tanah hitam subur tanpa api!
                                </p>
                            </div>

                            <div className="p-5 rounded-3xl bg-white border border-rimba-100 shadow-2xs space-y-2">
                                <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-700 flex items-center justify-center font-bold text-xs">
                                    02
                                </div>
                                <h3 className="font-bold text-sm text-rimba-950">Kebun Botol Bekas</h3>
                                <p className="text-xs text-rimba-800 leading-relaxed">
                                    Ubah botol air mineral bekas jadi pot gantung tanaman cabai atau seledri untuk mendinginkan teras rumah.
                                </p>
                            </div>

                            <div className="p-5 rounded-3xl bg-white border border-rimba-100 shadow-2xs space-y-2">
                                <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center font-bold text-xs">
                                    03
                                </div>
                                <h3 className="font-bold text-sm text-rimba-950">Lubang Resapan Biopori</h3>
                                <p className="text-xs text-rimba-800 leading-relaxed">
                                    Buat lubang silinder di tanah halaman untuk memasukkan dedaunan agar air hujan cepat meresap dan tidak banjir.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* 9. PETA POSKO SIAGA */}
                    <section className="bg-white rounded-3xl p-6 sm:p-9 border border-rimba-100 shadow-sm space-y-6">
                        <div className="flex items-center gap-2 border-b border-rimba-100 pb-4">
                            <MapPin className="w-5 h-5 text-rose-600" />
                            <div>
                                <h2 className="font-display font-extrabold text-xl text-rimba-950">Direktori Siaga Bencana</h2>
                                <p className="text-xs text-rimba-800 font-medium">Kontak dan posko bantuan darurat saat terjadi kebakaran lahan atau kabut asap</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="p-4 rounded-2xl bg-rose-50 border border-rose-200 flex items-start gap-3">
                                <PhoneCall className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                                <div>
                                    <h3 className="font-bold text-sm text-rose-950">Pemadam Kebakaran (113)</h3>
                                    <p className="text-xs text-rose-900 mt-0.5 leading-relaxed">
                                        Hubungi nomor bebas pulsa ini segera jika melihat kobaran api semak yang tidak terkendali.
                                    </p>
                                </div>
                            </div>

                            <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-start gap-3">
                                <ShieldCheck className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                                <div>
                                    <h3 className="font-bold text-sm text-emerald-950">Posko Kesehatan & Masker (119)</h3>
                                    <p className="text-xs text-emerald-900 mt-0.5 leading-relaxed">
                                        Layanan ambulans dan puskesmas siaga darurat bagi warga yang mengalami sesak napas akibat asap.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                </div>
            </div>

            <CertificateModal
                isOpen={isCertModalOpen}
                onClose={() => setIsCertModalOpen(false)}
            />
        </>
    );
}