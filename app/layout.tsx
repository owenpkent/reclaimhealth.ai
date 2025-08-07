import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://reclaim.health'),
  title: 'ReclAIm - AI-powered appeals to reclaim your right to care',
  description: 'Fight back against insurance denials with AI-powered appeals. Generate personalized, legally sound appeals and track progress in your dashboard.',
  keywords: 'insurance appeals, healthcare, AI, medical claims, patient rights, insurance denials',
  authors: [{ name: 'ReclAIm Team' }],
  creator: 'ReclAIm',
  publisher: 'ReclAIm',
  robots: 'index, follow',
  openGraph: {
    title: 'ReclAIm - AI-powered appeals to reclaim your right to care',
    description: 'Fight back against insurance denials with AI-powered appeals. Generate personalized, legally sound appeals and track progress in your dashboard.',
    url: 'https://reclaim.health',
    siteName: 'ReclAIm',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ReclAIm - AI-powered appeals to reclaim your right to care',
    description: 'Fight back against insurance denials with AI-powered appeals.',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
