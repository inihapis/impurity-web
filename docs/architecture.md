# Arsitektur Website IMPURITY

## Ringkasan

Website resmi IMPURITY dibangun sebagai platform **berbasis statis** (*static-first*) menggunakan Next.js App Router. Semua halaman MVP di-prerender saat proses build; konten diambil dari berkas MDX di folder `content/`.

## Stack Teknologi

| Lapisan | Teknologi |
|---------|-----------|
| Framework | Next.js 16 (App Router) |
| Styling | Tailwind CSS v4 |
| Animasi | Framer Motion (ringan, mendukung `prefers-reduced-motion`) |
| Konten | MDX + gray-matter |
| Font | Inter, Cormorant Garamond, JetBrains Mono |
| Deploy | Vercel (direkomendasikan) |

## Struktur Direktori

```
website/
├── content/              # Konten MDX (rilis, jurnal, arsip, kampanye)
├── docs/                 # Dokumentasi proyek
├── public/               # Aset statis
├── src/
│   ├── app/              # Rute dan halaman
│   ├── components/
│   │   ├── archive/      # ArchiveGrid (filter kategori)
│   │   ├── contact/      # ContactPanel
│   │   ├── home/         # Hero, bagian beranda
│   │   ├── layout/       # Header, Footer
│   │   ├── media/        # PlaceholderImage, ReleaseArtwork
│   │   └── ui/           # FadeIn, Button, ContentCard, dll.
│   ├── data/             # site.ts — konfigurasi global
│   └── lib/              # content.ts, mdx.tsx, images.ts, types.ts
```

## Alur Data Konten

1. Berkas `.mdx` di `content/{tipe}/` berisi frontmatter YAML + isi Markdown.
2. `src/lib/content.ts` membaca berkas melalui `fs` + `gray-matter` saat build.
3. Halaman (server component) memanggil fungsi getter (`getReleases`, `getArchiveItems`, dll.).
4. Isi MDX dirender melalui `next-mdx-remote` di `src/lib/mdx.tsx`.

## Routing

| Rute | Tipe | Sumber Data |
|------|------|-------------|
| `/` | Statis | Bagian beranda |
| `/about` | Statis | `data/site.ts` |
| `/music` | Statis | `content/releases/` |
| `/music/[slug]` | SSG | Detail rilis |
| `/journal` | Statis | `content/journal/` |
| `/journal/[slug]` | SSG | Detail artikel jurnal |
| `/archive` | Statis + filter klien | `content/archive/` |
| `/archive/[slug]` | SSG | Detail item arsip |
| `/campaigns` | Statis | `content/campaigns/` |
| `/campaigns/[slug]` | SSG | Detail kampanye |
| `/contact` | Statis | `data/site.ts` + ContactPanel |

## Komponen Media

- **PlaceholderImage** — menampilkan gambar dari `coverImage`/`artwork` jika tersedia, atau gradien SVG inline sebagai placeholder.
- **ReleaseArtwork** — komponen khusus untuk menampilkan artwork rilis musik.

## Prinsip Desain (dari PRD)

- Monokrom sebagai dasar, gaya editorial, berfokus pada tipografi
- Mobile-first; desktop sebagai ruang eksplorasi yang imersif
- Animasi untuk irama dan atmosfer, bukan sekadar efek hiasan
- Warna aksen kampanye pada border dan highlight

## Keamanan & Backend

MVP tidak menggunakan backend. Halaman kontak memakai tautan langsung (`mailto:`, `tel:`, WhatsApp). Press kit diminta melalui email press.
