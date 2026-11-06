import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import "@fontsource/bluu-next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Playbook — Explorations in statistics",
    template: "%s | Playbook",
  },
  description:
    "Exploring sports and politics through statistics, thoughtful analysis, and interactive tools.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full font-sans">
        <a
          href="#main-content"
          className="sr-only fixed top-3 left-3 z-50 bg-foreground px-4 py-3 text-background focus:not-sr-only"
        >
          Skip to content
        </a>
        {/* .root allows base-ui portoled components to render always on top */}

        <ThemeProvider
          attribute='class'
          disableTransitionOnChange
          enableSystem
          defaultTheme="light"
        >
          <div className="site-frame mx-auto flex min-h-svh max-w-[1600px] flex-col border-x border-line root">
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
  );
}
