import React from "react"
import { SectionContainer } from "@/components/ui/section-container"
import { Button } from "@/components/ui/enhanced-button"
import { Badge } from "@/components/ui/enhanced-badge"
import { 
  Mail, 
  Phone, 
  MapPin, 
  Twitter, 
  Linkedin, 
  Github, 
  Youtube,
  ArrowRight,
  Heart
} from "lucide-react"

const Footer = () => {
  const footerSections = [
    {
      title: "Product",
      links: [
        { name: "Features", href: "#features" },
        { name: "Pricing", href: "#pricing" },
        { name: "Integrations", href: "#" },
        { name: "API Documentation", href: "#" },
        { name: "Changelog", href: "#" },
        { name: "Roadmap", href: "#" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "#" },
        { name: "Careers", href: "#" },
        { name: "Blog", href: "#" },
        { name: "Press", href: "#" },
        { name: "Partners", href: "#" },
        { name: "Contact", href: "#" }
      ]
    },
    {
      title: "Support",
      links: [
        { name: "Help Center", href: "#" },
        { name: "Documentation", href: "#" },
        { name: "Community", href: "#" },
        { name: "Status Page", href: "#" },
        { name: "Bug Reports", href: "#" },
        { name: "Feature Requests", href: "#" }
      ]
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "#" },
        { name: "Terms of Service", href: "#" },
        { name: "Cookie Policy", href: "#" },
        { name: "GDPR", href: "#" },
        { name: "Security", href: "#" },
        { name: "Compliance", href: "#" }
      ]
    }
  ]

  const socialLinks = [
    { name: "Twitter", icon: Twitter, href: "#", color: "hover:text-blue-400" },
    { name: "LinkedIn", icon: Linkedin, href: "#", color: "hover:text-blue-600" },
    { name: "GitHub", icon: Github, href: "#", color: "hover:text-gray-400" },
    { name: "YouTube", icon: Youtube, href: "#", color: "hover:text-red-500" }
  ]

  return (
    <footer className="relative border-t border-white/10">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background-secondary to-transparent"></div>
      
      <SectionContainer padding="xl" className="relative z-10">
        {/* Newsletter Section */}
        <div className="glass-strong rounded-2xl p-8 md:p-12 mb-16 animate-fade-in">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <Badge variant="glass" size="lg">
                📧 Stay Updated
              </Badge>
              <h3 className="heading-3 text-white">
                Get the latest AI marketing insights
              </h3>
              <p className="text-foreground-secondary">
                Join 25,000+ marketers who receive our weekly newsletter with actionable 
                tips, case studies, and AI marketing trends.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder:text-foreground-muted focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
                <Button variant="hero" className="group">
                  Subscribe
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
              <p className="text-xs text-foreground-muted">
                No spam, unsubscribe at any time. Read our{" "}
                <a href="#" className="text-primary hover:underline">
                  Privacy Policy
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-6 gap-12 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6 animate-fade-in">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">AI</span>
                </div>
                <span className="text-2xl font-heading font-bold text-white">
                  ADmyBRAND
                </span>
              </div>
              <p className="text-foreground-secondary leading-relaxed">
                Transform your marketing with AI-powered intelligence. Join thousands 
                of successful marketers who trust ADmyBRAND AI Suite to drive real results.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-foreground-muted">
                <Mail className="w-5 h-5 text-primary" />
                <a href="mailto:hello@admybrand.ai" className="hover:text-white transition-colors">
                  hello@admybrand.ai
                </a>
              </div>
              <div className="flex items-center space-x-3 text-foreground-muted">
                <Phone className="w-5 h-5 text-primary" />
                <a href="tel:+1-555-0123" className="hover:text-white transition-colors">
                  +1 (555) 012-3456
                </a>
              </div>
              <div className="flex items-center space-x-3 text-foreground-muted">
                <MapPin className="w-5 h-5 text-primary" />
                <span>San Francisco, CA</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className={`p-2 glass rounded-lg text-foreground-muted transition-all duration-300 hover:scale-110 ${social.color}`}
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div 
              key={section.title} 
              className="space-y-4 animate-fade-in"
              style={{ animationDelay: `${(index + 1) * 0.1}s` }}
            >
              <h4 className="font-semibold text-white">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-foreground-muted hover:text-white transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4 text-sm text-foreground-muted">
              <span>© 2024 ADmyBRAND AI Suite. All rights reserved.</span>
              <span className="hidden md:inline">•</span>
              <span className="flex items-center space-x-1">
                <span>Made with</span>
                <Heart className="w-4 h-4 text-red-500 fill-current" />
                <span>for marketers</span>
              </span>
            </div>
            
            <div className="flex items-center space-x-6 text-sm">
              <Badge variant="glass" size="sm" className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>All systems operational</span>
              </Badge>
            </div>
          </div>
        </div>
      </SectionContainer>
    </footer>
  )
}

export default Footer