import type { Metadata } from "next";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeader } from "@/components/ui";
import { ContactPanel } from "@/components/page/contact/ContactPanel";

export const metadata: Metadata = {
  title: "Contact / EPK",
  description:
    "Hubungi IMPURITY — email, WhatsApp, media contact, dan press materials.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
      <FadeIn>
        <SectionHeader
          label="Contact / EPK"
          title="Get in Touch"
          description="Inquiry, media contact, dan press materials. Hubungi kami langsung — respons lebih cepat via email atau WhatsApp."
        />
      </FadeIn>

      <ContactPanel />
    </div>
  );
}
