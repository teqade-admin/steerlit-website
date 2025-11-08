import type React from "react"
import type { Metadata } from "next"
import { Inter, Roboto_Mono } from 'next/font/google'
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Inter({ subsets: ["latin"] })
const _geistMono = Roboto_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Steerlit - Coming Soon | Car Intelligence & Health Monitoring",
  description:
    "Experience the future of car intelligence. Real-time health monitoring, AI-powered insights, and comprehensive vehicle management.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
