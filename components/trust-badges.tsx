import { Shield, Award, Users, CheckCircle } from "lucide-react"

export default function TrustBadges() {
  const badges = [
    {
      icon: Shield,
      title: "SOC 2 Certified",
      description: "Enterprise-grade security",
    },
    {
      icon: Award,
      title: "Industry Leader",
      description: "Top-rated by G2 & Capterra",
    },
    {
      icon: Users,
      title: "500+ Clients",
      description: "Trusted by leading companies",
    },
    {
      icon: CheckCircle,
      title: "99.9% Uptime",
      description: "Reliable platform guarantee",
    },
  ]

  return (
    <section className="py-12 px-4 bg-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <p className="text-slate-600 font-medium">Trusted by industry leaders worldwide</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {badges.map((badge, index) => (
            <div key={index} className="text-center group">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-emerald-200 transition-colors">
                <badge.icon className="h-6 w-6 text-emerald-600" />
              </div>
              <h4 className="font-semibold text-slate-900 text-sm mb-1">{badge.title}</h4>
              <p className="text-xs text-slate-600">{badge.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
