import { notFound } from 'next/navigation';
import type { Metadata, Viewport } from 'next';
import { locales, type Locale } from '@/lib/config';
import { getDict } from '@/lib/i18n';
import { localBusinessJsonLd } from '@/lib/seo';
import { StickyNav } from '@/components/nav/StickyNav';
import { Footer } from '@/components/sections/Footer';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang: rawLang } = await params;
  const lang = rawLang as Locale;
  if (!locales.includes(lang)) return {};
  const dict = getDict(lang);
  const titleBase =
    lang === 'id'
      ? 'odd by Common Space | Kopi, Makanan & Ruang di Batam'
      : 'odd by Common Space | Coffee, Food & Space in Batam';
  const description =
    lang === 'id'
      ? 'Specialty coffee, comfort food kontemporer, dan ruang untuk berlama-lama di Greenland, Batam.'
      : 'Specialty coffee, contemporary comfort food, and a space made for lingering in Greenland, Batam.';
  return {
    title: titleBase,
    description,
    alternates: {
      canonical: `/${lang}`,
      languages: {
        en: '/en',
        id: '/id',
      },
    },
    openGraph: {
      title: titleBase,
      description,
      locale: lang === 'id' ? 'id_ID' : 'en_US',
      type: 'website',
      url: `/${lang}`,
    },
  };
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#F3F0E9',
};

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang: rawLang } = await params;
  const lang = rawLang as Locale;
  if (!locales.includes(lang)) notFound();

  const businessJsonLd = localBusinessJsonLd(lang);

  return (
    <>
      <script
        type="application/ld+json"
        // Server-rendered, never user-influenced.
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessJsonLd) }}
      />
      <StickyNav lang={lang} />
      <main className="min-h-screen pt-0">{children}</main>
      <Footer lang={lang} />
    </>
  );
}
