import Footer from "@/components/Footer/Footer"
import { NextUIProvider } from "@nextui-org/react"
import { Toaster } from "react-hot-toast"
import "./globals.css"
import LayoutHeader from "@/components/Header/LayoutHeader"
export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <LayoutHeader />
        <NextUIProvider>
          {children}
        </NextUIProvider>
        <Footer />
        <Toaster toastOptions={{ style: { direction: "ltr" } }} />
      </body>
    </html>
  )
}
