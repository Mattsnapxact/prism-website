import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Newsreader } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const newsreader = Newsreader({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  style: ['normal', 'italic'],
  variable: '--font-newsreader',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Prism — Executive Visibility',
  description:
    'Prism reveals what intelligent organisations overlook through Executive Visibility and Estate Intelligence.',
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0a0a0a',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${newsreader.variable}`}>
      <body className="bg-background font-sans antialiased">
        {children}

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-N0VBFY5J4L"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];

            function gtag(){
              window.dataLayer.push(arguments);
            }

            gtag('js', new Date());
            gtag('config', 'G-N0VBFY5J4L');
          `}
        </Script>

        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
