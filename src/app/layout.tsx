import Navbar from '@/components/Navbar'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import React from 'react'
import { MenuProvider } from '@/contexts/menu-context'
import { Toaster } from 'sonner'
import ActiveSectionContextProvider from '@/contexts/active-section-context'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'codiegos',
  description: 'Diego Sebastián Rivera | Personal Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' className='!scroll-smooth'>
      <body className={`${inter.className} bg-tertiary text-white`}>
        <ActiveSectionContextProvider>
          <MenuProvider>
            <Navbar />
            {children}
            <Toaster richColors theme='dark' />
          </MenuProvider>
        </ActiveSectionContextProvider>
      </body>
    </html>
  )
}
