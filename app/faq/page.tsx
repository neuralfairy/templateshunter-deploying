"use client"

import { useState, useEffect } from "react"
import { ChevronDown, ChevronUp, HelpCircle, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

export default function FAQPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [openItems, setOpenItems] = useState<number[]>([0]) // First item open by default

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const toggleItem = (index: number) => {
    setOpenItems((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
  }

  const faqCategories = [
    {
      category: "Getting Started",
      questions: [
        {
          question: "How does Templateshunter's lead generation work?",
          answer:
            "Our platform uses advanced AI algorithms to identify and target your ideal prospects across multiple channels. We analyze behavioral data, firmographics, and intent signals to deliver high-quality leads that match your specific criteria. Our system integrates with your existing CRM and automates the entire lead generation process.",
        },
        {
          question: "How quickly can I start receiving leads?",
          answer:
            "You can start receiving qualified leads within 24-48 hours of campaign setup. Our onboarding team will help you configure your targeting parameters, integrate with your CRM, and launch your first campaign. Most clients see their first leads within the first day.",
        },
        {
          question: "What makes your leads higher quality than competitors?",
          answer:
            "Our leads are 5x more likely to convert because we use proprietary AI scoring algorithms that analyze over 200 data points per prospect. We verify contact information in real-time, track buying intent signals, and only deliver leads that match your exact ideal customer profile.",
        },
        {
          question: "Do you offer a free trial?",
          answer:
            "Yes! We offer a 14-day free trial with full access to our Professional plan features. You can generate up to 500 leads during the trial period with no credit card required. This gives you a chance to experience the quality of our leads and platform capabilities.",
        },
      ],
    },
    {
      category: "Platform & Features",
      questions: [
        {
          question: "Which CRM systems do you integrate with?",
          answer:
            "We integrate with 50+ CRM platforms including Salesforce, HubSpot, Pipedrive, Zoho, Microsoft Dynamics, and many more. Our integrations are bi-directional, meaning data flows seamlessly between systems. We also offer custom API integrations for enterprise clients.",
        },
        {
          question: "Can I customize my lead targeting criteria?",
          answer:
            "Our platform offers advanced targeting options including company size, industry, location, technology stack, job titles, and behavioral triggers. You can create multiple audience segments and run different campaigns simultaneously with unique messaging for each segment.",
        },
        {
          question: "What types of contact information do you provide?",
          answer:
            "We provide verified email addresses, direct phone numbers, LinkedIn profiles, and company information for each lead. All contact data is verified in real-time using multiple validation methods to ensure 95%+ accuracy rates.",
        },
        {
          question: "How do you ensure data compliance and privacy?",
          answer:
            "We are SOC 2 certified and fully GDPR compliant. All data is encrypted in transit and at rest, and we follow strict data governance policies. We only collect and use data from publicly available sources and provide easy opt-out mechanisms for all prospects.",
        },
      ],
    },
    {
      category: "Pricing & Plans",
      questions: [
        {
          question: "What's included in each pricing plan?",
          answer:
            "Our Starter plan ($79/month) includes 1,000 leads, basic CRM integration, and email sequences. Professional plan ($239/month) adds 5,000 leads, advanced targeting, multi-channel campaigns, and priority support. Enterprise plans offer unlimited leads, custom integrations, and dedicated account management.",
        },
        {
          question: "Are there any setup fees or hidden costs?",
          answer:
            "No setup fees or hidden costs. Our pricing is transparent and includes everything you need to get started. We also provide free onboarding, training, and ongoing support. The only additional costs might be for custom integrations or premium add-ons that you specifically request.",
        },
        {
          question: "Can I change or cancel my plan anytime?",
          answer:
            "Yes, you can upgrade, downgrade, or cancel your plan at any time. Changes take effect immediately, and we prorate any billing differences. We also offer a 30-day money-back guarantee if you're not satisfied with our service.",
        },
        {
          question: "Do you offer discounts for annual billing?",
          answer:
            "Yes! Annual billing saves you 20% compared to monthly billing. For example, our Professional plan is $239/month when billed monthly, but only $191/month when billed annually. Enterprise clients can also negotiate custom pricing based on volume and contract length.",
        },
      ],
    },
    {
      category: "Support & Success",
      questions: [
        {
          question: "What kind of support do you provide?",
          answer:
            "We offer multiple support channels including live chat, email, phone support, and a comprehensive knowledge base. Professional plan users get priority support with faster response times, while Enterprise clients receive dedicated account management and success coaching.",
        },
        {
          question: "Do you provide training and onboarding?",
          answer:
            "Yes! Every new client receives free onboarding including platform training, campaign setup assistance, and best practices guidance. We also offer ongoing training webinars, video tutorials, and personalized success coaching to help you maximize your results.",
        },
        {
          question: "What if I'm not satisfied with the lead quality?",
          answer:
            "We stand behind our lead quality with a satisfaction guarantee. If you're not happy with the leads you receive, we'll work with you to optimize your targeting criteria and improve results. We also offer lead replacement for any leads that don't meet our quality standards.",
        },
        {
          question: "How do you measure and report on campaign performance?",
          answer:
            "Our platform provides real-time analytics and reporting on all key metrics including lead volume, quality scores, conversion rates, and ROI. You can access detailed reports, set up automated alerts, and export data for further analysis. Enterprise clients get custom reporting and dedicated success reviews.",
        },
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
            Frequently Asked Questions
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            Get Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-emerald-700">
              Questions Answered
            </span>
          </h1>
          <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Everything you need to know about Templateshunter's lead generation platform, pricing, and support.
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            onClick={() => window.open("https://salescentri.com/contact/support-request", "_blank")}
          >
            Still Have Questions? <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          {faqCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-12">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-slate-900 mb-4">{category.category}</h2>
              </div>

              <div className="space-y-4">
                {category.questions.map((faq, questionIndex) => {
                  const globalIndex = categoryIndex * 10 + questionIndex // Unique index across all categories
                  const isOpen = openItems.includes(globalIndex)

                  return (
                    <Card key={questionIndex} className="border-0 shadow-lg bg-white overflow-hidden">
                      <CardHeader
                        className="cursor-pointer hover:bg-slate-50 transition-colors"
                        onClick={() => toggleItem(globalIndex)}
                      >
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-lg font-semibold text-slate-900 pr-4">{faq.question}</CardTitle>
                          <div className="flex-shrink-0">
                            {isOpen ? (
                              <ChevronUp className="h-5 w-5 text-emerald-600" />
                            ) : (
                              <ChevronDown className="h-5 w-5 text-slate-400" />
                            )}
                          </div>
                        </div>
                      </CardHeader>

                      {isOpen && (
                        <CardContent className="pt-0 pb-6">
                          <div className="border-t border-slate-100 pt-4">
                            <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                          </div>
                        </CardContent>
                      )}
                    </Card>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Help Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <HelpCircle className="h-16 w-16 text-emerald-600 mx-auto mb-6" />
          <h2 className="text-4xl font-bold text-slate-900 mb-6">Still Need Help?</h2>
          <p className="text-xl text-slate-600 mb-8">
            Our support team is here to help you succeed with your lead generation goals
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <CardHeader className="text-center">
                <CardTitle className="text-lg font-semibold text-slate-900">Live Chat</CardTitle>
                <CardDescription>Get instant answers from our support team</CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  className="w-full bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white"
                  onClick={() => window.open("https://salescentri.com/contact/support-request/live-chat", "_blank")}
                >
                  Start Chat
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <CardHeader className="text-center">
                <CardTitle className="text-lg font-semibold text-slate-900">Book a Demo</CardTitle>
                <CardDescription>See the platform in action with our team</CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  className="w-full bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white"
                  onClick={() => window.open("https://salescentri.com/get-started/book-demo", "_blank")}
                >
                  Schedule Demo
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <CardHeader className="text-center">
                <CardTitle className="text-lg font-semibold text-slate-900">Submit Ticket</CardTitle>
                <CardDescription>Send us a detailed support request</CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  className="w-full bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white"
                  onClick={() => window.open("https://salescentri.com/contact/support-request/submit-ticket", "_blank")}
                >
                  Submit Ticket
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-emerald-500 to-emerald-700">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Start Generating Leads?</h2>
          <p className="text-xl mb-8 opacity-90">Try Templateshunter risk-free with our 14-day free trial</p>
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
