import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";
import { ProjectGallery } from "@/components/shared/ProjectGallery";
import { CTASection } from "@/components/home/CTASection";
import { getProjects } from "@/lib/data/queries";

export const metadata: Metadata = createMetadata({
  title: "Projects & Gallery | AK Plumbing Co.",
  description:
    "Browse our plumbing project gallery. Bathroom renovations, kitchen plumbing, pipe installations, and emergency repairs across Nigeria.",
  path: "/projects",
});

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <>
      <section className="bg-navy pb-16 pt-32 text-center text-white">
        <div className="container-custom px-4">
          <h1 className="text-4xl font-bold md:text-5xl">Our Projects</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">
            Quality workmanship you can see — before and after results from real jobs
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <ProjectGallery projects={projects} />
        </div>
      </section>

      <CTASection />
    </>
  );
}
