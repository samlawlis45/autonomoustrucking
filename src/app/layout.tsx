import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "autonomoustrucking.ai - Premium Domain Portfolio | Own the Autonomous Trucking Namespace",
  description: "18 premium .AI domains controlling the autonomous trucking namespace. Exact-match domains for self-driving trucks, autonomous freight, fleet technology, and logistics. Strategic acquisition opportunity for $2.5T market.",
  keywords: "autonomous trucking, self-driving trucks, driverless freight, autonomous freight, fleet technology, autonomous logistics, autonomous trucking domains, self-driving truck domains, autonomous freight domains, fleet management domains, autonomous logistics domains, autonomous trucking AI, self-driving truck AI, driverless trucking, autonomous middle mile, hub to hub logistics, fleet observability, autonomous stack, remote operations, autonomous as a service, driver as a service, autonomous linehaul, autonomous future, autonomous solutions",
  authors: [{ name: "autonomoustrucking.ai" }],
  creator: "autonomoustrucking.ai",
  publisher: "autonomoustrucking.ai",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: "https://autonomoustrucking.ai",
  },
  openGraph: {
    title: "autonomoustrucking.ai - Own the Autonomous Trucking Namespace",
    description: "18 premium .AI domains controlling autonomous trucking. Strategic acquisition opportunity for self-driving trucks, autonomous freight, and fleet technology markets.",
    type: "website",
    url: "https://autonomoustrucking.ai",
    siteName: "autonomoustrucking.ai",
    locale: "en_US",
    images: [
      {
        url: "https://autonomoustrucking.ai/og-image.png",
        width: 1200,
        height: 630,
        alt: "Autonomous Trucking Domain Portfolio - 18 Premium .AI Domains",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@autonomoustrucking",
    creator: "@autonomoustrucking",
    title: "autonomoustrucking.ai - Own the Autonomous Trucking Namespace",
    description: "18 premium .AI domains controlling autonomous trucking. Strategic acquisition opportunity for self-driving trucks, autonomous freight, and fleet technology markets.",
    images: ["https://autonomoustrucking.ai/twitter-image.png"],
  },
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#000000",
  category: "Technology",
  classification: "Domain Portfolio",
  other: {
    "geo.region": "US",
    "geo.placename": "United States",
    "geo.position": "39.8283;-98.5795",
    "ICBM": "39.8283, -98.5795",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-5Y0FY5LR1K"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-5Y0FY5LR1K');
            `,
          }}
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        <script defer data-domain="autonomoustrucking.ai" src="https://plausible.io/js/script.js"></script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "autonomoustrucking.ai",
              "url": "https://autonomoustrucking.ai",
              "logo": "https://autonomoustrucking.ai/logo.png",
              "description": "Premium domain portfolio for autonomous trucking and freight technology",
              "foundingDate": "2024",
              "industry": "Technology",
              "areaServed": "Global",
              "knowsAbout": [
                "Autonomous Trucking",
                "Self-Driving Trucks", 
                "Driverless Freight",
                "Autonomous Logistics",
                "Fleet Technology",
                "Autonomous Middle Mile",
                "Hub to Hub Logistics"
              ],
              "offers": {
                "@type": "Offer",
                "name": "Autonomous Trucking Domain Portfolio",
                "description": "18 premium .AI domains controlling the autonomous trucking namespace",
                "category": "Domain Names",
                "priceCurrency": "USD",
                "availability": "https://schema.org/InStock"
              },
              "sameAs": [
                "https://github.com/samlawlis45/autonomoustrucking"
              ]
            })
          }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}