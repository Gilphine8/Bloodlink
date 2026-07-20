import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { SiteNavbar } from '@/components/site-navbar'
import { SiteFooter } from '@/components/site-footer'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'BloodLinks Kenya | Connecting Donors, Saving Lives',
  description:
    'BloodLinks connects voluntary blood donors with patients in urgent need across major Kenyan hospitals. Find blood, become a donor, or partner with us.',
  generator: 'v0.app',
  keywords: [
    'blood donation Kenya',
    'blood donors Nairobi',
    'urgent blood request',
    'KNBTS',
    'blood bank Kenya',
  ],
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#DC2626',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} bg-background`}>
      <body className="flex min-h-dvh flex-col font-sans antialiased">
        <SiteNavbar />
        <main className="flex-1">{children}</main>
        <SiteFooter />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
