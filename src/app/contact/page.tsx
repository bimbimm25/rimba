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
    CheckCircle2,
    AlertTriangle,
    Building2,
    ArrowRight
} from 'lucide-react';
import { AnimatedItem } from '@/components/common/AnimatedItem';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        role: 'Siswa / Sahabat Rimba',
        phone: '',
        subject: '',
        message: ''
    });

    const [isSubmitted, setIsSubmitted] = useState(false);
    const [whatsappUrl, setWhatsappUrl] = useState<string | null>(null);
    const [formError, setFormError] = useState('');

    const updateFormField = (field: keyof typeof formData, value: string) => {
        setFormData((current) => ({ ...current, [field]: value }));
        setFormError('');
        setIsSubmitted(false);
        setWhatsappUrl(null);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.name.trim() || !formData.message.trim()) {
            setFormError('Mohon isi nama dan pesan Anda terlebih dahulu.');
            return;
        }

        const waText = encodeURIComponent(
            `Halo Tim R.I.M.B.A Indonesia!\n\n` +
            `*Nama:* ${formData.name}\n` +
            `*Peran:* ${formData.role}\n` +
            `*Nomor HP:* ${formData.phone || '-'}\n` +
            `*Perihal:* ${formData.subject || 'Pertanyaan Umum'}\n\n` +
            `*Pesan:*\n${formData.message}`
        );

        const url = `https://wa.me/6281234567890?text=${waText}`;
        setFormError('');
        setWhatsappUrl(url);
        window.open(url, '_blank', 'noopener,noreferrer');
        setIsSubmitted(true);
    };

    return (
        <div className="min-h-screen bg-earth-cream pb-28 pt-28 sm:pt-32 overflow-hidden">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

                {/* 1. Header Pengantar Halaman */}
                <section className="text-center max-w-3xl mx-auto space-y-4">
                    <AnimatedItem variant="fade-up" delay={0}>
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-950 text-xs font-bold uppercase tracking-wider">
                            <MessageCircle className="w-4 h-4 text-emerald-700" />
                            <span>Pusat Informasi & Layanan Darurat</span>
                        </div>
                    </AnimatedItem>

                    <AnimatedItem variant="fade-up" delay={120}>
                        <h1 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-rimba-950 tracking-tight leading-tight">
                            Hubungi Tim Sahabat R.I.M.B.A
                        </h1>
                    </AnimatedItem>

                    <AnimatedItem variant="fade-up" delay={220}>
                        <p className="text-rimba-800 text-sm sm:text-base leading-relaxed font-medium">
                            Punya pertanyaan seputar kurikulum belajar, ingin mengundang edukasi ke sekolah, atau butuh bantuan darurat terkait titik kebakaran lahan? Kami siap membantumu.
                        </p>
                    </AnimatedItem>
                </section>

                {/* 2. Banner Jalur Darurat (Clean & Elegant Editorial Style) */}
                <section className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {/* Kartu Damkar 113 */}
                    <AnimatedItem variant="fade-up" delay={120} className="h-full">
                        <div className="h-full bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-xs hover:border-rose-300 transition-colors flex flex-col justify-between gap-6 group">
                            <div className="space-y-4">
                                <div className="flex items-center justify-between gap-2">
                                    <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-rose-50 text-rose-700 border border-rose-200/70">
                                        Siaga 24 Jam • Bebas Pulsa
                                    </span>
                                    <div className="w-8 h-8 rounded-full bg-rose-50 text-rose-600 flex items-center justify-center">
                                        <AlertTriangle className="w-4 h-4" />
                                    </div>
                                </div>

                                <div className="space-y-1.5">
                                    <h2 className="font-display font-bold text-lg text-slate-900 tracking-tight">
                                        Darurat Karhutla (Damkar)
                                    </h2>
                                    <p className="text-sm text-slate-700 leading-relaxed font-normal">
                                        Hubungi nomor darurat 113 jika melihat kobaran api semak atau kepulan asap liar yang mulai mendekati kawasan permukiman.
                                    </p>
                                </div>
                            </div>

                            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                                <div>
                                    <span className="text-[11px] font-bold text-slate-700 uppercase block">Hotline Posko</span>
                                    <span className="font-mono font-black text-2xl text-rose-600 tracking-tight">113</span>
                                </div>
                                <a
                                    href="tel:113"
                                    className="inline-flex min-h-11 items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-rose-600 text-sm font-semibold text-white transition-colors duration-200 shadow-xs"
                                >
                                    <PhoneCall className="w-3.5 h-3.5" />
                                    <span>Panggil Cepat</span>
                                </a>
                            </div>
                        </div>
                    </AnimatedItem>

                    {/* Kartu Medis 119 */}
                    <AnimatedItem variant="fade-up" delay={180} className="h-full">
                        <div className="h-full bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-xs hover:border-emerald-300 transition-colors flex flex-col justify-between gap-6 group">
                            <div className="space-y-4">
                                <div className="flex items-center justify-between gap-2">
                                    <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200/70">
                                        Layanan Medis & Asap
                                    </span>
                                    <div className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center">
                                        <ShieldAlert className="w-4 h-4" />
                                    </div>
                                </div>

                                <div className="space-y-1.5">
                                    <h2 className="font-display font-bold text-lg text-slate-900 tracking-tight">
                                        Posko Ambulans & Sesak Napas
                                    </h2>
                                    <p className="text-sm text-slate-700 leading-relaxed font-normal">
                                        Segera hubungi 119 jika ada anak, balita, atau lansia yang mengalami sesak napas akut serta iritasi mata akibat paparan asap.
                                    </p>
                                </div>
                            </div>

                            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                                <div>
                                    <span className="text-[11px] font-bold text-slate-700 uppercase block">Ambulans Siaga</span>
                                    <span className="font-mono font-black text-2xl text-emerald-800 tracking-tight">119</span>
                                </div>
                                <a
                                    href="tel:119"
                                    className="inline-flex min-h-11 items-center gap-2 px-4 py-2.5 rounded-xl bg-rimba-800 hover:bg-rimba-700 text-sm font-semibold text-white transition-colors duration-200 shadow-xs"
                                >
                                    <PhoneCall className="w-3.5 h-3.5" />
                                    <span>Panggil Cepat</span>
                                </a>
                            </div>
                        </div>
                    </AnimatedItem>
                </section>

                {/* 3. Grid Form Pesan & Direktori Kantor */}
                <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

                    {/* Kolom Kiri: Form Kirim Pesan */}
                    <AnimatedItem variant="fade-scale" delay={180} className="lg:col-span-7 h-full">
                        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-rimba-100 shadow-sm space-y-6">
                            <div className="border-b border-rimba-100 pb-5">
                                <span className="text-[11px] font-extrabold uppercase px-2.5 py-1 rounded-full bg-rimba-100 text-rimba-800 tracking-wider">
                                    Kirim Pesan
                                </span>
                                <h2 className="font-display font-extrabold text-2xl text-rimba-950 mt-1">
                                    Kirim Pertanyaan / Usulan Kerja Sama
                                </h2>
                                <p className="text-sm text-rimba-800 font-medium mt-1">
                                    Pesan akan disiapkan untuk dikirim melalui WhatsApp resmi tim R.I.M.B.A.
                                </p>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className="space-y-1.5">
                                        <label htmlFor="contact-name" className="text-sm font-bold text-rimba-950 block">Nama Lengkap *</label>
                                        <input
                                            id="contact-name"
                                            type="text"
                                            required
                                            autoComplete="name"
                                            maxLength={100}
                                            value={formData.name}
                                            onChange={(e) => updateFormField('name', e.target.value)}
                                            placeholder="Contoh: Bima Ardiansyah"
                                            className="w-full min-h-12 px-4 py-3 rounded-2xl border-2 border-rimba-200 focus:border-rimba-600 focus:outline-none text-sm font-medium text-rimba-950 bg-white"
                                        />
                                    </div>

                                    <div className="space-y-1.5">
                                        <label htmlFor="contact-role" className="text-sm font-bold text-rimba-950 block">Saya Adalah</label>
                                        <select
                                            id="contact-role"
                                            value={formData.role}
                                            onChange={(e) => updateFormField('role', e.target.value)}
                                            className="w-full min-h-12 px-4 py-3 rounded-2xl border-2 border-rimba-200 focus:border-rimba-600 focus:outline-none text-sm font-medium text-rimba-950 bg-white"
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
                                        <label htmlFor="contact-phone" className="text-sm font-bold text-rimba-950 block">Nomor WhatsApp (Opsional)</label>
                                        <input
                                            id="contact-phone"
                                            type="tel"
                                            autoComplete="tel"
                                            inputMode="tel"
                                            maxLength={24}
                                            value={formData.phone}
                                            onChange={(e) => updateFormField('phone', e.target.value)}
                                            placeholder="0812xxxxxxxx"
                                            className="w-full min-h-12 px-4 py-3 rounded-2xl border-2 border-rimba-200 focus:border-rimba-600 focus:outline-none text-sm font-medium text-rimba-950 bg-white"
                                        />
                                    </div>

                                    <div className="space-y-1.5">
                                        <label htmlFor="contact-subject" className="text-sm font-bold text-rimba-950 block">Perihal Pesan</label>
                                        <input
                                            id="contact-subject"
                                            type="text"
                                            maxLength={120}
                                            value={formData.subject}
                                            onChange={(e) => updateFormField('subject', e.target.value)}
                                            placeholder="Contoh: Klaim Sertifikat / Kunjungan Sekolah"
                                            className="w-full min-h-12 px-4 py-3 rounded-2xl border-2 border-rimba-200 focus:border-rimba-600 focus:outline-none text-sm font-medium text-rimba-950 bg-white"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-1.5">
                                    <label htmlFor="contact-message" className="text-sm font-bold text-rimba-950 block">Isi Pesan / Pertanyaan *</label>
                                    <textarea
                                        id="contact-message"
                                        required
                                        rows={4}
                                        maxLength={2000}
                                        value={formData.message}
                                        onChange={(e) => updateFormField('message', e.target.value)}
                                        placeholder="Tuliskan pertanyaanmu dengan jelas di sini..."
                                        className="w-full px-4 py-3 rounded-2xl border-2 border-rimba-200 focus:border-rimba-600 focus:outline-none text-sm font-medium text-rimba-950 bg-white resize-y"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full min-h-12 sm:w-auto px-8 py-3.5 rounded-2xl bg-rimba-600 hover:bg-rimba-700 active:scale-95 text-white font-display font-extrabold text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                                >
                                    <Send className="w-4 h-4" />
                                    <span>Kirim via WhatsApp Resmi</span>
                                </button>

                                {formError && (
                                    <p role="alert" className="text-sm font-semibold text-rose-700">
                                        {formError}
                                    </p>
                                )}

                                {isSubmitted && (
                                    <div role="status" aria-live="polite" className="p-3.5 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center gap-2.5 text-sm text-emerald-900 font-semibold animate-in fade-in duration-200">
                                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                                        <span>
                                            Pesan siap dikirim. Jika WhatsApp tidak terbuka,{' '}
                                            <a href={whatsappUrl ?? undefined} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">
                                                buka WhatsApp di sini
                                            </a>.
                                        </span>
                                    </div>
                                )}
                            </form>
                        </div>
                    </AnimatedItem>

                    {/* Kolom Kanan: Info Posko & Narahubung */}
                    <div className="lg:col-span-5 space-y-6">

                        {/* Kartu Posko Pusat */}
                        <AnimatedItem variant="fade-scale" delay={240}>
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
                                            <h3 className="font-bold text-sm text-rimba-950">Lokasi Posko Pusat</h3>
                                            <p className="text-sm text-rimba-800 leading-relaxed mt-0.5">
                                                Gedung Pusat Konservasi Gambut Indonesia, Jalan Rimba Lestari No. 25, Kawasan Edukasi Alam Nusantara.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-3.5">
                                        <div className="w-9 h-9 rounded-xl bg-earth-soft border border-rimba-200 flex items-center justify-center shrink-0 mt-0.5 text-rimba-700">
                                            <Mail className="w-4 h-4" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-sm text-rimba-950">Surat Elektronik (Email)</h3>
                                            <a href="mailto:halo@rimba-edukasi.id" className="text-sm text-rimba-800 leading-relaxed mt-0.5 underline underline-offset-2">
                                                halo@rimba-edukasi.id
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-3.5">
                                        <div className="w-9 h-9 rounded-xl bg-earth-soft border border-rimba-200 flex items-center justify-center shrink-0 mt-0.5 text-rimba-700">
                                            <PhoneCall className="w-4 h-4" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-sm text-rimba-950">Layanan Chat WhatsApp</h3>
                                            <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" className="text-sm text-rimba-800 leading-relaxed mt-0.5 underline underline-offset-2">
                                                +62 812-3456-7890 (Senin - Sabtu, 08.00 - 17.00 WIB)
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-3.5">
                                        <div className="w-9 h-9 rounded-xl bg-earth-soft border border-rimba-200 flex items-center justify-center shrink-0 mt-0.5 text-rimba-700">
                                            <Clock className="w-4 h-4" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-sm text-rimba-950">Jam Layanan Pelajar</h3>
                                            <p className="text-sm text-rimba-800 leading-relaxed mt-0.5">
                                                Setiap hari sekolah pukul 08:00 – 16:00 WIB
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </AnimatedItem>

                        {/* Banner Modul Belajar */}
                        <AnimatedItem variant="fade-scale" delay={300}>
                            <div className="bg-[#062817] text-white p-6 rounded-3xl border border-emerald-800 shadow-md space-y-3">
                                <span className="text-[11px] font-black uppercase px-2.5 py-1 rounded-full bg-amber-400 text-amber-950 tracking-wider inline-block">
                                    Tanya Jawab Modul
                                </span>
                                <h3 className="font-display font-extrabold text-base text-white">
                                    Bingung Menjawab Soal Materi?
                                </h3>
                                <p className="text-sm text-emerald-100 leading-relaxed">
                                    Kamu bisa mengulang materi dan menjelajahi game RPG interaktif secara gratis kapan saja.
                                </p>
                                <Link
                                    href="/belajar"
                                    className="inline-flex min-h-11 items-center gap-1.5 text-sm font-bold text-amber-300 hover:text-amber-200 pt-1"
                                >
                                    <span>Buka Kurikulum Belajar</span>
                                    <ArrowRight className="w-3.5 h-3.5" />
                                </Link>
                            </div>
                        </AnimatedItem>

                    </div>

                </section>

            </div>
        </div>
    );
}