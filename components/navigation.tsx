"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const solutions = [
    { name: "Lead Generation", href: "https://salescentri.com/platforms/lead-management/lead-generation" },
    { name: "AI Aggregator", href: "https://salescentri.com/platforms/contact-intelligence/ai-aggregator" },
    { name: "Voice AI Agent", href: "https://salescentri.com/platforms/lead-management/voice-ai-agent" },
    { name: "PSA Suite", href: "https://salescentri.com/solutions/psa-suite" },
    { name: "Use Case Navigator", href: "https://salescentri.com/solutions/use-case-navigator" },
  ]

  const resources = [
    { name: "Case Studies", href: "https://salescentri.com/resources/case-studies" },
    { name: "Whitepapers", href: "https://salescentri.com/resources/whitepapers-ebooks" },
    { name: "Tutorials", href: "https://salescentri.com/resources/tutorials-webinars" },
    { name: "API Reference", href: "https://salescentri.com/docs/api-reference" },
  ]

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-slate-200 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">TH</span>
            </div>
            <span className="text-xl font-bold text-slate-900">Templateshunter</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-slate-700 hover:text-emerald-600 font-medium transition-colors">
              Home
            </Link>
            <Link href="/features" className="text-slate-700 hover:text-emerald-600 font-medium transition-colors">
              Features
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-slate-700 hover:text-emerald-600 font-medium transition-colors">
                Solutions <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {solutions.map((item) => (
                  <DropdownMenuItem key={item.name} asChild>
                    <a href={item.href} target="_blank" rel="noopener noreferrer">
                      {item.name}
                    </a>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Link href="/pricing" className="text-slate-700 hover:text-emerald-600 font-medium transition-colors">
              Pricing
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-slate-700 hover:text-emerald-600 font-medium transition-colors">
                Resources <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {resources.map((item) => (
                  <DropdownMenuItem key={item.name} asChild>
                    <a href={item.href} target="_blank" rel="noopener noreferrer">
                      {item.name}
                    </a>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Link href="/about" className="text-slate-700 hover:text-emerald-600 font-medium transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-slate-700 hover:text-emerald-600 font-medium transition-colors">
              Contact
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="ghost"
              className="text-slate-700 hover:text-emerald-600"
              onClick={() => window.open("https://salescentri.com/login/customer-portal", "_blank")}
            >
              Login
            </Button>
            <Button
              className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => window.open("https://salescentri.com/get-started/free-trial", "_blank")}
            >
              Start Free Trial
            </Button>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-slate-200">
            <div className="flex flex-col space-y-4">
              <Link href="/" className="text-slate-700 hover:text-emerald-600 font-medium">
                Home
              </Link>
              <Link href="/features" className="text-slate-700 hover:text-emerald-600 font-medium">
                Features
              </Link>
              <Link href="/pricing" className="text-slate-700 hover:text-emerald-600 font-medium">
                Pricing
              </Link>
              <Link href="/about" className="text-slate-700 hover:text-emerald-600 font-medium">
                About
              </Link>
              <Link href="/contact" className="text-slate-700 hover:text-emerald-600 font-medium">
                Contact
              </Link>
              <div className="pt-4 border-t border-slate-200">
                <Button
                  className="w-full bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white"
                  onClick={() => window.open("https://salescentri.com/get-started/free-trial", "_blank")}
                >
                  Start Free Trial
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
