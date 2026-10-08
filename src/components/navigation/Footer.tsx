import React from 'react';
import Link from 'next/link';
import { Trees, ShieldAlert, Award, Heart } from 'lucide-react';

export const Footer = () => {
    return (
        <footer className="bg-rimba-900 text-white pt-16 pb-12 border-t border-rimba-800">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-12">
                <div className="space-y-4">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-rimba-700 flex items-center justify-center">
                            <Trees className="w-6 h-6 text-leaf-light" />
                        </div>
                        <span className="font-display font-bold text-xl tracking-tight">R.I.M.B.A</span>
                    </div>
                    <p className="text-rimba-200 text-sm leading-relaxed">
                        Ruang Interaktif Mengenal Bencana dan Alam. Media pembelajaran berbasis web yang aman, terarah, dan ramah untuk anak sekolah dasar di Indonesia.
                    </p>
                </div>

                <div>
                    <h4 className="font-semibold text-leaf-light mb-4">Prinsip Keselamatan</h4>
                    <ul className="text-sm text-rimba-200 space-y-2.5">
                        <li className="flex items-start gap-2">
                            <ShieldAlert className="w-4 h-4 text-accent-sun mt-0.5 shrink-0" />
                            <span>Jauhi api dan asap berbahaya segera.</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <Heart className="w-4 h-4 text-accent-sun mt-0.5 shrink-0" />
                            <span>Segera beri tahu orang tua, guru, atau orang dewasa.</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <Award className="w-4 h-4 text-accent-sun mt-0.5 shrink-0" />
                            <span>Anak bukan petugas pemadam kebakaran.</span>
                        </li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-semibold text-leaf-light mb-4">Navigasi Edukasi</h4>
                    <ul className="text-sm text-rimba-200 space-y-2">
                        <li>
                            <Link href="/belajar" className="hover:text-white transition-colors">
                                Dunia Rimba (Materi)
                            </Link>
                        </li>
                        <li>
                            <Link href="/misi" className="hover:text-white transition-colors">
                                Misi & Kuis Interaktif
                            </Link>
                        </li>
                        <li>
                            <Link href="/tentang" className="hover:text-white transition-colors">
                                Panduan untuk Guru & Orang Tua
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-rimba-800 text-center text-xs text-rimba-300">
                &copy; {new Date().getFullYear()} R.I.M.B.A — Inovasi Edukasi Pencegahan Karhutla untuk Anak SD.
            </div>
        </footer>
    );
};