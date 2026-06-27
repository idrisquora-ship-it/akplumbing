import { cn } from "@/lib/utils";
import { type ButtonHTMLAttributes, forwardRef } from "react";

type Variant = "primary" | "secondary" | "outline" | "whatsapp" | "call";
type Size = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  href?: string;
}

const variants: Record<Variant, string> = {
  primary: "bg-gold text-navy hover:bg-gold-light font-semibold",
  secondary: "bg-navy text-white hover:bg-navy-light font-semibold",
  outline: "border-2 border-gold text-gold hover:bg-gold hover:text-navy font-semibold",
  whatsapp: "bg-[#25D366] text-white hover:bg-[#1da851] font-semibold",
  call: "bg-navy text-white hover:bg-navy-light font-semibold",
};

const sizes: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", href, children, ...props }, ref) => {
    const classes = cn(
      "inline-flex items-center justify-center gap-2 rounded-lg transition-all duration-300 btn-glow",
      variants[variant],
      sizes[size],
      className
    );

    if (href) {
      return (
        <a href={href} className={classes}>
          {children}
        </a>
      );
    }

    return (
      <button ref={ref} className={classes} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
