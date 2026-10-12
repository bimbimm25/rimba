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
        subtitle: 'Kendalikan pesawat patroli dan jatuhkan bom air tepat di atas titik api semak tanpa henti!',
        icon: Plane,
        accentColor: 'from-sky-500 to-blue-600',
    },
    {
        id: 'peat-blaster',
        title: 'Suntik Air Bara Gambut',
        badge: 'Modul Game 02',
        subtitle: 'Tembakkan air bertekanan ke dalam tanah gambut dan padamkan sebanyak mungkin bara rahasia!',
        icon: Droplets,
        accentColor: 'from-emerald-500 to-teal-600',
    },
    {
        id: 'animal-rescue',
        title: 'Lari Selamatkan Kiko',
        badge: 'Modul Game 03',
        subtitle: 'Bantu Kiko si Orangutan berlari sejauh mungkin menghindari kobaran api dan asap tebal!',
        icon: Trees,
        accentColor: 'from-amber-500 to-orange-600',
    },
    {
        id: 'compost-catch',
        title: 'Tangkap Daun Kompos',
        badge: 'Modul Game 04',
        subtitle: 'Gerakkan keranjang untuk menangkap daun sebanyak-banyaknya sambil menghindari bara rokok!',
        icon: Wind,
        accentColor: 'from-lime-500 to-emerald-600',
    },
    {
        id: 'radar-patrol',
        title: 'Drone Radar Pemindai',
        badge: 'Modul Game 05',
        subtitle: 'Uji kecepatan refleksmu memindai titik api yang muncul di hutan rimba secara terus menerus!',
        icon: Crosshair,
        accentColor: 'from-purple-500 to-indigo-600',
    },
    {
        id: 'aero-shooter',
        title: 'Aero Blaster 113',
        badge: 'Modul Game 06',
        subtitle: 'Tembakkan peluru air dari helikopter pemadam untuk menembus kepulan bara api hutan!',
        icon: Flame,
        accentColor: 'from-rose-500 to-red-600',
    },
];