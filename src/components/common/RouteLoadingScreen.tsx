'use client';

import React, { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { Trees } from 'lucide-react';

export const RouteLoadingScreen: React.FC = () => {
    const pathname = usePathname();
    const [isLoading, setIsLoading] = useState(true);
    const [isFadingOut, setIsFadingOut] = useState(false);
    const [progress, setProgress] = useState(0);
    const prevPathnameRef = useRef(pathname);

    // Menentukan label teks berdasarkan URL tujuan
    const getPageTitle = (path: string) => {
        if (path === '/') return 'Beranda';
        if (path.startsWith('/belajar')) return 'Belajar';
        if (path.startsWith('/misi')) return 'Misi';
        if (path.startsWith('/lab')) return 'Arcade Lab';
        if (path.startsWith('/kit')) return 'Kit Siaga';
        if (path.startsWith('/kontak') || path.startsWith('/contact')) return 'Kontak';
        return 'Halaman';
    };

    const pageTitle = getPageTitle(pathname);

    // Kunci scroll halaman selama proses loading
    useEffect(() => {
        if (isLoading) {
            const originalOverflow = document.body.style.overflow;
            document.body.style.overflow = 'hidden';
            return () => {
                document.body.style.overflow = originalOverflow || 'unset';
            };
        }
    }, [isLoading]);

    // Fungsi pengatur durasi 4.5 detik dan animasi pembuka halus
    const triggerLoading = () => {
        setIsLoading(true);
        setIsFadingOut(false);
        setProgress(0);

        const duration = 4500; // 4.5 detik
        const intervalTime = 45;
        const step = 100 / (duration / intervalTime);

        const timer = setInterval(() => {
            setProgress((prev) => {
                if (prev + step >= 100) {
                    clearInterval(timer);
                    return 100;
                }
                return prev + step;
            });
        }, intervalTime);

        // Saat mencapai 4.5 detik, aktifkan fade-out halus (500ms) sebelum komponen ditutup
        const finishTimeout = setTimeout(() => {
            clearInterval(timer);
            setProgress(100);
            setIsFadingOut(true);

            setTimeout(() => {
                setIsLoading(false);
                setIsFadingOut(false);
            }, 500);
        }, duration);

        return () => {
            clearInterval(timer);
            clearTimeout(finishTimeout);
        };
    };

    // Pemicu saat pertama kali website dibuka
    useEffect(() => {
        const cleanup = triggerLoading();
        return () => cleanup && cleanup();
    }, []);

    // Pemicu saat berpindah rute di navbar
    useEffect(() => {
        if (prevPathnameRef.current !== pathname) {
            prevPathnameRef.current = pathname;
            const cleanup = triggerLoading();
            return () => cleanup && cleanup();
        }
    }, [pathname]);

    if (!isLoading) return null;

    return (
        <div
            className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#072415] text-white select-none transition-all duration-500 ease-in-out ${isFadingOut ? 'opacity-0 scale-102 pointer-events-none' : 'opacity-100 scale-100'
                }`}
            onWheel={(e) => e.stopPropagation()}
            onTouchMove={(e) => e.stopPropagation()}
        >
            <div className="flex flex-col items-center text-center px-6 max-w-sm space-y-6">

                {/* Ikon Logo Sederhana */}
                <div className="w-16 h-16 rounded-2xl bg-emerald-800/60 border border-emerald-600/30 flex items-center justify-center text-amber-300 shadow-sm animate-pulse">
                    <Trees className="w-8 h-8" />
                </div>

                {/* Teks Status Halaman Dinamis */}
                <div className="space-y-1">
                    <h2 className="font-display font-bold text-lg sm:text-xl text-white tracking-wide">
                        Membuka Halaman {pageTitle}
                    </h2>
                    <p className="text-xs text-emerald-200/70 font-medium">
                        Mohon tunggu sebentar...
                    </p>
                </div>

                {/* Progress Bar Minimalis */}
                <div className="w-56 space-y-2">
                    <div className="w-full h-1.5 rounded-full bg-emerald-950 border border-emerald-800/60 overflow-hidden">
                        <div
                            className="h-full rounded-full bg-amber-400 transition-all duration-75 ease-out"
                            style={{ width: `${Math.min(progress, 100)}%` }}
                        />
                    </div>

                    <div className="text-right text-[11px] font-mono font-medium text-emerald-300/80">
                        {Math.round(progress)}%
                    </div>
                </div>

            </div>
        </div>
    );
};