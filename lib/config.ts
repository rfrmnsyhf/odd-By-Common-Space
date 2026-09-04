// Single source of truth for site-wide config.
// Edit values here to update the whole site.

export const config = {
  name: 'odd by Common Space',
  shortName: 'ODD',
  legalName: 'odd by Common Space',
  tagline: {
    en: 'A LITTLE ODD. A LOT TO STAY FOR.',
    id: 'SEDIKIT ODD. BANYAK ALASAN UNTUK TINGGAL.',
  },
  description: {
    en: 'Specialty coffee, contemporary comfort food, and a space made for lingering in Greenland, Batam.',
    id: 'Specialty coffee, comfort food kontemporer, dan ruang yang dirancang untuk berlama-lama di Greenland, Batam.',
  },
  address: {
    street: 'Jl. Ruko Greenland, Jl. Gurindam No.4 Blok T',
    locality: 'Tlk. Tering, Batam Kota',
    region: 'Kepulauan Riau',
    postalCode: '29444',
    country: 'ID',
  },
  hours: {
    // Single shift for v1. Owner should confirm.
    open: '10:00',
    close: '22:00',
    // IANA tz for Indonesia
    timezone: 'Asia/Jakarta',
  },
  // No phone number — brand owner has not provided one.
  phone: null,
  social: {
    instagram: 'https://www.instagram.com/oddbycs/',
    linktree: null,
  },
  // Google Maps link — owner can replace with a precise share URL later.
  googleMapsUrl:
    'https://www.google.com/maps/search/?api=1&query=odd+by+Common+Space+Greenland+Batam',
  googleMapsEmbed:
    'https://www.google.com/maps?q=odd+by+Common+Space+Greenland+Batam&output=embed',
  // No publicly available email for v1.
  email: null,
} as const;

export type Locale = 'en' | 'id';
export const defaultLocale: Locale = 'en';
export const locales: readonly Locale[] = ['en', 'id'] as const;
