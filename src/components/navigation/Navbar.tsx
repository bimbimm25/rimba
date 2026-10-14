'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
    Trees,
    Home,
    BookOpen,
    Info,
    BookOpenCheck,
    Target,
    Gamepad2,
    PackageCheck,
    Menu,
    X,
    PhoneCall,
    Sparkles
} from 'lucide-react';

const NAV_ITEMS = [
    {
        label: 'Beranda',
        href: '/',
        icon: Home,
        desc: 'Halaman Utama Rimba'
    },
    {
        label: 'Tentang',
        href: '/tentang',
        icon: Info,
        desc: 'Tentang R.I.M.B.A'
    },
    {
        label: 'Panduan',
        href: '/panduan',
        icon: BookOpenCheck,
        desc: 'Panduan Pendamping Belajar'
    },
    {
        label: 'Belajar',
        href: '/belajar',
        icon: BookOpen,
        desc: 'Kurikulum Hutan & Gambut'
    },
    {
        label: 'Misi',
        href: '/misi',
        icon: Target,
        desc: 'Simulasi Tanggap Bencana'
    },
    {
        label: 'Arcade Lab',
        href: '/lab',
        icon: Gamepad2,
        desc: 'Mini-Game Refleks Karhutla'
    },
    {
        label: 'Kit Siaga',
        href: '/kit',
        icon: PackageCheck,
        desc: 'Daftar Logistik & P3K'
    },
];

export const Navbar: React.FC = () => {
    const pathname = usePathname();
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        handleScroll();
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Kunci scroll halaman saat menu mobile terbuka
    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [mobileMenuOpen]);

    // Tutup menu mobile ketika berpindah halaman
    useEffect(() => {
        setMobileMenuOpen(false);
    }, [pathname]);

    return (
        <>
            <header
                className={`fixed top-0 inset-x-0 z-40 transition-all duration-500 ease-in-out px-4 sm:px-6 ${isScrolled ? 'py-2.5 sm:py-3' : 'py-4 sm:py-6'
                    }`}
            >
                <nav
                    className={`max-w-6xl mx-auto rounded-3xl transition-all duration-500 ease-in-out px-4 sm:px-6 py-2.5 flex items-center justify-between ${isScrolled
                            ? 'bg-white/90 backdrop-blur-md border border-rimba-200/80 shadow-md'
                            : 'bg-transparent border border-transparent shadow-none'
                        }`}
                >
                    {/* Logo R.I.M.B.A */}
                    <Link href="/" className="flex items-center gap-2.5 group">
                        <div className="w-10 h-10 rounded-2xl bg-linear-to-br from-emerald-600 to-rimba-800 text-white flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform duration-300">
                            <Trees className="w-5 h-5 text-amber-300" />
                        </div>
                        <div>
                            <span className="font-display font-black text-lg text-rimba-950 tracking-tight block leading-tight">
                                R.I.M.B.A
                            </span>
                            <span className="text-[10px] text-rimba-700 font-bold tracking-wider uppercase block -mt-0.5">
                                Edukasi Karhutla
                            </span>
                        </div>
                    </Link>

                    {/* Menu Desktop */}
                    <div className="hidden md:flex items-center gap-1">
                        {NAV_ITEMS.map((item) => {
                            const isActive =
                                item.href === '/'
                                    ? pathname === '/'
                                    : pathname.startsWith(item.href);
                            const Icon = item.icon;

                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={`relative px-3.5 py-2 rounded-2xl text-xs font-bold transition-all duration-300 flex items-center gap-2 ${isActive
                                            ? 'bg-rimba-800 text-white shadow-xs'
                                            : isScrolled
                                                ? 'text-rimba-800 hover:text-rimba-950 hover:bg-earth-soft'
                                                : 'text-rimba-900 hover:text-rimba-950 hover:bg-white/50 backdrop-blur-xs'
                                        }`}
                                >
                                    <Icon
                                        className={`w-4 h-4 ${isActive ? 'text-amber-300' : 'text-rimba-600'
                                            }`}
                                    />
                                    <span>{item.label}</span>
                                </Link>
                            );
                        })}
                    </div>

                    {/* Tombol Aksi Kanan Desktop (Contact) */}
                    <div className="hidden md:flex items-center gap-2">
                        <Link
                            href="/contact"
                            className={`px-4 py-2 rounded-2xl text-xs font-bold flex items-center gap-1.5 transition-all duration-300 border ${isScrolled
                                    ? 'bg-emerald-50 hover:bg-emerald-100 text-rimba-950 border-emerald-200'
                                    : 'bg-white/80 hover:bg-white text-rimba-950 border-white/60 shadow-xs backdrop-blur-xs'
                                }`}
                        >
                            <PhoneCall className="w-3.5 h-3.5 text-emerald-700" />
                            <span>Kontak</span>
                        </Link>
                    </div>

                    {/* Tombol Hamburger Mobile */}
                    <button
                        onClick={() => setMobileMenuOpen(true)}
                        className={`md:hidden p-2.5 rounded-2xl text-rimba-800 transition-colors border cursor-pointer ${isScrolled
                                ? 'bg-white hover:bg-earth-soft border-rimba-100 shadow-2xs'
                                : 'bg-white/70 hover:bg-white border-rimba-200/60 backdrop-blur-xs'
                            }`}
                        aria-label="Buka Menu Navigasi"
                    >
                        <Menu className="w-5 h-5" />
                    </button>
                </nav>
            </header>

            {/* MODAL MENU MOBILE DI TENGAH LAYAR */}
            <div
                className={`fixed inset-0 z-50 md:hidden flex items-center justify-center p-4 transition-all duration-350 ease-out ${mobileMenuOpen
                        ? 'opacity-100 pointer-events-auto visible'
                        : 'opacity-0 pointer-events-none invisible'
                    }`}
            >
                {/* Latar Belakang Gelap (Klik di luar untuk menutup) */}
                <div
                    className={`absolute inset-0 bg-rimba-950/60 backdrop-blur-md transition-opacity duration-350 ${mobileMenuOpen ? 'opacity-100' : 'opacity-0'
                        }`}
                    onClick={() => setMobileMenuOpen(false)}
                />

                {/* Kotak Menu Mengambang di Tengah */}
                <div
                    className={`relative z-10 w-full max-w-sm max-h-[88vh] bg-white rounded-3xl border border-rimba-100 shadow-2xl flex flex-col overflow-hidden transition-all duration-350 ${mobileMenuOpen
                            ? 'scale-100 translate-y-0 opacity-100'
                            : 'scale-95 translate-y-4 opacity-0'
                        }`}
                    style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
                >
                    {/* Header Popover Mobile */}
                    <div className="px-5 py-4 border-b border-rimba-100 flex items-center justify-between bg-earth-cream/40">
                        <div className="flex items-center gap-2.5">
                            <div className="w-8 h-8 rounded-xl bg-rimba-800 text-white flex items-center justify-center">
                                <Trees className="w-4 h-4 text-amber-300" />
                            </div>
                            <div>
                                <span className="font-display font-black text-sm text-rimba-950 block leading-tight">
                                    Menu Jelajah R.I.M.B.A
                                </span>
                                <span className="text-[10px] text-rimba-600 font-semibold block">
                                    Pilih Halaman Tujuan
                                </span>
                            </div>
                        </div>

                        <button
                            onClick={() => setMobileMenuOpen(false)}
                            className="w-8 h-8 rounded-xl bg-white border border-rimba-100 text-rimba-700 hover:text-rimba-950 flex items-center justify-center cursor-pointer active:scale-95 transition-transform"
                            aria-label="Tutup Menu"
                        >
                            <X className="w-4 h-4" />
                        </button>
                    </div>

                    {/* Daftar Tautan Menu Mobile (Bisa Di-scroll Jika Layar Pendek) */}
                    <div className="overflow-y-auto p-4 space-y-1.5 divide-y divide-transparent">
                        {NAV_ITEMS.map((item) => {
                            const isActive =
                                item.href === '/'
                                    ? pathname === '/'
                                    : pathname.startsWith(item.href);
                            const Icon = item.icon;

                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className={`p-3 rounded-2xl flex items-center justify-between transition-all duration-200 ${isActive
                                            ? 'bg-rimba-800 text-white shadow-sm'
                                            : 'bg-earth-soft/50 hover:bg-earth-soft text-rimba-950 active:scale-98'
                                        }`}
                                >
                                    <div className="flex items-center gap-3">
                                        <div
                                            className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${isActive
                                                    ? 'bg-white/20 text-amber-300'
                                                    : 'bg-white text-rimba-700 border border-rimba-100 shadow-2xs'
                                                }`}
                                        >
                                            <Icon className="w-4 h-4" />
                                        </div>
                                        <div>
                                            <span className="font-display font-bold text-xs sm:text-sm block leading-tight">
                                                {item.label}
                                            </span>
                                            <span
                                                className={`text-[10px] block mt-0.5 ${isActive ? 'text-emerald-100' : 'text-slate-500'
                                                    }`}
                                            >
                                                {item.desc}
                                            </span>
                                        </div>
                                    </div>

                                    {isActive && (
                                        <span className="w-2 h-2 rounded-full bg-amber-400" />
                                    )}
                                </Link>
                            );
                        })}
                    </div>

                    {/* Footer Tombol Kontak */}
                    <div className="p-4 border-t border-rimba-100 bg-earth-cream/30">
                        <Link
                            href="/kontak"
                            onClick={() => setMobileMenuOpen(false)}
                            className="w-full py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center justify-center gap-2 shadow-xs transition-colors active:scale-98"
                        >
                            <PhoneCall className="w-4 h-4 text-amber-300" />
                            <span>Layanan & Kontak Darurat</span>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};