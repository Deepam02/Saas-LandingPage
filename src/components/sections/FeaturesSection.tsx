import React from "react"
import { SectionContainer } from "@/components/ui/section-container"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/enhanced-card"
import { FeatureIcon } from "@/components/ui/feature-icon"
import { Badge } from "@/components/ui/enhanced-badge"
import { 
  Brain, 
  Target, 
  BarChart3, 
  Zap, 
  Users, 
  MessageSquare,
  Palette,
  Shield
} from "lucide-react"

const FeaturesSection = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Analytics",
      description: "Advanced machine learning algorithms analyze your marketing data to uncover hidden insights and predict future trends.",
      badge: "Core",
      color: "primary"
    },
    {
      icon: Target,
      title: "Precision Targeting",
      description: "Identify and reach your ideal customers with laser-focused targeting based on behavior, demographics, and preferences.",
      badge: "Popular",
      color: "secondary"
    },
    {
      icon: BarChart3,
      title: "Real-time Reporting",
      description: "Get instant access to comprehensive dashboards with real-time metrics and actionable insights.",
      badge: "Essential",
      color: "accent"
    },
    {
      icon: Zap,
      title: "Campaign Automation",
      description: "Automate your entire marketing funnel with intelligent workflows that adapt and optimize themselves.",
      badge: "Pro",
      color: "primary"
    },
    {
      icon: Users,
      title: "Audience Segmentation",
      description: "Create dynamic audience segments that update automatically based on user behavior and engagement.",
      badge: "Core",
      color: "secondary"
    },
    {
      icon: MessageSquare,
      title: "Content Generation",
      description: "Generate compelling marketing copy, social media posts, and ad creatives using advanced AI models.",
      badge: "New",
      color: "accent"
    },
    {
      icon: Palette,
      title: "Brand Consistency",
      description: "Maintain perfect brand consistency across all channels with AI-powered brand guidelines enforcement.",
      badge: "Premium",
      color: "primary"
    },
    {
      icon: Shield,
      title: "Privacy & Security",
      description: "Enterprise-grade security with GDPR compliance and advanced data protection measures built-in.",
      badge: "Enterprise",
      color: "secondary"
    }
  ]

  return (
    <SectionContainer id="features" padding="xl" className="relative">
      {/* Background Effects */}
      <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-float-delayed"></div>
      <div className="absolute top-10 right-10 w-32 h-32 bg-accent/10 rounded-full blur-2xl animate-glow"></div>
      
      <div className="relative z-10">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16 animate-fade-in">
          <Badge variant="glass" size="lg">
            🚀 Powerful Features
          </Badge>
          <h2 className="heading-2 text-white">
            Everything You Need to{" "}
            <span className="gradient-text">Scale Your Marketing</span>
          </h2>
          <p className="body-large text-foreground-secondary max-w-3xl mx-auto">
            Our comprehensive AI suite provides all the tools you need to create, manage, 
            and optimize your marketing campaigns with unprecedented efficiency.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              variant="feature"
              hover="lift"
              className="group animate-slide-up hover:animate-glow-pulse cursor-pointer relative overflow-hidden"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Hover background effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <CardHeader className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <FeatureIcon
                    variant={feature.color as any}
                    size="lg"
                    hover="glow"
                    className="group-hover:scale-125 group-hover:animate-glow-pulse transition-all duration-500"
                  >
                    <feature.icon className="group-hover:animate-bounce-subtle" />
                  </FeatureIcon>
                  <Badge variant="glass" size="sm" className="group-hover:animate-scale-in transition-all duration-300">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-white group-hover:gradient-text group-hover:animate-text-shimmer transition-all duration-500">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <CardDescription className="text-foreground-muted group-hover:text-foreground-secondary transition-colors duration-300">
                  {feature.description}
                </CardDescription>
              </CardContent>
              
              {/* Animated border */}
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary via-secondary to-accent opacity-0 group-hover:opacity-20 blur-sm transition-opacity duration-500"></div>
            </Card>
          ))}
        </div>

        {/* Feature Highlights */}
        <div className="mt-20 grid md:grid-cols-3 gap-8">
          <div className="text-center space-y-4 group cursor-pointer animate-scale-in hover:scale-105 transition-transform duration-300" style={{ animationDelay: '0.5s' }}>
            <div className="text-4xl font-bold gradient-text group-hover:animate-glow-pulse">99.9%</div>
            <p className="text-foreground-secondary group-hover:text-white transition-colors duration-300">Uptime Guarantee</p>
          </div>
          <div className="text-center space-y-4 group cursor-pointer animate-scale-in hover:scale-105 transition-transform duration-300" style={{ animationDelay: '0.6s' }}>
            <div className="text-4xl font-bold gradient-text group-hover:animate-glow-pulse">24/7</div>
            <p className="text-foreground-secondary group-hover:text-white transition-colors duration-300">AI-Powered Support</p>
          </div>
          <div className="text-center space-y-4 group cursor-pointer animate-scale-in hover:scale-105 transition-transform duration-300" style={{ animationDelay: '0.7s' }}>
            <div className="text-4xl font-bold gradient-text group-hover:animate-glow-pulse">50+</div>
            <p className="text-foreground-secondary group-hover:text-white transition-colors duration-300">Platform Integrations</p>
          </div>
        </div>
      </div>
    </SectionContainer>
  )
}

export default FeaturesSection