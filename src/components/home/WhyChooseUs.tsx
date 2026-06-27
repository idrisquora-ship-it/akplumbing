import Image from "next/image";
import { CheckCircle } from "lucide-react";

const highlights = [
  "Licensed and experienced professionals",
  "Transparent, upfront pricing",
  "Same-day service available",
  "100% satisfaction guarantee",
  "Clean and respectful in your home",
];

export function WhyChooseUs() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom grid items-center gap-12 lg:grid-cols-2">
        <div className="relative h-80 overflow-hidden rounded-2xl shadow-2xl lg:h-[500px]">
          <Image
            src="/images/about/why-choose-us-team.png"
            alt="AK Plumbing Co. professional team at work"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
        </div>

        <div>
          <h2 className="text-3xl font-bold text-navy md:text-4xl">
            Why Choose <span className="text-gold">AK Plumbing Co.</span>?
          </h2>
          <p className="mt-4 text-gray-muted leading-relaxed">
            With over 3 years of hands-on experience, we&apos;ve built a reputation for delivering
            reliable, high-quality plumbing services across Nigeria. Based in Osogbo, Osun State,
            we treat every home and business like our own — with respect, professionalism, and
            attention to detail.
          </p>
          <p className="mt-4 text-gray-muted leading-relaxed">
            From emergency repairs to complete installations, our team arrives on time, works
            efficiently, and leaves your space clean. That&apos;s the AK Plumbing promise.
          </p>

          <ul className="mt-8 space-y-3">
            {highlights.map((item) => (
              <li key={item} className="flex items-center gap-3">
                <CheckCircle className="shrink-0 text-gold" size={22} />
                <span className="text-navy">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
