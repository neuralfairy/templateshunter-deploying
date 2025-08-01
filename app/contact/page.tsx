"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, Calendar, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

export default function ContactPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  })

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Redirect to salescentri contact form
    window.open("https://salescentri.com/contact/sales-inquiry", "_blank")
  }

  const contactMethods = [
    {
      icon: Phone,
      title: "Call Us",
      description: "Speak with our sales team",
      contact: "+1 (555) 123-4567",
      action: "Call Now",
      link: "tel:+15551234567",
    },
    {
      icon: Mail,
      title: "Email Us",
      description: "Send us a message",
      contact: "hello@templateshunter.com",
      action: "Send Email",
      link: "mailto:hello@templateshunter.com",
    },
    {
      icon: MessageSquare,
      title: "Live Chat",
      description: "Chat with our support team",
      contact: "Available 24/7",
      action: "Start Chat",
      link: "https://salescentri.com/contact/support-request/live-chat",
    },
    {
      icon: Calendar,
      title: "Book a Demo",
      description: "Schedule a personalized demo",
      contact: "30-minute session",
      action: "Schedule Now",
      link: "https://salescentri.com/get-started/book-demo",
    },
  ]

  const offices = [
    {
      city: "Chicago",
      address: "123 Business District, Suite 500",
      zipcode: "Chicago, IL 60601",
      phone: "+1 (555) 123-4567",
      hours: "Mon-Fri: 9AM-6PM CST",
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
            Get In Touch
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            Let's{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-emerald-700">
              Connect
            </span>
          </h1>
          <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your lead generation? Our team is here to help you get started and answer any questions
            you have.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactMethods.map((method, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 bg-white"
              >
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <method.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-slate-900">{method.title}</CardTitle>
                  <CardDescription className="text-slate-600">{method.description}</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-slate-700 font-medium mb-4">{method.contact}</p>
                  <Button
                    className="w-full bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white"
                    onClick={() => window.open(method.link, "_blank")}
                  >
                    {method.action}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Office Info */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Send Us a Message</h2>
              <p className="text-slate-600 mb-8">Fill out the form below and we'll get back to you within 24 hours.</p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name" className="text-sm font-medium text-slate-700">
                      Full Name *
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="mt-1"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-sm font-medium text-slate-700">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="mt-1"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="company" className="text-sm font-medium text-slate-700">
                      Company Name
                    </Label>
                    <Input
                      id="company"
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="mt-1"
                      placeholder="Your Company"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-sm font-medium text-slate-700">
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="mt-1"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="message" className="text-sm font-medium text-slate-700">
                    Message *
                  </Label>
                  <Textarea
                    id="message"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="mt-1 min-h-[120px]"
                    placeholder="Tell us about your lead generation needs..."
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white py-3 font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Send Message <Send className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </div>

            {/* Office Information */}
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Office</h2>
              <p className="text-slate-600 mb-8">
                Visit us at our Chicago headquarters or reach out through any of our contact channels.
              </p>

              {offices.map((office, index) => (
                <Card key={index} className="border-0 shadow-lg bg-gradient-to-br from-emerald-50 to-white mb-8">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-slate-900 flex items-center">
                      <MapPin className="h-6 w-6 text-emerald-600 mr-2" />
                      {office.city} Office
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <MapPin className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-slate-700 font-medium">{office.address}</p>
                        <p className="text-slate-600">{office.zipcode}</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <Phone className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                      <p className="text-slate-700">{office.phone}</p>
                    </div>

                    <div className="flex items-center space-x-3">
                      <Clock className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                      <p className="text-slate-700">{office.hours}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}

              {/* Quick Actions */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-slate-900">Quick Actions</h3>
                <div className="space-y-3">
                  <Button
                    variant="outline"
                    className="w-full justify-start border-emerald-200 text-emerald-700 hover:bg-emerald-50 bg-transparent"
                    onClick={() => window.open("https://salescentri.com/get-started/calendly", "_blank")}
                  >
                    <Calendar className="mr-3 h-5 w-5" />
                    Schedule a Call
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full justify-start border-emerald-200 text-emerald-700 hover:bg-emerald-50 bg-transparent"
                    onClick={() => window.open("https://salescentri.com/solutions/use-case-navigator/demo", "_blank")}
                  >
                    <ArrowRight className="mr-3 h-5 w-5" />
                    View Demo
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full justify-start border-emerald-200 text-emerald-700 hover:bg-emerald-50 bg-transparent"
                    onClick={() => window.open("https://salescentri.com/contact/support-request", "_blank")}
                  >
                    <MessageSquare className="mr-3 h-5 w-5" />
                    Get Support
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-emerald-500 to-emerald-700">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90">
            Don't wait - start generating high-quality leads today with our free trial
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
