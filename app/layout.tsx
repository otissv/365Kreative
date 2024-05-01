import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'

import './globals.css'
import { cn } from '@/lib/utils'
import { env } from '@/config/env'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter'
})

const APP_NAME = '365Kreative'
const APP_DEFAULT_TITLE = '365Kreative'
const APP_TITLE_TEMPLATE = '%s - 365Kreative'
const APP_DESCRIPTION =
  'We design, develop, and optimise websites that are visually stunning, SEO savvy and conversion-focused.'
const APP_IMAGE = '/opengraph-image.png'
const APP_BASE_URL = env().baseUrl

export const metadata: Metadata = {
  metadataBase: APP_BASE_URL,
  applicationName: APP_NAME,
  title: {
    default: APP_DEFAULT_TITLE,
    template: APP_TITLE_TEMPLATE
  },
  description: APP_DESCRIPTION,
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: APP_DEFAULT_TITLE
    // startUpImage: [],
  },
  formatDetection: {
    telephone: false
  },
  openGraph: {
    type: 'website',
    siteName: APP_NAME,
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE
    },
    description: APP_DESCRIPTION,
    images: APP_IMAGE
  },
  twitter: {
    card: 'summary',
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE
    },
    description: APP_DESCRIPTION
  }
}

export const viewport: Viewport = {
  themeColor: '#FFFFFF'
}

export default async function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={cn('dark', inter.className, inter.variable)}>
        {children}
      </body>
    </html>
  )
}
