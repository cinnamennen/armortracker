import "@/styles/globals.css"
import { ReactNode } from "react"
import { Metadata } from "next"
import Head from "next/head"
import { Providers } from "@/store/Provider"

import { siteConfig } from "@/config/site"
import { fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { Toaster } from "@/components/ui/toaster"
import { Analytics } from "@/components/analytics"
import { SiteHeader } from "@/components/site-header"
import { StyleSwitcher } from "@/components/style-switcher"
import { ThemeProvider } from "@/components/theme-provider"

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Zelda",
    "TotK",
    "Tears of the Kingdom",
    "Armor",
    "Tracker",
    "BotW",
    "Breath of the Wild",
  ],
  authors: [
    {
      name: "cinnamennen",
      url: "https://totkarmortracker.com",
    },
  ],
  creator: "cinnamennen",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
}

interface RootLayoutProps {
  children: ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <Head>
          <title>{siteConfig.name}</title>
        </Head>
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            fontSans.variable
          )}
        >
          <Providers>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              <div className="relative flex min-h-screen flex-col">
                <SiteHeader />
                <div className="container mb-4 flex-1">{children}</div>
              </div>
            </ThemeProvider>
            <StyleSwitcher />
            <Analytics />
            <Toaster />
          </Providers>
        </body>
      </html>
    </>
  )
}
