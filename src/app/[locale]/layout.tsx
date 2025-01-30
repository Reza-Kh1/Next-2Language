import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import "./globals.css"
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import LayoutHeader from '../components/Header/LayoutHeader';
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
    <html lang={locale}>
      <body className='dark'>
        <NextIntlClientProvider messages={messages}>
          <LayoutHeader />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}