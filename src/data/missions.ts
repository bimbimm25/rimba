export interface MissionQuestion {
    id: string;
    question: string;
    options: string[];
    correctAnswer: number;
    explanation: string;
}

export interface Mission {
    id: string;
    order: number;
    title: string;
    subtitle: string;
    description: string;
    category: string;
    xpReward: number;
    questions: MissionQuestion[];
}

export const MISSIONS: Mission[] = [
    // ==========================================
    // MODUL 1: MENGENAL API DAN BAHAYA KARHUTLA
    // ==========================================
    {
        id: 'misi-1',
        order: 1,
        title: 'Misi 1: Mengenal Api dan Karhutla',
        subtitle: 'Belajar kegunaan api dan bahaya kebakaran',
        description: 'Di misi ini, kamu akan belajar apa itu karhutla, bagaimana api bisa menyala, dan mengapa kita harus berhati-hati terhadap api.',
        category: 'Mengenal Api dan Karhutla',
        xpReward: 100,
        questions: [
            {
                id: 'm1-q1',
                question: 'Karhutla adalah singkatan dari Kebakaran Hutan dan Lahan. Apa yang dimaksud dengan karhutla?',
                options: [
                    'Kebakaran Hutan dan Lahan',
                    'Kerusakan Hutan dan Laut',
                    'Keindahan Rawa dan Lahan',
                    'Kebersihan Hutan dan Lingkungan'
                ],
                correctAnswer: 0,
                explanation: 'Karhutla berarti Kebakaran Hutan dan Lahan.'
            },
            {
                id: 'm1-q2',
                question: 'Contoh penggunaan api yang bermanfaat dan aman jika diawasi orang dewasa adalah ...',
                options: [
                    'Menyalakan korek api di dekat tumpukan jerami',
                    'Api kompor dapur untuk memasak makanan',
                    'Bermain kembang api di dalam kamar tidur',
                    'Membakar semak kering di belakang sekolah'
                ],
                correctAnswer: 1,
                explanation: 'Api kompor bisa digunakan untuk memasak, tetapi harus ditangani oleh orang dewasa.'
            },
            {
                id: 'm1-q3',
                question: 'Api bisa menyala jika ada tiga hal: bahan yang terbakar, panas, dan ...',
                options: ['Air mineral', 'Oksigen (udara)', 'Tanah basah', 'Batu kali'],
                correctAnswer: 1,
                explanation: 'Api dapat menyala jika ada bahan yang terbakar, panas, dan oksigen dari udara.'
            },
            {
                id: 'm1-q4',
                question: 'Mengapa kebakaran hutan lebih mudah terjadi saat kemarau panjang?',
                options: [
                    'Karena angin musim kemarau mengandung es',
                    'Karena hewan hutan menyalakan api',
                    'Karena pohon berhenti bernapas',
                    'Karena daun dan ranting menjadi sangat kering serta mudah tersulut'
                ],
                correctAnswer: 3,
                explanation: 'Saat jarang turun hujan, daun dan ranting menjadi kering sehingga lebih mudah terbakar.'
            },
            {
                id: 'm1-q5',
                question: 'Benda kecil apa yang bisa memicu kebakaran jika dibuang sembarangan?',
                options: ['Puntung rokok yang masih menyala', 'Batu kerikil', 'Daun segar yang basah', 'Kulit jeruk kering'],
                correctAnswer: 0,
                explanation: 'Puntung rokok yang masih memiliki bara kecil dapat membakar rumput kering seketika.'
            },
            {
                id: 'm1-q6',
                question: 'Siapa yang boleh menyalakan api di luar ruangan?',
                options: [
                    'Anak-anak saat bermain petak umpet',
                    'Siapa saja tanpa pengawasan',
                    'Siswa SD sepulang sekolah',
                    'Orang dewasa yang bertanggung jawab dan memiliki izin jika diperlukan'
                ],
                correctAnswer: 3,
                explanation: 'Anak-anak tidak boleh menyalakan api sendiri. Mintalah bantuan orang dewasa.'
            },
            {
                id: 'm1-q7',
                question: 'Apa manfaat hutan bagi udara yang kita hirup?',
                options: [
                    'Menghasilkan debu dan asap kotor',
                    'Membuat udara menjadi panas dan pengap',
                    'Menghasilkan oksigen dan menyerap karbon dioksida',
                    'Menahan angin agar tidak berembus'
                ],
                correctAnswer: 2,
                explanation: 'Pohon membantu menghasilkan oksigen dan menyerap karbon dioksida.'
            },
            {
                id: 'm1-q8',
                question: 'Apa yang sebaiknya kamu lakukan jika melihat teman membawa korek api ke dekat rumput kering?',
                options: [
                    'Ikut mencoba menyalakan satu batang korek',
                    'Memintanya berhenti, lalu segera memberi tahu guru atau orang dewasa',
                    'Menonton dari kejauhan tanpa peduli',
                    'Menyoraki agar apinya membesar'
                ],
                correctAnswer: 1,
                explanation: 'Jangan mendekati api. Beri tahu guru atau orang dewasa agar mereka bisa membantu.'
            },
            {
                id: 'm1-q9',
                question: 'Mengapa api mudah merambat di rumput yang kering?',
                options: [
                    'Karena rumput ilalang mengandung banyak air',
                    'Karena rumput ilalang tahan terhadap panas',
                    'Karena rumput kering mudah terbakar dan api bisa menyebar tertiup angin',
                    'Karena warnanya hijau tua'
                ],
                correctAnswer: 2,
                explanation: 'Rumput yang kering mudah terbakar, apalagi jika angin membantu menyebarkan api.'
            },
            {
                id: 'm1-q10',
                question: 'Apa yang harus dilakukan anak jika ada kebakaran hutan di dekat rumah?',
                options: [
                    'Menjauh ke tempat aman dan segera memberi tahu orang dewasa',
                    'Bersembunyi di balik semak-semak yang berasap',
                    'Mengambil ember untuk memadamkan api sendirian',
                    'Mendekat ke kobaran api untuk merekam foto'
                ],
                correctAnswer: 0,
                explanation: 'Anak-anak tidak boleh memadamkan kebakaran sendiri. Segera menjauh dan minta bantuan orang dewasa.'
            }
        ]
    },

    // ==========================================
    // MODUL 2: KEISTIMEWAAN LAHAN GAMBUT
    // ==========================================
    {
        id: 'misi-2',
        order: 2,
        title: 'Misi 2: Mengenal Lahan Gambut',
        subtitle: 'Belajar tentang tanah yang menyimpan air',
        description: 'Kamu akan mengenal tanah gambut, cara terbentuknya, manfaatnya bagi alam, dan alasan lahan gambut perlu dijaga agar tidak kering dan terbakar.',
        category: 'Mengenal Lahan Gambut',
        xpReward: 110,
        questions: [
            {
                id: 'm2-q1',
                question: 'Bagaimana tanah gambut terbentuk?',
                options: [
                    'Campuran semen dan pecahan batu gunung',
                    'Sisa daun, ranting, dan tumbuhan yang menumpuk selama waktu yang sangat lama',
                    'Lumpur buatan pabrik pupuk',
                    'Pasir putih yang tertiup angin laut'
                ],
                correctAnswer: 1,
                explanation: 'Tanah gambut terbentuk dari sisa tumbuhan yang menumpuk dan membusuk perlahan dalam waktu yang sangat lama.'
            },
            {
                id: 'm2-q2',
                question: 'Mengapa tanah gambut yang sehat diibaratkan seperti spons besar?',
                options: [
                    'Karena dapat menyerap dan menyimpan banyak air',
                    'Karena mudah hancur jika tersiram tetesan hujan',
                    'Karena teksturnya kenyal dan sering dijadikan sabun mandi',
                    'Karena terapung bebas di atas permukaan danau'
                ],
                correctAnswer: 0,
                explanation: 'Tanah gambut dapat menyimpan air seperti spons sehingga membantu menjaga lingkungan tetap basah.'
            },
            {
                id: 'm2-q3',
                question: 'Di pulau mana saja lahan gambut banyak ditemukan di Indonesia?',
                options: [
                    'Bali, Madura, dan Nusa Tenggara Barat',
                    'Kepulauan Maluku bagian timur laut',
                    'Sumatra, Kalimantan, dan Papua',
                    'Pulau Jawa bagian selatan saja'
                ],
                correctAnswer: 2,
                explanation: 'Lahan gambut banyak ditemukan di Sumatra, Kalimantan, dan Papua.'
            },
            {
                id: 'm2-q4',
                question: 'Apa yang bisa terjadi jika kanal di lahan gambut terlalu dalam?',
                options: [
                    'Airnya berkurang sehingga tanah gambut menjadi kering dan mudah terbakar',
                    'Ikan air tawar bertambah terlalu banyak',
                    'Permukaan rawa tertutup endapan pasir',
                    'Pohon kelapa akan tumbuh terlalu tinggi'
                ],
                correctAnswer: 0,
                explanation: 'Jika terlalu banyak air keluar, tanah gambut menjadi kering dan lebih mudah terbakar.'
            },
            {
                id: 'm2-q5',
                question: 'Mengapa kebakaran di lahan gambut kadang tidak terlihat dari permukaan?',
                options: [
                    'Karena api hanya menyala saat malam hari',
                    'Karena tertutup oleh pasir pantai',
                    'Karena api bisa membakar lapisan gambut di bawah permukaan tanah',
                    'Karena api di gambut tidak memancarkan cahaya maupun panas'
                ],
                correctAnswer: 2,
                explanation: 'Api dapat membakar lapisan gambut di bawah tanah meskipun tidak terlihat kobaran api di permukaan.'
            },
            {
                id: 'm2-q6',
                question: 'Bangunan apa yang dibuat di kanal untuk menahan air agar lahan gambut tidak kering?',
                options: ['Jembatan ponton', 'Pagar kawat berduri', 'Menara pandang besi', 'Sekat kanal (canal blocking)'],
                correctAnswer: 3,
                explanation: 'Sekat kanal membantu menahan air agar tanah gambut tetap basah.'
            },
            {
                id: 'm2-q7',
                question: 'Unsur apa yang banyak tersimpan di tanah gambut dan dapat terlepas ke udara saat gambut terbakar?',
                options: ['Karbon (karbon dioksida)', 'Minyak wangi alami', 'Gas helium', 'Garam dapur'],
                correctAnswer: 0,
                explanation: 'Tanah gambut menyimpan banyak karbon. Saat terbakar, karbon dilepaskan ke udara dan menambah gas yang memanaskan bumi.'
            },
            {
                id: 'm2-q8',
                question: 'Seperti apa asap dari kebakaran lahan gambut?',
                options: [
                    'Manis seperti bau gulali terbakar',
                    'Segar seperti udara pegunungan pagi',
                    'Harum semerbak seperti minyak melati',
                    'Menyengat, membuat mata perih, dan mengganggu pernapasan'
                ],
                correctAnswer: 3,
                explanation: 'Asap kebakaran gambut dapat membuat mata perih dan mengganggu pernapasan. Jauhi asap dan beri tahu orang dewasa.'
            },
            {
                id: 'm2-q9',
                question: 'Manakah contoh tanaman yang dapat tumbuh di lahan gambut?',
                options: ['Tanaman gandum', 'Pohon ramin, jelutung, dan sagu', 'Pohon apel batu', 'Pohon kaktus gurun'],
                correctAnswer: 1,
                explanation: 'Jelutung, ramin, dan sagu merupakan tanaman asli lahan basah gambut yang menjaga tanah tetap lembap.'
            },
            {
                id: 'm2-q10',
                question: 'Apa saja tiga cara utama untuk memulihkan lahan gambut?',
                options: [
                    'Recycle, Return, Repair',
                    'Rewetting (pembasahan), Revegetation (penanaman kembali), Revitalization (peningkatan ekonomi)',
                    'Running, Reading, Relaxing',
                    'Replanting, Reselling, Rebuilding'
                ],
                correctAnswer: 1,
                explanation: 'Lahan gambut dipulihkan dengan membasahinya kembali, menanam tumbuhan, dan mendukung kehidupan masyarakat sekitar.'
            }
        ]
    },

    // ==========================================
    // MODUL 3: PENYEBAB DAN DAMPAK KEBAKARAN
    // ==========================================
    {
        id: 'misi-3',
        order: 3,
        title: 'Misi 3: Penyebab dan Dampak Kebakaran',
        subtitle: 'Cari tahu penyebab dan akibat kebakaran',
        description: 'Pelajari hal-hal yang dapat memicu kebakaran hutan dan lahan serta dampaknya bagi manusia, hewan, tumbuhan, udara, dan tanah.',
        category: 'Penyebab dan Dampak Kebakaran',
        xpReward: 120,
        questions: [
            {
                id: 'm3-q1',
                question: 'Apa yang sering menjadi penyebab kebakaran hutan dan lahan?',
                options: [
                    'Letusan lava es purba',
                    'Sambaran petir di musim hujan',
                    'Kelalaian atau tindakan manusia yang sengaja membakar',
                    'Gesekan tanduk rusa liar'
                ],
                correctAnswer: 2,
                explanation: 'Banyak kebakaran hutan dan lahan terjadi karena kelalaian atau karena orang sengaja membakar lahan.'
            },
            {
                id: 'm3-q2',
                question: 'Mengapa membersihkan lahan dengan cara membakarnya berbahaya?',
                options: [
                    'Karena dapat mengundang hujan badai mendadak',
                    'Karena api bisa menyebar tanpa terkendali ke hutan dan lahan di sekitarnya',
                    'Karena hewan ternak takut melihat warna merah',
                    'Karena abunya membuat tanah menjadi beku'
                ],
                correctAnswer: 1,
                explanation: 'Api di lahan terbuka sulit dikendalikan, terutama saat cuaca kering dan angin bertiup kencang.'
            },
            {
                id: 'm3-q3',
                question: 'Hewan apa yang dapat kehilangan tempat tinggal akibat kebakaran hutan di Sumatra dan Kalimantan?',
                options: ['Penguin kaisar', 'Beruang kutub es', 'Zebra padang rumput', 'Orangutan dan harimau'],
                correctAnswer: 3,
                explanation: 'Kebakaran dapat merusak tempat tinggal dan sumber makanan orangutan, bekantan, harimau, serta hewan lainnya.'
            },
            {
                id: 'm3-q4',
                question: 'Apa dampak kabut asap kebakaran hutan terhadap kegiatan belajar di sekolah?',
                options: [
                    'Jam istirahat di lapangan menjadi lebih panjang',
                    'Sekolah bisa diliburkan agar siswa tidak terlalu banyak menghirup asap',
                    'Ujian sekolah ditiadakan selamanya',
                    'Siswa mendapatkan seragam baru secara gratis'
                ],
                correctAnswer: 1,
                explanation: 'Jika udara berbahaya, sekolah bisa diliburkan agar anak-anak terhindar dari paparan asap.'
            },
            {
                id: 'm3-q5',
                question: 'Apa yang bisa terjadi pada penerbangan saat kabut asap sangat tebal?',
                options: [
                    'Pesawat terbang lebih rendah di atas rumah',
                    'Pesawat terbang lebih cepat dari biasanya',
                    'Semua tiket pesawat menjadi gratis',
                    'Penerbangan bisa ditunda atau dibatalkan karena pilot sulit melihat dengan jelas'
                ],
                correctAnswer: 3,
                explanation: 'Kabut asap mengurangi jarak pandang sehingga pesawat lebih sulit lepas landas atau mendarat dengan aman.'
            },
            {
                id: 'm3-q6',
                question: 'Mengapa kebakaran hutan juga mengganggu sumber makanan hewan?',
                options: [
                    'Tumbuhan buah pakan satwa musnah terbakar',
                    'Pohon bertambah lebat secara tiba-tiba',
                    'Hewan pemakan rumput berpindah ke laut',
                    'Air di sungai berubah menjadi es'
                ],
                correctAnswer: 0,
                explanation: 'Saat tumbuhan dan sumber makanan terbakar, hewan bisa kelaparan atau masuk ke permukiman untuk mencari makan.'
            },
            {
                id: 'm3-q7',
                question: 'Mengapa pecahan kaca di tempat kering kadang dianggap berbahaya?',
                options: ['Cermin yang mendinginkan rumput', 'Kipas angin pendingin', 'Benda yang dapat memusatkan sinar matahari pada satu titik', 'Payung pelindung panas'],
                correctAnswer: 2,
                explanation: 'Jangan membuang pecahan kaca sembarangan. Benda itu bisa melukai orang dan dalam kondisi tertentu dapat membantu memicu kebakaran.'
            },
            {
                id: 'm3-q8',
                question: 'Apa istilah untuk kabut asap kebakaran yang menyebar hingga ke negara lain?',
                options: ['Global cold wave', 'Transboundary haze pollution', 'Acid snow fall', 'Tropical rainstorm'],
                correctAnswer: 1,
                explanation: 'Asap lintas batas adalah asap yang menyebar dari satu negara ke negara lain.'
            },
            {
                id: 'm3-q9',
                question: 'Mengapa tanah di bukit yang hutannya terbakar lebih mudah longsor saat hujan?',
                options: [
                    'Akar pohon yang membantu menahan tanah ikut rusak atau terbakar',
                    'Batu-batu gunung mencair terkena abu',
                    'Sungai di bawah perbukitan mengering',
                    'Tanah menjadi terlalu gembur dan ringan'
                ],
                correctAnswer: 0,
                explanation: 'Akar pohon membantu menahan tanah. Jika akar rusak atau hilang, tanah lebih mudah longsor saat hujan deras.'
            },
            {
                id: 'm3-q10',
                question: 'Apa yang bisa kita lakukan untuk membantu mencegah kebakaran di sekitar rumah?',
                options: [
                    'Tidak membakar sampah dan mengajak keluarga menjaga lingkungan',
                    'Membakar daun gugur setiap sore hari',
                    'Menyalakan api unggun dekat semak ilalang',
                    'Menimbun korek api di dekat pagar kayu'
                ],
                correctAnswer: 0,
                explanation: 'Tidak membakar sampah dapat mengurangi asap dan membantu mencegah api menyebar.'
            }
        ]
    },

    // ==========================================
    // MODUL 4: PROTOKOL KESELAMATAN ANAK
    // ==========================================
    {
        id: 'misi-4',
        order: 4,
        title: 'Misi 4: Menjaga Keselamatan Diri',
        subtitle: 'Belajar langkah aman saat ada kebakaran',
        description: 'Kamu akan belajar apa yang harus dilakukan saat melihat api atau asap, ke mana harus pergi, dan siapa yang perlu dimintai bantuan.',
        category: 'Keselamatan Diri',
        xpReward: 130,
        questions: [
            {
                id: 'm4-q1',
                question: 'Apa yang harus dilakukan pertama kali saat melihat kebakaran?',
                options: [
                    'Mengambil ranting kayu untuk memukul kobaran api',
                    'Mendekat untuk mencari tahu sumber kebocoran api',
                    'Segera menjauh dari api dan asap, lalu pergi ke tempat aman',
                    'Duduk terdiam sambil menunggu pertolongan datang'
                ],
                correctAnswer: 2,
                explanation: 'Utamakan keselamatan. Menjauhlah dari api dan asap, lalu beri tahu orang dewasa.'
            },
            {
                id: 'm4-q2',
                question: 'Siapa yang harus kamu beri tahu jika melihat asap kebakaran?',
                options: [
                    'Guru di sekolah, orang tua di rumah, atau orang dewasa terdekat',
                    'Hewan peliharaan di rumah',
                    'Teman sebaya yang sedang tidur',
                    'Tidak perlu melapor ke siapa-siapa'
                ],
                correctAnswer: 0,
                explanation: 'Guru, orang tua, atau orang dewasa dapat membantu dan menghubungi petugas pemadam kebakaran.'
            },
            {
                id: 'm4-q3',
                question: 'Bolehkah anak ikut memadamkan kebakaran hutan atau lahan?',
                options: [
                    'Boleh, asalkan memakai sepatu sandal',
                    'Boleh, jika disuruh oleh teman sepermainan',
                    'Boleh, jika membawa botol air minum kecil',
                    'Tidak boleh. Anak harus menjauh dan meminta bantuan orang dewasa'
                ],
                correctAnswer: 3,
                explanation: 'Memadamkan kebakaran sangat berbahaya. Anak-anak harus menyelamatkan diri dan memberi tahu orang dewasa.'
            },
            {
                id: 'm4-q4',
                question: 'Jika ada asap di dalam ruangan saat kebakaran, apa yang sebaiknya kamu lakukan?',
                options: [
                    'Tidur telentang di lantai tanpa bergerak',
                    'Melompat-lompat sambil berteriak kencang',
                    'Jika jalur keluar aman, merunduk dan segera keluar menjauhi asap dengan mengikuti arahan orang dewasa',
                    'Berdiri tegak setinggi mungkin di atas kursi'
                ],
                correctAnswer: 2,
                explanation: 'Asap biasanya naik, tetapi udara di bawah pun bisa berbahaya. Segera keluar lewat jalur aman dan ikuti arahan orang dewasa.'
            },
            {
                id: 'm4-q5',
                question: 'Apa yang paling tepat dilakukan anak saat udara dipenuhi asap?',
                options: [
                    'Tetap bermain di luar agar cepat terbiasa dengan asap',
                    'Menjauh dari asap, masuk ke tempat yang lebih aman, dan memberi tahu orang dewasa',
                    'Mendekati sumber asap untuk melihat apa yang terjadi',
                    'Menutup hidung dengan tisu lalu terus bermain di luar'
                ],
                correctAnswer: 1,
                explanation: 'Kain basah bukan pengganti masker yang sesuai dan tidak membuat asap aman dihirup. Jauhi asap dan minta bantuan orang dewasa.'
            },
            {
                id: 'm4-q6',
                question: 'Apa arti tanda jalur evakuasi di dinding sekolah?',
                options: [
                    'Arah menuju lapangan bermain bola saat istirahat',
                    'Petunjuk arah untuk menuju pintu keluar dan tempat berkumpul yang aman',
                    'Pintu masuk menuju kantin sekolah',
                    'Lokasi tempat menyembunyikan mainan anak'
                ],
                correctAnswer: 1,
                explanation: 'Tanda evakuasi menunjukkan jalan keluar dan arah menuju tempat berkumpul yang aman.'
            },
            {
                id: 'm4-q7',
                question: 'Bagaimana sikap yang benar saat keluar dari ruangan untuk menyelamatkan diri?',
                options: [
                    'Berjalan tertib tanpa saling mendorong atau berebut pintu',
                    'Kembali ke kelas untuk mencari tas dan pensil yang tertinggal',
                    'Berlari secepatnya sambil mendorong teman di depan',
                    'Bercanda dan tertawa di lorong darurat'
                ],
                correctAnswer: 0,
                explanation: 'Berjalan dengan tertib dan tidak saling mendorong membantu semua orang keluar dengan aman.'
            },
            {
                id: 'm4-q8',
                question: 'Nomor berapa yang dapat dihubungi untuk meminta bantuan darurat?',
                options: ['113 / 112', '911', '108', '123'],
                correctAnswer: 0,
                explanation: 'Nomor layanan darurat dapat berbeda di setiap daerah. Hafalkan nomor bantuan setempat bersama orang tua atau guru.'
            },
            {
                id: 'm4-q9',
                question: 'Jika pakaianmu terbakar, tindakan yang dikenal dengan nama "Stop, Drop, and Roll" berarti berhenti, menjatuhkan diri, lalu ...',
                options: ['Run (Berlari sekencang-kencangnya)', 'Shout (Menutup muka dan diam saja)', 'Jump (Melompat setinggi-tingginya)', 'berguling di tanah untuk membantu memadamkan api pada pakaian'],
                correctAnswer: 3,
                explanation: 'Berhenti, jatuhkan tubuh ke tanah, lalu berguling dapat membantu memadamkan api pada pakaian. Setelah itu, segera minta pertolongan.'
            },
            {
                id: 'm4-q10',
                question: 'Mengapa kita tidak boleh berlari jika pakaian sedang terbakar?',
                options: [
                    'Karena jalanan menjadi licin terkena air',
                    'Karena embusan angin akan membuat kobaran api di baju bertambah besar',
                    'Karena membuat petugas pemadam tertawa',
                    'Karena sandal bisa terlepas di jalan'
                ],
                correctAnswer: 1,
                explanation: 'Berlari dapat membuat api pada pakaian semakin besar. Berhenti, jatuhkan tubuh, lalu berguling dan minta bantuan.'
            }
        ]
    },

    // ==========================================
    // MODUL 5: KESEHATAN & PERLINDUNGAN NAPAS
    // ==========================================
    {
        id: 'misi-5',
        order: 5,
        title: 'Misi 5: Menjaga Pernapasan Tetap Sehat',
        subtitle: 'Kenali bahaya asap dan cara melindungi diri',
        description: 'Pelajari mengapa asap berbahaya bagi tubuh dan apa yang bisa kamu lakukan bersama orang dewasa saat udara dipenuhi asap.',
        category: 'Kesehatan dan Asap',
        xpReward: 140,
        questions: [
            {
                id: 'm5-q1',
                question: 'Gangguan kesehatan apa yang bisa terjadi jika kita menghirup banyak asap?',
                options: [
                    'ISPA (Infeksi Saluran Pernapasan Akut)',
                    'Sakit gigi berlubang',
                    'Patah tulang kaki',
                    'Penyakit kulit kurap'
                ],
                correctAnswer: 0,
                explanation: 'Asap dapat menyebabkan batuk, sakit tenggorokan, dan sesak napas. Jika merasa tidak sehat, segera beri tahu orang dewasa.'
            },
            {
                id: 'm5-q2',
                question: 'Asap bisa mengandung partikel sangat kecil bernama PM2.5. Apa itu PM2.5?',
                options: [
                    'Butiran kerikil pasir di pantai',
                    'Partikel debu sangat kecil yang bisa masuk jauh ke dalam paru-paru',
                    'Serbuk gula pasir manis',
                    'Tetesan air embun di dedaunan pagi'
                ],
                correctAnswer: 1,
                explanation: 'PM2.5 adalah debu polusi yang ukurannya sangat kecil sehingga sulit dilihat. Partikel ini bisa masuk jauh ke paru-paru, jadi kita perlu menjauhi asap.'
            },
            {
                id: 'm5-q3',
                question: 'Masker jenis apa yang dapat membantu menyaring partikel halus dari asap?',
                options: ['Syal rajut wol berlubang besar', 'Masker kain tipis 1 lapis', 'Topeng mainan plastik', 'Masker standar N95 atau KN95'],
                correctAnswer: 3,
                explanation: 'Masker N95 atau KN95 dapat menyaring banyak partikel halus jika dipakai dengan benar. Mintalah bantuan orang dewasa untuk memilih dan memakainya.'
            },
            {
                id: 'm5-q4',
                question: 'Mengapa kita perlu cukup minum air putih saat udara berasap?',
                options: [
                    'Agar perut terasa kenyang tanpa makan',
                    'Membantu menjaga tenggorokan tetap nyaman dan tubuh tetap terhidrasi',
                    'Supaya bisa menahan napas lebih lama',
                    'Agar suhu tubuh menjadi sangat dingin'
                ],
                correctAnswer: 1,
                explanation: 'Minum air putih yang cukup membantu tubuh tetap terhidrasi, tetapi tidak menghilangkan bahaya asap yang terhirup.'
            },
            {
                id: 'm5-q5',
                question: 'Jika informasi kualitas udara menunjukkan warna kuning atau merah, apa artinya bagi kita?',
                options: [
                    'Udara mulai tercemar hingga tidak sehat, jadi kegiatan di luar ruangan perlu dibatasi',
                    'Udara sangat bersih dan segar untuk berolahraga lari',
                    'Tanda bahwa hujan lebat akan turun sebentar lagi',
                    'Waktu yang tepat untuk berkemah di tepi hutan'
                ],
                correctAnswer: 0,
                explanation: 'Warna kuning atau merah menandakan udara tercemar. Ikuti arahan orang dewasa dan batasi kegiatan di luar ruangan.'
            },
            {
                id: 'm5-q6',
                question: 'Apa yang sebaiknya dilakukan di rumah saat udara di luar sedang tidak sehat?',
                options: [
                    'Menutup pintu dan jendela agar asap dari luar tidak mudah masuk',
                    'Bermain layang-layang di tanah lapang berangin',
                    'Membuka semua pintu selebar-lebarnya sepanjang hari',
                    'Menyalakan kipas angin di teras depan rumah'
                ],
                correctAnswer: 0,
                explanation: 'Menutup pintu dan jendela dapat mengurangi asap yang masuk. Ikuti petunjuk orang dewasa tentang cara menjaga udara di dalam rumah.'
            },
            {
                id: 'm5-q7',
                question: 'Apa yang sebaiknya dilakukan jika mata terasa perih karena asap?',
                options: [
                    'Membuka mata lebar-lebar di depan kipas angin kotor',
                    'Menempelkan cabai atau bawang di kelopak mata',
                    'Membilas mata dengan air bersih dan tidak menguceknya, lalu memberi tahu orang dewasa',
                    'Menggosok mata dengan tangan yang berdebu'
                ],
                correctAnswer: 2,
                explanation: 'Bilas mata dengan air bersih dan jangan menguceknya. Jika masih perih, minta bantuan orang dewasa.'
            },
            {
                id: 'm5-q8',
                question: 'Siapa yang perlu lebih dilindungi saat terjadi kabut asap?',
                options: [
                    'Para penyelam laut profesional',
                    'Atlet lari maraton dewasa',
                    'Petugas kesehatan yang memakai APD lengkap',
                    'Anak-anak, bayi, ibu hamil, dan kakek-nenek lansia'
                ],
                correctAnswer: 3,
                explanation: 'Anak-anak, bayi, ibu hamil, dan orang lanjut usia lebih rentan terkena dampak asap.'
            },
            {
                id: 'm5-q9',
                question: 'Makanan apa yang baik untuk membantu menjaga kesehatan tubuh?',
                options: [
                    'Keripik asin kemasan tanpa minum air',
                    'Mi instan pedas setiap kali makan',
                    'Buah-buahan segar dan sayuran kaya vitamin C serta antioksidan',
                    'Gorengan minyak jelantah dan es sirop manis'
                ],
                correctAnswer: 2,
                explanation: 'Sayur dan buah membantu memenuhi kebutuhan vitamin dan zat gizi. Namun, makanan sehat tidak menggantikan langkah untuk menghindari asap.'
            },
            {
                id: 'm5-q10',
                question: 'Apa yang sebaiknya dilakukan setelah pulang dari tempat yang berasap atau berdebu?',
                options: [
                    'Menggantung baju kotor di dalam kamar tidur',
                    'Mencuci tangan dan wajah, berkumur, serta mengganti pakaian',
                    'Makan makanan tanpa mencuci tangan terlebih dahulu',
                    'Langsung berbaring tidur di kasur tanpa cuci kaki'
                ],
                correctAnswer: 1,
                explanation: 'Membersihkan diri dan mengganti pakaian membantu mengurangi debu dan kotoran yang menempel.'
            }
        ]
    },

    // ==========================================
    // MODUL 6: OLAH SAMPAH RAMAH LINGKUNGAN
    // ==========================================
    {
        id: 'misi-6',
        order: 6,
        title: 'Misi 6: Mengolah Sampah Tanpa Membakar',
        subtitle: 'Belajar memilah sampah dan membuat kompos',
        description: 'Kamu akan belajar cara mengurangi sampah, memanfaatkan daun dan sisa makanan, serta menjaga udara tetap bersih tanpa membakar sampah.',
        category: 'Mengolah Sampah dengan Aman',
        xpReward: 150,
        questions: [
            {
                id: 'm6-q1',
                question: 'Mengapa kita tidak boleh membakar daun dan plastik di halaman rumah?',
                options: [
                    'Karena abu sampah membuat rumput berwarna perak',
                    'Karena membutuhkan air yang sangat banyak',
                    'Karena asapnya berbahaya bagi kesehatan dan apinya bisa menyebar',
                    'Karena menarik kedatangan burung hantu di siang hari'
                ],
                correctAnswer: 2,
                explanation: 'Asap pembakaran sampah dapat membahayakan kesehatan. Api juga bisa menyebar ke benda lain.'
            },
            {
                id: 'm6-q2',
                question: 'Apa cara yang baik untuk memanfaatkan daun kering di halaman?',
                options: [
                    'Diolah menjadi pupuk kompos alami untuk menyuburkan tanaman',
                    'Dihanyutkan ke sungai dekat jembatan',
                    'Dibakar bersama botol bekas di pinggir jalan',
                    'Dibuang ke selokan saluran air pembuangan'
                ],
                correctAnswer: 0,
                explanation: 'Daun kering bisa diolah menjadi kompos yang membantu menyuburkan tanah tanpa menghasilkan asap pembakaran.'
            },
            {
                id: 'm6-q3',
                question: 'Manakah contoh sampah organik yang dapat terurai secara alami?',
                options: ['Sisa kulit pisang dan sayuran dapur', 'Kaca cermin pecah', 'Kaleng minuman bersoda', 'Kantong kresek plastik'],
                correctAnswer: 0,
                explanation: 'Sampah organik, seperti sisa buah dan sayur, dapat membusuk dan terurai secara alami.'
            },
            {
                id: 'm6-q4',
                question: 'Mengapa asap dari pembakaran plastik berbahaya?',
                options: [
                    'Mempercepat pertumbuhan tanaman buah',
                    'Membuat udara menjadi dingin seperti salju',
                    'Membuat gigi anak bertambah kuat',
                    'Dapat mengganggu pernapasan dan membahayakan kesehatan'
                ],
                correctAnswer: 3,
                explanation: 'Pembakaran plastik dapat menghasilkan zat berbahaya yang mencemari udara dan mengganggu kesehatan.'
            },
            {
                id: 'm6-q5',
                question: 'Hewan kecil apa yang dapat membantu proses pembuatan kompos?',
                options: ['Nyamuk kebun', 'Lalat hijau', 'Cacing tanah (kompos cacing/vermikompos)', 'Kecoa rumah'],
                correctAnswer: 2,
                explanation: 'Cacing tanah membantu menguraikan sisa bahan organik dan menghasilkan kotoran yang menyuburkan tanah.'
            },
            {
                id: 'm6-q6',
                question: 'Apa nama lubang di tanah yang membantu menyerap air dan bisa digunakan untuk mengolah sampah organik?',
                options: ['Parit selokan terbuka', 'Lubang resapan Biopori', 'Lubang sumur bor minyak', 'Kolam ikan semen'],
                correctAnswer: 1,
                explanation: 'Lubang biopori membantu air meresap ke tanah dan dapat digunakan untuk mengolah sampah organik.'
            },
            {
                id: 'm6-q7',
                question: 'Apa arti 3R dalam pengelolaan sampah?',
                options: [
                    'Read, Run, Rest',
                    'Recharge, Remake, Remove',
                    'Rent, Return, Review',
                    'Reduce (Kurangi), Reuse (Gunakan kembali), Recycle (Daur ulang)'
                ],
                correctAnswer: 3,
                explanation: '3R berarti mengurangi sampah, menggunakan kembali barang, dan mendaur ulang barang yang masih bisa diolah.'
            },
            {
                id: 'm6-q8',
                question: 'Apa contoh menggunakan kembali barang (reuse) di sekolah?',
                options: [
                    'Membawa botol minum (tumbler) sendiri yang bisa dicuci dan dipakai berulang kali',
                    'Membuang tempat bekal plastik ke sungai',
                    'Membeli air mineral kemasan gelas sekali pakai setiap jam istirahat',
                    'Membakar bungkus makanan ringan di belakang toilet'
                ],
                correctAnswer: 0,
                explanation: 'Membawa botol minum yang bisa dipakai berulang kali membantu mengurangi sampah plastik.'
            },
            {
                id: 'm6-q9',
                question: 'Barang apa yang bisa dikumpulkan untuk disetor ke bank sampah?',
                options: ['Kulit telur ayam busuk', 'Kardus karton dan botol plastik bersih', 'Sisa kuah bakso basi', 'Daun mangga basah'],
                correctAnswer: 1,
                explanation: 'Kardus dan botol plastik bersih dapat dikumpulkan untuk didaur ulang melalui bank sampah.'
            },
            {
                id: 'm6-q10',
                question: 'Apa yang bisa kamu sampaikan dengan sopan kepada tetangga yang masih membakar sampah?',
                options: [
                    'Menyoraki dari pagar dengan kata-kata kasar',
                    'Menjelaskan bahaya asap dengan sopan dan mengajak mencari cara lain, seperti membuat kompos',
                    'Melempar petasan ke arah api sampah tetangga',
                    'Membalas dengan membakar sampah lebih besar'
                ],
                correctAnswer: 1,
                explanation: 'Sampaikan dengan sopan dan ajak mencari solusi yang lebih aman, misalnya mengolah daun menjadi kompos.'
            }
        ]
    },

    // ==========================================
    // MODUL 7: TEKNOLOGI PEMANTAU RIMBA
    // ==========================================
    {
        id: 'misi-7',
        order: 7,
        title: 'Misi 7: Teknologi untuk Menjaga Hutan',
        subtitle: 'Kenali alat yang membantu petugas memantau hutan',
        description: 'Pelajari bagaimana satelit, drone, sensor, dan peringatan dini membantu petugas menemukan tanda bahaya dan menjaga hutan.',
        category: 'Teknologi Penjaga Hutan',
        xpReward: 160,
        questions: [
            {
                id: 'm7-q1',
                question: 'Petugas kadang melihat tanda bernama hotspot atau titik panas pada peta. Apa arti tanda itu?',
                options: [
                    'Lokasi yang terdeteksi memiliki suhu panas oleh sensor satelit',
                    'Lampu taman kota yang menyala terang',
                    'Tempat berkumpulnya anak-anak untuk mengakses internet gratis',
                    'Kedai minuman hangat di tepi hutan'
                ],
                correctAnswer: 0,
                explanation: 'Satelit adalah alat yang mengorbit bumi dan mengambil informasi dari atas. Satelit dapat menemukan daerah yang lebih panas dari sekitarnya. Tanda itu perlu diperiksa petugas karena belum tentu berarti ada kebakaran.'
            },
            {
                id: 'm7-q2',
                question: 'Apa nama alat terbang kecil tanpa awak yang dapat membantu petugas melihat kondisi hutan dari udara?',
                options: ['Balon udara wisata', 'Helikopter mainan baterai kancing', 'Layang-layang kertas', 'Drone (UAV)'],
                correctAnswer: 3,
                explanation: 'Drone adalah alat terbang kecil tanpa awak yang dikendalikan dari jauh. Petugas dapat menggunakannya untuk melihat kondisi hutan dari udara, terutama di tempat yang sulit dijangkau.'
            },
            {
                id: 'm7-q3',
                question: 'Apa nama tim khusus yang bertugas menangani kebakaran hutan dan lahan di Indonesia?',
                options: ['Tim SAR Penyelam', 'Polisi Cilik Lalu Lintas', 'Manggala Agni', 'Regu Pramuka Siaga'],
                correctAnswer: 2,
                explanation: 'Manggala Agni adalah tim petugas di Indonesia yang membantu mencegah dan menangani kebakaran hutan serta lahan.'
            },
            {
                id: 'm7-q4',
                question: 'Apa nama teknologi yang dapat digunakan untuk membantu meningkatkan peluang turunnya hujan pada kondisi tertentu?',
                options: ['Penyiraman tanaman lewat pesawat kargo', 'Teknologi Modifikasi Cuaca (TMC)', 'Kipas raksasa peniup angin awan', 'Sihir pemanggil hujan badai'],
                correctAnswer: 1,
                explanation: 'Teknologi Modifikasi Cuaca adalah upaya yang dilakukan oleh petugas untuk membantu meningkatkan peluang turunnya hujan jika kondisi cuaca memungkinkan. Cara ini tidak selalu berhasil.'
            },
            {
                id: 'm7-q5',
                question: 'Apa yang dapat dilakukan satelit seperti Terra, Aqua, dan Himawari untuk membantu memantau kondisi bumi?',
                options: ['Satelit Terra, Aqua, dan Himawari', 'Satelit mainan radio', 'Satelit GPS ponsel genggam biasa', 'Satelit Bulan purnama'],
                correctAnswer: 0,
                explanation: 'Satelit adalah alat yang mengorbit bumi. Satelit seperti Terra, Aqua, dan Himawari membantu petugas mengamati awan, cuaca, dan tanda titik panas dari jauh.'
            },
            {
                id: 'm7-q6',
                question: 'Apa nama cara petugas menjatuhkan air dari helikopter untuk membantu memadamkan kebakaran?',
                options: ['Water bombing (bom air)', 'Pipa air terapung', 'Hujan tangki semprot', 'Air mancur udara'],
                correctAnswer: 0,
                explanation: 'Water bombing adalah cara petugas menjatuhkan air dari helikopter ke lokasi kebakaran yang sulit dijangkau melalui jalan darat.'
            },
            {
                id: 'm7-q7',
                question: 'Apa nama kelompok warga yang ikut membantu mencegah kebakaran di sekitar hutan?',
                options: ['Grup Pecinta Musik Keras', 'Masyarakat Peduli Api (MPA)', 'Komunitas Pembuat Kembang Api', 'Klub Bersepeda Santai'],
                correctAnswer: 1,
                explanation: 'Masyarakat Peduli Api adalah kelompok warga yang ikut mengingatkan masyarakat, menjaga lingkungan, dan membantu mencegah kebakaran.'
            },
            {
                id: 'm7-q8',
                question: 'Apa yang bisa diketahui petugas melalui sensor yang dipasang di lahan gambut?',
                options: ['Kadar emas di dalam pasir rawa', 'Suhu udara di dalam gua bawah tanah', 'Berapa banyak jumlah cacing di dalam tanah', 'Ketinggian air tanah dan kondisi kelembapan gambut'],
                correctAnswer: 3,
                explanation: 'Sensor adalah alat yang membantu mengukur keadaan di sekitarnya. Di lahan gambut, sensor dapat membantu petugas mengetahui jika air mulai berkurang sehingga tanah berisiko menjadi kering.'
            },
            {
                id: 'm7-q9',
                question: 'Mengapa sirene peringatan dibunyikan saat ada kebakaran?',
                options: [
                    'Agar petugas pos bisa menyanyi bersama',
                    'Agar warga segera waspada dan mengikuti arahan untuk menuju tempat aman',
                    'Sebagai penanda pergantian jam istirahat siang',
                    'Untuk menakut-nakuti monyet yang memanjat pagar'
                ],
                correctAnswer: 1,
                explanation: 'Peringatan dini memberi tahu warga agar segera bersiap dan menjauh dari daerah berbahaya.'
            },
            {
                id: 'm7-q10',
                question: 'Bagaimana anak sekolah bisa menggunakan teknologi untuk ikut menjaga hutan?',
                options: [
                    'Menyebarkan berita bohong atau hoaks tentang bencana',
                    'Bermain game online tanpa mengenal waktu',
                    'Menyebarkan poster infografis edukasi ramah lingkungan dan belajar melalui aplikasi seperti R.I.M.B.A',
                    'Membuat konten lelucon tentang kebakaran hutan'
                ],
                correctAnswer: 2,
                explanation: 'Melalui R.I.M.B.A dan media digital lainnya, anak-anak bisa belajar cara mencegah kebakaran dan menjaga hutan.'
            }
        ]
    },

    // ==========================================
    // MODUL 8: AKSI NYATA DUTA RIMBA
    // ==========================================
    {
        id: 'misi-8',
        order: 8,
        title: 'Misi 8: Janji Sahabat Rimba',
        subtitle: 'Terapkan pelajaran untuk menjaga alam',
        description: 'Gunakan pengetahuan dari misi sebelumnya untuk memilih tindakan baik, mengajak teman menjaga lingkungan, dan membantu mencegah kebakaran.',
        category: 'Aksi Menjaga Alam',
        xpReward: 200,
        questions: [
            {
                id: 'm8-q1',
                question: 'Apa sebutan untuk siswa yang menyelesaikan semua misi belajar dan siap mengajak teman menjaga alam di R.I.M.B.A?',
                options: ['Duta Muda Sahabat Rimba', 'Petugas Pemadam Api Lapangan', 'Pakar Tambang Batu Bara', 'Pembalak Kayu Hutan'],
                correctAnswer: 0,
                explanation: 'Duta Muda Sahabat Rimba diharapkan menjadi contoh bagi teman-temannya dalam menjaga lingkungan.'
            },
            {
                id: 'm8-q2',
                question: 'Apa nama kegiatan menanam pohon kembali di lahan gundul atau bekas terbakar?',
                options: ['Urbanisasi kota', 'Deforestasi', 'Reboisasi (penghijauan kembali)', 'Eksploitasi lahan tambang'],
                correctAnswer: 2,
                explanation: 'Reboisasi berarti menanam pohon kembali di lahan yang gundul atau kehilangan banyak pohon. Pohon yang tumbuh membantu memulihkan lingkungan.'
            },
            {
                id: 'm8-q3',
                question: 'Apa kegiatan baik yang bisa dilakukan di sekolah untuk menjaga lingkungan?',
                options: [
                    'Merobek buku tulis bekas dan menghamburkannya di lapangan',
                    'Membuat kebun hijau sekolah dan membersihkan pekarangan tanpa membakar sampah',
                    'Menyalakan api unggun raksasa di dekat ruang guru',
                    'Membeli balon gas plastik lalu melepaskannya ke udara bebas'
                ],
                correctAnswer: 1,
                explanation: 'Menanam dan merawat tanaman serta tidak membakar sampah adalah contoh tindakan sederhana untuk menjaga lingkungan.'
            },
            {
                id: 'm8-q4',
                question: 'Apa yang sebaiknya kamu lakukan jika melihat teman membuang sampah sembarangan?',
                options: [
                    'Pura-pura tidak melihat kejadian tersebut',
                    'Ikut melempar sampah botol ke rerumputan',
                    'Memarahi dan memusuhinya selama satu semester',
                    'Mengingatkannya dengan baik dan menunjukkan tempat sampah'
                ],
                correctAnswer: 3,
                explanation: 'Kita bisa mengingatkan teman dengan sopan dan memberi contoh dengan membuang sampah pada tempatnya.'
            },
            {
                id: 'm8-q5',
                question: 'Mengapa hutan dan lahan gambut penting untuk dijaga?',
                options: [
                    'Karena hutan tidak memerlukan sinar matahari',
                    'Karena hutan menjadi tempat hidup banyak makhluk dan membantu menjaga keseimbangan iklim',
                    'Agar kayu hutan bisa dijual murah ke luar negeri',
                    'Supaya semua hewan liar bisa dipelihara di dalam rumah warga'
                ],
                correctAnswer: 1,
                explanation: 'Hutan menjadi rumah bagi banyak hewan dan tumbuhan serta membantu menjaga iklim bumi.'
            },
            {
                id: 'm8-q6',
                question: 'Apa yang harus dilakukan terhadap api unggun setelah kegiatan berkemah?',
                options: [
                    'Meninggalkan bara kayu yang masih menyala merah tertiup angin',
                    'Menyalakan api di dekat batang pohon pinus yang rimbun',
                    'Membuang abu panas ke tumpukan semak kering',
                    'Meminta bantuan orang dewasa untuk memastikan api benar-benar padam sebelum meninggalkan tempat'
                ],
                correctAnswer: 3,
                explanation: 'Api unggun harus benar-benar padam sebelum tempat ditinggalkan. Anak-anak harus meminta bantuan orang dewasa.'
            },
            {
                id: 'm8-q7',
                question: 'Bagaimana Sahabat Rimba ikut menjaga air di sekitar hutan dan rawa?',
                options: [
                    'Mencemari sungai dengan bungkus detergen',
                    'Tidak membuang sampah atau bahan berbahaya ke sungai dan rawa',
                    'Memancing menggunakan racun bahan kimia',
                    'Menguras seluruh air rawa sampai dasar tanah terlihat'
                ],
                correctAnswer: 1,
                explanation: 'Air yang bersih dan cukup membantu menjaga lingkungan gambut tetap sehat.'
            },
            {
                id: 'm8-q8',
                question: 'Bagaimana cara menjelaskan bahaya kebakaran hutan kepada adik kelas?',
                options: [
                    'Menggunakan gambar, komik R.I.M.B.A, dan cerita hewan yang mudah dipahami',
                    'Memberikan naskah teks tebal tanpa gambar',
                    'Menyuruh adik kelas menghafal pasal undang-undang hukum',
                    'Menakut-nakuti adik kelas hingga menangis histeris'
                ],
                correctAnswer: 0,
                explanation: 'Gambar dan cerita yang menarik membantu adik kelas memahami cara menjaga hutan dan keselamatan diri.'
            },
            {
                id: 'm8-q9',
                question: 'Apa yang sebaiknya kamu lakukan jika melihat unggahan yang mengajak orang membakar lahan?',
                options: [
                    'Tidak ikut menyebarkannya dan memberi tahu orang tua atau guru',
                    'Membeli korek api untuk dibagikan ke orang lain',
                    'Menyukai (like) dan ikut membagikan ajakan tersebut ke teman kelas',
                    'Membuat status mendukung pembakaran hutan'
                ],
                correctAnswer: 0,
                explanation: 'Jangan mendukung ajakan membakar lahan. Beri tahu orang tua atau guru agar mereka dapat menanganinya.'
            },
            {
                id: 'm8-q10',
                question: 'Apa janji seorang Duta Muda Sahabat Rimba?',
                options: [
                    'Membiarkan kebakaran hutan terjadi di mana-mana',
                    'Merusak tanaman bunga yang dirawat di pekarangan sekolah',
                    'Waspada terhadap api, menjaga keselamatan diri, merawat lingkungan, dan mengajak orang lain berbuat baik untuk bumi',
                    'Bermain api saat tidak ada guru yang mengawasi'
                ],
                correctAnswer: 2,
                explanation: 'Sahabat Rimba berjanji untuk waspada terhadap api, menjaga diri, dan ikut merawat bumi.'
            }
        ]
    }
];