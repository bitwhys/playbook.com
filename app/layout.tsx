import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'
import '@fontsource/bluu-next'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: {
    default: 'Playbook — Explorations in statistics',
    template: '%s | Playbook',
  },
  description:
    'Exploring sports and politics through statistics, thoughtful analysis, and interactive tools.',
}

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full">
        <a
          href="#main-content"
          className="sr-only fixed top-3 left-3 z-50 bg-black-a12 px-4 py-3 text-white-a12 focus:not-sr-only"
        >
          Skip to content
        </a>

        <ThemeProvider
          attribute="class"
          disableTransitionOnChange
          enableSystem
          defaultTheme="light"
        >
          {/* .root allows base-ui portoled components to render always on top */}
          <div className="root mx-auto flex min-h-svh site-frame max-w-400 flex-col border-x border-line">
            <Header />
            <main
              id="main-content"
              tabIndex={-1}
              className="flex min-w-0 flex-1 flex-col focus:outline-none"
            >
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
