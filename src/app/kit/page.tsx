'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
    ArrowLeft,
    Printer,
    CheckCircle2,
    PackageCheck,
    Wind,
    HeartPulse,
    Home,
    Calculator,
    RotateCcw
} from 'lucide-react';
import { AnimatedItem } from '@/components/common/AnimatedItem';

interface KitItem {
    id: string;
    name: string;
    category: 'tas-siaga' | 'p3k' | 'rumah-kebun';
    desc: string;
    priority: 'Sangat Penting' | 'Penting' | 'Pelengkap';
}

const KIT_ITEMS: KitItem[] = [
    // 1. Tas Siaga Evakuasi (72 Jam Pertama)
    {
        id: 'masker-n95',
        name: 'Masker Standar N95 / KF94',
        category: 'tas-siaga',
        desc: 'Menyaring partikel abu halus PM2.5 beracun dari kabut asap karhutla.',
        priority: 'Sangat Penting',
    },
    {
        id: 'kacamata-goggle',
        name: 'Kacamata Pelindung (Goggles Kedap Debu)',
        category: 'tas-siaga',
        desc: 'Mencegah iritasi mata perih dan infeksi akibat abu layang.',
        priority: 'Sangat Penting',
    },
    {
        id: 'air-minum',
        name: 'Air Mineral Botol Segel (Min. 3 Liter/Orang)',
        category: 'tas-siaga',
        desc: 'Mencegah dehidrasi dan menjaga kelembapan saluran tenggorokan.',
        priority: 'Sangat Penting',
    },
    {
        id: 'dokumen-tahan-air',
        name: 'Kantong Kedap Air Dokumen Penting',
        category: 'tas-siaga',
        desc: 'Menyimpan KK, akta lahir, kartu BPJS, dan surat tanah dalam satu wadah siap angkut.',
        priority: 'Sangat Penting',
    },
    {
        id: 'senter-peluit',
        name: 'Senter LED & Peluit Tanda Darurat',
        category: 'tas-siaga',
        desc: 'Untuk penerangan saat jarak pandang berkurang drastis atau pemadaman listrik.',
        priority: 'Penting',
    },
    {
        id: 'pakaian-lengan-panjang',
        name: 'Pakaian Katun Lengan Panjang & Jaket',
        category: 'tas-siaga',
        desc: 'Melindungi kulit dari paparan abu panas dan cuaca dingin malam hari.',
        priority: 'Penting',
    },

    // 2. Kotak P3K Kesehatan Paru & Mata
    {
        id: 'obat-tetes-mata',
        name: 'Obat Tetes Mata Pembersih (Saline / Artificial Tears)',
        category: 'p3k',
        desc: 'Membilas mata kemerahan akibat abu beterbangan.',
        priority: 'Sangat Penting',
    },
    {
        id: 'inhaler-asma',
        name: 'Obat Pribadi / Inhaler Asma & Alergi',
        category: 'p3k',
        desc: 'Sangat krusial bagi anggota keluarga yang memiliki riwayat gangguan pernapasan/ISPA.',
        priority: 'Sangat Penting',
    },
    {
        id: 'vitamin-c',
        name: 'Suplemen Vitamin C & Cairan Oralit',
        category: 'p3k',
        desc: 'Menjaga daya tahan tubuh keluarga dari radikal bebas udara berasap.',
        priority: 'Penting',
    },
    {
        id: 'kasa-antiseptik',
        name: 'Kasa Steril, Plester, & Antiseptik',
        category: 'p3k',
        desc: 'Perawatan luka bakar ringan atau lecet saat proses penyelamatan diri.',
        priority: 'Penting',
    },

    // 3. Rumah & Pekarangan Aman Api
    {
        id: 'ember-selang',
        name: 'Ember Cadangan Air & Selang Panjang',
        category: 'rumah-kebun',
        desc: 'Menjaga tanaman pekarangan dan pagar kayu tetap lembap saat kemarau terik.',
        priority: 'Penting',
    },
    {
        id: 'kain-goni',
        name: 'Karung Goni atau Selimut Tebal',
        category: 'rumah-kebun',
        desc: 'Dapat dibasahi air untuk menutup titik kobaran api kecil secara cepat.',
        priority: 'Penting',
    },
    {
        id: 'alat-kompos',
        name: 'Karung Sampah Daun (Komposter)',
        category: 'rumah-kebun',
        desc: 'Menampung daun gugur pekarangan untuk dikomposkan, bukan dibakar.',
        priority: 'Pelengkap',
    },
    {
        id: 'lakban-jendela',
        name: 'Lakban Kertas / Seal Pintu & Ventilasi',
        category: 'rumah-kebun',
        desc: 'Menutup celah kusen jendela agar asap tebal di luar tidak merembes ke kamar tidur.',
        priority: 'Pelengkap',
    },
];

export default function KitSiagaPage() {
    const [checkedIds, setCheckedIds] = useState<string[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<'all' | 'tas-siaga' | 'p3k' | 'rumah-kebun'>('all');

    // State Kalkulator Kebutuhan Keluarga
    const [familyMembers, setFamilyMembers] = useState(4);
    const [shelterDays, setShelterDays] = useState(3);

    useEffect(() => {
        try {
            const saved = localStorage.getItem('rimba_checked_kit_items');
            if (saved) setCheckedIds(JSON.parse(saved));
        } catch {
            // Abaikan jika storage dibatasi browser
        }
    }, []);

    const toggleCheck = (id: string) => {
        setCheckedIds((prev) => {
            const updated = prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id];
            try {
                localStorage.setItem('rimba_checked_kit_items', JSON.stringify(updated));
            } catch {
                // Abaikan
            }
            return updated;
        });
    };

    const handleResetChecklist = () => {
        setCheckedIds([]);
        try {
            localStorage.removeItem('rimba_checked_kit_items');
        } catch {
            // Abaikan
        }
    };

    // Kalkulasi Logistik
    const maskNeeded = familyMembers * shelterDays * 2;
    const waterLitersNeeded = familyMembers * shelterDays * 3;
    const totalProgress = Math.round((checkedIds.length / KIT_ITEMS.length) * 100);

    const handlePrintDocument = () => {
        const printWindow = window.open('', '_blank', 'width=850,height=1000');
        if (!printWindow) {
            alert('Mohon izinkan pop-up peramban untuk mencetak lembar siaga.');
            return;
        }
        printWindow.opener = null;

        const rowsHtml = KIT_ITEMS.map((item, idx) => {
            const isChecked = checkedIds.includes(item.id);
            const categoryLabel =
                item.category === 'tas-siaga' ? 'Tas Evakuasi 72 Jam' :
                    item.category === 'p3k' ? 'P3K Paru & Mata' : 'Pekarangan Bebas Api';

            return `
        <tr style="border-bottom: 1px solid #d1d5db; background-color: ${idx % 2 === 0 ? '#ffffff' : '#f9fafb'};">
          <td style="padding: 8px 6px; text-align: center; vertical-align: middle;">
            <div style="display: inline-block; width: 18px; height: 18px; border: 2px solid #111827; border-radius: 4px; text-align: center; line-height: 15px; font-weight: 900; font-size: 14px; color: #166534; background-color: ${isChecked ? '#dcfce7' : '#ffffff'};">
              ${isChecked ? '✓' : ''}
            </div>
          </td>
          <td style="padding: 8px 10px; font-weight: 700; color: #111827; font-size: 12px;">
            ${item.name}
          </td>
          <td style="padding: 8px 10px; color: #4b5563; font-size: 11px;">
            ${categoryLabel}
          </td>
          <td style="padding: 8px 10px; color: #374151; font-size: 11px;">
            ${item.desc}
          </td>
          <td style="padding: 8px 10px; text-align: center;">
            <span style="display: inline-block; padding: 2px 6px; border-radius: 4px; font-size: 9px; font-weight: 800; text-transform: uppercase; border: 1px solid #cbd5e1; background-color: ${item.priority === 'Sangat Penting' ? '#fee2e2; color: #991b1b; border-color: #fca5a5;' :
                    item.priority === 'Penting' ? '#fef3c7; color: #92400e; border-color: #fde68a;' :
                        '#f1f5f9; color: #334155;'
                }">
              ${item.priority}
            </span>
          </td>
        </tr>
      `;
        }).join('');

        const htmlContent = `
      <!DOCTYPE html>
      <html lang="id">
        <head>
          <meta charset="utf-8">
          <title>Lembar Periksa Kit Siaga Rimba</title>
          <style>
            @page {
              size: A4;
              margin: 15mm 15mm 15mm 15mm;
            }
            body {
              font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
              color: #111827;
              margin: 0;
              padding: 0;
              background: #ffffff;
              -webkit-print-color-adjust: exact !important;
              print-color-adjust: exact !important;
            }
            table {
              width: 100%;
              border-collapse: collapse;
            }
          </style>
        </head>
        <body>
          <div style="border-bottom: 2.5px solid #166534; padding-bottom: 12px; margin-bottom: 14px; display: flex; justify-content: space-between; align-items: flex-start;">
            <div>
              <div style="display: inline-block; padding: 2px 8px; background-color: #dcfce7; border: 1px solid #86efac; border-radius: 4px; font-size: 10px; font-weight: 800; color: #166534; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 4px;">
                Dokumen Kesiapsiagaan Darurat
              </div>
              <h1 style="margin: 0; font-size: 20px; font-weight: 900; color: #064e3b; letter-spacing: -0.5px;">
                LEMBAR PERIKSA KIT SIAGA BENCANA KARHUTLA
              </h1>
              <p style="margin: 3px 0 0 0; font-size: 11px; color: #4b5563;">
                Platform R.I.M.B.A &bull; Edukasi Pelestarian Hutan, Gambut, & Udara Bersih Indonesia
              </p>
            </div>
            <div style="text-align: right; border: 1.5px solid #166534; padding: 6px 12px; border-radius: 8px; background-color: #f0fdf4;">
              <span style="font-size: 10px; font-weight: 800; color: #166534; display: block; text-transform: uppercase;">Status Kesiapan</span>
              <strong style="font-size: 16px; font-weight: 900; color: #064e3b;">${checkedIds.length} / ${KIT_ITEMS.length} Barang</strong>
              <span style="font-size: 10px; color: #166534; display: block; font-weight: 700;">(${totalProgress}% Siap Siaga)</span>
            </div>
          </div>

          <div style="background-color: #f8fafc; border: 1px solid #cbd5e1; border-radius: 8px; padding: 10px 14px; margin-bottom: 14px; font-size: 11px;">
            <div style="font-weight: 800; color: #0f172a; margin-bottom: 4px; text-transform: uppercase; font-size: 10px; letter-spacing: 0.5px;">
              Estimasi Logistik Rumah Tangga:
            </div>
            <div style="display: flex; gap: 20px;">
              <div>Keluarga: <strong>${familyMembers} Orang</strong></div>
              <div>Durasi Siaga: <strong>${shelterDays} Hari</strong></div>
              <div>Masker N95 Min.: <strong style="color: #0369a1;">${maskNeeded} Pcs</strong></div>
              <div>Cadangan Air Min.: <strong style="color: #047857;">${waterLitersNeeded} Liter (~${Math.ceil(waterLitersNeeded / 19)} Galon)</strong></div>
            </div>
          </div>

          <table>
            <thead>
              <tr style="background-color: #f1f5f9; border-top: 1px solid #94a3b8; border-bottom: 2px solid #0f172a; font-size: 10px; text-transform: uppercase; color: #0f172a;">
                <th style="padding: 8px 6px; width: 38px; text-align: center;">CEK</th>
                <th style="padding: 8px 10px; text-align: left; width: 170px;">Nama Perlengkapan</th>
                <th style="padding: 8px 10px; text-align: left; width: 120px;">Kategori</th>
                <th style="padding: 8px 10px; text-align: left;">Fungsi Penyelamatan / Medis</th>
                <th style="padding: 8px 10px; text-align: center; width: 85px;">Prioritas</th>
              </tr>
            </thead>
            <tbody>
              ${rowsHtml}
            </tbody>
          </table>

          <div style="margin-top: 18px; padding-top: 12px; border-top: 1.5px dashed #94a3b8; display: flex; justify-content: space-between; align-items: flex-end; font-size: 10px; color: #374151;">
            <div>
              <strong style="color: #991b1b; text-transform: uppercase; font-size: 9px; display: block; margin-bottom: 2px;">
                Nomor Kontak Siaga 24 Jam Bebas Pulsa:
              </strong>
              <span>&bull; Pemadam Kebakaran: <strong>113</strong> &nbsp;|&nbsp; Ambulans / Medis: <strong>119</strong> &nbsp;|&nbsp; Posko Bencana: <strong>112 / BPBD</strong></span>
            </div>
            <div style="text-align: right; color: #64748b; font-size: 9px;">
              Dicetak oleh Sahabat Rimba pada ${new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}
            </div>
          </div>
        </body>
      </html>
    `;

        printWindow.document.open();
        printWindow.document.write(htmlContent);
        printWindow.document.close();

        printWindow.onload = () => {
            printWindow.focus();
            printWindow.print();
        };
    };

    const filteredItems = selectedCategory === 'all'
        ? KIT_ITEMS
        : KIT_ITEMS.filter((item) => item.category === selectedCategory);

    return (
        <div className="min-h-screen bg-earth-cream pb-28 pt-28 sm:pt-32 overflow-hidden">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-10">

                {/* Navigasi Atas */}
                <AnimatedItem variant="fade-up" delay={0}>
                    <div className="flex items-center justify-between gap-4">
                        <Link
                            href="/belajar"
                            className="inline-flex items-center gap-2 text-xs font-bold text-rimba-800 hover:text-rimba-950 bg-white px-4 py-2 rounded-full border border-rimba-100 shadow-2xs transition-colors"
                        >
                            <ArrowLeft className="w-4 h-4 text-rimba-600" />
                            <span>Kembali ke Belajar</span>
                        </Link>

                        <span className="text-xs font-extrabold uppercase tracking-wider text-rimba-800 bg-rimba-100 px-3.5 py-1.5 rounded-full border border-rimba-200">
                            Kesiapsiagaan Keluarga
                        </span>
                    </div>
                </AnimatedItem>

                {/* Hero Judul */}
                <div className="text-center max-w-2xl mx-auto space-y-3">
                    <AnimatedItem variant="fade-up" delay={0}>
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rimba-100 border border-rimba-200 text-rimba-900 text-xs font-bold uppercase tracking-wider">
                            <PackageCheck className="w-4 h-4 text-rimba-600" />
                            <span>Daftar Siaga Tanggap Bencana</span>
                        </div>
                    </AnimatedItem>

                    <AnimatedItem variant="fade-up" delay={120}>
                        <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-rimba-950 tracking-tight">
                            Kit Siaga Bencana Rimba
                        </h1>
                    </AnimatedItem>

                    <AnimatedItem variant="fade-up" delay={220}>
                        <p className="text-sm sm:text-base text-rimba-800 font-medium leading-relaxed">
                            Panduan perlengkapan wajib rumah tangga untuk menghadapi ancaman kebakaran lahan dan kabut asap pekat. Centang barang yang sudah siap, lalu cetak lembar periksa resminya!
                        </p>
                    </AnimatedItem>
                </div>

                {/* STATS PROGRESS & TOMBOL AKSI */}
                <AnimatedItem variant="fade-scale" delay={150}>
                    <div className="bg-white rounded-3xl p-6 sm:p-8 border border-rimba-100 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
                        <div className="space-y-2 w-full sm:w-auto">
                            <div className="flex items-center gap-3">
                                <span className="font-display font-extrabold text-2xl sm:text-3xl text-rimba-950">
                                    {checkedIds.length} / {KIT_ITEMS.length}
                                </span>
                                <span className="text-xs font-bold px-3 py-1 rounded-full bg-rimba-100 text-rimba-800 border border-rimba-200">
                                    {totalProgress}% Siap
                                </span>
                            </div>
                            <p className="text-xs text-rimba-700 font-medium">
                                {totalProgress === 100
                                    ? 'Luar biasa! Rumah dan keluargamu 100% siap siaga menghadapi situasi darurat!'
                                    : 'Siapkan barang-barang di bawah secara bertahap bersama ayah dan ibu di rumah.'}
                            </p>

                            {/* Progress Bar */}
                            <div className="w-full sm:w-72 h-3 bg-earth-soft rounded-full overflow-hidden p-0.5 border border-rimba-200">
                                <div
                                    className="h-full bg-linear-to-r from-leaf to-rimba-600 rounded-full transition-all duration-500 ease-out"
                                    style={{ width: `${totalProgress}%` }}
                                />
                            </div>
                        </div>

                        {/* Tombol Cetak & Reset */}
                        <div className="flex items-center gap-3 w-full sm:w-auto">
                            <button
                                onClick={handleResetChecklist}
                                className="p-3 rounded-2xl bg-earth-soft hover:bg-rimba-100 text-rimba-800 border border-rimba-200 transition-colors shadow-2xs cursor-pointer"
                                title="Reset Checklist"
                            >
                                <RotateCcw className="w-4 h-4" />
                            </button>

                            <button
                                onClick={handlePrintDocument}
                                className="flex-1 sm:flex-none px-6 py-3.5 rounded-2xl bg-rimba-600 hover:bg-rimba-700 active:scale-95 text-white font-display font-bold text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                            >
                                <Printer className="w-4 h-4" />
                                <span>Cetak Lembar Siaga (PDF)</span>
                            </button>
                        </div>
                    </div>
                </AnimatedItem>

                {/* KALKULATOR KEBUTUHAN KELUARGA */}
                <AnimatedItem variant="fade-scale" delay={180}>
                    <div className="bg-white rounded-3xl p-6 sm:p-8 border border-rimba-100 shadow-sm space-y-6">
                        <div className="flex items-center gap-2.5 border-b border-rimba-100 pb-4">
                            <div className="w-9 h-9 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center">
                                <Calculator className="w-5 h-5" />
                            </div>
                            <div>
                                <h2 className="font-display font-extrabold text-lg text-rimba-950">
                                    Kalkulator Kebutuhan Logistik Asap
                                </h2>
                                <p className="text-xs text-rimba-700">
                                    Hitung kebutuhan masker dan air minum darurat keluarga untuk bertahan dari kabut asap pekat.
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
                            <div className="space-y-4">
                                <div>
                                    <div className="flex justify-between text-xs font-bold text-rimba-950 mb-1">
                                        <span>Jumlah Anggota Keluarga:</span>
                                        <strong className="text-rimba-700 font-extrabold">{familyMembers} Orang</strong>
                                    </div>
                                    <input
                                        type="range"
                                        min="1"
                                        max="10"
                                        value={familyMembers}
                                        onChange={(e) => setFamilyMembers(Number(e.target.value))}
                                        className="w-full accent-rimba-600 h-2.5 bg-rimba-100 rounded-lg cursor-pointer"
                                    />
                                </div>

                                <div>
                                    <div className="flex justify-between text-xs font-bold text-rimba-950 mb-1">
                                        <span>Durasi Siaga Bertahan di Rumah:</span>
                                        <strong className="text-rimba-700 font-extrabold">{shelterDays} Hari</strong>
                                    </div>
                                    <input
                                        type="range"
                                        min="1"
                                        max="7"
                                        value={shelterDays}
                                        onChange={(e) => setShelterDays(Number(e.target.value))}
                                        className="w-full accent-rimba-600 h-2.5 bg-rimba-100 rounded-lg cursor-pointer"
                                    />
                                </div>
                            </div>

                            {/* Hasil Estimasi */}
                            <div className="p-5 rounded-2xl bg-earth-soft border border-rimba-100 space-y-3">
                                <span className="text-[10px] font-extrabold uppercase tracking-wider text-rimba-700 block">
                                    Estimasi Kebutuhan Minimum:
                                </span>
                                <div className="flex items-center justify-between text-xs sm:text-sm">
                                    <span className="text-rimba-800 font-medium">Masker N95/KF94:</span>
                                    <strong className="text-sky-800 font-extrabold">{maskNeeded} Buah</strong>
                                </div>
                                <div className="flex items-center justify-between text-xs sm:text-sm">
                                    <span className="text-rimba-800 font-medium">Cadangan Air Minum Bersih:</span>
                                    <strong className="text-emerald-800 font-extrabold">{waterLitersNeeded} Liter (~{Math.ceil(waterLitersNeeded / 19)} Galon)</strong>
                                </div>
                                <p className="text-[11px] text-rimba-700 pt-2 border-t border-rimba-200 leading-relaxed">
                                    💡 Saat indeks kualitas udara menunjukkan level bahaya, jangan keluar rumah tanpa masker N95 dan perbanyak minum air hangat.
                                </p>
                            </div>
                        </div>
                    </div>
                </AnimatedItem>

                {/* TAB FILTER KATEGORI */}
                <AnimatedItem variant="fade-up" delay={200}>
                    <div className="flex flex-wrap items-center gap-2">
                        <button
                            onClick={() => setSelectedCategory('all')}
                            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${selectedCategory === 'all'
                                ? 'bg-rimba-800 text-white shadow-xs'
                                : 'bg-white text-rimba-800 border border-rimba-200 hover:bg-earth-soft'
                                }`}
                        >
                            Semua Perlengkapan ({KIT_ITEMS.length})
                        </button>
                        <button
                            onClick={() => setSelectedCategory('tas-siaga')}
                            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${selectedCategory === 'tas-siaga'
                                ? 'bg-sky-600 text-white shadow-xs'
                                : 'bg-white text-rimba-800 border border-rimba-200 hover:bg-earth-soft'
                                }`}
                        >
                            <Wind className="w-3.5 h-3.5" />
                            <span>Tas Evakuasi 72 Jam</span>
                        </button>
                        <button
                            onClick={() => setSelectedCategory('p3k')}
                            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${selectedCategory === 'p3k'
                                ? 'bg-rose-600 text-white shadow-xs'
                                : 'bg-white text-rimba-800 border border-rimba-200 hover:bg-earth-soft'
                                }`}
                        >
                            <HeartPulse className="w-3.5 h-3.5" />
                            <span>P3K Paru & Mata</span>
                        </button>
                        <button
                            onClick={() => setSelectedCategory('rumah-kebun')}
                            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${selectedCategory === 'rumah-kebun'
                                ? 'bg-emerald-600 text-white shadow-xs'
                                : 'bg-white text-rimba-800 border border-rimba-200 hover:bg-earth-soft'
                                }`}
                        >
                            <Home className="w-3.5 h-3.5" />
                            <span>Pekarangan Bebas Api</span>
                        </button>
                    </div>
                </AnimatedItem>

                {/* DAFTAR CHECKLIST INTERAKTIF (STAGGERED ANIMATION) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {filteredItems.map((item, idx) => {
                        const isChecked = checkedIds.includes(item.id);

                        return (
                            <AnimatedItem
                                key={item.id}
                                variant="fade-up"
                                delay={80 + (idx % 4) * 70}
                                className="h-full"
                            >
                                <div
                                    onClick={() => toggleCheck(item.id)}
                                    className={`h-full p-5 rounded-2xl border transition-all cursor-pointer select-none flex items-start gap-4 ${isChecked
                                        ? 'bg-rimba-50/70 border-rimba-300 shadow-2xs'
                                        : 'bg-white border-rimba-100 hover:border-rimba-300 shadow-2xs'
                                        }`}
                                >
                                    {/* Kotak Centang Visual */}
                                    <div className={`w-6 h-6 rounded-lg flex items-center justify-center shrink-0 mt-0.5 border-2 transition-all ${isChecked
                                        ? 'bg-emerald-600 border-emerald-600 text-white shadow-xs'
                                        : 'bg-white border-slate-300'
                                        }`}>
                                        {isChecked && <CheckCircle2 className="w-4 h-4 fill-current" />}
                                    </div>

                                    <div className="flex-1 space-y-1">
                                        <div className="flex items-center justify-between gap-2">
                                            <h3 className={`font-display font-bold text-sm leading-snug ${isChecked ? 'text-rimba-950 line-through opacity-75' : 'text-rimba-950'
                                                }`}>
                                                {item.name}
                                            </h3>
                                            <span className={`text-[9px] font-black uppercase px-2 py-0.5 rounded-md shrink-0 ${item.priority === 'Sangat Penting'
                                                ? 'bg-rose-100 text-rose-800 border border-rose-200'
                                                : item.priority === 'Penting'
                                                    ? 'bg-amber-100 text-amber-800 border border-amber-200'
                                                    : 'bg-slate-100 text-slate-700'
                                                }`}>
                                                {item.priority}
                                            </span>
                                        </div>

                                        <p className="text-xs text-rimba-700 leading-relaxed font-normal">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            </AnimatedItem>
                        );
                    })}
                </div>

                {/* NOMOR DARURAT DAN POSKO SIAGA */}
                <AnimatedItem variant="fade-scale" delay={150}>
                    <div className="p-6 rounded-3xl bg-rimba-900 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
                        <div>
                            <span className="text-xs font-bold uppercase tracking-wider text-accent-sun">
                                Kontak Cepat Tanggap 24 Jam
                            </span>
                            <h3 className="font-display font-extrabold text-xl text-white mt-1">
                                Simpan Nomor Posko Bencana di Ponselmu
                            </h3>
                            <p className="text-xs text-rimba-200 mt-1 max-w-lg leading-relaxed">
                                Segera hubungi jika melihat titik kobaran api liar atau tetangga mengalami sesak napas darurat akibat kabut asap.
                            </p>
                        </div>

                        <div className="flex items-center gap-3 w-full sm:w-auto">
                            <div className="flex-1 sm:flex-none px-4 py-3 rounded-2xl bg-white/10 border border-white/20 text-center">
                                <span className="text-[10px] text-rimba-300 uppercase block font-bold">Pemadam Kebakaran</span>
                                <span className="font-display font-black text-xl text-amber-300">113</span>
                            </div>
                            <div className="flex-1 sm:flex-none px-4 py-3 rounded-2xl bg-white/10 border border-white/20 text-center">
                                <span className="text-[10px] text-rimba-300 uppercase block font-bold">Medis Darurat</span>
                                <span className="font-display font-black text-xl text-emerald-300">119</span>
                            </div>
                        </div>
                    </div>
                </AnimatedItem>

            </div>
        </div>
    );
}