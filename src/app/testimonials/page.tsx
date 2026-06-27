import type { Metadata } from "next";
import { TestimonialCarousel } from "@/components/shared/TestimonialCarousel";
import { TestimonialGrid } from "@/components/shared/TestimonialGrid";
import { createMetadata } from "@/lib/seo";
import { getTestimonials } from "@/lib/data/queries";

export const metadata: Metadata = createMetadata({
  title: "Testimonials | AK Plumbing Co.",
  description: "Read reviews from satisfied AK Plumbing Co. customers across Nigeria. 5-star rated plumbing services.",
  path: "/testimonials",
});

export default async function TestimonialsPage() {
  const testimonials = await getTestimonials();

  return (
    <>
      <section className="bg-navy pb-16 pt-32 text-center text-white">
        <div className="container-custom px-4">
          <h1 className="text-4xl font-bold md:text-5xl">Client Testimonials</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">
            Hear from satisfied customers across Nigeria
          </p>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <TestimonialCarousel testimonials={testimonials} />
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <h2 className="mb-10 text-center text-3xl font-bold text-navy">All Reviews</h2>
          <TestimonialGrid testimonials={testimonials} />
        </div>
      </section>
    </>
  );
}
