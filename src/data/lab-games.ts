import { Plane, Droplets, Trees, Wind, Crosshair, Flame } from 'lucide-react';
import React from 'react';

export type GameId =
    | 'water-drop'
    | 'peat-blaster'
    | 'animal-rescue'
    | 'compost-catch'
    | 'radar-patrol'
    | 'aero-shooter'; // Modul baru

export interface GameModuleMeta {
    id: GameId;
    title: string;
    badge: string;
    subtitle: string;
    icon: React.ComponentType<{ className?: string }>;
    accentColor: string;
}

export const LAB_GAME_MODULES: GameModuleMeta[] = [
    {
        id: 'water-drop',
        title: 'Water Bombing Pilot',
        badge: 'Modul Game 01',
        subtitle: 'Lihat simulasi pesawat pemadam membantu petugas dari udara. Pesawat hanya dioperasikan oleh petugas terlatih.',
        icon: Plane,
        accentColor: 'from-sky-500 to-blue-600',
    },
    {
        id: 'peat-blaster',
        title: 'Suntik Air Bara Gambut',
        badge: 'Modul Game 02',
        subtitle: 'Kenali cara petugas terlatih menangani bara tersembunyi di dalam tanah gambut.',
        icon: Droplets,
        accentColor: 'from-emerald-500 to-teal-600',
    },
    {
        id: 'animal-rescue',
        title: 'Lari Selamatkan Kiko',
        badge: 'Modul Game 03',
        subtitle: 'Bantu Kiko menjauh dari api dan asap menuju tempat yang lebih aman.',
        icon: Trees,
        accentColor: 'from-amber-500 to-orange-600',
    },
    {
        id: 'compost-catch',
        title: 'Tangkap Daun Kompos',
        badge: 'Modul Game 04',
        subtitle: 'Kumpulkan daun untuk kompos sambil belajar menjauhi benda yang masih membara.',
        icon: Wind,
        accentColor: 'from-lime-500 to-emerald-600',
    },
    {
        id: 'radar-patrol',
        title: 'Drone Radar Pemindai',
        badge: 'Modul Game 05',
        subtitle: 'Lihat bagaimana drone membantu petugas memantau kawasan hutan dari jarak aman.',
        icon: Crosshair,
        accentColor: 'from-purple-500 to-indigo-600',
    },
    {
        id: 'aero-shooter',
        title: 'Aero Blaster 113',
        badge: 'Modul Game 06',
        subtitle: 'Permainan ini menampilkan simulasi tugas helikopter pemadam yang dioperasikan petugas.',
        icon: Flame,
        accentColor: 'from-rose-500 to-red-600',
    },
];