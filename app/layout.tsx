import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/providers/theme-provider'
import { ReduxProvider } from '@/components/providers/redux-provider'
import { Toaster } from '@/components/ui/sonner'
import { Header } from '@/components/layout/header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Modern Next.js Application',
  description: 'A beautiful and fully featured Next.js application',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={inter.className}>
        <ReduxProvider>
          <ThemeProvider 
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div className="relative flex min-h-screen flex-col">
              <Header />
              <main className="flex-1">{children}</main>
            </div>
            <Toaster />
          </ThemeProvider>
        </ReduxProvider>
      </body>
    </html>
  )
}