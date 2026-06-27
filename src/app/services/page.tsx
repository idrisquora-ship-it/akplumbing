import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Droplets,
  Waves,
  Wrench,
  Flame,
  Bath,
  UtensilsCrossed,
  Siren,
  ArrowRight,
} from "lucide-react";
import { createMetadata } from "@/lib/seo";
import { SERVICES } from "@/lib/constants";
import { CTASection } from "@/components/home/CTASection";

export const metadata: Metadata = createMetadata({
  title: "Plumbing Services | AK Plumbing Co. Nigeria",
  description:
    "Professional plumbing services across Nigeria: leak repair, drain cleaning, pipe installation, water heaters, bathroom & kitchen plumbing, and 24/7 emergency service.",
  path: "/services",
});

const iconMap: Record<string, React.ElementType> = {
  droplets: Droplets,
  waves: Waves,
  wrench: Wrench,
  flame: Flame,
  bath: Bath,
  utensils: UtensilsCrossed,
  siren: Siren,
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-navy pb-16 pt-32 text-center text-white">
        <div className="container-custom px-4">
          <h1 className="text-4xl font-bold md:text-5xl">Our Plumbing Services</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">
            Comprehensive plumbing solutions for homes and businesses across Nigeria
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom space-y-16">
          {SERVICES.map((service, index) => {
            const Icon = iconMap[service.icon] || Wrench;
            const isEven = index % 2 === 0;

            return (
              <article
                key={service.slug}
                id={service.slug}
                className={`grid items-center gap-10 lg:grid-cols-2 ${!isEven ? "lg:[direction:rtl]" : ""}`}
              >
                <div className={`relative h-72 overflow-hidden rounded-2xl shadow-xl lg:h-96 ${!isEven ? "lg:[direction:ltr]" : ""}`}>
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>

                <div className={!isEven ? "lg:[direction:ltr]" : ""}>
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gold/20">
                    <Icon className="text-navy" size={28} />
                  </div>
                  <h2 className="text-2xl font-bold text-navy md:text-3xl">{service.title}</h2>
                  <p className="mt-4 leading-relaxed text-gray-muted">{service.description}</p>
                  <Link
                    href={`/contact?service=${encodeURIComponent(service.title)}`}
                    className="mt-6 inline-flex items-center gap-2 rounded-lg bg-navy px-6 py-3 font-semibold text-white transition-all hover:bg-navy-light btn-glow"
                  >
                    Request Service <ArrowRight size={18} />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <CTASection />
    </>
  );
}
