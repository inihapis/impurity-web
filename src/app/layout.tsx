import type { Metadata } from "next";
import { Cormorant_Garamond, Inter, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileNav } from "@/components/layout/MobileNav";
import { siteConfig } from "@/data/site";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s — ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/images/logo/monogram-black.png",
  },
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    locale: siteConfig.locale,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${inter.variable} ${cormorant.variable} ${jetbrains.variable} h-full`}
    >
      <body className="flex min-h-full flex-col bg-background text-foreground antialiased pb-16 lg:pb-0">
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <Header />
        <main id="main-content" className="flex-1 pt-16 md:pt-20">
          {children}
        </main>
        <Footer />
        <MobileNav />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
