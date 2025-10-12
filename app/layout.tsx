import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import ConsentBanner from '../components/ConsentBanner'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Szkolenie fryzjerskie — techniki ze Wschodu',
  description: 'Elitarne techniki fryzjerskie — lokalnie, po polsku, w ułamku ceny.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID
  
  // JSON-LD Schema.org
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Baker IT",
    "url": "https://baker-it.com",
    "logo": "https://baker-it.com/logo.png",
    "description": "Szkolenia fryzjerskie - elitarne techniki ze Wschodu",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+48-XXX-XXX-XXX",
      "contactType": "customer service",
      "availableLanguage": ["Polish"]
    }
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Baker IT - Szkolenia Fryzjerskie",
    "url": "https://baker-it.com",
    "description": "Elitarne techniki fryzjerskie — lokalnie, po polsku, w ułamku ceny.",
    "publisher": {
      "@type": "Organization",
      "name": "Baker IT"
    }
  }
  
  return (
    <html lang="pl">
      <head>
        {/* JSON-LD Schema.org */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        
        {/* GTM with Consent Mode v2 */}
        {gtmId && (
          <>
            <Script id="gtm-consent" strategy="beforeInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                
                // Default consent state (deny all except necessary)
                gtag('consent', 'default', {
                  'analytics_storage': 'denied',
                  'ad_storage': 'denied',
                  'ad_user_data': 'denied',
                  'ad_personalization': 'denied',
                  'wait_for_update': 500
                });
              `}
            </Script>
            <Script id="gtm" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                window.dataLayer.push({
                  event: 'page_view',
                  page_location: window.location.href,
                  page_title: document.title,
                  page_section: 'hero',
                  headline_variant: 'blue_ocean'
                });
              `}
            </Script>
            <Script
              id="gtm-loader"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','${gtmId}');
              `,
              }}
            />
          </>
        )}
      </head>
      <body className={inter.className}>
        {gtmId && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            />
          </noscript>
        )}
        {children}
        <ConsentBanner />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
