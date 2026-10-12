export interface MissionQuestion {
    id: string;
    question: string;
    options: {
        id: string;
        text: string;
        isCorrect: boolean;
        explanation: string;
    }[];
}

export interface Mission {
    id: string;
    level: number;
    slug: string;
    title: string;
    subtitle: string;
    category: string;
    xpReward: number;
    duration: string;
    lore: string;
    questions: MissionQuestion[];
}

export const MISSIONS: Mission[] = [
    {
        id: '1',
        level: 1,
        slug: 'patroli-darat',
        title: 'Misi 1: Patroli Pertama di Tepian Rawa',
        subtitle: 'Mengenal tanda-tanda awal lahan gambut yang mulai mengering.',
        category: 'Dasar Siaga',
        xpReward: 100,
        duration: '4 Menit',
        lore: 'Kamu ditugaskan berjalan di jalan setapak hutan rawa. Matahari sedang terik dan tanah mulai terasa hangat.',
        questions: [
            {
                id: 'q1',
                question: 'Apa tanda paling jelas bahwa tanah gambut sudah mulai kekurangan air dan rawan terbakar?',
                options: [
                    {
                        id: 'a',
                        text: 'Tanah terasa empuk berair dan banyak genangan katak.',
                        isCorrect: false,
                        explanation: 'Itu tanda gambut yang sehat dan basah, bukan yang rawan terbakar.'
                    },
                    {
                        id: 'b',
                        text: 'Permukaan tanah retak-retak kering dan daun semak di atasnya mudah remuk seperti kerupuk.',
                        isCorrect: true,
                        explanation: 'Tepat! Gambut yang kering kehilangan air dan serat organiknya menjadi sangat mudah disulut api.'
                    },
                    {
                        id: 'c',
                        text: 'Banyak embun pagi menempel di dedaunan.',
                        isCorrect: false,
                        explanation: 'Embun pagi adalah hal normal dan menandakan kelembapan udara yang baik.'
                    }
                ]
            }
        ]
    },
    {
        id: '2',
        level: 2,
        slug: 'sekat-kanal-darurat',
        title: 'Misi 2: Membendung Parit Kering',
        subtitle: 'Menahan aliran air agar tanah gambut tidak terkuras habis.',
        category: 'Mitigasi Air',
        xpReward: 120,
        duration: '5 Menit',
        lore: 'Ada saluran parit buatan manusia yang mengalirkan air rawa ke sungai besar secara berlebihan.',
        questions: [
            {
                id: 'q1',
                question: 'Kenapa petugas hutan harus membuat bendungan sekat kanal dari balok kayu di parit itu?',
                options: [
                    {
                        id: 'a',
                        text: 'Agar air rawa tidak terkuras habis ke sungai dan tanah gambut tetap basah seperti spons.',
                        isCorrect: true,
                        explanation: 'Benar! Sekat kanal menjaga air tetap menggenang di rawa sehingga api mustahil menjalar di tanah basah.'
                    },
                    {
                        id: 'b',
                        text: 'Supaya ikan rawa bisa melompat lebih tinggi.',
                        isCorrect: false,
                        explanation: 'Bukan itu tujuannya, bendungan sekat kanal dibuat khusus menjaga kelembapan tanah gambut.'
                    },
                    {
                        id: 'c',
                        text: 'Untuk membuat tempat berenang anak-anak desa.',
                        isCorrect: false,
                        explanation: 'Sekat kanal dibuat di area konservasi gambut, bukan tempat pemandian umum.'
                    }
                ]
            }
        ]
    },
    {
        id: '3',
        level: 3,
        slug: 'bara-bawah-tanah',
        title: 'Misi 3: Melacak Asap Bawah Tanah',
        subtitle: 'Menjinakkan bara api tersembunyi yang merayap di akar pohon.',
        category: 'Taktik Pemadam',
        xpReward: 150,
        duration: '6 Menit',
        lore: 'Tidak ada api berkobar di atas rumput, tapi ada asap putih panas keluar dari sela-sela akar pohon kelapa sawit liar.',
        questions: [
            {
                id: 'q1',
                question: 'Bagaimana cara memadamkan api yang bersembunyi di kedalaman 1 meter di bawah tanah gambut?',
                options: [
                    {
                        id: 'a',
                        text: 'Cukup disiram memakai satu ember air dari atas permukaan tanah.',
                        isCorrect: false,
                        explanation: 'Air di atas permukaan tidak tembus sampai ke bara bawah tanah yang dalam.'
                    },
                    {
                        id: 'b',
                        text: 'Memakai pipa suntik besi bertekanan tinggi yang ditancapkan ke dalam tanah sampai baranya dingin.',
                        isCorrect: true,
                        explanation: 'Luar biasa! Pipa suntik air memasukkan air langsung ke pusat bara api di dalam tanah hingga padam total.'
                    },
                    {
                        id: 'c',
                        text: 'Menutup kepulan asap dengan rumput kering.',
                        isCorrect: false,
                        explanation: 'Rumput kering justru akan ikut terbakar dan membuat apinya membesar.'
                    }
                ]
            }
        ]
    },
    {
        id: '4',
        level: 4,
        slug: 'sinyal-hotspot',
        title: 'Misi 4: Membaca Radar Panas Satelit',
        subtitle: 'Mengetahui koordinat titik panas sebelum api membesar.',
        category: 'Deteksi Dini',
        xpReward: 160,
        duration: '5 Menit',
        lore: 'Layar monitor posko berbunyi! Satelit cuaca mendeteksi titik merah berderajat panas tinggi di Blok Rimba Utara.',
        questions: [
            {
                id: 'q1',
                question: 'Jika satelit mendeteksi "Hotspot" dengan tingkat keyakinan tinggi, tindakan apa yang wajib segera diambil?',
                options: [
                    {
                        id: 'a',
                        text: 'Menunggu 3 hari sampai apinya mati sendiri kena hujan.',
                        isCorrect: false,
                        explanation: 'Jika ditunggu, bara api bisa merambat membakar puluhan hektar hutan.'
                    },
                    {
                        id: 'b',
                        text: 'Segera kirim regu patroli darat atau drone ke koordinat tersebut untuk memastikan dan memadamkannya.',
                        isCorrect: true,
                        explanation: 'Tepat! Verifikasi cepat oleh tim darat adalah kunci mematikan api selagi masih berupa titik kecil.'
                    },
                    {
                        id: 'c',
                        text: 'Mematikan layar komputer agar alarm berhenti berbunyi.',
                        isCorrect: false,
                        explanation: 'Mematikan alarm justru membahayakan keselamatan seluruh kawasan hutan.'
                    }
                ]
            }
        ]
    },
    {
        id: '5',
        level: 5,
        slug: 'siaga-kabut-asap',
        title: 'Misi 5: Menyelamatkan Warga dari Kabut Asap',
        subtitle: 'Melindungi mata dan paru-paru dari racun partikel debu halus.',
        category: 'Kesehatan Siaga',
        xpReward: 180,
        duration: '6 Menit',
        lore: 'Desa di dekat hutan mulai diselimuti kabut kuning pekat berbau sangit. Anak-anak mulai batuk-batuk.',
        questions: [
            {
                id: 'q1',
                question: 'Perlindungan diri apa yang paling tepat saat indeks pencemaran udara sudah berada di zona Berbahaya?',
                options: [
                    {
                        id: 'a',
                        text: 'Berlari kencang di jalanan desa tanpa penutup hidung.',
                        isCorrect: false,
                        explanation: 'Bernapas terengah-engah di udara berasap membuat racun PM2.5 menumpuk di paru-paru.'
                    },
                    {
                        id: 'b',
                        text: 'Menutup rapat pintu dan jendela, menyalakan penyaring udara, dan memakai masker N95 jika harus keluar.',
                        isCorrect: true,
                        explanation: 'Pintar! Masker standar N95 mampu menahan partikel debu halus berbahaya agar tidak terhirup ke darah.'
                    },
                    {
                        id: 'c',
                        text: 'Membuka semua ventilasi rumah selebar mungkin.',
                        isCorrect: false,
                        explanation: 'Membuka ventilasi membuat racun asap karhutla masuk dan mengendap di dalam rumah.'
                    }
                ]
            }
        ]
    },
    {
        id: '6',
        level: 6,
        slug: 'koridor-satwa',
        title: 'Misi 6: Evakuasi Satwa yang Tersesat',
        subtitle: 'Membantu keluarga orangutan yang panik mencari udara bersih.',
        category: 'Perlindungan Satwa',
        xpReward: 200,
        duration: '5 Menit',
        lore: 'Di pinggir kebun sawit tua, ada induk orangutan dan bayinya yang terperangkap kabut asap tebal dan kehausan.',
        questions: [
            {
                id: 'q1',
                question: 'Apa langkah paling bijak saat menemukan satwa liar yang tersesat akibat kebakaran hutan?',
                options: [
                    {
                        id: 'a',
                        text: 'Menangkapnya untuk dijual ke pasar hewan.',
                        isCorrect: false,
                        explanation: 'Itu perbuatan terlarang dan melanggar hukum perlindungan satwa langka!'
                    },
                    {
                        id: 'b',
                        text: 'Menghubungi petugas BKSDA atau dokter satwa liar agar diberi oksigen dan dipindahkan ke hutan aman.',
                        isCorrect: true,
                        explanation: 'Sangat benar! Dokter satwa punya peralatan medis khusus untuk memeriksa paru-paru hewan yang menghirup asap.'
                    },
                    {
                        id: 'c',
                        text: 'Melempari hewan dengan batu supaya mereka lari ke tengah api.',
                        isCorrect: false,
                        explanation: 'Sangat kejam dan membahayakan nyawa satwa yang sedang ketakutan.'
                    }
                ]
            }
        ]
    },
    {
        id: '7',
        level: 7,
        slug: 'kampung-bebas-bakar',
        title: 'Misi 7: Aksi Kompos Pengganti Bakar Daun',
        subtitle: 'Mengubah kebiasaan warga agar tidak membakar sampah sembarangan.',
        category: 'Solusi Warga',
        xpReward: 220,
        duration: '5 Menit',
        lore: 'Pak RT dan warga sedang mengumpulkan tumpukan dahan dan daun kering di pekarangan setelah kerja bakti.',
        questions: [
            {
                id: 'q1',
                question: 'Daripada membakar tumpukan sampah daun kering, apa cara ramah lingkungan yang paling bermanfaat?',
                options: [
                    {
                        id: 'a',
                        text: 'Memasukkan daun ke lubang tanah biopori agar diubah cacing menjadi pupuk kompos yang subur.',
                        isCorrect: true,
                        explanation: 'Bagus sekali! Daun yang dikomposkan menyuburkan tanah dan mencegah risiko kebakaran semak.'
                    },
                    {
                        id: 'b',
                        text: 'Membuang daun kering ke dalam selokan hingga mampet.',
                        isCorrect: false,
                        explanation: 'Membuang sampah ke selokan bisa menyumbat saluran air dan memicu banjir.'
                    },
                    {
                        id: 'c',
                        text: 'Menyiram bensin dan menyulutnya di bawah pohon rindang.',
                        isCorrect: false,
                        explanation: 'Bensin membuat api langsung menyambar pohon dan bisa merembet membakar rumah warga.'
                    }
                ]
            }
        ]
    },
    {
        id: '8',
        level: 8,
        slug: 'revegetasi-rimba',
        title: 'Misi 8: Menanam Kembali Hutan yang Pulih',
        subtitle: 'Menghijaukan kembali area bekas kebakaran dengan pohon endemik.',
        category: 'Restorasi Akhir',
        xpReward: 250,
        duration: '7 Menit',
        lore: 'Lahan gosong seluas 5 hektar sudah dingin dan siap ditanami kembali bibit pohon agar hutan kembali rindang.',
        questions: [
            {
                id: 'q1',
                question: 'Jenis bibit pohon apa yang harus ditanam di rawa gambut agar akarnya kuat dan tahan genangan air alami?',
                options: [
                    {
                        id: 'a',
                        text: 'Pohon kaktus padang pasir yang tidak suka air.',
                        isCorrect: false,
                        explanation: 'Kaktus akan busuk dan mati jika ditanam di tanah rawa yang berair.'
                    },
                    {
                        id: 'b',
                        text: 'Pohon asli rawa gambut seperti Jelutung Rawa, Belangeran, dan Pulai Rawa.',
                        isCorrect: true,
                        explanation: 'Sempurna! Pohon asli rawa memang dirancang alami oleh alam untuk mengikat air gambut dan menjaga kesejukan udara.'
                    },
                    {
                        id: 'c',
                        text: 'Pohon cemara plastik yang tidak perlu disiram.',
                        isCorrect: false,
                        explanation: 'Pohon plastik tidak bisa menghasilkan oksigen dan mencemari alam.'
                    }
                ]
            }
        ]
    }
];