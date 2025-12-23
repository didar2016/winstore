import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Momajik E-commerce',
  description: 'Modern electronics and gadgets store',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-roboto">
        {children}
      </body>
    </html>
  )
}