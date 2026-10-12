'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
    Compass,
    Trophy,
    CheckCircle2,
    XCircle,
    HelpCircle,
    RotateCcw,
    Sparkles,
    X,
    BookOpen,
    Info,
    Check,
    MapPin
} from 'lucide-react';

type ZoneType = 'MATERIAL' | 'QUIZ';

interface QuestZone {
    id: string;
    type: ZoneType;
    name: string;
    x: number;
    y: number;
    badge: string;
    title: string;
    lore: string;
    materialBody?: string[];
    funFact?: string;
    question?: string;
    options?: {
        text: string;
        isCorrect: boolean;
        explanation: string;
    }[];
    completed: boolean;
}

// Dimensi Peta RPG
const WORLD_WIDTH = 2400;
const WORLD_HEIGHT = 1600;

// Ukuran Layar Tampilan (Kamera)
const VIEWPORT_WIDTH = 800;
const VIEWPORT_HEIGHT = 500;

// 10 Titik Cerita (Bahasa Ramah Anak SD & Tidak Berbelit)
const INITIAL_QUESTS: QuestZone[] = [
    // ==========================================
    // 5 POS MATERI (BACAAN RINGKAS & JELAS)
    // ==========================================
    {
        id: 'mat-1',
        type: 'MATERIAL',
        name: 'Pondok Tanah Gambut',
        badge: 'Materi 01',
        x: 320,
        y: 280,
        title: 'Apa Itu Tanah Gambut?',
        lore: 'Ranger Kiko menemukan tanah basah yang empuk seperti kasur busa.',
        materialBody: [
            'Tanah gambut itu tanah istimewa yang terbentuk dari tumpukan daun dan ranting pohon yang membusuk selama ribuan tahun di dalam air rawa.',
            'Bentuknya persis seperti spons cuci piring di dapur. Saat musim hujan, tanah ini menyedot dan menyimpan air sangat banyak sehingga hutan tidak banjir.',
            'Tapi hati-hati! Kalau paritnya dikuras sampai kering, tanah gambut berubah menjadi tumpukan briket kayu kering yang amat gampang terbakar.'
        ],
        funFact: 'Indonesia punya rawa gambut yang sangat luas dan menjadi salah satu rumah alami hewan terbesar di dunia!',
        completed: false
    },
    {
        id: 'mat-2',
        type: 'MATERIAL',
        name: 'Menara Teropong Langit',
        badge: 'Materi 02',
        x: 1200,
        y: 240,
        title: 'Mengenal Titik Panas (Hotspot)',
        lore: 'Di pos ini ada komputer besar yang terhubung ke satelit di luar angkasa.',
        materialBody: [
            'Dari atas langit, satelit punya kamera khusus yang bisa melihat tempat mana saja yang suhunya mendadak panas sekali.',
            'Tempat yang sangat panas itu dinamai "Hotspot" atau titik panas. Ini jadi tanda bahaya pertama kalau ada lahan yang mulai berasap.',
            'Begitu ada titik merah di peta satelit, tim pemadam kebakaran hutan langsung berangkat naik sepeda motor atau helikopter untuk mengeceknya.'
        ],
        funFact: 'Satelit memotret bumi beberapa kali sehari, jadi api kecil bisa segera ketahuan sebelum membesar!',
        completed: false
    },
    {
        id: 'mat-3',
        type: 'MATERIAL',
        name: 'Pos Pengukur Udara',
        badge: 'Materi 03',
        x: 2100,
        y: 350,
        title: 'Awas Debu Jahat Bernama PM2.5',
        lore: 'Udara di sekitar sini mulai terasa agak pedih di mata dan bau asap gosong.',
        materialBody: [
            'Asap kebakaran hutan bukan asap biasa. Di dalamnya ada debu super kecil beracun yang namanya partikel PM2.5.',
            'Saking kecilnya, debu ini ukurannya jauh lebih halus daripada sehelai rambut. Bulu hidung kita tidak bisa menyaringnya, jadi bisa langsung masuk ke paru-paru.',
            'Kalau terhirup, tenggorokan bisa batuk-batuk, mata perih berair, dan napas terasa sesak.'
        ],
        funFact: 'Masker kain biasa tembus debu ini, lho. Saat ada kabut asap tebal, kita harus pakai masker tebal tipe N95 atau tetap main di dalam rumah.',
        completed: false
    },
    {
        id: 'mat-4',
        type: 'MATERIAL',
        name: 'Rumah Sahabat Satwa',
        badge: 'Materi 04',
        x: 400,
        y: 1300,
        title: 'Kasihan Hewan Hutan Saat Kebakaran',
        lore: 'Terdengar suara burung dan anak orangutan yang bingung mencari tempat berteduh.',
        materialBody: [
            'Ketika api membakar pohon, hewan-hewan seperti orangutan, burung enggang, dan beruang madu kehilangan sarang serta makanannya.',
            'Karena panik dan tidak bisa bernapas akibat asap, mereka sering lari ke arah kebun atau rumah penduduk desa untuk meminta tolong.',
            'Kita tidak boleh memukul, menangkap, atau menakut-nakuti mereka. Mereka sedang ketakutan dan butuh diselamatkan oleh dokter hewan hutan.'
        ],
        funFact: 'Orangutan suka makan buah hutan lalu menebarkan bijinya lewat kotorannya, jadi mereka adalah petani pohon alami!',
        completed: false
    },
    {
        id: 'mat-5',
        type: 'MATERIAL',
        name: 'Taman Kompos Daun',
        badge: 'Materi 05',
        x: 1850,
        y: 1350,
        title: 'Daun Kering Jangan Dibakar!',
        lore: 'Ada tumpukan daun pohon yang diolah jadi tanah hitam yang harum dan subur.',
        materialBody: [
            'Banyak orang keliru dan malas: membersihkan halaman rumah dengan cara membakar daun kering. Padahal apinya bisa tertiup angin dan merembet ke hutan!',
            'Cara paling pintar adalah membuat lubang di tanah, masukkan daun-daun gugur itu, lalu timbun dengan tanah.',
            'Cacing tanah dan bakteri baik akan mengubah daun itu menjadi pupuk kompos yang bikin tanaman cabai dan bunga tumbuh subur.'
        ],
        funFact: 'Satu karung daun yang kamu jadikan pupuk kompos bisa mencegah udara kotor dan menyelamatkan pohon dari kobaran api.',
        completed: false
    },

    // ==========================================
    // 5 POS KUIS (PILIHAN BERSIH & JELAS)
    // ==========================================
    {
        id: 'quiz-1',
        type: 'QUIZ',
        name: 'Pos Sekat Air',
        badge: 'Tantangan 01',
        x: 800,
        y: 500,
        title: 'Teka-Teki: Menjaga Rawa Tetap Basah',
        lore: 'Air di parit rawa gambut mulai menyusut. Jika dibiarkan mengering, tanah gambut bisa terbakar seperti arang.',
        question: 'Supaya tanah gambut tidak gampang terbakar, apa yang harus dilakukan oleh para penjaga hutan?',
        options: [
            {
                text: 'Membuat bendungan kayu kecil (sekat kanal) supaya air rawa tertahan dan tanah tetap basah.',
                isCorrect: true,
                explanation: 'Pintar sekali! Sekat kanal menahan air agar tidak kabur, jadi tanah gambut tetap basah dan adem seperti spons basah.'
            },
            {
                text: 'Mengeringkan semua airnya sampai tanah retak-retak.',
                isCorrect: false,
                explanation: 'Salah. Kalau tanah gambut kering kerontang, terkena sedikit percikan api saja langsung menyala hebat.'
            },
            {
                text: 'Menyemprotkan minyak tanah ke atas rawa.',
                isCorrect: false,
                explanation: 'Bahaya sekali! Minyak tanah justru bahan bakar yang bikin api meledak membesar.'
            }
        ],
        completed: false
    },
    {
        id: 'quiz-2',
        type: 'QUIZ',
        name: 'Pos Asap Tersembunyi',
        badge: 'Tantangan 02',
        x: 1700,
        y: 600,
        title: 'Teka-Teki: Memadamkan Api Bawah Tanah',
        lore: 'Di permukaan tidak ada kobaran api, tapi dari celah akar tanah keluar asap panas yang tebal.',
        question: 'Di lahan gambut, api sering sembunyi di dalam tanah. Bagaimana cara memadamkannya sampai tuntas?',
        options: [
            {
                text: 'Cuma menyiram permukaan atasnya memakai satu gayung air.',
                isCorrect: false,
                explanation: 'Belum cukup! Air gayung cuma membasahi rumput atas, sedangkan bara di kedalaman 1 meter masih menyala panas.'
            },
            {
                text: 'Menancapkan pipa suntik air bertekanan ke dalam tanah sampai baranya basah kuyup.',
                isCorrect: true,
                explanation: 'Hebat, jawabanmu benar! Petugas memakai selang panjang dan pipa besi khusus untuk menyuntikkan air langsung ke dalam tanah.'
            },
            {
                text: 'Menutup asapnya memakai daun pisang kering.',
                isCorrect: false,
                explanation: 'Salah. Daun pisang kering malah ikut terbakar karena suhu di bawah tanah sangat panas.'
            }
        ],
        completed: false
    },
    {
        id: 'quiz-3',
        type: 'QUIZ',
        name: 'Pos Siaga Kabut Asap',
        badge: 'Tantangan 03',
        x: 1200,
        y: 950,
        title: 'Teka-Teki: Menjaga Diri dari Asap',
        lore: 'Langit desa berubah warna jadi abu-abu kekuningan dan bau asap sangat menyengat hidung.',
        question: 'Kalau di luar rumah sedang penuh kabut asap tebal, apa yang sebaiknya kita lakukan?',
        options: [
            {
                text: 'Bermain bola di lapangan terbuka seharian tanpa masker.',
                isCorrect: false,
                explanation: 'Jangan lakukan itu! Berlari di tengah kabut asap bikin paru-paru kita cepat sakit dan sesak napas.'
            },
            {
                text: 'Tetap di dalam rumah, tutup jendela rapat, dan pakai masker N95 jika terpaksa keluar.',
                isCorrect: true,
                explanation: 'Tepat sekali! Menutup pintu dan jendela serta memakai masker yang pas di wajah melindungi napas kita dari debu jahat.'
            },
            {
                text: 'Membuka semua pintu kamar dan menyalakan kipas angin ke arah luar.',
                isCorrect: false,
                explanation: 'Kurang tepat. Kalau pintu dibuka, asap beracun dari luar justru akan masuk memenuhi kamar tidur.'
            }
        ],
        completed: false
    },
    {
        id: 'quiz-4',
        type: 'QUIZ',
        name: 'Pos Larangan Membakar',
        badge: 'Tantangan 04',
        x: 700,
        y: 1100,
        title: 'Teka-Teki: Sampah Pekarangan Rumah',
        lore: 'Kamu melihat ada orang yang membawa korek api dan mau membakar tumpukan ranting kering di pinggir kebun.',
        question: 'Apa saran terbaik yang bisa kita sampaikan kepada orang tersebut?',
        options: [
            {
                text: 'Beri tahu dengan sopan agar tidak membakarnya, lalu ajak menguburnya ke tanah untuk jadi kompos.',
                isCorrect: true,
                explanation: 'Keren! Mengingatkan dengan sopan dan memberi solusi pupuk kompos bisa mencegah api menjalar ke semak-semak lain.'
            },
            {
                text: 'Menyiram bensin supaya apinya langsung menyala setinggi pohon.',
                isCorrect: false,
                explanation: 'Sangat dilarang! Apinya bisa membesar tak terkendali dan membakar rumah serta hutan.'
            },
            {
                text: 'Tinggalkan saja dan pura-pura tidak melihat.',
                isCorrect: false,
                explanation: 'Kurang baik. Kalau apinya tertiup angin dan merambat ke hutan, semua warga desa yang akan rugi.'
            }
        ],
        completed: false
    },
    {
        id: 'quiz-5',
        type: 'QUIZ',
        name: 'Pos Tanam Pohon Kembali',
        badge: 'Tantangan 05',
        x: 1550,
        y: 1350,
        title: 'Teka-Teki: Menghijaukan Lahan Bekas Terbakar',
        lore: 'Lahan yang gosong sudah padam total dan tanahnya mulai dingin. Saatnya menanam pohon baru!',
        question: 'Supaya hutan rawa cepat rindang dan hijau lagi, bibit pohon seperti apa yang paling cocok ditanam?',
        options: [
            {
                text: 'Pohon kaktus berduri yang biasa hidup di padang pasir kering.',
                isCorrect: false,
                explanation: 'Salah. Kaktus cuma suka tempat kering dan akan mati membusuk kalau ditanam di tanah rawa yang berair.'
            },
            {
                text: 'Pohon asli rawa seperti Jelutung dan Belangeran yang akarnya kuat terendam air.',
                isCorrect: true,
                explanation: 'Luar biasa! Pohon asli rawa memang jago hidup di tanah basah dan cepat tumbuh melindungi hutan dari erosi.'
            },
            {
                text: 'Pohon hiasan plastik.',
                isCorrect: false,
                explanation: 'Salah. Pohon plastik tidak bisa tumbuh, tidak bisa membuat udara segar, dan tidak punya buah untuk makanan burung.'
            }
        ],
        completed: false
    }
];

export const RpgForestAdventure: React.FC = () => {
    const [playerPos, setPlayerPos] = useState({ x: 1200, y: 800 });
    const [quests, setQuests] = useState<QuestZone[]>(INITIAL_QUESTS);
    const [activeZone, setActiveZone] = useState<QuestZone | null>(null);

    const [selectedAnswerIdx, setSelectedAnswerIdx] = useState<number | null>(null);
    const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);
    const [completedCount, setCompletedCount] = useState(0);

    const cooldownZoneIdRef = useRef<string | null>(null);

    const [joystickVector, setJoystickVector] = useState({ x: 0, y: 0 });
    const [isJoystickDragging, setIsJoystickDragging] = useState(false);
    const joystickBaseRef = useRef<HTMLDivElement | null>(null);

    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const modalScrollRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (activeZone) {
            const originalOverflow = document.body.style.overflow;
            document.body.style.overflow = 'hidden';
            return () => {
                document.body.style.overflow = originalOverflow || 'unset';
            };
        }
    }, [activeZone]);

    useEffect(() => {
        if (!isJoystickDragging || activeZone) return;

        const interval = setInterval(() => {
            setPlayerPos((prev) => {
                const speed = 5.5;
                const nextX = Math.max(40, Math.min(WORLD_WIDTH - 40, prev.x + joystickVector.x * speed));
                const nextY = Math.max(40, Math.min(WORLD_HEIGHT - 40, prev.y + joystickVector.y * speed));
                return { x: nextX, y: nextY };
            });
        }, 16);

        return () => clearInterval(interval);
    }, [isJoystickDragging, joystickVector, activeZone]);

    useEffect(() => {
        if (activeZone) return;

        for (const q of quests) {
            if (q.completed) continue;
            if (cooldownZoneIdRef.current === q.id) continue;

            const dist = Math.hypot(playerPos.x - q.x, playerPos.y - q.y);
            if (dist < 55) {
                setActiveZone(q);
                setSelectedAnswerIdx(null);
                setIsAnswerSubmitted(false);
                setIsJoystickDragging(false);
                setJoystickVector({ x: 0, y: 0 });
                break;
            }
        }
    }, [playerPos, quests, activeZone]);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (activeZone) return;

            const speed = 22;
            setPlayerPos((prev) => {
                let newX = prev.x;
                let newY = prev.y;

                if (e.key === 'ArrowUp' || e.key === 'w' || e.key === 'W') newY -= speed;
                if (e.key === 'ArrowDown' || e.key === 's' || e.key === 'S') newY += speed;
                if (e.key === 'ArrowLeft' || e.key === 'a' || e.key === 'A') newX -= speed;
                if (e.key === 'ArrowRight' || e.key === 'd' || e.key === 'D') newX += speed;

                return {
                    x: Math.max(40, Math.min(WORLD_WIDTH - 40, newX)),
                    y: Math.max(40, Math.min(WORLD_HEIGHT - 40, newY))
                };
            });
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [activeZone]);

    // Render Dunia MMORPG
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let cameraX = playerPos.x - VIEWPORT_WIDTH / 2;
        let cameraY = playerPos.y - VIEWPORT_HEIGHT / 2;

        cameraX = Math.max(0, Math.min(WORLD_WIDTH - VIEWPORT_WIDTH, cameraX));
        cameraY = Math.max(0, Math.min(WORLD_HEIGHT - VIEWPORT_HEIGHT, cameraY));

        ctx.clearRect(0, 0, VIEWPORT_WIDTH, VIEWPORT_HEIGHT);

        ctx.save();
        ctx.translate(-cameraX, -cameraY);

        // Rumput Hutan
        ctx.fillStyle = '#1b3b17';
        ctx.fillRect(0, 0, WORLD_WIDTH, WORLD_HEIGHT);

        // Grid Halus
        ctx.strokeStyle = '#224a1e';
        ctx.lineWidth = 1;
        for (let x = 0; x < WORLD_WIDTH; x += 60) {
            ctx.beginPath();
            ctx.moveTo(x, 0);
            ctx.lineTo(x, WORLD_HEIGHT);
            ctx.stroke();
        }
        for (let y = 0; y < WORLD_HEIGHT; y += 60) {
            ctx.beginPath();
            ctx.moveTo(0, y);
            ctx.lineTo(WORLD_WIDTH, y);
            ctx.stroke();
        }

        // Jalan Setapak
        ctx.fillStyle = '#543b22';
        ctx.fillRect(100, 775, 2200, 50);
        ctx.fillRect(250, 260, 1900, 40);
        ctx.fillRect(250, 1320, 1900, 40);
        ctx.fillRect(350, 150, 45, 1300);
        ctx.fillRect(1175, 150, 50, 1300);
        ctx.fillRect(1820, 150, 45, 1300);

        // Lapangan Bundar Tengah
        ctx.beginPath();
        ctx.arc(1200, 800, 85, 0, Math.PI * 2);
        ctx.fill();

        // Kolam Rawa Hijau Zamrud
        ctx.fillStyle = '#1d483f';
        ctx.beginPath();
        ctx.arc(750, 800, 65, 0, Math.PI * 2);
        ctx.arc(1650, 800, 65, 0, Math.PI * 2);
        ctx.fill();

        // Pepohonan Kanopi
        const clusterPositions = [
            { x: 120, y: 120 }, { x: 700, y: 140 }, { x: 1550, y: 130 }, { x: 2280, y: 120 },
            { x: 120, y: 1480 }, { x: 800, y: 1490 }, { x: 1450, y: 1480 }, { x: 2280, y: 1480 },
            { x: 600, y: 450 }, { x: 1850, y: 450 }, { x: 600, y: 1150 }, { x: 1850, y: 1150 }
        ];
        clusterPositions.forEach((t) => {
            ctx.fillStyle = '#0f260d';
            ctx.beginPath();
            ctx.arc(t.x, t.y, 35, 0, Math.PI * 2);
            ctx.fill();

            ctx.fillStyle = '#266320';
            ctx.beginPath();
            ctx.arc(t.x, t.y - 5, 28, 0, Math.PI * 2);
            ctx.fill();

            ctx.fillStyle = '#388a2e';
            ctx.beginPath();
            ctx.arc(t.x, t.y - 10, 18, 0, Math.PI * 2);
            ctx.fill();
        });

        // 10 Pos Ekspedisi
        quests.forEach((q) => {
            const isMaterial = q.type === 'MATERIAL';

            ctx.fillStyle = q.completed
                ? 'rgba(34, 197, 94, 0.28)'
                : isMaterial
                    ? 'rgba(56, 189, 248, 0.35)'
                    : 'rgba(251, 191, 36, 0.35)';
            ctx.beginPath();
            ctx.arc(q.x, q.y, 36, 0, Math.PI * 2);
            ctx.fill();

            ctx.strokeStyle = q.completed
                ? '#22c55e'
                : isMaterial
                    ? '#38bdf8'
                    : '#f59e0b';
            ctx.lineWidth = 3;
            ctx.stroke();

            ctx.fillStyle = q.completed
                ? '#16a34a'
                : isMaterial
                    ? '#0284c7'
                    : '#d97706';
            ctx.beginPath();
            ctx.arc(q.x, q.y, 18, 0, Math.PI * 2);
            ctx.fill();

            ctx.fillStyle = '#ffffff';
            ctx.font = 'bold 13px sans-serif';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(isMaterial ? '📖' : '⚡', q.x, q.y);

            ctx.fillStyle = '#ffffff';
            ctx.font = 'bold 11px sans-serif';
            ctx.textAlign = 'center';
            const label = q.completed
                ? `${q.name} ✓`
                : `[${isMaterial ? 'Materi' : 'Kuis'}] ${q.name}`;
            ctx.fillText(label, q.x, q.y - 26);
        });

        // Karakter Ranger Kiko
        ctx.fillStyle = 'rgba(0, 0, 0, 0.45)';
        ctx.beginPath();
        ctx.ellipse(playerPos.x, playerPos.y + 16, 15, 7, 0, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = '#f59e0b';
        ctx.beginPath();
        ctx.arc(playerPos.x, playerPos.y, 14, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = '#15803d';
        ctx.beginPath();
        ctx.arc(playerPos.x, playerPos.y - 4, 12, 0, Math.PI, true);
        ctx.fill();

        ctx.fillStyle = '#ffedd5';
        ctx.beginPath();
        ctx.arc(playerPos.x, playerPos.y + 3, 8, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = '#0f172a';
        ctx.beginPath();
        ctx.arc(playerPos.x - 3, playerPos.y + 2, 1.8, 0, Math.PI * 2);
        ctx.arc(playerPos.x + 3, playerPos.y + 2, 1.8, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = '#fef08a';
        ctx.font = 'bold 11px sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText('Ranger Kiko', playerPos.x, playerPos.y - 20);

        ctx.restore();

        // Radar Mini-Map
        const mmW = 160;
        const mmH = 106;
        const mmX = VIEWPORT_WIDTH - mmW - 14;
        const mmY = 14;

        ctx.fillStyle = 'rgba(15, 35, 12, 0.85)';
        ctx.fillRect(mmX, mmY, mmW, mmH);
        ctx.strokeStyle = '#4ade80';
        ctx.lineWidth = 1.5;
        ctx.strokeRect(mmX, mmY, mmW, mmH);

        quests.forEach((q) => {
            const qMx = mmX + (q.x / WORLD_WIDTH) * mmW;
            const qMy = mmY + (q.y / WORLD_HEIGHT) * mmH;
            ctx.fillStyle = q.completed
                ? '#22c55e'
                : q.type === 'MATERIAL'
                    ? '#38bdf8'
                    : '#f59e0b';
            ctx.beginPath();
            ctx.arc(qMx, qMy, 3, 0, Math.PI * 2);
            ctx.fill();
        });

        const camMx = mmX + (cameraX / WORLD_WIDTH) * mmW;
        const camMy = mmY + (cameraY / WORLD_HEIGHT) * mmH;
        const camMw = (VIEWPORT_WIDTH / WORLD_WIDTH) * mmW;
        const camMh = (VIEWPORT_HEIGHT / WORLD_HEIGHT) * mmH;
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.5)';
        ctx.lineWidth = 1;
        ctx.strokeRect(camMx, camMy, camMw, camMh);

        const pMx = mmX + (playerPos.x / WORLD_WIDTH) * mmW;
        const pMy = mmY + (playerPos.y / WORLD_HEIGHT) * mmH;
        ctx.fillStyle = '#facc15';
        ctx.beginPath();
        ctx.arc(pMx, pMy, 3.5, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 9px sans-serif';
        ctx.textAlign = 'left';
        ctx.fillText('RADAR HUTAN', mmX + 6, mmY + 12);
    }, [playerPos, quests]);

    // Touch Virtual Joystick
    const handleTouchMove = useCallback((e: TouchEvent | React.TouchEvent) => {
        if (!joystickBaseRef.current || activeZone) return;

        const touch = 'touches' in e ? e.touches[0] : (e as unknown as React.TouchEvent).touches[0];
        if (!touch) return;

        const rect = joystickBaseRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const deltaX = touch.clientX - centerX;
        const deltaY = touch.clientY - centerY;
        const maxRadius = rect.width / 2;

        const distance = Math.hypot(deltaX, deltaY);
        const angle = Math.atan2(deltaY, deltaX);

        const clampedDist = Math.min(distance, maxRadius);
        const normX = (clampedDist * Math.cos(angle)) / maxRadius;
        const normY = (clampedDist * Math.sin(angle)) / maxRadius;

        setJoystickVector({ x: normX, y: normY });
    }, [activeZone]);

    const handleTouchStart = (e: React.TouchEvent) => {
        if (activeZone) return;
        setIsJoystickDragging(true);
        handleTouchMove(e);
    };

    const handleTouchEnd = () => {
        setIsJoystickDragging(false);
        setJoystickVector({ x: 0, y: 0 });
    };

    const handleSelectQuizAnswer = (idx: number) => {
        if (isAnswerSubmitted || !activeZone || activeZone.type !== 'QUIZ') return;
        setSelectedAnswerIdx(idx);
        setIsAnswerSubmitted(true);

        if (activeZone.options && activeZone.options[idx].isCorrect) {
            setQuests((prev) =>
                prev.map((q) => (q.id === activeZone.id ? { ...q, completed: true } : q))
            );
            setCompletedCount((prev) => prev + 1);
        }
    };

    const handleCompleteMaterial = () => {
        if (!activeZone || activeZone.type !== 'MATERIAL') return;
        if (!activeZone.completed) {
            setQuests((prev) =>
                prev.map((q) => (q.id === activeZone.id ? { ...q, completed: true } : q))
            );
            setCompletedCount((prev) => prev + 1);
        }
        handleCloseZoneDialog();
    };

    const handleCloseZoneDialog = () => {
        if (activeZone) {
            const zId = activeZone.id;
            cooldownZoneIdRef.current = zId;
            setTimeout(() => {
                cooldownZoneIdRef.current = null;
            }, 2500);

            setPlayerPos((prev) => {
                const dx = prev.x - activeZone.x;
                const dy = prev.y - activeZone.y;
                const angle = Math.atan2(dy, dx);
                const pushX = Math.max(40, Math.min(WORLD_WIDTH - 40, activeZone.x + Math.cos(angle) * 78));
                const pushY = Math.max(40, Math.min(WORLD_HEIGHT - 40, activeZone.y + Math.sin(angle) * 78));
                return { x: pushX, y: pushY };
            });
        }

        setActiveZone(null);
        setSelectedAnswerIdx(null);
        setIsAnswerSubmitted(false);
    };

    const handleResetGame = () => {
        setPlayerPos({ x: 1200, y: 800 });
        setQuests(INITIAL_QUESTS);
        setActiveZone(null);
        setSelectedAnswerIdx(null);
        setIsAnswerSubmitted(false);
        setCompletedCount(0);
        cooldownZoneIdRef.current = null;
    };

    const isAllQuestCleared = completedCount === quests.length;
    const isCurrentQuizCorrect =
        activeZone &&
        activeZone.type === 'QUIZ' &&
        selectedAnswerIdx !== null &&
        activeZone.options?.[selectedAnswerIdx]?.isCorrect;

    return (
        <div className="bg-white rounded-3xl p-5 sm:p-9 border border-rimba-100 shadow-sm space-y-6">

            {/* Header Halaman RPG */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-rimba-100 pb-5">
                <div>
                    <div className="flex items-center gap-2">
                        <span className="text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-900 tracking-wider">
                            Petualangan Keliling Hutan
                        </span>
                        <span className="text-xs text-amber-600 font-bold flex items-center gap-1">
                            <Sparkles className="w-3.5 h-3.5" /> 10 Pos Sahabat Alam
                        </span>
                    </div>
                    <h2 className="font-display font-extrabold text-xl sm:text-2xl text-rimba-950 mt-1">
                        Jelajah Rimba Bersama Ranger Kiko
                    </h2>
                    <p className="text-xs text-rimba-700 font-medium">
                        Ayo kelilingi hutan yang luas ini! Temukan <strong>5 Pos Cerita Seru (📘)</strong> dan selesaikan <strong>5 Teka-Teki Kuis (⚡)</strong> agar alam bebas asap.
                    </p>
                </div>

                {/* Skor Progres */}
                <div className="flex items-center gap-3 bg-earth-soft px-4 py-2.5 rounded-2xl border border-rimba-200 self-start sm:self-auto">
                    <Compass className="w-5 h-5 text-rimba-600" />
                    <div>
                        <span className="text-[10px] font-bold text-slate-500 uppercase block">Pos yang Diselesaikan</span>
                        <span className="font-display font-black text-sm text-rimba-950">
                            {completedCount} dari {quests.length} Pos
                        </span>
                    </div>
                    {isAllQuestCleared && (
                        <span className="text-[10px] font-black px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                            Lulus 100%!
                        </span>
                    )}
                </div>
            </div>

            {/* Petunjuk Arah Simpel */}
            <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-semibold text-rimba-900 bg-earth-soft/60 p-3 rounded-2xl border border-rimba-100">
                <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-emerald-600" />
                    <span className="text-slate-600 text-xs font-medium">Jalan terus ke ujung layar, kameranya akan ikut bergeser mengikutimu!</span>
                </div>
                <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-sky-100 text-sky-900 text-[11px] font-bold">
                        📘 Pos Bacaan Seru
                    </span>
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-amber-100 text-amber-900 text-[11px] font-bold">
                        ⚡ Pos Kuis Tantangan
                    </span>
                </div>
            </div>

            {/* Layar Game RPG MMORPG */}
            <div className="relative rounded-3xl overflow-hidden border-4 border-rimba-900 shadow-2xl bg-[#1b3b17] flex justify-center items-center">
                <canvas
                    ref={canvasRef}
                    width={VIEWPORT_WIDTH}
                    height={VIEWPORT_HEIGHT}
                    className="max-w-full h-auto block select-none"
                />

                <div className="absolute top-3 left-3 bg-rimba-950/85 backdrop-blur-xs text-white px-3.5 py-2 rounded-xl text-[11px] font-medium border border-rimba-700 pointer-events-none hidden sm:block">
                    Gunakan tombol <strong>W, A, S, D</strong> atau <strong>Panah Keyboard</strong> untuk berjalan
                </div>

                {/* MODAL DIALOG POS */}
                {activeZone && (
                    <div
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-rimba-950/80 backdrop-blur-xs select-none overscroll-none"
                        onClick={handleCloseZoneDialog}
                        onWheel={(e) => e.stopPropagation()}
                    >
                        <div
                            className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-rimba-200 overflow-hidden flex flex-col max-h-[85vh] select-text"
                            onClick={(e) => e.stopPropagation()}
                            onWheel={(e) => e.stopPropagation()}
                        >

                            {/* Header Modal */}
                            <div className="flex items-center justify-between p-4 sm:p-5 border-b border-rimba-100 bg-earth-soft shrink-0">
                                <div className="flex items-center gap-3">
                                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center border ${activeZone.type === 'MATERIAL'
                                            ? 'bg-sky-100 text-sky-800 border-sky-300'
                                            : 'bg-amber-100 text-amber-800 border-amber-300'
                                        }`}>
                                        {activeZone.type === 'MATERIAL' ? <BookOpen className="w-5 h-5" /> : <HelpCircle className="w-5 h-5" />}
                                    </div>
                                    <div>
                                        <span className={`text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-full ${activeZone.type === 'MATERIAL'
                                                ? 'bg-sky-100 text-sky-900 border border-sky-200'
                                                : 'bg-amber-100 text-amber-900 border border-amber-200'
                                            }`}>
                                            {activeZone.badge} &bull; {activeZone.type === 'MATERIAL' ? 'Pos Cerita Alam' : 'Teka-Teki Cepat'}
                                        </span>
                                        <h3 className="font-display font-extrabold text-sm sm:text-base text-rimba-950 leading-tight mt-0.5">
                                            {activeZone.title}
                                        </h3>
                                    </div>
                                </div>

                                <button
                                    type="button"
                                    onClick={handleCloseZoneDialog}
                                    className="p-2 rounded-xl text-rimba-700 hover:text-rimba-950 hover:bg-rimba-100 transition-colors cursor-pointer"
                                    title="Tutup dialog"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </div>

                            {/* Isi Dialog */}
                            <div
                                ref={modalScrollRef}
                                className="p-5 sm:p-6 overflow-y-auto overscroll-contain space-y-4 flex-1 min-h-0"
                            >
                                <div className="p-3.5 rounded-2xl bg-earth-soft/70 border border-rimba-100 text-xs sm:text-sm text-rimba-800 leading-relaxed font-medium">
                                    {activeZone.lore}
                                </div>

                                {/* KONTEN POS CERITA (MATERI) */}
                                {activeZone.type === 'MATERIAL' && (
                                    <div className="space-y-3.5">
                                        <div className="space-y-2.5 text-xs sm:text-sm text-rimba-950 leading-relaxed font-normal">
                                            {activeZone.materialBody?.map((p, idx) => (
                                                <p key={idx} className="bg-white p-3 rounded-xl border border-rimba-100">
                                                    {p}
                                                </p>
                                            ))}
                                        </div>

                                        {activeZone.funFact && (
                                            <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-start gap-3">
                                                <Info className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                                                <div>
                                                    <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 block">
                                                        Tahukah Kamu?
                                                    </span>
                                                    <p className="text-xs text-emerald-950 font-medium leading-relaxed mt-0.5">
                                                        {activeZone.funFact}
                                                    </p>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                )}

                                {/* KONTEN POS TEKA-TEKI (KUIS) */}
                                {activeZone.type === 'QUIZ' && (
                                    <div className="space-y-3">
                                        <p className="font-display font-bold text-xs sm:text-sm text-rimba-950">
                                            {activeZone.question}
                                        </p>

                                        <div className="space-y-2 pt-1">
                                            {activeZone.options?.map((opt, idx) => {
                                                const isSelected = selectedAnswerIdx === idx;
                                                let style = 'bg-white border-rimba-200 hover:border-rimba-400 text-rimba-950';

                                                if (isAnswerSubmitted) {
                                                    if (opt.isCorrect) {
                                                        style = 'bg-emerald-50 border-emerald-500 text-emerald-950 font-bold';
                                                    } else if (isSelected && !opt.isCorrect) {
                                                        style = 'bg-rose-50 border-rose-400 text-rose-950 font-bold';
                                                    } else {
                                                        style = 'bg-slate-50 border-slate-200 text-slate-400 opacity-60';
                                                    }
                                                }

                                                return (
                                                    <button
                                                        key={idx}
                                                        type="button"
                                                        onClick={() => handleSelectQuizAnswer(idx)}
                                                        disabled={isAnswerSubmitted}
                                                        className={`w-full text-left p-3 rounded-xl border text-xs leading-relaxed transition-all flex items-start gap-2.5 cursor-pointer ${style}`}
                                                    >
                                                        <span className="w-5 h-5 rounded-md bg-earth-soft border border-rimba-100 flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                                                            {String.fromCharCode(65 + idx)}
                                                        </span>
                                                        <span className="flex-1">{opt.text}</span>
                                                    </button>
                                                );
                                            })}
                                        </div>

                                        {isAnswerSubmitted && selectedAnswerIdx !== null && activeZone.options && (
                                            <div
                                                className={`p-3.5 rounded-2xl text-xs flex items-start gap-2.5 animate-in fade-in duration-200 ${activeZone.options[selectedAnswerIdx].isCorrect
                                                        ? 'bg-emerald-100 text-emerald-950 border border-emerald-300'
                                                        : 'bg-rose-100 text-rose-950 border border-rose-300'
                                                    }`}
                                            >
                                                {activeZone.options[selectedAnswerIdx].isCorrect ? (
                                                    <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                                                ) : (
                                                    <XCircle className="w-5 h-5 text-rose-700 shrink-0 mt-0.5" />
                                                )}
                                                <div className="space-y-0.5">
                                                    <p className="font-bold">
                                                        {activeZone.options[selectedAnswerIdx].isCorrect ? 'Hebat, Jawabanmu Tepat!' : 'Yuk Pahami Lagi:'}
                                                    </p>
                                                    <p className="leading-relaxed font-normal">
                                                        {activeZone.options[selectedAnswerIdx].explanation}
                                                    </p>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                )}

                            </div>

                            {/* Tombol Bawah */}
                            <div className="p-4 border-t border-rimba-100 bg-earth-soft flex items-center justify-between gap-3 shrink-0">
                                <button
                                    type="button"
                                    onClick={handleCloseZoneDialog}
                                    className="px-4 py-2.5 rounded-xl border border-rimba-200 text-rimba-800 hover:bg-rimba-100 font-display font-bold text-xs transition-colors cursor-pointer"
                                >
                                    Tutup Dulu
                                </button>

                                {activeZone.type === 'MATERIAL' ? (
                                    <button
                                        type="button"
                                        onClick={handleCompleteMaterial}
                                        className="px-6 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-display font-bold text-xs shadow-md transition-all cursor-pointer flex items-center gap-1.5"
                                    >
                                        <Check className="w-4 h-4" />
                                        <span>Sudah Paham, Selesai!</span>
                                    </button>
                                ) : (
                                    <button
                                        type="button"
                                        onClick={handleCloseZoneDialog}
                                        className={`px-6 py-2.5 rounded-xl text-white font-display font-bold text-xs shadow-md transition-all cursor-pointer ${isAnswerSubmitted
                                                ? isCurrentQuizCorrect
                                                    ? 'bg-emerald-600 hover:bg-emerald-700'
                                                    : 'bg-amber-600 hover:bg-amber-700'
                                                : 'bg-rimba-700 hover:bg-rimba-800'
                                            }`}
                                    >
                                        {isAnswerSubmitted
                                            ? isCurrentQuizCorrect
                                                ? 'Lanjut Cari Pos Lain ➔'
                                                : 'Mundur & Coba Lagi Nanti ➔'
                                            : 'Nanti Saja'}
                                    </button>
                                )}
                            </div>

                        </div>
                    </div>
                )}

                {/* Layar Menang 10 Pos */}
                {isAllQuestCleared && !activeZone && (
                    <div className="absolute inset-0 bg-rimba-950/85 backdrop-blur-xs flex items-center justify-center p-4 z-10 text-center animate-in fade-in zoom-in-95 duration-300">
                        <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full border border-amber-300 shadow-2xl space-y-4">
                            <div className="w-16 h-16 rounded-2xl bg-amber-100 text-amber-700 mx-auto flex items-center justify-center border border-amber-300 shadow-md">
                                <Trophy className="w-8 h-8" />
                            </div>
                            <div>
                                <h3 className="font-display font-extrabold text-lg sm:text-xl text-rimba-950">
                                    Kamu Juara Penjaga Rimba!
                                </h3>
                                <p className="text-xs text-rimba-700 mt-1 leading-relaxed">
                                    Semua 10 pos sudah berhasil kamu selesaikan. Sekarang kamu tahu cara menjaga rawa tetap basah dan bumi bebas asap!
                                </p>
                            </div>

                            <button
                                type="button"
                                onClick={handleResetGame}
                                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-rimba-600 hover:bg-rimba-700 text-white font-display font-bold text-xs shadow-md transition-all cursor-pointer"
                            >
                                <RotateCcw className="w-4 h-4" />
                                <span>Mainkan Dari Awal Lagi</span>
                            </button>
                        </div>
                    </div>
                )}

            </div>

            {/* Kontrol Gamepad Virtual untuk Layar Sentuh */}
            <div className="pt-2 flex flex-col items-center select-none">
                <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest mb-3 sm:hidden">
                    🎮 Stik Pengendali Ranger
                </span>

                <div className="w-full max-w-md bg-earth-soft/80 p-4 rounded-3xl border border-rimba-200/80 flex items-center justify-around gap-6 shadow-inner">

                    {/* Joystick Analog */}
                    <div className="flex flex-col items-center gap-1.5">
                        <div
                            ref={joystickBaseRef}
                            onTouchStart={handleTouchStart}
                            onTouchMove={handleTouchMove}
                            onTouchEnd={handleTouchEnd}
                            onTouchCancel={handleTouchEnd}
                            className="relative w-28 h-28 rounded-full bg-slate-900 border-4 border-slate-700/80 shadow-2xl flex items-center justify-center touch-none cursor-pointer"
                        >
                            <div className="absolute inset-x-0 h-0.5 bg-slate-700/60 pointer-events-none" />
                            <div className="absolute inset-y-0 w-0.5 bg-slate-700/60 pointer-events-none" />

                            <div
                                className={`w-12 h-12 rounded-full bg-linear-to-b from-slate-600 to-slate-800 border-2 border-slate-400/90 shadow-lg flex items-center justify-center transition-transform ${isJoystickDragging ? 'scale-95' : 'scale-100'
                                    }`}
                                style={{
                                    transform: `translate(${joystickVector.x * 28}px, ${joystickVector.y * 28}px)`
                                }}
                            >
                                <div className="w-5 h-5 rounded-full border border-slate-500/70 bg-slate-700/50 shadow-inner" />
                            </div>
                        </div>
                        <span className="text-[10px] font-bold text-slate-600">Geser Stik</span>
                    </div>

                    {/* Tombol Panah PS */}
                    <div className="flex flex-col items-center gap-1.5">
                        <div className="relative w-28 h-28 flex items-center justify-center">
                            <button
                                type="button"
                                onClick={() => setPlayerPos(p => ({ ...p, y: Math.max(40, p.y - 45) }))}
                                className="absolute top-0 w-9 h-9 rounded-full bg-slate-900 border-2 border-emerald-500 text-emerald-400 font-black text-xs shadow-md active:scale-90 flex items-center justify-center cursor-pointer"
                            >
                                ▲
                            </button>
                            <button
                                type="button"
                                onClick={() => setPlayerPos(p => ({ ...p, x: Math.max(40, p.x - 45) }))}
                                className="absolute left-0 w-9 h-9 rounded-full bg-slate-900 border-2 border-rose-500 text-rose-400 font-black text-xs shadow-md active:scale-90 flex items-center justify-center cursor-pointer"
                            >
                                ■
                            </button>
                            <button
                                type="button"
                                onClick={() => setPlayerPos(p => ({ ...p, x: Math.min(WORLD_WIDTH - 40, p.x + 45) }))}
                                className="absolute right-0 w-9 h-9 rounded-full bg-slate-900 border-2 border-amber-400 text-amber-400 font-black text-xs shadow-md active:scale-90 flex items-center justify-center cursor-pointer"
                            >
                                ●
                            </button>
                            <button
                                type="button"
                                onClick={() => setPlayerPos(p => ({ ...p, y: Math.min(WORLD_HEIGHT - 40, p.y + 45) }))}
                                className="absolute bottom-0 w-9 h-9 rounded-full bg-slate-900 border-2 border-sky-400 text-sky-400 font-black text-xs shadow-md active:scale-90 flex items-center justify-center cursor-pointer"
                            >
                                ✖
                            </button>
                        </div>
                        <span className="text-[10px] font-bold text-slate-600">Tombol Aksi</span>
                    </div>

                </div>
            </div>

        </div>
    );
};