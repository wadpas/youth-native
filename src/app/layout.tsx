import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Byte',
  description: 'Books',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang='en'>
      <body className={`antialiased bg-zinc-100`}>{children}</body>
    </html>
  )
}
