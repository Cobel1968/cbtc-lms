import './globals.css'
import type { Metadata } from 'next'
import Navbar from "@/components/Navbar"

export const metadata: Metadata = {
  title: {
    default: 'CBTC LMS',
    template: '%s | CBTC LMS',
  },
  description: 'Cobel Business Training Center Learning Platform',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className="min-h-screen bg-slate-50 text-slate-900 antialiased flex flex-col">
        
        {/* Top Navigation */}
        <Navbar />

        {/* Page Content */}
        <main className="flex-1 px-4 md:px-8 py-6">
          {children}
        </main>

      </body>
    </html>
  )
}

