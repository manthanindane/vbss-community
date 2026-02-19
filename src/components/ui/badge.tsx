import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const badgeVariants = cva(
  'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none',
  {
    variants: {
      variant: {
        default: 'border-transparent bg-primary-600 text-white',
        secondary: 'border-transparent bg-stone-100 text-stone-700',
        outline: 'text-charcoal border-stone-300',
        accent: 'border-transparent bg-accent-600 text-white',
        religious: 'border-primary-200 bg-primary-100 text-primary-700',
        social: 'border-blue-200 bg-blue-100 text-blue-700',
        cultural: 'border-accent-200 bg-accent-100 text-accent-800',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />
}

export { Badge, badgeVariants }
