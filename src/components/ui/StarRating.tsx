import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface StarRatingProps {
  rating: number;
  max?: number;
  size?: number;
  className?: string;
}

export function StarRating({ rating, max = 5, size = 18, className }: StarRatingProps) {
  return (
    <div className={cn("flex gap-0.5", className)} aria-label={`${rating} out of ${max} stars`}>
      {Array.from({ length: max }, (_, i) => (
        <Star
          key={i}
          size={size}
          className={cn(
            i < rating ? "fill-gold text-gold" : "fill-gray-200 text-gray-200"
          )}
        />
      ))}
    </div>
  );
}
