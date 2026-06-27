import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Project } from "@/types/database";

interface ProjectHighlightsProps {
  projects: Project[];
}

export function ProjectHighlights({ projects }: ProjectHighlightsProps) {
  if (projects.length === 0) return null;

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold text-navy md:text-4xl">Recent Projects</h2>
            <p className="mt-3 text-gray-muted">See the quality of our work</p>
          </div>
          <Link
            href="/projects"
            className="hidden items-center gap-1 font-medium text-gold hover:underline sm:flex"
          >
            View All <ArrowRight size={18} />
          </Link>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative aspect-[4/3] overflow-hidden rounded-2xl"
            >
              <Image
                src={project.image_url}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                <span className="rounded-full bg-gold/90 px-3 py-1 text-xs font-semibold text-navy">
                  {project.category}
                </span>
                <p className="mt-2 font-semibold text-white">{project.title}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center sm:hidden">
          <Link href="/projects" className="font-medium text-gold hover:underline">
            View All Projects →
          </Link>
        </div>
      </div>
    </section>
  );
}
