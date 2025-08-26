import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Szkolenie fryzjerskie — techniki ze Wschodu',
  description: 'Elitarne techniki fryzjerskie — lokalnie, po polsku, w ułamku ceny.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID
  return (
    <html lang="pl">
      <head>
        {/* GTM */}
        {gtmId && (
          <>
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
      </body>
    </html>
  )
}
