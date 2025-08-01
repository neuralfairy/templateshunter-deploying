import { Facebook, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  const solutions = [
    { name: "Lead Generation", href: "https://salescentri.com/platforms/lead-management/lead-generation" },
    { name: "AI Aggregator", href: "https://salescentri.com/platforms/contact-intelligence/ai-aggregator" },
    { name: "Voice AI Agent", href: "https://salescentri.com/platforms/lead-management/voice-ai-agent" },
    { name: "PSA Suite", href: "https://salescentri.com/solutions/psa-suite" },
  ]

  const company = [
    { name: "About Us", href: "https://salescentri.com/company/about-us" },
    { name: "Careers", href: "https://salescentri.com/company/careers" },
    { name: "Partners", href: "https://salescentri.com/company/partners-affiliates" },
    { name: "Contact", href: "https://salescentri.com/contact" },
  ]

  const resources = [
    { name: "Case Studies", href: "https://salescentri.com/resources/case-studies" },
    { name: "Whitepapers", href: "https://salescentri.com/resources/whitepapers-ebooks" },
    { name: "API Docs", href: "https://salescentri.com/docs/api-reference" },
    { name: "Support", href: "https://salescentri.com/contact/support-request" },
  ]

  const support = [
    { name: "Help Center", href: "https://salescentri.com/contact/support-request" },
    { name: "Live Chat", href: "https://salescentri.com/contact/support-request/live-chat" },
    { name: "Submit Ticket", href: "https://salescentri.com/contact/support-request/submit-ticket" },
    { name: "Book Demo", href: "https://salescentri.com/get-started/book-demo" },
  ]

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">TH</span>
              </div>
              <span className="text-xl font-bold">Templateshunter</span>
            </div>
            <p className="text-slate-300 mb-6 leading-relaxed">
              Leading B2B lead generation platform helping businesses scale their sales with high-quality, targeted
              prospects.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-emerald-500" />
                <span className="text-slate-300">Chicago, IL</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-emerald-500" />
                <span className="text-slate-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-emerald-500" />
                <span className="text-slate-300">hello@templateshunter.com</span>
              </div>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Solutions</h3>
            <ul className="space-y-3">
              {solutions.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-300 hover:text-emerald-400 transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-300 hover:text-emerald-400 transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Resources</h3>
            <ul className="space-y-3">
              {resources.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-300 hover:text-emerald-400 transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Support</h3>
            <ul className="space-y-3">
              {support.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-300 hover:text-emerald-400 transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="border-t border-slate-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-6 mb-4 md:mb-0">
              <a href="#" className="text-slate-400 hover:text-emerald-400 transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-slate-400 hover:text-emerald-400 transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-slate-400 hover:text-emerald-400 transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
            <div className="text-slate-400 text-sm text-center md:text-right">
              <p className="mb-2">© 2024 Templateshunter Solutions. All rights reserved.</p>
              <p>
                <a
                  href="https://salescentri.com?utm_source=templateshunter.com&utm_medium=footer&utm_campaign=partner_network"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:text-emerald-300 transition-colors"
                >
                  Powered by Sales Intelligence Platform
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
