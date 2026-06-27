import { Phone, MessageCircle } from "lucide-react";
import { PHONE_LINK, WHATSAPP_LINK } from "@/lib/constants";
import { Button } from "@/components/ui/Button";

export function CTASection() {
  return (
    <section className="relative overflow-hidden bg-navy py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(212,175,55,0.15),transparent_60%)]" />
      <div className="container-custom relative z-10 px-4 text-center">
        <h2 className="text-3xl font-bold text-white md:text-5xl">
          Need a Plumber Now?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-white/80">
          We&apos;re ready to help. Call or message us for fast, professional plumbing service.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button href={PHONE_LINK} variant="primary" size="lg">
            <Phone size={20} />
            Call {process.env.NEXT_PUBLIC_PHONE || "08154037226"}
          </Button>
          <Button href={WHATSAPP_LINK} variant="whatsapp" size="lg">
            <MessageCircle size={20} />
            WhatsApp Us
          </Button>
        </div>
      </div>
    </section>
  );
}
