"use client"

import { useState, useEffect } from "react"
import { Target, Users, Brain, Shield, BarChart3, Workflow, CheckCircle, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

export default function FeaturesPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const coreFeatures = [
    {
      icon: Target,
      title: "AI-Powered Targeting",
      description:
        "Advanced machine learning algorithms identify your ideal prospects with 95% accuracy using behavioral data, firmographics, and intent signals.",
      benefits: ["95% targeting accuracy", "Real-time intent data", "Behavioral analysis", "Custom audience building"],
    },
    {
      icon: Brain,
      title: "Intelligent Lead Scoring",
      description:
        "Our proprietary AI scoring system ranks leads based on conversion probability, helping you focus on the highest-value prospects first.",
      benefits: ["Predictive scoring", "Conversion probability", "Priority ranking", "Dynamic updates"],
    },
    {
      icon: Workflow,
      title: "Automated Workflows",
      description:
        "Set up sophisticated lead nurturing sequences that automatically engage prospects at the right time with personalized messaging.",
      benefits: ["Multi-channel sequences", "Trigger-based automation", "Personalization at scale", "A/B testing"],
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description:
        "Comprehensive reporting and analytics dashboard provides deep insights into campaign performance and ROI metrics.",
      benefits: ["Real-time reporting", "ROI tracking", "Performance insights", "Custom dashboards"],
    },
    {
      icon: Shield,
      title: "Data Security & Compliance",
      description:
        "Enterprise-grade security with SOC 2 certification, GDPR compliance, and advanced data protection measures.",
      benefits: ["SOC 2 certified", "GDPR compliant", "Data encryption", "Access controls"],
    },
    {
      icon: Users,
      title: "CRM Integration",
      description:
        "Seamlessly integrate with 50+ CRM platforms including Salesforce, HubSpot, Pipedrive, and more for unified lead management.",
      benefits: ["50+ integrations", "Real-time sync", "Custom field mapping", "Bi-directional data flow"],
    },
  ]

  const platformFeatures = [
    {
      category: "Lead Generation",
      features: [
        "B2B Contact Database (200M+ contacts)",
        "Email Finder & Verification",
        "Phone Number Discovery",
        "Social Media Profiles",
        "Company Information & Insights",
      ],
    },
    {
      category: "Prospecting Tools",
      features: [
        "Boolean Search Builder",
        "Saved Search Lists",
        "Lead Export & Import",
        "Bulk Operations",
        "Chrome Extension",
      ],
    },
    {
      category: "Outreach & Engagement",
      features: [
        "Email Sequences",
        "LinkedIn Automation",
        "Cold Calling Tools",
        "Multi-channel Campaigns",
        "Response Tracking",
      ],
    },
    {
      category: "Analytics & Reporting",
      features: [
        "Campaign Performance",
        "Lead Quality Metrics",
        "ROI Calculations",
        "Team Performance",
        "Custom Reports",
      ],
    },
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
            Advanced Lead Generation Platform
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            Powerful Features for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-emerald-700">
              Maximum Results
            </span>
          </h1>
          <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Discover the comprehensive suite of tools and features that make Templateshunter the #1 choice for B2B lead
            generation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              onClick={() => window.open("https://salescentri.com/solutions/use-case-navigator/demo", "_blank")}
            >
              Try Interactive Demo <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-slate-300 text-slate-700 hover:bg-slate-50 px-8 py-4 text-lg font-semibold transition-all duration-300 bg-transparent"
              onClick={() => window.open("https://salescentri.com/get-started/book-demo", "_blank")}
            >
              Book a Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Core Platform Features</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Everything you need to generate, qualify, and convert high-quality B2B leads
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreFeatures.map((feature, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 bg-gradient-to-br from-white to-slate-50"
              >
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center mb-4">
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-slate-900">{feature.title}</CardTitle>
                  <CardDescription className="text-slate-600 leading-relaxed">{feature.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-slate-700">
                        <CheckCircle className="h-4 w-4 text-emerald-500 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Features Grid */}
      <section className="py-20 px-4 bg-gradient-to-r from-slate-50 to-emerald-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Complete Feature Set</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Comprehensive tools organized by category to streamline your entire lead generation process
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {platformFeatures.map((category, index) => (
              <Card key={index} className="border-0 shadow-lg bg-white">
                <CardHeader className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-t-lg">
                  <CardTitle className="text-lg font-bold">{category.category}</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <ul className="space-y-3">
                    {category.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-sm text-slate-700">
                        <CheckCircle className="h-4 w-4 text-emerald-500 mr-2 flex-shrink-0 mt-0.5" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">Seamless Integrations</h2>
          <p className="text-xl text-slate-600 mb-12 max-w-3xl mx-auto">
            Connect with your existing tools and workflows. We integrate with 50+ popular platforms.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-12">
            {["Salesforce", "HubSpot", "Pipedrive", "Slack", "Zapier", "Microsoft"].map((integration, index) => (
              <div key={index} className="bg-slate-100 rounded-lg p-6 hover:bg-slate-200 transition-colors">
                <div className="text-slate-700 font-semibold">{integration}</div>
              </div>
            ))}
          </div>

          <Button
            size="lg"
            className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-8 py-4 text-lg font-semibold"
            onClick={() => window.open("https://salescentri.com/solutions/psa-suite/integrations", "_blank")}
          >
            View All Integrations
          </Button>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-emerald-500 to-emerald-700">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Experience These Features?</h2>
          <p className="text-xl mb-8 opacity-90">
            Start your free trial today and see how our features can transform your lead generation
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
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
