import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'SwiftAi - AI Agency for Production Systems',
  description: 'Build AI systems that actually work in production. SwiftAi designs and develops AI chatbots, multilingual voice agents, automation tools, and AI SaaS platforms.',
  keywords: 'AI agency, AI SaaS, chatbots, voice agents, AI automation, machine learning',
  icons: {
    icon: '/logo.svg',
    shortcut: '/logo.svg',
    apple: '/logo.svg',
  },
  openGraph: {
    title: 'SwiftAi - AI Agency for Production Systems',
    description: 'Build AI systems that actually work in production.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-primary">
        {children}
      </body>
    </html>
  )
}
