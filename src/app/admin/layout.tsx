"use client"
import { NextUIProvider } from '@nextui-org/react';
import localFont from 'next/font/local'
const fontSahel = localFont({ src: "../../fonts/Sahel.woff", variable: "--sahel-font" })
import "./globals.css"
import SideBar from '@/components/Admin/SideBar/SideBar';
import { usePathname } from 'next/navigation';
export default function LocaleLayout({ children }: { children: React.ReactNode }) {
    const path = usePathname()
    return (
        <html lang={"en"} dir="ltr">
            <body className={`${fontSahel.variable}`}>
                <NextUIProvider>
                    <main className='w-full p-5'>
                        {path !== "/admin/login" ? <SideBar /> : null}
                        {children}
                    </main>
                </NextUIProvider>
            </body>
        </html>
    );
}