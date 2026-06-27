"use client";

import { useState, useCallback, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { StarRating } from "@/components/ui/StarRating";
import type { Testimonial } from "@/types/database";

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
  autoScroll?: boolean;
}

export function TestimonialCarousel({ testimonials, autoScroll = true }: TestimonialCarouselProps) {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % testimonials.length);
  }, [testimonials.length]);

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  }, [testimonials.length]);

  useEffect(() => {
    if (!autoScroll || testimonials.length <= 1) return;
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, [autoScroll, next, testimonials.length]);

  if (testimonials.length === 0) {
    return (
      <p className="text-center text-gray-muted">No reviews yet. Be the first to share your experience!</p>
    );
  }

  const t = testimonials[current];

  return (
    <div className="relative mx-auto max-w-3xl">
      <div className="glass-card-light rounded-2xl p-8 md:p-12">
        <Quote className="mb-4 text-gold" size={40} />
        <p className="text-lg leading-relaxed text-navy md:text-xl">&ldquo;{t.message}&rdquo;</p>
        <div className="mt-6 flex items-center justify-between">
          <div>
            <p className="font-semibold text-navy">{t.name}</p>
            {t.location && <p className="text-sm text-gray-muted">{t.location}</p>}
          </div>
          <StarRating rating={t.rating} />
        </div>
      </div>

      {testimonials.length > 1 && (
        <div className="mt-6 flex items-center justify-center gap-4">
          <button
            onClick={prev}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-navy transition-colors hover:bg-navy hover:text-white"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={20} />
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-2 rounded-full transition-all ${
                  i === current ? "w-8 bg-gold" : "w-2 bg-gray-300"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
          <button
            onClick={next}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-navy transition-colors hover:bg-navy hover:text-white"
            aria-label="Next testimonial"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      )}
    </div>
  );
}
