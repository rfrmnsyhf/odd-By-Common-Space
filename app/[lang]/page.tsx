import type { Metadata } from 'next';
import { locales, type Locale } from '@/lib/config';
import { Hero } from '@/components/sections/Hero';
import { BrandStatement } from '@/components/sections/BrandStatement';
import { SignatureDrinks } from '@/components/sections/SignatureDrinks';
import { Food } from '@/components/sections/Food';
import { TheSpace } from '@/components/sections/TheSpace';
import { Reviews } from '@/components/sections/Reviews';
import { Location } from '@/components/sections/Location';

export const runtime = 'edge';

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export const metadata: Metadata = {
  title: 'odd by Common Space | Coffee, Food & Space in Batam',
  description:
    'Specialty coffee, contemporary comfort food, and a space made for lingering in Greenland, Batam.',
};

export default function HomePage({ params }: { params: { lang: Locale } }) {
  const { lang } = params;
  return (
    <>
      <Hero lang={lang} />
      <BrandStatement lang={lang} />
      <SignatureDrinks lang={lang} />
      <Food lang={lang} />
      <TheSpace lang={lang} />
      <Reviews lang={lang} />
      <Location lang={lang} />
    </>
  );
}
