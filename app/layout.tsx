import type { Metadata, Viewport } from 'next'
import { Space_Grotesk, Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ClientWrapper from '../components/ClientWrapper'
import PageTransition from '../components/PageTransition'

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-heading', weight: ['400', '500', '600', '700'] })
const inter = Inter({ subsets: ['latin'], variable: '--font-body', weight: ['300', '400', '500', '600', '700'] })
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono', weight: ['400', '500'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://deepthi-paul.vercel.app'),
  title: 'Deepthi Mahendran · Full-Stack Developer',
  icons: {
    icon: '/favicon.svg?v=3',
    apple: '/apple-icon.svg?v=3',
  },
  description: 'Portfolio of Deepthi Mahendran, Full-Stack Developer & Tech Enthusiast building accessible and modern web applications.',
  keywords: ['Deepthi Mahendran', 'Full-Stack Developer', 'Frontend', 'Backend', 'Next.js', 'React', 'TypeScript', 'Portfolio'],
  authors: [{ name: 'Deepthi Mahendran' }],
  creator: 'Deepthi Mahendran',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://deepthi-paul.vercel.app',
    title: 'Deepthi Mahendran · Full-Stack Developer',
    description: 'Portfolio of Deepthi Mahendran, Full-Stack Developer & Tech Enthusiast building accessible and modern web applications.',
    siteName: 'Deepthi Mahendran Portfolio',
    images: [
      {
        url: '/og-image.jpg', // Assuming an og-image will be configured or placed in public eventually
        width: 1200,
        height: 630,
        alt: 'Deepthi Mahendran Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Deepthi Mahendran · Full-Stack Developer',
    description: 'Portfolio of Deepthi Mahendran, Full-Stack Developer & Tech Enthusiast building accessible and modern web applications.',
    creator: '@deepthimahendran', // Update if user has a specific twitter handle
    images: ['/og-image.jpg'],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Deepthi Mahendran',
  url: 'https://deepthi-paul.vercel.app',
  jobTitle: 'Full-Stack Developer',
  description: 'Full-Stack Developer & Tech Enthusiast building modern web applications.',
  sameAs: [
    'https://github.com/deepthi-mahendran',
    // Add LinkedIn or Twitter here if applicable
  ],
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f3ecf8' },
    { media: '(prefers-color-scheme: dark)', color: '#0e0713' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <body className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ClientWrapper>
          <Navbar />
          <main>
            <PageTransition>
              {children}
            </PageTransition>
          </main>
          <Footer />
        </ClientWrapper>
      </body>
    </html>
  )
}
