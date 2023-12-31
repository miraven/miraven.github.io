'use client'

import { Inter } from 'next/font/google'
import { Providers } from "./providers"
const inter = Inter({ subsets: ['latin'] })

// export const metadata = {
//   title: 'miraven',
//   description: 'Generated by mi Raven',
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
