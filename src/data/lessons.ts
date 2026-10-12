export interface KeyPoint {
  title: string;
  desc: string;
  iconName: 'Trees' | 'Wind' | 'Flame' | 'CloudRain' | 'Shield' | 'Bird' | 'Trash' | 'ShieldAlert' | 'PhoneCall' | 'Leaf' | 'Users' | 'Award' | 'CheckCircle2';
}

export interface InteractiveCheck {
  type: 'myth_fact' | 'hazard_finder' | 'impact_match' | 'action_sort' | 'safety_decision';
  prompt: string;
  instruction: string;
  options: {
    id: string;
    text: string;
    isCorrect: boolean;
    feedback: string;
  }[];
}

export interface DetailedLesson {
  id: string;
  slug: string;
  level: number;
  title: string;
  subtitle: string;
  readTime: string;
  heroBadge: string;
  introText: string;
  keyPoints: KeyPoint[];
  videoEmbed?: {
    youtubeId: string;
    title: string;
    channelName: string;
    channelUrl: string;
    description: string;
  };
  deepDive: {
    heading: string;
    paragraphs: string[];
    funFact: string;
  };
  interactiveCheck: InteractiveCheck;
}

export const DETAILED_LESSONS: DetailedLesson[] = [
  // =====================================================
  // LEVEL 1 — MENGENAL KARHUTLA
  // =====================================================
  {
    id: 'lvl-01',
    slug: 'kenali-karhutla',
    level: 1,
    title: 'Apa Sih Karhutla Itu?',
    subtitle: 'Yuk, kenalan dengan hutan dan rumah bagi banyak makhluk hidup!',
    readTime: '5 Menit Baca',
    heroBadge: 'Mulai Petualangan',

    introText:
      'Hai, Sahabat Rimba! Pernahkah kamu melihat hutan yang dipenuhi pohon tinggi, tumbuhan hijau, burung yang terbang, dan suara hewan dari kejauhan? Hutan adalah tempat tinggal bagi banyak makhluk hidup. Hutan juga membantu menjaga udara, air, dan tanah agar tetap baik bagi kehidupan. Namun, hutan bisa mengalami bahaya besar, salah satunya kebakaran hutan dan lahan atau yang biasa disebut Karhutla. Karhutla terjadi ketika api membakar hutan atau lahan dan menyebar tanpa bisa dikendalikan dengan mudah. Kebakaran ini dapat merusak tumbuhan, mengancam hewan, mengotori udara, dan mengganggu kehidupan manusia. Yuk, kita pelajari kenapa hutan begitu penting dan mengapa kita harus menjaganya!',

    videoEmbed: {
      youtubeId: 'y7djd0VZzM0',
      title: 'Kenapa Indonesia Sering Kebakaran Hutan?',
      channelName: 'Kok Bisa?',
      channelUrl: 'https://www.youtube.com/@KokBisa',
      description: 'Yuk tonton video animasi seru ini untuk melihat langsung kenapa hutan dan lahan gambut di Indonesia bisa terbakar!',
    },
    keyPoints: [
      {
        title: 'Hutan Adalah Rumah Banyak Makhluk Hidup',
        desc:
          'Di dalam hutan, ada pohon, bunga, jamur, serangga, burung, dan berbagai hewan lainnya. Setiap makhluk hidup punya peran. Pohon menyediakan tempat berteduh, sebagian hewan membantu menyebarkan biji, dan tumbuhan menjadi sumber makanan bagi banyak makhluk hidup. Kalau hutan terbakar, rumah mereka bisa rusak atau hilang.',
        iconName: 'Trees',
      },
      {
        title: 'Pohon Membantu Menjaga Udara',
        desc:
          'Pohon menyerap karbon dioksida dan menggunakan cahaya matahari untuk membuat makanannya sendiri. Dalam proses itu, pohon juga menghasilkan oksigen. Hutan yang sehat membantu menjaga keseimbangan lingkungan. Karena itulah, pohon bukan sekadar tanaman yang membuat pemandangan terlihat hijau.',
        iconName: 'Wind',
      },
      {
        title: 'Apa Hubungannya dengan Tanah Gambut?',
        desc:
          'Tanah gambut terbentuk dari sisa tumbuhan yang menumpuk selama waktu yang sangat lama dalam keadaan basah. Gambut dapat menyimpan banyak air ketika kondisinya terjaga. Namun, gambut yang mengering menjadi lebih mudah terbakar. Api bahkan bisa menjalar di dalam lapisan gambut sehingga sulit diketahui dan dipadamkan.',
        iconName: 'CloudRain',
      },
    ],

    deepDive: {
      heading: 'Mengenal Karhutla Lebih Dekat',

      paragraphs: [
        'Kata Karhutla merupakan singkatan dari Kebakaran Hutan dan Lahan. Hutan adalah kawasan yang dipenuhi pepohonan dan berbagai tumbuhan, sedangkan lahan merupakan bagian permukaan tanah yang digunakan untuk berbagai keperluan. Jika api membakar kawasan tersebut dan menyebar di luar kendali, terjadilah kebakaran hutan dan lahan.',

        'Kebakaran tidak selalu dimulai dari api yang besar. Kadang-kadang, semuanya bermula dari satu percikan kecil yang mengenai rumput kering atau tumpukan daun. Jika keadaan di sekitarnya mendukung, api dapat membesar dan menjalar ke tumbuhan lain. Angin bisa membantu membawa bara ke tempat yang lebih jauh.',

        'Di Indonesia, kebakaran hutan dan lahan menjadi perhatian penting, terutama ketika cuaca kering berlangsung lama. Beberapa wilayah memiliki lahan gambut yang menyimpan banyak bahan organik. Saat gambut mengering, kebakaran dapat terjadi di bawah permukaan tanah. Api seperti ini sulit dilihat secara langsung dan dapat terus membara meskipun bagian atasnya tampak sudah padam.',

        'Karhutla tidak hanya membuat pohon menjadi hangus. Asapnya juga dapat menyebar ke permukiman, sekolah, dan jalan raya. Udara yang tercemar asap bisa membuat mata perih, menyebabkan batuk, dan mengganggu pernapasan. Itulah sebabnya mencegah kebakaran jauh lebih baik daripada menunggu api membesar.',
      ],

      funFact:
        'Tahukah kamu? Orangutan, bekantan, dan burung enggang merupakan beberapa satwa yang dapat ditemukan di Kalimantan. Hutan membantu menyediakan makanan, tempat berlindung, dan tempat hidup bagi banyak satwa tersebut.',
    },

    interactiveCheck: {
      type: 'myth_fact',
      prompt: 'Tebak Benar atau Salah!',
      instruction:
        'Sekarang, coba pilih pernyataan yang paling benar tentang hutan dan Karhutla.',

      options: [
        {
          id: 'opt-1',
          text:
            'Kalau bagian atas tanah terlihat tidak terbakar, berarti api pasti sudah padam seluruhnya.',
          isCorrect: false,
          feedback:
            'Belum tentu, ya! Pada tanah gambut yang kering, api bisa menjalar di bawah permukaan tanah. Karena itu, kebakaran harus diperiksa dan ditangani oleh petugas yang terlatih.',
        },
        {
          id: 'opt-2',
          text:
            'Hutan merupakan tempat hidup banyak makhluk dan kebakarannya bisa mengganggu manusia maupun hewan.',
          isCorrect: true,
          feedback:
            'Hebat! Kamu sudah memahami hal penting tentang hutan. Jika hutan terbakar, satwa bisa kehilangan tempat tinggal, udara menjadi tercemar, dan kehidupan manusia ikut terganggu.',
        },
      ],
    },
  },

  // =====================================================
  // LEVEL 2 — PENYEBAB KARHUTLA
  // =====================================================
  {
    id: 'lvl-02',
    slug: 'kenapa-bisa-terjadi',
    level: 2,
    title: 'Kenapa Hutan Bisa Terbakar?',
    subtitle: 'Mencari tahu bagaimana api kecil bisa menjadi kebakaran besar',
    readTime: '6 Menit Baca',
    heroBadge: 'Cari Penyebab',

    introText:
      'Sahabat Rimba, pernahkah kamu bertanya-tanya mengapa hutan yang awalnya hijau bisa berubah menjadi hitam karena terbakar? Api tidak muncul begitu saja tanpa sebab. Kebakaran dapat bermula dari kegiatan manusia, misalnya membakar sampah atau membuka lahan dengan api secara tidak terkendali. Dalam keadaan tertentu, sambaran petir juga bisa menyalakan api. Ketika rumput dan daun mengering, api lebih mudah menyebar. Angin kencang dapat membuat api menjalar semakin cepat. Yuk, kita cari tahu apa saja yang menyebabkan kebakaran dan bagaimana cara mengenali keadaan yang berbahaya!',

    keyPoints: [
      {
        title: 'Daun Kering Mudah Terbakar',
        desc:
          'Daun dan ranting yang kering mengandung sedikit air sehingga lebih mudah terbakar dibandingkan tumbuhan yang masih segar dan basah. Ketika musim kemarau berlangsung lama, banyak tumbuhan mengering. Keadaan ini membuat lingkungan lebih rawan mengalami kebakaran.',
        iconName: 'Leaf',
      },
      {
        title: 'Api dari Kegiatan Manusia',
        desc:
          'Membakar sampah di dekat rumput kering, meninggalkan api unggun tanpa pengawasan, atau membakar lahan secara sembarangan bisa memicu kebakaran. Api yang awalnya kecil dapat menyebar ke luar tempat pembakaran dan sulit dikendalikan.',
        iconName: 'Flame',
      },
      {
        title: 'Angin dan Cuaca Kering Memperburuk Kebakaran',
        desc:
          'Angin bisa membawa panas dan bara ke tumbuhan di sekitarnya. Cuaca kering membuat bahan seperti rumput, daun, dan ranting lebih mudah terbakar. Jika keduanya terjadi bersamaan, kebakaran dapat berkembang lebih cepat.',
        iconName: 'Wind',
      },
    ],

    deepDive: {
      heading: 'Bagaimana Api Bisa Menyebar?',

      paragraphs: [
        'Bayangkan kamu sedang melihat halaman sekolah yang dipenuhi rumput hijau setelah hujan. Beberapa waktu kemudian, musim kemarau datang dan hujan jarang turun. Rumput mulai menguning, daun menjadi kering, dan ranting yang jatuh mudah patah. Bahan-bahan kering ini dapat menjadi bahan bakar bagi api.',

        'Agar api bisa menyala, ada tiga hal yang biasanya dibutuhkan, yaitu bahan yang dapat terbakar, oksigen dari udara, dan panas yang cukup. Ketiganya dikenal sebagai segitiga api. Jika salah satu unsur tersebut dihilangkan dengan cara yang tepat, api tidak dapat terus menyala. Namun, memadamkan api di hutan bukan pekerjaan yang aman untuk anak-anak.',

        'Misalnya, seseorang membakar tumpukan daun kering di dekat kebun. Ketika angin bertiup, percikan bara dapat terbawa ke rumput kering di sebelahnya. Rumput itu menyala, lalu api merambat ke semak dan ranting. Dalam keadaan tertentu, api dapat meluas ke kawasan yang lebih besar. Karena itulah, membakar sampah sembarangan sangat berbahaya.',

        'Ada pula kebakaran yang terjadi ketika lahan dibuka menggunakan api tanpa pengendalian yang baik. Padahal, api dapat bergerak melampaui batas lahan yang ingin dibersihkan. Di beberapa tempat, sambaran petir juga bisa menjadi sumber penyalaan. Jadi, tidak semua kebakaran memiliki penyebab yang sama, tetapi banyak kebakaran dapat dicegah dengan perilaku yang lebih aman.',

        'Apa yang bisa kita lakukan? Jangan bermain korek api, jangan membakar daun kering, dan jangan membuat api unggun tanpa pengawasan orang dewasa. Jika melihat orang membakar sesuatu di dekat hutan atau lahan kering, jangan mendekat atau mencoba menghentikannya sendiri. Beri tahu orang dewasa yang dapat membantu.',
      ],

      funFact:
        'Segitiga api terdiri dari panas, bahan bakar, dan oksigen. Daun kering dapat menjadi bahan bakar, sedangkan percikan api menjadi sumber panas. Angin bukan salah satu dari tiga unsur segitiga api, tetapi dapat mempercepat penyebaran kebakaran.',
    },

    interactiveCheck: {
      type: 'hazard_finder',
      prompt: 'Ayo Temukan Perilaku Berbahaya!',
      instruction:
        'Manakah kegiatan yang paling berisiko menyebabkan kebakaran saat musim kemarau?',

      options: [
        {
          id: 'opt-1',
          text:
            'Menyiram tanaman pada sore hari dan memastikan tanaman mendapatkan air yang cukup.',
          isCorrect: false,
          feedback:
            'Benar, ini bukan penyebab kebakaran. Menyiram tanaman merupakan cara merawat tanaman, meskipun kita tetap perlu menggunakan air dengan bijak.',
        },
        {
          id: 'opt-2',
          text:
            'Membakar tumpukan daun kering di dekat lapangan yang dipenuhi rumput kering saat angin bertiup.',
          isCorrect: true,
          feedback:
            'Tepat sekali! Api dan bara bisa terbawa angin lalu menyulut rumput kering. Sebaiknya daun kering diolah menjadi kompos atau ditangani dengan cara aman tanpa membakarnya.',
        },
        {
          id: 'opt-3',
          text:
            'Mengumpulkan sampah ke dalam tempat sampah dan menjaga halaman sekolah tetap bersih.',
          isCorrect: false,
          feedback:
            'Bagus! Mengumpulkan sampah di tempat yang sesuai merupakan kebiasaan baik. Yang penting, jangan membakar sampah tersebut sembarangan.',
        },
      ],
    },
  },

  // =====================================================
  // LEVEL 3 — DAMPAK KARHUTLA
  // =====================================================
  {
    id: 'lvl-03',
    slug: 'dampak-pada-alam',
    level: 3,
    title: 'Apa yang Terjadi Kalau Hutan Terbakar?',
    subtitle: 'Mengenal dampak asap, kerusakan alam, dan nasib satwa',
    readTime: '6 Menit Baca',
    heroBadge: 'Pahami Akibat',

    introText:
      'Coba bayangkan kamu sedang bermain di halaman sekolah, tetapi tiba-tiba udara dipenuhi asap dan langit terlihat berkabut. Mata mulai terasa perih, tenggorokan gatal, dan guru meminta semua murid masuk ke kelas. Keadaan seperti ini bisa terjadi ketika asap kebakaran hutan menyebar ke suatu wilayah. Namun, dampak Karhutla tidak hanya dirasakan manusia. Pohon dapat hangus, hewan kehilangan tempat tinggal, dan tanah mengalami kerusakan. Kebakaran juga dapat mengganggu kegiatan belajar, perjalanan, dan pekerjaan masyarakat. Yuk, kita pelajari mengapa Karhutla merupakan masalah yang harus kita cegah bersama!',

    keyPoints: [
      {
        title: 'Asap Membuat Udara Tidak Sehat',
        desc:
          'Asap kebakaran mengandung gas dan partikel kecil yang dapat masuk ke saluran pernapasan. Udara berasap bisa membuat mata perih, batuk, dan sesak napas. Anak-anak perlu lebih berhati-hati karena tubuh mereka masih berkembang.',
        iconName: 'Wind',
      },
      {
        title: 'Hewan Kehilangan Tempat Tinggal',
        desc:
          'Ketika hutan terbakar, sarang, tempat berlindung, dan sumber makanan hewan bisa rusak. Sebagian hewan mencoba melarikan diri ke tempat lain, tetapi tidak semuanya berhasil. Satwa yang keluar dari hutan juga bisa menghadapi bahaya baru di dekat permukiman atau jalan.',
        iconName: 'Bird',
      },
      {
        title: 'Tanaman dan Tanah Ikut Rusak',
        desc:
          'Api dapat membakar pohon, semak, dan tumbuhan kecil. Hewan serta makhluk hidup lain yang bergantung pada tumbuhan juga ikut terdampak. Kebakaran yang parah dapat merusak lapisan tanah dan menghambat pertumbuhan kembali tumbuhan.',
        iconName: 'Trees',
      },
    ],

    deepDive: {
      heading: 'Mengapa Dampak Karhutla Bisa Sampai ke Sekolah dan Rumah?',

      paragraphs: [
        'Ketika hutan terbakar, asap dapat naik ke udara dan terbawa angin ke tempat yang jauh dari sumber kebakaran. Karena itu, sebuah kota atau desa bisa mengalami kabut asap meskipun kobaran api tidak berada tepat di dekat rumahnya. Tebal atau tipisnya asap yang sampai ke suatu tempat dipengaruhi oleh banyak hal, termasuk besarnya kebakaran, arah angin, dan keadaan cuaca.',

        'Asap kebakaran bukan sekadar bau yang tidak enak. Di dalamnya dapat terdapat partikel sangat kecil yang sulit dilihat dengan mata. Ketika terhirup, partikel tersebut bisa mengganggu saluran pernapasan. Anak-anak, orang lanjut usia, dan orang yang memiliki gangguan pernapasan perlu mendapat perhatian khusus saat kualitas udara memburuk.',

        'Jika udara di luar tidak sehat, sekolah mungkin perlu membatasi kegiatan di luar ruangan atau mengikuti arahan dari pihak berwenang. Kita juga sebaiknya menghindari olahraga di luar ketika asap tebal. Masker yang sesuai dapat membantu mengurangi paparan partikel, tetapi tidak membuat kita aman untuk bermain di dekat kebakaran. Ikuti arahan orang tua, guru, dan petugas kesehatan.',

        'Dampak lainnya dirasakan hewan. Orangutan, bekantan, burung, dan berbagai satwa lain membutuhkan habitat yang sesuai untuk mencari makan, berlindung, dan berkembang biak. Ketika habitat terbakar, hewan dapat kehilangan sumber makanan atau terpaksa berpindah. Satwa yang terluka atau berada di dekat permukiman juga bisa menghadapi bahaya tambahan.',

        'Karhutla juga dapat mengganggu kehidupan sehari-hari. Jalan bisa menjadi berbahaya karena jarak pandang berkurang, penerbangan dapat terganggu, dan kegiatan masyarakat bisa terhenti. Warga yang menghirup asap mungkin perlu beristirahat atau mendapatkan pertolongan medis. Itulah sebabnya mencegah kebakaran berarti melindungi manusia, hewan, tumbuhan, dan kegiatan masyarakat sekaligus.',
      ],

      funFact:
        'Burung enggang merupakan salah satu satwa yang hidup di hutan Kalimantan. Beberapa jenis burung membantu menyebarkan biji melalui buah yang mereka makan. Dengan begitu, mereka ikut membantu proses tumbuhnya tumbuhan baru di hutan.',
    },

    interactiveCheck: {
      type: 'impact_match',
      prompt: 'Kuis Detektif Dampak Karhutla!',
      instruction:
        'Jika asap kebakaran membuat udara di sekitar sekolah tidak sehat, tindakan mana yang paling tepat?',

      options: [
        {
          id: 'opt-1',
          text:
            'Tetap bermain sepak bola di lapangan karena asap hanya mengganggu pemandangan.',
          isCorrect: false,
          feedback:
            'Belum tepat, ya. Asap dapat mengandung partikel kecil yang mengganggu pernapasan. Ketika udara tidak sehat, hindari kegiatan berat di luar ruangan dan ikuti arahan guru.',
        },
        {
          id: 'opt-2',
          text:
            'Memberi tahu guru, mengurangi kegiatan di luar ruangan, dan mengikuti petunjuk keselamatan.',
          isCorrect: true,
          feedback:
            'Betul sekali! Kamu sudah tahu cara melindungi diri. Jika ada asap, beri tahu orang dewasa dan ikuti petunjuk sekolah serta petugas setempat.',
        },
      ],
    },
  },

  // =====================================================
  // LEVEL 4 — PENCEGAHAN KARHUTLA
  // =====================================================
  {
    id: 'lvl-04',
    slug: 'ayo-cegah',
    level: 4,
    title: 'Ayo, Kita Bantu Cegah Karhutla!',
    subtitle: 'Tidak harus jadi orang dewasa untuk menjadi penjaga hutan',
    readTime: '6 Menit Baca',
    heroBadge: 'Aksi Pahlawan',

    introText:
      'Sahabat Rimba, sekarang kamu sudah tahu bahwa kebakaran hutan dapat membawa banyak masalah. Kabar baiknya, kita bisa membantu mencegah kebakaran melalui kebiasaan sederhana. Kita tidak perlu memegang selang pemadam atau masuk ke hutan untuk menjadi penjaga lingkungan. Kita bisa memulai dari rumah dan sekolah, seperti tidak bermain api, tidak membakar sampah, menjaga lingkungan, serta mengingatkan teman dengan cara yang baik. Kita juga bisa belajar mengapa hutan perlu dijaga dan mengajak orang lain untuk ikut peduli. Setiap tindakan kecil yang aman bisa menjadi bagian dari usaha besar melindungi alam.',

    keyPoints: [
      {
        title: 'Jangan Bermain dengan Api',
        desc:
          'Korek api, korek gas, lilin menyala, dan bahan yang bisa menimbulkan percikan bukan mainan. Jangan mencoba membakar daun, rumput, kertas, atau benda lainnya. Jika menemukan korek api atau melihat teman bermain api, segera beri tahu orang dewasa.',
        iconName: 'Flame',
      },
      {
        title: 'Kelola Daun Kering Tanpa Membakarnya',
        desc:
          'Daun yang gugur dapat dikumpulkan untuk dibuat kompos dengan bantuan orang dewasa. Kompos membantu memperbaiki tanah dan menyediakan unsur hara bagi tanaman. Cara ini mengurangi kebutuhan untuk membakar daun dan menghasilkan asap.',
        iconName: 'Leaf',
      },
      {
        title: 'Ajak Orang Lain Menjaga Hutan',
        desc:
          'Kamu bisa membuat poster tentang bahaya Karhutla, mengingatkan teman agar tidak membuang puntung rokok sembarangan, atau menceritakan hal yang kamu pelajari kepada keluarga. Jangan menghadapi orang yang melakukan tindakan berbahaya sendirian; mintalah bantuan orang dewasa.',
        iconName: 'Users',
      },
    ],

    deepDive: {
      heading: 'Dari Kebiasaan Kecil Menjadi Aksi Besar',

      paragraphs: [
        'Menjaga hutan bukan hanya tugas petugas pemadam kebakaran atau orang yang tinggal di dekat hutan. Semua orang dapat membantu dengan melakukan hal yang sesuai dengan usia dan kemampuannya. Untuk anak-anak, langkah terpenting adalah tidak memulai api, mengenali bahaya, dan mengajak orang lain menjaga lingkungan.',

        'Salah satu kebiasaan yang perlu dihindari adalah membakar sampah. Saat sampah dibakar, asap dapat mencemari udara. Jika pembakaran dilakukan di dekat rumput kering atau semak, api juga bisa menyebar. Sebagai gantinya, sampah sebaiknya dipilah dan dikelola sesuai jenisnya. Daun dan sisa tumbuhan tertentu dapat diolah menjadi kompos dengan cara yang benar.',

        'Kompos adalah bahan yang terbentuk ketika sisa makhluk hidup, seperti daun, terurai menjadi bahan yang dapat membantu menyuburkan tanah. Kamu bisa belajar membuat kompos bersama orang tua atau guru. Pilih tempat yang sesuai dan ikuti petunjuk orang dewasa. Tidak perlu menggunakan api untuk mengolah daun kering menjadi pupuk.',

        'Kita juga dapat membantu dengan merawat tanaman di rumah atau sekolah. Tanaman yang tumbuh sehat membuat lingkungan lebih nyaman dan dapat menyediakan tempat hidup bagi makhluk kecil. Namun, menanam satu atau dua pohon saja tidak langsung menggantikan hutan yang rusak. Hutan alami memiliki banyak jenis tumbuhan dan hewan yang saling bergantung, sehingga perlindungannya tetap sangat penting.',

        'Bagaimana jika kamu melihat seseorang membakar lahan dekat hutan? Jangan mendekat untuk menegur sendirian dan jangan mencoba memadamkan api. Pergilah ke tempat aman, kemudian beri tahu orang tua, guru, atau orang dewasa yang bertanggung jawab. Mereka dapat melaporkan kejadian tersebut kepada petugas yang sesuai.',

        'Kamu juga bisa menjadi Sahabat Rimba melalui kegiatan sederhana di sekolah. Buatlah poster pencegahan Karhutla, adakan kuis tentang hutan, atau ajak teman berdiskusi tentang cara mengurangi sampah. Yang penting, informasi yang kamu bagikan benar, tidak menakut-nakuti, dan mendorong orang lain untuk melakukan tindakan yang aman.',
      ],

      funFact:
        'Daun kering dapat menjadi bahan kompos. Dengan bantuan air, udara, dan makhluk pengurai, daun akan terurai secara bertahap. Jadi, daun yang jatuh bukan selalu sampah yang harus dibakar!',
    },

    interactiveCheck: {
      type: 'action_sort',
      prompt: 'Pilih Aksi Sahabat Rimba!',
      instruction:
        'Kebiasaan mana yang paling tepat untuk membantu mencegah kebakaran hutan dan lahan?',

      options: [
        {
          id: 'opt-1',
          text:
            'Membakar tumpukan daun sendirian supaya halaman cepat bersih.',
          isCorrect: false,
          feedback:
            'Jangan lakukan itu! Membakar daun bisa menghasilkan asap dan memicu kebakaran. Mintalah bantuan orang dewasa untuk mengelola daun tanpa membakarnya.',
        },
        {
          id: 'opt-2',
          text:
            'Tidak bermain api, mengolah daun menjadi kompos dengan aman, dan mengajak teman menjaga lingkungan.',
          isCorrect: true,
          feedback:
            'Keren sekali! Kamu sudah memilih tindakan yang aman dan bermanfaat. Kebiasaan baik seperti ini membantu mengurangi risiko kebakaran dan menjaga lingkungan tetap sehat.',
        },
      ],
    },
  },

  // =====================================================
  // LEVEL 5 — KESELAMATAN SAAT MELIHAT API ATAU ASAP
  // =====================================================
  {
    id: 'lvl-05',
    slug: 'kalau-ada-api',
    level: 5,
    title: 'Kalau Melihat Api atau Asap, Harus Apa?',
    subtitle: 'Jadi anak pintar berarti tahu cara menyelamatkan diri',
    readTime: '6 Menit Baca',
    heroBadge: 'Aturan Penting',

    introText:
      'Sahabat Rimba, bayangkan kamu sedang berjalan pulang sekolah bersama teman. Dari kejauhan, kamu melihat asap tebal dan api di dekat semak-semak. Apa yang harus dilakukan? Hal pertama yang perlu kamu ingat adalah jangan mendekat! Kebakaran dapat membesar dengan cepat, asap bisa mengganggu pernapasan, dan arah api dapat berubah karena angin. Kamu tidak perlu menjadi pahlawan dengan memadamkan api sendiri. Tindakan paling berani dan cerdas adalah menjauh dari bahaya, mengajak teman ke tempat yang aman, lalu segera memberi tahu orang dewasa. Yuk, pelajari langkah-langkah keselamatan yang penting untuk kamu ingat!',

    keyPoints: [
      {
        title: 'Langkah 1: Segera Menjauh',
        desc:
          'Jika melihat api atau asap yang mencurigakan, jangan mendekat untuk memeriksa. Menjauhlah menuju tempat aman dan, jika memungkinkan, bergeraklah menjauhi arah asap. Jangan bersembunyi di semak-semak atau mencoba melewati api.',
        iconName: 'ShieldAlert',
      },
      {
        title: 'Langkah 2: Beri Tahu Orang Dewasa',
        desc:
          'Setelah berada di tempat aman, segera beri tahu guru, orang tua, petugas keamanan, atau orang dewasa yang bertanggung jawab. Jelaskan lokasi kejadian sejelas yang kamu bisa. Jangan kembali mendekati api untuk mengambil foto atau barang.',
        iconName: 'Users',
      },
      {
        title: 'Langkah 3: Minta Bantuan Petugas',
        desc:
          'Orang dewasa dapat menghubungi pemadam kebakaran atau layanan darurat setempat. Jika asap mulai masuk ke rumah atau sekolah, ikuti petunjuk evakuasi dari guru dan petugas. Jangan kembali ke lokasi sebelum dinyatakan aman.',
        iconName: 'PhoneCall',
      },
    ],

    deepDive: {
      heading: 'Kenapa Kita Tidak Boleh Mendekati Kebakaran?',

      paragraphs: [
        'Api yang terlihat kecil belum tentu aman. Angin dapat membuatnya menyebar ke rumput, daun, dan ranting di sekitarnya. Di kawasan gambut yang kering, api bahkan dapat menjalar di bawah permukaan tanah. Karena itu, jangan menganggap suatu kebakaran mudah dipadamkan hanya karena kobarannya terlihat kecil.',

        'Asap juga berbahaya. Menghirup asap dapat membuat mata perih, batuk, pusing, atau kesulitan bernapas. Jangan sengaja mendekat untuk melihat lebih jelas atau mengambil foto. Ponsel, video, dan rasa penasaran tidak lebih penting daripada keselamatanmu.',

        'Jika kamu sedang bersama teman, ajak mereka menjauh dengan tenang tetapi cepat. Pilih jalan yang aman dan jangan berjalan menuju arah api. Jika jalur yang biasa kamu lewati dipenuhi asap atau terhalang, jangan menerobosnya. Ikuti arahan guru, orang dewasa, atau petugas yang mengetahui kondisi lokasi.',

        'Setelah sampai di tempat aman, beri tahu orang dewasa tentang lokasi kebakaran. Ceritakan apa yang kamu lihat tanpa harus kembali untuk memastikan. Orang dewasa dapat menghubungi petugas pemadam kebakaran atau layanan darurat setempat. Jika kamu sendirian dan membutuhkan pertolongan, mintalah bantuan kepada orang dewasa yang dapat dipercaya.',

        'Bagaimana kalau asap masuk ke sekolah? Dengarkan instruksi guru. Jangan berlari tanpa arah, jangan bersembunyi, dan jangan kembali ke kelas untuk mengambil tas jika kamu sudah diminta keluar. Ikuti jalur evakuasi menuju tempat berkumpul yang aman. Jika berada di rumah, ikuti arahan orang tua atau petugas dan jangan kembali ke dalam bangunan yang berbahaya.',

        'Jika kamu mulai batuk terus-menerus, pusing, atau kesulitan bernapas setelah terpapar asap, segera beri tahu orang dewasa dan minta pertolongan medis. Jangan menutupi gejala atau memaksakan diri tetap beraktivitas. Keselamatanmu selalu menjadi yang utama.',

        'Ingat, Sahabat Rimba: tugasmu bukan memadamkan kebakaran. Tugasmu adalah menjauhi bahaya, membantu teman menuju tempat aman, dan memberi tahu orang dewasa. Petugas yang terlatih memiliki perlengkapan dan kemampuan untuk menangani kebakaran dengan lebih aman.',
      ],

      funFact:
        'Petugas pemadam kebakaran menggunakan pakaian pelindung, perlengkapan pernapasan, dan peralatan khusus sesuai kondisi kebakaran. Perlengkapan biasa yang digunakan anak-anak tidak dapat menggantikan perlindungan tersebut.',
    },

    interactiveCheck: {
      type: 'safety_decision',
      prompt: 'Skenario Pulang Sekolah',
      instruction:
        'Saat pulang sekolah bersama teman, kamu melihat asap tebal dan api di semak dekat jalan. Apa tindakan yang paling aman?',

      options: [
        {
          id: 'opt-1',
          text:
            'Mengambil ember dan mencoba memadamkan api sebelum membesar.',
          isCorrect: false,
          feedback:
            'Jangan lakukan itu! Api bisa menyebar dengan cepat dan asap dapat mengganggu pernapasan. Menjauhlah dan biarkan petugas terlatih menangani kebakaran.',
        },
        {
          id: 'opt-2',
          text:
            'Mendekat untuk mengambil foto agar bisa mengunggahnya ke media sosial.',
          isCorrect: false,
          feedback:
            'Tidak aman! Kamu tidak perlu mendekat untuk membuktikan bahwa kebakaran terjadi. Foto tidak sebanding dengan risiko terkena asap atau terjebak api.',
        },
        {
          id: 'opt-3',
          text:
            'Mengajak teman menjauh menuju tempat aman, lalu segera memberi tahu orang dewasa.',
          isCorrect: true,
          feedback:
            'Hebat! Kamu memilih tindakan yang benar. Menjauh, menjaga teman tetap aman, dan melaporkan kejadian kepada orang dewasa merupakan langkah penting untuk melindungi diri.',
        },
      ],
    },
  },
];