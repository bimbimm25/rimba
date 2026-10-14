'use client';

import React, { useEffect, useRef, useState } from 'react';

interface TargetRect {
    x: number;
    y: number;
    width: number;
    height: number;
    borderRadius: string;
}

export const CustomCursor = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isLocked, setIsLocked] = useState(false);

    const isVisibleRef = useRef(false);
    const isLockedRef = useRef(false);
    const mousePos = useRef({ x: -100, y: -100 });
    const currentPos = useRef({ x: -100, y: -100 });
    const targetBox = useRef<TargetRect | null>(null);
    const scopeRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const isTouch = window.matchMedia('(pointer: coarse)').matches;
        if (isTouch) return;

        let rafId: number | null = null;

        const updateLoop = () => {
            rafId = null;
            if (!scopeRef.current) return;

            let distance = 0;
            if (targetBox.current) {
                const target = targetBox.current;
                const deltaX = target.x - currentPos.current.x;
                const deltaY = target.y - currentPos.current.y;
                currentPos.current.x += deltaX * 0.25;
                currentPos.current.y += deltaY * 0.25;
                distance = Math.max(Math.abs(deltaX), Math.abs(deltaY));

                scopeRef.current.style.width = `${target.width}px`;
                scopeRef.current.style.height = `${target.height}px`;
                scopeRef.current.style.borderRadius = target.borderRadius;
            } else {
                const targetX = mousePos.current.x - 18;
                const targetY = mousePos.current.y - 18;
                const deltaX = targetX - currentPos.current.x;
                const deltaY = targetY - currentPos.current.y;
                currentPos.current.x += deltaX * 0.35;
                currentPos.current.y += deltaY * 0.35;
                distance = Math.max(Math.abs(deltaX), Math.abs(deltaY));

                scopeRef.current.style.width = '36px';
                scopeRef.current.style.height = '36px';
                scopeRef.current.style.borderRadius = '8px';
            }

            scopeRef.current.style.transform =
                `translate3d(${currentPos.current.x}px, ${currentPos.current.y}px, 0)`;

            if (distance > 0.5) {
                rafId = requestAnimationFrame(updateLoop);
            }
        };

        const scheduleUpdate = () => {
            if (rafId === null) rafId = requestAnimationFrame(updateLoop);
        };

        const checkTargetUnderMouse = (x: number, y: number) => {
            const el = document.elementFromPoint(x, y) as HTMLElement | null;
            const interactiveEl = el?.closest(
                'button, a, [role="button"], input, select, .cursor-pointer'
            ) as HTMLElement | null;

            if (interactiveEl) {
                document.body.classList.remove('hide-cursor');

                const rect = interactiveEl.getBoundingClientRect();
                const style = window.getComputedStyle(interactiveEl);
                const padding = 4;

                targetBox.current = {
                    x: rect.left - padding,
                    y: rect.top - padding,
                    width: rect.width + padding * 2,
                    height: rect.height + padding * 2,
                    borderRadius: style.borderRadius || '16px',
                };
                if (!isLockedRef.current) {
                    isLockedRef.current = true;
                    setIsLocked(true);
                }
            } else {
                document.body.classList.add('hide-cursor');
                targetBox.current = null;
                if (isLockedRef.current) {
                    isLockedRef.current = false;
                    setIsLocked(false);
                }
            }
        };

        const onMouseMove = (e: MouseEvent) => {
            mousePos.current = { x: e.clientX, y: e.clientY };

            if (!isVisibleRef.current) {
                isVisibleRef.current = true;
                setIsVisible(true);
            }

            checkTargetUnderMouse(e.clientX, e.clientY);
            scheduleUpdate();
        };

        const onScroll = () => {
            if (mousePos.current.x >= 0 && mousePos.current.y >= 0) {
                checkTargetUnderMouse(mousePos.current.x, mousePos.current.y);
                scheduleUpdate();
            }
        };

        const onMouseLeave = () => {
            isVisibleRef.current = false;
            setIsVisible(false);
            document.body.classList.remove('hide-cursor');
        };

        const onMouseEnter = () => {
            isVisibleRef.current = true;
            setIsVisible(true);
        };

        window.addEventListener('mousemove', onMouseMove, { passive: true });
        window.addEventListener('scroll', onScroll, { passive: true });
        document.addEventListener('mouseleave', onMouseLeave);
        document.addEventListener('mouseenter', onMouseEnter);

        return () => {
            if (rafId !== null) cancelAnimationFrame(rafId);
            document.body.classList.remove('hide-cursor');
            window.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('scroll', onScroll);
            document.removeEventListener('mouseleave', onMouseLeave);
            document.removeEventListener('mouseenter', onMouseEnter);
        };
    }, []);

    return (
        <div
            className={`custom-cursor-overlay pointer-events-none fixed inset-0 z-[99999] overflow-hidden transition-opacity duration-200 ${isVisible ? 'opacity-100' : 'opacity-0'
                }`}
            aria-hidden="true"
        >
            <div
                ref={scopeRef}
                className={`fixed top-0 left-0 will-change-[transform,width,height,border-radius] transition-[border-color,background-color,box-shadow] duration-200 ease-out flex items-center justify-center ${isLocked
                        ? 'border-2 border-rimba-500/80 bg-rimba-500/10 shadow-[0_0_20px_rgba(46,125,91,0.2)]'
                        : 'border-transparent bg-transparent'
                    }`}
            >
                {/* Titik Pusat Presisi */}
                <div
                    className={`w-2 h-2 rounded-full transition-transform duration-150 ${isLocked
                            ? 'scale-0 opacity-0'
                            : 'scale-100 bg-rimba-600 shadow-[0_0_6px_rgba(46,125,91,0.9)] opacity-100'
                        }`}
                />

                {/* 4 Siku Bidik Scope yang Berputar Searah Jarum Jam */}
                {!isLocked && (
                    <div className="absolute inset-0 pointer-events-none animate-[spin_4s_linear_infinite]">
                        <span className="absolute top-0 left-0 w-2.5 h-2.5 border-t-2 border-l-2 border-rimba-700" />
                        <span className="absolute top-0 right-0 w-2.5 h-2.5 border-t-2 border-r-2 border-rimba-700" />
                        <span className="absolute bottom-0 left-0 w-2.5 h-2.5 border-b-2 border-l-2 border-rimba-700" />
                        <span className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b-2 border-r-2 border-rimba-700" />
                    </div>
                )}
            </div>
        </div>
    );
};