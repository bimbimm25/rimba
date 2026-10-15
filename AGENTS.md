R.I.M.B.A
Ruang Interaktif Mengenal Bencana dan Alam
PROJECT REFERENCE DOCUMENT • AI AGENT DEVELOPMENT GUIDE
Tema: Innovating Education Through Technology
Subtema: Web Education for Kids (Anak SD)
Fokus: Edukasi Karhutla (Kebakaran Hutan dan Lahan)
Tech Stack: Next.js + Tailwind CSS • Tanpa Backend
FUNGSI DOKUMEN
Dokumen ini adalah single source of truth bagi AI Agent dan developer. Setiap keputusan desain, konten, fitur, UX, dan implementasi teknis harus konsisten dengan tujuan edukasi anak SD.


 1. Ringkasan Eksekutif
R.I.M.B.A adalah platform web edukasi interaktif untuk anak sekolah dasar agar mengenal kebakaran hutan dan lahan (karhutla) melalui pengalaman belajar visual, sederhana, interaktif, aman, dan menyenangkan. Anak tidak hanya membaca materi, tetapi mengeksplorasi penyebab, dampak, pencegahan, keselamatan, dan pengambilan keputusan melalui cerita, permainan, kuis, simulasi ringan, dan misi.
Konteks karhutla di Indonesia menjadi alasan pentingnya literasi kebencanaan sejak dini. Banyak informasi karhutla hadir dalam format berita atau bahasa dewasa. R.I.M.B.A mengubah topik tersebut menjadi learning journey yang sesuai dengan cara belajar anak.
2. Identitas Proyek
Elemen	Keputusan Proyek
Nama	R.I.M.B.A
Kepanjangan	Ruang Interaktif Mengenal Bencana dan Alam
Tema lomba	Innovating Education Through Technology
Subtema	Web Education for Kids (Anak SD)
Topik	Kebakaran Hutan dan Lahan (Karhutla)
Target utama	Anak SD usia kira-kira 7–12 tahun
Pendukung	Guru dan orang tua
Platform	Web responsive
Frontend	Next.js + TypeScript (App Router)
Styling	Tailwind CSS
Backend	Tidak digunakan
Database	Tidak digunakan untuk MVP
Data	Konten lokal/static + client-side state
Bahasa	Bahasa Indonesia sederhana dan ramah anak
3. Makna Nama R.I.M.B.A
Nama R.I.M.B.A memiliki hubungan langsung dengan alam, hutan, dan lingkungan Indonesia serta mudah divisualisasikan sebagai dunia belajar yang hidup.
•	R — Ruang: ruang belajar digital, bukan sekadar halaman informasi.
•	I — Interaktif: anak belajar dengan klik, memilih, bermain, menjawab, dan mengeksplorasi.
•	M — Mengenal: mengenal karhutla, penyebab, dampak, pencegahan, dan keselamatan.
•	B — Bencana: fokus literasi kebencanaan, khususnya karhutla.
•	A — Alam: menghubungkan pengetahuan bencana dengan kepedulian terhadap alam.
4. Visi dan Misi
Visi
Menjadi pengalaman belajar digital yang membantu anak Indonesia mengenal karhutla dan membangun kebiasaan peduli serta aman terhadap lingkungan.
Misi
•	Menyederhanakan pengetahuan karhutla menjadi materi yang mudah dipahami anak SD.
•	Mengajarkan pencegahan melalui kebiasaan sehari-hari yang realistis.
•	Melatih anak membedakan tindakan aman dan berbahaya.
•	Menggunakan interaksi dan permainan sebagai bagian dari proses belajar.
•	Mendorong kepedulian terhadap hutan, lingkungan, dan komunitas.
•	Menyediakan pengalaman yang dapat digunakan mandiri maupun bersama pendamping.
5. Masalah Pendidikan yang Ingin Diselesaikan
Tantangan	Respons R.I.M.B.A
Literasi kebencanaan anak perlu diperkuat	Materi konkret, visual, interaktif, dan sesuai usia.
Materi sering terlalu teknis	Bahasa sederhana, ilustrasi, cerita, dan microlearning.
Belajar cenderung pasif	Scenario choice, kuis, misi, dan feedback langsung.
Anak perlu tahu harus berbuat apa	Latihan memilih tindakan aman dan kebiasaan pencegahan.
Teknologi belum selalu menjadi metode belajar	Web digunakan untuk eksplorasi, simulasi, evaluasi, dan feedback.
6. Nilai Inovasi Pendidikan
•	Story-driven learning: anak mengikuti perjalanan karakter di dunia R.I.M.B.A.
•	Microlearning: materi dipecah menjadi bagian kecil.
•	Interactive decision learning: anak memilih tindakan dan mendapat feedback.
•	Game-based assessment: pemahaman diuji melalui misi/kuis.
•	Visual literacy: ilustrasi, ikon, animasi ringan, dan diagram sederhana.
•	Action-oriented education: setiap topik mengarah pada tindakan aman.
•	Progressive learning: perkembangan belajar terlihat dan memotivasi.
7. Tujuan Pembelajaran
1.	Menjelaskan secara sederhana apa itu karhutla.
2.	Mengenali beberapa penyebab karhutla, termasuk perilaku manusia dan kondisi lingkungan.
3.	Menjelaskan dampak terhadap manusia, hewan, tumbuhan, udara, dan lingkungan.
4.	Mengenali tindakan pencegahan yang aman dilakukan anak.
5.	Membedakan tindakan aman dan berbahaya saat melihat api atau asap.
6.	Memahami bahwa penanganan kebakaran bukan tugas anak dan membutuhkan orang dewasa/pihak berwenang.
7.	Menunjukkan kepedulian terhadap alam melalui kebiasaan sederhana.
8. Prinsip Keselamatan Konten
ATURAN WAJIB
R.I.M.B.A tidak boleh mengajarkan anak memadamkan kebakaran, mendekati api, masuk area terbakar, atau menangani alat pemadam. Pesan keselamatan harus mengarahkan anak menjauh dari bahaya, mencari orang dewasa, dan mengikuti instruksi pihak berwenang.

•	Gunakan bahasa 'jangan mendekati api' dan 'segera cari orang dewasa'.
•	Jangan memberi tutorial teknis pemadaman untuk anak.
•	Jangan menampilkan gore, korban, atau adegan traumatis.
•	Jangan menakut-nakuti dengan statistik ekstrem.
•	Anak bukan pihak yang bertanggung jawab menangani karhutla.
•	Website edukasi tidak menggantikan instruksi resmi saat keadaan darurat.
9. Persona Pengguna
Persona	Peran	Kebutuhan
Anak SD	Pengguna utama	Belajar sambil bermain; membutuhkan visual, interaksi, dan feedback.
Guru	Pendamping	Media pembelajaran yang mudah digunakan dan relevan.
Orang tua	Pendamping	Anak memahami keselamatan dan kepedulian lingkungan.
10. Konsep Pengalaman Belajar
8.	Selamat datang di R.I.M.B.A → kenalan dengan dunia dan karakter.
9.	Kenalan dengan Karhutla → memahami konsep dasar.
10.	Kenapa Bisa Terjadi? → mengeksplorasi penyebab.
11.	Apa Dampaknya? → melihat hubungan karhutla dengan manusia dan alam.
12.	Ayo Cegah! → belajar kebiasaan pencegahan.
13.	Kalau Ada Asap/Api? → latihan keputusan aman.
14.	Misi R.I.M.B.A → menyelesaikan kuis/skenario.
15.	Lencana/Pencapaian → mendapatkan feedback dan motivasi.
16.	Penutup → ajakan menjadi Sahabat Rimba.
11. Sitemap / Struktur Halaman
•	Home / Landing
•	Dunia R.I.M.B.A / Learning Hub
•	Materi 01 — Apa Itu Karhutla?
•	Materi 02 — Kenapa Karhutla Terjadi?
•	Materi 03 — Dampak Karhutla
•	Materi 04 — Cara Mencegah
•	Materi 05 — Kalau Terjadi Kebakaran
•	Misi / Quiz
•	Hasil & Pencapaian
•	Tentang R.I.M.B.A
•	Panduan Pendamping (opsional)
12. Fitur MVP Prioritas
Fitur	Deskripsi	Prioritas
Learning Hub	Dashboard perjalanan belajar.	P0
Materi interaktif	Materi pendek dengan ilustrasi, animasi ringan, dan interaksi.	P0
Scenario choice	Skenario memilih tindakan aman/tidak aman.	P0
Quiz	Kuis pilihan ganda dengan feedback langsung.	P0
Progress	Progress disimpan sementara di browser.	P0
Badge	Lencana motivasi seperti Penjelajah Rimba/Sahabat Rimba.	P1
Responsive	Nyaman di desktop, tablet, mobile.	P0
Accessibility dasar	Kontras, ukuran teks, focus state, alt text, tombol jelas.	P0
13. Fitur yang Tidak Menjadi Fokus MVP
•	Login/register
•	Database pengguna
•	Forum/chat
•	Real-time monitoring titik api
•	Peta bencana real-time
•	Dashboard admin kompleks
•	Pembayaran
•	Backend API
•	AI chatbot sebagai fitur utama
•	Notifikasi darurat real-time
Alasan: proyek individu perlu fokus pada inovasi pembelajaran, kualitas UX anak, dan dampak edukasi.
14. Konsep UI/UX
•	Visual ceria, natural, modern, dan profesional; tidak kekanak-kanakan berlebihan.
•	Dunia hutan/rimba menjadi visual identity, bukan tema gelap bencana.
•	Prioritaskan ilustrasi dan komponen visual daripada paragraf panjang.
•	Satu layar memiliki satu tujuan utama.
•	CTA jelas dengan kata yang dipahami anak.
•	Feedback jawaban langsung: benar/salah + alasan singkat.
•	Animasi membantu orientasi/feedback, bukan dekorasi berlebihan.
•	Hindari pop-up berlebihan dan navigasi membingungkan.
•	Touch target cukup besar.
•	Semua interaksi utama dapat dilakukan tanpa hover.
15. Design System Awal
•	Nuansa: forest, nature, education, friendly, playful, trustworthy.
•	Palet dapat mengambil inspirasi hijau hutan, hijau daun, krem/putih hangat, dan warna aksen.
•	Merah/oranye hanya untuk konteks bahaya/peringatan.
•	Typography sans-serif yang mudah dibaca.
•	Border radius rounded secukupnya.
•	Shadow ringan.
•	Icon sederhana dan konsisten.
•	Illustration flat/soft 2D atau semi-3D yang konsisten.
16. Tone of Voice & Content Rules
•	Bahasa Indonesia baku-ringan dan ramah anak.
•	Kalimat pendek.
•	Paragraf 2–4 kalimat pendek.
•	Jelaskan istilah sulit sebelum digunakan.
•	Gunakan analogi sederhana bila membantu.
•	Hindari istilah teknis tanpa penjelasan.
•	Gunakan pertanyaan interaktif.
•	Hindari clickbait dan gaya berita sensasional.
•	Jangan menggunakan rasa takut sebagai motivasi utama.
17. Contoh Struktur Materi
Topik	Isi	Outcome
Apa Itu Karhutla?	Definisi sederhana + ilustrasi.	Anak memahami konsep dasar.
Penyebab	Penyebab alami dan aktivitas manusia yang disederhanakan.	Anak dapat menyebutkan contoh.
Dampak	Asap, udara, manusia, hewan, tumbuhan, aktivitas masyarakat.	Anak memahami akibat.
Pencegahan	Tidak bermain api, tidak membakar sembarangan, menjaga lingkungan, melapor.	Anak mengenali tindakan pencegahan.
Keselamatan	Jauh dari api/asap, jangan menangani sendiri, cari orang dewasa, ikuti arahan.	Anak memilih tindakan aman.
18. Game / Interaksi yang Direkomendasikan
•	Pilih Aman: memilih tindakan pada sebuah situasi.
•	Cari Penyebab: mencocokkan aktivitas dengan risiko.
•	Jaga Rimba: memilih kebiasaan yang membantu menjaga lingkungan.
•	Benar atau Mitos: menilai pernyataan sederhana.
•	Misi Penjelajah: menyelesaikan checkpoint materi.
•	Kuis akhir: evaluasi dengan hasil dan penjelasan.
19. Arsitektur Teknis
•	Framework: Next.js dengan App Router.
•	Language: TypeScript.
•	Styling: Tailwind CSS.
•	Server Components secara default; Client Components hanya saat perlu interaksi/state/browser API.
•	React state untuk interaksi; localStorage untuk progress.
•	Data dari file TypeScript/JSON lokal.
•	Assets di /public.
•	Tanpa database.
•	Tanpa authentication.
•	Tanpa custom backend API.
20. Struktur Folder yang Disarankan
app/
  page.tsx
  belajar/
    page.tsx
    [slug]/page.tsx
  misi/
    page.tsx
    hasil/page.tsx
  tentang/page.tsx
  panduan/page.tsx
  layout.tsx
  globals.css

components/
  ui/
  navigation/
  learning/
  quiz/
  progress/
  illustration/

data/
  lessons.ts
  quizzes.ts
  missions.ts

lib/
  progress.ts
  utils.ts

public/
  images/
  illustrations/
  icons/

types/
  learning.ts
  quiz.ts
21. Data Model Tanpa Backend
type Lesson = {
  id: string
  slug: string
  title: string
  description: string
  order: number
  sections: LessonSection[]
}

type QuizQuestion = {
  id: string
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
}

type UserProgress = {
  completedLessons: string[]
  completedMissions: string[]
  score: number
  badges: string[]
}
Progress MVP disimpan di localStorage sehingga bersifat lokal pada perangkat/browser pengguna.
22. Aturan Implementasi untuk AI Agent
ATURAN #1 — JANGAN MENYIMPANG DARI PRODUK
AI Agent harus menganggap dokumen ini sebagai product specification. Jangan menambahkan fitur besar hanya karena secara teknis memungkinkan.

17.	Cek apakah task mendukung edukasi karhutla untuk anak SD.
18.	Utamakan UX anak dibanding kompleksitas teknis.
19.	Jangan menambahkan backend/database/authentication pada MVP.
20.	Gunakan Next.js + TypeScript + Tailwind CSS.
21.	Gunakan komponen reusable.
22.	Jangan membuat semua halaman Client Component tanpa alasan.
23.	Pisahkan konten/data dari UI bila masuk akal.
24.	Pastikan responsive mobile, tablet, desktop.
25.	Setiap interaksi mempunyai feedback jelas.
26.	Jangan mengubah identitas R.I.M.B.A tanpa instruksi eksplisit.
27.	Jika requirement baru bertentangan, prioritaskan instruksi terbaru pemilik proyek dan jelaskan konflik.
23. Accessibility & Child-Friendly UX Checklist
•	Kontras memadai.
•	Navigasi keyboard dapat digunakan.
•	Focus state terlihat.
•	Alt text untuk gambar bermakna.
•	Informasi tidak hanya dibedakan lewat warna.
•	Label tombol jelas.
•	Target sentuh cukup besar.
•	Animasi tidak berlebihan.
•	Hormati prefers-reduced-motion.
•	Error message mudah dipahami.
24. Responsive Strategy
•	Mobile-first.
•	Mobile: navigasi sederhana, kartu vertikal, CTA besar.
•	Tablet: grid 2 kolom bila sesuai.
•	Desktop: layout lebih luas tanpa menyebarkan konten berlebihan.
•	Jangan mengandalkan hover.
•	Quiz dan interaction nyaman disentuh.
•	Ilustrasi tidak terpotong.
•	Hindari horizontal scrolling.
25. Performance Rules
•	Optimalkan gambar.
•	Gunakan next/image bila sesuai.
•	Hindari library besar tanpa kebutuhan.
•	Hindari animasi berat.
•	Gunakan dynamic import bila memang bermanfaat.
•	Minimalkan client-side JavaScript.
•	Jaga halaman awal ringan.
•	Gunakan semantic HTML.
26. SEO & Metadata
•	Title deskriptif.
•	Meta description natural dan edukatif.
•	Heading hierarchy benar.
•	Open Graph dasar.
•	Bahasa Indonesia.
•	SEO tidak boleh mengorbankan UX anak.
27. Konten dan Referensi Faktual
AI Agent tidak boleh mengarang fakta kebencanaan. Untuk angka, definisi resmi, rekomendasi keselamatan, atau klaim sensitif, gunakan sumber resmi dan mutakhir seperti lembaga pemerintah/penanggulangan bencana, BMKG, BNPB, dan kementerian/lembaga terkait.
•	Bedakan fakta edukasi dengan ilustrasi cerita.
•	Contoh fiktif harus diberi konteks sebagai simulasi.
•	Jangan menampilkan data real-time jika aplikasi tidak memiliki sumber real-time.
•	Untuk demo lomba, gunakan data statis yang jelas konteksnya.
28. Strategi Demo Kompetisi
28.	Buka landing page dan jelaskan masalah pendidikan karhutla untuk anak.
29.	Masuk ke Dunia R.I.M.B.A dan tunjukkan learning journey.
30.	Buka materi dan tunjukkan microlearning + visual.
31.	Gunakan scenario choice untuk menunjukkan pengambilan keputusan.
32.	Tunjukkan kuis dan feedback.
33.	Tunjukkan progress/badge.
34.	Tunjukkan responsive view.
35.	Tutup dengan dampak: anak belajar mengenal, mencegah, dan bersikap aman.
29. USP (Unique Selling Proposition)
R.I.M.B.A adalah web edukasi kebencanaan khusus anak SD yang mengubah pembelajaran karhutla dari sekadar informasi menjadi perjalanan belajar interaktif: kenali → pahami → pilih tindakan → cegah → jadilah Sahabat Rimba.
•	Spesifik untuk anak SD.
•	Topik karhutla relevan dengan konteks Indonesia.
•	Learning journey.
•	Edukasi + scenario-based learning + quiz + gamification.
•	MVP realistis tanpa backend.
•	Fokus pada perilaku aman, bukan sekadar pengetahuan.
30. Roadmap Pengembangan
Fase	Fokus	Output
1	Foundation	Setup Next.js, Tailwind, layout, routing, design tokens.
2	Core UX	Landing + Learning Hub + navigation + responsive system.
3	Learning	Materi 1–5 + reusable lesson components.
4	Interaction	Scenario choice + quiz + feedback.
5	Motivation	Progress + badge + result page.
6	Polish	Accessibility, performance, animation, responsive QA.
7	Competition	Demo flow, content review, bug fixing, deployment.
31. Definition of Done
•	Semua halaman utama tidak broken.
•	Tidak ada console error yang mengganggu.
•	Materi dapat diselesaikan dari awal hingga akhir.
•	Quiz memberikan hasil dan penjelasan.
•	Progress bekerja di browser.
•	Responsive mobile/tablet/desktop.
•	Tidak ada elemen utama terpotong.
•	Teks mudah dibaca anak.
•	Tombol punya state yang sesuai.
•	Konten keselamatan sudah diperiksa.
•	Tidak ada instruksi berbahaya.
•	Production build berhasil.
•	Dokumentasi instalasi/run tersedia.
32. Master Prompt untuk AI Agent
Kamu adalah AI Agent pengembang produk untuk R.I.M.B.A (Ruang Interaktif Mengenal Bencana dan Alam), web education for kids untuk anak SD dengan topik kebakaran hutan dan lahan (karhutla).

GOAL:
Membangun pengalaman belajar digital agar anak memahami karhutla, penyebab, dampak, pencegahan, dan tindakan aman melalui visual, cerita, interaksi, scenario-based learning, quiz, progress, dan gamification ringan.

STACK WAJIB:
Next.js App Router + TypeScript + Tailwind CSS. Tanpa backend, database, authentication, dan custom API. Gunakan data lokal/static. localStorage hanya untuk progress bila diperlukan.

PRINCIPLE:
Education first. Child-friendly UX first. Simplicity first. Safety first.

DO:
- UI modern, rapi, ceria, natural, profesional.
- Bahasa Indonesia sederhana.
- Komponen reusable.
- Responsive mobile-first.
- Semantic HTML dan accessibility dasar.
- Visual membantu pemahaman.
- Feedback langsung.
- Content/data terpisah dari UI bila masuk akal.
- Client Component hanya ketika membutuhkan interaksi/state/browser API.
- Jaga performance.

DO NOT:
- Jangan menambahkan backend/database/auth.
- Jangan mengubah produk menjadi portal berita.
- Jangan membuat UI seperti dashboard enterprise.
- Jangan menakut-nakuti anak.
- Jangan mengajarkan anak mendekati atau memadamkan kebakaran.
- Jangan membuat fitur besar yang tidak mendukung edukasi.
- Jangan menjadikan hover satu-satunya interaksi.
- Jangan menggunakan animasi berlebihan.

LEARNING JOURNEY:
Kenali Karhutla → Pahami Penyebab → Kenali Dampak → Belajar Mencegah → Belajar Bertindak Aman → Misi/Kuis → Progress/Badge.

SAFETY:
Jika ada api/asap, arahkan anak menjauh dari bahaya, mencari orang dewasa, dan mengikuti arahan pihak berwenang. Anak bukan pemadam kebakaran.

IMPLEMENTATION:
Sebelum coding, pahami struktur project. Jangan menimpa pekerjaan yang sudah benar. Jika task hanya memperbaiki satu bagian, ubah bagian itu tanpa merusak fitur lain. Setelah implementasi, periksa responsive behavior, accessibility dasar, console errors, broken imports, dan production build.

OUTPUT:
Jelaskan singkat apa yang diubah, file terdampak, dan cara memverifikasi hasil.
33. Checklist AI Agent Sebelum Menyelesaikan Task
36.	Mendukung tujuan edukasi R.I.M.B.A?
37.	Cocok untuk anak SD?
38.	Bahasa sederhana?
39.	Interaksi mudah?
40.	Aman secara edukasi kebencanaan?
41.	Responsive?
42.	Accessibility dasar?
43.	Tetap Next.js + Tailwind?
44.	Tidak menambah backend/database?
45.	Komponen reusable?
46.	Tidak merusak fitur existing?
47.	Tidak ada console/build error?
34. Arah Pengembangan Lanjutan
•	Mode guru/pendamping tanpa akun kompleks.
•	Printable activity sheet.
•	Lebih banyak scenario cards.
•	Modul bencana lingkungan lain dengan struktur serupa.
•	PWA/offline learning bila dibutuhkan.
•	Integrasi sumber resmi hanya bila benar-benar diperlukan.
•	Analytics anonim hanya jika kebutuhan evaluasi dan persetujuan sesuai.
35. Kesimpulan Produk
R.I.M.B.A harus diposisikan sebagai produk pendidikan, bukan sekadar website informasi karhutla. Kekuatan utamanya adalah bagaimana teknologi web membuat anak belajar, memilih, mencoba, mendapat feedback, dan memahami tindakan aman.
ONE-LINE PRODUCT STATEMENT
R.I.M.B.A adalah ruang belajar interaktif yang mengajak anak mengenal karhutla, memahami dampaknya, belajar mencegahnya, dan berlatih memilih tindakan yang aman melalui pengalaman web yang menyenangkan.

END OF PROJECT REFERENCE DOCUMENT
