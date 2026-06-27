import { Quote } from "lucide-react";
import { StarRating } from "@/components/ui/StarRating";
import type { Testimonial } from "@/types/database";

interface TestimonialGridProps {
  testimonials: Testimonial[];
}

export function TestimonialGrid({ testimonials }: TestimonialGridProps) {
  if (testimonials.length === 0) {
    return (
      <p className="text-center text-gray-muted">No reviews yet. Be the first to share your experience!</p>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {testimonials.map((t) => (
        <div
          key={t.id}
          className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
        >
          <Quote className="mb-3 text-gold/60" size={28} />
          <p className="text-gray-muted leading-relaxed">&ldquo;{t.message}&rdquo;</p>
          <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-4">
            <div>
              <p className="font-semibold text-navy">{t.name}</p>
              {t.location && <p className="text-sm text-gray-muted">{t.location}</p>}
            </div>
            <StarRating rating={t.rating} size={16} />
          </div>
        </div>
      ))}
    </div>
  );
}
