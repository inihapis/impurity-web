# Log Implementasi — Penyelesaian MVP

Dokumen ini mencatat implementasi fitur dari *Rencana Pengembangan Website* (berdasarkan PRD v0.2).

## Status per Fase

### Fase 1 — Prioritas Tinggi ✅

| Fitur | Status | Catatan |
|-------|--------|---------|
| Filter kategori arsip | ✅ | `ArchiveGrid` — filter di sisi klien dengan tab dan jumlah item |
| Gambar placeholder | ✅ | `PlaceholderImage` — gradien SVG per tipe konten |
| Gambar item arsip | ✅ | Thumbnail di grid dan halaman detail |
| Halaman detail arsip | ✅ | Rute `/archive/[slug]` |

### Fase 2 — Prioritas Sedang ✅

| Fitur | Status | Catatan |
|-------|--------|---------|
| Kontak langsung (email/telepon/WhatsApp) | ✅ | `ContactPanel` — tanpa pengiriman formulir |
| Press kit via email | ✅ | `mailto:` dengan template permintaan |
| Tampilan artwork rilis | ✅ | `ReleaseArtwork` di beranda, daftar, dan detail |

### Fase 3 — Mobile First ✅

| Fitur | Status | Catatan |
|-------|--------|---------|
| Area sentuh minimal 44px | ✅ | Kelas `.touch-target`, navigasi, dan tombol |
| Menu mobile | ✅ | Layar penuh, tautan dengan tinggi memadai |
| Tipografi mudah dibaca | ✅ | Dasar 16px, jarak teks prose |
| Spasi mobile | ✅ | Padding `px-5`, `py-16` konsisten |

### Fase 4 — Atmosfer Sinematik ✅

| Fitur | Status | Catatan |
|-------|--------|---------|
| Atmosfer hero | ✅ | Grain, vignette, gradien radial |
| Latar ambient | ✅ | Lapisan pseudo-element |
| Grain diperkuat | ✅ | Opacity + mix-blend-mode |

### Fase 5 — Penyempurnaan ✅

| Fitur | Status | Catatan |
|-------|--------|---------|
| Sistem animasi | ✅ | FadeIn blur/arah, helper stagger |
| Grid arsip desktop | ✅ | Grid 3 kolom, efek hover |
| Pengalaman membaca jurnal | ✅ | Sampul lebar, spasi prose di desktop |
| Layout musik imersif | ✅ | Artwork sticky, 2 kolom di desktop |
| Aksen kampanye | ✅ | Border + tint latar |
| Aksesibilitas | ✅ | Skip link, focus-visible, reduced motion |
| Navigasi keyboard | ✅ | HTML semantik, urutan tab |

### Fase 6 — Optimasi Visual & Performa (Tambahan) ✅

| Fitur | Status | Catatan |
|-------|--------|---------|
| Optimasi Gambar | ✅ | Mengonversi tag img standar ke `next/image` untuk LCP lebih cepat |
| Responsivitas MDX | ✅ | Image, Paragraph, dan List dibatasi `max-w-full` dan `break-words` |
| Mobile Bottom Sheet | ✅ | Layout "More" disederhanakan dari kolom menjadi grid responsif |
| Fix Horizontal Scroll | ✅ | Overflow handling di root CSS dan parser bold dinamis di Credits MDX |
| Pembersihan Aset | ✅ | Folder `docs/bahan` dihapus karena aset telah dipindah ke `content` dan `public` |

## Berkas Baru / Penting

```
src/components/archive/ArchiveGrid.tsx
src/components/contact/ContactPanel.tsx
src/components/media/PlaceholderImage.tsx
src/components/media/ReleaseArtwork.tsx
src/app/archive/[slug]/page.tsx
src/lib/images.ts
src/lib/mdx.tsx
docs/*.md
```

## Perubahan Perilaku

- **Arsip**: dari anchor `#slug` → halaman detail `/archive/[slug]`
- **Kontak**: formulir dihapus → saluran kontak langsung
- **Aset Bahan**: Semua materi mentah di folder `bahan` dihapus dari direktori proyek karena sudah di-deploy ke rute masing-masing.

## Langkah Selanjutnya (Opsional)

1. Integrasi Decap CMS untuk editor non-teknis
2. Analitik tambahan (Plausible)
3. Gambar Open Graph spesifik per halaman untuk keperluan *sharing* media sosial
