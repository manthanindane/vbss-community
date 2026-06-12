import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-heading font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-gold-500 focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-maroon-200 bg-maroon-100 text-maroon-800",
        secondary:
          "border-gold-200 bg-gold-100 text-gold-800",
        religious:
          "border-maroon-200 bg-maroon-50 text-maroon-700",
        social:
          "border-gold-200 bg-gold-50 text-gold-700",
        cultural:
          "border-terracotta-200 bg-terracotta-50 text-terracotta-700",
        upcoming:
          "border-sage-200 bg-sage-50 text-sage-700",
        outline: "border text-charcoal-600",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
