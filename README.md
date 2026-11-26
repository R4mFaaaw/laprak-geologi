# Riana's GeoGarden

Website belajar Geologi Struktur untuk Riana Amelia. Dibuat sebagai frontend statis yang dapat di-host di Vercel.

## Isi proyek
- `index.html` — struktur halaman (dipertahankan dari versi sebelumnya).
- `styles.css` — desain pastel biru langit dan kupu-kupu (dipertahankan dari versi sebelumnya).
- `app.js` — materi, kuis, flashcard, permainan, serta penyimpanan progres.

## Pembaruan materi dan latihan
- 13 topik materi, termasuk hangingwall, footwall, bagian-bagian lipatan, jenis sesar, strike/dip, kemiringan semu, problema tiga titik, kedalaman/ketebalan, singkapan, Diagram Palmer, dan data pengukuran kekar pada laporan.
- 48 soal pilihan ganda.
- 28 pernyataan benar/salah yang masing-masing memiliki pernyataan dan pembahasan.
- 29 flashcard hafalan.
- Simulasi ujian 20 soal acak.
- Game kenali struktur (8 istilah), pasangkan istilah (8 pasangan), dan ronda ingatan (10 soal).
- Progres, XP, dan jumlah jawaban benar disimpan di `localStorage` browser.

Materi inti disusun berdasarkan laporan praktikum Geologi Struktur Riana Amelia (2026). Penjelasan konsep tambahan disajikan sebagai uraian belajar dasar. Data strike-dip pada tabel halaman 22 dipertahankan sesuai laporan: N15°/20°E, N265°/30°E, N277°/34°E, N320°/57°E, N197°/22°E.

## Menjalankan lokal
Buka `index.html` di browser atau jalankan server statis lokal.

## Deploy ke Vercel
1. Ekstrak ZIP.
2. Upload folder proyek ke repository GitHub.
3. Import repository di Vercel.
4. Framework Preset: `Other`.
5. Build Command dan Output Directory dapat dikosongkan/default; root proyek berisi `index.html`.

## Catatan teknis
Proyek ini frontend statis. JavaScript berjalan langsung di browser. Python tidak dijalankan di hosting statis Vercel; jika kelak diperlukan pemrosesan Python, tambahkan backend/API terpisah.
