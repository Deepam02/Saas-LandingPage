import React, { useState } from "react"
import { SectionContainer } from "@/components/ui/section-container"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/enhanced-card"
import { Button } from "@/components/ui/enhanced-button"
import { Badge } from "@/components/ui/enhanced-badge"
import { Check, Star, Zap } from "lucide-react"
import { cn } from "@/lib/utils"

const PricingSection = () => {
  const [isAnnual, setIsAnnual] = useState(false)

  const plans = [
    {
      name: "Starter",
      description: "Perfect for small businesses and freelancers",
      monthlyPrice: 29,
      annualPrice: 290,
      badge: "Most Popular",
      featured: false,
      features: [
        "Up to 10,000 contacts",
        "5 AI-powered campaigns",
        "Basic analytics & reporting",
        "Email & chat support",
        "Core integrations (10+)",
        "Campaign automation",
        "A/B testing",
        "Mobile app access"
      ]
    },
    {
      name: "Professional",
      description: "Advanced features for growing marketing teams",
      monthlyPrice: 79,
      annualPrice: 790,
      badge: "Best Value",
      featured: true,
      features: [
        "Up to 100,000 contacts",
        "Unlimited AI campaigns",
        "Advanced analytics & insights",
        "Priority support + phone",
        "All integrations (50+)",
        "Advanced automation workflows",
        "Multivariate testing",
        "Custom reporting",
        "Lead scoring",
        "Behavioral triggers",
        "API access",
        "White-label options"
      ]
    },
    {
      name: "Enterprise",
      description: "Custom solutions for large organizations",
      monthlyPrice: 199,
      annualPrice: 1990,
      badge: "Premium",
      featured: false,
      features: [
        "Unlimited contacts",
        "Unlimited everything",
        "Custom AI model training",
        "Dedicated success manager",
        "Enterprise integrations",
        "Advanced security & compliance",
        "Custom workflows",
        "Professional services",
        "99.9% SLA guarantee",
        "Custom analytics",
        "Advanced API access",
        "Priority feature requests",
        "Custom onboarding",
        "Training & certification"
      ]
    }
  ]

  return (
    <SectionContainer id="pricing" padding="xl" className="relative">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent"></div>
      
      <div className="relative z-10">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16 animate-fade-in">
          <Badge variant="glass" size="lg">
            💎 Simple Pricing
          </Badge>
          <h2 className="heading-2 text-white">
            Choose Your{" "}
            <span className="gradient-text">Perfect Plan</span>
          </h2>
          <p className="body-large text-foreground-secondary max-w-3xl mx-auto">
            Start free, scale as you grow. All plans include our core AI features 
            with no hidden fees or surprise charges.
          </p>
          
          {/* Billing Toggle */}
          <div className="flex items-center justify-center space-x-4 mt-8">
            <span className={cn("text-sm", !isAnnual ? "text-white" : "text-foreground-muted")}>
              Monthly
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className={cn(
                "relative w-16 h-8 rounded-full transition-colors duration-300",
                isAnnual ? "bg-gradient-primary" : "bg-muted"
              )}
            >
              <div
                className={cn(
                  "absolute top-1 w-6 h-6 bg-white rounded-full shadow-md transition-transform duration-300",
                  isAnnual ? "translate-x-9" : "translate-x-1"
                )}
              />
            </button>
            <span className={cn("text-sm", isAnnual ? "text-white" : "text-foreground-muted")}>
              Annual
            </span>
            {isAnnual && (
              <Badge variant="success" size="sm">
                Save 30%
              </Badge>
            )}
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              variant={plan.featured ? "pricing-featured" : "pricing"}
              hover="lift"
              className={cn(
                "relative animate-fade-in h-full flex flex-col",
                plan.featured && "md:-mt-4 md:mb-4"
              )}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Featured Badge */}
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge variant="gradient" size="lg" className="shadow-glow">
                    <Star className="w-4 h-4 mr-1" />
                    {plan.badge}
                  </Badge>
                </div>
              )}

              <CardHeader className="text-center">
                <div className="space-y-2">
                  <CardTitle className="text-2xl text-white">{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                </div>
                
                {/* Pricing */}
                <div className="space-y-2 pt-4">
                  <div className="flex items-baseline justify-center space-x-1">
                    <span className="text-4xl font-bold gradient-text">
                      ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                    </span>
                    <span className="text-foreground-muted">
                      /{isAnnual ? "year" : "month"}
                    </span>
                  </div>
                  {isAnnual && (
                    <p className="text-sm text-success">
                      Save ${(plan.monthlyPrice * 12) - plan.annualPrice} per year
                    </p>
                  )}
                </div>
              </CardHeader>

              <CardContent className="space-y-4 flex-grow">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                      <span className="text-foreground-secondary text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter>
                <Button
                  variant={plan.featured ? "hero" : "secondary"}
                  size="lg"
                  className="w-full group"
                >
                  {plan.name === "Enterprise" ? "Contact Sales" : "Start Free Trial"}
                  <Zap className="w-4 h-4 ml-2 group-hover:scale-110 transition-transform" />
                </Button>
              </CardFooter>

              {!plan.featured && plan.badge && (
                <div className="absolute -top-3 -right-3">
                  <Badge variant="glass" size="sm">
                    {plan.badge}
                  </Badge>
                </div>
              )}
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 space-y-4 animate-fade-in" style={{ animationDelay: '0.5s' }}>
          <p className="text-foreground-muted">
            All plans include 14-day free trial • No credit card required • Cancel anytime
          </p>
          <div className="flex items-center justify-center space-x-8 text-sm text-foreground-muted">
            <div className="flex items-center space-x-2">
              <Check className="w-4 h-4 text-success" />
              <span>99.9% Uptime SLA</span>
            </div>
            <div className="flex items-center space-x-2">
              <Check className="w-4 h-4 text-success" />
              <span>24/7 Support</span>
            </div>
            <div className="flex items-center space-x-2">
              <Check className="w-4 h-4 text-success" />
              <span>SOC 2 Compliant</span>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  )
}

export default PricingSection