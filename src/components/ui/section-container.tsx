import * as React from "react"
import { cn } from "@/lib/utils"
import { cva, type VariantProps } from "class-variance-authority"

const sectionVariants = cva(
  "w-full",
  {
    variants: {
      padding: {
        none: "py-0",
        sm: "py-8 md:py-12",
        default: "py-12 md:py-16 lg:py-20",
        lg: "py-16 md:py-20 lg:py-24",
        xl: "py-20 md:py-24 lg:py-32",
      },
      width: {
        full: "w-full",
        container: "container mx-auto px-4",
        narrow: "max-w-4xl mx-auto px-4",
        wide: "max-w-7xl mx-auto px-4",
      },
      background: {
        none: "",
        subtle: "bg-background-secondary/50",
        glass: "glass",
        gradient: "bg-gradient-hero",
      },
    },
    defaultVariants: {
      padding: "default",
      width: "container",
      background: "none",
    },
  }
)

export interface SectionContainerProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof sectionVariants> {
  as?: "section" | "div" | "main" | "header" | "footer"
}

const SectionContainer = React.forwardRef<HTMLDivElement, SectionContainerProps>(
  ({ className, padding, width, background, as: Comp = "section", ...props }, ref) => (
    <Comp
      ref={ref as any}
      className={cn(sectionVariants({ padding, width, background, className }))}
      {...props}
    />
  )
)
SectionContainer.displayName = "SectionContainer"

export { SectionContainer, sectionVariants }