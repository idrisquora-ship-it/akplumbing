import type { Metadata } from "next";
import { MapPin, Phone } from "lucide-react";
import { createMetadata } from "@/lib/seo";
import { SERVICE_AREAS, PHONE_LINK, OFFICE_ADDRESS } from "@/lib/constants";
import { CTASection } from "@/components/home/CTASection";

export const metadata: Metadata = createMetadata({
  title: "Service Areas | Plumber Near Me in Nigeria | AK Plumbing Co.",
  description:
    "AK Plumbing Co. serves Osogbo, Ibadan, Abuja, Lagos, and nationwide. Head office at Iyana-Camp, Ota'efun, Osogbo. Find a plumber near you — call 08154037226.",
  path: "/service-areas",
});

export default function ServiceAreasPage() {
  return (
    <>
      <section className="bg-navy pb-16 pt-32 text-center text-white">
        <div className="container-custom px-4">
          <h1 className="text-3xl font-bold md:text-5xl">Service Areas</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">
            Professional plumbing services across Nigeria — plumber near me, wherever you are
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="mb-8 flex items-center justify-center gap-2 rounded-xl bg-navy/5 px-6 py-4">
            <MapPin className="shrink-0 text-gold" size={22} />
            <p className="text-center text-sm font-medium text-navy md:text-base">
              <span className="text-gold">Head Office:</span> {OFFICE_ADDRESS.full}
            </p>
          </div>

          <p className="mx-auto mb-12 max-w-3xl text-center text-gray-muted leading-relaxed">
            AK Plumbing Co. provides fast, reliable plumbing services throughout Nigeria.
            Based in Osogbo, Osun State, we serve clients nationwide — whether you need
            emergency repairs, routine maintenance, or a complete installation.
          </p>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICE_AREAS.map((area) => (
              <article
                key={area.name}
                className="group rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-gold/30 hover:shadow-lg"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-navy/10 transition-colors group-hover:bg-gold/20">
                  <MapPin className="text-navy group-hover:text-gold" size={24} />
                </div>
                <h2 className="text-xl font-semibold text-navy">
                  Plumber in {area.name}
                </h2>
                <p className="mt-2 text-sm text-gray-muted leading-relaxed">{area.description}</p>
                <a
                  href={PHONE_LINK}
                  className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-gold hover:underline"
                >
                  <Phone size={14} /> Call for service in {area.name}
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
