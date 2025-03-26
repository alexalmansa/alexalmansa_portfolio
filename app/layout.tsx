import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Alex Almansa - DevOps & Cloud Engineer",
  description: "Portfolio website for Alex Almansa, DevOps and Cloud Engineer specializing in AWS, GCP, and Kubernetes.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased min-h-screen bg-background`}>
        {children}
      </body>
    </html>
  )
}



import './globals.css'