// JSON-LD builders for LocalBusiness + Menu + OpeningHours + PostalAddress.
// No fabricated phone or coordinates — schema validates cleanly without them.

import { config, type Locale } from './config';
import { menu } from './menu';

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://oddbycommonspace.com';

export function localBusinessJsonLd(locale: Locale) {
  const dict = locale === 'id'
    ? {
        name: config.name,
        description: config.description.id,
      }
    : {
        name: config.name,
        description: config.description.en,
      };

  return {
    '@context': 'https://schema.org',
    '@type': ['CafeOrCoffeeShop', 'Restaurant'],
    '@id': `${SITE_URL}/#business`,
    name: dict.name,
    description: dict.description,
    url: `${SITE_URL}/${locale}`,
    inLanguage: locale === 'id' ? 'id-ID' : 'en',
    image: `${SITE_URL}/images/og.jpg`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: config.address.street,
      addressLocality: config.address.locality,
      addressRegion: config.address.region,
      postalCode: config.address.postalCode,
      addressCountry: config.address.country,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday',
        ],
        opens: config.hours.open,
        closes: config.hours.close,
      },
    ],
    ...(config.social.instagram
      ? { sameAs: [config.social.instagram] }
      : {}),
    servesCuisine: ['Coffee', 'Indonesian', 'Asian Fusion', 'Pasta'],
    priceRange: 'Rp 25.000 — Rp 100.000',
    acceptsReservations: 'False',
  };
}

export function menuJsonLd(locale: Locale) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Menu',
    name: locale === 'id' ? 'Menu Odd by Common Space' : 'odd by Common Space Menu',
    inLanguage: locale === 'id' ? 'id-ID' : 'en',
    hasMenuSection: menu.map((cat) => ({
      '@type': 'MenuSection',
      name: cat.key,
      hasMenuItem: cat.items.map((it) => ({
        '@type': 'MenuItem',
        name: it.name,
        description: it.desc,
        offers: {
          '@type': 'Offer',
          price: it.price,
          priceCurrency: 'IDR',
        },
      })),
    })),
  };
}
