import "./globals.css";
import PageBackground from '@/app/components/layout/PageBackground'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    default: 'Thovalea | Digital Service Company',
    template: '%s | Thovalea',
  },
  description:
    'Thovalea is a digital service company providing custom software development, business digitalization, and long-term technical solutions for small businesses and organizations.',
  verification: {
    google: 'dCIt0hUwPuZk3rb9tuQzIFxZJ7FL6BdtE8M_yVlaTtM', // 👈 ISI DARI GOOGLE
  },
  keywords: [
    'Thovalea',
    'digital service company',
    'software development',
    'custom software',
    'business digitalization',
    'IT services',
    'software house',
  ],
  authors: [{ name: 'Thovalea' }],
  creator: 'Thovalea',
  metadataBase: new URL('http://thovalea.com'), // ganti sesuai domain
  openGraph: {
    title: 'Thovalea | Digital Service Company',
    description:
      'Custom software development and digital solutions for growing businesses.',
    url: 'http://thovalea.com', // ganti sesuai domain
    siteName: 'Thovalea',
    images: [
      {
        url: '/og-image.png', // nanti kita bahas
        width: 1200,
        height: 630,
        alt: 'Thovalea',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
  manifest: '/pavicon/manifest.json',
  icons: {
    icon: [
      { url: '/pavicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/pavicon/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [
      { url: '/pavicon/apple-icon-180x180.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/pavicon/favicon.ico',
  },
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-slate-100">
        <PageBackground />
        {children}
      </body>
    </html>
  );
}
