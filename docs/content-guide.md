# Panduan Konten IMPURITY

Dokumen ini menjelaskan struktur data dan cara memperbarui konten di website IMPURITY.

## Struktur Warna Accent (Baru)

Untuk memberikan atmosfer yang unik pada setiap rilis atau campaign, kami menggunakan sistem dua warna accent:

- `bgAccent`: Warna background dominan (disarankan warna gelap/deep).
- `fgAccent`: Warna light/terang untuk teks accent, border, dan efek glow.

Contoh pada MDX:
```yaml
bgAccent: "#1a0000"
fgAccent: "#ff3333"
```

## Kategori Konten

### 1. Music (`content/releases/`)
Digunakan untuk rilis lagu/single/EP.
- **Tipe:** `single`, `ep`, `album`, `demo`.
- **Streaming:** Pastikan link Spotify, Apple, dan YouTube tersedia.

### 2. Campaigns (`content/campaigns/`)
Inisiatif atau kolaborasi band (contoh: Peluk Bumi).
- **Status:** `active`, `completed`, `upcoming`.
- **Images:** Gunakan `coverImage` untuk thumbnail dan header detail.

### 3. Archive (`content/archive/`)
Dokumentasi sejarah, BTS, dan evolusi visual.
- **Kategori:** `flyer`, `visual`, `rehearsal`, `bts`, `logo`.

## Manajemen Gambar

Semua gambar harus diletakkan di `public/images/` dengan subfolder yang sesuai:
- `/members/` - Foto personil.
- `/releases/` - Artwork rilis.
- `/campaigns/` - Visual inisiatif.
- `/logo/` - Logotype dan Monogram.

## Update Timeline

Timeline di halaman About dikelola melalui `src/data/site.ts`. Setiap event harus memiliki `year`, `month`, `title`, dan `description`.
