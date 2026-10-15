
export interface KeyPoint {
  title: string;
  desc: string;
  iconName:
  | 'Trees'
  | 'Wind'
  | 'Flame'
  | 'CloudRain'
  | 'Shield'
  | 'Bird'
  | 'Trash'
  | 'ShieldAlert'
  | 'PhoneCall';
}

export interface DetailedLesson {
  id: string;
  level: number;
  slug: string;
  title: string;
  subtitle: string;
  heroBadge: string;
  readTime: string;
  introText: string;
  keyPoints: KeyPoint[];
  deepDive: {
    heading: string;
    paragraphs: string[];
    funFact: string;
  };
  interactiveCheck: {
    prompt: string;
    instruction: string;
    hint: string;
    options: {
      id: string;
      text: string;
      isCorrect: boolean;
      feedback: string;
    }[];
  };
}

export const DETAILED_LESSONS: DetailedLesson[] = [
  // ==========================================
  // BAB 1: MENGENAL HUTAN
  // ==========================================
  {
    id: '1',
    level: 1,
    slug: 'mengenal-hutan-rimba',
    title: 'Mengenal Hutan',
    subtitle: 'Belajar mengenal hutan, manfaatnya, dan alasan kita harus menjaganya.',
    heroBadge: 'Mengenal Hutan',
    readTime: '7 Menit',
    introText:
      'Pernahkah kamu berjalan di tempat yang banyak pohonnya? Udara di sana biasanya terasa lebih sejuk. Kamu juga bisa mendengar suara burung dan melihat berbagai jenis tumbuhan. Tempat seperti itu bisa menjadi bagian dari hutan. Hutan bukan hanya kumpulan pohon, tetapi juga rumah bagi banyak makhluk hidup. Hutan membantu menjaga air, tanah, dan udara agar lingkungan tetap nyaman untuk ditinggali.',
    keyPoints: [
      {
        title: 'Hutan Menghasilkan Oksigen',
        desc:
          'Pohon menggunakan sinar matahari, air, dan karbon dioksida untuk membuat makanan. Proses ini disebut fotosintesis. Dalam proses tersebut, pohon juga melepaskan oksigen yang dibutuhkan manusia dan hewan untuk bernapas.',
        iconName: 'Trees'
      },
      {
        title: 'Hutan Menyimpan Air',
        desc:
          'Akar pohon membantu air hujan masuk ke dalam tanah. Tanah yang ditumbuhi banyak tanaman juga dapat menahan air dan mengurangi aliran air di permukaan.',
        iconName: 'CloudRain'
      },
      {
        title: 'Hutan Menjadi Rumah Satwa',
        desc:
          'Burung membuat sarang di pohon, serangga hidup di antara daun, dan berbagai mamalia mencari makanan di hutan. Setiap makhluk hidup memiliki peran dalam menjaga keseimbangan alam.',
        iconName: 'Bird'
      }
    ],
    deepDive: {
      heading: 'Mengapa Hutan Penting bagi Kehidupan?',
      paragraphs: [
        'Hutan adalah wilayah yang ditumbuhi banyak pohon dan berbagai jenis tumbuhan. Di dalamnya hidup banyak makhluk, seperti burung, monyet, orangutan, serangga, jamur, dan hewan lainnya. Mereka saling berhubungan. Tumbuhan menyediakan makanan dan tempat berlindung, sedangkan beberapa hewan membantu menyebarkan biji sehingga tumbuhan baru bisa tumbuh.',
        'Pohon juga membantu menjaga udara di sekitar kita. Daunnya menggunakan cahaya matahari untuk membuat makanan melalui proses yang disebut fotosintesis. Untuk melakukan proses ini, pohon membutuhkan air dan karbon dioksida. Hasilnya adalah makanan bagi pohon dan oksigen yang dilepaskan ke udara. Namun, udara bersih tidak hanya bergantung pada pohon. Kita juga perlu mengurangi asap kendaraan, asap pabrik, dan sumber pencemaran lainnya.',
        'Hutan membantu menjaga air dan tanah. Ketika hujan turun, sebagian air masuk ke tanah dan diserap oleh akar. Akar juga membantu tanah tetap kuat sehingga tidak mudah terbawa air. Jika banyak pohon ditebang dan tanah dibiarkan terbuka, air hujan bisa mengalir lebih deras. Akibatnya, risiko banjir dan tanah longsor di tempat tertentu dapat meningkat.',
        'Sayangnya, hutan bisa rusak karena penebangan liar, pembukaan lahan yang tidak bertanggung jawab, dan kebakaran hutan. Ketika hutan terbakar, tumbuhan rusak, hewan kehilangan tempat tinggal, dan asapnya dapat mengganggu kesehatan manusia. Karena itu, menjaga hutan bukan hanya tugas petugas kehutanan. Kita juga bisa membantu dengan tidak membuang sampah sembarangan, menghemat kertas, merawat tanaman, dan tidak bermain api di dekat tumbuhan kering.'
      ],
      funFact:
        'Tahukah kamu? Ada hutan di Indonesia yang menjadi rumah bagi orangutan, harimau Sumatra, gajah, dan banyak satwa lainnya. Setiap hutan memiliki makhluk hidup yang perlu dilindungi.'
    },
    interactiveCheck: {
      prompt: 'Ayo Periksa Pemahamanmu!',
      instruction: 'Mengapa hutan perlu dijaga?',
      hint: 'Ingat, hutan menjadi rumah bagi satwa dan membantu menjaga air, tanah, serta udara.',
      options: [
        {
          id: 'a',
          text: 'Karena hutan menjadi tempat hidup satwa, membantu menjaga air dan tanah, serta menghasilkan oksigen.',
          isCorrect: true,
          feedback:
            'Benar! Hutan memiliki banyak manfaat. Jika hutan sehat, manusia, hewan, dan tumbuhan dapat hidup dengan lebih baik.'
        },
        {
          id: 'b',
          text: 'Karena hutan hanya berguna untuk menghasilkan kayu.',
          isCorrect: false,
          feedback:
            'Belum tepat. Hutan memang menghasilkan kayu, tetapi manfaatnya jauh lebih banyak, seperti menjadi rumah satwa dan membantu menjaga air serta tanah.'
        },
        {
          id: 'c',
          text: 'Karena semua hewan hanya bisa hidup di kebun.',
          isCorrect: false,
          feedback:
            'Belum tepat. Banyak hewan membutuhkan hutan untuk mencari makanan, berlindung, berkembang biak, dan membesarkan anaknya.'
        }
      ]
    }
  },

  // ==========================================
  // BAB 2: TANAH GAMBUT
  // ==========================================
  {
    id: '2',
    level: 2,
    slug: 'keajaiban-rawa-gambut',
    title: 'Mengenal Tanah Gambut',
    subtitle: 'Memahami tanah gambut, cara tanah ini menyimpan air, dan alasan gambut harus dijaga tetap basah.',
    heroBadge: 'Tanah Gambut',
    readTime: '7 Menit',
    introText:
      'Tidak semua tanah terbentuk dengan cara yang sama. Ada tanah yang banyak mengandung pasir, ada yang berupa tanah liat, dan ada pula tanah gambut. Tanah gambut terbentuk dari sisa tumbuhan yang menumpuk selama waktu yang sangat lama. Tanah ini dapat menyimpan banyak air. Namun, jika gambut dikeringkan terlalu lama, tanahnya menjadi mudah terbakar dan apinya sulit dipadamkan.',
    keyPoints: [
      {
        title: 'Terbentuk dari Sisa Tumbuhan',
        desc:
          'Daun, ranting, akar, dan bagian tumbuhan lainnya menumpuk di tempat yang basah. Karena kekurangan oksigen, sisa tumbuhan tersebut membusuk dengan lambat dan membentuk lapisan gambut.',
        iconName: 'Trees'
      },
      {
        title: 'Menyimpan Banyak Air',
        desc:
          'Tanah gambut memiliki banyak rongga yang dapat menyimpan air. Saat kondisinya terjaga, gambut membantu mempertahankan kelembapan lingkungan dan menyimpan cadangan air.',
        iconName: 'CloudRain'
      },
      {
        title: 'Mudah Terbakar Saat Kering',
        desc:
          'Gambut yang mengering mengandung banyak bahan tumbuhan yang mudah terbakar. Api bahkan dapat merambat di bawah permukaan tanah dan sulit ditemukan.',
        iconName: 'Flame'
      }
    ],
    deepDive: {
      heading: 'Bagaimana Tanah Gambut Terbentuk?',
      paragraphs: [
        'Bayangkan ada rawa yang dipenuhi tumbuhan. Ketika daun, ranting, dan batang tumbuhan jatuh ke tanah, sisa-sisa tersebut biasanya akan diuraikan oleh makhluk hidup kecil, seperti bakteri dan jamur. Namun, di tempat yang terus basah dan kekurangan oksigen, proses penguraian berlangsung sangat lambat. Akibatnya, sisa tumbuhan menumpuk sedikit demi sedikit selama ratusan hingga ribuan tahun dan membentuk tanah gambut.',
        'Tanah gambut berbeda dari tanah biasa karena banyak mengandung bahan organik dari sisa tumbuhan. Gambut juga memiliki banyak rongga yang dapat menyimpan air. Bayangkan sebuah spons yang menyerap air. Ketika spons itu basah, air tersimpan di dalamnya. Tanah gambut memiliki kemampuan menyimpan air dengan cara yang berbeda, tetapi gambaran spons dapat membantu kita memahami mengapa kelembapan gambut sangat penting.',
        'Masalah muncul ketika rawa gambut dikeringkan, misalnya melalui saluran air yang membuat air keluar terlalu banyak. Lapisan gambut yang semula basah menjadi kering. Daun, akar, dan sisa tumbuhan di dalamnya kemudian dapat terbakar jika terkena sumber api. Kebakaran gambut berbahaya karena api bisa merambat di bawah tanah. Dari permukaan, tempat itu mungkin hanya terlihat berasap, padahal bara masih menyala di dalamnya.',
        'Untuk menjaga gambut, air di kawasan tersebut perlu dikelola dengan baik. Di lokasi tertentu, petugas dapat membuat sekat kanal untuk memperlambat keluarnya air melalui saluran buatan. Tujuannya adalah menjaga tinggi air agar gambut tidak terlalu kering. Menjaga gambut tetap basah membantu mengurangi risiko kebakaran, tetapi masyarakat tetap harus mencegah munculnya sumber api.'
      ],
      funFact:
        'Tanah gambut terbentuk sangat lambat. Lapisan yang tebal bisa menyimpan sisa tumbuhan dari masa yang sangat lama, sehingga gambut perlu dijaga dan tidak mudah digantikan jika rusak.'
    },
    interactiveCheck: {
      prompt: 'Ayo Periksa Pemahamanmu!',
      instruction: 'Apa yang bisa terjadi jika tanah gambut mengering?',
      hint: 'Gambut mengandung sisa tumbuhan. Pikirkan apa yang terjadi pada bahan tumbuhan saat kering.',
      options: [
        {
          id: 'a',
          text: 'Tanah gambut menjadi lebih mudah terbakar dan api bisa merambat di bawah permukaan tanah.',
          isCorrect: true,
          feedback:
            'Benar! Gambut yang kering dapat menjadi bahan bakar bagi api. Karena itu, menjaga kelembapan gambut sangat penting.'
        },
        {
          id: 'b',
          text: 'Tanah gambut berubah menjadi air dan tidak bisa terbakar.',
          isCorrect: false,
          feedback:
            'Belum tepat. Gambut tidak berubah menjadi air. Saat kering, bahan tumbuhan di dalamnya justru dapat terbakar.'
        },
        {
          id: 'c',
          text: 'Semua tumbuhan di atasnya langsung tumbuh lebih subur.',
          isCorrect: false,
          feedback:
            'Belum tepat. Gambut yang terlalu kering dapat merusak lingkungan dan meningkatkan risiko kebakaran.'
        }
      ]
    }
  },

  // ==========================================
  // BAB 3: PENYEBAB KARHUTLA
  // ==========================================
  {
    id: '3',
    level: 3,
    slug: 'bahaya-bakar-sampah',
    title: 'Penyebab Kebakaran Hutan',
    subtitle: 'Mengenal penyebab kebakaran hutan dan lahan serta cara mencegah api menyebar.',
    heroBadge: 'Pencegahan Kebakaran',
    readTime: '7 Menit',
    introText:
      'Kebakaran hutan dan lahan dapat bermula dari api kecil. Api yang digunakan untuk membakar sampah atau membersihkan lahan bisa menyebar ketika angin bertiup dan rumput di sekitarnya kering. Karena itu, kita tidak boleh menganggap api kecil selalu aman. Kebiasaan sederhana, seperti tidak bermain korek api dan segera memberi tahu orang dewasa saat melihat kebakaran, dapat membantu melindungi lingkungan.',
    keyPoints: [
      {
        title: 'Api Kecil Bisa Menyebar',
        desc:
          'Bara atau percikan api dapat mengenai daun dan rumput kering. Jika api terus mendapat bahan bakar, kobarannya bisa membesar dan menyebar ke area lain.',
        iconName: 'Flame'
      },
      {
        title: 'Angin Membantu Api Menjalar',
        desc:
          'Angin dapat membawa panas dan percikan api ke tempat lain. Api juga dapat menyebar lebih cepat ketika banyak tumbuhan kering berada di sekitarnya.',
        iconName: 'Wind'
      },
      {
        title: 'Jangan Membakar Sampah Sembarangan',
        desc:
          'Membakar daun dan sampah di tempat terbuka memiliki risiko kebakaran dan menghasilkan asap. Gunakan cara pengelolaan sampah yang lebih aman.',
        iconName: 'Trash'
      }
    ],
    deepDive: {
      heading: 'Bagaimana Kebakaran Hutan Bisa Terjadi?',
      paragraphs: [
        'Agar api dapat menyala, ada tiga hal yang dibutuhkan: panas, bahan yang bisa terbakar, dan oksigen dari udara. Ketiganya sering disebut segitiga api. Contoh sumber panas adalah korek api atau bara. Daun kering, ranting, dan rumput dapat menjadi bahan bakar. Sementara itu, oksigen tersedia di udara. Jika salah satu unsur ini tidak tersedia, api tidak dapat terus menyala.',
        'Pada musim kemarau, hujan lebih jarang turun di beberapa daerah. Tanah, rumput, dan daun dapat menjadi lebih kering. Dalam keadaan ini, api lebih mudah menyala dan menyebar. Angin dapat membuat api menjalar lebih cepat atau membawa percikan ke tempat yang jauh dari sumber awalnya. Karena itu, api yang tampak kecil sekalipun tidak boleh ditinggalkan tanpa pengawasan.',
        'Kebakaran bisa bermula ketika seseorang membakar sampah, membersihkan lahan dengan api, membuang puntung rokok yang masih menyala, atau meninggalkan api unggun yang belum benar-benar padam. Kebakaran juga dapat terjadi akibat sambaran petir dalam kondisi tertentu. Jadi, tidak semua kebakaran disebabkan oleh manusia, tetapi banyak kejadian dapat dicegah dengan menggunakan api secara bertanggung jawab.',
        'Anak-anak tidak boleh mencoba memadamkan kebakaran hutan sendiri. Jika melihat api, asap yang tidak biasa, atau seseorang membakar lahan dekat tumbuhan kering, segera menjauh ke tempat aman dan beri tahu orang dewasa. Jangan mendekati api untuk mengambil foto atau memeriksa sumbernya. Pencegahan yang baik dimulai dengan tidak bermain api, tidak membakar sampah sembarangan, dan selalu mengikuti petunjuk keselamatan.'
      ],
      funFact:
        'Api dapat berpindah ke tempat lain ketika angin membawa bara atau percikan panas. Itulah sebabnya lokasi yang tampak cukup jauh dari api tetap bisa ikut terbakar.'
    },
    interactiveCheck: {
      prompt: 'Ayo Periksa Pemahamanmu!',
      instruction: 'Mengapa membakar daun kering di dekat hutan berbahaya?',
      hint: 'Daun kering mudah terbakar. Pikirkan ke mana angin bisa membawa percikan api.',
      options: [
        {
          id: 'a',
          text: 'Karena angin dapat membawa percikan api ke rumput atau daun kering sehingga kebakaran menyebar.',
          isCorrect: true,
          feedback:
            'Benar! Api kecil bisa menjadi kebakaran besar jika mengenai bahan yang mudah terbakar, terutama saat cuaca kering dan berangin.'
        },
        {
          id: 'b',
          text: 'Karena daun kering akan berubah menjadi air ketika terkena api.',
          isCorrect: false,
          feedback:
            'Belum tepat. Daun kering justru bisa terbakar. Itulah sebabnya membakar sampah dekat tumbuhan kering sangat berisiko.'
        },
        {
          id: 'c',
          text: 'Karena api hanya bisa menyala ketika hujan turun.',
          isCorrect: false,
          feedback:
            'Belum tepat. Api dapat menyala saat ada panas, bahan yang terbakar, dan oksigen. Kondisi kering bahkan dapat membuat api lebih mudah menyebar.'
        }
      ]
    }
  },

  // ==========================================
  // BAB 4: KEBAKARAN DI BAWAH TANAH
  // ==========================================
  {
    id: '4',
    level: 4,
    slug: 'bara-api-bawah-tanah',
    title: 'Kebakaran di Bawah Tanah',
    subtitle: 'Belajar mengapa api di tanah gambut sulit terlihat dan membutuhkan penanganan khusus.',
    heroBadge: 'Mengenal Bahaya Api',
    readTime: '7 Menit',
    introText:
      'Pernahkah kamu membayangkan api yang menyala di bawah tanah? Hal itu bisa terjadi di lahan gambut yang kering. Api tidak selalu terlihat besar di permukaan. Kadang-kadang, yang tampak hanya asap yang keluar dari tanah. Meskipun tidak terlihat menyala, bara di bawahnya masih bisa membakar bahan tumbuhan dan menyebar ke tempat lain.',
    keyPoints: [
      {
        title: 'Api Bisa Merambat di Bawah Tanah',
        desc:
          'Pada gambut yang kering, api dapat membakar sisa tumbuhan di dalam tanah. Bara ini bisa merambat tanpa menghasilkan kobaran besar di permukaan.',
        iconName: 'Flame'
      },
      {
        title: 'Asap Menjadi Tanda Bahaya',
        desc:
          'Asap yang keluar dari tanah dapat menandakan adanya pembakaran di bawah permukaan. Tempat seperti ini tidak aman untuk didekati atau diinjak.',
        iconName: 'Wind'
      },
      {
        title: 'Pemadaman Harus Sampai ke Sumber Api',
        desc:
          'Petugas terlatih menggunakan air dan peralatan khusus untuk membasahi bagian tanah yang terbakar. Api perlu dipastikan padam agar tidak muncul kembali.',
        iconName: 'Shield'
      }
    ],
    deepDive: {
      heading: 'Mengapa Api di Dalam Gambut Sulit Dipadamkan?',
      paragraphs: [
        'Pada kebakaran yang terjadi di atas tanah, kita biasanya dapat melihat api membakar rumput, semak, atau pohon. Namun, pada lahan gambut yang kering, api juga dapat membakar sisa akar, ranting, dan bahan tumbuhan yang berada di bawah permukaan tanah. Pembakaran ini dapat berlangsung perlahan sehingga orang tidak selalu melihat kobaran api yang besar.',
        'Bayangkan bara kecil yang tersembunyi di antara tumpukan daun kering. Walaupun bagian atas tumpukan terlihat tidak menyala, bagian dalamnya masih bisa menyimpan panas. Hal yang mirip dapat terjadi pada gambut. Lapisan tanah di atas bara mungkin terlihat gelap atau hanya mengeluarkan asap. Karena itu, api yang tidak terlihat bukan berarti api sudah padam.',
        'Menyiram permukaan tanah saja belum tentu cukup. Air mungkin tidak mencapai bagian gambut yang sedang terbakar. Panas di dalam tanah dapat membuat bagian yang basah kembali mengering, sementara bara masih tersisa di tempat lain. Jika tidak ditangani dengan benar, api dapat muncul kembali setelah beberapa waktu.',
        'Petugas pemadam yang terlatih akan memeriksa area kebakaran dan menggunakan peralatan yang sesuai. Di lokasi tertentu, mereka dapat menggunakan pipa atau alat khusus untuk menyalurkan air ke lapisan gambut yang terbakar. Petugas juga perlu memeriksa kembali area tersebut untuk memastikan tidak ada bara yang tertinggal. Jika kamu melihat tanah berasap, jangan menginjak atau menggali bagian itu. Segera menjauh dan laporkan kepada orang dewasa.'
      ],
      funFact:
        'Kebakaran bawah tanah dapat tetap berlangsung meskipun kobaran api di permukaan sudah tidak terlihat. Karena itu, petugas perlu memastikan bara benar-benar padam sebelum meninggalkan lokasi.'
    },
    interactiveCheck: {
      prompt: 'Ayo Periksa Pemahamanmu!',
      instruction: 'Apa yang harus kamu lakukan jika melihat asap keluar dari tanah?',
      hint: 'Asap dari tanah bisa menandakan bara tersembunyi. Utamakan keselamatanmu dan minta bantuan.',
      options: [
        {
          id: 'a',
          text: 'Menjauh dari lokasi dan segera melaporkannya kepada orang dewasa atau petugas.',
          isCorrect: true,
          feedback:
            'Benar! Asap dari tanah bisa menjadi tanda adanya bara tersembunyi. Kamu harus menjaga jarak dan meminta bantuan orang yang terlatih.'
        },
        {
          id: 'b',
          text: 'Menginjak tanah berasap untuk memeriksa apakah masih panas.',
          isCorrect: false,
          feedback:
            'Jangan lakukan itu. Tanah bisa menyimpan bara dan bagian permukaannya mungkin tidak kuat untuk diinjak.'
        },
        {
          id: 'c',
          text: 'Menggali tanah sendiri sampai menemukan sumber api.',
          isCorrect: false,
          feedback:
            'Belum tepat. Menggali tanah yang terbakar bisa berbahaya. Pemeriksaan harus dilakukan oleh petugas yang memiliki peralatan dan pelatihan.'
        }
      ]
    }
  },

  // ==========================================
  // BAB 5: KABUT ASAP
  // ==========================================
  {
    id: '5',
    level: 5,
    slug: 'bahaya-asap-dan-pm25',
    title: 'Bahaya Kabut Asap',
    subtitle: 'Mengenal dampak asap kebakaran bagi tubuh dan cara menjaga kesehatan saat udara tercemar.',
    heroBadge: 'Menjaga Kesehatan',
    readTime: '7 Menit',
    introText:
      'Ketika hutan terbakar, asap dapat terbawa angin menuju desa dan kota. Udara yang biasanya jernih bisa berubah menjadi berkabut dan berbau seperti sesuatu yang terbakar. Asap bukan hanya membuat mata perih, tetapi juga membawa partikel kecil yang berbahaya jika terhirup. Karena itu, kita perlu mengetahui cara melindungi diri saat udara dipenuhi asap.',
    keyPoints: [
      {
        title: 'Asap Mengandung Partikel Kecil',
        desc:
          'Asap kebakaran membawa debu dan partikel halus, termasuk PM2.5. Ukurannya sangat kecil sehingga dapat masuk jauh ke dalam saluran pernapasan.',
        iconName: 'Wind'
      },
      {
        title: 'Asap Mengganggu Kesehatan',
        desc:
          'Menghirup asap dapat menyebabkan batuk, mata perih, tenggorokan terasa tidak nyaman, dan sesak napas. Anak-anak perlu lebih berhati-hati.',
        iconName: 'ShieldAlert'
      },
      {
        title: 'Lindungi Diri dari Asap',
        desc:
          'Kurangi kegiatan di luar ruangan, tutup pintu dan jendela jika asap masuk, dan ikuti arahan orang dewasa. Gunakan masker yang sesuai jika diperlukan.',
        iconName: 'Shield'
      }
    ],
    deepDive: {
      heading: 'Apa yang Harus Dilakukan Saat Udara Berasap?',
      paragraphs: [
        'Asap kebakaran terdiri atas campuran gas dan partikel yang berasal dari bahan yang terbakar. Ketika banyak pohon, rumput, atau gambut terbakar, asap dapat menyebar mengikuti arah angin. Akibatnya, orang yang tinggal jauh dari lokasi kebakaran pun bisa merasakan dampaknya.',
        'Salah satu jenis partikel yang perlu diwaspadai adalah PM2.5. Nama ini digunakan untuk partikel yang memiliki ukuran sangat kecil, dengan diameter sekitar 2,5 mikrometer atau lebih kecil. Ukurannya jauh lebih kecil daripada sehelai rambut manusia. Karena sangat halus, partikel ini dapat masuk jauh ke dalam paru-paru saat kita bernapas.',
        'Ketika menghirup asap, seseorang bisa mengalami batuk, mata berair, tenggorokan terasa gatal, atau sulit bernapas. Anak-anak, orang lanjut usia, dan orang yang memiliki gangguan pernapasan perlu mendapat perhatian khusus. Jika seseorang merasa sesak atau mengalami kesulitan bernapas, segera beri tahu orang dewasa agar mendapatkan pertolongan medis.',
        'Saat udara berasap, usahakan berada di dalam ruangan dengan udara yang lebih bersih. Tutup pintu dan jendela jika asap masuk dari luar. Jika tersedia, gunakan penyaring udara yang sesuai. Hindari berlari atau berolahraga di luar ruangan karena kegiatan berat membuat kita bernapas lebih cepat dan dapat meningkatkan jumlah partikel yang terhirup.',
        'Masker yang pas di wajah dan memiliki kemampuan menyaring partikel, seperti respirator N95 atau KN95 yang sesuai, dapat membantu mengurangi paparan partikel halus. Namun, masker tidak menghilangkan semua risiko, dan masker harus digunakan dengan benar. Anak-anak sebaiknya mengikuti arahan orang tua atau guru. Jangan pergi mendekati lokasi kebakaran untuk melihat-lihat. Keselamatan diri selalu lebih penting.'
      ],
      funFact:
        'Partikel PM2.5 sangat kecil sehingga tidak selalu terlihat oleh mata. Udara yang tampak tidak terlalu berasap pun belum tentu bebas dari partikel halus.'
    },
    interactiveCheck: {
      prompt: 'Ayo Periksa Pemahamanmu!',
      instruction: 'Apa yang sebaiknya dilakukan ketika udara di sekitar rumah dipenuhi asap?',
      hint: 'Pilih tindakan yang mengurangi paparan asap dan ikuti arahan orang dewasa.',
      options: [
        {
          id: 'a',
          text: 'Mengurangi kegiatan di luar ruangan, berada di tempat dengan udara lebih bersih, dan mengikuti arahan orang dewasa.',
          isCorrect: true,
          feedback:
            'Benar! Mengurangi paparan asap dapat membantu melindungi paru-paru. Mintalah bantuan orang dewasa jika udara semakin buruk.'
        },
        {
          id: 'b',
          text: 'Bermain dan berlari di luar rumah agar tubuh terbiasa menghirup asap.',
          isCorrect: false,
          feedback:
            'Tidak benar. Asap dapat mengganggu pernapasan. Berolahraga di luar saat udara tercemar justru bisa meningkatkan paparan asap.'
        },
        {
          id: 'c',
          text: 'Mendekati kebakaran agar bisa melihat asal asap.',
          isCorrect: false,
          feedback:
            'Jangan lakukan itu. Lokasi kebakaran berbahaya karena api bisa menyebar dan asapnya dapat mengganggu kesehatan.'
        }
      ]
    }
  },

  // ==========================================
  // BAB 6: SATWA LIAR
  // ==========================================
  {
    id: '6',
    level: 6,
    slug: 'menyelamatkan-satwa-hutan',
    title: 'Melindungi Satwa Liar',
    subtitle: 'Memahami dampak kebakaran terhadap hewan dan cara membantu satwa dengan aman.',
    heroBadge: 'Melindungi Satwa',
    readTime: '7 Menit',
    introText:
      'Hutan merupakan rumah bagi banyak satwa liar. Di sana, mereka mencari makanan, membuat sarang, dan membesarkan anak-anaknya. Ketika kebakaran terjadi, rumah mereka dapat rusak dan sumber makanan menghilang. Beberapa hewan terpaksa berpindah ke tempat lain untuk mencari perlindungan. Kita perlu memahami keadaan mereka dan tidak menyakiti satwa yang sedang terdampak.',
    keyPoints: [
      {
        title: 'Satwa Kehilangan Rumah',
        desc:
          'Kebakaran dapat merusak sarang, tempat berlindung, dan sumber makanan. Hewan juga berisiko terluka atau terpisah dari kelompoknya.',
        iconName: 'Bird'
      },
      {
        title: 'Satwa Bisa Keluar dari Hutan',
        desc:
          'Hewan yang kehilangan makanan atau tempat berlindung bisa mendekati kebun dan permukiman. Kehadiran mereka tidak berarti kita boleh mendekat atau menangkapnya.',
        iconName: 'Trees'
      },
      {
        title: 'Minta Bantuan Petugas',
        desc:
          'Jika menemukan satwa liar yang terluka atau berada di tempat berbahaya, jaga jarak dan beri tahu orang dewasa agar dapat menghubungi petugas yang tepat.',
        iconName: 'Shield'
      }
    ],
    deepDive: {
      heading: 'Bagaimana Kebakaran Memengaruhi Kehidupan Satwa?',
      paragraphs: [
        'Setiap satwa memiliki kebutuhan yang berbeda. Burung membutuhkan tempat untuk bersarang, orangutan mencari buah dan pepohonan untuk bergerak, sedangkan berbagai serangga hidup di antara tumbuhan dan tanah. Hutan menyediakan banyak kebutuhan tersebut. Ketika hutan terbakar, satwa dapat kehilangan makanan, tempat berlindung, dan lokasi untuk membesarkan anak-anaknya.',
        'Asap juga dapat mengganggu kesehatan satwa. Hewan yang menghirup asap bisa mengalami gangguan pernapasan, sedangkan panas api dapat menyebabkan luka. Satwa yang ketakutan mungkin bergerak menjauhi kebakaran dan memasuki kebun atau permukiman. Mereka bisa terlihat kebingungan karena tempat yang biasanya mereka kenal sudah berubah.',
        'Jika bertemu satwa liar, jangan mencoba menyentuh, memberi makan, mengejar, atau menangkapnya. Hewan yang ketakutan dapat bereaksi untuk melindungi diri. Jangan pula melempar batu atau menggunakan petasan untuk mengusirnya. Jika satwa berada dekat rumah, segera masuk ke tempat yang aman dan beri tahu orang dewasa.',
        'Jika menemukan satwa yang tampak terluka, jangan mencoba mengobatinya sendiri. Catat lokasinya dari jarak aman jika memungkinkan, lalu minta orang dewasa menghubungi petugas konservasi atau penyelamat satwa yang berwenang. Petugas memiliki pengetahuan dan peralatan untuk memeriksa, merawat, dan memindahkan satwa dengan aman.',
        'Cara terbaik melindungi satwa adalah menjaga hutan tempat mereka hidup. Kita dapat ikut membantu dengan tidak membakar lahan, tidak membeli satwa liar hasil tangkapan ilegal, dan tidak merusak tempat hidup hewan. Ketika hutan terjaga, satwa memiliki kesempatan lebih besar untuk mencari makan, berkembang biak, dan hidup dengan aman.'
      ],
      funFact:
        'Orangutan membantu hutan tumbuh kembali dengan menyebarkan biji dari buah yang dimakannya. Biji tersebut dapat tumbuh menjadi tanaman baru jika mendapatkan kondisi yang sesuai.'
    },
    interactiveCheck: {
      prompt: 'Ayo Periksa Pemahamanmu!',
      instruction: 'Apa yang harus dilakukan jika melihat satwa liar yang terluka?',
      hint: 'Satwa liar yang terluka perlu bantuan petugas. Kamu bisa membantu dengan tetap menjaga jarak.',
      options: [
        {
          id: 'a',
          text: 'Menjaga jarak, tidak menyentuhnya, dan segera memberi tahu orang dewasa atau petugas.',
          isCorrect: true,
          feedback:
            'Benar! Satwa yang terluka bisa merasa takut. Petugas yang terlatih dapat membantu tanpa membahayakan hewan maupun manusia.'
        },
        {
          id: 'b',
          text: 'Membawa pulang satwa tersebut untuk dijadikan hewan peliharaan.',
          isCorrect: false,
          feedback:
            'Belum tepat. Satwa liar membutuhkan penanganan khusus. Memeliharanya tanpa izin dan pengetahuan yang sesuai dapat membahayakan satwa maupun manusia.'
        },
        {
          id: 'c',
          text: 'Mengejar satwa tersebut supaya cepat kembali ke hutan.',
          isCorrect: false,
          feedback:
            'Jangan lakukan itu. Mengejar dapat membuat satwa semakin ketakutan atau terluka. Jaga jarak dan minta bantuan petugas.'
        }
      ]
    }
  },

  // ==========================================
  // BAB 7: MEMBUAT KOMPOS
  // ==========================================
  {
    id: '7',
    level: 7,
    slug: 'membuat-kompos-pekarangan',
    title: 'Membuat Kompos dari Daun Kering',
    subtitle: 'Belajar mengolah daun gugur menjadi pupuk tanpa membakarnya.',
    heroBadge: 'Aksi Ramah Lingkungan',
    readTime: '7 Menit',
    introText:
      'Setiap hari, pohon menggugurkan sebagian daunnya. Daun-daun itu sering dikumpulkan ketika halaman rumah atau sekolah dibersihkan. Namun, daun kering tidak harus dibakar. Kita bisa mengolahnya menjadi kompos, yaitu bahan yang membantu menyuburkan tanah. Dengan cara ini, sampah daun dapat dimanfaatkan kembali dan kita tidak perlu menghasilkan asap dari pembakaran.',
    keyPoints: [
      {
        title: 'Daun Kering Bisa Dimanfaatkan',
        desc:
          'Daun yang gugur dapat diolah menjadi kompos. Bahan ini membantu menambah bahan organik pada tanah dan mendukung pertumbuhan tanaman.',
        iconName: 'Trash'
      },
      {
        title: 'Makhluk Kecil Membantu Penguraian',
        desc:
          'Jamur, bakteri, dan organisme pengurai membantu memecah daun menjadi bahan yang lebih sederhana selama proses pengomposan.',
        iconName: 'Trees'
      },
      {
        title: 'Kompos Menyuburkan Tanah',
        desc:
          'Kompos yang sudah matang dapat dicampurkan ke tanah untuk membantu memperbaiki kondisi tanah dan mendukung pertumbuhan tanaman.',
        iconName: 'CloudRain'
      }
    ],
    deepDive: {
      heading: 'Bagaimana Cara Membuat Kompos Sederhana?',
      paragraphs: [
        'Daun yang gugur sebenarnya masih memiliki manfaat. Daun mengandung bahan organik yang dapat dikembalikan ke tanah. Di alam, daun yang jatuh ke lantai hutan akan diuraikan sedikit demi sedikit oleh jamur, bakteri, dan organisme lain. Setelah waktu tertentu, bahan tersebut berubah menjadi bagian dari tanah dan membantu mendukung kehidupan tumbuhan.',
        'Kita bisa meniru proses alami itu dengan membuat kompos. Siapkan wadah yang memiliki lubang udara atau tempat pengomposan di halaman. Masukkan daun kering yang sudah dikumpulkan. Daun yang berukuran besar boleh dipotong menjadi bagian yang lebih kecil agar lebih mudah terurai. Tambahkan sedikit air jika bahan terlalu kering, tetapi jangan sampai wadah dipenuhi air.',
        'Agar proses berjalan baik, bahan kompos perlu memiliki kelembapan dan udara yang cukup. Jika terlalu kering, proses penguraian berjalan lambat. Jika terlalu basah dan kekurangan udara, kompos dapat berbau tidak sedap. Daun juga dapat dicampur dengan sedikit bahan hijau, seperti sisa sayuran mentah, sesuai petunjuk orang dewasa. Hindari memasukkan plastik, kaca, logam, daging, atau minyak ke dalam kompos sederhana.',
        'Aduk atau balik bahan kompos secara berkala dengan bantuan orang dewasa agar udara dapat masuk. Lama penguraian bergantung pada jenis bahan, ukuran daun, kelembapan, dan kondisi lingkungan. Karena itu, kompos tidak selalu siap dalam waktu yang sama. Kompos yang matang biasanya berwarna cokelat gelap, bertekstur remah, dan berbau seperti tanah. Jika masih banyak bahan yang terlihat utuh, biarkan proses penguraian berlanjut.',
        'Setelah matang, kompos dapat dicampurkan ke tanah di sekitar tanaman sesuai kebutuhan. Dengan begitu, daun yang semula dianggap sampah berubah menjadi sesuatu yang berguna. Yang paling penting, kita tidak perlu membakar daun tersebut. Membakar sampah menghasilkan asap dan dapat memicu kebakaran jika api menyebar ke rumput atau benda yang mudah terbakar.'
      ],
      funFact:
        'Di lantai hutan, daun yang jatuh tidak selalu menjadi sampah. Daun tersebut menjadi makanan bagi organisme pengurai dan akhirnya membantu mengembalikan bahan organik ke tanah.'
    },
    interactiveCheck: {
      prompt: 'Ayo Periksa Pemahamanmu!',
      instruction: 'Apa manfaat mengolah daun kering menjadi kompos?',
      hint: 'Kompos membuat daun bermanfaat bagi tanah tanpa perlu membakarnya.',
      options: [
        {
          id: 'a',
          text: 'Daun dapat dimanfaatkan kembali untuk membantu menyuburkan tanah tanpa menghasilkan asap dari pembakaran.',
          isCorrect: true,
          feedback:
            'Benar! Kompos membantu mengembalikan bahan organik ke tanah dan menjadi pilihan yang lebih ramah lingkungan daripada membakar daun.'
        },
        {
          id: 'b',
          text: 'Daun harus dibakar sampai menjadi abu agar bisa tumbuh kembali menjadi pohon.',
          isCorrect: false,
          feedback:
            'Belum tepat. Daun dapat diuraikan menjadi kompos tanpa dibakar. Abu bukanlah pengganti kompos yang lengkap.'
        },
        {
          id: 'c',
          text: 'Kompos dibuat dengan mencampurkan daun dan plastik.',
          isCorrect: false,
          feedback:
            'Belum tepat. Plastik tidak dapat terurai seperti daun dalam pengomposan biasa. Pisahkan sampah plastik dari bahan kompos.'
        }
      ]
    }
  },

  // ==========================================
  // BAB 8: MEMULIHKAN HUTAN
  // ==========================================
  {
    id: '8',
    level: 8,
    slug: 'menanam-kembali-rimba',
    title: 'Memulihkan Hutan yang Terbakar',
    subtitle: 'Belajar bagaimana hutan dapat pulih dan bagaimana kita bisa ikut menjaganya.',
    heroBadge: 'Memulihkan Hutan',
    readTime: '7 Menit',
    introText:
      'Setelah kebakaran berhasil dipadamkan, hutan tidak langsung kembali seperti semula. Banyak tumbuhan yang rusak, tanah bisa kehilangan kelembapan, dan satwa mungkin belum bisa kembali. Hutan memerlukan waktu untuk pulih. Manusia dapat membantu proses ini dengan menjaga kondisi tanah dan air, menanam tumbuhan yang sesuai, serta melindungi bibit agar bisa tumbuh dengan baik.',
    keyPoints: [
      {
        title: 'Hutan Membutuhkan Waktu untuk Pulih',
        desc:
          'Setelah kebakaran, tumbuhan harus tumbuh kembali dan hewan perlu menemukan makanan serta tempat berlindung. Pemulihan hutan dapat memerlukan waktu yang lama.',
        iconName: 'Trees'
      },
      {
        title: 'Pilih Tanaman yang Sesuai',
        desc:
          'Jenis pohon yang ditanam perlu disesuaikan dengan kondisi tanah, air, dan lingkungan setempat. Kawasan gambut membutuhkan jenis tumbuhan yang cocok dengan habitatnya.',
        iconName: 'CloudRain'
      },
      {
        title: 'Rawat dan Lindungi Bibit',
        desc:
          'Bibit yang baru ditanam perlu dirawat dan dilindungi dari gangguan. Menanam pohon saja tidak cukup jika setelah itu pohon dibiarkan mati atau lahannya kembali terbakar.',
        iconName: 'Shield'
      }
    ],
    deepDive: {
      heading: 'Apa yang Bisa Kita Lakukan untuk Memulihkan Hutan?',
      paragraphs: [
        'Kebakaran dapat merusak daun, batang, akar, dan tempat hidup berbagai makhluk. Setelah api padam, lahan yang terbakar mungkin terlihat hitam dan sepi. Namun, pemulihan bisa dimulai secara perlahan. Beberapa tumbuhan dapat tumbuh kembali dari bagian yang masih hidup atau dari biji yang tersisa. Hewan juga dapat kembali ketika makanan dan tempat berlindung mulai tersedia.',
        'Walaupun begitu, tidak semua hutan dapat pulih dengan cepat. Kebakaran yang berat dan terjadi berulang kali dapat merusak tanah, membunuh banyak tumbuhan, serta mengganggu kehidupan satwa. Di lahan gambut, kebakaran juga dapat membuat tanah semakin kering dan meningkatkan risiko kebakaran berikutnya. Karena itu, memadamkan api dan mencegah kebakaran berulang sama pentingnya dengan menanam kembali pohon.',
        'Salah satu cara membantu pemulihan hutan adalah melakukan penanaman kembali dengan jenis tumbuhan yang sesuai. Petugas dan ahli lingkungan perlu memeriksa kondisi lahan sebelum menentukan jenis pohon. Di kawasan rawa gambut, misalnya, pohon seperti jelutung rawa dan belangeran dapat menjadi pilihan pada lokasi yang sesuai. Kita tidak boleh menganggap semua jenis pohon cocok ditanam di semua tempat, karena setiap tumbuhan memiliki kebutuhan air, tanah, dan cahaya yang berbeda.',
        'Bibit yang ditanam perlu dirawat. Tanaman muda dapat rusak karena kekeringan, gulma, hewan, atau kebakaran baru. Petugas mungkin perlu melindungi bibit, menjaga kondisi air, dan memeriksa pertumbuhannya secara berkala. Pemulihan hutan juga perlu memperhatikan tumbuhan yang tumbuh secara alami, sehingga penanaman tidak merusak ekosistem yang masih bertahan.',
        'Anak-anak juga bisa ikut menjaga lingkungan. Kita dapat merawat tanaman di sekolah, mengikuti kegiatan penanaman yang aman bersama guru, tidak membuang sampah sembarangan, dan mengingatkan keluarga agar tidak membakar sampah di dekat lahan kering. Jika melihat kebakaran atau asap dari kawasan hutan, segera beri tahu orang dewasa. Langkah kecil yang dilakukan bersama-sama dapat membantu menjaga hutan untuk masa depan.'
      ],
      funFact:
        'Pohon yang ditanam hari ini mungkin membutuhkan waktu bertahun-tahun untuk tumbuh besar. Karena itu, menjaga pohon yang sudah ada sama pentingnya dengan menanam pohon baru.'
    },
    interactiveCheck: {
      prompt: 'Ayo Periksa Pemahamanmu!',
      instruction: 'Apa yang perlu dilakukan setelah kebakaran hutan berhasil dipadamkan?',
      hint: 'Hutan perlu waktu untuk pulih. Pikirkan cara merawatnya dan mencegah kebakaran terulang.',
      options: [
        {
          id: 'a',
          text: 'Membantu pemulihan hutan dengan menjaga lahan, memilih tumbuhan yang sesuai, merawat bibit, dan mencegah kebakaran berulang.',
          isCorrect: true,
          feedback:
            'Benar! Pemulihan hutan tidak berhenti ketika api padam. Lingkungan perlu dirawat dan dilindungi agar tumbuhan serta satwa dapat kembali hidup dengan baik.'
        },
        {
          id: 'b',
          text: 'Menanam pohon apa saja lalu meninggalkannya tanpa perawatan.',
          isCorrect: false,
          feedback:
            'Belum tepat. Jenis pohon harus sesuai dengan kondisi lingkungan, dan bibit perlu dirawat agar dapat tumbuh.'
        },
        {
          id: 'c',
          text: 'Membakar sisa daun dan ranting agar lahan cepat terlihat bersih.',
          isCorrect: false,
          feedback:
            'Belum tepat. Membakar sisa tumbuhan dapat memicu kebakaran lagi. Gunakan cara pengelolaan bahan tumbuhan yang lebih aman.'
        }
      ]
    }
  }
];