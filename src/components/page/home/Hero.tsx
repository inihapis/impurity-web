"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui";
import { siteConfig } from "@/data/site";

export function Hero() {
  return (
    <section id="hero" className="grain hero-vignette relative flex min-h-[90vh] items-end overflow-hidden pb-28 md:min-h-screen md:pb-40">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 -top-1/5">
        <img
          src="/images/hero-bg.jpg"
          alt="IMPURITY Photograph"
          className="h-full w-full object-cover object-bottom"
        />
        <div className="absolute inset-0 bg-linear-to-t from-background via-background/60 to-background/20" />
      </div>

      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        aria-hidden
        style={{
          background:
            "radial-gradient(ellipse 100% 80% at 70% 0%, rgba(200,200,200,0.07) 0%, transparent 55%)",
        }}
      />
      <div
        className="pointer-events-none absolute -top-1/4 right-0 h-[60vh] w-[60vw] opacity-[0.04]"
        aria-hidden
        style={{
          background:
            "radial-gradient(circle, rgba(255,255,255,0.8) 0%, transparent 70%)",
        }}
      />
      <div className="pointer-events-none absolute bottom-0 left-0 h-px w-full bg-linear-to-r from-transparent via-border to-transparent" aria-hidden />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 md:px-8">
        <FadeIn>
          <p className="font-mono mb-6 text-xs tracking-[0.25em] text-muted uppercase">
            Official Platform — Indonesia
          </p>
        </FadeIn>

        <FadeIn delay={0.08} blur>
          <h1 className="font-display max-w-4xl text-5xl leading-[0.92] tracking-tight text-foreground md:text-7xl lg:text-[5.5rem]">
            {siteConfig.name}
          </h1>
        </FadeIn>

        <FadeIn delay={0.16}>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-muted md:mt-8 md:max-w-xl md:text-lg">
            {siteConfig.tagline}
          </p>
        </FadeIn>

        <FadeIn delay={0.24} className="mt-10 flex flex-wrap gap-4">
          <Button href="#latest-release">Latest Release</Button>
          <Button href="/about" variant="outline">
            Our Story
          </Button>
        </FadeIn>
      </div>
    </section>
  );
}
