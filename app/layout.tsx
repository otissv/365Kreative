import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter'
})

export const metadata: Metadata = {
  title: {
    default: '365Kreative',
    template: '%s - 365Kreative'
  },
  description:
    'We design, develop, and optimise websites that are visually stunning, SEO savvy and conversion-focused.',
  twitter: {
    card: 'summary_large_image'
  },
  openGraph: {
    images: '/opengraph-image.png'
  }
}

export default function RootLayout({
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
