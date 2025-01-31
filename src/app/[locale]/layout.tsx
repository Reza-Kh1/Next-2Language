import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import Footer from '@/components/Footer/Footer';
import LayoutHeader from '@/components/Header/LayoutHeader';
import { NextUIProvider } from '@nextui-org/react';
import localFont from 'next/font/local'
const fontSahel = localFont({ src: "../../fonts/Sahel.woff", variable: "--sahel-font" })
import "./globals.css"
export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const { locale } = await params
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }
  const messages = await getMessages();
  return (
    <html lang={locale} dir={locale === "fa" ? "rtl" : "ltr"}>
      <body className={`${fontSahel.variable} dark ${locale === "fa" ? "rtl" : "ltr"}`}>
        <NextIntlClientProvider messages={messages}>
          <NextUIProvider>
            <LayoutHeader />
            {children}
            <Footer />
          </NextUIProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}