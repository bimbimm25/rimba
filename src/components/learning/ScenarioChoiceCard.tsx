'use client';

import React, { useState, useEffect } from 'react';
import {
    Sparkles,
    ArrowRight,
    RotateCcw,
    CheckCircle2,
    Trophy,
    Star,
    Eye,
    AlertTriangle,
    Shuffle
} from 'lucide-react';

interface ScenarioCardOption {
    id: string;
    badge: string;
    actionText: string;
    isSafe: boolean;
    consequence: string;
    tip: string;
}

interface ScenarioCardData {
    id: string;
    title: string;
    location: string;
    situation: string;
    options: ScenarioCardOption[];
}

// 10 Bank Soal Skenario Pilihan Nyata
const ALL_SCENARIOS: ScenarioCardData[] = [
    {
        id: 'sc-1',
        title: 'Kepulan Asap di Belakang Sekolah',
        location: 'Halaman Belakang Sekolah',
        situation: 'Saat jam istirahat, kamu dan temanmu melihat asap putih mengepul dari tumpukan daun kering dekat pagar. Tidak ada api yang menyala, tetapi asapnya terus keluar.',
        options: [
            {
                id: 'opt-a',
                badge: 'Pilihan A',
                actionText: 'Mendekat lalu menginjak-injak tanah berasap memakai sepatu sekolah.',
                isSafe: false,
                consequence: 'Sangat berbahaya. Di bawah tanah ada bara panas yang tidak kelihatan. Panasnya bisa merusak sepatu dan membuat kakimu terluka bakar.',
                tip: 'Jika melihat asap atau api, jangan mendekat sama sekali.'
            },
            {
                id: 'opt-b',
                badge: 'Pilihan B',
                actionText: 'Segera menjauh dari tempat itu dan melapor ke bapak atau ibu guru.',
                isSafe: true,
                consequence: 'Pilihan yang tepat dan pintar. Guru dan penjaga sekolah bisa segera memeriksa lokasi sebelum bara api membesar.',
                tip: 'Tugas utama anak adalah mencari dan memberi tahu orang dewasa.'
            }
        ]
    },
    {
        id: 'sc-2',
        title: 'Ajakan Menyalakan Api Saat Angin Kencang',
        location: 'Pekarangan Dekat Rumah',
        situation: 'Teman bermainmu membawa korek api dan mengajak membakar tumpukan dahan kering. Saat itu udara sedang sangat panas dan angin bertiup kencang.',
        options: [
            {
                id: 'opt-a',
                badge: 'Pilihan A',
                actionText: 'Mengingatkan teman agar tidak bermain api, lalu mengajak mengubur daun ke dalam tanah agar menjadi pupuk.',
                isSafe: true,
                consequence: 'Hebat sekali. Kamu berhasil mencegah bahaya kebakaran dan membuat halaman tetap bersih tanpa asap.',
                tip: 'Mengolah daun kering menjadi pupuk jauh lebih bermanfaat daripada membakarnya.'
            },
            {
                id: 'opt-b',
                badge: 'Pilihan B',
                actionText: 'Ikut mengumpulkan daun kering dan mengipasi apinya agar lekas berkobar.',
                isSafe: false,
                consequence: 'Sangat berbahaya. Angin kencang bisa menerbangkan percikan bara ke atap rumah tetangga atau semak kering di sekitar.',
                tip: 'Jangan pernah menyalakan api di luar rumah saat cuaca berangin.'
            }
        ]
    },
    {
        id: 'sc-3',
        title: 'Berangkat Sekolah di Tengah Kabut Asap',
        location: 'Jalan Menuju Sekolah',
        situation: 'Pagi ini langit tampak berkabut abu-abu dan tercium bau sangit bekas kebakaran lahan. Teman-temanmu mengajak berlari cepat ke sekolah tanpa masker.',
        options: [
            {
                id: 'opt-a',
                badge: 'Pilihan A',
                actionText: 'Ikut berlari sekencang mungkin di jalanan tanpa penutup hidung.',
                isSafe: false,
                consequence: 'Berbahaya bagi kesehatanmu. Saat berlari kencang dan terengah-engah, debu asap yang kotor akan terhirup lebih banyak ke paru-paru.',
                tip: 'Hindari bermain atau berlari di luar ruangan saat udara sedang berdebu dan berasap.'
            },
            {
                id: 'opt-b',
                badge: 'Pilihan B',
                actionText: 'Berjalan tenang sambil memakai masker yang menutup hidung dan mulut dengan rapat.',
                isSafe: true,
                consequence: 'Langkah yang sangat cerdas. Masker membantu menyaring udara kotor agar tenggorokanmu tidak batuk dan napas tetap lega.',
                tip: 'Selalu kenakan masker pelindung saat berada di luar rumah yang berkabut asap.'
            }
        ]
    },
    {
        id: 'sc-4',
        title: 'Melihat Satwa Rimba yang Mengungsi',
        location: 'Tepi Kebun Belakang Desa',
        situation: 'Seekor anak kancil dan burung hutan terlihat lemas berteduh di bawah pohon pisang warga. Tempat tinggal mereka di hutan terbakar semalam.',
        options: [
            {
                id: 'opt-a',
                badge: 'Pilihan A',
                actionText: 'Mencoba menangkap hewan itu dengan karung untuk dipelihara di dalam kamar.',
                isSafe: false,
                consequence: 'Tindakan yang keliru. Satwa liar yang sedang ketakutan dan menghirup asap membutuhkan pertolongan dokter hewan, bukan dikurung sendiri.',
                tip: 'Satwa liar tidak boleh ditangkap atau diganggu sembarangan.'
            },
            {
                id: 'opt-b',
                badge: 'Pilihan B',
                actionText: 'Menjaga jarak aman, menaruh wadah air minum dari jauh, lalu melapor ke orang tua atau petugas desa.',
                isSafe: true,
                consequence: 'Perbuatan yang terpuji. Orang tua dan petugas bisa segera memanggil tim penyelamat satwa agar hewan tersebut dirawat dengan benar.',
                tip: 'Menyayangi hewan hutan berarti membantunya mendapatkan perawatan yang aman.'
            }
        ]
    },
    {
        id: 'sc-5',
        title: 'Melihat Orang Membuang Puntung Rokok Masih Menyala',
        location: 'Pinggir Jalan Dekat Hutan Rawa',
        situation: 'Saat naik sepeda, kamu melihat seorang pengendara motor melempar puntung rokok yang masih berasap merah ke semak ilalang kering di pinggir jalan.',
        options: [
            {
                id: 'opt-a',
                badge: 'Pilihan A',
                actionText: 'Segera memberi tahu orang dewasa atau warga terdekat bahwa ada bara rokok di semak kering.',
                isSafe: true,
                consequence: 'Tindakan sangat sigap! Warga dewasa bisa langsung mematikan bara itu dengan air atau tanah sebelum menyambar semak.',
                tip: 'Bara rokok kecil adalah salah satu penyebab utama kebakaran semak di tepi jalan.'
            },
            {
                id: 'opt-b',
                badge: 'Pilihan B',
                actionText: 'Membiarkannya saja karena mengira api kecil pasti akan mati dengan sendirinya.',
                isSafe: false,
                consequence: 'Sangat berisiko! Rumput kering saat kemarau bisa menyala dalam beberapa menit hanya karena satu bara rokok.',
                tip: 'Jangan pernah meremehkan bara kecil di dekat tanaman kering.'
            }
        ]
    },
    {
        id: 'sc-6',
        title: 'Pintu dan Jendela Rumah Saat Udara Berasap',
        location: 'Ruang Tamu Rumah',
        situation: 'Kabut asap dari kebakaran lahan mulai masuk ke desa. Rumah terasa agak hangat dan saudaramu ingin membuka semua jendela lebar-lebar.',
        options: [
            {
                id: 'opt-a',
                badge: 'Pilihan A',
                actionText: 'Menutup rapat semua pintu dan jendela, lalu memasang kain lembap di celah ventilasi.',
                isSafe: true,
                consequence: 'Pilihan yang benar. Menutup celah rumah menghalangi debu berbahaya PM2.5 agar tidak memenuhi kamar tidurmu.',
                tip: 'Jaga udara di dalam rumah tetap bersih dengan menutup jalan masuk asap.'
            },
            {
                id: 'opt-b',
                badge: 'Pilihan B',
                actionText: 'Membuka seluruh jendela dan pintu depan agar angin luar masuk ke rumah.',
                isSafe: false,
                consequence: 'Keliru dan berbahaya. Angin luar membawa asap beracun yang membuat seisi rumah batuk dan mata perih.',
                tip: 'Saat kabut asap melanda, jangan biarkan udara kotor dari luar masuk ke rumah.'
            }
        ]
    },
    {
        id: 'sc-7',
        title: 'Sampah Dedaunan Setelah Menyapu Halaman',
        location: 'Halaman Rumah Sore Hari',
        situation: 'Kamu dan adikmu selesai mengumpulkan dua karung daun mangga kering yang gugur di pekarangan rumah.',
        options: [
            {
                id: 'opt-a',
                badge: 'Pilihan A',
                actionText: 'Menyiram daun dengan minyak tanah lalu menyalakan korek api agar cepat musnah.',
                isSafe: false,
                consequence: 'Sangat berbahaya. Api besar bisa menyambar jemuran atau dinding rumah, serta asapnya mengganggu pernapasan tetangga.',
                tip: 'Membakar sampah di pekarangan adalah tindakan yang berbahaya dan mencemari udara.'
            },
            {
                id: 'opt-b',
                badge: 'Pilihan B',
                actionText: 'Memasukkan daun ke lubang tanah atau bak kompos agar terurai menjadi pupuk tanaman.',
                isSafe: true,
                consequence: 'Pilihan ramah lingkungan! Daun kering akan membusuk alami menjadi pupuk hitam yang menyuburkan tanaman bunga dan buah.',
                tip: 'Kompos adalah cara terbaik membersihkan pekarangan tanpa api.'
            }
        ]
    },
    {
        id: 'sc-8',
        title: 'Menemukan Alat Pemadam Kebakaran di Dinding Sekolah',
        location: 'Koridor Kelas',
        situation: 'Saat jam istirahat, seorang teman mengajakmu menurunkan tabung pemadam api merah di lorong sekolah untuk dimainkan.',
        options: [
            {
                id: 'opt-a',
                badge: 'Pilihan A',
                actionText: 'Mengingatkan teman bahwa tabung pemadam adalah alat darurat khusus orang dewasa dan tidak boleh dibuat mainan.',
                isSafe: true,
                consequence: 'Hebat dan bertanggung jawab! Alat pemadam harus selalu siap sedia dan tidak boleh rusak karena dimainkan.',
                tip: 'Alat keselamatan darurat hanya boleh dioperasikan oleh petugas atau orang dewasa.'
            },
            {
                id: 'opt-b',
                badge: 'Pilihan B',
                actionText: 'Ikut menarik segel tabung dan mencoba menyemprotkannya ke halaman sekolah.',
                isSafe: false,
                consequence: 'Berbahaya dan merugikan. Gas di dalamnya bertekanan tinggi, bisa melukai mata, dan membuat alat kosong saat darurat sungguhan.',
                tip: 'Jangan pernah menyentuh atau merusak perlengkapan darurat.'
            }
        ]
    },
    {
        id: 'sc-9',
        title: 'Mata Terasa Perih Saat Berada di Luar Ruangan',
        location: 'Halte Bus Sekolah',
        situation: 'Saat menunggu jemputan di tengah udara berasap, kedua matamu terasa perih dan gatal.',
        options: [
            {
                id: 'opt-a',
                badge: 'Pilihan A',
                actionText: 'Mengucek-ngucek mata sekuat tenaga memakai telapak tangan yang berdebu.',
                isSafe: false,
                consequence: 'Bisa melukai mata! Tangan kotor akan membuat debu menggores mata dan menyebabkan infeksi mata merah.',
                tip: 'Jangan mengucek mata saat terkena debu atau asap.'
            },
            {
                id: 'opt-b',
                badge: 'Pilihan B',
                actionText: 'Segera membilas mata dengan air bersih yang mengalir dan beristirahat di dalam ruangan.',
                isSafe: true,
                consequence: 'Pilihan yang benar dan higienis. Air bersih membersihkan butiran debu asap tanpa melukai selaput matamu.',
                tip: 'Bilas dengan air bersih yang mengalir jika mata terasa perih terkena asap.'
            }
        ]
    },
    {
        id: 'sc-10',
        title: 'Melihat Kobaran Api Mendekati Kebun Rumah',
        location: 'Pekarangan Belakang Rumah',
        situation: 'Tiba-tiba kamu melihat kobaran api liar membakar semak di batas kebun dan mulai merambat menuju kandang ayam di belakang rumah.',
        options: [
            {
                id: 'opt-a',
                badge: 'Pilihan A',
                actionText: 'Mengambil ember kecil dan berlari sendirian menuju kobaran api untuk menyiramnya.',
                isSafe: false,
                consequence: 'Sangat membahayakan nyawa! Api liar merambat cepat dan asap tebal bisa membuatmu pingsan kehabisan napas.',
                tip: 'Anak-anak bukan petugas pemadam. Tugasmu adalah menyelamatkan diri dan menjauhi api.'
            },
            {
                id: 'opt-b',
                badge: 'Pilihan B',
                actionText: 'Segera berteriak meminta tolong kepada orang tua, keluar dari rumah, dan menghubungi nomor darurat 113.',
                isSafe: true,
                consequence: 'Tindakan yang sangat berani dan benar! Keselamatan jiwamu adalah yang paling utama, dan petugas pemadam segera meluncur.',
                tip: 'Jauhi api, cari orang dewasa, dan segera hubungi nomor bantuan pemadam 113.'
            }
        ]
    }
];

export const ScenarioChoiceCard: React.FC = () => {
    // Sistem Acak Soal 1 per 1
    const getRandomIndex = () => Math.floor(Math.random() * ALL_SCENARIOS.length);

    const [currentScenarioIndex, setCurrentScenarioIndex] = useState<number>(0);
    const [selectedOption, setSelectedOption] = useState<ScenarioCardOption | null>(null);
    const [totalCompleted, setTotalCompleted] = useState<number>(0);
    const [stars, setStars] = useState<number>(0);
    const [isGameOver, setIsGameOver] = useState<boolean>(false);

    // Inisialisasi soal acak pertama saat komponen dipasang
    useEffect(() => {
        setCurrentScenarioIndex(getRandomIndex());
    }, []);

    const scenario = ALL_SCENARIOS[currentScenarioIndex];

    const handleSelectCard = (opt: ScenarioCardOption) => {
        if (selectedOption) return;
        setSelectedOption(opt);
        if (opt.isSafe) {
            setStars((prev) => prev + 1);
        }
    };

    // Pindah ke soal berikutnya: Acak 1 per 1 dari 10 soal
    const handleNextRandomCard = () => {
        setSelectedOption(null);
        const newCount = totalCompleted + 1;
        setTotalCompleted(newCount);

        // Menyelesaikan sesi setelah 5 putaran acak
        if (newCount >= 5) {
            setIsGameOver(true);
        } else {
            // Mengambil 1 soal acak baru
            setCurrentScenarioIndex(getRandomIndex());
        }
    };

    const handleRestart = () => {
        setSelectedOption(null);
        setTotalCompleted(0);
        setStars(0);
        setIsGameOver(false);
        setCurrentScenarioIndex(getRandomIndex());
    };

    return (
        <div className="bg-white rounded-3xl p-5 sm:p-8 lg:p-9 border border-rimba-100 shadow-sm space-y-6">

            {/* Header Game & Poin Bintang */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-rimba-100 pb-5">
                <div>
                    <div className="flex items-center gap-2">
                        <span className="text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-950 tracking-wider">
                            Tantangan Kartu Acak
                        </span>
                    </div>
                    <h2 className="font-display font-extrabold text-xl sm:text-2xl text-rimba-950 mt-1">
                        Latihan Memilih Tindakan Aman
                    </h2>
                    <p className="text-xs text-rimba-700 font-medium">
                        Soal akan muncul secara acak satu per satu. Pilih kartu tindakan paling aman untuk melindungi diri dan alam.
                    </p>
                </div>

                {/* Skor Bintang Real-time */}
                <div className="flex items-center gap-2.5 bg-earth-soft px-4 py-2 rounded-2xl border border-rimba-200 self-start sm:self-auto">
                    <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                            <Star
                                key={i}
                                className={`w-4 h-4 transition-all duration-300 ${i < stars ? 'text-amber-400 fill-amber-400 scale-110' : 'text-slate-300'
                                    }`}
                            />
                        ))}
                    </div>
                    <span className="font-display font-black text-xs text-rimba-950 pl-1 border-l border-rimba-200">
                        {stars}/5 Bintang
                    </span>
                </div>
            </div>

            {/* Layar Selesai 5 Ronde Acak */}
            {isGameOver ? (
                <div className="p-8 sm:p-10 rounded-3xl bg-linear-to-b from-earth-soft to-white border border-amber-200 text-center space-y-5 animate-in fade-in zoom-in-95 duration-300">
                    <div className="w-16 h-16 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center mx-auto border border-amber-300 shadow-md">
                        <Trophy className="w-8 h-8 text-amber-600" />
                    </div>

                    <div className="space-y-1.5 max-w-md mx-auto">
                        <h3 className="font-display font-extrabold text-2xl text-rimba-950">
                            {stars >= 4
                                ? 'Luar Biasa, Kamu Sahabat Rimba Teladan!'
                                : 'Bagus Sekali, Terus Asah Nalarmu ya!'}
                        </h3>
                        <p className="text-xs sm:text-sm text-rimba-800 leading-relaxed">
                            Kamu berhasil menyelesaikan 5 tantangan acak dan mengumpulkan <strong>{stars} Bintang Keberanian</strong>. Setiap kali mengulang, kamu bisa menjumpai situasi baru yang berbeda.
                        </p>
                    </div>

                    <button
                        onClick={handleRestart}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-rimba-700 hover:bg-rimba-800 active:scale-95 text-white font-display font-bold text-xs sm:text-sm shadow-md transition-all cursor-pointer"
                    >
                        <RotateCcw className="w-4 h-4" />
                        <span>Mainkan Soal Acak Baru</span>
                    </button>
                </div>
            ) : (
                <>
                    {/* Kartu Situasi Utama */}
                    <div className="relative rounded-3xl p-6 sm:p-7 bg-linear-to-br from-[#0c2f1d] to-[#061e12] text-white border border-emerald-800 shadow-lg overflow-hidden">
                        <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />

                        <div className="relative z-10 space-y-3">
                            <div className="flex flex-wrap items-center justify-between gap-2">
                                <span className="text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full bg-amber-400 text-amber-950 tracking-wider flex items-center gap-1">
                                    <Shuffle className="w-3 h-3" /> Tantangan Ke-{totalCompleted + 1} dari 5
                                </span>
                                <span className="text-xs text-emerald-300 font-bold flex items-center gap-1.5">
                                    <Eye className="w-3.5 h-3.5" /> Tempat: {scenario?.location}
                                </span>
                            </div>

                            <h3 className="font-display font-extrabold text-lg sm:text-xl text-white">
                                {scenario?.title}
                            </h3>

                            <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed font-normal bg-black/20 p-4 rounded-2xl border border-white/10">
                                {scenario?.situation}
                            </p>
                        </div>
                    </div>

                    {/* Pilihan Kartu Tindakan */}
                    <div className="space-y-3">
                        <div className="flex items-center justify-between text-xs font-bold text-slate-500 px-1">
                            <span>PILIH SALAH SATU TINDAKAN:</span>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {scenario?.options.map((opt) => {
                                const isSelected = selectedOption?.id === opt.id;
                                const isRevealed = selectedOption !== null;

                                let cardBorder = 'border-rimba-200/80 hover:border-rimba-400 hover:shadow-md';
                                let cardBg = 'bg-white';

                                if (isRevealed) {
                                    if (isSelected) {
                                        cardBorder = opt.isSafe ? 'border-emerald-500 ring-2 ring-emerald-400/40' : 'border-rose-400 ring-2 ring-rose-400/40';
                                        cardBg = opt.isSafe ? 'bg-emerald-50/60' : 'bg-rose-50/60';
                                    } else {
                                        cardBorder = 'border-slate-200 opacity-50';
                                        cardBg = 'bg-slate-50';
                                    }
                                }

                                return (
                                    <button
                                        key={opt.id}
                                        onClick={() => handleSelectCard(opt)}
                                        disabled={isRevealed}
                                        className={`relative p-5 sm:p-6 rounded-3xl border-2 text-left transition-all duration-300 flex flex-col justify-between gap-4 cursor-pointer select-none group ${cardBg} ${cardBorder} ${!isRevealed ? 'hover:-translate-y-1 active:scale-98' : ''
                                            }`}
                                    >
                                        <div className="space-y-2.5">
                                            <div className="flex items-center justify-between">
                                                <span className="text-[10px] font-black uppercase px-2.5 py-1 rounded-xl bg-earth-soft text-rimba-900 border border-rimba-200/80">
                                                    {opt.badge}
                                                </span>

                                                {isRevealed && isSelected && (
                                                    <span className={`text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full flex items-center gap-1 ${opt.isSafe ? 'bg-emerald-200 text-emerald-950' : 'bg-rose-200 text-rose-950'
                                                        }`}>
                                                        {opt.isSafe ? <CheckCircle2 className="w-3 h-3" /> : <AlertTriangle className="w-3 h-3" />}
                                                        {opt.isSafe ? 'Tindakan Aman' : 'Berbahaya'}
                                                    </span>
                                                )}
                                            </div>

                                            <p className="text-xs sm:text-sm font-bold text-rimba-950 leading-relaxed">
                                                {opt.actionText}
                                            </p>
                                        </div>

                                        <div className="pt-2 border-t border-rimba-100 flex items-center justify-between text-[11px] font-bold">
                                            <span className={isSelected ? (opt.isSafe ? 'text-emerald-700' : 'text-rose-700') : 'text-slate-400 group-hover:text-rimba-700'}>
                                                {isSelected ? 'Kartu Terbuka' : 'Klik kartu untuk memilih'}
                                            </span>
                                            <span className="w-6 h-6 rounded-full bg-earth-soft flex items-center justify-center text-rimba-800 group-hover:bg-rimba-600 group-hover:text-white transition-colors">
                                                ➔
                                            </span>
                                        </div>
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {/* Kotak Penjelasan Hasil */}
                    {selectedOption && (
                        <div
                            className={`p-5 sm:p-6 rounded-3xl border-2 text-xs sm:text-sm animate-in fade-in slide-in-from-bottom-2 duration-300 space-y-3 ${selectedOption.isSafe
                                    ? 'bg-emerald-50 border-emerald-300 text-emerald-950'
                                    : 'bg-rose-50 border-rose-300 text-rose-950'
                                }`}
                        >
                            <div className="flex items-start gap-3">
                                <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 mt-0.5 ${selectedOption.isSafe ? 'bg-emerald-200 text-emerald-800' : 'bg-rose-200 text-rose-800'
                                    }`}>
                                    {selectedOption.isSafe ? (
                                        <CheckCircle2 className="w-5 h-5" />
                                    ) : (
                                        <AlertTriangle className="w-5 h-5" />
                                    )}
                                </div>

                                <div className="space-y-1 flex-1">
                                    <div className="flex items-center gap-2">
                                        <span className="font-display font-extrabold text-sm sm:text-base">
                                            {selectedOption.isSafe ? 'Pilihanmu Tepat Sekali (+1 Bintang ⭐)' : 'Pilihan Ini Kurang Aman'}
                                        </span>
                                    </div>
                                    <p className="leading-relaxed font-medium">
                                        {selectedOption.consequence}
                                    </p>
                                    <p className="text-[11px] font-semibold text-slate-600 pt-1">
                                        Ingat baik-baik: {selectedOption.tip}
                                    </p>
                                </div>
                            </div>

                            <div className="pt-2 flex justify-end">
                                <button
                                    onClick={handleNextRandomCard}
                                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-rimba-700 hover:bg-rimba-800 active:scale-95 text-white font-display font-bold text-xs shadow-md transition-all cursor-pointer"
                                >
                                    <span>{totalCompleted + 1 < 5 ? 'Lanjut ke Soal Acak Berikutnya' : 'Lihat Hasil Akhir'}</span>
                                    <ArrowRight className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    )}
                </>
            )}

        </div>
    );
};