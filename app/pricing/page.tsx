"use client"

import { useState, useEffect } from "react"
import { Check, ArrowRight, Star, Zap, Crown, Building } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

export default function PricingPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [isAnnual, setIsAnnual] = useState(true)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const plans = [
    {
      name: "Starter",
      icon: Zap,
      description: "Perfect for small teams getting started",
      monthlyPrice: 99,
      annualPrice: 79,
      features: [
        "1,000 leads per month",
        "Email finder & verification",
        "Basic CRM integration",
        "Email sequences",
        "Standard support",
        "Basic analytics",
      ],
      cta: "Start Free Trial",
      popular: false,
    },
    {
      name: "Professional",
      icon: Star,
      description: "Most popular for growing businesses",
      monthlyPrice: 299,
      annualPrice: 239,
      features: [
        "5,000 leads per month",
        "Advanced targeting & filters",
        "All CRM integrations",
        "Multi-channel campaigns",
        "Priority support",
        "Advanced analytics",
        "A/B testing",
        "Lead scoring",
      ],
      cta: "Start Free Trial",
      popular: true,
    },
    {
      name: "Enterprise",
      icon: Crown,
      description: "For large teams with custom needs",
      monthlyPrice: 799,
      annualPrice: 639,
      features: [
        "Unlimited leads",
        "Custom integrations",
        "Dedicated account manager",
        "Advanced automation",
        "White-label options",
        "Custom reporting",
        "API access",
        "SLA guarantee",
      ],
      cta: "Contact Sales",
      popular: false,
    },
  ]

  const enterpriseFeatures = [
    "Custom lead limits",
    "Dedicated infrastructure",
    "Advanced security features",
    "Custom integrations",
    "Dedicated success manager",
    "Priority support & SLA",
    "Custom training & onboarding",
    "Advanced reporting & analytics",
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div
          className={`max-w-7xl mx-auto text-center transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <Badge className="mb-6 bg-emerald-100 text-emerald-800 hover:bg-emerald-200 px-4 py-2 text-sm font-medium">
            Transparent Pricing
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            Choose Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-emerald-700">
              Perfect Plan
            </span>
          </h1>
          <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Start with a 14-day free trial. No credit card required. Cancel anytime.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center space-x-4 mb-12">
            <span className={`text-lg font-medium ${!isAnnual ? "text-slate-900" : "text-slate-500"}`}>Monthly</span>
            <Switch checked={isAnnual} onCheckedChange={setIsAnnual} className="data-[state=checked]:bg-emerald-500" />
            <span className={`text-lg font-medium ${isAnnual ? "text-slate-900" : "text-slate-500"}`}>Annual</span>
            <Badge className="bg-emerald-100 text-emerald-800 ml-2">Save 20%</Badge>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className={`relative border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 ${plan.popular ? "ring-2 ring-emerald-500 bg-gradient-to-br from-white to-emerald-50" : "bg-white"}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-4 py-1">
                      Most Popular
                    </Badge>
                  </div>
                )}

                <CardHeader className="text-center pb-4">
                  <div
                    className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${plan.popular ? "bg-gradient-to-r from-emerald-500 to-emerald-600" : "bg-slate-100"}`}
                  >
                    <plan.icon className={`h-8 w-8 ${plan.popular ? "text-white" : "text-slate-600"}`} />
                  </div>
                  <CardTitle className="text-2xl font-bold text-slate-900">{plan.name}</CardTitle>
                  <CardDescription className="text-slate-600 mt-2">{plan.description}</CardDescription>
                  <div className="mt-6">
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-slate-900">
                        ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                      </span>
                      <span className="text-slate-600 ml-2">/month</span>
                    </div>
                    {isAnnual && (
                      <div className="text-sm text-slate-500 mt-1">Billed annually (${plan.annualPrice * 12}/year)</div>
                    )}
                  </div>
                </CardHeader>

                <CardContent className="pt-0">
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-slate-700">
                        <Check className="h-4 w-4 text-emerald-500 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button
                    className={`w-full py-3 font-semibold transition-all duration-300 ${
                      plan.popular
                        ? "bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white shadow-lg hover:shadow-xl transform hover:scale-105"
                        : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                    }`}
                    onClick={() => {
                      if (plan.name === "Enterprise") {
                        window.open("https://salescentri.com/pricing/enterprise-custom", "_blank")
                      } else {
                        window.open("https://salescentri.com/get-started/free-trial", "_blank")
                      }
                    }}
                  >
                    {plan.cta} <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Building className="h-16 w-16 text-emerald-600 mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Enterprise & Custom Solutions</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Need something more? We offer custom solutions for large enterprises with specific requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Enterprise Features</h3>
              <ul className="space-y-4">
                {enterpriseFeatures.map((feature, index) => (
                  <li key={index} className="flex items-center text-slate-700">
                    <Check className="h-5 w-5 text-emerald-500 mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <Card className="border-0 shadow-lg bg-gradient-to-br from-emerald-50 to-white">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold text-slate-900">Ready to Scale?</CardTitle>
                <CardDescription className="text-slate-600 mt-2">
                  Let's discuss your specific requirements and create a custom solution
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="mb-6">
                  <div className="text-3xl font-bold text-emerald-600 mb-2">Custom Pricing</div>
                  <div className="text-slate-600">Based on your needs</div>
                </div>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-8 py-3 font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  onClick={() => window.open("https://salescentri.com/contact/sales-inquiry/request-quote", "_blank")}
                >
                  Request Quote <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-slate-50 to-emerald-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-slate-600">Everything you need to know about our pricing and plans</p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "Can I change plans anytime?",
                answer:
                  "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately and we'll prorate any billing differences.",
              },
              {
                question: "What's included in the free trial?",
                answer:
                  "The 14-day free trial includes full access to the Professional plan features with up to 500 leads. No credit card required.",
              },
              {
                question: "Do you offer refunds?",
                answer:
                  "Yes, we offer a 30-day money-back guarantee. If you're not satisfied, we'll provide a full refund within the first 30 days.",
              },
              {
                question: "Are there setup fees?",
                answer:
                  "No setup fees for any plan. We include free onboarding and training to help you get started quickly.",
              },
              {
                question: "Can I cancel anytime?",
                answer:
                  "Yes, you can cancel your subscription at any time. Your account will remain active until the end of your current billing period.",
              },
            ].map((faq, index) => (
              <Card key={index} className="border-0 shadow-lg bg-white">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold text-slate-900">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-emerald-500 to-emerald-700">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Start Generating Leads Today</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of companies already using Templateshunter to grow their business
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-emerald-600 hover:bg-slate-50 px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              onClick={() => window.open("https://salescentri.com/get-started/free-trial", "_blank")}
            >
              Start Free Trial <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-emerald-600 px-8 py-4 text-lg font-semibold transition-all duration-300 bg-transparent"
              onClick={() => window.open("https://salescentri.com/get-started/book-demo", "_blank")}
            >
              Book a Demo
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
