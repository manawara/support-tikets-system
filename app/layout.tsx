import type { Metadata } from 'next'
import { Lato, Poppins } from 'next/font/google'

import './globals.css'

const lato = Lato({
  weight: ['300', '400', '700'],
  display: 'swap',
  variable: '--font-lato',
})

const poppins = Poppins({
  weight: ['300', '400', '700'],
  display: 'swap',
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${lato.variable} ${poppins.variable}`}>
      <body>{children}</body>
    </html>
  )
}
