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
    PhoneCall
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
            // Deteksi posisi scroll: jika > 20px, ubah status navbar
            setIsScrolled(window.scrollY > 20);
        };

        handleScroll();
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Tutup menu mobile ketika berpindah halaman
    useEffect(() => {
        setMobileMenuOpen(false);
    }, [pathname]);

    return (
        <header className={`fixed top-0 inset-x-0 z-40 transition-all duration-500 ease-in-out px-4 sm:px-6 ${isScrolled ? 'py-2.5 sm:py-3' : 'py-4 sm:py-6'
            }`}>
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
                        const isActive = item.href === '/'
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
                                <Icon className={`w-4 h-4 ${isActive ? 'text-amber-300' : 'text-rimba-600'}`} />
                                <span>{item.label}</span>
                                
                            </Link>
                        );
                    })}
                </div>

                {/* Tombol Aksi Kanan (Contact) */}
                <div className="hidden md:flex items-center gap-2">
                    <Link
                        href="/contact"
                        className={`px-4 py-2 rounded-2xl text-xs font-bold flex items-center gap-1.5 transition-all duration-300 border ${isScrolled
                                ? 'bg-emerald-50 hover:bg-emerald-100 text-rimba-950 border-emerald-200'
                                : 'bg-white/80 hover:bg-white text-rimba-950 border-white/60 shadow-xs backdrop-blur-xs'
                            }`}
                    >
                        <PhoneCall className="w-3.5 h-3.5 text-emerald-700" />
                        <span>Contact</span>
                    </Link>
                </div>

                {/* Tombol Hamburger Mobile */}
                <button
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className={`md:hidden p-2.5 rounded-2xl text-rimba-800 transition-colors border ${isScrolled
                            ? 'bg-white hover:bg-earth-soft border-rimba-100 shadow-2xs'
                            : 'bg-white/70 hover:bg-white border-rimba-200/60 backdrop-blur-xs'
                        }`}
                    aria-label="Toggle Navigation Menu"
                >
                    {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </button>
            </nav>

            {/* Menu Mobile Dropdown */}
            {mobileMenuOpen && (
                <div className="md:hidden mt-2 max-w-6xl mx-auto bg-white/95 backdrop-blur-md rounded-3xl border border-rimba-100 shadow-xl p-3.5 space-y-1.5 animate-in fade-in slide-in-from-top-2 duration-300">
                    {NAV_ITEMS.map((item) => {
                        const isActive = item.href === '/'
                            ? pathname === '/'
                            : pathname.startsWith(item.href);
                        const Icon = item.icon;

                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`p-3 rounded-2xl flex items-center justify-between transition-all ${isActive
                                        ? 'bg-rimba-800 text-white shadow-xs'
                                        : 'bg-earth-soft/60 hover:bg-earth-soft text-rimba-950'
                                    }`}
                            >
                                <div className="flex items-center gap-3">
                                    <div
                                        className={`w-8 h-8 rounded-xl flex items-center justify-center ${isActive ? 'bg-white/20 text-amber-300' : 'bg-white text-rimba-700 border border-rimba-100'
                                            }`}
                                    >
                                        <Icon className="w-4 h-4" />
                                    </div>
                                    <div>
                                        <span className="font-display font-bold text-sm block leading-tight">
                                            {item.label}
                                        </span>
                                        <span className={`text-[10px] ${isActive ? 'text-rimba-200' : 'text-rimba-700'}`}>
                                            {item.desc}
                                        </span>
                                    </div>
                                </div>

                                
                            </Link>
                        );
                    })}

                    <div className="pt-2 border-t border-rimba-100">
                        <Link
                            href="/contact"
                            className="w-full p-3 rounded-2xl bg-emerald-50 hover:bg-emerald-100 text-emerald-950 text-xs font-bold flex items-center justify-center gap-2 transition-colors border border-emerald-200"
                        >
                            <PhoneCall className="w-4 h-4 text-emerald-700" />
                            <span>Contact</span>
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
};