import React from "react"
import { SectionContainer } from "@/components/ui/section-container"
import { Badge } from "@/components/ui/enhanced-badge"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const FAQSection = () => {
  const faqs = [
    {
      question: "How does ADmyBRAND AI Suite differ from other marketing platforms?",
      answer: "ADmyBRAND AI Suite leverages advanced machine learning algorithms to provide real-time insights, predictive analytics, and automated optimizations that traditional platforms can't match. Our AI continuously learns from your data to improve campaign performance automatically, while offering seamless integrations with 50+ marketing tools."
    },
    {
      question: "Can I integrate ADmyBRAND with my existing marketing tools?",
      answer: "Absolutely! We offer native integrations with over 50 popular marketing tools including HubSpot, Salesforce, Mailchimp, Google Analytics, Facebook Ads, and many more. Our API also allows for custom integrations with any platform your team uses."
    },
    {
      question: "How quickly can I see results with ADmyBRAND AI Suite?",
      answer: "Most customers see initial improvements within the first week of implementation. Significant results typically appear within 30 days, with many customers reporting 200-400% improvements in key metrics within the first quarter. The AI learns and optimizes continuously, so results improve over time."
    },
    {
      question: "Is my data secure with ADmyBRAND?",
      answer: "Yes, absolutely. We're SOC 2 Type II certified and fully GDPR compliant. All data is encrypted in transit and at rest using enterprise-grade security measures. We never share your data with third parties, and you maintain full ownership and control of your information."
    },
    {
      question: "What kind of support is available?",
      answer: "We offer 24/7 support across all plans through multiple channels including live chat, email, and phone. Professional and Enterprise plans include priority support with faster response times. Enterprise customers also get a dedicated success manager and custom onboarding."
    },
    {
      question: "Can I cancel my subscription at any time?",
      answer: "Yes, you can cancel your subscription at any time with no penalties or cancellation fees. If you cancel, you'll continue to have access to your account until the end of your current billing period. We also offer a 14-day free trial so you can test all features before committing."
    },
    {
      question: "Do you offer custom solutions for large enterprises?",
      answer: "Yes! Our Enterprise plan includes custom AI model training, dedicated infrastructure, advanced security features, and personalized support. We work with your team to create tailored solutions that fit your specific needs and scale requirements."
    },
    {
      question: "How does the AI learn and improve my campaigns?",
      answer: "Our AI uses machine learning algorithms to analyze your campaign data, customer behavior, and market trends in real-time. It identifies patterns, predicts outcomes, and automatically optimizes targeting, timing, and content to improve performance. The more data it processes, the smarter it becomes."
    },
    {
      question: "What happens to my data if I decide to leave?",
      answer: "You can export all your data at any time in standard formats. We provide comprehensive data export tools and will assist with the migration process. We also offer a 30-day grace period after cancellation to ensure you have time to retrieve any additional data you need."
    },
    {
      question: "Is there a free trial available?",
      answer: "Yes! We offer a 14-day free trial that gives you full access to all features in the Professional plan. No credit card is required to start your trial, and you can upgrade, downgrade, or cancel at any time during or after the trial period."
    }
  ]

  return (
    <SectionContainer id="faq" padding="xl" className="relative">
      {/* Background Effects */}
      <div className="absolute top-1/4 left-1/2 w-96 h-96 bg-accent/10 rounded-full blur-3xl transform -translate-x-1/2"></div>
      
      <div className="relative z-10">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16 animate-fade-in">
          <Badge variant="glass" size="lg">
            ❓ Frequently Asked Questions
          </Badge>
          <h2 className="heading-2 text-white">
            Got Questions? We've Got{" "}
            <span className="gradient-text">Answers</span>
          </h2>
          <p className="body-large text-foreground-secondary max-w-3xl mx-auto">
            Find answers to the most common questions about ADmyBRAND AI Suite. 
            Can't find what you're looking for? Contact our support team.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="glass border border-white/10 rounded-lg px-6 animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <AccordionTrigger className="text-left text-white hover:text-primary transition-colors duration-300">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-foreground-secondary leading-relaxed pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Contact Support CTA */}
        <div className="text-center mt-16 space-y-4 animate-fade-in" style={{ animationDelay: '0.5s' }}>
          <h3 className="heading-4 text-white">Still have questions?</h3>
          <p className="text-foreground-secondary">
            Our team is here to help. Get in touch and we'll respond within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:support@admybrand.ai"
              className="btn-secondary inline-flex items-center justify-center"
            >
              Contact Support
            </a>
            <a
              href="#"
              className="btn-ghost inline-flex items-center justify-center"
            >
              Browse Help Center
            </a>
          </div>
        </div>
      </div>
    </SectionContainer>
  )
}

export default FAQSection