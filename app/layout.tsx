import type { Metadata, Viewport } from 'next';
import { Inter, Instrument_Serif, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  display: 'swap',
  weight: '400',
  style: ['normal', 'italic'],
  variable: '--font-instrument-serif',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500'],
  variable: '--font-jetbrains-mono',
});

export const metadata: Metadata = {
  title: {
    default: 'odd by Common Space | Coffee, Food & Space in Batam',
    template: '%s | odd by Common Space',
  },
  description:
    'Specialty coffee, contemporary comfort food, and a space made for lingering in Greenland, Batam.',
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? 'https://oddbycommonspace.com'
  ),
  openGraph: {
    type: 'website',
    title: 'odd by Common Space | Coffee, Food & Space in Batam',
    description:
      'Specialty coffee, contemporary comfort food, and a space made for lingering in Greenland, Batam.',
    images: ['/images/og.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'odd by Common Space | Coffee, Food & Space in Batam',
    description:
      'Specialty coffee, contemporary comfort food, and a space made for lingering in Greenland, Batam.',
  },
  alternates: {
    canonical: '/',
    languages: {
      en: '/en',
      id: '/id',
    },
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#F3F0E9',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable}`}
    >
      <body className="bg-offwhite text-charcoal antialiased">{children}</body>
    </html>
  );
}
