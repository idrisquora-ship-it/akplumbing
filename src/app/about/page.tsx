import type { Metadata } from "next";
import Image from "next/image";
import { CheckCircle, Award, Target, Eye } from "lucide-react";
import { createMetadata } from "@/lib/seo";
import { OWNER } from "@/lib/constants";
import { CTASection } from "@/components/home/CTASection";

export const metadata: Metadata = createMetadata({
  title: "About Us | AK Plumbing Co.",
  description:
    "Learn about AK Plumbing Co. and founder Fadilu Idris Akorede. 3+ years of professional plumbing experience serving Nigeria from Osogbo, Osun State.",
  path: "/about",
});

const skills = [
  "Leak Detection & Repair",
  "Pipe Installation & Replacement",
  "Drain Cleaning & Unclogging",
  "Bathroom & Kitchen Plumbing",
  "Water Heater Installation",
  "Emergency 24/7 Response",
];

const trustHighlights = [
  "3+ years hands-on experience",
  "Residential & commercial projects",
  "Transparent pricing, no hidden fees",
  "Fully equipped for any job",
  "Satisfaction guaranteed",
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-navy pb-16 pt-32 text-center text-white">
        <div className="container-custom px-4">
          <h1 className="text-4xl font-bold md:text-5xl">About AK Plumbing Co.</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">
            Built on trust. Powered by quality.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold text-navy">Our Mission</h2>
            <p className="mt-4 leading-relaxed text-gray-muted">
              To provide fast, affordable, and professional plumbing services that homeowners and
              businesses can rely on. We believe every client deserves honest work, fair pricing,
              and a plumber who shows up when they say they will.
            </p>

            <h2 className="mt-10 text-3xl font-bold text-navy">Our Vision</h2>
            <p className="mt-4 leading-relaxed text-gray-muted">
              To become Nigeria&apos;s most trusted name in plumbing — known for quality workmanship,
              exceptional customer service, and a commitment to solving problems the right way,
              every time.
            </p>

            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              <div className="rounded-xl border border-gray-100 p-6">
                <Target className="text-gold" size={32} />
                <h3 className="mt-3 font-semibold text-navy">Mission-Driven</h3>
                <p className="mt-1 text-sm text-gray-muted">Quality service at fair prices</p>
              </div>
              <div className="rounded-xl border border-gray-100 p-6">
                <Eye className="text-gold" size={32} />
                <h3 className="mt-3 font-semibold text-navy">Vision-Led</h3>
                <p className="mt-1 text-sm text-gray-muted">Nigeria&apos;s most trusted plumber</p>
              </div>
            </div>
          </div>

          <div className="relative h-96 overflow-hidden rounded-2xl shadow-2xl lg:h-auto">
            <Image
              src="/images/about/why-choose-us-team.png"
              alt="AK Plumbing Co. professional team"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-navy md:text-4xl">Meet the Owner</h2>
          </div>

          <div className="mt-12 grid items-center gap-10 lg:grid-cols-2">
            <div className="relative mx-auto h-96 w-full max-w-md overflow-hidden rounded-2xl shadow-xl">
              <Image
                src="/images/about/owner-portrait.png"
                alt={OWNER.name}
                fill
                className="object-cover"
                sizes="400px"
              />
            </div>

            <div>
              <div className="flex items-center gap-3">
                <Award className="text-gold" size={28} />
                <div>
                  <h3 className="text-2xl font-bold text-navy">{OWNER.name}</h3>
                  <p className="text-gold font-medium">{OWNER.title} · {OWNER.experience} experience</p>
                </div>
              </div>

              <p className="mt-6 leading-relaxed text-gray-muted">{OWNER.description}</p>

              <h4 className="mt-8 text-lg font-semibold text-navy">Skills & Expertise</h4>
              <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                {skills.map((skill) => (
                  <li key={skill} className="flex items-center gap-2 text-sm text-navy">
                    <CheckCircle className="shrink-0 text-gold" size={18} />
                    {skill}
                  </li>
                ))}
              </ul>

              <h4 className="mt-8 text-lg font-semibold text-navy">Why Clients Trust Us</h4>
              <ul className="mt-4 space-y-2">
                {trustHighlights.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-gray-muted">
                    <CheckCircle className="shrink-0 text-gold" size={18} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
