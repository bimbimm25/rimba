'use client';

import React, { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { Trees } from 'lucide-react';

export const RouteLoadingScreen: React.FC = () => {
    const pathname = usePathname();
    const [isLoading, setIsLoading] = useState(true);
    const [isFadingOut, setIsFadingOut] = useState(false);
    const prevPathnameRef = useRef(pathname);

    // Menentukan label teks berdasarkan URL tujuan
    const getPageTitle = (path: string) => {
        if (path === '/') return 'Beranda';
        if (path.startsWith('/belajar')) return 'Belajar';
        if (path.startsWith('/misi')) return 'Misi';
        if (path.startsWith('/lab')) return 'Arcade Lab';
        if (path.startsWith('/kit')) return 'Kit Siaga';
        if (path.startsWith('/kontak') || path.startsWith('/contact')) return 'Kontak';
        if (path.startsWith('/tentang')) return 'Tentang R.I.M.B.A';
        if (path.startsWith('/panduan')) return 'Panduan Belajar';
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

    // Pengatur durasi transisi
    const triggerLoading = () => {
        setIsLoading(true);
        setIsFadingOut(false);

        const duration = 1350;

        const exitTimeout = setTimeout(() => {
            setIsFadingOut(true);

            // Waktu tunggu swipe ke atas selesai (650ms) sebelum komponen di-unmount
            setTimeout(() => {
                setIsLoading(false);
                setIsFadingOut(false);
            }, 650);
        }, duration);

        return () => {
            clearTimeout(exitTimeout);
        };
    };

    // Pemicu saat pertama kali website dibuka
    useEffect(() => {
        const pathSegments = pathname.split('/').filter(Boolean);
        const isSubPage = pathSegments.length > 1;

        if (isSubPage) {
            setIsLoading(false);
            return;
        }

        const cleanup = triggerLoading();
        return () => cleanup && cleanup();
    }, []);

    // Pemicu saat berpindah rute utama di navbar
    useEffect(() => {
        if (prevPathnameRef.current !== pathname) {
            prevPathnameRef.current = pathname;

            const pathSegments = pathname.split('/').filter(Boolean);
            const isSubPage = pathSegments.length > 1;

            if (isSubPage) {
                setIsLoading(false);
                setIsFadingOut(false);
                return;
            }

            const cleanup = triggerLoading();
            return () => cleanup && cleanup();
        }
    }, [pathname]);

    if (!isLoading) return null;

    return (
        <>
            {/* Animasi Masuk Staggered */}
            <style jsx>{`
                @keyframes entranceSlideUp {
                    from {
                        opacity: 0;
                        transform: translateY(22px) scale(0.95);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0) scale(1);
                    }
                }

                .animate-enter-logo {
                    animation: entranceSlideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
                }

                .animate-enter-spinner {
                    animation: entranceSlideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.12s both;
                }

                .animate-enter-text {
                    animation: entranceSlideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.22s both;
                }
            `}</style>

            <div
                className={`fixed inset-0 z-50 flex items-center justify-center bg-[#2BB673] text-white select-none will-change-transform transition-transform duration-650 ease-[cubic-bezier(0.7,0,0.3,1)] ${isFadingOut
                        ? '-translate-y-full pointer-events-none'
                        : 'translate-y-0'
                    }`}
                onWheel={(e) => e.stopPropagation()}
                onTouchMove={(e) => e.stopPropagation()}
            >
                <div
                    className={`flex flex-col items-center justify-center text-center px-6 space-y-6 transition-all duration-400 ${isFadingOut ? 'opacity-80 -translate-y-8' : 'opacity-100 translate-y-0'
                        }`}
                >
                    {/* 1. Logo & Judul R.I.M.B.A (Masuk Pertama) */}
                    <div className="flex flex-col items-center space-y-2.5 animate-enter-logo">
                        <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white shadow-lg shadow-black/5">
                            <Trees className="w-7 h-7" />
                        </div>
                        <span className="font-display font-extrabold text-lg tracking-widest text-white drop-shadow-sm">
                            R.I.M.B.A
                        </span>
                    </div>

                    {/* 2. Spinner Lingkaran Halus (Masuk Kedua) */}
                    <div className="relative w-8 h-8 animate-enter-spinner">
                        <div className="w-full h-full rounded-full border-2 border-white/25" />
                        <div className="absolute inset-0 w-full h-full rounded-full border-2 border-white border-t-transparent animate-spin" />
                    </div>

                    {/* 3. Teks Keterangan Halaman Dinamis (Masuk Ketiga) */}
                    <div className="space-y-1 animate-enter-text">
                        <p className="text-xs sm:text-sm font-medium text-white tracking-wide">
                            Memuat ke halaman <span className="text-amber-200 font-bold">{pageTitle}</span>...
                        </p>
                        <p className="text-[11px] text-white/80 font-normal">
                            Mohon tunggu sebentar
                        </p>
                    </div>

                </div>
            </div>
        </>
    );
};