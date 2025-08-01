"use client"

import { useState, useEffect } from "react"
import { Users, Target, ArrowRight, Globe, Shield, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

export default function AboutPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const values = [
    {
      icon: Target,
      title: "Results-Driven",
      description: "We're obsessed with delivering measurable results that drive real business growth for our clients.",
    },
    {
      icon: Shield,
      title: "Trust & Transparency",
      description: "We build lasting relationships through honest communication and transparent business practices.",
    },
    {
      icon: Heart,
      title: "Customer Success",
      description: "Your success is our success. We're committed to helping you achieve your lead generation goals.",
    },
    {
      icon: Globe,
      title: "Innovation",
      description: "We continuously innovate and improve our platform to stay ahead of industry trends.",
    },
  ]

  const stats = [
    { number: "500+", label: "Happy Clients", description: "Companies trust us with their lead generation" },
    { number: "2M+", label: "Leads Generated", description: "High-quality prospects delivered" },
    { number: "95%", label: "Client Retention", description: "Long-term partnerships built on results" },
    { number: "300%", label: "Average ROI", description: "Proven return on investment" },
  ]

  const team = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      bio: "15+ years in B2B sales and marketing. Former VP of Sales at TechCorp.",
      expertise: "Sales Strategy, Business Development",
    },
    {
      name: "Michael Chen",
      role: "CTO",
      bio: "Former lead engineer at Google. Expert in AI and machine learning.",
      expertise: "AI/ML, Platform Architecture",
    },
    {
      name: "Emily Rodriguez",
      role: "VP of Marketing",
      bio: "Growth marketing expert with 12+ years at leading SaaS companies.",
      expertise: "Growth Marketing, Lead Generation",
    },
    {
      name: "David Kim",
      role: "Head of Customer Success",
      bio: "Dedicated to ensuring client success with proven methodologies.",
      expertise: "Customer Success, Account Management",
    },
  ]

  const milestones = [
    {
      year: "2019",
      title: "Company Founded",
      description: "Started with a vision to revolutionize B2B lead generation",
    },
    { year: "2020", title: "First 100 Clients", description: "Reached our first major milestone with proven results" },
    { year: "2021", title: "AI Platform Launch", description: "Launched our proprietary AI-powered targeting system" },
    { year: "2022", title: "Series A Funding", description: "Raised $10M to accelerate growth and innovation" },
    { year: "2023", title: "500+ Clients", description: "Became the trusted partner for hundreds of businesses" },
    { year: "2024", title: "Global Expansion", description: "Expanded operations to serve clients worldwide" },
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
            About Templateshunter
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            Transforming B2B{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-emerald-700">
              Lead Generation
            </span>
          </h1>
          <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            We're on a mission to help businesses grow by providing the highest quality B2B leads through advanced
            technology and proven methodologies.
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            onClick={() => window.open("https://salescentri.com/get-started/book-demo", "_blank")}
          >
            Meet Our Team <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Our Mission</h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                To empower businesses of all sizes with the tools and expertise they need to generate high-quality
                leads, accelerate sales, and achieve sustainable growth.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                We believe that every business deserves access to advanced lead generation technology that was once only
                available to enterprise companies.
              </p>
            </div>
            <div className="bg-gradient-to-br from-emerald-50 to-slate-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Vision</h3>
              <p className="text-slate-600 leading-relaxed">
                To become the world's most trusted B2B lead generation platform, helping millions of businesses connect
                with their ideal customers and drive unprecedented growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 px-4 bg-gradient-to-r from-slate-50 to-emerald-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Our Impact in Numbers</h2>
            <p className="text-xl text-slate-600">The results speak for themselves</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg bg-white text-center hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <CardHeader className="pb-4">
                  <div className="text-4xl font-bold text-emerald-600 mb-2">{stat.number}</div>
                  <CardTitle className="text-xl font-bold text-slate-900">{stat.label}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-600">{stat.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Our Core Values</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">The principles that guide everything we do</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 bg-gradient-to-br from-white to-slate-50"
              >
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-slate-900">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-600 text-center leading-relaxed">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-4 bg-gradient-to-r from-slate-50 to-emerald-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Our Journey</h2>
            <p className="text-xl text-slate-600">Key milestones in our growth story</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {milestones.map((milestone, index) => (
              <Card key={index} className="border-0 shadow-lg bg-white hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <Badge className="bg-emerald-100 text-emerald-800 text-lg px-3 py-1">{milestone.year}</Badge>
                  </div>
                  <CardTitle className="text-xl font-bold text-slate-900">{milestone.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-600 leading-relaxed">{milestone.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Meet Our Leadership Team</h2>
            <p className="text-xl text-slate-600">Experienced leaders driving innovation and growth</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 bg-gradient-to-br from-white to-slate-50"
              >
                <CardHeader className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-10 w-10 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-slate-900">{member.name}</CardTitle>
                  <CardDescription className="text-emerald-600 font-semibold">{member.role}</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-slate-600 text-sm mb-4 leading-relaxed">{member.bio}</p>
                  <Badge variant="outline" className="text-xs">
                    {member.expertise}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-emerald-500 to-emerald-700">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Join Our Success Story?</h2>
          <p className="text-xl mb-8 opacity-90">
            Let's work together to transform your lead generation and grow your business
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
              onClick={() => window.open("https://salescentri.com/contact", "_blank")}
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
