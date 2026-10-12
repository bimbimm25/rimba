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

    // LEVEL 1 -> Menguji pemahaman Bab 1*

    {

        id: '1',

        level: 1,

        slug: 'patroli-pertama-rimba',

        title: 'Misi 1: Mengenal Pentingnya Hutan',

        subtitle: 'Cari tahu bagaimana hutan membantu manusia, hewan, dan lingkungan.',

        category: 'Bab 1: Pengenalan',

        xpReward: 100,

        duration: '3 Menit',

        lore: 'Selamat datang, Penjaga Rimba! Kamu sedang menjelajahi hutan yang dipenuhi pepohonan dan suara burung. Yuk, cari tahu mengapa hutan penting bagi kehidupan kita.',

        questions: [

            {

                id: 'q1',

                question: 'Apa salah satu manfaat penting pohon bagi manusia dan hewan?',

                options: [

                    {

                        id: 'a',

                        text: 'Pohon membuat udara semakin kotor dengan mengeluarkan asap.',

                        isCorrect: false,

                        explanation: 'Belum tepat. Pohon tidak menghasilkan asap seperti itu. Asap justru dapat mengotori udara.'

                    },

                    {

                        id: 'b',

                        text: 'Pohon membantu menghasilkan oksigen yang kita hirup dan menjadi tempat tinggal banyak hewan.',

                        isCorrect: true,

                        explanation: 'Benar! Pohon membantu menghasilkan oksigen dan menyediakan tempat berlindung bagi banyak hewan.'

                    },

                    {

                        id: 'c',

                        text: 'Pohon bisa berpindah tempat sendiri untuk mencari air.',

                        isCorrect: false,

                        explanation: 'Pohon tumbuh di tempatnya. Akarnya menyerap air dari tanah.'

                    }

                ]

            }

        ]

    },



    // LEVEL 2 -> Menguji pemahaman Bab 2*

    {

        id: '2',

        level: 2,

        slug: 'menjaga-spons-gambut',

        title: 'Misi 2: Menjaga Tanah Gambut Tetap Basah',

        subtitle: 'Pahami mengapa tanah gambut perlu tetap lembap agar tidak mudah terbakar.',

        category: 'Bab 2: Lahan Gambut',

        xpReward: 120,

        duration: '4 Menit',

        lore: 'Kamu sedang menjelajahi rawa gambut. Saat airnya berkurang, tanah gambut bisa menjadi kering. Tanah gambut yang kering lebih mudah terbakar, jadi kita perlu menjaganya tetap lembap.',

        questions: [

            {

                id: 'q1',

                question: 'Apa yang perlu dilakukan agar tanah gambut tidak mudah terbakar?',

                options: [

                    {

                        id: 'a',

                        text: 'Agar tanah tidak mudah terbakar saat cuaca panas.',

                        isCorrect: true,

                        explanation: 'Betul! Tanah gambut yang lembap lebih sulit terbakar. Pengaturan air harus dilakukan oleh orang dewasa atau petugas yang paham caranya.'

                    },

                    {

                        id: 'b',

                        text: 'Mengeringkan rawa sampai tanahnya retak-retak.',

                        isCorrect: false,

                        explanation: 'Belum tepat. Tanah gambut yang kering lebih mudah terbakar dan apinya bisa sulit dipadamkan.'

                    },

                    {

                        id: 'c',

                        text: 'Membuang sampah plastik ke dalam parit.',

                        isCorrect: false,

                        explanation: 'Sampah plastik dapat mencemari air dan membahayakan hewan yang hidup di rawa.'

                    }

                ]

            }

        ]

    },



    // LEVEL 3 -> Menguji pemahaman Bab 3*

    {

        id: '3',

        level: 3,

        slug: 'patroli-bebas-bakar',

        title: 'Misi 3: Cegah Api Sebelum Membesar',

        subtitle: 'Belajar mengapa membakar daun kering bisa memicu kebakaran.',

        category: 'Bab 3: Pencegahan',

        xpReward: 140,

        duration: '4 Menit',

        lore: 'Hari ini cuaca sangat panas dan angin bertiup kencang. Kamu melihat seseorang hendak membakar daun kering di dekat semak. Kamu tahu api kecil pun bisa berbahaya.',

        questions: [

            {

                id: 'q1',

                question: 'Apa yang bisa terjadi jika daun kering dibakar saat cuaca panas dan angin bertiup kencang?',

                options: [

                    {

                        id: 'a',

                        text: 'Api bisa terbawa angin ke daun dan semak kering, lalu menyebar menjadi kebakaran.',

                        isCorrect: true,

                        explanation: 'Benar! Api bisa menyebar dengan cepat saat angin kencang. Karena itu, jangan membakar daun atau sampah di lahan terbuka.'

                    },

                    {

                        id: 'b',

                        text: 'Api akan membuat semua tanaman tumbuh lebih cepat.',

                        isCorrect: false,

                        explanation: 'Api dapat membakar tanaman dan merusak tempat tinggal hewan.'

                    },

                    {

                        id: 'c',

                        text: 'Abu dari pembakaran akan berubah menjadi es.',

                        isCorrect: false,

                        explanation: 'Abu tidak berubah menjadi es. Membakar daun juga tetap menghasilkan asap yang mengotori udara.'

                    }

                ]

            }

        ]

    },



    // LEVEL 4 -> Menguji pemahaman Bab 4*

    {

        id: '4',

        level: 4,

        slug: 'padamkan-bara-tanah',

        title: 'Misi 4: Waspada Api di Dalam Tanah',

        subtitle: 'Kenali bahaya bara api yang bisa bersembunyi di tanah gambut.',

        category: 'Bab 4: Taktik Lapangan',

        xpReward: 160,

        duration: '5 Menit',

        lore: 'Kamu melihat asap keluar dari tanah gambut. Tidak ada api besar yang terlihat di permukaan, tetapi bisa saja masih ada bara panas di bawah tanah. Situasi ini berbahaya dan perlu ditangani petugas.',

        questions: [

            {

                id: 'q1',

                question: 'Apa yang harus kamu lakukan jika melihat asap keluar dari tanah di area hutan?',

                options: [

                    {

                        id: 'a',

                        text: 'Menjauh dari tempat itu lalu segera memberi tahu orang dewasa atau petugas.',

                        isCorrect: true,

                        explanation: 'Benar! Bara di dalam tanah bisa berbahaya. Jangan mencoba memadamkannya sendiri; biarkan petugas yang menanganinya.'

                    },

                    {

                        id: 'b',

                        text: 'Mendekat untuk memeriksa asap itu sendirian.',

                        isCorrect: false,

                        explanation: 'Jangan mendekat sendirian. Bara bisa menyebar di bawah tanah dan kamu dapat terluka.'

                    },

                    {

                        id: 'c',

                        text: 'Menutup asap dengan daun kering lalu pergi.',

                        isCorrect: false,

                        explanation: 'Daun kering mudah terbakar dan tidak menyelesaikan masalah. Segera laporkan kepada orang dewasa atau petugas.'

                    }

                ]

            }

        ]

    },



    // LEVEL 5 -> Menguji pemahaman Bab 5*

    {

        id: '5',

        level: 5,

        slug: 'tanggap-kabut-asap',

        title: 'Misi 5: Lindungi Diri dari Asap',

        subtitle: 'Ketahui cara menjaga pernapasan saat udara dipenuhi asap.',

        category: 'Bab 5: Kesehatan Siaga',

        xpReward: 180,

        duration: '4 Menit',

        lore: 'Langit terlihat berkabut dan udara berbau asap. Kamu mulai merasa tidak nyaman saat bernapas. Saat seperti ini, kamu perlu mengikuti arahan orang tua atau guru agar tetap aman.',

        questions: [

            {

                id: 'q1',

                question: 'Apa yang sebaiknya kamu lakukan saat asap kebakaran membuat udara di sekitar rumah menjadi kotor?',

                options: [

                    {

                        id: 'a',

                        text: 'Tetap bermain di luar rumah meskipun asap terlihat tebal.',

                        isCorrect: false,

                        explanation: 'Udara berasap bisa mengganggu pernapasan. Sebaiknya masuk ke dalam ruangan dan ikuti arahan orang dewasa.'

                    },

                    {

                        id: 'b',

                        text: 'Berada di dalam ruangan, menutup jendela, dan mengikuti arahan orang tua atau guru.',

                        isCorrect: true,

                        explanation: 'Betul! Mengurangi kegiatan di luar dan menutup jendela membantu mengurangi asap yang masuk. Jika harus keluar, ikuti petunjuk orang dewasa tentang perlindungan yang tepat.'

                    },

                    {

                        id: 'c',

                        text: 'Membuka semua jendela agar asap masuk ke dalam rumah.',

                        isCorrect: false,

                        explanation: 'Jendela yang terbuka dapat membuat lebih banyak asap masuk ke rumah.'

                    }

                ]

            }

        ]

    },



    // LEVEL 6 -> Menguji pemahaman Bab 6*

    {

        id: '6',

        level: 6,

        slug: 'evakuasi-sahabat-satwa',

        title: 'Misi 6: Menolong Hewan dengan Aman',

        subtitle: 'Belajar membantu satwa liar tanpa membahayakan diri sendiri atau hewan.',

        category: 'Bab 6: Sahabat Satwa',

        xpReward: 200,

        duration: '5 Menit',

        lore: 'Di dekat kebun, kamu melihat seekor hewan liar yang tampak ketakutan setelah kebakaran hutan. Hewan itu mungkin terluka atau kehilangan tempat tinggal. Kamu ingin menolongnya, tetapi harus tetap aman.',

        questions: [

            {

                id: 'q1',

                question: 'Apa tindakan paling aman jika kamu menemukan satwa liar yang tampak terluka atau ketakutan?',

                options: [

                    {

                        id: 'a',

                        text: 'Menangkapnya dan membawanya pulang untuk dipelihara.',

                        isCorrect: false,

                        explanation: 'Satwa liar bisa merasa semakin takut atau menyerang saat didekati. Perawatannya juga harus dilakukan oleh orang yang terlatih.'

                    },

                    {

                        id: 'b',

                        text: 'Menjauh dengan tenang dan memberi tahu orang dewasa atau petugas penyelamat satwa.',

                        isCorrect: true,

                        explanation: 'Tepat! Petugas tahu cara menolong satwa dengan aman. Jangan mendekati, menyentuh, atau memberi makan satwa liar sendiri.'

                    },

                    {

                        id: 'c',

                        text: 'Melemparinya dengan batu agar pergi.',

                        isCorrect: false,

                        explanation: 'Tindakan itu bisa melukai hewan dan membuatnya semakin ketakutan.'

                    }

                ]

            }

        ]

    },



    // LEVEL 7 -> Menguji pemahaman Bab 7*

    {

        id: '7',

        level: 7,

        slug: 'olah-kompos-daun',

        title: 'Misi 7: Ubah Daun Kering Jadi Kompos',

        subtitle: 'Cari cara memanfaatkan daun kering tanpa membakarnya.',

        category: 'Bab 7: Aksi Nyata',

        xpReward: 220,

        duration: '5 Menit',

        lore: 'Setelah halaman dibersihkan, banyak daun kering terkumpul. Daun itu tidak harus dibakar, lho! Kita bisa memanfaatkannya menjadi kompos yang membantu tanaman tumbuh subur.',

        questions: [

            {

                id: 'q1',

                question: 'Apa yang bisa dilakukan dengan daun kering agar bermanfaat bagi tanaman?',

                options: [

                    {

                        id: 'a',

                        text: 'Mengolah daun kering menjadi kompos dengan bantuan orang dewasa.',

                        isCorrect: true,

                        explanation: 'Benar! Daun yang membusuk akan terurai dan menjadi kompos. Cara ini membuat tanah lebih subur tanpa menghasilkan asap dari pembakaran.'

                    },

                    {

                        id: 'b',

                        text: 'Membuang semua daun ke selokan.',

                        isCorrect: false,

                        explanation: 'Daun yang menumpuk bisa menyumbat aliran air dan menyebabkan genangan saat hujan.'

                    },

                    {

                        id: 'c',

                        text: 'Menyiram daun dengan bahan bakar lalu membakarnya.',

                        isCorrect: false,

                        explanation: 'Bahan bakar mudah menyala dan api bisa menyebar. Jangan membakar daun atau bermain dengan bahan bakar.'

                    }

                ]

            }

        ]

    },



    // LEVEL 8 -> Menguji pemahaman Bab 8*

    {

        id: '8',

        level: 8,

        slug: 'tanam-kembali-gambut',

        title: 'Misi 8: Membantu Hutan Tumbuh Kembali',

        subtitle: 'Belajar mengapa hutan perlu dipulihkan dengan tanaman yang sesuai.',

        category: 'Bab 8: Restorasi',

        xpReward: 250,

        duration: '6 Menit',

        lore: 'Sebagian hutan pernah terbakar dan banyak tanaman rusak. Setelah area dinyatakan aman oleh petugas, hutan perlu dipulihkan. Salah satu caranya adalah menanam kembali tumbuhan asli yang cocok dengan lingkungan setempat.',

        questions: [

            {

                id: 'q1',

                question: 'Tanaman seperti apa yang sebaiknya dipilih untuk membantu memulihkan rawa gambut?',

                options: [

                    {

                        id: 'a',

                        text: 'Kaktus yang cocok hidup di tempat kering.',

                        isCorrect: false,

                        explanation: 'Kaktus umumnya cocok di tempat kering, bukan untuk lingkungan rawa gambut yang basah.'

                    },

                    {

                        id: 'b',

                        text: 'Pohon asli rawa gambut, seperti jelutung, yang cocok dengan kondisi lingkungan setempat.',

                        isCorrect: true,

                        explanation: 'Bagus! Tanaman asli yang sesuai dengan lingkungan lebih tepat untuk membantu memulihkan hutan. Penanaman sebaiknya dilakukan bersama orang dewasa atau petugas.'

                    },

                    {

                        id: 'c',

                        text: 'Pohon mainan dari plastik yang hanya menjadi hiasan.',

                        isCorrect: false,

                        explanation: 'Pohon plastik tidak bisa tumbuh atau menjadi tempat tinggal bagi satwa seperti pohon sungguhan.'

                    }

                ]

            }

        ]

    }

];