'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
    ShieldCheck,
    PhoneCall,
    Users,
    HelpCircle,
    Compass,
    HeartHandshake,
    AlertTriangle,
    Wind,
    ChevronDown,
    ArrowRight,
    BookOpen
} from 'lucide-react';

const emergencyContacts = [
    {
        number: '113',
        service: 'Pemadam Kebakaran (Damkar)',
        desc: 'Untuk laporan kejadian kebakaran hutan, semak, lahan, atau gedung.',
        color: 'text-rose-600',
        bg: 'bg-rose-50 border-rose-200',
    },
    {
        number: '119',
        service: 'Ambulans & Gawat Darurat Medis',
        desc: 'Bantuan darurat jika ada korban sesak napas berat akibat kabut asap.',
        color: 'text-emerald-700',
        bg: 'bg-emerald-50 border-emerald-200',
    },
    {
        number: '110',
        service: 'Kepolisian Negara RI',
        desc: 'Laporan gangguan keamanan atau indikasi pembakaran lahan liar.',
        color: 'text-sky-700',
        bg: 'bg-sky-50 border-sky-200',
    },
    {
        number: '115',
        service: 'Basarnas (Pencarian & Penyelamatan)',
        desc: 'Bantuan penyelamatan darurat bencana alam terpadu.',
        color: 'text-amber-800',
        bg: 'bg-amber-50 border-amber-200',
    },
];

const faqs = [
    {
        q: 'Apakah anak SD boleh ikut menyiram api kebakaran di semak?',
        a: 'Sama sekali tidak boleh. Api di semak kering dan lahan gambut bisa membesar mendadak dalam hitungan detik. Tugas anak sekolah adalah segera menjauh, melindungi hidung, dan memberi tahu orang dewasa terpercaya.',
    },
    {
        q: 'Kenapa kita harus merunduk saat keluar dari ruangan berasap?',
        a: 'Udara panas dan gas beracun selalu bergerak ke atas mendekati langit-langit. Udara yang relatif bersih dan dingin berada di dekat lantai, sehingga merunduk atau merayap membuat kita tetap bisa bernapas.',
    },
    {
        q: 'Apa bedanya kabut pagi hari biasa dengan kabut asap karhutla?',
        a: 'Kabut pagi terdiri dari titik embun air murni yang sejuk dan segar. Sedangkan kabut asap karhutla adalah partikel abu padat (PM2.5) dan gas berbahaya yang baunya sangit, membuat mata pedih, serta berbahaya bagi paru-paru.',
    },
    {
        q: 'Bagaimana cara mendampingi anak yang cemas mendengar berita kebakaran?',
        a: 'Jelaskan dengan tenang bahwa petugas pemadam terlatih sedang bekerja keras. Ajak anak fokus pada hal positif yang bisa mereka kendalikan di rumah, seperti menjaga kebersihan, tidak bermain korek api, dan menanam tanaman.',
    },
];

export default function PanduanPage() {
    const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(null);

    const toggleFaq = (idx: number) => {
        setOpenFaqIdx(openFaqIdx === idx ? null : idx);
    };

    return (
        <div className="min-h-screen bg-earth-cream pb-24 pt-28 sm:pt-32">
            <div className="max-w-4xl mx-auto px-4 sm:px-6">

                {/* Header Panduan */}
                <div className="text-center max-w-2xl mx-auto mb-12">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rimba-100 border border-rimba-200 text-rimba-900 text-xs font-bold uppercase tracking-wider mb-4">
                        <Compass className="w-4 h-4 text-rimba-600" />
                        <span>Pusat Informasi & Keselamatan</span>
                    </div>
                    <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-rimba-950 tracking-tight">
                        Panduan Sahabat Rimba
                    </h1>
                    <p className="text-sm sm:text-base text-rimba-800 font-medium mt-2 leading-relaxed">
                        Pedoman lengkap keselamatan untuk siswa, guru, dan orang tua. Mengetahui langkah yang tepat adalah kunci utama perlindungan diri saat bencana terjadi.
                    </p>
                </div>

                <div className="space-y-10">

                    {/* 1. Rumus Keselamatan Utama Anak SD */}
                    <section className="bg-white rounded-3xl p-6 sm:p-9 border border-rimba-100 shadow-sm space-y-6">
                        <div className="flex items-center gap-3 border-b border-rimba-100 pb-4">
                            <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center">
                                <AlertTriangle className="w-5 h-5" />
                            </div>
                            <div>
                                <h2 className="font-display font-extrabold text-lg sm:text-xl text-rimba-950">
                                    Rumus Utama Keselamatan Siswa
                                </h2>
                                <p className="text-xs text-rimba-700 font-medium">
                                    3 Langkah Wajib yang Harus Diingat Saat Menghadapi Asap atau Api
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="p-5 rounded-2xl bg-earth-soft border border-rimba-100 flex flex-col justify-between">
                                <div>
                                    <span className="w-8 h-8 rounded-lg bg-rose-100 text-rose-800 font-extrabold flex items-center justify-center text-sm mb-3">
                                        1
                                    </span>
                                    <h3 className="font-display font-bold text-rimba-950 text-base mb-1">
                                        Jauhi Titik Api
                                    </h3>
                                    <p className="text-xs text-rimba-800 leading-relaxed font-normal">
                                        Jangan pernah mendekat karena penasaran. Berjalanlah berlawanan dari arah tiupan angin ke tempat lapang yang aman.
                                    </p>
                                </div>
                            </div>

                            <div className="p-5 rounded-2xl bg-earth-soft border border-rimba-100 flex flex-col justify-between">
                                <div>
                                    <span className="w-8 h-8 rounded-lg bg-amber-100 text-amber-900 font-extrabold flex items-center justify-center text-sm mb-3">
                                        2
                                    </span>
                                    <h3 className="font-display font-bold text-rimba-950 text-base mb-1">
                                        Lindungi Napas
                                    </h3>
                                    <p className="text-xs text-rimba-800 leading-relaxed font-normal">
                                        Tutup hidung dan mulut menggunakan masker medis, sapu tangan, atau kain kaus yang dibasahi sedikit air bersih.
                                    </p>
                                </div>
                            </div>

                            <div className="p-5 rounded-2xl bg-earth-soft border border-rimba-100 flex flex-col justify-between">
                                <div>
                                    <span className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-900 font-extrabold flex items-center justify-center text-sm mb-3">
                                        3
                                    </span>
                                    <h3 className="font-display font-bold text-rimba-950 text-base mb-1">
                                        Lapor Orang Dewasa
                                    </h3>
                                    <p className="text-xs text-rimba-800 leading-relaxed font-normal">
                                        Beri tahu guru, orang tua, atau satpam sekitar agar mereka segera menghubungi pos pemadam kebakaran darurat 113.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* 2. Panduan Khusus Guru & Orang Tua */}
                    <section className="bg-white rounded-3xl p-6 sm:p-9 border border-rimba-100 shadow-sm space-y-6">
                        <div className="flex items-center gap-3 border-b border-rimba-100 pb-4">
                            <div className="w-10 h-10 rounded-xl bg-rimba-50 text-rimba-600 flex items-center justify-center">
                                <Users className="w-5 h-5" />
                            </div>
                            <div>
                                <h2 className="font-display font-extrabold text-lg sm:text-xl text-rimba-950">
                                    Pedoman Guru & Orang Tua
                                </h2>
                                <p className="text-xs text-rimba-700 font-medium">
                                    Pendampingan Edukasi Ramah Anak Tanpa Memunculkan Rasa Cemas
                                </p>
                            </div>
                        </div>

                        <div className="space-y-4 text-xs sm:text-sm text-rimba-900 leading-relaxed font-normal">
                            <div className="p-4 rounded-2xl bg-rimba-50/60 border border-rimba-100 flex items-start gap-3.5">
                                <ShieldCheck className="w-5 h-5 text-rimba-600 shrink-0 mt-0.5" />
                                <div>
                                    <p className="font-bold text-rimba-950">Edukasi Berbasis Solusi, Bukan Ketakutan</p>
                                    <p className="text-rimba-800 mt-0.5">
                                        Fokuskan pembelajaran pada aksi nyata yang dapat dilakukan anak: membuang sampah pada tempatnya, mengolah kompos, dan mencintai pepohonan rindang.
                                    </p>
                                </div>
                            </div>

                            <div className="p-4 rounded-2xl bg-earth-soft border border-rimba-100 flex items-start gap-3.5">
                                <Wind className="w-5 h-5 text-accent-sky shrink-0 mt-0.5" />
                                <div>
                                    <p className="font-bold text-rimba-950">Ciptakan Ruang Bersih di Sekolah & Rumah</p>
                                    <p className="text-rimba-800 mt-0.5">
                                        Saat indeks pencemaran udara (ISPU) meningkat, pastikan pintu dan jendela tertutup rapat, hentikan kegiatan olahraga luar ruang, dan sediakan air minum yang cukup.
                                    </p>
                                </div>
                            </div>

                            <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-200/80 flex items-start gap-3.5">
                                <HeartHandshake className="w-5 h-5 text-amber-800 shrink-0 mt-0.5" />
                                <div>
                                    <p className="font-bold text-amber-950">Tegaskan: Anak Bukan Petugas Pemadam</p>
                                    <p className="text-amber-900 mt-0.5">
                                        Pastikan anak memahami bahwa mereka tidak boleh mencoba memadamkan api sendirian. Menyelamatkan diri sendiri adalah bentuk kepahlawanan terbaik seorang anak.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* 3. Kontak Darurat Nasional Indonesia */}
                    <section className="bg-white rounded-3xl p-6 sm:p-9 border border-rimba-100 shadow-sm space-y-6">
                        <div className="flex items-center gap-3 border-b border-rimba-100 pb-4">
                            <div className="w-10 h-10 rounded-xl bg-accent-skyLight text-accent-sky flex items-center justify-center">
                                <PhoneCall className="w-5 h-5" />
                            </div>
                            <div>
                                <h2 className="font-display font-extrabold text-lg sm:text-xl text-rimba-950">
                                    Nomor Telepon Darurat Nasional
                                </h2>
                                <p className="text-xs text-rimba-700 font-medium">
                                    Layanan Bantuan Resmi Bebas Pulsa di Seluruh Wilayah Indonesia
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {emergencyContacts.map((contact, idx) => (
                                <div
                                    key={idx}
                                    className={`p-5 rounded-2xl border ${contact.bg} flex flex-col justify-between`}
                                >
                                    <div>
                                        <div className="flex items-center justify-between mb-2">
                                            <span className={`font-display font-extrabold text-2xl tracking-tight ${contact.color}`}>
                                                {contact.number}
                                            </span>
                                            <span className="text-[10px] font-bold uppercase px-2.5 py-0.5 rounded-full bg-white/80 border border-current text-rimba-900">
                                                Bebas Pulsa
                                            </span>
                                        </div>
                                        <h3 className="font-display font-bold text-rimba-950 text-sm">
                                            {contact.service}
                                        </h3>
                                        <p className="text-xs text-rimba-800 mt-1 leading-relaxed">
                                            {contact.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* 4. Tanya Jawab Cerdas (FAQ) */}
                    <section className="bg-white rounded-3xl p-6 sm:p-9 border border-rimba-100 shadow-sm space-y-6">
                        <div className="flex items-center gap-3 border-b border-rimba-100 pb-4">
                            <div className="w-10 h-10 rounded-xl bg-amber-50 text-accent-sun flex items-center justify-center">
                                <HelpCircle className="w-5 h-5" />
                            </div>
                            <div>
                                <h2 className="font-display font-extrabold text-lg sm:text-xl text-rimba-950">
                                    Pertanyaan Sering Diajukan
                                </h2>
                                <p className="text-xs text-rimba-700 font-medium">
                                    Jawaban Sederhana untuk Pertanyaan Kritis Anak-Anak
                                </p>
                            </div>
                        </div>

                        <div className="space-y-3">
                            {faqs.map((faq, idx) => {
                                const isOpen = openFaqIdx === idx;
                                return (
                                    <div
                                        key={idx}
                                        className="border border-rimba-100 rounded-2xl overflow-hidden transition-all"
                                    >
                                        <button
                                            onClick={() => toggleFaq(idx)}
                                            className="w-full text-left p-4 sm:p-5 bg-earth-soft/40 hover:bg-earth-soft flex items-center justify-between gap-4 transition-colors"
                                        >
                                            <span className="font-display font-bold text-xs sm:text-sm text-rimba-950">
                                                {faq.q}
                                            </span>
                                            <ChevronDown
                                                className={`w-4 h-4 text-rimba-600 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''
                                                    }`}
                                            />
                                        </button>

                                        {isOpen && (
                                            <div className="p-4 sm:p-5 bg-white border-t border-rimba-100 text-xs sm:text-sm text-rimba-800 leading-relaxed font-normal">
                                                {faq.a}
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </section>

                    {/* Banner Aksi Lanjutan */}
                    <div className="p-6 sm:p-8 rounded-3xl bg-rimba-900 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
                        <div>
                            <h3 className="font-display font-bold text-lg sm:text-xl">
                                Siap Menguji Pemahamanmu?
                            </h3>
                            <p className="text-xs sm:text-sm text-rimba-200 mt-1 max-w-md leading-relaxed">
                                Uji pengetahuan keselamatan dan mitigasi yang sudah kamu pelajari lewat tantangan skenario interaktif di Halaman Misi.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                            <Link href="/belajar" className="w-full sm:w-auto">
                                <button className="w-full sm:w-auto px-5 py-3 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-display font-bold text-xs sm:text-sm flex items-center justify-center gap-2">
                                    <BookOpen className="w-4 h-4" />
                                    <span>Materi Belajar</span>
                                </button>
                            </Link>

                            <Link href="/misi" className="w-full sm:w-auto">
                                <button className="w-full sm:w-auto px-6 py-3 rounded-2xl bg-accent-sun hover:bg-amber-600 text-rimba-950 font-display font-bold text-xs sm:text-sm shadow-sm flex items-center justify-center gap-2">
                                    <span>Mulai Misi Kuis</span>
                                    <ArrowRight className="w-4 h-4" />
                                </button>
                            </Link>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
}