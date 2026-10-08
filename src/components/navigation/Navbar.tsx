'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
    Trees,
    Compass,
    ShieldCheck,
    BookOpen,
    ArrowRight,
    Menu,
    X
} from 'lucide-react';

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            // Beralih ke mode Floating Card setelah scroll melewati 30px
            if (window.scrollY > 30) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { href: '/', label: 'Beranda' },
        { href: '/belajar', label: 'Belajar' },
        { href: '/misi', label: 'Misi' },
        { href: '/tentang', label: 'Panduan' },
    ];

    return (
        <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out">
            <div
                className={`mx-auto transition-all duration-300 ease-in-out ${isScrolled
                        ? 'max-w-4xl px-4 pt-3'
                        : 'max-w-6xl px-4 sm:px-6 pt-5'
                    }`}
            >
                {/* Container: Tanpa Card di atas, Menjadi Card Melayang saat discroll */}
                <div
                    className={`flex items-center justify-between transition-all duration-300 ${isScrolled
                            ? 'bg-white/90 backdrop-blur-xl border border-rimba-100/80 shadow-md shadow-rimba-900/5 px-5 py-2.5 rounded-full'
                            : 'bg-transparent border-transparent px-2 py-1'
                        }`}
                >
                    {/* 1. Brand Logo Ringkas */}
                    <Link href="/" className="flex items-center gap-2.5 group">
                        <div
                            className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all ${isScrolled
                                    ? 'bg-rimba-500 text-white shadow-xs'
                                    : 'bg-rimba-900/10 text-rimba-900 group-hover:bg-rimba-900/15'
                                }`}
                        >
                            <Trees className="w-5 h-5 text-rimba-700" />
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="font-display font-extrabold text-lg tracking-tight text-rimba-950">
                                R.I.M.B.A
                            </span>
                        </div>
                    </Link>

                    {/* 2. Desktop Navigation Minimalis */}
                    <nav className="hidden md:flex items-center gap-1">
                        {navLinks.map((item) => {
                            const isActive = pathname === item.href;
                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={`px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all ${isActive
                                            ? 'text-rimba-950 bg-rimba-900/10 font-bold'
                                            : 'text-rimba-800 hover:text-rimba-950 hover:bg-black/5'
                                        }`}
                                >
                                    {item.label}
                                </Link>
                            );
                        })}
                    </nav>

                    {/* 3. Action Button Padat */}
                    <div className="hidden md:flex items-center">
                        <Link href="/belajar">
                            <button className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-rimba-500 hover:bg-rimba-600 text-white text-xs font-bold font-display shadow-sm shadow-rimba-500/20 active:scale-95 transition-all">
                                <span>Mulai</span>
                                <ArrowRight className="w-3.5 h-3.5" />
                            </button>
                        </Link>
                    </div>

                    {/* 4. Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-2 text-rimba-900 rounded-lg hover:bg-black/5 transition-colors"
                        aria-label={isOpen ? 'Tutup navigasi' : 'Buka navigasi'}
                    >
                        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </button>
                </div>

                {/* 5. Mobile Drawer */}
                {isOpen && (
                    <div className="md:hidden mt-2 p-3 bg-white/95 backdrop-blur-xl border border-rimba-100 rounded-2xl shadow-lg shadow-rimba-900/10 space-y-1 animate-in fade-in duration-200">
                        {navLinks.map((item) => {
                            const isActive = pathname === item.href;
                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    onClick={() => setIsOpen(false)}
                                    className={`block px-3 py-2 rounded-xl text-xs font-semibold ${isActive
                                            ? 'bg-rimba-50 text-rimba-950 font-bold'
                                            : 'text-rimba-800 hover:bg-gray-100'
                                        }`}
                                >
                                    {item.label}
                                </Link>
                            );
                        })}
                        <div className="pt-2 border-t border-gray-100">
                            <Link
                                href="/belajar"
                                onClick={() => setIsOpen(false)}
                                className="w-full flex items-center justify-center gap-1.5 py-2 px-3 bg-rimba-500 text-white rounded-xl text-xs font-bold shadow-xs"
                            >
                                <span>Mulai</span>
                                <ArrowRight className="w-3.5 h-3.5" />
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
};