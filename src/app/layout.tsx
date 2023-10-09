import './globals.css'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import React from 'react'
import { MenuProvider } from '@/contexts/menu-context'
import { Toaster } from 'sonner'
import ActiveSectionContextProvider from '@/contexts/active-section-context'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  weight: ['100', '300', '400', '500', '700', '900'],
})

export const metadata: Metadata = {
  title: 'codiegos | Personal Portfolio',
  description: 'Diego Sebastián Rivera | Software Developer',
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#110428',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' className='!scroll-smooth'>
      <body
        className={`${montserrat.variable} bg-tertiary font-sans text-white`}
      >
        <ActiveSectionContextProvider>
          <MenuProvider>
            {children}
            <Toaster richColors theme='dark' />
          </MenuProvider>
        </ActiveSectionContextProvider>
      </body>
    </html>
  )
}
