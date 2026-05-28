import Link from "next/link";
import { navigation, siteConfig, socialLinks } from "@/data/site";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-border">
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
        <div className="grid gap-12 sm:grid-cols-2 md:grid-cols-5">
          <div className="col-span-2">
            <div className="mb-6">
              <img
                src="/images/logo/font-white.png"
                alt={siteConfig.name}
                className="h-40 w-auto object-contain"
              />
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-muted">
              {siteConfig.tagline}
            </p>
          </div>

          <div>
            <p className="font-mono mb-4 text-[10px] tracking-[0.2em] text-muted uppercase">
              Navigate
            </p>
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono mb-4 text-[10px] tracking-[0.2em] text-muted uppercase">
              Resources
            </p>
            <ul className="space-y-2">
              <li>
                <a
                  href={siteConfig.logoPackUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted transition-colors hover:text-foreground"
                >
                  Logo Pack
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.mediaKitUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted transition-colors hover:text-foreground"
                >
                  Media Kit
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-mono mb-4 text-[10px] tracking-[0.2em] text-muted uppercase">
              Connect
            </p>
            <ul className="space-y-2">
              {socialLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-2 border-t border-border pt-8 md:flex-row md:items-center md:justify-between">
          <p className="font-mono text-[10px] tracking-[0.15em] text-muted uppercase">
            © {new Date().getFullYear()} {siteConfig.name}. Indonesia.
          </p>
          <p className="font-mono text-[10px] tracking-[0.15em] text-muted uppercase">
            Cultural & Creative Platform
          </p>
        </div>
      </div>
    </footer>
  );
}
