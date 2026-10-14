import React from 'react';
import Link from 'next/link';
import { Trees } from 'lucide-react';

export const Footer = () => {
    return (
        <footer className="w-full bg-gray-100 text-gray-500 border-t border-gray-200/80 text-xs">
            <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 pt-16 pb-12">
                {/* Bagian Utama: Kiri (Brand & Deskripsi) & Kanan (Menu Kolom) */}
                <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-16 pb-14 border-b border-gray-200/80">

                    {/* Kolom Kiri: Brand, Deskripsi, & Ikon */}
                    <div className="max-w-sm space-y-4">
                        <Link href="/" className="inline-flex items-center gap-2.5 text-gray-900 group">
                            <div className="w-7 h-7 rounded-lg bg-gray-900 text-white flex items-center justify-center">
                                <Trees className="w-4 h-4" />
                            </div>
                            <span className="font-display font-bold text-base tracking-tight text-gray-900">
                                R.I.M.B.A
                            </span>
                        </Link>

                        <p className="text-[13px] leading-relaxed text-gray-500 font-normal">
                            Ruang belajar digital yang mengenalkan pencegahan kebakaran hutan dan lahan gambut melalui cerita, misi interaktif, dan kebiasaan aman bagi anak sekolah dasar.
                        </p>
                    </div>

                    {/* Kolom Kanan: 3 Grup Navigasi Minimalis */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-12 lg:gap-16">

                        {/* Kolom 1 */}
                        <div className="space-y-3.5">
                            <p className="text-gray-900 font-semibold text-xs tracking-tight">
                                Belajar
                            </p>
                            <ul className="space-y-2.5 text-[13px]">
                                <li>
                                    <Link href="/belajar" className="hover:text-gray-900 transition-colors">
                                        Kurikulum Materi
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/misi" className="hover:text-gray-900 transition-colors">
                                        Misi Lapangan
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/misi/hasil" className="hover:text-gray-900 transition-colors">
                                        Lencana & Hasil
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Kolom 2 */}
                        <div className="space-y-3.5">
                            <p className="text-gray-900 font-semibold text-xs tracking-tight">
                                Informasi
                            </p>
                            <ul className="space-y-2.5 text-[13px]">
                                <li>
                                    <Link href="/panduan" className="hover:text-gray-900 transition-colors">
                                        Panduan Guru & Wali
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/tentang" className="hover:text-gray-900 transition-colors">
                                        Visi & Makna
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/contact" className="hover:text-gray-900 transition-colors">
                                        Kontak Siaga
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Kolom 3: Protokol Siaga Anak (Clean & Simple) */}
                        <div className="space-y-3.5 col-span-2 sm:col-span-1">
                            <p className="text-gray-900 font-semibold text-xs tracking-tight">
                                Protokol Siaga
                            </p>
                            <ul className="space-y-2.5 text-[13px] text-gray-500">
                                <li className="flex items-center gap-2">
                                    <span className="text-[11px] font-mono text-gray-400">01</span>
                                    <span>Jauhi Titik Api & Asap</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-[11px] font-mono text-gray-400">02</span>
                                    <span>Lapor ke Orang Dewasa</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-[11px] font-mono text-gray-400">03</span>
                                    <span>Gunakan Masker Basah</span>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>

                {/* Baris Bawah: Hak Cipta & Tautan Kebijakan */}
                <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-[12px] text-gray-400">
                    <p>
                        &copy; {new Date().getFullYear()} R.I.M.B.A. Seluruh hak cipta dilindungi.
                    </p>

                    <div className="flex items-center gap-6 text-[12px]">
                        <Link href="/panduan" className="hover:text-gray-900 transition-colors">
                            Petunjuk Edukasi
                        </Link>
                        <Link href="/tentang" className="hover:text-gray-900 transition-colors">
                            Kebijakan Konten
                        </Link>
                        <Link href="/contact" className="hover:text-gray-900 transition-colors">
                            Bantuan
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};