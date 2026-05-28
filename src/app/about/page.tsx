import type { Metadata } from "next";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeader } from "@/components/ui";
import { members, timeline, manifesto } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Cerita IMPURITY — band deathcore dari Indonesia yang berkembang sebagai cultural dan creative platform.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
      <FadeIn>
        <SectionHeader
          label="About"
          title="Identity & Story"
        />
      </FadeIn>

      <FadeIn delay={0.1}>
        <div className="mb-20 grid gap-10 lg:grid-cols-2">
          <section className="prose-editorial">
            <p className="text-base leading-relaxed text-muted md:text-lg">
              <span className="font-bold text-foreground">IMPURITY</span> merupakan band deathcore asal <span className="font-bold text-foreground underline">Bandung</span> yang terbentuk pada awal 2023 dari pertemuan beberapa orang dalam organisasi kampus berbasis seni tradisional.
            </p>

            <p className="mt-5 text-base leading-relaxed text-muted md:text-lg">
              Berangkat dari selera dan keresahan yang sama, kami membangun ruang eksplorasi yang memadukan musik ekstrem dengan elemen tradisional sebagai bentuk ekspresi yang jujur dan kontras.
            </p>

            <p className="mt-5 text-base leading-relaxed text-muted md:text-lg">
              Nama <span className="font-bold text-foreground italic">IMPURITY</span> berarti ketidakmurnian (sesuatu yang tercemar, rusak, dan gelap). Filosofi tersebut menjadi fondasi musikalitas, identitas visual, serta arsip kreatif yang kami bangun di luar musik itu sendiri.
            </p>

            <p className="mt-5 text-base leading-relaxed text-muted md:text-lg">
              <span className="font-bold text-foreground">Dimas</span> sebagai komposer utama membentuk arah musikal deathcore <span className="font-bold text-foreground">IMPURITY</span>, sementara <span className="font-bold text-foreground">River</span> menangani identitas visual, logo, dan penulisan lirik.
            </p>
          </section>

          <div className="relative aspect-4/3 overflow-hidden border border-border bg-surface">
            <img
              src="/images/about/band-photo.jpg"
              alt="IMPURITY Band Photo"
              className="h-full w-full object-cover grayscale transition-all duration-700 hover:grayscale-0"
            />
          </div>
        </div>
      </FadeIn>

      <section className="mb-20 border-t border-border pt-16">
        <FadeIn>
          <h2 className="font-display mb-10 text-3xl text-foreground md:text-4xl">
            Manifesto
          </h2>
        </FadeIn>
        <div className="grid gap-6 md:grid-cols-2">
          {manifesto.map((line, i) => (
            <FadeIn key={i} delay={i * 0.08}>
              <blockquote className="border-l border-foreground pl-6 text-base text-foreground/80 md:text-lg">
                {line}
              </blockquote>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="mb-20 border-t border-border pt-16">
        <FadeIn>
          <h2 className="font-display mb-10 text-3xl text-foreground md:text-4xl">
            Timeline
          </h2>
        </FadeIn>
        <div className="space-y-0">
          {timeline.map((event, i) => (
            <FadeIn key={`${event.year}-${event.title}`} delay={i * 0.06}>
              <div className="grid gap-4 border-b border-border py-8 md:grid-cols-[120px_1fr] md:gap-8">
                <div className="font-mono text-sm tracking-[0.15em] text-muted">
                  <p>{event.year}</p>
                  {event.month && (
                    <p className="mt-1 text-[10px] opacity-60 uppercase">
                      {event.month}
                    </p>
                  )}
                </div>
                <div>
                  <h3 className="font-display mb-2 text-xl text-foreground">
                    {event.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted md:text-base">
                    {event.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="pt-16">
        <FadeIn>
          <h2 className="font-display mb-10 text-3xl text-foreground md:text-4xl">
            Lineup
          </h2>
        </FadeIn>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {members.map((member, i) => (
            <FadeIn key={member.name} delay={i * 0.06}>
              <div className="group overflow-hidden border border-border bg-surface transition-colors hover:border-foreground/25">
                <div className="relative aspect-4/5 overflow-hidden">
                  {member.image ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="h-full w-full object-cover grayscale transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0 brightness-100 group-hover:brightness-110"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-muted/10">
                      <span className="font-mono text-[9px] text-muted uppercase">No Photo</span>
                    </div>
                  )}
                  
                  <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-background via-background/20 to-transparent group-hover:brightness-150 group-hover:via-transparent transition-all duration-500"></div>

                  <div className="absolute w-full bottom-0 p-4 text-center">
                    <p className="font-display text-xl group-hover:font-bold group-hover:tracking-widest transition-all duration-300 text-foreground">
                      {member.name}
                    </p>
                    <p className="font-mono text-[9px] tracking-[0.15em] group-hover:text-foreground/80 text-muted uppercase">
                      {member.role}
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>
    </div>
  );
}
