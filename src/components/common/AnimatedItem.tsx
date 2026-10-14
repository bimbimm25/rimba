'use client';

import React, { useEffect, useRef, useState } from 'react';

type AnimationVariant = 'fade-up' | 'fade-scale' | 'fade-left' | 'fade-right';

interface AnimatedItemProps {
    children: React.ReactNode;
    variant?: AnimationVariant;
    delay?: number; // Delay dalam milidetik (misal: 150, 300, 450)
    className?: string;
}

export const AnimatedItem: React.FC<AnimatedItemProps> = ({
    children,
    variant = 'fade-up',
    delay = 0,
    className = ''
}) => {
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);
    const [pageReady, setPageReady] = useState(false);

    useEffect(() => {
        const handleReady = () => {
            setTimeout(() => setPageReady(true), 120);
        };

        window.addEventListener('rimba_page_ready', handleReady);

        // Fallback otomatis jika tidak melewati screen loading
        const timer = setTimeout(() => setPageReady(true), 3500);

        return () => {
            clearTimeout(timer);
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
                threshold: 0.15,
                rootMargin: '0px 0px -40px 0px'
            }
        );

        if (ref.current) observer.observe(ref.current);

        return () => observer.disconnect();
    }, [pageReady]);

    const getStyle = (): React.CSSProperties => {
        const base: React.CSSProperties = {
            transitionProperty: 'opacity, transform',
            transitionDuration: '1100ms',
            transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)',
            transitionDelay: `${delay}ms`,
            willChange: 'opacity, transform'
        };

        if (!isVisible) {
            switch (variant) {
                case 'fade-scale':
                    return { ...base, opacity: 0, transform: 'translate3d(0, 24px, 0) scale(0.94)' };
                case 'fade-left':
                    return { ...base, opacity: 0, transform: 'translate3d(-32px, 0, 0)' };
                case 'fade-right':
                    return { ...base, opacity: 0, transform: 'translate3d(32px, 0, 0)' };
                case 'fade-up':
                default:
                    return { ...base, opacity: 0, transform: 'translate3d(0, 36px, 0)' };
            }
        }

        return { ...base, opacity: 1, transform: 'translate3d(0, 0, 0) scale(1)' };
    };

    return (
        <div ref={ref} style={getStyle()} className={className}>
            {children}
        </div>
    );
};