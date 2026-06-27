import Link from "next/link";
import { Phone, MessageCircle, ClipboardCheck, Wrench, ThumbsUp } from "lucide-react";
import { HOW_IT_WORKS } from "@/lib/constants";

const stepIcons = [Phone, ClipboardCheck, Wrench, ThumbsUp];

export function HowItWorks() {
  return (
    <section className="section-padding bg-navy text-white">
      <div className="container-custom">
        <div className="text-center">
          <h2 className="text-3xl font-bold md:text-4xl">
            How It <span className="text-gold">Works</span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-white/80">
            Getting professional plumbing help is simple — from first contact to job completion
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {HOW_IT_WORKS.map((item, index) => {
            const Icon = stepIcons[index] || Wrench;
            return (
              <div key={item.step} className="relative text-center">
                {index < HOW_IT_WORKS.length - 1 && (
                  <div className="absolute left-[calc(50%+2rem)] top-8 hidden h-0.5 w-[calc(100%-4rem)] bg-gold/30 lg:block" />
                )}
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gold text-navy">
                  <Icon size={28} />
                </div>
                <span className="text-sm font-bold text-gold">Step {item.step}</span>
                <h3 className="mt-2 text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-white/70 leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="tel:+2348154037226"
            className="inline-flex items-center gap-2 rounded-lg bg-gold px-6 py-3 font-semibold text-navy transition-all hover:bg-gold-light btn-glow"
          >
            <Phone size={18} />
            Call to Get Started
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-lg border-2 border-gold px-6 py-3 font-semibold text-gold transition-all hover:bg-gold hover:text-navy"
          >
            <MessageCircle size={18} />
            Request a Quote
          </Link>
        </div>
      </div>
    </section>
  );
}
