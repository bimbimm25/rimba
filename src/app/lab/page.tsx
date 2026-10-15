'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import {
    ArrowLeft,
    Gamepad2,
    Trophy,
    RotateCcw,
    Play,
    Flame,
    Droplets,
    Sparkles
} from 'lucide-react';
import { LAB_GAME_MODULES, GameId } from '@/data/lab-games';
import { AnimatedItem } from '@/components/common/AnimatedItem';

export default function GameLabHubPage() {
    const [activeGame, setActiveGame] = useState<GameId | null>(null);
    const [highScores, setHighScores] = useState<Record<string, number>>({});
    const [hasEnteredGameOnce, setHasEnteredGameOnce] = useState(false);

    useEffect(() => {
        try {
            const saved = localStorage.getItem('rimba_lab_high_scores');
            if (saved) setHighScores(JSON.parse(saved));
        } catch {
            // Abaikan batasan storage
        }
    }, []);

    // Scroll instan ke atas saat game dibuka atau ditutup
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'auto' // 'auto' instan tanpa jeda animasi scroll
        });
    };

    const handleSelectGame = (id: GameId) => {
        setHasEnteredGameOnce(true);
        setActiveGame(id);
        scrollToTop();
    };

    const handleBackToHub = () => {
        setActiveGame(null);
        scrollToTop();
    };

    const handleUpdateHighScore = (id: GameId, score: number) => {
        setHighScores((prev) => {
            const currentBest = prev[id] || 0;
            if (score > currentBest) {
                const updated = { ...prev, [id]: score };
                try {
                    localStorage.setItem('rimba_lab_high_scores', JSON.stringify(updated));
                } catch {
                    // Abaikan
                }
                return updated;
            }
            return prev;
        });
    };

    // Helper kondisional: Hanya animasikan saat first-load, render instan jika kembali dari game
    const ConditionalAnimatedItem = ({
        children,
        variant = 'fade-up',
        delay = 0,
        className = ''
    }: {
        children: React.ReactNode;
        variant?: 'fade-up' | 'fade-scale' | 'fade-left' | 'fade-right';
        delay?: number;
        className?: string;
    }) => {
        if (hasEnteredGameOnce) {
            return <div className={className}>{children}</div>;
        }
        return (
            <AnimatedItem variant={variant} delay={delay} className={className}>
                {children}
            </AnimatedItem>
        );
    };

    return (
        <div className="min-h-screen bg-earth-cream pb-28 pt-28 sm:pt-32 overflow-hidden">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-10">

                {/* Header Navigasi */}
                <ConditionalAnimatedItem variant="fade-up" delay={0}>
                    <div className="flex items-center justify-between gap-4">
                        <Link
                            href="/belajar"
                            className="inline-flex items-center gap-2 text-xs font-bold text-rimba-800 hover:text-rimba-950 bg-white px-4 py-2 rounded-full border border-rimba-100 shadow-2xs transition-colors"
                        >
                            <ArrowLeft className="w-4 h-4 text-rimba-600" />
                            <span>Kembali ke Belajar</span>
                        </Link>

                        <span className="text-xs font-extrabold uppercase tracking-wider text-rimba-800 bg-rimba-100 px-3.5 py-1.5 rounded-full border border-rimba-200">
                            Arcade Sahabat Rimba
                        </span>
                    </div>
                </ConditionalAnimatedItem>

                {/* TAMPILAN 1: GAME AKTIF (LANGSUNG TAMPIL INSTAN) */}
                {activeGame ? (
                    <div className="space-y-6">
                        <button
                            onClick={handleBackToHub}
                            className="text-xs font-bold text-rimba-800 hover:text-rimba-950 bg-white px-4 py-2 rounded-full border border-rimba-200 transition-colors shadow-2xs cursor-pointer flex items-center gap-1.5"
                        >
                            &larr; <span>Pilih Modul Game Lain</span>
                        </button>
                        <p className="rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-xs leading-relaxed text-amber-950">
                            Ini hanya permainan simulasi, bukan petunjuk untuk menghadapi kebakaran. Jika melihat api atau asap sungguhan, menjauhlah dan beri tahu orang dewasa. Jangan mencoba memadamkannya sendiri.
                        </p>

                        {activeGame === 'water-drop' && (
                            <WaterDropGame
                                bestScore={highScores['water-drop'] || 0}
                                onScoreChange={(s) => handleUpdateHighScore('water-drop', s)}
                            />
                        )}
                        {activeGame === 'peat-blaster' && (
                            <PeatBlasterGame
                                bestScore={highScores['peat-blaster'] || 0}
                                onScoreChange={(s) => handleUpdateHighScore('peat-blaster', s)}
                            />
                        )}
                        {activeGame === 'animal-rescue' && (
                            <AnimalRescueGame
                                bestScore={highScores['animal-rescue'] || 0}
                                onScoreChange={(s) => handleUpdateHighScore('animal-rescue', s)}
                            />
                        )}
                        {activeGame === 'compost-catch' && (
                            <CompostCatchGame
                                bestScore={highScores['compost-catch'] || 0}
                                onScoreChange={(s) => handleUpdateHighScore('compost-catch', s)}
                            />
                        )}
                        {activeGame === 'radar-patrol' && (
                            <RadarPatrolGame
                                bestScore={highScores['radar-patrol'] || 0}
                                onScoreChange={(s) => handleUpdateHighScore('radar-patrol', s)}
                            />
                        )}
                        {activeGame === 'aero-shooter' && (
                            <AeroShooterGame
                                bestScore={highScores['aero-shooter'] || 0}
                                onScoreChange={(s) => handleUpdateHighScore('aero-shooter', s)}
                            />
                        )}
                    </div>
                ) : (
                    /* TAMPILAN 2: HUB PEMILIHAN GAME */
                    <div className="space-y-10">
                        {/* Header Judul Utama */}
                        <div className="text-center max-w-2xl mx-auto space-y-3">
                            <ConditionalAnimatedItem variant="fade-up" delay={0}>
                                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rimba-100 border border-rimba-200 text-rimba-900 text-xs font-bold uppercase tracking-wider">
                                    <Gamepad2 className="w-4 h-4 text-rimba-600" />
                                    <span>Permainan Belajar Karhutla</span>
                                </div>
                            </ConditionalAnimatedItem>

                            <ConditionalAnimatedItem variant="fade-up" delay={120}>
                                <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-rimba-950 tracking-tight">
                                    Permainan Sahabat Rimba
                                </h1>
                            </ConditionalAnimatedItem>

                            <ConditionalAnimatedItem variant="fade-up" delay={220}>
                                <p className="text-sm sm:text-base text-rimba-800 font-medium leading-relaxed">
                                    Ayo bermain sambil belajar menjaga hutan, gambut, dan satwa. Permainan ini bukan panduan menghadapi kebakaran sungguhan. Jika melihat api atau asap, segera menjauh dan beri tahu orang dewasa.
                                </p>
                            </ConditionalAnimatedItem>
                        </div>

                        {/* Grid Modul Game */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {LAB_GAME_MODULES.map((mod, idx) => {
                                const Icon = mod.icon;
                                const best = highScores[mod.id] || 0;

                                return (
                                    <ConditionalAnimatedItem
                                        key={mod.id}
                                        variant="fade-scale"
                                        delay={120 + (idx % 3) * 80}
                                        className="h-full"
                                    >
                                        <div className="h-full bg-white rounded-3xl p-6 border border-rimba-100 shadow-sm flex flex-col justify-between hover:shadow-md hover:-translate-y-1 transition-all duration-200">
                                            <div>
                                                <div className="flex items-center justify-between mb-4">
                                                    <span className="text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full bg-earth-soft text-rimba-800">
                                                        {mod.badge}
                                                    </span>
                                                    {best > 0 && (
                                                        <span className="flex items-center gap-1 text-[11px] font-extrabold text-amber-700 bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-200">
                                                            <Trophy className="w-3.5 h-3.5" /> Rekor: {best}
                                                        </span>
                                                    )}
                                                </div>

                                                <div className={`w-14 h-14 rounded-2xl bg-linear-to-br ${mod.accentColor} text-white flex items-center justify-center mb-4 shadow-sm`}>
                                                    <Icon className="w-7 h-7" />
                                                </div>

                                                <h2 className="font-display font-extrabold text-lg text-rimba-950 mb-1">
                                                    {mod.title}
                                                </h2>
                                                <p className="text-xs text-rimba-800 leading-relaxed font-normal">
                                                    {mod.subtitle}
                                                </p>
                                            </div>

                                            <div className="mt-6 pt-4 border-t border-rimba-50 flex items-center justify-between">
                                                
                                                <button
                                                    onClick={() => handleSelectGame(mod.id)}
                                                    className="px-5 py-2.5 rounded-xl bg-rimba-500 hover:bg-rimba-600 text-white font-display font-bold text-xs flex items-center gap-1.5 shadow-2xs transition-all active:scale-95 cursor-pointer"
                                                >
                                                    <Play className="w-3.5 h-3.5 fill-current" />
                                                    <span>Mulai Game</span>
                                                </button>
                                            </div>
                                        </div>
                                    </ConditionalAnimatedItem>
                                );
                            })}
                        </div>
                    </div>
                )}

            </div>
        </div>
    );
}

// (Komponen modul game 1–6 di bawahnya tetap sama persis)

// (Sisa implementasi komponen modul game 1–6 tetap sama persis seperti sebelumnya)

// =========================================================================
// MODUL GAME 1: WATER BOMBING RESCUE
// =========================================================================
function WaterDropGame({ bestScore, onScoreChange }: { bestScore: number; onScoreChange: (s: number) => void }) {
    const [score, setScore] = useState(0);
    const [combo, setCombo] = useState(0);
    const [feedback, setFeedback] = useState('Paskan bom air tepat di tengah kobaran api! Semakin tinggi skor, semakin kencang pesawat melaju.');
    const [planePos, setPlanePos] = useState(15);
    const [firePos, setFirePos] = useState(55);
    const [isWaterFalling, setIsWaterFalling] = useState(false);
    const [waterY, setWaterY] = useState(24);
    const [waterX, setWaterX] = useState(15);
    const [splash, setSplash] = useState(false);
    const [missEffect, setMissEffect] = useState(false);

    const planePosRef = useRef(15);
    const directionRef = useRef(1);

    const currentSpeed = Math.min(1.85, 0.45 + (score / 10) * 0.12);

    useEffect(() => {
        if (score > 0) {
            onScoreChange(score);
        }
    }, [score, onScoreChange]);

    useEffect(() => {
        let animId: number;
        const loop = () => {
            planePosRef.current += currentSpeed * directionRef.current;

            if (planePosRef.current >= 90) {
                directionRef.current = -1;
            } else if (planePosRef.current <= 10) {
                directionRef.current = 1;
            }

            setPlanePos(planePosRef.current);
            animId = requestAnimationFrame(loop);
        };

        animId = requestAnimationFrame(loop);
        return () => cancelAnimationFrame(animId);
    }, [currentSpeed]);

    useEffect(() => {
        if (!isWaterFalling) return;
        let animId: number;

        const fallLoop = () => {
            setWaterY((prevY) => {
                if (prevY >= 75) {
                    setIsWaterFalling(false);

                    const distance = Math.abs(waterX - firePos);
                    const isDirectHit = distance <= 4.5;

                    if (isDirectHit) {
                        setScore((s) => s + 10 + combo * 2);
                        setCombo((c) => c + 1);
                        setSplash(true);
                        setTimeout(() => setSplash(false), 500);
                        setFeedback('🎯 Tepat sasaran! Air mengenai titik api dalam simulasi.');

                        setFirePos(() => {
                            let newPos;
                            do {
                                newPos = Math.floor(Math.random() * 68) + 16;
                            } while (Math.abs(newPos - waterX) < 15);
                            return newPos;
                        });
                    } else {
                        setCombo(0);
                        setMissEffect(true);
                        setTimeout(() => setMissEffect(false), 400);
                        setFeedback('Meleset di simulasi. Air jatuh di luar sasaran.');
                    }
                    return 24;
                }

                return prevY + (2.6 + Math.min(1.2, (score / 10) * 0.08));
            });

            animId = requestAnimationFrame(fallLoop);
        };

        animId = requestAnimationFrame(fallLoop);
        return () => cancelAnimationFrame(animId);
    }, [isWaterFalling, waterX, firePos, combo, score]);

    const handleDrop = () => {
        if (isWaterFalling) return;
        setWaterX(planePosRef.current);
        setWaterY(24);
        setIsWaterFalling(true);
    };

    return (
        <div className="bg-white rounded-3xl p-4 sm:p-7 border border-rimba-100 shadow-sm space-y-4 sm:space-y-6">
            <div className="flex items-center justify-between border-b border-rimba-100 pb-3 sm:pb-4 gap-2">
                <div>
                    <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full bg-sky-100 text-sky-800">
                        Modul 01 &bull; Pilot Presisi
                    </span>
                    <h2 className="font-display font-extrabold text-lg sm:text-xl text-rimba-950 mt-0.5">
                        Water Bombing Pilot
                    </h2>
                </div>

                <div className="flex items-center gap-2 sm:gap-3">
                    <div className="text-right">
                        <span className="text-[10px] block font-bold text-slate-600">Terbaik: {bestScore}</span>
                        <span className="font-display font-extrabold text-base sm:text-lg text-sky-600 bg-sky-50 px-3 py-0.5 rounded-xl border border-sky-200 block">
                            Skor: {score}
                        </span>
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-between text-[11px] font-bold text-rimba-800 px-1">
                <span className="flex items-center gap-1">
                    <span>⚡ Kecepatan Terbang:</span>
                    <strong className="text-sky-700 font-extrabold">
                        {((currentSpeed / 0.45) * 100).toFixed(0)}%
                    </strong>
                </span>
                {combo > 1 && (
                    <span className="text-amber-800 bg-amber-100 px-2.5 py-0.5 rounded-full animate-bounce font-black">
                        🔥 {combo}x COMBO!
                    </span>
                )}
            </div>

            <div className="relative h-64 sm:h-76 w-full rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-rimba-200 bg-linear-to-b from-sky-400 via-sky-200 to-amber-100 select-none shadow-inner">
                <div
                    className="absolute will-change-transform z-20 flex flex-col items-center pointer-events-none"
                    style={{
                        left: `${planePos}%`,
                        top: '20%',
                        transform: `translate(-50%, -50%) ${directionRef.current === -1 ? 'scaleX(-1)' : 'scaleX(1)'}`
                    }}
                >
                    <span className="text-4xl sm:text-5xl filter drop-shadow-md select-none leading-none">
                        ✈️
                    </span>
                    <div className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-0.5 opacity-75" />
                </div>

                <div
                    className="absolute top-0 bottom-14 w-px border-l border-dashed border-sky-600/30 pointer-events-none -translate-x-1/2 z-10"
                    style={{ left: `${planePos}%` }}
                />

                {isWaterFalling && (
                    <div
                        className="absolute will-change-transform -translate-x-1/2 z-20 pointer-events-none"
                        style={{ left: `${waterX}%`, top: `${waterY}%` }}
                    >
                        <div className="relative flex flex-col items-center">
                            <Droplets className="w-6 h-6 sm:w-7 sm:h-7 text-blue-600 fill-blue-500 filter drop-shadow-[0_2px_6px_rgba(37,99,235,0.7)] animate-pulse" />
                            <div className="w-1 h-3 bg-linear-to-t from-sky-400 to-transparent rounded-full opacity-60" />
                        </div>
                    </div>
                )}

                {splash && (
                    <div
                        className="absolute bottom-12 -translate-x-1/2 text-center animate-in zoom-in-75 duration-200 z-30"
                        style={{ left: `${waterX}%` }}
                    >
                        <span className="text-3xl sm:text-4xl block animate-bounce">💦</span>
                        <span className="text-[10px] sm:text-xs font-black text-sky-950 bg-white/95 px-2.5 py-0.5 rounded-full shadow-md border border-sky-300">
                            PADAM! +{10 + (combo - 1) * 2}
                        </span>
                    </div>
                )}

                {missEffect && (
                    <div
                        className="absolute bottom-12 -translate-x-1/2 text-center animate-in fade-in duration-150 z-30"
                        style={{ left: `${waterX}%` }}
                    >
                        <span className="text-[10px] font-black text-rose-800 bg-rose-100 px-2 py-0.5 rounded-full shadow-xs border border-rose-300">
                            MELESET!
                        </span>
                    </div>
                )}

                <div className="absolute bottom-0 inset-x-0 h-14 sm:h-16 bg-linear-to-t from-emerald-800 to-emerald-700 border-t-4 border-emerald-600 flex items-center justify-around z-15">
                    <div
                        className="absolute -top-7 sm:-top-8 -translate-x-1/2 flex flex-col items-center transition-all duration-300"
                        style={{ left: `${firePos}%` }}
                    >
                        <div className="relative">
                            <Flame className="w-8 h-8 sm:w-9 sm:h-9 text-rose-600 fill-rose-500 animate-pulse filter drop-shadow-[0_0_12px_rgba(244,63,94,0.95)]" />
                            <span className="absolute -inset-1 bg-amber-400/40 rounded-full blur-xs -z-10" />
                        </div>

                        <div className="w-7 h-1.5 bg-rose-950/80 rounded-full border border-rose-400 flex items-center justify-center mt-0.5">
                            <div className="w-1.5 h-1.5 rounded-full bg-amber-300" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="p-3.5 sm:p-4 rounded-2xl bg-earth-soft border border-rimba-200 text-xs sm:text-sm text-rimba-900 font-medium flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-accent-sun shrink-0" />
                <span className="leading-snug">{feedback}</span>
            </div>

            <div className="flex items-center gap-2 sm:gap-3">
                <button
                    onClick={() => {
                        setScore(0);
                        setCombo(0);
                        setFeedback('Skor dan kecepatan direset kembali ke awal.');
                    }}
                    className="p-3.5 sm:px-4 sm:py-3.5 rounded-2xl bg-earth-soft hover:bg-rimba-100 text-rimba-800 text-xs font-bold border border-rimba-200 flex items-center justify-center gap-1.5 shrink-0 transition-colors cursor-pointer"
                    title="Reset Game"
                >
                    <RotateCcw className="w-4 h-4" />
                    <span className="hidden sm:inline">Ulangi</span>
                </button>

                <button
                    onClick={handleDrop}
                    disabled={isWaterFalling}
                    className="flex-1 py-4 sm:py-4 rounded-2xl bg-sky-500 hover:bg-sky-600 active:scale-95 disabled:opacity-50 text-white font-display font-black text-sm sm:text-base shadow-lg hover:shadow-sky-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                    <Droplets className="w-5 h-5 fill-current" />
                    <span>JATUHKAN AIR (SIMULASI)</span>
                </button>
            </div>
        </div>
    );
}

// =========================================================================
// MODUL GAME 2: PEATLAND WATER BLASTER
// =========================================================================
function PeatBlasterGame({ bestScore, onScoreChange }: { bestScore: number; onScoreChange: (s: number) => void }) {
    const [score, setScore] = useState(0);
    const [peatDepth, setPeatDepth] = useState(30);
    const [targetDepth, setTargetDepth] = useState(60);
    const [waterLevel, setWaterLevel] = useState(100);
    const [feedback, setFeedback] = useState('Gunakan slider untuk mengarahkan ujung pipa suntik ke kedalaman bara, lalu semprot!');
    const [isShooting, setIsShooting] = useState(false);

    useEffect(() => {
        if (score > 0) {
            onScoreChange(score);
        }
    }, [score, onScoreChange]);

    useEffect(() => {
        const timer = setInterval(() => {
            setWaterLevel((w) => Math.min(100, w + 4));
        }, 200);
        return () => clearInterval(timer);
    }, []);

    const handleShoot = () => {
        if (waterLevel < 15 || isShooting) return;

        setIsShooting(true);
        setWaterLevel((w) => Math.max(0, w - 20));

        setTimeout(() => {
            setIsShooting(false);
            const hit = Math.abs(peatDepth - targetDepth) < 12;
            if (hit) {
                setScore((s) => s + 10);
                setFeedback('Tepat sasaran! Air mencapai bara di dalam simulasi.');
                setTargetDepth(Math.floor(Math.random() * 65) + 25);
            } else {
                setFeedback('Meleset! Kedalaman suntikan air belum tepat sasaran.');
            }
        }, 250);
    };

    return (
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-rimba-100 shadow-sm space-y-6">
            <div className="flex items-center justify-between border-b border-rimba-100 pb-4">
                <div>
                    <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                        Modul 02 &bull; Suntik Tekanan Tinggi
                    </span>
                    <h2 className="font-display font-extrabold text-xl text-rimba-950 mt-1">Suntik Air Bara Gambut</h2>
                </div>
                <div className="flex items-center gap-3">
                    <span className="text-xs font-bold text-slate-500 bg-slate-100 px-3 py-1 rounded-xl">
                        Rekor: {bestScore}
                    </span>
                    <span className="font-display font-extrabold text-lg text-emerald-600 bg-emerald-50 px-4 py-1 rounded-2xl border border-emerald-200">
                        Bara Padam: {score / 10}
                    </span>
                </div>
            </div>

            <div className="relative h-72 rounded-3xl overflow-hidden border-2 border-amber-950 bg-linear-to-b from-amber-900 via-stone-900 to-black p-4 select-none shadow-inner flex flex-col justify-between">
                <div className="flex items-center justify-between text-[11px] font-bold text-amber-200 bg-black/60 backdrop-blur-xs px-3 py-1.5 rounded-full border border-amber-800/60 w-fit z-10">
                    <span>Kedalaman Nozzle Suntik: {peatDepth} cm</span>
                </div>

                <div
                    className="absolute left-1/2 -translate-x-1/2 w-5 bg-linear-to-r from-slate-300 via-slate-100 to-slate-400 border border-slate-600 rounded-b-lg shadow-xl transition-all duration-75 flex flex-col items-center justify-end z-10"
                    style={{ top: 0, height: `${peatDepth * 2.5}px` }}
                >
                    {isShooting && (
                        <div className="w-8 h-8 rounded-full bg-sky-400/80 animate-ping -mb-3" />
                    )}
                </div>

                <div
                    className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2 p-2 px-3 rounded-2xl bg-rose-950/90 border-2 border-rose-500 shadow-lg animate-pulse transition-all duration-500 z-5"
                    style={{ top: `${targetDepth * 2.5 - 20}px` }}
                >
                    <Flame className="w-6 h-6 text-rose-500 fill-rose-500" />
                    <span className="text-[10px] font-extrabold text-rose-200">Bara di Kedalaman {targetDepth}cm</span>
                </div>

                <div className="flex items-center justify-between text-[10px] text-amber-300 font-extrabold z-10">
                    <span>0 cm (Permukaan Rumput)</span>
                    <span>100 cm (Bawah Tanah Dalam)</span>
                </div>
            </div>

            <div className="space-y-4">
                <div>
                    <div className="flex justify-between text-xs font-bold text-rimba-950 mb-1">
                        <span>Arahkan Kedalaman Pipa Suntik:</span>
                        <span className="text-emerald-700">{peatDepth} cm</span>
                    </div>
                    <input
                        type="range"
                        min="15"
                        max="85"
                        value={peatDepth}
                        onChange={(e) => setPeatDepth(Number(e.target.value))}
                        className="w-full accent-emerald-600 h-3 bg-rimba-100 rounded-lg cursor-pointer"
                    />
                </div>

                <div className="space-y-1">
                    <div className="flex justify-between text-xs font-bold text-slate-700">
                        <span>Tekanan Air:</span>
                        <span>{Math.round(waterLevel)}%</span>
                    </div>
                    <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden p-0.5 border border-slate-200">
                        <div
                            className="h-full bg-sky-500 rounded-full transition-all duration-150"
                            style={{ width: `${waterLevel}%` }}
                        />
                    </div>
                </div>
            </div>

            <div className="p-4 rounded-2xl bg-earth-soft border border-rimba-200 text-xs text-rimba-900 font-semibold">
                {feedback}
            </div>

            <div className="flex justify-end">
                <button
                    onClick={handleShoot}
                    disabled={waterLevel < 15 || isShooting}
                    className="px-8 py-4 rounded-2xl bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 text-white font-display font-extrabold text-sm shadow-md transition-all active:scale-95 flex items-center gap-2 cursor-pointer"
                >
                    <Droplets className="w-5 h-5 fill-current" />
                    <span>JALANKAN SIMULASI PENYUNTIKAN AIR</span>
                </button>
            </div>
        </div>
    );
}

// =========================================================================
// MODUL GAME 3: ANIMAL RESCUE ESCAPE
// =========================================================================
interface Obstacle {
    id: number;
    x: number;
    type: 'fire' | 'smoke' | 'wood';
}

function AnimalRescueGame({ bestScore, onScoreChange }: { bestScore: number; onScoreChange: (s: number) => void }) {
    const [distance, setDistance] = useState(0);
    const [isGameOver, setIsGameOver] = useState(false);
    const [obstacles, setObstacles] = useState<Obstacle[]>([
        { id: 1, x: 100, type: 'fire' },
        { id: 2, x: 165, type: 'smoke' },
    ]);

    const kikoElementRef = useRef<HTMLDivElement | null>(null);

    const isJumpingRef = useRef(false);
    const jumpVelocityRef = useRef(0);
    const kikoYRef = useRef(0);
    const obstaclesRef = useRef<Obstacle[]>([
        { id: 1, x: 100, type: 'fire' },
        { id: 2, x: 165, type: 'smoke' },
    ]);
    const distanceRef = useRef(0);
    const isGameOverRef = useRef(false);
    const nextObstacleIdRef = useRef(3);

    const BASE_SPEED = 0.85;
    const MAX_SPEED = BASE_SPEED * 2.0;
    const currentSpeed = Math.min(MAX_SPEED, BASE_SPEED + (distance / 200) * 0.15);
    const speedPercentage = Math.min(200, Math.round((currentSpeed / BASE_SPEED) * 100));

    useEffect(() => {
        if (distance > 0) {
            onScoreChange(distance);
        }
    }, [distance, onScoreChange]);

    const triggerInstantJump = () => {
        if (isGameOverRef.current || isJumpingRef.current || kikoYRef.current > 0.5) return;

        isJumpingRef.current = true;
        jumpVelocityRef.current = 12.8;

        kikoYRef.current += 1.5;
        if (kikoElementRef.current) {
            kikoElementRef.current.style.transform = `translate3d(0, -${kikoYRef.current}px, 0)`;
        }
    };

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.code === 'Space' || e.code === 'ArrowUp') {
                e.preventDefault();
                triggerInstantJump();
            }
        };
        window.addEventListener('keydown', handleKeyDown, { passive: false });
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    useEffect(() => {
        if (isGameOver) return;
        isGameOverRef.current = false;

        let animId: number;

        const loop = () => {
            if (isGameOverRef.current) return;

            if (isJumpingRef.current) {
                kikoYRef.current += jumpVelocityRef.current;
                jumpVelocityRef.current -= 0.88;

                if (kikoYRef.current <= 0) {
                    kikoYRef.current = 0;
                    isJumpingRef.current = false;
                }

                if (kikoElementRef.current) {
                    kikoElementRef.current.style.transform = `translate3d(0, -${kikoYRef.current}px, 0)`;
                }
            }

            const updatedObstacles = obstaclesRef.current
                .map((obs) => ({
                    ...obs,
                    x: obs.x - currentSpeed,
                }))
                .filter((obs) => obs.x > -15);

            const lastObs = updatedObstacles[updatedObstacles.length - 1];
            if (!lastObs || lastObs.x < 75) {
                const gap = Math.max(52, 75 - Math.min(20, (distanceRef.current / 120) * 2));
                const types: ('fire' | 'smoke' | 'wood')[] = ['fire', 'smoke', 'wood'];
                const randomType = types[Math.floor(Math.random() * types.length)];

                updatedObstacles.push({
                    id: nextObstacleIdRef.current++,
                    x: (lastObs ? lastObs.x : 100) + gap + Math.random() * 12,
                    type: randomType,
                });
            }

            obstaclesRef.current = updatedObstacles;
            setObstacles(updatedObstacles);

            for (const obs of updatedObstacles) {
                const isNearX = obs.x > 13 && obs.x < 22;
                const isLowEnough = kikoYRef.current < 28;

                if (isNearX && isLowEnough) {
                    isGameOverRef.current = true;
                    setIsGameOver(true);
                    return;
                }
            }

            distanceRef.current += 1;
            setDistance(distanceRef.current);

            animId = requestAnimationFrame(loop);
        };

        animId = requestAnimationFrame(loop);
        return () => cancelAnimationFrame(animId);
    }, [isGameOver, currentSpeed]);

    const handleRestart = () => {
        distanceRef.current = 0;
        kikoYRef.current = 0;
        isJumpingRef.current = false;
        isGameOverRef.current = false;
        nextObstacleIdRef.current = 3;

        if (kikoElementRef.current) {
            kikoElementRef.current.style.transform = 'translate3d(0, 0, 0)';
        }

        obstaclesRef.current = [
            { id: 1, x: 100, type: 'fire' },
            { id: 2, x: 165, type: 'smoke' },
        ];
        setDistance(0);
        setObstacles(obstaclesRef.current);
        setIsGameOver(false);
    };

    return (
        <div className="bg-white rounded-3xl p-4 sm:p-7 border border-rimba-100 shadow-sm space-y-4 sm:space-y-6">
            <div className="flex items-center justify-between border-b border-rimba-100 pb-3 sm:pb-4 gap-2">
                <div>
                    <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full bg-amber-100 text-amber-900">
                        Modul 03 &bull; Lari Refleks Tanpa Batas
                    </span>
                    <h2 className="font-display font-extrabold text-lg sm:text-xl text-rimba-950 mt-0.5">
                        Lari Selamatkan Kiko
                    </h2>
                </div>
                <div className="flex items-center gap-2 sm:gap-3 text-right">
                    <div>
                        <span className="text-[10px] block font-bold text-slate-600">Rekor: {bestScore}m</span>
                        <span className="font-display font-extrabold text-base sm:text-lg text-amber-600 bg-amber-50 px-3 py-0.5 rounded-xl border border-amber-200 block">
                            Jarak: {distance}m
                        </span>
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-between text-[11px] font-bold text-rimba-800 px-1">
                <span className="flex items-center gap-1.5">
                    <span>⚡ Kecepatan Lari:</span>
                    <strong className="text-amber-700 font-extrabold bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200">
                        {speedPercentage}% {speedPercentage >= 200 && '(MAKSIMAL)'}
                    </strong>
                </span>
                <span className="text-slate-600 font-semibold hidden sm:inline">
                    💡 Sentuh layar atau tekan SPASI untuk lompat
                </span>
            </div>

            <div
                onPointerDown={(e) => {
                    e.preventDefault();
                    triggerInstantJump();
                }}
                className="relative h-64 sm:h-76 w-full rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-rimba-200 bg-linear-to-b from-amber-100 via-emerald-50 to-emerald-200 select-none shadow-inner cursor-pointer active:brightness-95 transition-all touch-none"
                title="Ketuk layar untuk lompat"
            >
                <div className="absolute inset-0 opacity-15 flex items-end justify-around pb-6 pointer-events-none">
                    <span className="text-5xl">🌲</span>
                    <span className="text-6xl">🌳</span>
                    <span className="text-4xl">🌴</span>
                    <span className="text-6xl">🌲</span>
                </div>

                <div
                    ref={kikoElementRef}
                    className="absolute left-[16%] bottom-6 will-change-transform flex flex-col items-center pointer-events-none z-20"
                    style={{ transform: 'translate3d(0, 0, 0)' }}
                >
                    <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-amber-600 text-white font-display font-extrabold flex items-center justify-center text-2xl sm:text-3xl shadow-lg border-2 border-amber-400">
                        🦧
                    </div>
                    <span className="text-[9px] font-extrabold text-amber-950 mt-0.5 bg-white/70 px-1.5 py-0.2 rounded-md">
                        Kiko
                    </span>
                </div>

                {obstacles.map((obs) => (
                    <div
                        key={obs.id}
                        className="absolute bottom-6 -translate-x-1/2 will-change-transform flex flex-col items-center pointer-events-none z-10"
                        style={{ left: `${obs.x}%` }}
                    >
                        <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-white/90 border-2 border-rose-400 shadow-md flex items-center justify-center text-xl sm:text-2xl animate-pulse">
                            {obs.type === 'fire' ? '🔥' : obs.type === 'smoke' ? '💨' : '🪵'}
                        </div>
                        <span className="text-[8px] sm:text-[9px] font-black text-rose-950 mt-0.5 whitespace-nowrap bg-rose-100/90 px-1.5 rounded">
                            {obs.type === 'fire' ? 'Bara Api' : obs.type === 'smoke' ? 'Asap Pekat' : 'Kayu Hangus'}
                        </span>
                    </div>
                ))}

                <div className="absolute bottom-0 inset-x-0 h-6 bg-emerald-800 border-t-2 border-emerald-600 z-15 pointer-events-none" />

                {isGameOver && (
                    <div
                        onPointerDown={(e) => e.stopPropagation()}
                        className="absolute inset-0 bg-rose-950/85 backdrop-blur-xs flex flex-col items-center justify-center p-6 text-white text-center z-30 animate-in fade-in"
                    >
                        <span className="text-4xl mb-1">⚠️</span>
                        <h3 className="font-display font-extrabold text-xl sm:text-2xl text-rose-300">
                            Kiko Terkena Rintangan Asap!
                        </h3>
                        <p className="text-xs sm:text-sm text-rose-100 mt-1 max-w-sm">
                            Kamu berhasil menyelamatkan Kiko berlari sejauh <strong className="text-amber-300 font-bold">{distance} meter</strong>.
                        </p>
                        <button
                            onPointerDown={(e) => {
                                e.stopPropagation();
                                handleRestart();
                            }}
                            className="mt-4 px-6 py-3 rounded-2xl bg-white text-rose-950 font-display font-extrabold text-xs sm:text-sm shadow-md active:scale-95 transition-all cursor-pointer"
                        >
                            Lari Lagi dari Awal
                        </button>
                    </div>
                )}
            </div>

            <div className="flex items-center justify-between gap-3">
                <p className="text-xs text-rimba-700 font-medium leading-snug">
                    📱 <strong>Di HP/Tablet:</strong> Sentuh layar arena di atas.<br className="hidden sm:inline" />
                    💻 <strong>Di Laptop:</strong> Tekan <strong>SPASI</strong> atau tombol oranye.
                </p>

                <button
                    onPointerDown={(e) => {
                        e.preventDefault();
                        triggerInstantJump();
                    }}
                    disabled={isGameOver}
                    className="px-8 sm:px-10 py-3.5 sm:py-4 rounded-2xl bg-amber-500 hover:bg-amber-600 active:scale-95 disabled:opacity-50 text-white font-display font-black text-sm shadow-md hover:shadow-amber-500/25 transition-all cursor-pointer shrink-0 touch-none"
                >
                    LOMPAT! 🚀
                </button>
            </div>
        </div>
    );
}

// =========================================================================
// MODUL GAME 4: CATCH & COMPOST
// =========================================================================
function CompostCatchGame({ bestScore, onScoreChange }: { bestScore: number; onScoreChange: (s: number) => void }) {
    const [score, setScore] = useState(0);
    const [combo, setCombo] = useState(0);
    const [feedback, setFeedback] = useState('Tangkap dedaunan gugur sebanyak-banyaknya dan hindari puntung rokok berbahaya!');

    const [basketX, setBasketX] = useState(50);
    const [itemX, setItemX] = useState(50);
    const [itemY, setItemY] = useState(-8);
    const [itemType, setItemType] = useState<'leaf' | 'cigarette'>('leaf');
    const [hitEffect, setHitEffect] = useState<'success' | 'danger' | null>(null);

    const basketXRef = useRef(50);
    const itemYRef = useRef(-8);
    const itemXRef = useRef(50);
    const itemTypeRef = useRef<'leaf' | 'cigarette'>('leaf');
    const arenaRef = useRef<HTMLDivElement | null>(null);
    const keysPressedRef = useRef<{ left: boolean; right: boolean }>({ left: false, right: false });

    const currentFallSpeed = Math.min(3.4, 1.25 + (score / 40) * 0.18);
    const speedPercentage = Math.min(220, Math.round((currentFallSpeed / 1.25) * 100));

    useEffect(() => {
        if (score > 0) {
            onScoreChange(score);
        }
    }, [score, onScoreChange]);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'ArrowLeft' || e.key === 'KeyA') {
                keysPressedRef.current.left = true;
            } else if (e.key === 'ArrowRight' || e.key === 'KeyD') {
                keysPressedRef.current.right = true;
            }
        };

        const handleKeyUp = (e: KeyboardEvent) => {
            if (e.key === 'ArrowLeft' || e.key === 'KeyA') {
                keysPressedRef.current.left = false;
            } else if (e.key === 'ArrowRight' || e.key === 'KeyD') {
                keysPressedRef.current.right = false;
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        window.addEventListener('keyup', handleKeyUp);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('keyup', handleKeyUp);
        };
    }, []);

    useEffect(() => {
        let animId: number;

        const loop = () => {
            if (keysPressedRef.current.left) {
                basketXRef.current = Math.max(12, basketXRef.current - 1.4);
                setBasketX(basketXRef.current);
            }
            if (keysPressedRef.current.right) {
                basketXRef.current = Math.min(88, basketXRef.current + 1.4);
                setBasketX(basketXRef.current);
            }

            itemYRef.current += currentFallSpeed;

            if (itemYRef.current >= 80) {
                const distance = Math.abs(itemXRef.current - basketXRef.current);
                const isCaught = distance <= 14;

                if (isCaught) {
                    if (itemTypeRef.current === 'leaf') {
                        setScore((s) => s + 10);
                        setCombo((c) => c + 1);
                        setHitEffect('success');
                        setFeedback('🍂 Nyam! Daun berhasil difermentasi jadi kompos.');
                    } else {
                        setScore((s) => Math.max(0, s - 15));
                        setCombo(0);
                        setHitEffect('danger');
                        setFeedback('⚠️ Awas! Bara rokok membakar tong kompos! Skor berkurang.');
                    }
                    setTimeout(() => setHitEffect(null), 350);
                }

                itemYRef.current = -8;
                itemXRef.current = Math.floor(Math.random() * 70) + 15;
                const dangerProbability = Math.min(0.45, 0.25 + (score / 150) * 0.15);
                itemTypeRef.current = Math.random() < dangerProbability ? 'cigarette' : 'leaf';

                setItemX(itemXRef.current);
                setItemType(itemTypeRef.current);
            }

            setItemY(itemYRef.current);
            animId = requestAnimationFrame(loop);
        };

        animId = requestAnimationFrame(loop);
        return () => cancelAnimationFrame(animId);
    }, [currentFallSpeed, score]);

    const updateBasketFromClientX = (clientX: number) => {
        if (!arenaRef.current) return;
        const rect = arenaRef.current.getBoundingClientRect();
        const relativeX = ((clientX - rect.left) / rect.width) * 100;
        const clampedX = Math.max(12, Math.min(88, relativeX));
        basketXRef.current = clampedX;
        setBasketX(clampedX);
    };

    const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
        if (e.buttons > 0 || e.pointerType === 'touch') {
            updateBasketFromClientX(e.clientX);
        }
    };

    const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
        updateBasketFromClientX(e.clientX);
    };

    return (
        <div className="bg-white rounded-3xl p-4 sm:p-7 border border-rimba-100 shadow-sm space-y-4 sm:space-y-6">
            <div className="flex items-center justify-between border-b border-rimba-100 pb-3 sm:pb-4 gap-2">
                <div>
                    <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full bg-lime-100 text-lime-900">
                        Modul 04 &bull; Tangkap & Pilah Kilat
                    </span>
                    <h2 className="font-display font-extrabold text-lg sm:text-xl text-rimba-950 mt-0.5">
                        Tangkap Daun Kompos
                    </h2>
                </div>
                <div className="flex items-center gap-2 sm:gap-3 text-right">
                    <div>
                        <span className="text-[10px] block font-bold text-slate-600">Rekor: {bestScore}</span>
                        <span className="font-display font-extrabold text-base sm:text-lg text-lime-700 bg-lime-50 px-3 py-0.5 rounded-xl border border-lime-200 block">
                            Skor: {score}
                        </span>
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-between text-[11px] font-bold text-rimba-800 px-1">
                <span className="flex items-center gap-1.5">
                    <span>⚡ Kecepatan Jatuh:</span>
                    <strong className="text-lime-800 font-extrabold bg-lime-50 px-2 py-0.5 rounded-md border border-lime-200">
                        {speedPercentage}%
                    </strong>
                </span>
                {combo > 1 && (
                    <span className="text-amber-800 bg-amber-100 px-2.5 py-0.5 rounded-full animate-bounce font-black">
                        🌟 {combo}x COMBO!
                    </span>
                )}
            </div>

            <div
                ref={arenaRef}
                onPointerDown={handlePointerDown}
                onPointerMove={handlePointerMove}
                className="relative h-80 sm:h-96 w-full rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-rimba-200 bg-linear-to-b from-sky-100 via-emerald-50 to-amber-100 select-none shadow-inner cursor-ew-resize touch-none"
                title="Geser jari atau kursor untuk memindahkan tong"
            >
                <div className="absolute top-2 inset-x-0 flex justify-between px-6 opacity-20 pointer-events-none text-3xl">
                    <span>🍃</span>
                    <span>🌿</span>
                    <span>🍂</span>
                </div>

                <div
                    className="absolute -translate-x-1/2 flex flex-col items-center pointer-events-none will-change-transform z-15"
                    style={{ left: `${itemX}%`, top: `${itemY}%` }}
                >
                    {itemType === 'leaf' ? (
                        <span className="text-4xl sm:text-5xl filter drop-shadow-md animate-spin" style={{ animationDuration: '8s' }}>
                            🍂
                        </span>
                    ) : (
                        <span className="text-4xl sm:text-5xl filter drop-shadow-md animate-pulse">
                            🚬
                        </span>
                    )}
                    <span className={`text-[9px] font-black px-2 py-0.5 rounded-full shadow-xs mt-1 border ${itemType === 'leaf'
                        ? 'bg-emerald-100 text-emerald-950 border-emerald-300'
                        : 'bg-rose-100 text-rose-950 border-rose-300'
                        }`}>
                        {itemType === 'leaf' ? '+DAUN' : 'BAHAYA BARA!'}
                    </span>
                </div>

                {hitEffect === 'success' && (
                    <div
                        className="absolute bottom-28 -translate-x-1/2 text-center animate-in zoom-in-75 duration-200 z-25 pointer-events-none"
                        style={{ left: `${basketX}%` }}
                    >
                        <span className="text-3xl block animate-bounce">🌿</span>
                        <span className="text-[11px] font-black text-emerald-900 bg-emerald-100 px-3 py-1 rounded-full border border-emerald-300 shadow-md">
                            +10 KOMPOS!
                        </span>
                    </div>
                )}
                {hitEffect === 'danger' && (
                    <div
                        className="absolute bottom-28 -translate-x-1/2 text-center animate-in zoom-in-75 duration-200 z-25 pointer-events-none"
                        style={{ left: `${basketX}%` }}
                    >
                        <span className="text-3xl block animate-bounce">💥</span>
                        <span className="text-[11px] font-black text-rose-900 bg-rose-100 px-3 py-1 rounded-full border border-rose-300 shadow-md">
                            -15 POIN!
                        </span>
                    </div>
                )}

                <div
                    className="absolute bottom-2 -translate-x-1/2 will-change-transform pointer-events-none z-20 transition-transform duration-75"
                    style={{ left: `${basketX}%` }}
                >
                    <div className="relative flex flex-col items-center">
                        <div className={`w-28 sm:w-32 h-5 rounded-[50%] bg-emerald-800 border-2 border-emerald-400 shadow-md flex items-center justify-center transition-all ${hitEffect === 'success' ? 'scale-110 bg-emerald-700' : hitEffect === 'danger' ? 'bg-rose-900 border-rose-400' : ''
                            }`}>
                            <div className="w-24 sm:w-28 h-2.5 rounded-[50%] bg-emerald-950/80 shadow-inner flex items-center justify-center">
                                <span className="text-[8px] font-black tracking-widest text-emerald-300 uppercase opacity-70">
                                    MASUK SINI
                                </span>
                            </div>
                        </div>

                        <div className={`w-24 sm:w-28 h-18 sm:h-20 bg-linear-to-b from-emerald-600 via-emerald-700 to-emerald-900 rounded-b-4xl border-x-2 border-b-2 border-emerald-400 shadow-2xl flex flex-col items-center justify-between py-1.5 relative overflow-hidden transition-all ${hitEffect === 'success' ? 'scale-105 brightness-110' : hitEffect === 'danger' ? 'bg-linear-to-b from-rose-700 to-rose-950 border-rose-400' : ''
                            }`}>
                            <div className="w-full flex flex-col gap-1.5 px-3 opacity-30 pointer-events-none">
                                <div className="w-full h-0.5 bg-white rounded-full" />
                                <div className="w-full h-0.5 bg-white rounded-full" />
                            </div>

                            <div className="flex flex-col items-center z-10 -mt-1">
                                <div className="flex items-center gap-3">
                                    <div className="w-2.5 h-3.5 bg-white rounded-full shadow-inner flex items-center justify-center">
                                        <div className="w-1.5 h-2 bg-emerald-950 rounded-full" />
                                    </div>
                                    <div className="w-2.5 h-3.5 bg-white rounded-full shadow-inner flex items-center justify-center">
                                        <div className="w-1.5 h-2 bg-emerald-950 rounded-full" />
                                    </div>
                                </div>

                                <div className={`mt-1 transition-all ${hitEffect === 'danger'
                                    ? 'w-3 h-2 border-t-2 border-white rounded-t-full'
                                    : 'w-4 h-2 border-b-2 border-white rounded-b-full'
                                    }`} />
                            </div>

                            <div className="bg-emerald-950/70 border border-emerald-400/50 px-2 py-0.5 rounded-full flex items-center gap-1 z-10 shadow-xs">
                                <span className="text-[10px]">🌱</span>
                                <span className="text-[8px] sm:text-[9px] font-black text-emerald-200 uppercase tracking-wider">
                                    KOMPOS
                                </span>
                            </div>

                            <div className="absolute top-0 bottom-0 left-2 w-2 bg-white/20 rounded-full blur-[1px] pointer-events-none" />
                        </div>

                        <div className="absolute top-6 -left-2 w-2.5 h-5 rounded-l-md border-2 border-r-0 border-emerald-400 bg-emerald-800" />
                        <div className="absolute top-6 -right-2 w-2.5 h-5 rounded-r-md border-2 border-l-0 border-emerald-400 bg-emerald-800" />
                    </div>
                </div>
            </div>

            <div className="p-3.5 sm:p-4 rounded-2xl bg-earth-soft border border-rimba-200 text-xs sm:text-sm text-rimba-900 font-medium flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-accent-sun shrink-0" />
                <span className="leading-snug">{feedback}</span>
            </div>

            <div className="flex items-center justify-between gap-3">
                <p className="text-xs text-rimba-700 font-medium leading-snug">
                    💻 <strong>Laptop:</strong> Tombol Panah Kanan & Kiri /<br className="hidden sm:inline" />
                    📱 <strong>HP / Tablet:</strong> Sentuh dan seret layar langsung.
                </p>

                <div className="flex items-center gap-2 shrink-0">
                    <button
                        onPointerDown={() => {
                            basketXRef.current = Math.max(12, basketXRef.current - 14);
                            setBasketX(basketXRef.current);
                        }}
                        className="px-4 py-3 rounded-2xl bg-earth-soft hover:bg-rimba-100 active:scale-95 text-rimba-950 font-display font-black text-sm border border-rimba-200 cursor-pointer shadow-xs"
                    >
                        &larr; Kiri
                    </button>
                    <button
                        onPointerDown={() => {
                            basketXRef.current = Math.min(88, basketXRef.current + 14);
                            setBasketX(basketXRef.current);
                        }}
                        className="px-4 py-3 rounded-2xl bg-earth-soft hover:bg-rimba-100 active:scale-95 text-rimba-950 font-display font-black text-sm border border-rimba-200 cursor-pointer shadow-xs"
                    >
                        Kanan &rarr;
                    </button>
                </div>
            </div>
        </div>
    );
}

// =========================================================================
// MODUL GAME 5: DRONE RADAR PATROL
// =========================================================================
function RadarPatrolGame({ bestScore, onScoreChange }: { bestScore: number; onScoreChange: (s: number) => void }) {
    const [score, setScore] = useState(0);
    const [hotspots, setHotspots] = useState<{ id: number; x: number; y: number }[]>([
        { id: 1, x: 30, y: 40 },
        { id: 2, x: 70, y: 35 },
    ]);

    useEffect(() => {
        if (score > 0) {
            onScoreChange(score);
        }
    }, [score, onScoreChange]);

    useEffect(() => {
        const timer = setInterval(() => {
            setHotspots((prev) => {
                if (prev.length >= 5) return prev;
                return [
                    ...prev,
                    {
                        id: Date.now(),
                        x: Math.floor(Math.random() * 65) + 18,
                        y: Math.floor(Math.random() * 65) + 18,
                    },
                ];
            });
        }, 1400);

        return () => clearInterval(timer);
    }, []);

    const handleScanHotspot = (id: number) => {
        setHotspots((prev) => prev.filter((h) => h.id !== id));
        setScore((s) => s + 1);
    };

    return (
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-rimba-100 shadow-sm space-y-6">
            <div className="flex items-center justify-between border-b border-rimba-100 pb-4">
                <div>
                    <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full bg-purple-100 text-purple-900">
                        Modul 05 &bull; Deteksi Dini Cepat
                    </span>
                    <h2 className="font-display font-extrabold text-xl text-rimba-950 mt-1">Drone Radar Pemindai</h2>
                </div>
                <div className="flex items-center gap-3">
                    <span className="text-xs font-bold text-slate-500 bg-slate-100 px-3 py-1 rounded-xl">
                        Rekor: {bestScore}
                    </span>
                    <span className="font-display font-extrabold text-lg text-purple-700 bg-purple-50 px-4 py-1 rounded-2xl border border-purple-200">
                        Terpindai: {score}
                    </span>
                </div>
            </div>

            <div className="relative h-72 rounded-3xl overflow-hidden border-2 border-purple-900 bg-slate-950 select-none shadow-inner flex items-center justify-center">
                <div className="w-56 h-56 rounded-full border border-purple-500/25 absolute animate-ping" style={{ animationDuration: '3s' }} />
                <div className="w-40 h-40 rounded-full border border-purple-500/40 absolute" />
                <div className="w-20 h-20 rounded-full border border-purple-500/60 absolute" />

                {hotspots.map((h) => (
                    <button
                        key={h.id}
                        onClick={() => handleScanHotspot(h.id)}
                        style={{ left: `${h.x}%`, top: `${h.y}%` }}
                        className="absolute -translate-x-1/2 -translate-y-1/2 p-3 rounded-full bg-rose-600/30 border-2 border-rose-400 text-rose-300 animate-bounce cursor-pointer flex flex-col items-center hover:scale-125 transition-transform"
                    >
                        <Flame className="w-6 h-6 fill-rose-500" />
                        <span className="text-[8px] font-black mt-0.5 bg-black/90 px-1.5 py-0.2 rounded text-rose-200">
                            PINDAI!
                        </span>
                    </button>
                ))}

                {hotspots.length === 0 && (
                    <span className="text-xs text-purple-300/80 font-bold bg-black/60 px-4 py-2 rounded-full border border-purple-800">
                        Semua Hutan Bersih! Menunggu sensor satelit berikutnya...
                    </span>
                )}
            </div>

            <div className="p-4 rounded-2xl bg-earth-soft border border-rimba-200 text-xs text-rimba-900 font-semibold flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-purple-600 shrink-0" />
                <span>Ketuk titik api secepat mungkin sebelum titik api menumpuk di radar!</span>
            </div>
        </div>
    );
}

// =========================================================================
// MODUL GAME 6: AERO BLASTER 113
// =========================================================================
type FireType = 'ember' | 'whirl' | 'log' | 'boss';
type PowerUpType = 'triple' | 'rapid' | 'shield';

interface FireTarget {
    id: number;
    x: number;
    y: number;
    hp: number;
    maxHp: number;
    type: FireType;
    zigzagDir?: number;
}

interface WaterBullet {
    id: number;
    x: number;
    y: number;
    vx: number;
}

interface PowerUpItem {
    id: number;
    x: number;
    y: number;
    type: PowerUpType;
}

function AeroShooterGame({ bestScore, onScoreChange }: { bestScore: number; onScoreChange: (s: number) => void }) {
    const [score, setScore] = useState(0);
    const [playerX, setPlayerX] = useState(50);
    const [isGameOver, setIsGameOver] = useState(false);
    const [fires, setFires] = useState<FireTarget[]>([]);
    const [bullets, setBullets] = useState<WaterBullet[]>([]);
    const [powerUps, setPowerUps] = useState<PowerUpItem[]>([]);

    const [activeTripleTime, setActiveTripleTime] = useState(0);
    const [activeRapidTime, setActiveRapidTime] = useState(0);
    const [hasShield, setHasShield] = useState(false);
    const [activePowerUpNotice, setActivePowerUpNotice] = useState<string | null>(null);

    const playerXRef = useRef(50);
    const firesRef = useRef<FireTarget[]>([]);
    const bulletsRef = useRef<WaterBullet[]>([]);
    const powerUpsRef = useRef<PowerUpItem[]>([]);
    const arenaRef = useRef<HTMLDivElement | null>(null);
    const keysRef = useRef<{ left: boolean; right: boolean }>({ left: false, right: false });
    const isGameOverRef = useRef(false);
    const scoreRef = useRef(0);

    const tripleUntilRef = useRef(0);
    const rapidUntilRef = useRef(0);
    const hasShieldRef = useRef(false);

    const fireCounterRef = useRef(1);
    const bulletCounterRef = useRef(1);
    const powerUpCounterRef = useRef(1);
    const lastShootTimeRef = useRef(0);
    const lastSpawnTimeRef = useRef(0);

    const fireBaseSpeed = Math.min(2.7, 0.9 + (score / 70) * 0.16);

    useEffect(() => {
        if (score > 0) {
            onScoreChange(score);
        }
    }, [score, onScoreChange]);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'ArrowLeft' || e.key === 'KeyA') keysRef.current.left = true;
            if (e.key === 'ArrowRight' || e.key === 'KeyD') keysRef.current.right = true;
        };

        const handleKeyUp = (e: KeyboardEvent) => {
            if (e.key === 'ArrowLeft' || e.key === 'KeyA') keysRef.current.left = false;
            if (e.key === 'ArrowRight' || e.key === 'KeyD') keysRef.current.right = false;
        };

        window.addEventListener('keydown', handleKeyDown);
        window.addEventListener('keyup', handleKeyUp);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('keyup', handleKeyUp);
        };
    }, []);

    useEffect(() => {
        if (isGameOver) return;
        isGameOverRef.current = false;

        let animId: number;

        const gameLoop = (time: number) => {
            if (isGameOverRef.current) return;

            const now = Date.now();

            const isTripleActive = now < tripleUntilRef.current;
            const isRapidActive = now < rapidUntilRef.current;
            setActiveTripleTime(isTripleActive ? Math.ceil((tripleUntilRef.current - now) / 1000) : 0);
            setActiveRapidTime(isRapidActive ? Math.ceil((rapidUntilRef.current - now) / 1000) : 0);
            setHasShield(hasShieldRef.current);

            if (keysRef.current.left) {
                playerXRef.current = Math.max(10, playerXRef.current - 1.6);
                setPlayerX(playerXRef.current);
            }
            if (keysRef.current.right) {
                playerXRef.current = Math.min(90, playerXRef.current + 1.6);
                setPlayerX(playerXRef.current);
            }

            const shootInterval = isRapidActive ? 105 : 230;
            if (time - lastShootTimeRef.current > shootInterval) {
                lastShootTimeRef.current = time;

                if (isTripleActive) {
                    bulletsRef.current.push(
                        { id: bulletCounterRef.current++, x: playerXRef.current, y: 79, vx: 0 },
                        { id: bulletCounterRef.current++, x: playerXRef.current - 2, y: 80, vx: -0.4 },
                        { id: bulletCounterRef.current++, x: playerXRef.current + 2, y: 80, vx: 0.4 }
                    );
                } else {
                    bulletsRef.current.push({
                        id: bulletCounterRef.current++,
                        x: playerXRef.current,
                        y: 80,
                        vx: 0,
                    });
                }
            }

            const spawnInterval = Math.max(650, 1350 - (scoreRef.current / 40) * 80);
            if (time - lastSpawnTimeRef.current > spawnInterval) {
                lastSpawnTimeRef.current = time;

                const currentS = scoreRef.current;
                let chosenType: FireType = 'ember';
                let hp = 1;

                const rand = Math.random();
                if (currentS >= 250 && rand < 0.15) {
                    chosenType = 'boss';
                    hp = 8;
                } else if (currentS >= 120 && rand < 0.3) {
                    chosenType = 'log';
                    hp = 3;
                } else if (currentS >= 50 && rand < 0.45) {
                    chosenType = 'whirl';
                    hp = 2;
                }

                firesRef.current.push({
                    id: fireCounterRef.current++,
                    x: Math.floor(Math.random() * 74) + 13,
                    y: -8,
                    hp,
                    maxHp: hp,
                    type: chosenType,
                    zigzagDir: Math.random() > 0.5 ? 1 : -1,
                });
            }

            bulletsRef.current = bulletsRef.current
                .map((b) => ({ ...b, x: b.x + b.vx, y: b.y - 4.2 }))
                .filter((b) => b.y > -5);

            firesRef.current = firesRef.current.map((f) => {
                let newX = f.x;
                let newDir = f.zigzagDir || 1;

                if (f.type === 'whirl') {
                    newX += newDir * 0.7;
                    if (newX >= 88) newDir = -1;
                    if (newX <= 12) newDir = 1;
                }

                const speedMod = f.type === 'boss' ? 0.65 : f.type === 'whirl' ? 1.25 : 1.0;

                return {
                    ...f,
                    x: newX,
                    zigzagDir: newDir,
                    y: f.y + fireBaseSpeed * speedMod,
                };
            });

            powerUpsRef.current = powerUpsRef.current
                .map((p) => ({ ...p, y: p.y + 1.2 }))
                .filter((p) => p.y < 105);

            for (const p of [...powerUpsRef.current]) {
                const catchX = Math.abs(p.x - playerXRef.current) < 9;
                const catchY = p.y >= 78 && p.y <= 88;

                if (catchX && catchY) {
                    powerUpsRef.current = powerUpsRef.current.filter((item) => item.id !== p.id);

                    if (p.type === 'triple') {
                        tripleUntilRef.current = Date.now() + 8000;
                        setActivePowerUpNotice('🔱 TRIPLE CANNON DIAKTIFKAN (8 Detik)!');
                    } else if (p.type === 'rapid') {
                        rapidUntilRef.current = Date.now() + 8000;
                        setActivePowerUpNotice('⚡ RAPID PUMP SUPER CEPAT (8 Detik)!');
                    } else if (p.type === 'shield') {
                        hasShieldRef.current = true;
                        setActivePowerUpNotice('🛡️ WATER SHIELD PELINDUNG DIAKTIFKAN!');
                    }

                    setTimeout(() => setActivePowerUpNotice(null), 2500);
                }
            }

            for (const bullet of [...bulletsRef.current]) {
                for (const fire of firesRef.current) {
                    const hitRadiusX = fire.type === 'boss' ? 14 : fire.type === 'log' ? 10 : 7.5;
                    const hitRadiusY = fire.type === 'boss' ? 10 : 7;
                    const hitX = Math.abs(bullet.x - fire.x) < hitRadiusX;
                    const hitY = Math.abs(bullet.y - fire.y) < hitRadiusY;

                    if (hitX && hitY) {
                        bulletsRef.current = bulletsRef.current.filter((b) => b.id !== bullet.id);
                        fire.hp -= 1;

                        if (fire.hp <= 0) {
                            firesRef.current = firesRef.current.filter((f) => f.id !== fire.id);

                            let addScore = 10;
                            if (fire.type === 'whirl') addScore = 25;
                            if (fire.type === 'log') addScore = 40;
                            if (fire.type === 'boss') addScore = 100;

                            scoreRef.current += addScore;
                            setScore(scoreRef.current);

                            const shouldDrop = fire.type === 'boss' || fire.type === 'log' || Math.random() < 0.22;
                            if (shouldDrop) {
                                const types: PowerUpType[] = ['triple', 'rapid', 'shield'];
                                const selected = types[Math.floor(Math.random() * types.length)];
                                powerUpsRef.current.push({
                                    id: powerUpCounterRef.current++,
                                    x: fire.x,
                                    y: fire.y,
                                    type: selected,
                                });
                            }
                        }
                        break;
                    }
                }
            }

            for (const fire of firesRef.current) {
                const hitRadius = fire.type === 'boss' ? 13 : 8.5;
                const hitPlayerX = Math.abs(fire.x - playerXRef.current) < hitRadius;
                const hitPlayerY = fire.y >= 78 && fire.y <= 90;

                if (hitPlayerX && hitPlayerY) {
                    if (hasShieldRef.current) {
                        hasShieldRef.current = false;
                        firesRef.current = firesRef.current.filter((f) => f.id !== fire.id);
                        setActivePowerUpNotice('🛡️ Perisai pecah menahan benturan api!');
                        setTimeout(() => setActivePowerUpNotice(null), 2000);
                        continue;
                    }

                    isGameOverRef.current = true;
                    setIsGameOver(true);
                    return;
                }

                if (fire.y > 96) {
                    isGameOverRef.current = true;
                    setIsGameOver(true);
                    return;
                }
            }

            setFires([...firesRef.current]);
            setBullets([...bulletsRef.current]);
            setPowerUps([...powerUpsRef.current]);

            animId = requestAnimationFrame(gameLoop);
        };

        animId = requestAnimationFrame(gameLoop);
        return () => cancelAnimationFrame(animId);
    }, [isGameOver, fireBaseSpeed]);

    const updatePlayerPosition = (clientX: number) => {
        if (!arenaRef.current || isGameOverRef.current) return;
        const rect = arenaRef.current.getBoundingClientRect();
        const relativeX = ((clientX - rect.left) / rect.width) * 100;
        const clampedX = Math.max(10, Math.min(90, relativeX));
        playerXRef.current = clampedX;
        setPlayerX(clampedX);
    };

    const handleRestart = () => {
        scoreRef.current = 0;
        playerXRef.current = 50;
        firesRef.current = [];
        bulletsRef.current = [];
        powerUpsRef.current = [];
        tripleUntilRef.current = 0;
        rapidUntilRef.current = 0;
        hasShieldRef.current = false;
        isGameOverRef.current = false;

        setScore(0);
        setPlayerX(50);
        setFires([]);
        setBullets([]);
        setPowerUps([]);
        setActiveTripleTime(0);
        setActiveRapidTime(0);
        setHasShield(false);
        setIsGameOver(false);
    };

    return (
        <div className="bg-white rounded-3xl p-4 sm:p-7 border border-rimba-100 shadow-sm space-y-4 sm:space-y-6">
            <div className="flex items-center justify-between border-b border-rimba-100 pb-3 sm:pb-4 gap-2">
                <div>
                    <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full bg-rose-100 text-rose-900">
                        Modul 06 &bull; Space Shooter Karhutla
                    </span>
                    <h2 className="font-display font-extrabold text-lg sm:text-xl text-rimba-950 mt-0.5">
                        Aero Blaster 113
                    </h2>
                </div>
                <div className="flex items-center gap-2 sm:gap-3 text-right">
                    <div>
                        <span className="text-[10px] block font-bold text-slate-600">Rekor: {bestScore}</span>
                        <span className="font-display font-extrabold text-base sm:text-lg text-rose-600 bg-rose-50 px-3 py-0.5 rounded-xl border border-rose-200 block">
                            Skor: {score}
                        </span>
                    </div>
                </div>
            </div>

            <div className="flex flex-wrap items-center justify-between text-[11px] font-bold text-rimba-800 gap-2 px-1">
                <div className="flex items-center gap-2">
                    {activeTripleTime > 0 && (
                        <span className="bg-sky-100 text-sky-950 px-2.5 py-0.5 rounded-full border border-sky-300 animate-pulse flex items-center gap-1 font-black">
                            🔱 Triple Shot: {activeTripleTime}s
                        </span>
                    )}
                    {activeRapidTime > 0 && (
                        <span className="bg-amber-100 text-amber-950 px-2.5 py-0.5 rounded-full border border-amber-300 animate-pulse flex items-center gap-1 font-black">
                            ⚡ Rapid Pump: {activeRapidTime}s
                        </span>
                    )}
                    {hasShield && (
                        <span className="bg-emerald-100 text-emerald-950 px-2.5 py-0.5 rounded-full border border-emerald-300 flex items-center gap-1 font-black">
                            🛡️ Water Shield Aktif
                        </span>
                    )}
                    {activeTripleTime === 0 && activeRapidTime === 0 && !hasShield && (
                        <span className="text-slate-500 font-semibold">Tumbangkan musuh besar untuk mengambil kapsul buff!</span>
                    )}
                </div>

                <span className="text-slate-600 font-bold hidden sm:inline">
                    🔥 Api Padam: {Math.floor(score / 10)}
                </span>
            </div>

            <div
                ref={arenaRef}
                onPointerDown={(e) => updatePlayerPosition(e.clientX)}
                onPointerMove={(e) => {
                    if (e.buttons > 0 || e.pointerType === 'touch') {
                        updatePlayerPosition(e.clientX);
                    }
                }}
                className="relative h-96 sm:h-110 w-full rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-stone-800 bg-linear-to-b from-stone-950 via-emerald-950 to-stone-900 select-none shadow-2xl cursor-crosshair touch-none"
            >
                <div className="absolute inset-0 opacity-10 flex flex-col justify-around pointer-events-none text-2xl">
                    <div className="flex justify-around"><span>🌲</span><span>🌳</span><span>🌲</span><span>🌳</span></div>
                    <div className="flex justify-around"><span>🌲</span><span>🌳</span><span>🌲</span><span>🌳</span></div>
                    <div className="flex justify-around"><span>🌲</span><span>🌳</span><span>🌲</span><span>🌳</span></div>
                </div>

                {activePowerUpNotice && (
                    <div className="absolute top-4 inset-x-0 text-center pointer-events-none z-35 animate-in fade-in zoom-in-95">
                        <span className="bg-white/95 text-sky-950 font-black text-xs px-4 py-1.5 rounded-full shadow-lg border border-sky-400">
                            {activePowerUpNotice}
                        </span>
                    </div>
                )}

                {bullets.map((b) => (
                    <div
                        key={b.id}
                        className="absolute -translate-x-1/2 will-change-transform pointer-events-none z-15"
                        style={{ left: `${b.x}%`, top: `${b.y}%` }}
                    >
                        <div className="w-2.5 h-6 rounded-full bg-linear-to-t from-sky-400 to-blue-500 shadow-[0_0_8px_#38bdf8] animate-pulse" />
                    </div>
                ))}

                {powerUps.map((p) => (
                    <div
                        key={p.id}
                        className="absolute -translate-x-1/2 -translate-y-1/2 will-change-transform pointer-events-none z-25 flex flex-col items-center animate-bounce"
                        style={{ left: `${p.x}%`, top: `${p.y}%` }}
                    >
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm shadow-lg border-2 ${p.type === 'triple'
                            ? 'bg-sky-500 border-sky-200 text-white'
                            : p.type === 'rapid'
                                ? 'bg-amber-500 border-amber-200 text-white'
                                : 'bg-emerald-500 border-emerald-200 text-white'
                            }`}>
                            {p.type === 'triple' ? '🔱' : p.type === 'rapid' ? '⚡' : '🛡️'}
                        </div>
                        <span className="text-[7px] font-black uppercase text-white bg-black/70 px-1 rounded mt-0.5">
                            {p.type}
                        </span>
                    </div>
                ))}

                {fires.map((f) => (
                    <div
                        key={f.id}
                        className="absolute -translate-x-1/2 -translate-y-1/2 will-change-transform pointer-events-none z-20 flex flex-col items-center"
                        style={{ left: `${f.x}%`, top: `${f.y}%` }}
                    >
                        <span className={`filter drop-shadow-[0_0_14px_rgba(239,68,68,0.95)] ${f.type === 'boss' ? 'text-5xl animate-bounce' :
                            f.type === 'log' ? 'text-4xl' :
                                f.type === 'whirl' ? 'text-4xl animate-spin' : 'text-3xl animate-pulse'
                            }`} style={{ animationDuration: f.type === 'whirl' ? '3s' : undefined }}>
                            {f.type === 'boss' ? '🌋🔥' : f.type === 'log' ? '🪵🔥' : f.type === 'whirl' ? '🌪️' : '🔥'}
                        </span>

                        {f.maxHp > 1 && (
                            <div className="w-8 sm:w-10 h-1.5 bg-black/80 rounded-full overflow-hidden border border-rose-500/60 mt-1">
                                <div
                                    className="h-full bg-rose-500 transition-all duration-75"
                                    style={{ width: `${(f.hp / f.maxHp) * 100}%` }}
                                />
                            </div>
                        )}
                    </div>
                ))}

                <div
                    className="absolute bottom-6 -translate-x-1/2 will-change-transform pointer-events-none z-30 transition-transform duration-75 flex flex-col items-center"
                    style={{ left: `${playerX}%` }}
                >
                    {hasShield && (
                        <div className="w-16 h-16 rounded-full border-2 border-emerald-400 bg-emerald-400/20 absolute -top-3 animate-ping opacity-60 pointer-events-none" />
                    )}

                    <div className="relative">
                        <span className="text-4xl sm:text-5xl filter drop-shadow-[0_4px_10px_rgba(56,189,248,0.7)] block">
                            🚁
                        </span>
                        <div className="w-2 h-2 rounded-full bg-sky-400 absolute -bottom-1 left-1/2 -translate-x-1/2 animate-ping" />
                    </div>

                    <span className={`text-[8px] font-black px-1.5 py-0.2 rounded-md border mt-0.5 whitespace-nowrap ${hasShield ? 'bg-emerald-950 text-emerald-300 border-emerald-400' : 'bg-sky-950/90 text-sky-200 border-sky-400/40'
                        }`}>
                        AERO-113
                    </span>
                </div>

                <div className="absolute bottom-0 inset-x-0 h-4 bg-linear-to-t from-amber-950 to-transparent border-t border-rose-500/40 pointer-events-none" />

                {isGameOver && (
                    <div
                        onPointerDown={(e) => e.stopPropagation()}
                        className="absolute inset-0 bg-stone-950/90 backdrop-blur-xs flex flex-col items-center justify-center p-6 text-white text-center z-40 animate-in fade-in"
                    >
                        <span className="text-4xl mb-1">🔥⚠️</span>
                        <h3 className="font-display font-extrabold text-2xl text-rose-400">
                            Pertahanan Rimba Tertembus Api!
                        </h3>
                        <p className="text-xs sm:text-sm text-stone-300 mt-1 max-w-sm">
                            Dalam simulasi ini, kamu mencetak rekor <strong className="text-amber-300 font-bold">{score} poin</strong>.
                        </p>
                        <button
                            onPointerDown={(e) => {
                                e.stopPropagation();
                                handleRestart();
                            }}
                            className="mt-4 px-7 py-3 rounded-2xl bg-rose-600 hover:bg-rose-500 text-white font-display font-extrabold text-xs sm:text-sm shadow-lg shadow-rose-600/30 active:scale-95 transition-all cursor-pointer"
                        >
                            Terbangkan Ulang Helikopter
                        </button>
                    </div>
                )}
            </div>

            <div className="flex items-center justify-between gap-3">
                <p className="text-xs text-rimba-700 font-medium leading-snug">
                    📱 <strong>HP / Tablet:</strong> Sentuh dan seret layar untuk mengarahkan helikopter.<br className="hidden sm:inline" />
                    💻 <strong>Laptop:</strong> Gunakan tombol panah <strong>Kiri & Kanan</strong> atau tombol <strong>A & D</strong>.
                </p>

                <div className="flex items-center gap-2 shrink-0">
                    <button
                        onPointerDown={() => {
                            playerXRef.current = Math.max(10, playerXRef.current - 12);
                            setPlayerX(playerXRef.current);
                        }}
                        className="px-4 py-3 rounded-2xl bg-earth-soft hover:bg-rimba-100 active:scale-95 text-rimba-950 font-display font-black text-sm border border-rimba-200 cursor-pointer shadow-xs"
                    >
                        &larr; Kiri
                    </button>
                    <button
                        onPointerDown={() => {
                            playerXRef.current = Math.min(90, playerXRef.current + 12);
                            setPlayerX(playerXRef.current);
                        }}
                        className="px-4 py-3 rounded-2xl bg-earth-soft hover:bg-rimba-100 active:scale-95 text-rimba-950 font-display font-black text-sm border border-rimba-200 cursor-pointer shadow-xs"
                    >
                        Kanan &rarr;
                    </button>
                </div>
            </div>
        </div>
    );
}