# Panduan Deployment

## Vercel (Direkomendasikan)

1. Push repositori ke GitHub atau GitLab.
2. Impor proyek di [vercel.com](https://vercel.com).
3. Atur **Root Directory** ke `website` jika repositori berada di folder induk `IMPURITY`.
4. Framework Preset: **Next.js** (biasanya terdeteksi otomatis).
5. Klik Deploy.

### Variabel Lingkungan

MVP tidak memerlukan variabel lingkungan. Untuk integrasi ke depan (analitik, CMS):

```
# Contoh untuk masa depan
NEXT_PUBLIC_SITE_URL=https://impurity.band
```

## Build Lokal

```bash
cd website
npm run build
npm run start
```

Hasil build disimpan di folder `.next/`. Semua rute MVP di-generate secara statis.

## Domain Kustom

1. Tambahkan domain di Vercel → Project Settings → Domains.
2. Sesuaikan DNS mengikuti instruksi dari Vercel.
3. Opsional: perbarui `siteConfig.url` di `src/data/site.ts`.

## Decap CMS (Opsional — sesuai PRD)

Untuk mengedit konten tanpa menyentuh Git secara langsung:

1. Deploy Decap CMS di rute `/admin`.
2. Konfigurasi `config.yml` agar mengarah ke folder `content/`.
3. Gunakan Git Gateway atau backend Railway jika diperlukan.

Fitur ini belum diimplementasikan di MVP; konten saat ini diedit melalui berkas MDX.

## Daftar Periksa Sebelum Peluncuran

- [ ] Ganti email, telepon, dan WhatsApp di `src/data/site.ts`
- [ ] Perbarui URL media sosial
- [ ] Ganti konten contoh dengan konten asli band
- [ ] Unggah gambar ke `public/images/`
- [ ] Verifikasi metadata SEO di setiap halaman
- [ ] Uji navigasi mobile dan tautan kontak
- [ ] Pastikan `npm run build` berjalan tanpa error
