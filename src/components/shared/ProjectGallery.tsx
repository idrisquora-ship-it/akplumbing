"use client";

import { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import type { Project } from "@/types/database";
import { cn } from "@/lib/utils";

const CATEGORIES = ["All", "Bathroom", "Kitchen", "Pipes", "Emergency Repairs"];

interface ProjectGalleryProps {
  projects: Project[];
}

export function ProjectGallery({ projects }: ProjectGalleryProps) {
  const [filter, setFilter] = useState("All");
  const [lightbox, setLightbox] = useState<Project | null>(null);

  const filtered =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  if (projects.length === 0) {
    return (
      <p className="text-center text-gray-muted">No projects to display yet. Check back soon!</p>
    );
  }

  return (
    <>
      <div className="mb-8 flex flex-wrap justify-center gap-3">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={cn(
              "rounded-full px-5 py-2 text-sm font-medium transition-all",
              filter === cat
                ? "bg-navy text-white"
                : "bg-gray-100 text-navy hover:bg-gray-200"
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((project) => (
          <button
            key={project.id}
            onClick={() => setLightbox(project)}
            className="group relative aspect-[4/3] overflow-hidden rounded-2xl text-left shadow-md"
          >
            <Image
              src={project.image_url}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <span className="rounded-full bg-gold px-3 py-1 text-xs font-semibold text-navy">
                {project.category}
              </span>
              <p className="mt-2 text-lg font-semibold text-white">{project.title}</p>
            </div>
          </button>
        ))}
      </div>

      {lightbox && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute right-4 top-4 text-white"
            onClick={() => setLightbox(null)}
            aria-label="Close lightbox"
          >
            <X size={32} />
          </button>
          <div className="relative max-h-[85vh] max-w-4xl" onClick={(e) => e.stopPropagation()}>
            <Image
              src={lightbox.image_url}
              alt={lightbox.title}
              width={1200}
              height={800}
              className="max-h-[75vh] w-auto rounded-lg object-contain"
            />
            <div className="mt-4 text-center">
              <span className="rounded-full bg-gold px-3 py-1 text-xs font-semibold text-navy">
                {lightbox.category}
              </span>
              <p className="mt-2 text-xl font-semibold text-white">{lightbox.title}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
