import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const iconContainerVariants = cva(
  "flex items-center justify-center rounded-lg transition-all duration-300",
  {
    variants: {
      variant: {
        default: "bg-primary/10 text-primary",
        secondary: "bg-secondary/10 text-secondary",
        accent: "bg-accent/10 text-accent",
        success: "bg-success/10 text-success",
        warning: "bg-warning/10 text-warning",
        glass: "glass text-white",
        gradient: "bg-gradient-primary text-white shadow-md",
        glow: "bg-gradient-primary text-white shadow-glow",
      },
      size: {
        sm: "w-8 h-8 [&_svg]:w-4 [&_svg]:h-4",
        default: "w-12 h-12 [&_svg]:w-6 [&_svg]:h-6",
        lg: "w-16 h-16 [&_svg]:w-8 [&_svg]:h-8",
        xl: "w-20 h-20 [&_svg]:w-10 [&_svg]:h-10",
      },
      hover: {
        none: "",
        glow: "hover:shadow-glow hover:scale-110",
        float: "hover:animate-float",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      hover: "none",
    },
  }
)

export interface FeatureIconProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof iconContainerVariants> {
  children: React.ReactNode
}

const FeatureIcon = React.forwardRef<HTMLDivElement, FeatureIconProps>(
  ({ className, variant, size, hover, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(iconContainerVariants({ variant, size, hover, className }))}
      {...props}
    >
      {children}
    </div>
  )
)
FeatureIcon.displayName = "FeatureIcon"

export { FeatureIcon, iconContainerVariants }