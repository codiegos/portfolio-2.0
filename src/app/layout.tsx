import './globals.css'
import type { Metadata } from 'next'
import type { Viewport } from 'next'
import { Montserrat } from 'next/font/google'
import React from 'react'
import { MenuProvider } from '@/contexts/menu-context'
import { Toaster } from 'sonner'
import ActiveSectionContextProvider from '@/contexts/active-section-context'
import { LanguageProvider } from '@/contexts/language-context'
import { MotionProvider } from '@/components/MotionProvider'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  weight: ['300', '400', '500', '600', '700', '900'],
})

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://codiegos.vercel.app'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Diego Sebastián Rivera | Full Stack Developer',
  description:
    'Software engineer with 3 years of experience building management systems, dashboards and online stores with Next.js, TypeScript and PostgreSQL.',
  openGraph: {
    images: {
      url: '/images/opengraph-image.jpg',
      width: 1920,
      height: 934,
      alt: 'codiegos portfolio cover',
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
      data-scroll-behavior='smooth'
      suppressHydrationWarning
    >
      <body
        className={`bg-tertiary overflow-x-hidden font-sans text-white`}
        suppressHydrationWarning
      >
        <LanguageProvider>
          <MotionProvider>
            <ActiveSectionContextProvider>
              <MenuProvider>
                {children}
                <Toaster richColors theme='dark' />
              </MenuProvider>
            </ActiveSectionContextProvider>
          </MotionProvider>
        </LanguageProvider>
      </body>
    </html>
  )
}
