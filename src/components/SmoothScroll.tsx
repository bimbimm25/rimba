'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import Lenis from 'lenis';

export const SmoothScroll = ({ children }: { children: React.ReactNode }) => {
    const lenisRef = useRef<Lenis | null>(null);
    const pathname = usePathname();

    // 1. Inisialisasi Lenis dengan konfigurasi performa 60-120fps tanpa patah-patah
    useEffect(() => {
        const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
        let lenis: Lenis | null = null;
        let rafId: number | null = null;

        const stopSmoothScroll = () => {
            if (rafId !== null) {
                cancelAnimationFrame(rafId);
                rafId = null;
            }
            lenis?.destroy();
            lenis = null;
            lenisRef.current = null;
        };

        const startSmoothScroll = () => {
            if (motionPreference.matches || lenis) return;

            // Matikan mekanisme scroll bawaan browser saat navigasi rute
            if ('scrollRestoration' in window.history) {
                window.history.scrollRestoration = 'manual';
            }

            lenis = new Lenis({
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

            function raf(time: number) {
                if (!lenis) return;
                lenis.raf(time);
                rafId = requestAnimationFrame(raf);
            }
            rafId = requestAnimationFrame(raf);
        };

        const handleMotionPreferenceChange = () => {
            if (motionPreference.matches) {
                stopSmoothScroll();
            } else {
                startSmoothScroll();
            }
        };

        startSmoothScroll();
        motionPreference.addEventListener('change', handleMotionPreferenceChange);

        return () => {
            motionPreference.removeEventListener('change', handleMotionPreferenceChange);
            stopSmoothScroll();
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