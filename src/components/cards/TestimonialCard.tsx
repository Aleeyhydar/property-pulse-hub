import { Star, Quote } from "lucide-react";
import type { Testimonial } from "@/data/testimonials";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
  return (
    <div className="p-6 rounded-xl bg-card border border-border hover:border-primary/20 transition-all duration-300">
      {/* Quote Icon */}
      <Quote className="h-8 w-8 text-primary/30 mb-4" />
      
      {/* Rating */}
      <div className="flex gap-1 mb-4">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-brand-gold text-brand-gold" />
        ))}
      </div>

      {/* Content */}
      <p className="text-foreground leading-relaxed mb-6">
        "{testimonial.content}"
      </p>

      {/* Author */}
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
          <span className="text-primary font-semibold">
            {testimonial.name.charAt(0)}
          </span>
        </div>
        <div>
          <p className="font-medium text-sm">{testimonial.name}</p>
          <p className="text-muted-foreground text-xs">
            {testimonial.role}
            {testimonial.company && `, ${testimonial.company}`}
          </p>
        </div>
      </div>
    </div>
  );
};
