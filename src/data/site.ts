import type { Member, NavItem, SocialLink, TimelineEvent } from "@/lib/types";

export const siteConfig = {
  name: "IMPURITY",
  tagline: "Deathcore unit from Bandung, Indonesia.",
  description:
    "Official website IMPURITY — pusat identitas digital, media arsip, dan platform editorial band deathcore asal Bandung.",
  url: "https://impurity.vercel.app",
  locale: "id_ID",
  contactEmail: "impurity.ron@gmail.com",
  pressEmail: "impurity.ron@gmail.com",
  phone: "",
  whatsappUrl: "",
  logoPackUrl: "https://drive.google.com/drive/folders/16Y7StwU6grgetkZWUJfH9QqNZMusi9jb?usp=sharing",
  mediaKitUrl: "https://drive.google.com/drive/folders/15Ai__Tr1geQpeExqao8FGzTkthz-mtgC?usp=sharing",
};

export const navigation: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Music", href: "/music" },
  { label: "Journal", href: "/journal" },
  { label: "Archive", href: "/archive" },
  { label: "Campaigns", href: "/campaigns" },
  { label: "Contact", href: "/contact" },
];

export const socialLinks: SocialLink[] = [
  { label: "Instagram", href: "https://instagram.com/impuritybdg" },
  { label: "Facebook", href: "https://facebook.com/impuritybdg" },
  { label: "X", href: "https://twitter.com/impuritybdg" },
  { label: "Bandcamp", href: "https://impuritybdg.bandcamp.com" },
  { label: "Discord", href: "https://discord.gg/PzXhPcDZ2u" },
  { label: "YouTube", href: "https://youtube.com/@impuritybdg" },
];

export const members: Member[] = [
  { name: "River", role: "Vocals", image: "/images/members/river.png" },
  { name: "Dimas", role: "Drums", image: "/images/members/dimas.png" },
  { name: "Kaizer", role: "Guitar", image: "/images/members/kaizer.png" },
  { name: "Hafiz", role: "Guitar", image: "/images/members/hafiz.png" },
  { name: "Galih", role: "Bass", image: "/images/members/galih.png" },
];

export const timeline: TimelineEvent[] = [
  {
    year: "2023",
    month: "Januari",
    title: "Formasi Awal",
    description:
      "IMPURITY terbentuk di Bandung oleh River, Dimas, Kaizer, dan Galih yang bertemu di organisasi seni kampus.",
  },
  {
    year: "2023",
    month: "April",
    title: "Single Pertama — Bencana",
    description:
      "Melepaskan single perdana 'Bencana', sebuah karya deathcore bertema gelap pasca-apokaliptik.",
  },
  {
    year: "2023",
    month: "Mei",
    title: "Evolusi Formasi",
    description:
      "Dimas beralih posisi menjadi drummer, dan Hafiz bergabung untuk memperkuat sektor gitar.",
  },
  {
    year: "2024",
    month: "April",
    title: "Resital Genosida",
    description:
      "Merilis 'Resital Genosida', memadukan deathcore dengan instrumen gamelan dan nuansa hardcore.",
  },
  {
    year: "2024",
    month: "September",
    title: "Wanci Surup",
    description:
      "Eksplorasi budaya Sunda dan mitos Sandekala dalam single 'Wanci Surup'.",
  },
  {
    year: "2026",
    month: "Mei",
    title: "Peluk Bumi Support",
    description:
      "Terlibat dalam agenda komunitas Peluk Bumi melalui aksi penanaman mangrove dan dokumentasi kegiatan lingkungan.",
  },
];

export const manifesto = [
  "Kami tidak mencari kemurnian.",
  "Distorsi dan tradisi kami benturkan dalam satu tubuh suara.",
  "Setiap karya adalah refleksi dari keserakahan manusia, kehancuran, dan trauma yang diwariskan.",
  "IMPURITY bukan sekadar band — tetapi ruang kolektif untuk berekspresi tanpa batas.",
];