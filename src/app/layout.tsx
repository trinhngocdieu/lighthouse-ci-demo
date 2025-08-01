import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lighthouse CI Demo",
  description: "A Next.js application demonstrating Lighthouse CI integration for performance monitoring and SEO optimization.",
  keywords: ["Next.js", "Lighthouse CI", "Performance", "SEO", "Web Development"],
  authors: [{ name: "Lighthouse CI Demo" }],
  creator: "Lighthouse CI Demo",
  publisher: "Lighthouse CI Demo",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://lighthouse-ci-demo.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Lighthouse CI Demo",
    description: "A Next.js application demonstrating Lighthouse CI integration for performance monitoring and SEO optimization.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lighthouse CI Demo",
    description: "A Next.js application demonstrating Lighthouse CI integration for performance monitoring and SEO optimization.",
  },
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#000000",
  colorScheme: "light dark",
  applicationName: "Lighthouse CI Demo",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Lighthouse CI Demo",
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://vercel.com" />
        <link rel="preconnect" href="https://nextjs.org" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="preload" href="/next.svg" as="image" type="image/svg+xml" />
        <link rel="preload" href="/vercel.svg" as="image" type="image/svg+xml" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Lighthouse CI Demo",
              "description": "A Next.js application demonstrating Lighthouse CI integration for performance monitoring and SEO optimization.",
              "url": "https://lighthouse-ci-demo.vercel.app",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://lighthouse-ci-demo.vercel.app/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://lighthouse-ci-demo.vercel.app"
                }
              ]
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
