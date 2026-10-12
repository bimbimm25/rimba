'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
    PhoneCall,
    Mail,
    MapPin,
    Send,
    MessageCircle,
    ShieldAlert,
    Clock,
    Sparkles,
    CheckCircle2,
    AlertTriangle,
    Building2,
    ArrowRight
} from 'lucide-react';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        role: 'Siswa / Sahabat Rimba',
        phone: '',
        subject: '',
        message: ''
    });

    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.name.trim() || !formData.message.trim()) {
            alert('Mohon isi nama dan pesan Anda terlebih dahulu.');
            return;
        }

        // Format pesan WhatsApp otomatis
        const waText = encodeURIComponent(
            `Halo Tim R.I.M.B.A Indonesia!\n\n` +
            `*Nama:* ${formData.name}\n` +
            `*Peran:* ${formData.role}\n` +
            `*Nomor HP:* ${formData.phone || '-'}\n` +
            `*Perihal:* ${formData.subject || 'Pertanyaan Umum'}\n\n` +
            `*Pesan:*\n${formData.message}`
        );

        // Buka WhatsApp di tab baru (Ganti nomor tujuan sesuai kebutuhan tim kamu)
        window.open(`https://wa.me/6281234567890?text=${waText}`, '_blank');
        setIsSubmitted(true);
    };

    return (
        <div className="min-h-screen bg-earth-cream pb-28 pt-28 sm:pt-32">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

                {/* 1. Header Pengantar Halaman */}
                <section className="text-center max-w-3xl mx-auto space-y-4">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-950 text-xs font-bold uppercase tracking-wider">
                        <MessageCircle className="w-4 h-4 text-emerald-700" />
                        <span>Pusat Informasi & Layanan Darurat</span>
                    </div>

                    <h1 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-rimba-950 tracking-tight leading-tight">
                        Hubungi Tim Sahabat R.I.M.B.A
                    </h1>

                    <p className="text-rimba-800 text-sm sm:text-base leading-relaxed font-medium">
                        Punya pertanyaan seputar kurikulum belajar, ingin mengundang edukasi ke sekolah, atau butuh bantuan darurat terkait titik kebakaran lahan? Kami siap membantumu.
                    </p>
                </section>

                {/* 2. Banner Jalur Darurat (Bebas Pulsa 24 Jam) */}
                <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-6 rounded-3xl bg-linear-to-r from-rose-900 to-rose-950 text-white border border-rose-800 shadow-md flex items-start gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-rose-500/20 border border-rose-400/40 text-rose-300 flex items-center justify-center shrink-0 mt-0.5">
                            <AlertTriangle className="w-6 h-6 text-rose-400" />
                        </div>
                        <div className="space-y-1">
                            <span className="text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-full bg-rose-500 text-white tracking-wider">
                                Siaga 24 Jam &bull; Bebas Pulsa
                            </span>
                            <h2 className="font-display font-extrabold text-lg text-white">
                                Darurat Karhutla (Damkar 113)
                            </h2>
                            <p className="text-xs text-rose-200 leading-relaxed">
                                Hubungi nomor darurat <strong>113</strong> jika melihat kobaran api semak atau asap tebal liar yang mendekati pemukiman.
                            </p>
                        </div>
                    </div>

                    <div className="p-6 rounded-3xl bg-linear-to-r from-emerald-900 to-emerald-950 text-white border border-emerald-800 shadow-md flex items-start gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 flex items-center justify-center shrink-0 mt-0.5">
                            <ShieldAlert className="w-6 h-6 text-emerald-400" />
                        </div>
                        <div className="space-y-1">
                            <span className="text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-full bg-emerald-500 text-white tracking-wider">
                                Layanan Medis & Asap
                            </span>
                            <h2 className="font-display font-extrabold text-lg text-white">
                                Posko Ambulans & Sesak Napas (119)
                            </h2>
                            <p className="text-xs text-emerald-200 leading-relaxed">
                                Segera hubungi <strong>119</strong> jika ada anak, balita, atau lansia yang mengalami sesak napas akut dan mata perih akibat kabut asap.
                            </p>
                        </div>
                    </div>
                </section>

                {/* 3. Grid Form Pesan & Direktori Kantor */}
                <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

                    {/* Kolom Kiri: Form Kirim Pesan */}
                    <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-rimba-100 shadow-sm space-y-6">
                        <div className="border-b border-rimba-100 pb-5">
                            <span className="text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-full bg-rimba-100 text-rimba-800 tracking-wider">
                                Kirim Pesan
                            </span>
                            <h2 className="font-display font-extrabold text-2xl text-rimba-950 mt-1">
                                Kirim Pertanyaan / Usulan Kerjasama
                            </h2>
                            <p className="text-xs text-rimba-800 font-medium mt-0.5">
                                Pesan akan langsung terhubung ke admin WhatsApp resmi Tim Rimba.
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="space-y-1.5">
                                    <label className="text-xs font-bold text-rimba-950 block">Nama Lengkap *</label>
                                    <input
                                        type="text"
                                        required
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        placeholder="Contoh: Bima Ardiansyah"
                                        className="w-full px-4 py-3 rounded-2xl border-2 border-rimba-200 focus:border-rimba-600 focus:outline-none text-xs font-medium text-rimba-950 bg-white"
                                    />
                                </div>

                                <div className="space-y-1.5">
                                    <label className="text-xs font-bold text-rimba-950 block">Saya Adalah</label>
                                    <select
                                        value={formData.role}
                                        onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                                        className="w-full px-4 py-3 rounded-2xl border-2 border-rimba-200 focus:border-rimba-600 focus:outline-none text-xs font-medium text-rimba-950 bg-white"
                                    >
                                        <option value="Siswa / Sahabat Rimba">Siswa / Sahabat Rimba</option>
                                        <option value="Bapak/Ibu Guru SD">Bapak/Ibu Guru SD</option>
                                        <option value="Orang Tua Siswa">Orang Tua Siswa</option>
                                        <option value="Relawan Lingkungan">Relawan Lingkungan</option>
                                        <option value="Lainnya">Lainnya</option>
                                    </select>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="space-y-1.5">
                                    <label className="text-xs font-bold text-rimba-950 block">Nomor WhatsApp (Opsional)</label>
                                    <input
                                        type="tel"
                                        value={formData.phone}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                        placeholder="0812xxxxxxxx"
                                        className="w-full px-4 py-3 rounded-2xl border-2 border-rimba-200 focus:border-rimba-600 focus:outline-none text-xs font-medium text-rimba-950 bg-white"
                                    />
                                </div>

                                <div className="space-y-1.5">
                                    <label className="text-xs font-bold text-rimba-950 block">Perihal Pesan</label>
                                    <input
                                        type="text"
                                        value={formData.subject}
                                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                        placeholder="Contoh: Klaim Sertifikat / Kunjungan Sekolah"
                                        className="w-full px-4 py-3 rounded-2xl border-2 border-rimba-200 focus:border-rimba-600 focus:outline-none text-xs font-medium text-rimba-950 bg-white"
                                    />
                                </div>
                            </div>

                            <div className="space-y-1.5">
                                <label className="text-xs font-bold text-rimba-950 block">Isi Pesan / Pertanyaan *</label>
                                <textarea
                                    required
                                    rows={4}
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    placeholder="Tuliskan pertanyaanmu dengan jelas di sini..."
                                    className="w-full px-4 py-3 rounded-2xl border-2 border-rimba-200 focus:border-rimba-600 focus:outline-none text-xs font-medium text-rimba-950 bg-white resize-none"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full sm:w-auto px-8 py-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-700 active:scale-95 text-white font-display font-extrabold text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                            >
                                <Send className="w-4 h-4" />
                                <span>Kirim via WhatsApp Resmi</span>
                            </button>

                            {isSubmitted && (
                                <div className="p-3.5 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center gap-2.5 text-xs text-emerald-900 font-semibold animate-in fade-in duration-200">
                                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                                    <span>Jendela WhatsApp telah dibuka. Terima kasih telah menghubungi kami!</span>
                                </div>
                            )}
                        </form>
                    </div>

                    {/* Kolom Kanan: Info Posko & Narahubung */}
                    <div className="lg:col-span-5 space-y-6">

                        {/* Kartu Posko Pusat */}
                        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-rimba-100 shadow-sm space-y-6">
                            <h2 className="font-display font-extrabold text-lg text-rimba-950 pb-3 border-b border-rimba-100 flex items-center gap-2">
                                <Building2 className="w-5 h-5 text-rimba-600" />
                                <span>Sekretariat Edukasi Rimba</span>
                            </h2>

                            <div className="space-y-4">
                                <div className="flex items-start gap-3.5">
                                    <div className="w-9 h-9 rounded-xl bg-earth-soft border border-rimba-200 flex items-center justify-center shrink-0 mt-0.5 text-rimba-700">
                                        <MapPin className="w-4 h-4" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-xs text-rimba-950">Lokasi Posko Pusat</h3>
                                        <p className="text-xs text-rimba-800 leading-relaxed mt-0.5">
                                            Gedung Pusat Konservasi Gambut Indonesia, Jalan Rimba Lestari No. 25, Kawasan Edukasi Alam Nusantara.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3.5">
                                    <div className="w-9 h-9 rounded-xl bg-earth-soft border border-rimba-200 flex items-center justify-center shrink-0 mt-0.5 text-rimba-700">
                                        <Mail className="w-4 h-4" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-xs text-rimba-950">Surat Elektronik (Email)</h3>
                                        <p className="text-xs text-rimba-800 leading-relaxed mt-0.5">
                                            halo@rimba-edukasi.id
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3.5">
                                    <div className="w-9 h-9 rounded-xl bg-earth-soft border border-rimba-200 flex items-center justify-center shrink-0 mt-0.5 text-rimba-700">
                                        <PhoneCall className="w-4 h-4" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-xs text-rimba-950">Layanan Chat WhatsApp</h3>
                                        <p className="text-xs text-rimba-800 leading-relaxed mt-0.5">
                                            +62 812-3456-7890 (Senin - Sabtu, 08.00 - 17.00 WIB)
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3.5">
                                    <div className="w-9 h-9 rounded-xl bg-earth-soft border border-rimba-200 flex items-center justify-center shrink-0 mt-0.5 text-rimba-700">
                                        <Clock className="w-4 h-4" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-xs text-rimba-950">Jam Layanan Pelajar</h3>
                                        <p className="text-xs text-rimba-800 leading-relaxed mt-0.5">
                                            Setiap hari sekolah pukul 08:00 – 16:00 WIB
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Banner Modul Belajar */}
                        <div className="bg-[#062817] text-white p-6 rounded-3xl border border-emerald-800 shadow-md space-y-3">
                            <span className="text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full bg-amber-400 text-amber-950 tracking-wider inline-block">
                                Tanya Jawab Modul
                            </span>
                            <h3 className="font-display font-extrabold text-base text-white">
                                Bingung Menjawab Soal Materi?
                            </h3>
                            <p className="text-xs text-emerald-200 leading-relaxed">
                                Kamu bisa mengulang materi dan menjelajahi game RPG interaktif secara gratis kapan saja.
                            </p>
                            <Link
                                href="/belajar"
                                className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-300 hover:text-amber-200 pt-1"
                            >
                                <span>Buka Kurikulum Belajar</span>
                                <ArrowRight className="w-3.5 h-3.5" />
                            </Link>
                        </div>

                    </div>

                </section>

            </div>
        </div>
    );
}