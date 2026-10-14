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

    useEffect(() => {
        if (typeof IntersectionObserver === 'undefined') {
            const frame = window.requestAnimationFrame(() => setIsVisible(true));
            return () => window.cancelAnimationFrame(frame);
        }

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
    }, []);

    const getVariantStyles = (): React.CSSProperties => {
        const baseTransition: React.CSSProperties = {
            transitionProperty: 'opacity, transform',
            transitionDuration: '500ms',
            transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)',
            transitionDelay: `${delay}ms`
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
        <div
            id={id}
            ref={ref}
            data-motion-reveal
            style={getVariantStyles()}
            className={`${className} ${isVisible ? '' : 'will-change-[opacity,transform]'}`}
        >
            {children}
        </div>
    );
};