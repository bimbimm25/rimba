'use client';

import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { Trees } from 'lucide-react';

export const RouteLoadingScreen: React.FC = () => {
    const pathname = usePathname();
    const [isLoading, setIsLoading] = useState(pathname === '/');
    const [isFadingOut, setIsFadingOut] = useState(false);

    useEffect(() => {
        if (!isLoading) return;

        const fadeTimer = window.setTimeout(() => setIsFadingOut(true), 250);
        const closeTimer = window.setTimeout(() => setIsLoading(false), 600);

        return () => {
            window.clearTimeout(fadeTimer);
            window.clearTimeout(closeTimer);
        };
    }, [isLoading]);

    if (!isLoading) return null;

    return (
        <>
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
                aria-hidden="true"
                className={`pointer-events-none fixed inset-0 z-50 flex items-center justify-center bg-[#2BB673] text-white select-none will-change-transform transition-transform duration-350 ease-[cubic-bezier(0.7,0,0.3,1)] ${isFadingOut
                    ? '-translate-y-full'
                    : 'translate-y-0'
                    }`}
            >
                <div
                    className={`flex flex-col items-center justify-center text-center px-6 space-y-6 transition-all duration-400 ${isFadingOut ? 'opacity-80 -translate-y-8' : 'opacity-100 translate-y-0'
                        }`}
                >
                    <div className="flex flex-col items-center space-y-2.5 animate-enter-logo">
                        <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white shadow-lg shadow-black/5">
                            <Trees className="w-7 h-7" />
                        </div>
                        <span className="font-display font-extrabold text-lg tracking-widest text-white drop-shadow-sm">
                            R.I.M.B.A
                        </span>
                    </div>

                    <div className="relative w-8 h-8 animate-enter-spinner">
                        <div className="w-full h-full rounded-full border-2 border-white/25" />
                        <div className="absolute inset-0 w-full h-full rounded-full border-2 border-white border-t-transparent animate-spin" />
                    </div>

                    <div className="space-y-1 animate-enter-text">
                        <p className="text-xs sm:text-sm font-medium text-white tracking-wide">
                            Menjelajah Rimba...
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
