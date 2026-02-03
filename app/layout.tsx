import React from "react"
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"], display: 'swap' });
const _geistMono = Geist_Mono({ subsets: ["latin"], display: 'swap' });

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  colorScheme: 'light',
  themeColor: '#161b22',
}

export const metadata: Metadata = {
  title: 'IKS Nigeria Limited | Construction & Engineering Excellence',
  description: 'IKS Nigeria Limited - Building and construction company specializing in geotechnical services, environmental management, solar installations, and logistics in Nigeria.',
  keywords: 'construction, engineering, Kaduna, Nigeria, solar installation, borehole drilling, environmental management',
  generator: 'v0.app',
  applicationName: 'IKS Nigeria Limited',
  icons: {
    icon: [
      {
        url: '/images/iks-logo.png',
        sizes: '180x180',
        type: 'image/png',
      },
      {
        url: '/images/ikslogo.png',
        sizes: '32x32',
        type: 'image/png',
      },
    ],
    apple: '/images/iks-logo.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_NG',
    url: 'https://iksnigeria.com',
    title: 'IKS Nigeria Limited | Construction & Engineering Excellence',
    description: 'Professional construction and engineering services in Nigeria',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`} suppressHydrationWarning>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
