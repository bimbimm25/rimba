'use client';

import React, { useEffect, useRef, useState } from 'react';

type AnimationType = 'fade-up' | 'fade-scale' | 'fade-slide-left' | 'fade-slide-right';

interface AnimatedSectionProps {
    children: React.ReactNode;
    type?: AnimationType;
    delay?: number;
    className?: string;
    id?: string;
}

export const AnimatedSection: React.FC<AnimatedSectionProps> = ({
    children,
    type = 'fade-up',
    delay = 0,
    className = '',
    id
}) => {
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);
    const [pageReady, setPageReady] = useState(false);

    useEffect(() => {
        // Fungsi pemicu saat loading screen sudah benar-benar lenyap
        const handleReady = () => {
            // Beri sedikit jeda napas 100ms agar mata pengguna fokus setelah swipe up
            setTimeout(() => {
                setPageReady(true);
            }, 100);
        };

        // Jika pengguna reload di tengah halaman atau tanpa loading
        window.addEventListener('rimba_page_ready', handleReady);

        // Fallback cadangan hanya jika dalam 4 detik tidak ada loading screen sama sekali
        const fallbackTimer = setTimeout(() => {
            setPageReady(true);
        }, 4000);

        return () => {
            clearTimeout(fallbackTimer);
            window.removeEventListener('rimba_page_ready', handleReady);
        };
    }, []);

    useEffect(() => {
        if (!pageReady) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    if (ref.current) observer.unobserve(ref.current);
                }
            },
            {
                threshold: 0.1,
                rootMargin: '0px 0px -30px 0px'
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, [pageReady]);

    // Pengaturan timing & kehalusan transisi
    const getVariantStyles = (): React.CSSProperties => {
        const baseTransition: React.CSSProperties = {
            transitionProperty: 'opacity, transform',
            transitionDuration: '1200ms', // Durasi diperpanjang agar lebih sinematis & santai
            transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)', // Smooth ease-out
            transitionDelay: `${delay}ms`,
            willChange: 'opacity, transform'
        };

        if (!isVisible) {
            switch (type) {
                case 'fade-scale':
                    return {
                        ...baseTransition,
                        opacity: 0,
                        transform: 'translate3d(0, 32px, 0) scale(0.95)'
                    };
                case 'fade-slide-left':
                    return {
                        ...baseTransition,
                        opacity: 0,
                        transform: 'translate3d(-40px, 0, 0)'
                    };
                case 'fade-slide-right':
                    return {
                        ...baseTransition,
                        opacity: 0,
                        transform: 'translate3d(40px, 0, 0)'
                    };
                case 'fade-up':
                default:
                    return {
                        ...baseTransition,
                        opacity: 0,
                        transform: 'translate3d(0, 48px, 0)'
                    };
            }
        }

        return {
            ...baseTransition,
            opacity: 1,
            transform: 'translate3d(0, 0, 0) scale(1)'
        };
    };

    return (
        <div id={id} ref={ref} style={getVariantStyles()} className={className}>
            {children}
        </div>
    );
};