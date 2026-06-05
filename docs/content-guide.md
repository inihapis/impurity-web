# Content Guide IMPURITY (MDX)

Sistem website IMPURITY menggunakan file **MDX** (Markdown + JSX) untuk mengelola konten seperti rilis musik (discography), jurnal, arsip, dan campaign. Panduan ini menjelaskan struktur Metadata (Frontmatter) yang berada di bagian paling atas setiap file MDX tersebut.

## Struktur Direktori Konten

Semua konten MDX harus disimpan di dalam folder `content/` sesuai dengan jenisnya:
- `content/releases/` untuk karya musik (Single, EP, Album).
- `content/journal/` untuk artikel, catatan editorial, atau berita.
- `content/campaigns/` untuk acara, campaign, atau gigs.
- `content/archive/` untuk arsip galeri/foto.

## Cara Menggunakan Template

Di dalam folder `docs/templates/` terdapat contoh file `.mdx` siap pakai. Anda cukup:
1. Menyalin (copy) file template yang relevan ke dalam folder konten (misalnya `content/journal/`).
2. Mengubah nama file sesuai judul (gunakan format huruf kecil dan tanda strip, contoh: `tulisan-baru.mdx`).
3. Mengubah isi Metadata (di antara tanda `---`) dan isi teks Markdown di bawahnya.

## Template Tersedia
- [release-template.mdx](./templates/release-template.mdx)
- [journal-template.mdx](./templates/journal-template.mdx)
- [campaign-template.mdx](./templates/campaign-template.mdx)
- [archive-template.mdx](./templates/archive-template.mdx)
