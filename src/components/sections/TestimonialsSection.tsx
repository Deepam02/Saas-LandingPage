import React, { useState, useEffect } from "react"
import { SectionContainer } from "@/components/ui/section-container"
import { Card, CardContent } from "@/components/ui/enhanced-card"
import { Badge } from "@/components/ui/enhanced-badge"
import { Button } from "@/components/ui/enhanced-button"
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react"
import { cn } from "@/lib/utils"

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const testimonials = [
    {
      name: "Sarah Chen",
      position: "Marketing Director",
      company: "TechFlow Inc.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      content: "ADmyBRAND AI Suite transformed our marketing strategy completely. We saw a 300% increase in qualified leads within the first quarter. The AI insights are incredibly accurate and actionable.",
      rating: 5,
      results: "+300% Lead Generation"
    },
    {
      name: "Marcus Rodriguez",
      position: "CEO & Founder",
      company: "Growth Labs",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      content: "The automation capabilities are game-changing. What used to take our team weeks now happens automatically. The ROI has been phenomenal, and our campaigns are more effective than ever.",
      rating: 5,
      results: "+450% ROI Improvement"
    },
    {
      name: "Emily Watson",
      position: "VP of Marketing",
      company: "InnovateCorp",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      content: "Finally, a marketing platform that truly understands our needs. The predictive analytics helped us identify our best customers and optimize our budget allocation perfectly.",
      rating: 5,
      results: "+280% Customer Retention"
    },
    {
      name: "David Kim",
      position: "Marketing Manager",
      company: "Scale Dynamics",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      content: "The content generation feature alone has saved us countless hours. The AI creates copy that's on-brand and converts better than what we were writing manually. Incredible tool!",
      rating: 5,
      results: "+175% Content Efficiency"
    },
    {
      name: "Lisa Thompson",
      position: "Head of Digital",
      company: "Pixel Perfect",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
      content: "ADmyBRAND's segmentation is incredibly sophisticated. We can now target micro-audiences with precision we never had before. Our conversion rates have skyrocketed across all campaigns.",
      rating: 5,
      results: "+320% Conversion Rate"
    },
    {
      name: "Alex Foster",
      position: "Digital Strategy Lead",
      company: "NextGen Media",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      content: "The real-time insights and automated optimizations have revolutionized how we run campaigns. We're seeing better performance with less manual work. It's like having an AI marketing expert on our team.",
      rating: 5,
      results: "+250% Campaign Performance"
    }
  ]

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, testimonials.length])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
  }

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    setIsAutoPlaying(false)
  }

  return (
    <SectionContainer id="testimonials" padding="xl" className="relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5"></div>
      
      <div className="relative z-10">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16 animate-fade-in">
          <Badge variant="glass" size="lg">
            💬 Customer Stories
          </Badge>
          <h2 className="heading-2 text-white">
            Loved by{" "}
            <span className="gradient-text">Marketing Teams</span>{" "}
            Worldwide
          </h2>
          <p className="body-large text-foreground-secondary max-w-3xl mx-auto">
            Join thousands of successful marketers who have transformed their 
            campaigns with ADmyBRAND AI Suite.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-6xl mx-auto">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="w-full flex-shrink-0 px-4">
                <Card variant="glass-strong" className="max-w-4xl mx-auto">
                  <CardContent className="p-8 md:p-12">
                    <div className="flex flex-col md:flex-row gap-8 items-start">
                      {/* Avatar & Info */}
                      <div className="flex-shrink-0 text-center md:text-left">
                        <div className="relative inline-block">
                          <img
                            src={testimonial.avatar}
                            alt={testimonial.name}
                            className="w-20 h-20 rounded-full border-2 border-primary/30"
                          />
                          <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-primary rounded-full flex items-center justify-center">
                            <Quote className="w-3 h-3 text-white" />
                          </div>
                        </div>
                        <div className="mt-4 space-y-1">
                          <h4 className="font-semibold text-white">{testimonial.name}</h4>
                          <p className="text-sm text-foreground-muted">{testimonial.position}</p>
                          <p className="text-sm text-primary font-medium">{testimonial.company}</p>
                        </div>
                        <Badge variant="success" size="sm" className="mt-3">
                          {testimonial.results}
                        </Badge>
                      </div>

                      {/* Content */}
                      <div className="flex-1 space-y-4">
                        {/* Stars */}
                        <div className="flex space-x-1">
                          {Array.from({ length: testimonial.rating }).map((_, i) => (
                            <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                          ))}
                        </div>

                        {/* Quote */}
                        <blockquote className="text-lg md:text-xl text-foreground-secondary leading-relaxed italic">
                          "{testimonial.content}"
                        </blockquote>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          {/* Navigation */}
          <Button
            variant="secondary"
            size="icon"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10"
            onClick={goToPrevious}
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>
          <Button
            variant="secondary"
            size="icon"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10"
            onClick={goToNext}
          >
            <ChevronRight className="w-5 h-5" />
          </Button>

          {/* Indicators */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={cn(
                  "w-3 h-3 rounded-full transition-all duration-300",
                  index === currentIndex
                    ? "bg-gradient-primary scale-125"
                    : "bg-white/20 hover:bg-white/40"
                )}
              />
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-white/10">
          <div className="text-center space-y-2 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <div className="text-3xl font-bold gradient-text">4.9/5</div>
            <p className="text-sm text-foreground-muted">Average Rating</p>
          </div>
          <div className="text-center space-y-2 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="text-3xl font-bold gradient-text">50K+</div>
            <p className="text-sm text-foreground-muted">Happy Customers</p>
          </div>
          <div className="text-center space-y-2 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="text-3xl font-bold gradient-text">98%</div>
            <p className="text-sm text-foreground-muted">Customer Satisfaction</p>
          </div>
          <div className="text-center space-y-2 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="text-3xl font-bold gradient-text">24/7</div>
            <p className="text-sm text-foreground-muted">Expert Support</p>
          </div>
        </div>
      </div>
    </SectionContainer>
  )
}

export default TestimonialsSection