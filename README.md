# Riana's GeoGarden

Website belajar Geologi Struktur personal untuk Riana Amelia, berdasarkan laporan praktikum yang diunggah.

## Menjalankan secara lokal
Cukup buka `index.html` di browser. Untuk pengalaman development yang lebih baik, gunakan ekstensi Live Server di VS Code.

## Deploy ke Vercel
1. Ekstrak ZIP ini.
2. Upload folder project ke repository GitHub.
3. Di Vercel pilih **Add New → Project**, lalu import repository.
4. Framework Preset: **Other**.
5. Build Command: kosongkan.
6. Output Directory: `.` (root).
7. Klik Deploy.

Tidak membutuhkan build step, database, atau server backend.

## Teknologi
- HTML5
- CSS3
- Vanilla JavaScript
- localStorage untuk menyimpan progres pada browser/perangkat yang sama.

## Catatan materi
Konten ringkas merujuk pada `Riana Amelia Laprak.pdf`, khususnya Bab I–IV. Penjelasan aplikasi pertambangan diringkas dari konteks laporan. Angka pengukuran kekar pada laporan (Strike N15°, N265°, N277°, N320°, N197°; Dip 20°E, 30°E, 34°E, 57°E, 22°E) dapat ditambahkan ke modul lanjutan; tidak diubah atau ditafsirkan ulang di website ini.

## Catatan teknis
Python tidak berjalan langsung di browser statis Vercel. Interaksi game menggunakan JavaScript agar dapat berjalan tanpa backend. Python bisa digunakan terpisah untuk menyiapkan atau mengolah dataset materi.
