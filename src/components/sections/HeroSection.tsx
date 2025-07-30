import React from "react"
import { Button } from "@/components/ui/enhanced-button"
import { Badge } from "@/components/ui/enhanced-badge"
import { SectionContainer } from "@/components/ui/section-container"
import { AnimatedCounter } from "@/components/ui/animated-counter"
import { ArrowRight, Play, Sparkles, Zap, TrendingUp } from "lucide-react"
import heroImage from "@/assets/hero-dashboard.jpg"

const HeroSection = () => {
  const stats = [
    { label: "Active Users", value: 50000, suffix: "+" },
    { label: "ROI Increase", value: 300, suffix: "%" },
    { label: "Time Saved", value: 75, suffix: "%" },
    { label: "Campaigns Created", value: 1000000, suffix: "+" },
  ]

  return (
    <SectionContainer padding="xl" className="relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-hero opacity-10 animate-gradient-shift"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float-delayed"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-primary opacity-5 rounded-full blur-3xl animate-spin-slow"></div>
      
      <div className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in-left">
            {/* Badge */}
            <div className="flex items-center space-x-2 animate-slide-down" style={{ animationDelay: '0.2s' }}>
              <Badge variant="glass" size="lg" className="inline-flex items-center space-x-2 animate-glow-pulse">
                <Sparkles className="w-4 h-4 animate-bounce-subtle" />
                <span>Powered by Advanced AI</span>
              </Badge>
            </div>

            {/* Headline */}
            <div className="space-y-4 animate-scale-in" style={{ animationDelay: '0.4s' }}>
              <h1 className="heading-1 text-white">
                Transform Your Marketing with{" "}
                <span className="gradient-text bg-gradient-to-r from-primary via-secondary to-accent bg-[length:200%_auto] animate-text-shimmer">AI-Powered</span> Intelligence
              </h1>
              <p className="body-large text-foreground-secondary max-w-lg animate-fade-in" style={{ animationDelay: '0.6s' }}>
                ADmyBRAND AI Suite revolutionizes your marketing strategy with intelligent automation, 
                predictive analytics, and personalized campaigns that drive real results.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{ animationDelay: '0.8s' }}>
              <Button variant="hero" size="xl" className="group hover:animate-glow-pulse">
                Start Free Trial
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 group-hover:scale-110 transition-all duration-300" />
              </Button>
              <Button variant="secondary" size="xl" className="group hover:scale-105 transition-transform duration-300">
                <Play className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                Watch Demo
              </Button>
            </div>

            {/* Social Proof */}
            <div className="flex items-center space-x-6 text-sm text-foreground-muted animate-fade-in" style={{ animationDelay: '1s' }}>
              <div className="flex items-center space-x-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-gradient-primary border-2 border-background animate-scale-in" style={{ animationDelay: `${1.2 + i * 0.1}s` }}></div>
                  ))}
                </div>
                <span>Join 50,000+ marketers</span>
              </div>
              <Badge variant="outline" size="sm" className="animate-glow-pulse">
                ⭐ 4.9/5 Rating
              </Badge>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-white/10">
              {stats.map((stat, index) => (
                <div key={index} className="text-center space-y-1 group animate-slide-up" style={{ animationDelay: `${1.4 + index * 0.1}s` }}>
                  <div className="heading-3 gradient-text group-hover:animate-glow-pulse transition-all duration-300">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="text-sm text-foreground-muted group-hover:text-foreground-secondary transition-colors duration-300">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-fade-in-right" style={{ animationDelay: '0.3s' }}>
            <div className="relative glass-strong p-4 rounded-2xl group hover:scale-105 transition-all duration-500">
              <img
                src={heroImage}
                alt="ADmyBRAND AI Dashboard"
                className="w-full h-auto rounded-xl shadow-large group-hover:shadow-glow transition-all duration-500"
              />
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -left-4 glass p-3 rounded-lg animate-float hover:animate-bounce-subtle cursor-pointer group">
                <Zap className="w-6 h-6 text-primary group-hover:animate-glow-pulse" />
              </div>
              <div className="absolute -bottom-4 -right-4 glass p-3 rounded-lg animate-float-delayed hover:animate-bounce-subtle cursor-pointer group">
                <TrendingUp className="w-6 h-6 text-secondary group-hover:animate-glow-pulse" />
              </div>
              
              {/* Additional floating elements */}
              <div className="absolute top-1/4 -right-6 glass p-2 rounded-full animate-float opacity-80" style={{ animationDelay: '2s' }}>
                <div className="w-3 h-3 bg-gradient-primary rounded-full animate-glow-pulse"></div>
              </div>
              <div className="absolute bottom-1/3 -left-6 glass p-2 rounded-full animate-float-delayed opacity-80" style={{ animationDelay: '3s' }}>
                <div className="w-3 h-3 bg-gradient-secondary rounded-full animate-glow-pulse"></div>
              </div>
              
              {/* Enhanced Glow Effect */}
              <div className="absolute inset-0 bg-gradient-primary opacity-20 rounded-2xl blur-xl -z-10 group-hover:opacity-30 transition-opacity duration-500"></div>
              <div className="absolute inset-0 bg-gradient-secondary opacity-10 rounded-2xl blur-2xl -z-20 animate-glow"></div>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  )
}

export default HeroSection