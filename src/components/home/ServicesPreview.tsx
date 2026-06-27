import Link from "next/link";
import {
  Droplets,
  Waves,
  Wrench,
  Bath,
  UtensilsCrossed,
  Siren,
  ArrowRight,
} from "lucide-react";
import { HOME_SERVICES_PREVIEW } from "@/lib/constants";

const iconMap: Record<string, React.ElementType> = {
  droplets: Droplets,
  waves: Waves,
  wrench: Wrench,
  bath: Bath,
  utensils: UtensilsCrossed,
  siren: Siren,
};

export function ServicesPreview() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-navy md:text-4xl">Our Services</h2>
          <p className="mt-3 text-gray-muted">
            Professional plumbing solutions for every need
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {HOME_SERVICES_PREVIEW.map((service) => {
            const Icon = iconMap[service.icon] || Wrench;
            return (
              <Link
                key={service.title}
                href={service.href}
                className="group rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-gold/30 hover:shadow-xl"
              >
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-navy/10 transition-colors group-hover:bg-gold/20">
                  <Icon className="text-navy transition-colors group-hover:text-gold" size={28} />
                </div>
                <h3 className="text-xl font-semibold text-navy">{service.title}</h3>
                <p className="mt-2 text-sm text-gray-muted">{service.description}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-gold opacity-0 transition-opacity group-hover:opacity-100">
                  Learn more <ArrowRight size={16} />
                </span>
              </Link>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 rounded-lg bg-navy px-8 py-3 font-semibold text-white transition-all hover:bg-navy-light btn-glow"
          >
            View All Services <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
