import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Templateshunter Solutions - B2B Lead Generation Platform",
  description:
    "Generate high-quality, targeted B2B leads with advanced AI-powered tools. Increase your sales pipeline by 300% with our proven lead generation system.",
  keywords: "B2B lead generation, targeted prospecting, sales acceleration, lead generation, B2B sales tools",
  authors: [{ name: "Templateshunter Solutions" }],
  openGraph: {
    title: "Templateshunter Solutions - B2B Lead Generation Platform",
    description: "Generate high-quality, targeted B2B leads with advanced AI-powered tools.",
    url: "https://templateshunter.com",
    siteName: "Templateshunter Solutions",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Templateshunter Solutions - B2B Lead Generation Platform",
    description: "Generate high-quality, targeted B2B leads with advanced AI-powered tools.",
  },
  robots: {
    index: true,
    follow: true,
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Templateshunter Solutions",
              url: "https://templateshunter.com",
              logo: "https://templateshunter.com/logo.png",
              description:
                "Leading B2B lead generation platform helping businesses scale their sales with high-quality, targeted prospects.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "123 Business District, Suite 500",
                addressLocality: "Chicago",
                addressRegion: "IL",
                postalCode: "60601",
                addressCountry: "US",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+1-555-123-4567",
                contactType: "customer service",
                availableLanguage: "English",
              },
              sameAs: ["https://linkedin.com/company/templateshunter", "https://twitter.com/templateshunter"],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "How does Templateshunter's lead generation work?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Our platform uses advanced AI algorithms to identify and target your ideal prospects across multiple channels. We analyze behavioral data, firmographics, and intent signals to deliver high-quality leads that match your specific criteria.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How quickly can I start receiving leads?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "You can start receiving qualified leads within 24-48 hours of campaign setup. Our onboarding team will help you configure your targeting parameters and launch your first campaign.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Do you offer a free trial?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes! We offer a 14-day free trial with full access to our Professional plan features. You can generate up to 500 leads during the trial period with no credit card required.",
                  },
                },
              ],
            }),
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
