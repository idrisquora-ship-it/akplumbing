import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";
import { SERVICE_AREAS, OFFICE_ADDRESS } from "@/lib/constants";

export function ServiceAreasPreview() {
  const featured = SERVICE_AREAS.slice(0, 6);

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-navy md:text-4xl">
            Serving <span className="text-gold">All of Nigeria</span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-gray-muted">
            Based in {OFFICE_ADDRESS.full}, we deliver professional plumbing services nationwide
          </p>
        </div>

        <div className="mt-6 flex items-center justify-center gap-2 rounded-xl bg-navy/5 px-6 py-4">
          <MapPin className="shrink-0 text-gold" size={22} />
          <p className="text-center text-sm font-medium text-navy md:text-base">
            <span className="text-gold">Head Office:</span> {OFFICE_ADDRESS.full}
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((area) => (
            <div
              key={area.name}
              className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm transition-all hover:-translate-y-1 hover:border-gold/30 hover:shadow-md"
            >
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-navy/10">
                <MapPin className="text-navy" size={20} />
              </div>
              <h3 className="font-semibold text-navy">{area.name}</h3>
              <p className="mt-1 text-sm text-gray-muted leading-relaxed">{area.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/service-areas"
            className="inline-flex items-center gap-2 rounded-lg bg-navy px-8 py-3 font-semibold text-white transition-all hover:bg-navy-light btn-glow"
          >
            View All Service Areas <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
