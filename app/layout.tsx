import type React from "react"
import type { Metadata } from "next"
import { Inter, Lora, JetBrains_Mono } from "next/font/google"
import "./globals.css"
import CustomCursor from "@/components/CustomCursor"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
})

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
})

export const metadata: Metadata = {
  title: "Stagira Labs",
  description: "Commoditizing R&D",
  icons: {
    icon: "/favicon.ico",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${lora.variable} ${jetbrains.variable} scroll-smooth`}>
      <body className="bg-papyrus-white text-stagira-indigo font-inter">
        <CustomCursor />
        {children}
      </body>
    </html>
  )
}
