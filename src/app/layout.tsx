import './globals.css'
import type { Metadata } from 'next'
import type { Viewport } from 'next'
import { Montserrat } from 'next/font/google'
import React from 'react'
import { MenuProvider } from '@/contexts/menu-context'
import { Toaster } from 'sonner'
import ActiveSectionContextProvider from '@/contexts/active-section-context'
import { LanguageProvider } from '@/contexts/language-context'

// NOTE: Kinetika is a paid font (Indyground / Onur Yıldırım) and is not on
// Google Fonts. Using Noto_Sans_Khmer as the closest free, geometric alternative.
// To switch to true Kinetika: drop the .woff2/.ttf files in src/app/fonts/
// and replace this import with `localFont` from 'next/font/local'.
const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  weight: ['100', '300', '400', '500', '700', '900'],
})

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://codiegos.vercel.app'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'codiegos | Personal Portfolio',
  description: 'Diego Sebastián Rivera | Full Stack Developer',
  openGraph: {
    images: {
      url: '/images/opengraph-image.jpg',
      width: 1920,
      height: 934,
      alt: 'Portfolio Cover Image',
    },
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#07101e',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang='en'
      className={`scroll-smooth! ${montserrat.variable}`}
      suppressHydrationWarning
    >
      <body
        className={`bg-tertiary overflow-x-hidden font-sans text-white`}
        suppressHydrationWarning
      >
        <LanguageProvider>
          <ActiveSectionContextProvider>
            <MenuProvider>
              {children}
              <Toaster richColors theme='dark' />
            </MenuProvider>
          </ActiveSectionContextProvider>
        </LanguageProvider>
      </body>
    </html>
  )
}
