// i18n dictionary. Typed keys, no runtime surprises.
// Add a new key here → TypeScript flags every callsite that needs to handle it.

import type { Locale } from './config';

type Dict = {
  nav: {
    menu: string;
    space: string;
    about: string;
    visit: string;
    orderCta: string; // legacy from brief; unused for v1 (no online order)
    directions: string;
  };
  hero: {
    eyebrow: string;
    headline: string;
    sub: string;
    location: string;
    ctaMenu: string;
    ctaDirections: string;
  };
  brand: {
    eyebrow: string;
    headline: string;
    body: string;
    pillars: { index: string; title: string; body: string }[];
  };
  signature: {
    eyebrow: string;
    headline: string;
    body: string;
  };
  food: {
    eyebrow: string;
    headline: string;
    body: string;
    categories: string[];
    cta: string;
  };
  space: {
    eyebrow: string;
    headline: string;
    body: string;
    zones: { title: string; body: string }[];
    chooseSubhead: string;
  };
  reviews: {
    eyebrow: string;
    headline: string;
    rating: string;
    count: string;
    quote: string;
    cta: string;
  };
  visit: {
    eyebrow: string;
    headline: string;
    address: string;
    hours: string;
    hoursValue: string;
    cta: string;
    openInMaps: string;
  };
  about: {
    eyebrow: string;
    headline: string;
    body: string;
    pillars: { title: string; body: string }[];
  };
  footer: {
    tagline: string;
    location: string;
    addressLabel: string;
    hoursLabel: string;
    connect: string;
    explore: string;
    rights: string;
  };
  menuPage: {
    title: string;
    intro: string;
  };
  categories: {
    'specialty-coffee': string;
    'non-coffee': string;
    starter: string;
    snacks: string;
    pasta: string;
    rice: string;
    poultry: string;
    'burger-sandwich': string;
    'add-ons': string;
  };
  lang: {
    en: string;
    id: string;
    switchTo: string;
  };
};

const en: Dict = {
  nav: {
    menu: 'MENU',
    space: 'SPACE',
    about: 'ABOUT',
    visit: 'VISIT',
    orderCta: 'ORDER',
    directions: 'GET DIRECTIONS',
  },
  hero: {
    eyebrow: 'ODD BY COMMON SPACE',
    headline: 'A LITTLE ODD.\nA LOT TO STAY FOR.',
    sub: 'Specialty coffee, contemporary comfort food, and a space made for lingering in Greenland, Batam.',
    location: 'GREENLAND · BATAM',
    ctaMenu: 'VIEW MENU',
    ctaDirections: 'GET DIRECTIONS',
  },
  brand: {
    eyebrow: 'COMMON SPACE, UNCOMMON DETAILS.',
    headline:
      'odd by Common Space brings together specialty coffee, contemporary comfort food, and a modern space designed for everyday moments.',
    body: '',
    pillars: [
      {
        index: '01',
        title: 'SPECIALTY COFFEE',
        body: 'Single origins, signature drinks, and house blends — pulled with care.',
      },
      {
        index: '02',
        title: 'CASUAL DINING',
        body: 'Comfort food with personality. Familiar flavors, slightly unexpected.',
      },
      {
        index: '03',
        title: 'COMMON SPACE',
        body: 'Two floors. Indoor, outdoor. Made for coffee, meals, and staying longer.',
      },
    ],
  },
  signature: {
    eyebrow: 'ODD DRINKS',
    headline: 'Drinks named a little differently.',
    body: 'House signatures, built on cold brew, espresso, and a few quiet experiments.',
  },
  food: {
    eyebrow: 'THE MENU',
    headline: 'FOOD WITH A LITTLE ODDNESS.',
    body: 'From kimchi carbonara and mala aglio olio to truffle gyudon and pan-seared duck, our menu keeps familiar comfort food slightly unexpected.',
    categories: ['STARTER', 'PASTA', 'RICE', 'POULTRY', 'SNACKS'],
    cta: 'VIEW FULL MENU',
  },
  space: {
    eyebrow: 'THE SPACE',
    headline: 'FIND YOUR SPACE.',
    body: 'Two floors, indoor and outdoor, set up for everything from a quick coffee to a few hours with your laptop.',
    zones: [
      { title: 'INDOOR', body: 'For dining and casual meetings.' },
      { title: 'UPSTAIRS', body: 'For longer stays and groups.' },
      { title: 'OUTDOOR', body: 'For open-air coffee and conversations.' },
    ],
    chooseSubhead: 'WORK · MEET · HANG',
  },
  reviews: {
    eyebrow: 'REVIEWS',
    headline: 'PEOPLE SEEM TO LIKE IT HERE.',
    rating: '4.8',
    count: '201 REVIEWS',
    quote:
      '"Tempatnya bagus, banyak spot foto, makanannya juga ok dan suasana nyaman."',
    cta: 'READ ALL REVIEWS',
  },
  visit: {
    eyebrow: 'VISIT',
    headline: 'COME FIND US.',
    address: 'Jl. Ruko Greenland, Jl. Gurindam No.4 Blok T, Tlk. Tering, Batam Kota, Kepulauan Riau 29444',
    hours: 'OPEN TODAY',
    hoursValue: '10:00 — 22:00',
    cta: 'GET DIRECTIONS',
    openInMaps: 'OPEN IN GOOGLE MAPS',
  },
  about: {
    eyebrow: 'ABOUT',
    headline: 'ODD BY COMMON SPACE',
    body: 'A contemporary cafe in Greenland, Batam, bringing together specialty coffee, approachable food, and a space made for people to stay a little longer.',
    pillars: [
      { title: 'COFFEE', body: 'Specialty-grade beans, signature drinks, and the classics done well.' },
      { title: 'FOOD', body: 'Comfort food with a contemporary touch — Asian influence, generous plates.' },
      { title: 'SPACE', body: 'Two floors, indoor and outdoor. A common space for working, meeting, lingering.' },
      { title: 'COMMUNITY', body: 'A place where neighbours, regulars, and first-timers can sit at the same table.' },
    ],
  },
  footer: {
    tagline: 'Coffee · Food · Space',
    location: 'Greenland, Batam · Indonesia',
    addressLabel: 'Address',
    hoursLabel: 'Hours',
    connect: 'CONNECT',
    explore: 'EXPLORE',
    rights: '© 2026 ODD BY COMMON SPACE',
  },
  menuPage: {
    title: 'THE MENU',
    intro: 'Curated by our team. Prices in IDR. All drinks available iced or hot unless noted.',
  },
  categories: {
    'specialty-coffee': 'Specialty Coffee',
    'non-coffee': 'Non-Coffee',
    starter: 'Starter',
    snacks: 'Snacks',
    pasta: 'Pasta',
    rice: 'Rice',
    poultry: 'Poultry',
    'burger-sandwich': 'Burger & Sandwich',
    'add-ons': 'Add-ons',
  },
  lang: {
    en: 'EN',
    id: 'ID',
    switchTo: 'Switch language',
  },
};

const id: Dict = {
  nav: {
    menu: 'MENU',
    space: 'RUANG',
    about: 'TENTANG',
    visit: 'KUNJUNGI',
    orderCta: 'PESAN',
    directions: 'PETA ARAH',
  },
  hero: {
    eyebrow: 'ODD BY COMMON SPACE',
    headline: 'SEDIKIT ODD.\nBANYAK ALASAN UNTUK TINGGAL.',
    sub: 'Specialty coffee, comfort food kontemporer, dan ruang yang dirancang untuk berlama-lama di Greenland, Batam.',
    location: 'GREENLAND · BATAM',
    ctaMenu: 'LIHAT MENU',
    ctaDirections: 'PETA ARAH',
  },
  brand: {
    eyebrow: 'COMMON SPACE, DETAIL YANG TIDAK BIASA.',
    headline:
      'odd by Common Space menyatukan specialty coffee, comfort food kontemporer, dan ruang modern untuk momen sehari-hari.',
    body: '',
    pillars: [
      {
        index: '01',
        title: 'SPECIALTY COFFEE',
        body: 'Single origin, signature drinks, dan house blend — diseduh dengan teliti.',
      },
      {
        index: '02',
        title: 'CASUAL DINING',
        body: 'Comfort food dengan karakter. Rasa yang akrab, sentuhan yang tak terduga.',
      },
      {
        index: '03',
        title: 'COMMON SPACE',
        body: 'Dua lantai. Indoor, outdoor. Untuk kopi, makan, dan berlama-lama.',
      },
    ],
  },
  signature: {
    eyebrow: 'ODD DRINKS',
    headline: 'Minuman dengan nama yang tak biasa.',
    body: 'Signature house, dibangun dari cold brew, espresso, dan sedikit eksperimen.',
  },
  food: {
    eyebrow: 'MENU',
    headline: 'MAKANAN DENGAN SENTUHAN ODD.',
    body: 'Mulai dari kimchi carbonara dan mala aglio olio hingga truffle gyudon dan pan-seared duck, comfort food kami punya sedikit kejutan.',
    categories: ['STARTER', 'PASTA', 'RICE', 'POULTRY', 'SNACKS'],
    cta: 'LIHAT SELENGKAPNYA',
  },
  space: {
    eyebrow: 'RUANG',
    headline: 'TEMUKAN RUANGMU.',
    body: 'Dua lantai, indoor dan outdoor, dirancang untuk secangkir kopi cepat hingga beberapa jam bersama laptop.',
    zones: [
      { title: 'INDOOR', body: 'Untuk makan dan meeting santai.' },
      { title: 'UPSTAIRS', body: 'Untuk tinggal lebih lama dan grup.' },
      { title: 'OUTDOOR', body: 'Untuk kopi dan obrolan di udara terbuka.' },
    ],
    chooseSubhead: 'KERJA · MEETING · SANTAI',
  },
  reviews: {
    eyebrow: 'ULASAN',
    headline: 'TAMU-TAMU KAMI TERNYATA MENIKMATINYA.',
    rating: '4.8',
    count: '201 ULASAN',
    quote:
      '"Tempatnya bagus, banyak spot foto, makanannya juga ok dan suasana nyaman."',
    cta: 'BACA SEMUA ULASAN',
  },
  visit: {
    eyebrow: 'KUNJUNGI',
    headline: 'TEMUI KAMI.',
    address: 'Jl. Ruko Greenland, Jl. Gurindam No.4 Blok T, Tlk. Tering, Batam Kota, Kepulauan Riau 29444',
    hours: 'BUKA HARI INI',
    hoursValue: '10:00 — 22:00',
    cta: 'PETA ARAH',
    openInMaps: 'BUKA DI GOOGLE MAPS',
  },
  about: {
    eyebrow: 'TENTANG',
    headline: 'ODD BY COMMON SPACE',
    body: 'Cafe kontemporer di Greenland, Batam, menyatukan specialty coffee, makanan yang mudah didekati, dan ruang yang dibuat agar orang betah berlama-lama.',
    pillars: [
      { title: 'COFFEE', body: 'Biji specialty, signature drinks, dan klasik yang dibuat serius.' },
      { title: 'FOOD', body: 'Comfort food dengan sentuhan kontemporer — pengaruh Asia, porsi yang ramah.' },
      { title: 'SPACE', body: 'Dua lantai, indoor dan outdoor. Common space untuk kerja, meeting, dan berlama-lama.' },
      { title: 'COMMUNITY', body: 'Tempat di mana tetangga, langganan, dan pengunjung pertama bisa duduk di meja yang sama.' },
    ],
  },
  footer: {
    tagline: 'Kopi · Makanan · Ruang',
    location: 'Greenland, Batam · Indonesia',
    addressLabel: 'Alamat',
    hoursLabel: 'Jam',
    connect: 'TERHUBUNG',
    explore: 'JELAJAHI',
    rights: '© 2026 ODD BY COMMON SPACE',
  },
  menuPage: {
    title: 'MENU',
    intro: 'Pilihan tim kami. Harga dalam IDR. Semua minuman tersedia dingin atau panas kecuali ditandai.',
  },
  categories: {
    'specialty-coffee': 'Specialty Coffee',
    'non-coffee': 'Non-Coffee',
    starter: 'Starter',
    snacks: 'Snacks',
    pasta: 'Pasta',
    rice: 'Rice',
    poultry: 'Poultry',
    'burger-sandwich': 'Burger & Sandwich',
    'add-ons': 'Add-ons',
  },
  lang: {
    en: 'EN',
    id: 'ID',
    switchTo: 'Ganti bahasa',
  },
};

const dicts: Record<Locale, Dict> = { en, id };

export function getDict(locale: Locale): Dict {
  return dicts[locale];
}
