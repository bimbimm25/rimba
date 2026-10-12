'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import Lenis from 'lenis';

export const SmoothScroll = ({ children }: { children: React.ReactNode }) => {
    const lenisRef = useRef<Lenis | null>(null);
    const pathname = usePathname();

    // 1. Inisialisasi Lenis dengan konfigurasi performa 60-120fps tanpa patah-patah
    useEffect(() => {
        // Matikan mekanisme scroll bawaan browser saat navigasi rute
        if ('scrollRestoration' in window.history) {
            window.history.scrollRestoration = 'manual';
        }

        const lenis = new Lenis({
            duration: 1.1,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: 'vertical',
            gestureOrientation: 'vertical',
            smoothWheel: true,
            wheelMultiplier: 1,
            touchMultiplier: 1.5,
            infinite: false,
        });

        lenisRef.current = lenis;

        let rafId: number;
        function raf(time: number) {
            lenis.raf(time);
            rafId = requestAnimationFrame(raf);
        }
        rafId = requestAnimationFrame(raf);

        return () => {
            cancelAnimationFrame(rafId);
            lenis.destroy();
            lenisRef.current = null;
        };
    }, []);

    // 2. Reset instan ke paling atas setiap rute/halaman berubah
    useEffect(() => {
        if (lenisRef.current) {
            // scrollTo dengan opsi immediate: true agar tidak ada benturan animasi lama
            lenisRef.current.scrollTo(0, { immediate: true });
        } else {
            window.scrollTo(0, 0);
        }
    }, [pathname]);

    return <>{children}</>;
};