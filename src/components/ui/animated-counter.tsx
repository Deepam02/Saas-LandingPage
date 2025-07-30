import * as React from "react"
import { cn } from "@/lib/utils"

interface AnimatedCounterProps extends React.HTMLAttributes<HTMLSpanElement> {
  value: number
  duration?: number
  prefix?: string
  suffix?: string
  decimals?: number
}

const AnimatedCounter = React.forwardRef<HTMLSpanElement, AnimatedCounterProps>(
  ({ className, value, duration = 2000, prefix = "", suffix = "", decimals = 0, ...props }, ref) => {
    const [count, setCount] = React.useState(0)
    const [isVisible, setIsVisible] = React.useState(false)
    const elementRef = React.useRef<HTMLSpanElement>(null)

    React.useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        },
        { threshold: 0.1 }
      )

      if (elementRef.current) {
        observer.observe(elementRef.current)
      }

      return () => observer.disconnect()
    }, [])

    React.useEffect(() => {
      if (!isVisible) return

      let startTime: number
      let animationFrame: number

      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime
        const progress = Math.min((currentTime - startTime) / duration, 1)
        
        // Easing function for smooth animation
        const easeOut = 1 - Math.pow(1 - progress, 3)
        setCount(value * easeOut)

        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate)
        }
      }

      animationFrame = requestAnimationFrame(animate)

      return () => {
        if (animationFrame) {
          cancelAnimationFrame(animationFrame)
        }
      }
    }, [value, duration, isVisible])

    return (
      <span
        ref={(node) => {
          elementRef.current = node
          if (typeof ref === 'function') {
            ref(node)
          } else if (ref) {
            ref.current = node
          }
        }}
        className={cn("font-bold", className)}
        {...props}
      >
        {prefix}{count.toFixed(decimals)}{suffix}
      </span>
    )
  }
)
AnimatedCounter.displayName = "AnimatedCounter"

export { AnimatedCounter }