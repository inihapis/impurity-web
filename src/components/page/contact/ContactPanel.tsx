"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { siteConfig, socialLinks } from "@/data/site";

const contactChannels = [
  {
    label: "Email — General",
    description: "Pertanyaan umum, kolaborasi, booking",
    href: `mailto:${siteConfig.contactEmail}?subject=Inquiry%20-%20IMPURITY`,
    cta: "Send Email",
  },
  {
    label: "Email — Press",
    description: "Media coverage, interview, press materials",
    href: `mailto:${siteConfig.pressEmail}?subject=Press%20Inquiry%20-%20IMPURITY`,
    cta: "Press Email",
  },
  {
    label: "WhatsApp",
    description: "Respons cepat untuk inquiry mendesak",
    href: siteConfig.whatsappUrl,
    cta: "Chat on WhatsApp",
    external: true,
  },
  {
    label: "Phone",
    description: "Booking & media (jam kerja)",
    href: `tel:${siteConfig.phone.replace(/\s/g, "")}`,
    cta: "Call",
  },
] as const;

export function ContactPanel() {
  return (
    <div className="grid gap-16 lg:grid-cols-2">
      <FadeIn>
        <section>
          <h2 className="font-display mb-2 text-2xl text-foreground">
            Direct Contact
          </h2>
          <p className="mb-8 text-sm leading-relaxed text-muted">
            Hubungi kami langsung melalui channel di bawah. Tidak ada form
            submission — respons lebih cepat via email atau WhatsApp.
          </p>

          <div className="space-y-4">
            {contactChannels.map((channel) => (
              <a
                key={channel.label}
                href={channel.href}
                target={"external" in channel && channel.external ? "_blank" : undefined}
                rel={
                  "external" in channel && channel.external
                    ? "noopener noreferrer"
                    : undefined
                }
                className="touch-target group flex min-h-[72px] flex-col justify-center border border-border bg-surface px-5 py-4 transition-colors hover:border-foreground/30"
              >
                <p className="font-mono text-[10px] tracking-[0.15em] text-muted uppercase">
                  {channel.label}
                </p>
                <p className="mt-1 text-sm text-muted">{channel.description}</p>
                <span className="font-mono mt-3 inline-block text-[10px] tracking-[0.15em] text-foreground uppercase transition-colors group-hover:text-accent">
                  {channel.cta} →
                </span>
              </a>
            ))}
          </div>
        </section>
      </FadeIn>

      <div className="space-y-12">
        <FadeIn delay={0.1}>
          <section>
            <h2 className="font-display mb-6 text-2xl text-foreground">
              Press Kit
            </h2>
            <p className="mb-6 text-sm leading-relaxed text-muted">
              Press kit dan logo pack tersedia via email. Kirim permintaan ke
              alamat press dengan subjek &quot;Press Kit Request&quot;.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={`mailto:${siteConfig.pressEmail}?subject=Press%20Kit%20Request&body=Hi%20IMPURITY%20team%2C%0A%0AI%20would%20like%20to%20request%20the%20press%20kit%20and%20logo%20pack.%0A%0AOrganization%3A%20%0AName%3A%20%0A`}
                className="touch-target inline-flex min-h-11 items-center justify-center border border-border px-6 py-3 font-mono text-xs tracking-[0.15em] text-foreground uppercase transition-colors hover:border-foreground"
              >
                Request Press Kit
              </a>
              <a
                href={`mailto:${siteConfig.pressEmail}?subject=Logo%20Pack%20Request`}
                className="touch-target inline-flex min-h-11 items-center justify-center border border-border px-6 py-3 font-mono text-xs tracking-[0.15em] text-foreground uppercase transition-colors hover:border-foreground"
              >
                Request Logo Pack
              </a>
            </div>
          </section>
        </FadeIn>

        <FadeIn delay={0.15}>
          <section>
            <h2 className="font-display mb-6 text-2xl text-foreground">
              Social
            </h2>
            <ul className="space-y-3">
              {socialLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="touch-target font-mono inline-flex min-h-11 items-center text-xs tracking-[0.12em] text-muted uppercase transition-colors hover:text-foreground"
                  >
                    {link.label} →
                  </a>
                </li>
              ))}
            </ul>
          </section>
        </FadeIn>
      </div>
    </div>
  );
}
