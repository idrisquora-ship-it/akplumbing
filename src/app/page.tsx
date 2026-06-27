import { Hero } from "@/components/home/Hero";
import { TrustBar } from "@/components/home/TrustBar";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { HowItWorks } from "@/components/home/HowItWorks";
import { ProjectHighlights } from "@/components/home/ProjectHighlights";
import { ServiceAreasPreview } from "@/components/home/ServiceAreasPreview";
import { TestimonialCarousel } from "@/components/shared/TestimonialCarousel";
import { CTASection } from "@/components/home/CTASection";
import { ContactForm } from "@/components/forms/ContactForm";
import { getTestimonials, getProjects } from "@/lib/data/queries";

export default async function HomePage() {
  const [testimonials, projects] = await Promise.all([
    getTestimonials(6),
    getProjects(6),
  ]);

  return (
    <>
      <Hero />
      <TrustBar />
      <ServicesPreview />
      <WhyChooseUs />
      <HowItWorks />
      <ProjectHighlights projects={projects} />
      <ServiceAreasPreview />
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-navy md:text-4xl">What Our Clients Say</h2>
            <p className="mt-3 text-gray-muted">Trusted by homeowners and businesses across Nigeria</p>
          </div>
          <div className="mt-12">
            <TestimonialCarousel testimonials={testimonials} />
          </div>
        </div>
      </section>
      <ContactForm />
      <CTASection />
    </>
  );
}
