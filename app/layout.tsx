import type { Metadata } from "next"
import "./globals.css"

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
      <body className="antialiased min-h-screen bg-background">
        {children}
      </body>
    </html>
  )
}
