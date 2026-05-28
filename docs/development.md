# Panduan Pengembangan

## Prasyarat

- Node.js 20 atau lebih baru
- npm

## Instalasi & Menjalankan

```bash
cd website
npm install
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser.

## Perintah npm

| Perintah | Fungsi |
|----------|--------|
| `npm run dev` | Server pengembangan lokal |
| `npm run build` | Build produksi + pengecekan TypeScript |
| `npm run start` | Menjalankan hasil build produksi |
| `npm run lint` | Pemeriksaan ESLint |

## Fitur yang Sudah Diimplementasikan (MVP+)

### Fase 1 — Arsip & Aset
- Filter kategori di sisi klien pada `/archive` (`ArchiveGrid`)
- Halaman detail arsip `/archive/[slug]`
- Placeholder gambar melalui `PlaceholderImage` (gradien SVG + dukungan path gambar asli)

### Fase 2 — Kontak & Musik
- Kontak langsung: email, WhatsApp, telepon (tanpa pengiriman formulir)
- Press kit melalui `mailto:` dengan template subjek dan isi pesan
- Tampilan artwork rilis di daftar dan halaman detail musik (`ReleaseArtwork`)

### Fase 3–5 — UI/UX
- Area sentuh minimal 44px (kelas `.touch-target`)
- Hero atmosferik: grain, vignette, pencahayaan radial
- Animasi: `FadeIn` dengan blur/arah, helper `StaggerChildren`
- Tautan loncat (*skip link*) dan `focus-visible` untuk keyboard
- Dukungan `prefers-reduced-motion` di CSS dan Framer Motion
- Tipografi editorial di desktop (kelas `.prose-editorial`)

## Menambah Halaman Baru

1. Buat folder dan berkas `src/app/{rute}/page.tsx`.
2. Ekspor `metadata` untuk SEO.
3. Untuk konten dinamis, tambahkan `generateStaticParams` dan fungsi getter di `lib/content.ts`.

## Komponen Utama

| Komponen | Lokasi | Kegunaan |
|----------|--------|----------|
| `ArchiveGrid` | `components/archive/` | Filter kategori + grid arsip |
| `ContactPanel` | `components/contact/` | Saluran kontak langsung |
| `PlaceholderImage` | `components/media/` | Gambar atau placeholder |
| `ReleaseArtwork` | `components/media/` | Artwork rilis musik |
| `FadeIn` | `components/ui/FadeIn.tsx` | Animasi saat scroll |

## Konfigurasi Situs

Edit `src/data/site.ts` untuk mengubah:

- Email, telepon, WhatsApp
- Navigasi dan tautan media sosial
- Timeline, anggota band, manifesto

## Pemecahan Masalah

**Build gagal — konten tidak ditemukan**  
Pastikan folder `content/` ada dan setiap berkas `.mdx` memiliki frontmatter YAML yang valid.

**Gambar tidak muncul**  
Path harus diawali `/` dan berkas harus berada di dalam folder `public/`.

**Animasi tidak berjalan**  
Periksa apakah sistem operasi mengaktifkan opsi *reduce motion*; komponen akan menonaktifkan animasi sesuai preferensi tersebut.
