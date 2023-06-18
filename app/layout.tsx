import './globals.css'
import type { Metadata } from 'next'
import Sidebar from './components/sidebar'
import { Analytics } from '@vercel/analytics/react'

export const metadata: Metadata = {
  title: {
    default: 'Gerardo Luna',
    template: '%s | Gerardo Luna'
  },
  description: 'Desarrollador y creador.',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  twitter: {
    title: 'DevveJL',
    card: 'summary_large_image'
  }
}

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang='es'
      className='text-black bg-white dark:text-white dark:bg-[#111010]'
    >
      <body className='antialiased max-w-3xl mb-40 flex flex-col md:flex-row mx-4 mt-8 md:mt-20 lg:mt-32 lg:mx-auto'>
        <Sidebar />
        <main className='flex-auto min-w-0 mt-6 md:mt-0 flex flex-col px-2 md:px-0'>
          {children}
          <Analytics />
        </main>
      </body>
    </html>
  )
}
