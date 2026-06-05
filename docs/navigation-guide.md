# Navigation Guide

Website ini menggunakan prinsip *Unified Navigation System*, artinya navigasi Desktop dan Mobile bersumber dari struktur data yang persis sama.

## 1. Struktur Data Navigasi
Sumber data utama berada di array konfigurasi navigasi. Setiap item memiliki:
- **`label`** (Wajib): Teks yang tampil di menu (Contoh: "Music").
- **`href`** (Wajib): Link tujuan (Contoh: "/music").

## 2. Aturan Tampilan
### Desktop (Header Navigation)
- Seluruh menu utama akan berjejer di bagian atas secara horizontal.
- Teks menggunakan format *uppercase* dengan jarak spasi (tracking) yang lebar.

### Mobile (Bottom Navigation & More Sheet)
- **Bottom Navigation**: Menampilkan maksimal **4 menu utama** yang paling penting, ditambah 1 tombol **"More"**.
- **More Sheet**: Jika tombol "More" ditekan, akan memunculkan *sheet* (layar tarik) dari bawah. Sisa navigasi yang tidak muat di bawah akan diletakkan di sini, lengkap beserta link Media Sosial.
- **Visual Keterkaitan**: Tombol "More" dirancang sama persis dengan tombol lain secara visual (hanya label tanpa ikon) demi konsistensi visual (*Unity Design*).

## 3. Pengelolaan Data Sosmed
Sosial media digunakan di Footer dan di dalam *More Sheet* pada mobile.
- Semua link (Instagram, Facebook, X, Bandcamp, Discord, YouTube) dikelola dalam satu objek agar jika ada perubahan nama pengguna (misal: `impuritybdg`), otomatis terupdate di seluruh website.
