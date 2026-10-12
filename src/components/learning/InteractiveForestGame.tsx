'use client';

import React, { useState } from 'react';
import {
    Flame,
    Trees,
    Trash2,
    Droplets,
    Sparkles,
    RotateCcw,
    CheckCircle2,
    AlertTriangle,
    Sun,
    ShieldCheck,
    Recycle
} from 'lucide-react';

interface HazardItem {
    id: string;
    name: string;
    category: 'fire' | 'compost' | 'glass';
    resolvedAction: 'water' | 'compost' | 'collect';
    status: 'active' | 'resolved';
    x: number; // Posisi horizontal (%)
    y: number; // Posisi vertikal (%)
    warningText: string;
    successText: string;
}

const INITIAL_ITEMS: HazardItem[] = [
    {
        id: 'item-1',
        name: 'Bara Puntung Rokok',
        category: 'fire',
        resolvedAction: 'water',
        status: 'active',
        x: 22,
        y: 65,
        warningText: 'Awas! Bara rokok masih menyala dekat semak kering!',
        successText: 'Hebat! Kamu menyiram bara sampai dingin dan mati total.',
    },
    {
        id: 'item-2',
        name: 'Tumpukan Daun Kering',
        category: 'compost',
        resolvedAction: 'compost',
        status: 'active',
        x: 75,
        y: 70,
        warningText: 'Jangan dibakar! Daun ini bisa diolah jadi pupuk subur.',
        successText: 'Pintar! Daun dimasukkan ke lubang tanah menjadi kompos.',
    },
    {
        id: 'item-3',
        name: 'Botol Kaca Bening',
        category: 'glass',
        resolvedAction: 'collect',
        status: 'active',
        x: 48,
        y: 40,
        warningText: 'Kaca bening di bawah matahari terik bisa memfokuskan panas!',
        successText: 'Bagus! Botol kaca dipungut agar tidak membakar rumput.',
    },
    {
        id: 'item-4',
        name: 'Percikan Api Sampah',
        category: 'fire',
        resolvedAction: 'water',
        status: 'active',
        x: 82,
        y: 30,
        warningText: 'Api kecil di sudut kebun mulai membesar ditiup angin!',
        successText: 'Padam! Kamu menyemprot air sebelum apinya menyambar dahan.',
    },
];

export const InteractiveForestGame = () => {
    const [items, setItems] = useState<HazardItem[]>(INITIAL_ITEMS);
    const [selectedTool, setSelectedTool] = useState<'water' | 'compost' | 'collect'>('water');
    const [message, setMessage] = useState<string>('Pilih alat aksi di bawah, lalu ketuk objek bahaya di halaman hutan!');
    const [messageType, setMessageType] = useState<'info' | 'success' | 'warn'>('info');

    const resolvedCount = items.filter((item) => item.status === 'resolved').length;
    const isMissionCompleted = resolvedCount === items.length;

    const handleInteract = (item: HazardItem) => {
        if (item.status === 'resolved') {
            setMessage(`Objek "${item.name}" sudah kamu amankan sebelumnya.`);
            setMessageType('info');
            return;
        }

        if (item.resolvedAction === selectedTool) {
            // Tindakan Cocok
            setItems((prev) =>
                prev.map((i) => (i.id === item.id ? { ...i, status: 'resolved' } : i))
            );
            setMessage(item.successText);
            setMessageType('success');
        } else {
            // Tindakan Keliru
            setMessage(`Kurang tepat! Gunakan alat yang sesuai untuk ${item.name}. ${item.warningText}`);
            setMessageType('warn');
        }
    };

    const handleResetGame = () => {
        setItems(INITIAL_ITEMS);
        setSelectedTool('water');
        setMessage('Eksperimen dimulai ulang! Amankan 4 benda berbahaya di pekarangan.');
        setMessageType('info');
    };

    return (
        <div className="bg-white rounded-3xl p-6 sm:p-9 border border-rimba-100 shadow-sm space-y-6">

            {/* Header Mini Game */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-rimba-100 gap-3">
                <div>
                    <span className="text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-full bg-rimba-100 text-rimba-800 tracking-wider">
                        Simulasi Taktil Interaktif
                    </span>
                    <h3 className="font-display font-extrabold text-xl text-rimba-950 mt-1">
                        Operasi Sahabat Rimba: Amankan Pekarangan
                    </h3>
                    <p className="text-xs sm:text-sm text-rimba-800 font-medium mt-0.5">
                        Pilih alat yang tepat, lalu ketuk benda-benda berbahaya di lapangan sebelum memicu api!
                    </p>
                </div>

                <div className="flex items-center gap-3 self-start sm:self-auto">
                    <span className="text-xs font-bold text-rimba-700 bg-earth-soft px-3 py-1.5 rounded-xl border border-rimba-200">
                        Teramankan: <strong className="text-rimba-950 font-extrabold">{resolvedCount} / {items.length}</strong>
                    </span>
                    <button
                        onClick={handleResetGame}
                        className="p-2 rounded-xl bg-earth-soft hover:bg-rimba-100 text-rimba-800 border border-rimba-200 transition-colors"
                        title="Reset Game"
                    >
                        <RotateCcw className="w-4 h-4" />
                    </button>
                </div>
            </div>

            {/* Area Lapangan Interaktif (Playground Zone) */}
            <div className="relative w-full h-80 sm:h-96 rounded-3xl overflow-hidden border-2 border-rimba-200 bg-gradient-to-b from-amber-100/60 via-emerald-100/50 to-emerald-200/60 shadow-inner select-none">

                {/* Latar Belakang Lapangan */}
                <div className="absolute top-4 left-6 flex items-center gap-1.5 text-xs font-bold text-amber-800 bg-white/70 backdrop-blur-xs px-3 py-1 rounded-full border border-amber-200">
                    <Sun className="w-4 h-4 text-amber-500 animate-spin" style={{ animationDuration: '10s' }} />
                    <span>Musim Kemarau Terik (34°C)</span>
                </div>

                <div className="absolute bottom-4 left-6 flex items-center gap-2 text-xs font-bold text-emerald-900 bg-white/80 px-3 py-1 rounded-full border border-emerald-200">
                    <Trees className="w-4 h-4 text-emerald-700" />
                    <span>Semak & Pekarangan Kering</span>
                </div>

                {/* Objek-Objek Lapangan yang Dapat Diketuk */}
                {items.map((item) => {
                    const isDone = item.status === 'resolved';

                    return (
                        <button
                            key={item.id}
                            onClick={() => handleInteract(item)}
                            style={{ top: `${item.y}%`, left: `${item.x}%` }}
                            className={`absolute -translate-x-1/2 -translate-y-1/2 p-2.5 rounded-2xl transition-all duration-300 flex flex-col items-center group cursor-pointer ${isDone
                                    ? 'bg-emerald-50/90 border-2 border-emerald-400 scale-90 opacity-80'
                                    : 'bg-white border-2 border-rose-400 shadow-md hover:scale-110 active:scale-95 animate-pulse'
                                }`}
                        >
                            {/* Ikon Objek */}
                            <div className="w-8 h-8 rounded-xl flex items-center justify-center">
                                {item.category === 'fire' && (
                                    isDone ? <CheckCircle2 className="w-6 h-6 text-emerald-600" /> : <Flame className="w-6 h-6 text-rose-600 fill-rose-500" />
                                )}
                                {item.category === 'compost' && (
                                    isDone ? <CheckCircle2 className="w-6 h-6 text-emerald-600" /> : <Trees className="w-6 h-6 text-amber-700" />
                                )}
                                {item.category === 'glass' && (
                                    isDone ? <CheckCircle2 className="w-6 h-6 text-emerald-600" /> : <Trash2 className="w-6 h-6 text-sky-600" />
                                )}
                            </div>

                            {/* Label Nama Objek */}
                            <span className={`text-[10px] font-extrabold px-2 py-0.5 rounded-md mt-1 whitespace-nowrap shadow-2xs ${isDone ? 'bg-emerald-100 text-emerald-900' : 'bg-rose-100 text-rose-950'
                                }`}>
                                {isDone ? `${item.name} (Aman)` : item.name}
                            </span>
                        </button>
                    );
                })}

                {/* Notifikasi Penyelesaian Jika Semua Selesai */}
                {isMissionCompleted && (
                    <div className="absolute inset-0 bg-rimba-950/70 backdrop-blur-xs flex flex-col items-center justify-center text-center p-6 text-white animate-in fade-in duration-300">
                        <div className="w-16 h-16 rounded-3xl bg-emerald-500/30 border-2 border-emerald-400 flex items-center justify-center text-emerald-300 mb-3">
                            <ShieldCheck className="w-9 h-9" />
                        </div>
                        <h4 className="font-display font-extrabold text-xl text-emerald-300">
                            Pekarangan 100% Aman dari Bahaya Api!
                        </h4>
                        <p className="text-xs sm:text-sm text-emerald-100 max-w-md mt-1 leading-relaxed">
                            Kamu berhasil mematikan bara api, mengomposkan dedaunan gugur, dan mengamankan botol kaca. Lingkungan menjadi bersih dan bebas asap!
                        </p>
                        <button
                            onClick={handleResetGame}
                            className="mt-4 px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-display font-bold text-xs shadow-md transition-all flex items-center gap-1.5"
                        >
                            <RotateCcw className="w-3.5 h-3.5" />
                            <span>Mainkan Sekali Lagi</span>
                        </button>
                    </div>
                )}
            </div>

            {/* Kotak Pesan Instruksi & Feedback Real-Time */}
            <div className={`p-4 rounded-2xl border text-xs sm:text-sm font-semibold flex items-start gap-3 transition-colors ${messageType === 'success'
                    ? 'bg-emerald-50 border-emerald-200 text-emerald-950'
                    : messageType === 'warn'
                        ? 'bg-rose-50 border-rose-200 text-rose-950'
                        : 'bg-earth-soft border-rimba-200 text-rimba-900'
                }`}>
                {messageType === 'success' ? (
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                ) : messageType === 'warn' ? (
                    <AlertTriangle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                ) : (
                    <Sparkles className="w-5 h-5 text-rimba-600 shrink-0 mt-0.5" />
                )}
                <p className="leading-relaxed font-medium flex-1">{message}</p>
            </div>

            {/* Alat Aksi (Tool Selector Bar) */}
            <div className="space-y-2">
                <label className="text-xs font-bold text-rimba-950 block uppercase tracking-wider">
                    Pilih Alat Tindakanmu:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">

                    <button
                        onClick={() => setSelectedTool('water')}
                        className={`p-3.5 rounded-2xl border flex items-center gap-3 transition-all text-left ${selectedTool === 'water'
                                ? 'bg-sky-50 border-sky-400 ring-2 ring-sky-300 text-sky-950 shadow-xs'
                                : 'bg-white border-rimba-100 hover:border-rimba-200 text-rimba-900'
                            }`}
                    >
                        <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center shrink-0">
                            <Droplets className="w-5 h-5" />
                        </div>
                        <div>
                            <h4 className="font-display font-bold text-xs sm:text-sm">Semprot Air</h4>
                            <p className="text-[11px] text-rimba-700 leading-tight">Untuk bara rokok & percikan api</p>
                        </div>
                    </button>

                    <button
                        onClick={() => setSelectedTool('compost')}
                        className={`p-3.5 rounded-2xl border flex items-center gap-3 transition-all text-left ${selectedTool === 'compost'
                                ? 'bg-amber-50 border-amber-400 ring-2 ring-amber-300 text-amber-950 shadow-xs'
                                : 'bg-white border-rimba-100 hover:border-rimba-200 text-rimba-900'
                            }`}
                    >
                        <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
                            <Recycle className="w-5 h-5" />
                        </div>
                        <div>
                            <h4 className="font-display font-bold text-xs sm:text-sm">Olah ke Kompos</h4>
                            <p className="text-[11px] text-rimba-700 leading-tight">Untuk daun kering pekarangan</p>
                        </div>
                    </button>

                    <button
                        onClick={() => setSelectedTool('collect')}
                        className={`p-3.5 rounded-2xl border flex items-center gap-3 transition-all text-left ${selectedTool === 'collect'
                                ? 'bg-emerald-50 border-emerald-400 ring-2 ring-emerald-300 text-emerald-950 shadow-xs'
                                : 'bg-white border-rimba-100 hover:border-rimba-200 text-rimba-900'
                            }`}
                    >
                        <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                            <Trash2 className="w-5 h-5" />
                        </div>
                        <div>
                            <h4 className="font-display font-bold text-xs sm:text-sm">Amankan Botol Kaca</h4>
                            <p className="text-[11px] text-rimba-700 leading-tight">Cegah titik fokus panas matahari</p>
                        </div>
                    </button>

                </div>
            </div>

        </div>
    );
};